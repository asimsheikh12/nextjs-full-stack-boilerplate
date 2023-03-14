import type { IUser } from '@/backend/interfaces';
import { UserModel } from '@/backend/models';

export class UserRepository {
  async find(where: object, attributes: string[] = []): Promise<IUser[]> {
    return UserModel.find(where).select(attributes.join(' ')).lean();
  }

  async create(values: object): Promise<IUser> {
    return UserModel.create(values);
  }

  async findOne(where: object, attributes: string[] = []): Promise<IUser> {
    return UserModel.findOne(where).select(attributes.join(' ')).lean();
  }
}

export const userRepository = new UserRepository();
