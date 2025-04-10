import { faker } from '@faker-js/faker';
import { ObjectId } from 'mongodb';

import { connect, disconnect } from './mongo';

function createRandomUser() {
  return {
    _id: new ObjectId(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 8, prefix: 'Aa1!' }),
    dob: faker.date.birthdate().toISOString().substring(0, 10),
    address: {
      street: faker.location.street(),
      number: faker.number.int({ min: 1, max: 9999 }),
      zipCode: faker.location.zipCode(),
      city: faker.location.city(),
    },
    description: faker.person.bio(),
    createdAt: faker.date.past(),
  };
}

const users = faker.helpers.multiple(createRandomUser, { count: 5 });

const seedDatabase = async () => {
  try {
    const db = await connect();
    await db.collection('users').insertMany(users);
    console.log('✅ Database successfully populated!');
    await disconnect();
  } catch (error) {
    console.error('❌ Failed to populate database:', error);
  }
};

seedDatabase();
