import { Address } from '@/interfaces';

export class User {
  name: string;
  email: string;
  dob: Date;
  address: Address;
  description?: string;
  createdAt: Date;

  constructor(
    name: string,
    email: string,
    dob: Date,
    address: Address,
    description: string,
    createdAt: Date,
  ) {
    this.name = name;
    this.email = email;
    this.dob = dob;
    this.address = address;
    this.description = description;
    this.createdAt = createdAt;
  }
}
