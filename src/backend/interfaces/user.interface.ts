import type { Document } from 'mongoose';

import type { UserRoles } from '@/backend/constants';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  photo: string;
  isVerified: boolean;
  isActive: boolean;
  role: UserRoles;
  passwordChangedAt: Date;
  resetPasswordToken: string;
  resetPasswordExpire: Date;
  createdAt: Date;
  updatedAt: Date;
}
