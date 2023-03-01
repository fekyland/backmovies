<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Backend Movieclub</h3>

<p align="center"> MovieRental is a web site,that you can Rent movies,based on MERN tecnologies,this is the part of back-end.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)


## 🧐 About <a name = "about">@Fekyland</a>

BackendMovies is an api open source that you can CRUD users and movies.
User role atributes: user,super_admin:
User can buy movies ,has their personal panel for seeing their rented movies.
Super_admin: can see de the list of user also can delete users. 


## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites

For using this api you have to get NODEJS,Expressjs


### Installing

npm install i

Our package.json has all depencies to start de program,only you have to run npm i and node will install all the de dependencies 


## 🔧 Running the API <a name = "tests"></a>

run nodemon to start the server 

type "run start nodemon" 

### Break down into end to end tests

API Endpoints
| HTTP Verbs | Endpoints                      | Action                          |
|    ---     |        ---                     |           ---                   |
|    GET     | /movies/                       | To get a list of movies         |
|    GET     | /movies/:id                    | To search movies with their id  |
|    GET     | /users/                        | Get all users |
|    GET     | /users/:id                     | Get users by id |
|   DELETE   | /users/delete/:id              | To delete users by id
|   PATCH    | /:userId/rent/:movieId:        | To rent movies,user collection been update in movies sub array |
|   POST     | /auth/login/                   | To login user by email and id   |
|   POST     | /auth/register/                | to create users                 |


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


