/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
  
export class UserPage {
    generateUserData() {
      const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
      };
      return user;
    }
}
