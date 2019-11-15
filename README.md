# CS157ATeam34
Team repository for team 34 group project 

## Getting started 

### Prerequisites
You need [**Node.js**](https://nodejs.org/en/) prior to installing.
* Install Node.js
    * On Windows, Linux and MacOS, install the latest [Node version](https://nodejs.org/en/download/) from the Node.js website. 

### Installing

With all the prerequisites installed, clone this repository with

`git clone https://github.com/CS157A-34/CS157A-Team34.git`

## To Run:
* In Command Prompt:
    1. Go to file location in your machine: `cd CS157A-Team34`
    2. `cd app/backend`
    3. Install all dependencies with `npm install` for backend 
    4. `cd client`
    5. Install all dependencies with `npm install` for front-end
    6. 

* Changing your own MySQL Password
    * After `cd app/backend`, find the app.js
    ```
    const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "******",  /* Change this to your MySQL Password
    database: "******" /* Change this to your database name
    });
    ```

* RUN the backend by `npm start` in `app/backend`
* Then RUN the React by `npm start` in `app/backend/client`

* checkout `localhost:3000` for front-end port and checkout `localhost:3001` for backend port, make sure they both working. 
    
## Team Member

*All work up to today*

[**Liam(Yang) Li**](https://github.com/liamLacuna)

[**Sachin Shah**](https://github.com/sachinio20)

[**Sharon(En-Ping) Shih**](https://github.com/SharonShih)



