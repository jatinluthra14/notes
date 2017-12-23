# Notes

[![Build Status](https://travis-ci.org/jboss-outreach/notes.svg?branch=master)](https://travis-ci.org/jboss-outreach/notes)



A node application to manage notes

## Setting up the project

1. Install [Node.js](https://nodejs.org/en)
2. Install [MongoDB](https://www.mongodb.com)
3. Clone this repository:
```bash
$ git clone https://github.com/jboss-outreach/notes
```

## Running the project locally

1. Install dependencies:
```bash
$ npm install
```

2. Start the MongoDB server *as root*:

#### For Linux,
```bash
$ sudo mongod
```

#### For Windows,
```bash
$ "C:\Program Files\MongoDB\Server\[MongoDB version]\bin\mongod.exe"
```
where [MongoDB version] is the version of the MongoDB installation you have.

3. Run the app
```bash
$ node server.js
```

