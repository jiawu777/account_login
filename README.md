# Login Page
A simple web login page

## Features
- login an account
- alert when no data 

## Built With
- express@4.18.1
- bootstrap@5.2.0
- express-handlebars@6.0.6
- mongoose@6.5.2

## Getting Started

1. check if npm & node.js is installed
2. clone the project    
    git clone `https://github.com/jiawu777/account_login.git`
3. open the file within terminal and type    `npm install`
4. set environment variable MONGODB_URI `mongodb://<username>:<password>@cluster0-shard-00-00.txrrx.mongodb.net:27017,cluster0-shard-00-01.txrrx.mongodb.net:27017,cluster0-shard-00-02.txrrx.mongodb.net:27017/?ssl=true&replicaSet=atlas-ilamrn-shard-0&authSource=admin&retryWrites=true&w=majority`
5. type in `npm run seed` in terminal to create users
6. type in `npm run dev`in terminal, if `Express is running on http://localhost:3000` & `mongoose connected!` appeared, then you're ready to start!

feat.alphacamp