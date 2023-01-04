# Canadian Chamber of Commerce Online Learning System
This Project is essentially a full stack web app that represents an online learning platform using the MERN stack. It caters for various types of users and provides a polished front end experience. It's covering the whole learning process, for both instructors and learners as well as system administrators, which includes the uploading of learning materials, the authorization, the payment procedures, reporting issues, rating and reviewing and much more.

## Motivation
The reason this project was implemented was for a university project for the course `CSEN704 - Advanced Computer Lab`. The objective was for us to learn how to properly use the Agile Methodology, to plan out a project and develop the software, learn the process of following a given set of System Requirements to develop a software, learn to research and master the use of the MERN Stack and learn how to work together as a team on GitHub.

## Build Status
The project is currently in development. We are working on the following points to have a better UI:
- The rating on a course should be rounded to the nearest tenth (for example if a rating is 3.6666666, it should simply be displayed as 3.7).
- The "Submit" button on an exercise has a bug, and sometimes displays an error message when it shouldn't.
- Font should be smaller
- Thumbnail for course preview should be bigger.

Please report to us if you experience any additional bugs.


## Code Style
We used the standard coding style in this project.  Files names start with small letters and any followig word gets capitalized (camelCase), names of components in React start with capital letters. On the backend, the code was neatly split into routers, models and controllers for every model. The frontend was organized into pages and reusable components. 

## Screenshots
![App Screenshot](https://i.paste.pics/9afab6a1276e89de41aac94caeb6364f.png)
![App Screenshot](https://i.paste.pics/e575c9847e9ed92fc8c40506c975a895.png)
![App Screenshot](https://i.paste.pics/3cc3a144a0d8d7612c8e3255041702b9.png)
![Screenshot (228)](https://user-images.githubusercontent.com/77853945/210191508-0691583b-fd3f-4780-bcfc-a551785ac81e.png)



## Tech/Framework used
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)  ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
- MongoDB 
- Express 
- React 
- NodeJs
- Youtube Data API v3
- NPM  
- React Bootstrap
- Postman  
- Git 
- GitHub
- VSCode   
- Stripe
- NodeMailer
- Mongoose
- PDFkit
- Material UI
- MDB
- React Player



## Features
- Authentication and authorization as an individual trinee, corporate trainee, instructor or admin, as well as some limited access to the system as a guest.
- Security and route protection.
- Currency Conversion based on the country you choose.
- Automation such as automatically receiving certificates by email, and automatically updating your progress if you watch a lesson or pass the course exam.
- Account recovery, as you can reset your password if you forget it by providing your email.
- Watching embedded youtube videos without having to leave the website.
- The whole payment procedure using your credit card or your wallet.
- Rating instructors/courses.
- Reviewing instructors/courses.
- Reporting issues, and following up on them.
- Profiles for trainees and instructors.
- Setting discounts with expiry dates.
- Searching and filtering through data.
- Auto-calculated durations of subtitles and courses.
- Seeing popular courses first.
- History of all your previously reported problems and their statuses.
- A neat view from the admin's POV to keep track of everything and solve issues efficiently.
- As a trainee, you can pay for a course (if you're an individual trainee) or request access to it (if you're a corporate trainee), watch the lessons, solve exercises, take notes and save them as PDF, download your certificate, keep track of your progress and rate/review a course or an instructor, report issues and request a refund if you're an individual trainee who's less than halfway through the course.
- As an instructor , you can create a course and sets its price and discount, upload the content and exercises, view your earnings for the past 3 months, see your ratings and reviews. You can also edit your information such as email and Bio, you can have unpublished courses that you are still in the process of creating, and you can close a published course to prevent further trainees from enrolling in it.
- As an admin, you can view and resolve problems, add instructors/corporate trainees/admins, set promotions on courses, approve access requests and refund requests.





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




## Code Examples

```
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
```

```
const printCertificatePDF = async (req, res) => {
  if (
    (await iTrainee.findById(req.user._id)) ||
    (await cTrainee.findById(req.user._id))
  ) {
    const stream = res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachement;filename=Cetificate.pdf",
    });

    buildCertificatePDF(
      (chunk) => stream.write(chunk),
      () => stream.end()
    );
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

function buildCertificatePDF(dataCallback, endCallback) {
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  doc
    .image("public/certificate.png", 55, 250, { fit: [500, 500] })
    //.rect(200, 30, 250, 250)
    .stroke();
  // .text("Fit", 320, 0);
  doc.end();
}

```





## Tests
To test out the project, try signing up as an Individual trainee, taking a look at all the courses and buying a course so you can have access to all the content inside the course and have the full experience.

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

