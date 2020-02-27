# Cypress 
---

E2E testing project with Cypress (JavaScript)


### Getting started

To get the frontend running locally:

- Clone the repo: https://github.com/gothinkster/react-redux-realworld-example-app
- npm install to install all dependencies
- npm start to start the local server


### Test suites

There are three test suites in which have covered the following scenarios:

- CRUD for article management
    - Add a new article
    - Remove an article
    - Edit an article
    - Read an article

- Sign into System
    - SignIn passing valid credentials

- Logout from System
    - Logout


### Running the tests

- Open cypress:
```
npm run cy:open
```

- Headless mode:
```
npm run cy:run:headless
```

- Chrome browser:
```
npm run cy:run:chrome
```

- Firefox browser:
```
npm run cy:run:firefox
```
