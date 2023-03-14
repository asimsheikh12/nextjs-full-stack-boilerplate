/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import type { Aggregate, Document, Query, Schema } from 'mongoose';

export type TWithSoftDeleted = {
  isDeleted: boolean;
  deletedAt: Date | null;
};

export interface HookNextFunction {
  (error?: Error): any;
}

type TDocument = TWithSoftDeleted & Document;

export const softDeletePlugin = (schema: Schema): void => {
  schema.add({
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  });

  const typesFindQueryMiddleware = [
    'count',
    'find',
    'findOne',
    'findOneAndDelete',
    'findOneAndRemove',
    'findOneAndUpdate',
    'update',
    'updateOne',
    'updateMany',
  ];

  const setDocumentIsDeleted = async (doc: TDocument) => {
    doc.isDeleted = true;
    doc.deletedAt = new Date();
    doc.$isDeleted(true);
    await doc.save();
  };

  const excludeInFindQueriesIsDeleted = async function (
    this: Query<any, TDocument, any, any>,
    next: HookNextFunction
  ) {
    this.where({ isDeleted: false });
    next();
  };

  const excludeInDeletedInAggregateMiddleware = async function (
    this: Aggregate<TDocument>,
    next: HookNextFunction
  ) {
    this.pipeline().unshift({ $match: { isDeleted: false } });
    next();
  };

  schema.pre(
    'remove',
    async function (this: TDocument, next: HookNextFunction) {
      await setDocumentIsDeleted(this);
      next();
    }
  );

  typesFindQueryMiddleware.forEach((type: any) => {
    schema.pre(type, excludeInFindQueriesIsDeleted);
  });

  schema.pre('aggregate', excludeInDeletedInAggregateMiddleware);
};
