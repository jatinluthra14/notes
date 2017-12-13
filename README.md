# Notes

A node application to manage notes

## Prerequisites

### Install [Nodejs](https://nodejs.org/en)

Install Node.js for running the project.
You can use nvm to install Node.js
Here is the [Guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04) for it.

### Install [MongoDB](https://www.mongodb.com)

Install MongoDB forstoring the notes.
You can Install it using the following [Guide](https://www.howtoforge.com/tutorial/install-mongodb-on-ubuntu-16.04/}

### Clone the Repo

Clone the "notes" repo using git
```
git clone https://github.com/jboss-outreach/notes
```

## Run the Project

### Start MongoDB Server

 Start the MongoDb server being root
```
mongod &
```

 If you are not a root user, run
```
sudo mongod &
```

 If you have less storage space, use
```
mongod --smallfiles &
```

### Install Node.js Dependencies

Install the dependencies using npm
```
npm install
```

### Start the server
```
node server.js
```
