
# Online Learning System
This Project is essentially a fully functioning learning system with a database to store various types of users and a polished front end experience.


## Motivation
The reason this project was implemented was for a university project.
## Build Status
Currently, there are no known bugs on our application, but please report to us if you experience anything unusual 
## Code Style
Files names start with small letters
and any followig word gets capitalized.

## Tech/Framework used
JavaScript, NodeJs and React Framework
## Features
Smooth front end experience, fully functional database, fully implemented country api and currency tranfers, VISA Payments.
Being able to take notes and download them, recieve certificates by downloading or by mail, viewing videos and solving excercises.

## Installations

backend: npm install
npm install --save stripe

frontend: 
npm install
npm install --save @stripe/react-stripe-js @stripe/stripe-js
npm i mdb-react-ui-kit
npm install @react-icons/all-files --save
## API Reference

#### Creates a new admin

```http
  POST /api/admin/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username,Password` | `string` | Creates admin with parameters |

#### Get item

```http
  GET /api/courses/getMyCourseReview
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | gets course review of Ctrainee/iTrainee |


```http
  GET /api/courses/getMyProgress
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `course id`      | `string` | gets progress of trainee in his course |


```http
  POST /api/users/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Username, Password, FirstName, Lastname, Email and Gender`      | `string` | Creates a new iTrainee in our database |


```http
  POST /api/users/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username, password`      | `string` | Logs a user in if he exists |

```http
  GET /api/courses/getMyProgress
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `course id`      | `string` | gets progress of trainee in his course |

```http
  GET /api/courses/getAllCourses
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter`      | `string` | Gets All Courses |



## How to use
Open entire folder in VS code, open two terminals and navigate one to front end and the other to backend
then run the installs that were mentioned above in their respective files, then run "node server.js" in backend and "npm start" in front end, 
which should run the project on your local server. 
## Credits
YouTube have playlists for : Node, Express, React, Mongo and MERN stack in beginner level.

https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA

https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg    
         


React introduction:

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK

React Hooks -- functional components

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h

https://youtu.be/hQAHSlTtcmY

JWT authentication:

https://www.youtube.com/watch?v=mbsmsi7l3r4

https://www.youtube.com/watch?v=-RCnNyD0L-s

https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57

Using Stripe API:

https://youtu.be/1r-F3FIONl8

To be a good developer:

https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_ma_XO-GLSpL9L06ii4mAp 


## Screenshots

![App Screenshot](https://i.paste.pics/86467d6f8cc426196ba102982114c1f0.png)
![App Screenshot](https://i.paste.pics/7270464c8d67fac8eb9e09d27d824657.png)
![App Screenshot](https://i.paste.pics/6360bcbeb027a10f2652a9957e96bb74.png)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

