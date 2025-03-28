import { Address } from './Address';

export interface User {
  id: string;
  name: string;
  email: string;
  dob: Date;
  address: Address;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}
