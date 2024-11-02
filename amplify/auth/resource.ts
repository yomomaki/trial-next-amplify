import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      // ...
      callbackUrls: [
        'http://localhost:3000/login',
        'https://mywebsite.com/login'
      ],
      logoutUrls: ['http://localhost:3000/logout', 'https://mywebsite.com/logout']
    }
  },
  
  userAttributes: {
    preferredUsername: {
      mutable: true,
      required: false
    }
  }

});
