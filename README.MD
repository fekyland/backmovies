<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">agenciadeviajes</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

BackendMovies is an api open source that you can CRUD users and movies.
user role atributes: user,super_admin:
user can buy movies ,has their personal panel for seeing their rented movies.
super_admin: can see de the list of user also can delete users. 
![Screenshot](/img/agencia.png)



## 🏁 Getting Started <a name = "getting_started"></a>



### Prerequisites

For using this api you have to get NODEJS,


### Installing

npm install i

Our package.json has all depencies to start de program,only you have to run npm i and node will install all the de dependencies 


## 🔧 Running the API <a name = "tests"></a>

run nodemon to start the server 

type "run start nodemon" 

### Break down into end to end tests

API Endpoints
| HTTP Verbs | Endpoints                 | Action                          |
|    ---     |        ---                |           ---                   |
|    GET     | /movies/                  | To get a list of movies         |
|    GET     | /movies/:id               | To search movies with their id  |
|   DELETE   | /delete/:id               | To delete users by id
|   PATCH    | /:userId/rent/:movieId:   | To rent movies,user collection been update in movies sub array |
|   POST     | /login/                   | To login user by email and id   |
|   POST     | /register/                | to create users                 |


## 🎈 Usage <a name="usage"></a>


type : npm run dev

put on your browser http://localhost:3000/movies/ this give you de list of movies


## ⛏️ Built Using <a name = "built_using"></a>

- [MONGODB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [MONGOOSE](https://es.reactjs.org//) - TypeScript and Node.js ORM 
- [NodeJs](https://nodejs.org/en/) - Server Environment


## ✍️ Authors <a name = "authors"></a>

- [@fekyland](https://github.com/fekyland) -  Initial work


