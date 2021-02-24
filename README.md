# Node.js error handling

## Resources

- https://www.toptal.com/nodejs/node-js-error-handling
- https://www.smashingmagazine.com/2020/08/error-handling-nodejs-error-classes/

## Requirements

- [Node.js](https://nodejs.org/en/) >= 10.22.1
- [NPM](https://www.npmjs.com/) >= 6.14.6

This project is a POC of best practices to error handling in Node.js using Express.js

## Start

Install dependencies

```
$ npm install
```

Run application

```
$ npm start
```

## How to test

Success get

```
$ curl http://localhost:3000/users/1 | jq

{
  "id": 1,
  "name": "Vini"
}
```

Failed get

```
$ curl http://localhost:3000/users/3 | jq

{
  "errors": [
    {
      "code": "UserNotFound",
      "message": "Does not found user with given id=3"
    }
  ]
}
```
