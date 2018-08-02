# Directly Training Frontend

Directly training app, is an application with **webpack**, **react** and **redux** to make additions, deletions, and modifications from users.

## Prerequisites

## Ubuntu

**install npm version, node >= 8**
  * `sudo apt-get update`
  * `sudo apt-get install nodejs`
  * `sudo apt-get install npm`

Also, you can use [nvm node version management tool](https://github.com/creationix/nvm)

**install yarn latest**
  * `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
  * `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
  * `sudo apt-get update && sudo apt-get install yarn`

## Windows

  * [Install npm](http://blog.teamtreehouse.com/install-node-js-npm-windows)
  * [Install yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable)

## Start application
  - Install packages `npm install` or `yarn install`
  - Run app: `npm start` or `yarn start`
  - By default, the application starts on http://localhost:8080
  - The backend is integrated with the API [MS BE with heroku](https://ms-labs-be.herokuapp.com) you can check the repo here: [MS BE Repository](https://github.com/MS-React/backend)
  - You can point to the local backend with the file **app/constants.js**

  >For now don't commit this **.env.development** or **constants.js** file changes

### Commands

**install packages**
```ssh
npm install
```
**start app**
```ssh
npm start
```
### Dev tools

**run tests**
```ssh
npm test
```

**run test with watch**
```ssh
test:dev
```

**linter rules**
```ssh
npm run lint
```
**sass rules**
```ssh
npm run sass-lint
```


# Feature redux saga

## Replacing Redux Thunk with Sagas

The goal of this Spike is to continue using Redux but with the Sagas middleware instead of the current Thunk implementation, In order to take advantage of its more effective side-effects management.

## What are Sagas

Sagas are a design pattern for distributed transactions, a saga manages processes that need to be executed in a transactional way, maintaining the state of the execution and compensating failed processes.

Redux Sagas allows you to intercept Redux Actions and perform modify your data or trigger additional queries using Side-Effects.

## Why Using Sagas

- It uses ES6 generators which makes asynchronous flow easier to write and - understand.
- It is a more efficient alternative to redux thunk callbacks style.
- It is easier to test with little to no mocking.

## How it works

A Redux Saga is implemented as a middleware in order to coordinate and trigger Async actions or Side-Effects, it accomplishes this by using ES6 generators.

## Generators

Generators are functions that can be paused and resumed, instead of executing all the statements of the function at once.

A basic generator
```javascript
function* myGenerator() {
    const first = yield 'first yield value';
    const second = yield 'second yield value';
    return 'third returned value';
}
```


When you invoke a generator function, it will return an Iterator object. With each call of the Iterator’s next() method, the generator’s body will be executed until the next yield statement and then pause.

```javascript
const it = myGenerator();
console.log(it.next()); // { value: 'first yield value', done: false }
console.log(it.next()); // { value: second yield value', done: false }
console.log(it.next()); // { value: undefined, done: true}
```

This can make async code easier to write and reason about. For instance, instead of doing the following

```javascript
fetch(url).then(value => {
    console.log(value);
});
```

With generators, we could do the following

```javascript
const value = yield fetch(url);
console.log(value);
```
