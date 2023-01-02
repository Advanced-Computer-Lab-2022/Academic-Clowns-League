
# Online Learning System
This Project is essentially a fully functioning learning system with a database to store various types of users and a polished front end experience. It's a full Online learning platform, handling the whole learning process, which includes the uploading of learning materials, the authorization, the payment procedures, reporting issues, rating and reviewing and much more.


## Motivation
The reason this project was implemented was for a university project. The objective was to learn how to properly use the Agile Methodology, to plan out a project and develop the software, learn the process of following a given set of System Requirements to develop a software, learn to research and master the use of the MERN Stack and learn how to work together as a team on GitHub.



## Build Status
Currently, there are no known bugs on our application, but please report to us if you experience anything unusual.

## Code Style
The standard style is followed in this project. Files names start with small letters and any followig word gets capitalized (camelCase), names of components in React start with capital letters. On the backend, the code was neatly split into routers, models and controllers for every model. The frontend was organized into pages and reusable components. 

## Tech/Framework used
The MERN Stack which consists of MongoDB (the database), Express, React and NodeJs.


## Features
Smooth front end experience, fully functional database, fully implemented country API and currency tranfers, VISA Payments, integration with the Youtube player API,  watching videos without leaving the website, being able to take notes and download them, automation and receiving certificates by email, practicing and solving exercises, rating and reviewing instructors and courses as well as reporting any possible issues.

## Installations
Libraries/packages used are in the package.json file.
To test out our project, download the file, open a terminal, cd into the backend folder and run npm install followed by nodemon server.js.
Then in the frontend directory run npm install followed by npm start.

backend:
npm install
nodemon server.js

frontend: 
npm install
npm start

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
then run the installs that were mentioned above in their respective files, then run "nodemon server.js" in backend and "npm start" in front end, 
which should run the project on your local server and the website should be fully functional. 

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



## Screenshots

![App Screenshot](https://i.paste.pics/9afab6a1276e89de41aac94caeb6364f.png)
![App Screenshot](https://i.paste.pics/e575c9847e9ed92fc8c40506c975a895.png)
![App Screenshot](https://i.paste.pics/3cc3a144a0d8d7612c8e3255041702b9.png)

## Code Examples
[
const getAllCourses = async (req, res) => {
  const courses = await Course.aggregate([
    {
      $lookup: {
        from: "instructors",
        localField: "instructor",
        foreignField: "_id",
        as: "instructorData",
      },
    },
    {
      $unwind: "$instructorData",
    },
    {
      $match: { $and: [ {published: true}, {open: true} ]}
    }
  ]);
  res.status(200).json(courses);
};
]



[
const updateCourse = async (req, res) => {
  if (await Instructor.findById(req.user._id)) {
    const id = req.query.id;

    const course = await Course.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    res.status(200).json(course);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

]





## Tests
To test out the project, try signing up as an Individual trainee, taking a look at all the courses and buying a course so you can have access to all the content inside the course and have the full experience.

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

