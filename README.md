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
![App Screenshot](https://i.paste.pics/88b49744c5fdb3933d654d848cd4bf9a.png)
![App Screenshot](https://i.paste.pics/2b87438b7ec42baf211173e2af3f9323.png)
![App Screenshot](https://i.paste.pics/b6cb4f622348a91153645c20bff9be2c.png)
![App Screenshot](https://i.paste.pics/da4f807c643b5e5545bbb4935def2b1c.png)
![App Screenshot](https://i.paste.pics/533b9dde4942c92541b04be1bc245dd2.png)
![App Screenshot](https://i.paste.pics/1d73853037f60a8eb40b8fe4301a9e30.png)
![App Screenshot](https://i.paste.pics/8bcade8b113d6c04af16af69173ce1f5.png)
![App Screenshot](https://i.paste.pics/5e286bd4151fff963466da27f9ea7d3b.png)
![App Screenshot](https://i.paste.pics/7be5003ca27604357c42f9b84229038e.png)
![App Screenshot](https://i.paste.pics/a7b3c06cbf6d2782df0c9197e4c5b394.png)
![App Screenshot](https://i.paste.pics/69229aa7c095458105f72f21453415bd.png)
![App Screenshot](https://i.paste.pics/a2f5125e248ad18b2f7efcb4c3973966.png)
![App Screenshot](https://i.paste.pics/f7606dd64dd116a49ca1e17850166779.png)
![App Screenshot](https://i.paste.pics/4dbf3ef055934ebf0a4fc63920953bc2.png)
![App Screenshot](https://i.paste.pics/49efe68cf17c4f12d53391a0ee8b6d5f.png)
![App Screenshot](https://i.paste.pics/f669067ddd1d9d6db4f3b48057213b82.png)
![Screenshot (228)](https://user-images.githubusercontent.com/77853945/210191508-0691583b-fd3f-4780-bcfc-a551785ac81e.png)



## Tech/Framework used
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)  ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
- MongoDB 
- Express 
- React 
- NodeJs
- JWT/JSON Web Token
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


## Code Examples

```js
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

```js
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


```js
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

```

```js
const getCourse = async (req, res) => {
  if (await Instructor.findById(req.user._id)) {
    const course = await Course.findOne({ _id: req.query.id });
    res.status(200).json(course);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

```


```js
const addCourseExercise = async (req, res) => {
  if (await Instructor.findById(req.user._id)) {
    const id = req.query.id; //637a197cbc66688b3924a864
    const { question, option1, option2, option3, option4, answer } = req.body;
    const courseEx = (await Course.findById({ _id: id }).select("exercises"))
      .exercises;
    const index = courseEx.length;
    exercise = {
      question: question,
      options: [option1, option2, option3, option4],
      answer: answer,
      index: index,
    };
    courseEx.push(exercise);
    const course = await Course.findByIdAndUpdate(
      { _id: id },
      { exercises: courseEx }
    );
    res.status(200).json(course);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

```


```js
const searchAllCourses = async (req, res) => {
  const THEsearchterm = req.query.searchTerm;
  var re = new RegExp(THEsearchterm, "i");
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
      $match: {
        $or: [
          { "instructorData.name": { $regex: re } },
          { title: { $regex: re } },
          { subject: { $regex: re } },
        ],
        $and: [{published: true}, {open: true}]
      },
    },
  ]);
  res.status(200).json(courses);
};
```


```js
const addCoursePreview = async (req, res) => {
  if (await Instructor.findById(req.user._id)) {
    const id = req.query.id;
    const { videoPreviewURL } = req.body;
    const videoId = getId(videoPreviewURL);
    const embeddedLink = "//www.youtube.com/embed/" + videoId;
    const course = await Course.findByIdAndUpdate(
      { _id: id },
      { previewURL: embeddedLink },
      { new: true }
    );
    res.status(200).json(course);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

```


```js
const moneyOwed = async (req, res) => {
  if(await Instructor.findById(req.user._id)){
  const courses = await Course.find({instructor: req.user._id});
  let money = 0;

    for (let i = 0; i < courses.length; i++) {
      if (courses[i].discountApplied == true) {
        money +=
          Math.round(
            ((courses[i].price * (100 - courses[i].discount)) / 100) * 0.8
          ) * courses[i].numOfEnrolledTrainees; //assuming website takes 20%
      } else {
        money +=
          Math.round(courses[i].price * 0.8) * courses[i].numOfEnrolledTrainees;
      }
    }

    const instructor = await Instructor.findOneAndUpdate(
      { _id: req.user._id },
      { wallet: money }
    );

    res.status(200).json(instructor);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

```


```js
const editMyCourseReview = async (req, res) => {
  if (
    (await iTrainee.findById(req.user._id)) ||
    (await cTrainee.findById(req.user._id))
  ) {
    try {
      const traineeId = req.user._id; //replace by id of the loggedin person

      const id = req.query.id;
      const reviewContent = req.body.content;

      const courseReviews = (
        await Course.findById({ _id: id }).select("reviews")
      ).reviews;

      for (var i = 0; i < courseReviews.length; i++) {
        if (courseReviews[i].traineeId == traineeId) {
          courseReviews[i].content = reviewContent;
        }
      }
      const course = await Course.findByIdAndUpdate(
        { _id: id },
        { reviews: courseReviews },
        { new: true }
      );
      res.status(200).json(course);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

```




```js
const publishCourse = async (req, res) => {
  if (await Instructor.findById(req.user._id)) {
    const course = await Course.findOneAndUpdate(
      { _id: req.query.id },
      { published: true, open: true }
    );
    res.status(200).json(course);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

```



```js
const getRefundRequests = async(req, res) => {
  if(await Admin.findById(req.user._id)){
    try{
      const requests = await Request.find({requestType: "refund"})
      res.status(200).json(requests)
    }
    catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  else{
    res.status(400).json({ error: "Access Restriced" })
  }
}

```



```js
const createAdmin = async (req, res) => {
  if (await Admin.findById(req.user._id)) {
    //const { username, password } = req.body;
    const username = req.body.username;
    const password = req.body.password;
    const takenUsername = await User.findOne({ username: username });
    if (takenUsername) {
      res.status(400).json({ message: "Username is taken" });
    } else {
      try {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const admin = await Admin.create({
          username: username,
          password: encryptedPassword,
        });
        const dbUser = new User({
          username: username,
          password: encryptedPassword,
          role: "Admin",
        });
        dbUser.save();
        res.status(200).json(admin);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};

```



```js
const getRegisteredCourses = async (req, res) => {
  //get course id's from courses array of ctrainee
  if (await cTrainee.findById(req.user._id)) {
    const ctraineeCourses = (
      await cTrainee.findById({ _id: req.user._id }).select("courses")
    ).courses;
    let courses = [];
    for (i = 0; i < ctraineeCourses.length; i++) {
      let course = await Course.aggregate([
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
          $match: { _id: ctraineeCourses[i] },
        },
      ]);
      courses.push(course[0]);
    }
    res.status(200).json(courses);
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};
```




```js
const reviewInstructor = async (req, res) => {
  //get the course id as query, and review the instructor of that course
  if (
    (await iTrainee.findById(req.user._id)) ||
    (await cTrainee.findById(req.user._id))
  ) {
    try {
      const traineeId = req.user._id; //replace by id of the loggedin person
      const reviewContent = req.body.content;
      const courseId = req.query.id;
      const theCourse = await Course.findOne({ _id: courseId });
      const instructorId = theCourse.instructor;
      let theTrainee;
      theTrainee = await cTrainee.findOne({ _id: traineeId });
      if (theTrainee == null) {
        theTrainee = await iTrainee.findOne({ _id: traineeId });
      }
      if (theTrainee == null) {
        res.status(400).json({ error: "Invalid Trainee Id" });
      }
      const traineeName = theTrainee.firstname + " " + theTrainee.lastname;
      review = {
        content: reviewContent,
        traineeId: traineeId,
        traineeName: traineeName,
      };
      const instructorReviews = (
        await Instructor.findById({ _id: instructorId }).select("reviews")
      ).reviews;

      for (var i = 0; i < instructorReviews.length; i++) {
        if (instructorReviews[i].traineeId == traineeId) {
          res
            .status(400)
            .json({ error: "You already reviewed that instructor!" });
          return;
        }
      }
      instructorReviews.push(review);
      const instructor = await Instructor.findByIdAndUpdate(
        { _id: instructorId },
        { reviews: instructorReviews },
        { new: true }
      );
      res.status(200).json(instructor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};
```





```js
const payForCourse = async (req, res) => {
  if (await iTrainee.findById(req.user._id)) {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: (await calculateOrderAmount(items)) * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(400).json({ error: "Access Restriced" });
  }
};
```


```js
const applyRefund = async(req, res) => {
  if(await Admin.findById(req.user._id)){
  const request = await Request.findOne({_id: req.query.id})
  const itrainee = await iTrainee.findOne({_id: request.iTraineeId});
  const courseID = mongoose.Types.ObjectId(request.courseId);
  const course = await Course.findOne({_id: request.courseId});
  const instructor = await Instructor.findOne({_id: course.instructor})
  let refund = 0;
    if (course.discountApplied == true) {
      refund = Math.round(
        ((course.price * (100 - course.discount)) / 100) * 0.8
      );
    } else {
      refund = Math.round(course.price * 0.8);
    }
  const newWallet = parseInt(itrainee.wallet) + refund;
  const newWalletInst = parseInt(instructor.wallet) - refund;
  let coursesArray = []
    for(let i = 0; i < itrainee.courses.length; i++){
      const itraineeCourse = mongoose.Types.ObjectId(itrainee.courses[i]);
      if(itraineeCourse.toString() != courseID.toString()){
        coursesArray.push(itrainee.courses[i])
      }
    }
  const response = await iTrainee.findOneAndUpdate({_id: request.iTraineeId}, {wallet: newWallet, courses: coursesArray});
  await Course.findOneAndUpdate({_id: request.courseId}, {numOfEnrolledTrainees: course.numOfEnrolledTrainees - 1})
  await Instructor.findOneAndUpdate({_id: course.instructor}, {wallet: newWalletInst})
  await Request.deleteOne({_id: req.query.id})
  res.status(200).json(response);
  }
  else {
    res.status(400).json({ error: "Access Restriced" });
  }
};
```



```js
const getITraineeInfo = async (req, res) => {
  if (await iTrainee.findById(req.user._id)) {
    const itrainee = await iTrainee.findOne({ _id: req.user._id });
    const result = {
      name: itrainee.firstname + " " + itrainee.lastname,
      username: itrainee.username,
      email: itrainee.email,
    };
    res.status(200).json(result);
  }
};
```




```js
const reportProblem = async (req, res) => {
  const courseId = req.query.cid;
  const type = req.query.type;
  const content = req.query.content;
  const reporterId = req.user._id;
  
    try {
      const problem = await Problem.create({
        type,
        content,
        courseId,
        reporterId,
      });
  
      //status 200 to say everything is okay, and send back an obj which is the problem created
      res.status(200).json(problem);
    } catch (error) {
      res.status(400).json({ error: "please type your problem in the given field" });
    }
  };
```



## Installations

1. Clone the repository or download the code zip folder from the repository on your local machine.
2. Open a terminal and navigate to the project location.
3. Run the following commands to install all needed dependencies to run the server:
```js
> cd backend
> npm install
```
4. Go back to the root destination of your project.
5. Run the following commands to install all needed dependencies to run the frontend:
```js
> cd frontend
> npm install
```
Now you have all needed installations/dependencies to run the project. To know how to fully use the website and run the server and the frontend, check out [How To Use.](https://github.com/Advanced-Computer-Lab-2022/Academic-Clowns-League#how-to-use)





## API Reference

Here are the routes, to see how they're tested and their reponses, check out [Tests.](https://github.com/Advanced-Computer-Lab-2022/Academic-Clowns-League#tests)


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
  GET /api/users/logout
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter`      | `string` | logs out the currently logged in user and deletes their token |


```http
  PATCH /api/users/updatePassword/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | updates the currently logged in user's password when they change it |


```http
  PATCH /api/users/reset
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | sends an email to a user who forgot their password so that they can reset it and updates the password in the database |


```http
  POST /api/admin/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username, Password` | `string` | Creates admin with parameters |


```http
  POST /api/courses/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title, subject, price, discount, discountValidUntil, summary, previewURL` | `string` | allows instructor to create a course  |


```http
  PATCH /api/itrainee/iTraineeUpdatePassword
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `currentPassword, newPassword, confirmPassword` | `string` | allows logged in itrainee to change their password |


```http
  PATCH /api/ctrainee/cTraineeUpdatePassword
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `currentPassword, newPassword, confirmPassword` | `string` | allows logged in ctrainee to change their password |


```http
  POST /api/ctrainee/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstname, lastname, username, password, email, country, grades, corporate` | `string` | creates a new ctrainee with the given parameter values |


```http
  GET /api/admin/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `no input parameter` | `string` | Gets all admins |


```http
  GET /api/courses/getMyCourseReview/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | gets course review of Ctrainee/iTrainee for the course that has the same id value of the id parameter  |


```http
  GET /api/courses/getMyProgress/?courseId={courseId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `course id`      | `string` | gets progress of trainee in the course that has the same id value of the id parameter |


```http
  PATCH /api/courses/deleteMyCourseReview/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | deletes trainee's review on the course that has the same id value of the id parameter   |


```http
  PATCH /api/courses/editMyCourseReview/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | edit trainee's review on the course that has the same id value of the id parameter     |


```http
  PATCH /api/courses/reviewCourse/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | a trainee can review the course that has the same id value of the id parameter     |


```http
  PATCH /api/courses/adminAddDiscount
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | an admin can add a discount to the course that has the same id value of the id parameter     |


```http
  GET /api/courses/searchAllCourses/?searchTerm={searchTerm}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `search Term` | `string` | returns the search results from searching through all the courses     |


```http
  GET /api/courses/searchInstrCourses/?searchTerm={searchTerm}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `search Term` | `string` | returns the search results from searching through an instructor's courses     |


```http
  DELETE /api/courses/deletecourse/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | deletes the course that has the same id value of the id parameter     |


```http
  PATCH /api/courses/rate/?id={id}&rating={rating}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id, rating` | `string` | allows trainee to rate course that has the same id value as the id parameter with the rating parameter value     |


```http
  PATCH /api/courses/addCourseEx/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | allows instructor to add exercises to course that has the same id value as the id parameter     |


```http
  GET /api/courses/filtersubrat/?computer={computer}&digital={digital}&lab={lab}&zero={zero}&four={four}&eight={eight}&free={free}&sixth={sixth}&seventh={seventh}&eighth={eighth}&ninth={ninth}&tenth={tenth}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `computer, digital, lab, zero, four, eight, free, sixth, seventh, eighth, ninth, tenth` | `string` | allows guest/ctrainee/itrainee to filter through courses  |


```http
  GET /api/courses/filterinstprice/?computer={computer}&digital={digital}&lab={lab}&free={free}&sixth={sixth}&seventh={seventh}&eighth={eighth}&ninth={ninth}&tenth={tenth}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `computer, digital, lab, free, sixth, seventh, eighth, ninth, tenth` | `string` | allows instructor to filter through courses  |


```http
  GET /api/courses/instcourses
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets logged in instructor's courses  |


```http
  GET /api/courses/viewcorrectanswer
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets correct answer of an exercise  |


```http
  PATCH /api/courses/addCourseSub/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | adds subtitles to course that has the same id value as the id parameter  |


```http
  PATCH /api/courses/addCoursePreview/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | adds preview video to course that has the same id value as the id parameter |


```http
  GET /api/courses/openMyCourse/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | opens the course content of the course that has the same id value as the id parameter |


```http
  PATCH /api/courses/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | updates the course content of the course that has the same id value as the id parameter  |


```http
  GET /api/courses/moneyOwed
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets money owed to instructor from website  |


```http
  PATCH /api/courses/addNotes/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | adds notes to trainee's notes in the course that has the same id value as the id parameter |


```http
  GET /api/courses/getMyNotes/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | gets trainee's notes for the course that has the same id value as the id parameter|


```http
  GET /api/courses/printNotePDF/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | prints trainee's notes for the course that has the same id value as the id parameter as a pdf  |


```http
  GET /api/courses/printCertificatePDF
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | prints course certificate as a pdf  |


```http
  GET /api/courses/sendCertificateMail/?courseTitle={courseTitle}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `course title` | `string` | sends course certificate as a pdf via email containing the course title in the parameter |


```http
  GET /api/courses/getPopularCourses
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | sorts the courses in descending order by the number of enrolled trainees |


```http
  GET /api/courses/getCourseLength
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | sorts the courses in descending order by total hours |


```http
  GET /api/courses/getInstPub
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets published courses of logged in instructor |


```http
  GET /api/courses/getInstUnpub
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets unpublished courses of logged in instructor |


```http
  PATCH /api/courses/publishCourse/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | publishes the course that has the same id value as the id in the parameter |


```http
  PATCH /api/courses/closeCourse/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | closes the course that has the same id value as the id in the parameter |


```http
  GET /api/courses/getCourse/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | gets the course that has the same id value as the id in the parameter |


```http
  GET /api/courses/getCourseInfo/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | adds a boolean value to the the course that has the same id value as the id in the parameter depending on whether it belongs to the logged in instructor or not |


```http
  PATCH /api/instructor/reviewInstructor/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | allows trainee to review instructor of the course that has the same id value as the id in the parameter |


```http
  PATCH /api/instructor/editMyInstructorReview/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | allows trainee to edit review of instructor of the course that has the same id value as the id in the parameter |


```http
  PATCH /api/instructor/deleteMyInstructorReview/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | allows trainee to delete review of instructor of the course that has the same id value as the id in the parameter |


```http
  GET /api/instructor/getMyInstReview/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | allows trainee to get review of instructor of the course that has the same id value as the id in the parameter |


```http
  GET /api/instructor/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets all instructors |


```http
  GET /api/instructor/onlyone
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets logged in instructor |


```http
  POST /api/instructor/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | creates a new instructor |


```http
  PATCH /api/instructor/rate/?id={id}&rating={rating}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id, rating` | `string` | allows trainee to rate instructor of the course that has the same id value as the id parameter with the rating parameter value |


```http
  PATCH /api/instructor/updatePassword
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | allows logged in instructor to change their password |


```http
  GET /api/itrainee/getITraineeInfo
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets the information of the currently logged in itrainee but returns only their name, username and email |


```http
  GET /api/ctrainee/getCTraineeInfo
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets the information of the currently logged in ctrainee but returns only their name, username and email |


```http
  GET /api/itrainee/getitrainee
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets the information of the currently logged in itrainee |


```http
  GET /api/itrainee/registeredcourses
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets the courses that the currently logged in itrainee is registered in |


```http
  GET /api/ctrainee/registeredcourses
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets the courses that the currently logged in ctrainee is registered in |


```http
  POST /api/itrainee/create-payment-intent
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | creates a stripe payment intent for the course and takes the price of the course out of the itrainee's credit card |


```http
  PATCH /api/itrainee/registercourse/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | adds course that has the same id value as the id parameter to the itrainee's courses |


```http
  GET /api/itrainee/applyrefund/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | accepts the refund request that has the same id value as the id parameter and applies the required refund |


```http
  GET /api/itrainee/getcourseinfo/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | adds a boolean value to the course has the same id value as the id parameter depending on whether the logged in itrainee is registered to it or not |


```http
  GET /api/ctrainee/getcourseinfo/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | adds a boolean value to the course has the same id value as the id parameter depending on whether the logged in ctrainee is registered to it or not |


```http
  GET /api/itrainee/payusingwallet/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | subtracts the price of the course that has the same id value as the id parameter from the itrainee's wallet |


```http
  POST /api/problem/reportProblem/?cid={cid}&type={type}&content={content}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cid, type, content` | `string` | creates a new problem with the given parameter values |


```http
  GET /api/problem/myProblems
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets all the unresolved problems of the logged in trainee |


```http
  GET /api/problem/allProblemsR
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets all the resolved problems in the database |


```http
  GET /api/problem/allProblemsUS
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets all the unseen problems in the database |


```http
  GET /api/problem/allProblemsP
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets all the pending problems in the database |


```http
  PATCH /api/problem/problemStatus/?id={id}&status={status}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id, status` | `string` | updates the status of the problem with the same id value as the id parameter with the value of the status parameter|


```http
  PATCH /api/problem/problemFollowUp/?id={id}&comment={comment}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id, comment` | `string` | adds a follow up to the problem with the same id value as the id parameter with the value of the comment parameter|


```http
  GET /api/request/requestAccess/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | allows logged in ctrainee to request access to the course that has the same id value as the id parameter|


```http
  GET /api/request/getPendingRequests
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets all the pending access requests in the database |


```http
  GET /api/request/grantAccess/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | changes the status of the request that has the same id value as the id parameter to approved and adds the course in the request to the ctrainee in the request's registered courses |


```http
  GET /api/request/createRefundRequest/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | allows the logged in itrainee to create a refund request for the course that has the same id value as the id parameter  |


```http
  GET /api/request/getRefundRequests
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter` | `string` | gets all the refund requests in the database  |


```http
  GET /api/request/checkCourse/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id` | `string` | adds a boolean value to the course that has the same id value as the id parameter depending on whether a refund has been requested by the logged in itrainee for the course or not   |


```http
  GET /api/courses/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter`      | `string` | Gets All Courses |


```http
  GET /api/courses/addToProgress/?courseId={courseId}&component={component}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `course id, component` | `string` | updates trainee's course progress |


```http
  PATCH /api/users/updatePassword2/?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | updates the currently logged in user's password when they change it |


```http
  POST /api/users/contract
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `no input parameter`      | `string` | keeps track of whether the user logging in should be shown the contract or not |


## Tests
<details>
<summary>View Tests</summary>
  
  
  ```http
  POST /api/users/login
```

  <details>
<summary>
Body - Test #1
</summary>

```json
    
    {
    "username":"gitrainee",
    "password":"inst"
}

```
</details>
  

<details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
  
  {
    "message": "successful",
    "payload": {
        "_id": "63b21764da1ecf541a899341",
        "firstname": "Ganna",
        "lastname": "ITrainee",
        "username": "gitrainee",
        "password": "$2b$10$mjbFaSwGcJ5u8f4CUVirK.YbfiYkj.DwcmZ0a7h2NuiKjAE8SAW.a",
        "email": "gannamelsayed@gmail.com",
        "gender": "female",
        "courses": [
            "6384a69690658873b8e1681b",
            "63b2139bda1ecf541a89907b"
        ],
        "wallet": -83,
        "grades": [],
        "createdAt": "2023-01-01T23:29:40.052Z",
        "updatedAt": "2023-01-02T02:22:17.077Z",
        "__v": 0
    },
    "role": "iTrainee",
    "contract": true
}
  


```

![Screenshot (266)](https://user-images.githubusercontent.com/77853945/211096235-9367528a-d8c1-4115-bf61-827266d0219d.png)

</details>
  
  
  
  
  
<details>
<summary>
Body - Test #2
</summary>

```json
  
{
    "username":"gitraineeeeee",
    "password":"inst"
}

```
</details>
  

  
<details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
   
```json
  
  {
    "message": "Invalid Username or Password"
}

```
  
![Screenshot (268)](https://user-images.githubusercontent.com/77853945/211096353-405d2858-f86b-4766-be18-0da3ec41ec9f.png)

</details>
  
  
  
  
  
  
  
```http
POST /api/courses/
```
  
  
  
<details>
<summary>
Body - Test #1
</summary>

```json
 {
    "title":"CSEN909",
    "subject":"Computer Science",
    "price": 200,
    "discount": 20,
    "discountValidUntil": "1-1-2024",
    "summary": "best course ever",
    "previewURL": "https://www.youtube.com/watch?v=98BzS5Oz5E4"
}
```
</details>
  
  
 <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
{
    {
    "title": "CSEN909",
    "hours": 0,
    "subject": "Computer Science",
    "price": 200,
    "discount": 0,
    "discountValidUntil": "2023-01-06T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "best course ever",
    "previewURL": "//www.youtube.com/embed/98BzS5Oz5E4",
    "discountApplied": false,
    "numOfEnrolledTrainees": 0,
    "published": true,
    "open": true,
    "overallRating": 0,
    "_id": "63b866155916b192f0d0b410",
    "cTraineeNotes": [],
    "iTraineeNotes": [],
    "reviews": [],
    "ratings": [],
    "subtitles": [],
    "exercises": [],
    "traineesProgress": [],
    "createdAt": "2023-01-06T18:19:01.973Z",
    "updatedAt": "2023-01-06T18:19:01.973Z",
    "__v": 0
}
}
```
   
   ![Screenshot (240)](https://user-images.githubusercontent.com/77853945/211077527-ab7dc588-e1df-405e-bfc0-030d7627de41.png)
</details>



  
  
  
  
<details>
<summary>
Body - Test #2
</summary>

```json
{
    "title":"CSEN777",
    "subject":"Lab",
    "price": 180,
    "summary": "2nd best course ever",
    "previewURL": "https://www.youtube.com/watch?v=98BzS5Oz5E4"
}
  
```
</details>
  
  
 <details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
   
```json
   
   {
    "title": "CSEN777",
    "hours": 0,
    "subject": "Lab",
    "price": 180,
    "discount": 0,
    "discountValidUntil": "2023-01-06T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "2nd best course ever",
    "previewURL": "//www.youtube.com/embed/98BzS5Oz5E4",
    "discountApplied": false,
    "numOfEnrolledTrainees": 0,
    "published": true,
    "open": true,
    "overallRating": 0,
    "_id": "63b86c115916b192f0d0b419",
    "cTraineeNotes": [],
    "iTraineeNotes": [],
    "reviews": [],
    "ratings": [],
    "subtitles": [],
    "exercises": [],
    "traineesProgress": [],
    "createdAt": "2023-01-06T18:44:33.069Z",
    "updatedAt": "2023-01-06T18:44:33.069Z",
    "__v": 0
}

```
   
   ![Screenshot (241)](https://user-images.githubusercontent.com/77853945/211078240-c844f18b-5504-4b7f-b3c3-b738cc140deb.png)
</details>
  
  

  
  
```http
GET /api/courses/getMyCourseReview/?id=6384a69690658873b8e1681b
```
 <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
  {
    "text": "Best course everrr"
}
```
   ![Screenshot (243)](https://user-images.githubusercontent.com/77853945/211081007-cff8a048-f134-464e-bdbb-77db9ec76aa8.png)
</details>


  
  
  
 <details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
   
Note: Text's value is an empty string because I haven't reviewed that course
   
   
```json
  {
    "text": ""
}
```
   ![Screenshot (242)](https://user-images.githubusercontent.com/77853945/211080886-8fb20624-427f-4cea-ae54-f9575a81b237.png)
</details>

  
  ```http
  PATCH /api/courses/deleteMyCourseReview/?id=6384a69690658873b8e1681b
```

 <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
NOTE: this response is the course after deleting the review
   
```json
   
   
   {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 110,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:09:43.529Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note": "noooo",
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        }
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}
   

```
   
   ![Screenshot (244)](https://user-images.githubusercontent.com/77853945/211082700-826848ab-6b78-42f0-ab55-047e11739457.png)
   
</details>
  
  
  
  
  
  
   <details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
     
NOTE: this response is the course after deleting the review  
   
   
```json
     
    {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 110,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:09:43.529Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note": "noooo",
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        }
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}

```
     
![Screenshot (245)](https://user-images.githubusercontent.com/77853945/211083086-a6b14cf8-9e26-49f2-a5df-9052a276fdf8.png)

</details>
  
  
  
  
  ```http
  PATCH /api/courses/reviewCourse/?id=6384a69690658873b8e1681b
```
  
<details>
<summary>
Body - Test #1
</summary>

```json
{
    "content":"a really good course"
}



```
</details>
  
  
<details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
  
  
  {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 110,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        },
        {
            "content": "a really good course",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:09:43.529Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note": "noooo",
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        }
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
} 

```
  
  ![Screenshot (248)](https://user-images.githubusercontent.com/77853945/211084391-6cb1a813-9024-4270-8cdc-1cc1609f8671.png)

</details>
  
  
  <details>
<summary>
Body - Test #2
</summary>

```json

{
    "content":"a really good course"
}


```
</details>
  
  
 <details>
<summary>
Response - Test #2
</summary>
Status Code: 400 Bad Request
   
NOTE: that's because I tried reviewing a course when I was logged in as an instructor, which is not allowed
   
```json
   
   {
    "error": "Access Restriced"
}
   
```
   
   
   ![Screenshot (246)](https://user-images.githubusercontent.com/77853945/211083468-0d035999-cbf2-4247-af9e-fc42491ddce0.png)
   
</details>
  
  
  
  
  
  ```http
  PATCH /api/courses/editMyCourseReview/?id=6384a69690658873b8e1681b
```

  
  
  <details>
<summary>
Body - Test #1
</summary>

```json

{
    "content":"sebastian's edited review number 1"
}


```
</details>
  
  
 <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json

   {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 110,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "sebastian's edited review number 1",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:24:54.853Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note": "noooo",
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        }
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}
   
```
   ![Screenshot (251)](https://user-images.githubusercontent.com/77853945/211085128-96f8a87e-9cfb-4f10-ab84-ff42581ec767.png)

   
</details>
  
  
  
  
  
  
  
  
  <details>
<summary>
Body - Test #2
</summary>

```json

{
    "content":"sebastian's edited review number 2"
}


```
</details>
  
  
 <details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
   
```json
   
   {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 110,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content":"sebastian's edited review number 2",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:24:54.853Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note": "noooo",
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        }
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}

```
   
   ![Screenshot (252)](https://user-images.githubusercontent.com/77853945/211085187-96431e31-762a-4993-b046-b74602a11cda.png)
   

</details>
  
  
  

  ```http
  PATCH /api/courses/addCourseSub/?id=6384a69690658873b8e1681b
```

  
  <details>
<summary>
Body - Test #1
</summary>

```json
{
    "title": "My 3rd Subtitle",
    "videoLink":"https://youtu.be/qtheqr0jgIQ",
    "shortDescription": "the description of my 3rd subtitle"
}

```
</details>
  
  
 <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
{
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 110,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:24:54.853Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note": "noooo",
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        }
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}
```
   
   ![Screenshot (253)](https://user-images.githubusercontent.com/77853945/211086064-65e2f701-5db1-438c-82fd-b0a021bfd73d.png)
   
</details>
  
 
 
 <details>
<summary>
Body - Test #2
</summary>

```json
{
    "title": "My 4th Subtitle",
    "videoLink":"https://youtu.be/qtheqr0jgIQ",
    "shortDescription": "ana bgd ta3bana"
}



```
</details>
  
  
 <details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
   
```json

   {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 114,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        },
        {
            "title": "My 3rd Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "the description of my 3rd subtitle",
            "totalHours": 4,
            "_id": "63b8775809282f4c8b5f7cd9"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:32:40.081Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note": "noooo",
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        }
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}
   
```
   ![Screenshot (255)](https://user-images.githubusercontent.com/77853945/211086212-f83ab2b3-d482-428e-a6e0-5557837d14f4.png)

   
</details>
  
 
  
  ```http
  PATCH /api/courses/?id={id}
```

  
  <details>
<summary>
Body - Test #1
</summary>

```json

{
    "title": "new CSEN701"
}


```
</details>
  
  
 <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json

   {
    "_id": "6384a69690658873b8e1681b",
    "title": "new CSEN701",
    "hours": 118,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        },
        {
            "title": "My 3rd Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "the description of my 3rd subtitle",
            "totalHours": 4,
            "_id": "63b8775809282f4c8b5f7cd9"
        },
        {
            "title": "My 4th Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "ana bgd ta3bana",
            "totalHours": 4,
            "_id": "63b877b009282f4c8b5f7d27"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:40:42.065Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note": "noooo",
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        }
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}
   
```
   
   ![Screenshot (257)](https://user-images.githubusercontent.com/77853945/211087257-f1af3dff-04fd-4247-bffd-ed3b82506208.png)
   

</details>
  
  
  
  <details>
<summary>
Body - Test #2
</summary>

```json
{
    "title": "CSEN701"
}



```
</details>
  
  
 <details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
   
```json
   
   {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 118,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        },
        {
            "title": "My 3rd Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "the description of my 3rd subtitle",
            "totalHours": 4,
            "_id": "63b8775809282f4c8b5f7cd9"
        },
        {
            "title": "My 4th Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "ana bgd ta3bana",
            "totalHours": 4,
            "_id": "63b877b009282f4c8b5f7d27"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:42:00.442Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note": "noooo",
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        }
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}

```
   
     ![Screenshot (258)](https://user-images.githubusercontent.com/77853945/211087428-06168dc8-aac9-44f7-9393-bc69d0f32447.png)
   
</details>

  
  
  
  ```http
  PATCH /api/courses/addNotes/?id=6384a69690658873b8e1681b
```

  
  <details>
<summary>
Body - Test #1
</summary>

```json

{
    "note":"ganna's latest note"
}
    
```
</details>
  
  
 <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
   
   
      
   {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 118,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        },
        {
            "title": "My 3rd Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "the description of my 3rd subtitle",
            "totalHours": 4,
            "_id": "63b8775809282f4c8b5f7cd9"
        },
        {
            "title": "My 4th Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "ana bgd ta3bana",
            "totalHours": 4,
            "_id": "63b877b009282f4c8b5f7d27"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:42:00.442Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note":"ganna's latest note"
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        },
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}
   

```
   
   ![Screenshot (259)](https://user-images.githubusercontent.com/77853945/211088326-126e6bf4-f71f-46a6-9834-27f60c93181a.png)
 
</details>
  
  
  
  <details>
<summary>
Body - Test #2
</summary>

```json

{
    "note":"ganna's latest note take 2"
}

```
</details>
  
  
 <details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
   
```json

   
      
   
      
   {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 118,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        },
        {
            "title": "My 3rd Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "the description of my 3rd subtitle",
            "totalHours": 4,
            "_id": "63b8775809282f4c8b5f7cd9"
        },
        {
            "title": "My 4th Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "ana bgd ta3bana",
            "totalHours": 4,
            "_id": "63b877b009282f4c8b5f7d27"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:42:00.442Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note":"ganna's latest note take 2
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        },
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}
   
```
 ![Screenshot (260)](https://user-images.githubusercontent.com/77853945/211088366-8cd5f9e2-caec-41de-95cb-d35a8a374f88.png)
  
   
</details>
  
  
  ```http
  GET /api/courses/getMyNotes/?id=6384a69690658873b8e1681b
```

  
  
 <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
   
   {
    "data": "ganna's latest note take 2"
}

```
</details>
  
  
  
<details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
     
NOTE: i'm now logged in as a different trainee
   
```json
        {
    "data": "helllooo people wusuuuup"
}

```
</details>
  
  
```http
  PATCH /api/courses/publishCourse/?id=6384a69690658873b8e1681b
```
  

  
 <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
   
   
      {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 118,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        },
        {
            "title": "My 3rd Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "the description of my 3rd subtitle",
            "totalHours": 4,
            "_id": "63b8775809282f4c8b5f7cd9"
        },
        {
            "title": "My 4th Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "ana bgd ta3bana",
            "totalHours": 4,
            "_id": "63b877b009282f4c8b5f7d27"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:42:00.442Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note":"ganna's latest note take 2
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        },
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}
   

```
</details>
  
  
   <details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
   
```json
     
     
        {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 118,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        },
        {
            "title": "My 3rd Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "the description of my 3rd subtitle",
            "totalHours": 4,
            "_id": "63b8775809282f4c8b5f7cd9"
        },
        {
            "title": "My 4th Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "ana bgd ta3bana",
            "totalHours": 4,
            "_id": "63b877b009282f4c8b5f7d27"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:42:00.442Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note":"ganna's latest note take 2
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        },
    ],
    "published": true,
    "open": true,
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}
     

```
</details>
  

  ```http
  PATCH /api/courses/closeCourse/?id=6384a69690658873b8e1681b
```

   <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
     
          {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 118,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        },
        {
            "title": "My 3rd Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "the description of my 3rd subtitle",
            "totalHours": 4,
            "_id": "63b8775809282f4c8b5f7cd9"
        },
        {
            "title": "My 4th Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "ana bgd ta3bana",
            "totalHours": 4,
            "_id": "63b877b009282f4c8b5f7d27"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:42:00.442Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note":"ganna's latest note take 2
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        },
    ],
    "published": true,
    "open": false
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}

```
</details>
  
  
  
  
   <details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
   
```json
     
          {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 118,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        },
        {
            "title": "My 3rd Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "the description of my 3rd subtitle",
            "totalHours": 4,
            "_id": "63b8775809282f4c8b5f7cd9"
        },
        {
            "title": "My 4th Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "ana bgd ta3bana",
            "totalHours": 4,
            "_id": "63b877b009282f4c8b5f7d27"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:42:00.442Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note":"ganna's latest note take 2
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        },
    ],
    "published": true,
    "open": false
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}

```
</details>
  
  
  
  
```http
  GET /api/courses/openMyCourse/?id=6384a69690658873b8e1681b
```

  
  
   <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
     
            {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 118,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        },
        {
            "title": "My 3rd Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "the description of my 3rd subtitle",
            "totalHours": 4,
            "_id": "63b8775809282f4c8b5f7cd9"
        },
        {
            "title": "My 4th Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "ana bgd ta3bana",
            "totalHours": 4,
            "_id": "63b877b009282f4c8b5f7d27"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:42:00.442Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note":"ganna's latest note take 2
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        },
    ],
    "published": true,
    "open": true
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}
     

```
</details>

  
  
  
  
   <details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
   
```json
     
     
            {
    "_id": "6384a69690658873b8e1681b",
    "title": "CSEN701",
    "hours": 118,
    "subject": "Computer Science",
    "price": 65,
    "discount": 50,
    "discountValidUntil": "2023-01-12T00:00:00.000Z",
    "instructor": "63a34389398e97a471db5921",
    "summary": "This course is about Embedded Systems.",
    "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
    "reviews": [
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637909641e794efbe229af85",
            "traineeName": "Sebastian Stan",
            "_id": "639c519f01bafa910cabf95b"
        },
        {
            "content": "reviewing as ctrainee",
            "traineeId": "637a356c54c79d632507dc8a",
            "traineeName": "Tony Stark",
            "_id": "639c5368eb50d1b1878ebc53"
        },
        {
            "content": "yesss",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0cfd9b94d536a0f8fb4f"
        },
        {
            "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b579f76ea3fa39cb92f457"
        }
    ],
    "overallRating": 3.1666666666666665,
    "ratings": [
        {
            "rating": 5,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "6395024e17a103e1f5e15f7d"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77d221174185adbe05a50"
        },
        {
            "rating": 2,
            "userId": "637a8c03f7740521fbe8246e",
            "_id": "63a8812bad855bef7ecf7c09"
        },
        {
            "rating": 2,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb989e20366c450b75a4"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf79b94d536a0f8fb2d"
        },
        {
            "rating": 3,
            "userId": "63b5790d6ea3fa39cb92f29c",
            "_id": "63b579e26ea3fa39cb92f42f"
        }
    ],
    "subtitles": [
        {
            "title": "Introduction",
            "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
            "shortDescription": "Introduction Lesson",
            "totalHours": 4,
            "_id": "6384a6b190658873b8e1681e"
        },
        {
            "title": "Embedded Hardware",
            "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
            "shortDescription": "This lesson discusses Embedded Hardware",
            "totalHours": 107,
            "_id": "6384a6dd90658873b8e16824"
        },
        {
            "title": "My 3rd Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "the description of my 3rd subtitle",
            "totalHours": 4,
            "_id": "63b8775809282f4c8b5f7cd9"
        },
        {
            "title": "My 4th Subtitle",
            "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
            "shortDescription": "ana bgd ta3bana",
            "totalHours": 4,
            "_id": "63b877b009282f4c8b5f7d27"
        }
    ],
    "exercises": [
        {
            "question": "What is my favourite colour?",
            "options": [
                "Yellow",
                "Red",
                "Blue",
                "Green"
            ],
            "answer": "Yellow",
            "_id": "6384a6eb90658873b8e1682b",
            "index": 0
        },
        {
            "question": "What is my favourite movie?",
            "options": [
                "Interstellar",
                "Fractured",
                "Bohemian Rhapsody",
                "The Help"
            ],
            "answer": "Interstellar",
            "_id": "6384a6fe90658873b8e16832",
            "index": 1
        }
    ],
    "createdAt": "2022-11-28T12:16:22.376Z",
    "updatedAt": "2023-01-06T19:42:00.442Z",
    "__v": 0,
    "discountApplied": true,
    "numOfEnrolledTrainees": 4,
    "traineesProgress": [
        {
            "traineeId": "63a3196b78d093cbccc82bb7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9d0042821590c8a89c3da"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63a9ecf99e20366c450b76fb"
        },
        {
            "traineeId": "63a9d4d85defffcabbcbc0a7",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63a9ed079e20366c450b772a"
        },
        {
            "content": "6384a6dd90658873b8e16824",
            "_id": "63aceaeae99ea10bdc1e220e"
        },
        {
            "content": "6384a6b190658873b8e1681e",
            "_id": "63aceaf1e99ea10bdc1e223a"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b006b92cd8f6cb0e93b6a6"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b006be2cd8f6cb0e93b6d5"
        },
        {
            "traineeId": "63b0058c2cd8f6cb0e93b47a",
            "content": "exercise",
            "_id": "63b006c62cd8f6cb0e93b708"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6dd90658873b8e16824",
            "_id": "63b57a7b6ea3fa39cb92f55c"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "6384a6b190658873b8e1681e",
            "_id": "63b57a9d6ea3fa39cb92f61e"
        },
        {
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "content": "exercise",
            "_id": "63b57aad6ea3fa39cb92f660"
        }
    ],
    "iTraineeNotes": [
        {
            "note": "not ganna's note",
            "_id": "63a5ad69d4971b7ccc06af13"
        },
        {
            "iTraineeID": "63a9d4d85defffcabbcbc0a7",
            "note": "hi im mariam",
            "_id": "63a9ed7e9e20366c450b778f"
        },
        {
            "iTraineeID": "63a3435e9958691a5e19bef1",
            "note":"ganna's latest note take 2
            "_id": "63ae1a129b94d536a0f8ff98"
        },
        {
            "iTraineeID": "63b5790d6ea3fa39cb92f29c",
            "note": "hello people wussuuuuup",
            "_id": "63b57a656ea3fa39cb92f527"
        },
    ],
    "published": true,
    "open": true
    "cTraineeNotes": [
        {
            "cTraineeID": "63a93d1019aea603602a6680",
            "note": "should be ganna the ctrainee's ONLY note",
            "_id": "63add0da268f1e489cede62f"
        }
    ]
}
     

```
</details>  


  ```http
  GET /api/problem/myProblems
```

  
  
  <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
     [
    {
        "_id": "63b21a26da1ecf541a8996e8",
        "type": "Technical",
        "content": "ITrainee with a technical issueee",
        "status": "Pending",
        "courseId": "63b2139bda1ecf541a89907b",
        "reporterId": "63b21764da1ecf541a899341",
        "followUp": "itrainee following up",
        "priority": 32,
        "createdAt": "2023-01-01T23:41:26.979Z",
        "updatedAt": "2023-01-02T00:06:15.924Z",
        "__v": 0,
        "course": {
            "_id": "63b2139bda1ecf541a89907b",
            "title": "Advanced Computer Lab",
            "hours": 24,
            "subject": "Lab Programming",
            "price": 150,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63b208c6da1ecf541a8987d8",
            "summary": "All about the MERN Stack",
            "previewURL": "//www.youtube.com/embed/98BzS5Oz5E4",
            "discountApplied": true,
            "numOfEnrolledTrainees": 2,
            "published": true,
            "open": true,
            "overallRating": 4,
            "cTraineeNotes": [],
            "iTraineeNotes": [
                {
                    "iTraineeID": "63b21764da1ecf541a899341",
                    "note": "testinngg the notess",
                    "_id": "63b21989da1ecf541a89961a"
                }
            ],
            "reviews": [
                {
                    "content": "Great courseeee!!!",
                    "traineeId": "63b21764da1ecf541a899341",
                    "traineeName": "Ganna ITrainee",
                    "_id": "63b218ddda1ecf541a89953a"
                }
            ],
            "ratings": [
                {
                    "rating": 4,
                    "userId": "63b21764da1ecf541a899341",
                    "_id": "63b218c4da1ecf541a899501"
                }
            ],
            "subtitles": [
                {
                    "title": "Tutorial #1",
                    "videoLink": "//www.youtube.com/embed/98BzS5Oz5E4",
                    "shortDescription": "What is MERN",
                    "totalHours": 8,
                    "_id": "63b213abda1ecf541a899090"
                },
                {
                    "title": "Tutorial #2",
                    "videoLink": "//www.youtube.com/embed/8DploTqLstE",
                    "shortDescription": "Express App Setup",
                    "totalHours": 16,
                    "_id": "63b213bfda1ecf541a899098"
                }
            ],
            "exercises": [
                {
                    "question": "What is the M in MERN",
                    "options": [
                        "Mongo",
                        "My head hurts",
                        "My outfit slayssss",
                        "My coffee went cold"
                    ],
                    "answer": "Mongo",
                    "index": 0,
                    "_id": "63b213e9da1ecf541a8990b7"
                },
                {
                    "question": "What does JS stand for",
                    "options": [
                        "nonn",
                        "just saying",
                        "no",
                        "JavaScript"
                    ],
                    "answer": "JavaScript",
                    "index": 1,
                    "_id": "63b21407da1ecf541a8990bf"
                }
            ],
            "traineesProgress": [],
            "createdAt": "2023-01-01T23:13:31.115Z",
            "updatedAt": "2023-01-04T13:24:13.043Z",
            "__v": 0
        }
    }
]

```
     ![Screenshot (261)](https://user-images.githubusercontent.com/77853945/211092291-02ffad79-231c-4abb-9922-45469f34e606.png)

</details>
  
  
  
   <details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
   
```json
     
     
         [
    {
        "_id": "63b21a26da1ecf541a8996e8",
        "type": "Technical",
        "content": "ITrainee with a technical issueee",
        "status": "Pending",
        "courseId": "63b2139bda1ecf541a89907b",
        "reporterId": "63b21764da1ecf541a899341",
        "followUp": "itrainee following up",
        "priority": 32,
        "createdAt": "2023-01-01T23:41:26.979Z",
        "updatedAt": "2023-01-02T00:06:15.924Z",
        "__v": 0,
        "course": {
            "_id": "63b2139bda1ecf541a89907b",
            "title": "Advanced Computer Lab",
            "hours": 24,
            "subject": "Lab Programming",
            "price": 150,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63b208c6da1ecf541a8987d8",
            "summary": "All about the MERN Stack",
            "previewURL": "//www.youtube.com/embed/98BzS5Oz5E4",
            "discountApplied": true,
            "numOfEnrolledTrainees": 2,
            "published": true,
            "open": true,
            "overallRating": 4,
            "cTraineeNotes": [],
            "iTraineeNotes": [
                {
                    "iTraineeID": "63b21764da1ecf541a899341",
                    "note": "testinngg the notess",
                    "_id": "63b21989da1ecf541a89961a"
                }
            ],
            "reviews": [
                {
                    "content": "Great courseeee!!!",
                    "traineeId": "63b21764da1ecf541a899341",
                    "traineeName": "Ganna ITrainee",
                    "_id": "63b218ddda1ecf541a89953a"
                }
            ],
            "ratings": [
                {
                    "rating": 4,
                    "userId": "63b21764da1ecf541a899341",
                    "_id": "63b218c4da1ecf541a899501"
                }
            ],
            "subtitles": [
                {
                    "title": "Tutorial #1",
                    "videoLink": "//www.youtube.com/embed/98BzS5Oz5E4",
                    "shortDescription": "What is MERN",
                    "totalHours": 8,
                    "_id": "63b213abda1ecf541a899090"
                },
                {
                    "title": "Tutorial #2",
                    "videoLink": "//www.youtube.com/embed/8DploTqLstE",
                    "shortDescription": "Express App Setup",
                    "totalHours": 16,
                    "_id": "63b213bfda1ecf541a899098"
                }
            ],
            "exercises": [
                {
                    "question": "What is the M in MERN",
                    "options": [
                        "Mongo",
                        "My head hurts",
                        "My outfit slayssss",
                        "My coffee went cold"
                    ],
                    "answer": "Mongo",
                    "index": 0,
                    "_id": "63b213e9da1ecf541a8990b7"
                },
                {
                    "question": "What does JS stand for",
                    "options": [
                        "nonn",
                        "just saying",
                        "no",
                        "JavaScript"
                    ],
                    "answer": "JavaScript",
                    "index": 1,
                    "_id": "63b21407da1ecf541a8990bf"
                }
            ],
            "traineesProgress": [],
            "createdAt": "2023-01-01T23:13:31.115Z",
            "updatedAt": "2023-01-04T13:24:13.043Z",
            "__v": 0
        }
    },
     {
        "_id": "63b21a26da1ecf541a77651a",
        "type": "Other",
        "content": "ITrainee with a different issue issueee",
        "status": "Pending",
        "courseId": "63b2139bda1ecf541a89907b",
        "reporterId": "63b21764da1ecf541a899341",
        "followUp": "",
        "priority": 32,
        "createdAt": "2023-01-01T23:41:26.979Z",
        "updatedAt": "2023-01-02T00:06:15.924Z",
        "__v": 0,
        "course": {
            "_id": "63b2139bda1ecf541a89907b",
            "title": "Advanced Computer Lab",
            "hours": 24,
            "subject": "Lab Programming",
            "price": 150,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63b208c6da1ecf541a8987d8",
            "summary": "All about the MERN Stack",
            "previewURL": "//www.youtube.com/embed/98BzS5Oz5E4",
            "discountApplied": true,
            "numOfEnrolledTrainees": 2,
            "published": true,
            "open": true,
            "overallRating": 4,
            "cTraineeNotes": [],
            "iTraineeNotes": [
                {
                    "iTraineeID": "63b21764da1ecf541a899341",
                    "note": "testinngg the notess",
                    "_id": "63b21989da1ecf541a89961a"
                }
            ],
            "reviews": [
                {
                    "content": "Great courseeee!!!",
                    "traineeId": "63b21764da1ecf541a899341",
                    "traineeName": "Ganna ITrainee",
                    "_id": "63b218ddda1ecf541a89953a"
                }
            ],
            "ratings": [
                {
                    "rating": 4,
                    "userId": "63b21764da1ecf541a899341",
                    "_id": "63b218c4da1ecf541a899501"
                }
            ],
            "subtitles": [
                {
                    "title": "Tutorial #1",
                    "videoLink": "//www.youtube.com/embed/98BzS5Oz5E4",
                    "shortDescription": "What is MERN",
                    "totalHours": 8,
                    "_id": "63b213abda1ecf541a899090"
                },
                {
                    "title": "Tutorial #2",
                    "videoLink": "//www.youtube.com/embed/8DploTqLstE",
                    "shortDescription": "Express App Setup",
                    "totalHours": 16,
                    "_id": "63b213bfda1ecf541a899098"
                }
            ],
            "exercises": [
                {
                    "question": "What is the M in MERN",
                    "options": [
                        "Mongo",
                        "My head hurts",
                        "My outfit slayssss",
                        "My coffee went cold"
                    ],
                    "answer": "Mongo",
                    "index": 0,
                    "_id": "63b213e9da1ecf541a8990b7"
                },
                {
                    "question": "What does JS stand for",
                    "options": [
                        "nonn",
                        "just saying",
                        "no",
                        "JavaScript"
                    ],
                    "answer": "JavaScript",
                    "index": 1,
                    "_id": "63b21407da1ecf541a8990bf"
                }
            ],
            "traineesProgress": [],
            "createdAt": "2023-01-01T23:13:31.115Z",
            "updatedAt": "2023-01-04T13:24:13.043Z",
            "__v": 0
        }
    }
]
     

```
     
     ![Screenshot (262)](https://user-images.githubusercontent.com/77853945/211093199-9bbe8197-5111-4411-a8b8-8368f47695b2.png)

</details>
  
  
  
  ```http
  GET /api/problem/allProblemsR
```

   <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
     [
    {
        "_id": "63950a750e58af89427e17ba",
        "type": "technical",
        "content": "this course doesn't deliver",
        "status": "Resolved",
        "courseId": "6384a69690658873b8e1681b",
        "reporterId": "637a8c03f7740521fbe8246e",
        "createdAt": "2022-12-10T22:38:45.874Z",
        "updatedAt": "2022-12-24T03:14:42.316Z",
        "__v": 0,
        "followUp": "it has been 30 years",
        "priority": 5,
        "course": {
            "_id": "6384a69690658873b8e1681b",
            "title": "CSEN701",
            "hours": 118,
            "subject": "Computer Science",
            "price": 65,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about Embedded Systems.",
            "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
            "reviews": [
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637909641e794efbe229af85",
                    "traineeName": "Sebastian Stan",
                    "_id": "639c519f01bafa910cabf95b"
                },
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637a356c54c79d632507dc8a",
                    "traineeName": "Tony Stark",
                    "_id": "639c5368eb50d1b1878ebc53"
                },
                {
                    "content": "yesss",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0cfd9b94d536a0f8fb4f"
                },
                {
                    "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b579f76ea3fa39cb92f457"
                }
            ],
            "overallRating": 3.1666666666666665,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "6395024e17a103e1f5e15f7d"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77d221174185adbe05a50"
                },
                {
                    "rating": 2,
                    "userId": "637a8c03f7740521fbe8246e",
                    "_id": "63a8812bad855bef7ecf7c09"
                },
                {
                    "rating": 2,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb989e20366c450b75a4"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf79b94d536a0f8fb2d"
                },
                {
                    "rating": 3,
                    "userId": "63b5790d6ea3fa39cb92f29c",
                    "_id": "63b579e26ea3fa39cb92f42f"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 4,
                    "_id": "6384a6b190658873b8e1681e"
                },
                {
                    "title": "Embedded Hardware",
                    "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
                    "shortDescription": "This lesson discusses Embedded Hardware",
                    "totalHours": 107,
                    "_id": "6384a6dd90658873b8e16824"
                },
                {
                    "title": "My 3rd Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "the description of my 3rd subtitle",
                    "totalHours": 4,
                    "_id": "63b8775809282f4c8b5f7cd9"
                },
                {
                    "title": "My 4th Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "ana bgd ta3bana",
                    "totalHours": 4,
                    "_id": "63b877b009282f4c8b5f7d27"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Yellow",
                    "_id": "6384a6eb90658873b8e1682b",
                    "index": 0
                },
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "Interstellar",
                    "_id": "6384a6fe90658873b8e16832",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T12:16:22.376Z",
            "updatedAt": "2023-01-06T19:42:00.442Z",
            "__v": 0,
            "discountApplied": true,
            "numOfEnrolledTrainees": 4,
            "traineesProgress": [
                {
                    "traineeId": "63a3196b78d093cbccc82bb7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9d0042821590c8a89c3da"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9ecf99e20366c450b76fb"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63a9ed079e20366c450b772a"
                },
                {
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63aceaeae99ea10bdc1e220e"
                },
                {
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63aceaf1e99ea10bdc1e223a"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b006b92cd8f6cb0e93b6a6"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b006be2cd8f6cb0e93b6d5"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "exercise",
                    "_id": "63b006c62cd8f6cb0e93b708"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b57a7b6ea3fa39cb92f55c"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b57a9d6ea3fa39cb92f61e"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "exercise",
                    "_id": "63b57aad6ea3fa39cb92f660"
                }
            ],
            "iTraineeNotes": [
                {
                    "note": "not ganna's note",
                    "_id": "63a5ad69d4971b7ccc06af13"
                },
                {
                    "iTraineeID": "63a9d4d85defffcabbcbc0a7",
                    "note": "hi im mariam",
                    "_id": "63a9ed7e9e20366c450b778f"
                },
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "noooo",
                    "_id": "63ae1a129b94d536a0f8ff98"
                },
                {
                    "iTraineeID": "63b5790d6ea3fa39cb92f29c",
                    "note": "hello people wussuuuuup",
                    "_id": "63b57a656ea3fa39cb92f527"
                }
            ],
            "published": true,
            "open": true,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63a93d1019aea603602a6680",
                    "note": "should be ganna the ctrainee's ONLY note",
                    "_id": "63add0da268f1e489cede62f"
                }
            ]
        },
        "reporter": {
            "_id": "637a8c03f7740521fbe8246e",
            "firstname": "Alex",
            "lastname": "Turner",
            "username": "a.turner",
            "password": "$2b$10$kUPNrNHKeixXFAMt5pmyZe7rS01bhN7BpSZoSfMAwnZsRntastThe",
            "email": "a.turner@gmail.com",
            "country": "USA",
            "courses": [
                "6384a69690658873b8e1681b",
                "6384aa2163ed1a80c81fa216"
            ],
            "grades": [
                {
                    "courseID": "6384b23ffa8e271ab3db7d0e",
                    "exercises": [
                        {
                            "exerciseID": "6384b306fa8e271ab3db7d37",
                            "grade": 8,
                            "_id": "637a8c03f7740521fbe82470"
                        }
                    ],
                    "_id": "637a8c03f7740521fbe8246f"
                },
                {
                    "courseID": "6384b23ffa8e271ab3db7d0e",
                    "exercises": [
                        {
                            "exerciseID": "6384b317fa8e271ab3db7d40",
                            "grade": 2,
                            "_id": "637a8c03f7740521fbe82472"
                        }
                    ],
                    "_id": "637a8c03f7740521fbe82471"
                }
            ],
            "createdAt": "2022-11-20T20:20:19.637Z",
            "updatedAt": "2022-12-27T22:29:19.045Z",
            "__v": 0
        }
    },
    {
        "_id": "63950fc09ecb6fd129da4b9d",
        "type": "technical",
        "content": "bad quality",
        "status": "Resolved",
        "courseId": "6384aa2163ed1a80c81fa216",
        "reporterId": "63a34389398e97a471db5921",
        "createdAt": "2022-12-10T23:01:20.534Z",
        "updatedAt": "2022-12-25T22:20:15.984Z",
        "__v": 0,
        "followUp": "it has been years",
        "priority": 8,
        "course": {
            "_id": "6384aa2163ed1a80c81fa216",
            "title": "DMET702",
            "hours": 16,
            "subject": "Computer Science",
            "price": 70,
            "discount": 19,
            "discountValidUntil": "2022-12-31T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about Visualization & Animation",
            "previewURL": "//www.youtube.com/embed/aPnqx56V8-0",
            "reviews": [],
            "overallRating": 5,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "638776848b0f6fe1273054ba"
                }
            ],
            "discountApplied": true,
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/aPnqx56V8-0",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 10,
                    "_id": "6384aa4263ed1a80c81fa219"
                },
                {
                    "title": "Lesson 1",
                    "videoLink": "//www.youtube.com/embed/fKgoo_KT6aM",
                    "shortDescription": "This lesson will discuss ray intersections",
                    "totalHours": 3,
                    "_id": "6384aa7c63ed1a80c81fa21f"
                },
                {
                    "title": "Lesson 2",
                    "videoLink": "//www.youtube.com/embed/fKgoo_KT6aM",
                    "shortDescription": "This lesson will discuss illumination and lighting",
                    "totalHours": 3,
                    "_id": "6384aa9463ed1a80c81fa228"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Yellow",
                    "_id": "6384aaa163ed1a80c81fa231"
                },
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "The Help",
                    "_id": "6384aab063ed1a80c81fa239"
                },
                {
                    "question": "What is my favourite band?",
                    "options": [
                        "Queen",
                        "Arctic Monkeys",
                        "The 1975",
                        "5SOS"
                    ],
                    "answer": "Arctic Monkeys",
                    "_id": "6384aad263ed1a80c81fa244"
                },
                {
                    "question": "What is my favourite animal?",
                    "options": [
                        "Koala",
                        "Bear",
                        "Giraffe",
                        "Monkey"
                    ],
                    "answer": "Monkey",
                    "_id": "63a84724fe020776d1ccd5c5"
                }
            ],
            "createdAt": "2022-11-28T12:31:29.976Z",
            "updatedAt": "2022-12-30T23:43:16.598Z",
            "__v": 0,
            "numOfEnrolledTrainees": 8,
            "traineesProgress": [
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "6384aa7c63ed1a80c81fa21f",
                    "_id": "63a5c31ce3ace88c5ebbec1c"
                },
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "6384aa4263ed1a80c81fa219",
                    "_id": "63a5c327e3ace88c5ebbec2f"
                },
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "6384aa9463ed1a80c81fa228",
                    "_id": "63a5c388e3ace88c5ebbec58"
                },
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "exercise",
                    "_id": "63a5c393e3ace88c5ebbec74"
                }
            ],
            "iTraineeNotes": [
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "",
                    "_id": "63a5c331e3ace88c5ebbec47"
                },
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "testtttt",
                    "_id": "63a5c412e3ace88c5ebbec95"
                }
            ],
            "published": false,
            "open": false,
            "cTraineeNotes": []
        },
        "reporter": {
            "_id": "63a34389398e97a471db5921",
            "username": "r.gosling",
            "password": "$2b$10$OUMyY7FuMHzgGwM8ckrRROS6zHaAthAWuY4BIvYnKLqmKgbLfpjAC",
            "country": "USA",
            "email": "nourhan.khedr24@gmail.com",
            "miniBio": "I was really bad in La La Land",
            "name": "Ryan Gosling",
            "rating": 3,
            "wallet": 2017,
            "ratings": [
                {
                    "rating": 0,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "63a76d12d0318f90018cfcd7"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77dad1174185adbe05a91"
                },
                {
                    "rating": 5,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb589e20366c450b7526"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf09b94d536a0f8faf7"
                }
            ],
            "reviews": [
                {
                    "content": "tesssstttt",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0ce29b94d536a0f8faea"
                },
                {
                    "content": "wallahi ya3ni mozza",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b57a0a6ea3fa39cb92f497"
                }
            ],
            "createdAt": "2022-12-21T17:34:01.355Z",
            "updatedAt": "2023-01-04T13:07:22.976Z",
            "__v": 0
        }
    },
    {
        "_id": "63951033eb02e830221574cf",
        "type": "technical",
        "content": "such a long boring annoying sad bbbbbbb course",
        "status": "Resolved",
        "courseId": "6384a69690658873b8e1681b",
        "reporterId": "63a3196b78d093cbccc82bb7",
        "createdAt": "2022-12-10T23:03:15.247Z",
        "updatedAt": "2022-12-30T14:24:10.486Z",
        "__v": 0,
        "followUp": "",
        "priority": 11,
        "course": {
            "_id": "6384a69690658873b8e1681b",
            "title": "CSEN701",
            "hours": 118,
            "subject": "Computer Science",
            "price": 65,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about Embedded Systems.",
            "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
            "reviews": [
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637909641e794efbe229af85",
                    "traineeName": "Sebastian Stan",
                    "_id": "639c519f01bafa910cabf95b"
                },
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637a356c54c79d632507dc8a",
                    "traineeName": "Tony Stark",
                    "_id": "639c5368eb50d1b1878ebc53"
                },
                {
                    "content": "yesss",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0cfd9b94d536a0f8fb4f"
                },
                {
                    "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b579f76ea3fa39cb92f457"
                }
            ],
            "overallRating": 3.1666666666666665,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "6395024e17a103e1f5e15f7d"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77d221174185adbe05a50"
                },
                {
                    "rating": 2,
                    "userId": "637a8c03f7740521fbe8246e",
                    "_id": "63a8812bad855bef7ecf7c09"
                },
                {
                    "rating": 2,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb989e20366c450b75a4"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf79b94d536a0f8fb2d"
                },
                {
                    "rating": 3,
                    "userId": "63b5790d6ea3fa39cb92f29c",
                    "_id": "63b579e26ea3fa39cb92f42f"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 4,
                    "_id": "6384a6b190658873b8e1681e"
                },
                {
                    "title": "Embedded Hardware",
                    "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
                    "shortDescription": "This lesson discusses Embedded Hardware",
                    "totalHours": 107,
                    "_id": "6384a6dd90658873b8e16824"
                },
                {
                    "title": "My 3rd Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "the description of my 3rd subtitle",
                    "totalHours": 4,
                    "_id": "63b8775809282f4c8b5f7cd9"
                },
                {
                    "title": "My 4th Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "ana bgd ta3bana",
                    "totalHours": 4,
                    "_id": "63b877b009282f4c8b5f7d27"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Yellow",
                    "_id": "6384a6eb90658873b8e1682b",
                    "index": 0
                },
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "Interstellar",
                    "_id": "6384a6fe90658873b8e16832",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T12:16:22.376Z",
            "updatedAt": "2023-01-06T19:42:00.442Z",
            "__v": 0,
            "discountApplied": true,
            "numOfEnrolledTrainees": 4,
            "traineesProgress": [
                {
                    "traineeId": "63a3196b78d093cbccc82bb7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9d0042821590c8a89c3da"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9ecf99e20366c450b76fb"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63a9ed079e20366c450b772a"
                },
                {
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63aceaeae99ea10bdc1e220e"
                },
                {
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63aceaf1e99ea10bdc1e223a"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b006b92cd8f6cb0e93b6a6"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b006be2cd8f6cb0e93b6d5"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "exercise",
                    "_id": "63b006c62cd8f6cb0e93b708"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b57a7b6ea3fa39cb92f55c"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b57a9d6ea3fa39cb92f61e"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "exercise",
                    "_id": "63b57aad6ea3fa39cb92f660"
                }
            ],
            "iTraineeNotes": [
                {
                    "note": "not ganna's note",
                    "_id": "63a5ad69d4971b7ccc06af13"
                },
                {
                    "iTraineeID": "63a9d4d85defffcabbcbc0a7",
                    "note": "hi im mariam",
                    "_id": "63a9ed7e9e20366c450b778f"
                },
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "noooo",
                    "_id": "63ae1a129b94d536a0f8ff98"
                },
                {
                    "iTraineeID": "63b5790d6ea3fa39cb92f29c",
                    "note": "hello people wussuuuuup",
                    "_id": "63b57a656ea3fa39cb92f527"
                }
            ],
            "published": true,
            "open": true,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63a93d1019aea603602a6680",
                    "note": "should be ganna the ctrainee's ONLY note",
                    "_id": "63add0da268f1e489cede62f"
                }
            ]
        },
        "reporter": {
            "_id": "63a3196b78d093cbccc82bb7",
            "firstname": "Freddie",
            "lastname": "Mercury",
            "username": "f.mercury",
            "password": "$2b$10$Lau8Bz/r3IRDlIONAO9.F.jox5TirJGCu73XLmqKqUn1dLhLv0xHu",
            "email": "melnaggar815@gmail.com",
            "gender": "male",
            "courses": [
                "6384a69690658873b8e1681b"
            ],
            "wallet": 745,
            "grades": [],
            "createdAt": "2022-12-21T14:34:19.175Z",
            "updatedAt": "2022-12-31T12:24:20.954Z",
            "__v": 0
        }
    },
    {
        "_id": "63a71a80d0318f90018cfa61",
        "type": "bomba",
        "content": "happiness is a butterfly",
        "status": "Resolved",
        "courseId": "6384a69690658873b8e1681b",
        "reporterId": "63a3196b78d093cbccc82bb7",
        "followUp": "time is money",
        "priority": 17,
        "createdAt": "2022-12-24T15:28:00.607Z",
        "updatedAt": "2022-12-31T15:37:24.911Z",
        "__v": 0,
        "course": {
            "_id": "6384a69690658873b8e1681b",
            "title": "CSEN701",
            "hours": 118,
            "subject": "Computer Science",
            "price": 65,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about Embedded Systems.",
            "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
            "reviews": [
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637909641e794efbe229af85",
                    "traineeName": "Sebastian Stan",
                    "_id": "639c519f01bafa910cabf95b"
                },
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637a356c54c79d632507dc8a",
                    "traineeName": "Tony Stark",
                    "_id": "639c5368eb50d1b1878ebc53"
                },
                {
                    "content": "yesss",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0cfd9b94d536a0f8fb4f"
                },
                {
                    "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b579f76ea3fa39cb92f457"
                }
            ],
            "overallRating": 3.1666666666666665,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "6395024e17a103e1f5e15f7d"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77d221174185adbe05a50"
                },
                {
                    "rating": 2,
                    "userId": "637a8c03f7740521fbe8246e",
                    "_id": "63a8812bad855bef7ecf7c09"
                },
                {
                    "rating": 2,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb989e20366c450b75a4"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf79b94d536a0f8fb2d"
                },
                {
                    "rating": 3,
                    "userId": "63b5790d6ea3fa39cb92f29c",
                    "_id": "63b579e26ea3fa39cb92f42f"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 4,
                    "_id": "6384a6b190658873b8e1681e"
                },
                {
                    "title": "Embedded Hardware",
                    "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
                    "shortDescription": "This lesson discusses Embedded Hardware",
                    "totalHours": 107,
                    "_id": "6384a6dd90658873b8e16824"
                },
                {
                    "title": "My 3rd Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "the description of my 3rd subtitle",
                    "totalHours": 4,
                    "_id": "63b8775809282f4c8b5f7cd9"
                },
                {
                    "title": "My 4th Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "ana bgd ta3bana",
                    "totalHours": 4,
                    "_id": "63b877b009282f4c8b5f7d27"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Yellow",
                    "_id": "6384a6eb90658873b8e1682b",
                    "index": 0
                },
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "Interstellar",
                    "_id": "6384a6fe90658873b8e16832",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T12:16:22.376Z",
            "updatedAt": "2023-01-06T19:42:00.442Z",
            "__v": 0,
            "discountApplied": true,
            "numOfEnrolledTrainees": 4,
            "traineesProgress": [
                {
                    "traineeId": "63a3196b78d093cbccc82bb7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9d0042821590c8a89c3da"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9ecf99e20366c450b76fb"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63a9ed079e20366c450b772a"
                },
                {
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63aceaeae99ea10bdc1e220e"
                },
                {
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63aceaf1e99ea10bdc1e223a"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b006b92cd8f6cb0e93b6a6"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b006be2cd8f6cb0e93b6d5"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "exercise",
                    "_id": "63b006c62cd8f6cb0e93b708"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b57a7b6ea3fa39cb92f55c"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b57a9d6ea3fa39cb92f61e"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "exercise",
                    "_id": "63b57aad6ea3fa39cb92f660"
                }
            ],
            "iTraineeNotes": [
                {
                    "note": "not ganna's note",
                    "_id": "63a5ad69d4971b7ccc06af13"
                },
                {
                    "iTraineeID": "63a9d4d85defffcabbcbc0a7",
                    "note": "hi im mariam",
                    "_id": "63a9ed7e9e20366c450b778f"
                },
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "noooo",
                    "_id": "63ae1a129b94d536a0f8ff98"
                },
                {
                    "iTraineeID": "63b5790d6ea3fa39cb92f29c",
                    "note": "hello people wussuuuuup",
                    "_id": "63b57a656ea3fa39cb92f527"
                }
            ],
            "published": true,
            "open": true,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63a93d1019aea603602a6680",
                    "note": "should be ganna the ctrainee's ONLY note",
                    "_id": "63add0da268f1e489cede62f"
                }
            ]
        },
        "reporter": {
            "_id": "63a3196b78d093cbccc82bb7",
            "firstname": "Freddie",
            "lastname": "Mercury",
            "username": "f.mercury",
            "password": "$2b$10$Lau8Bz/r3IRDlIONAO9.F.jox5TirJGCu73XLmqKqUn1dLhLv0xHu",
            "email": "melnaggar815@gmail.com",
            "gender": "male",
            "courses": [
                "6384a69690658873b8e1681b"
            ],
            "wallet": 745,
            "grades": [],
            "createdAt": "2022-12-21T14:34:19.175Z",
            "updatedAt": "2022-12-31T12:24:20.954Z",
            "__v": 0
        }
    },
    {
        "_id": "63a5e4133f3e68b310cb5d4f",
        "type": "financial",
        "content": "too expensive",
        "status": "Resolved",
        "courseId": "6384a69690658873b8e1681b",
        "reporterId": "63a34389398e97a471db5921",
        "followUp": "at least give me back my money!",
        "priority": 18,
        "createdAt": "2022-12-23T17:23:31.421Z",
        "updatedAt": "2022-12-31T15:49:53.039Z",
        "__v": 0,
        "course": {
            "_id": "6384a69690658873b8e1681b",
            "title": "CSEN701",
            "hours": 118,
            "subject": "Computer Science",
            "price": 65,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about Embedded Systems.",
            "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
            "reviews": [
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637909641e794efbe229af85",
                    "traineeName": "Sebastian Stan",
                    "_id": "639c519f01bafa910cabf95b"
                },
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637a356c54c79d632507dc8a",
                    "traineeName": "Tony Stark",
                    "_id": "639c5368eb50d1b1878ebc53"
                },
                {
                    "content": "yesss",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0cfd9b94d536a0f8fb4f"
                },
                {
                    "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b579f76ea3fa39cb92f457"
                }
            ],
            "overallRating": 3.1666666666666665,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "6395024e17a103e1f5e15f7d"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77d221174185adbe05a50"
                },
                {
                    "rating": 2,
                    "userId": "637a8c03f7740521fbe8246e",
                    "_id": "63a8812bad855bef7ecf7c09"
                },
                {
                    "rating": 2,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb989e20366c450b75a4"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf79b94d536a0f8fb2d"
                },
                {
                    "rating": 3,
                    "userId": "63b5790d6ea3fa39cb92f29c",
                    "_id": "63b579e26ea3fa39cb92f42f"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 4,
                    "_id": "6384a6b190658873b8e1681e"
                },
                {
                    "title": "Embedded Hardware",
                    "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
                    "shortDescription": "This lesson discusses Embedded Hardware",
                    "totalHours": 107,
                    "_id": "6384a6dd90658873b8e16824"
                },
                {
                    "title": "My 3rd Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "the description of my 3rd subtitle",
                    "totalHours": 4,
                    "_id": "63b8775809282f4c8b5f7cd9"
                },
                {
                    "title": "My 4th Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "ana bgd ta3bana",
                    "totalHours": 4,
                    "_id": "63b877b009282f4c8b5f7d27"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Yellow",
                    "_id": "6384a6eb90658873b8e1682b",
                    "index": 0
                },
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "Interstellar",
                    "_id": "6384a6fe90658873b8e16832",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T12:16:22.376Z",
            "updatedAt": "2023-01-06T19:42:00.442Z",
            "__v": 0,
            "discountApplied": true,
            "numOfEnrolledTrainees": 4,
            "traineesProgress": [
                {
                    "traineeId": "63a3196b78d093cbccc82bb7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9d0042821590c8a89c3da"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9ecf99e20366c450b76fb"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63a9ed079e20366c450b772a"
                },
                {
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63aceaeae99ea10bdc1e220e"
                },
                {
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63aceaf1e99ea10bdc1e223a"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b006b92cd8f6cb0e93b6a6"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b006be2cd8f6cb0e93b6d5"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "exercise",
                    "_id": "63b006c62cd8f6cb0e93b708"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b57a7b6ea3fa39cb92f55c"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b57a9d6ea3fa39cb92f61e"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "exercise",
                    "_id": "63b57aad6ea3fa39cb92f660"
                }
            ],
            "iTraineeNotes": [
                {
                    "note": "not ganna's note",
                    "_id": "63a5ad69d4971b7ccc06af13"
                },
                {
                    "iTraineeID": "63a9d4d85defffcabbcbc0a7",
                    "note": "hi im mariam",
                    "_id": "63a9ed7e9e20366c450b778f"
                },
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "noooo",
                    "_id": "63ae1a129b94d536a0f8ff98"
                },
                {
                    "iTraineeID": "63b5790d6ea3fa39cb92f29c",
                    "note": "hello people wussuuuuup",
                    "_id": "63b57a656ea3fa39cb92f527"
                }
            ],
            "published": true,
            "open": true,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63a93d1019aea603602a6680",
                    "note": "should be ganna the ctrainee's ONLY note",
                    "_id": "63add0da268f1e489cede62f"
                }
            ]
        },
        "reporter": {
            "_id": "63a34389398e97a471db5921",
            "username": "r.gosling",
            "password": "$2b$10$OUMyY7FuMHzgGwM8ckrRROS6zHaAthAWuY4BIvYnKLqmKgbLfpjAC",
            "country": "USA",
            "email": "nourhan.khedr24@gmail.com",
            "miniBio": "I was really bad in La La Land",
            "name": "Ryan Gosling",
            "rating": 3,
            "wallet": 2017,
            "ratings": [
                {
                    "rating": 0,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "63a76d12d0318f90018cfcd7"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77dad1174185adbe05a91"
                },
                {
                    "rating": 5,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb589e20366c450b7526"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf09b94d536a0f8faf7"
                }
            ],
            "reviews": [
                {
                    "content": "tesssstttt",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0ce29b94d536a0f8faea"
                },
                {
                    "content": "wallahi ya3ni mozza",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b57a0a6ea3fa39cb92f497"
                }
            ],
            "createdAt": "2022-12-21T17:34:01.355Z",
            "updatedAt": "2023-01-04T13:07:22.976Z",
            "__v": 0
        }
    },
    {
        "_id": "63a8c1f9ad855bef7ecf7de7",
        "type": "Technical",
        "content": "roht a3mel yansoon mala2etsh yansoon......",
        "status": "Resolved",
        "courseId": "6384a69690658873b8e1681b",
        "reporterId": "63a3196b78d093cbccc82bb7",
        "followUp": "",
        "priority": 25,
        "createdAt": "2022-12-25T21:34:49.062Z",
        "updatedAt": "2022-12-31T15:35:06.487Z",
        "__v": 0,
        "course": {
            "_id": "6384a69690658873b8e1681b",
            "title": "CSEN701",
            "hours": 118,
            "subject": "Computer Science",
            "price": 65,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about Embedded Systems.",
            "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
            "reviews": [
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637909641e794efbe229af85",
                    "traineeName": "Sebastian Stan",
                    "_id": "639c519f01bafa910cabf95b"
                },
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637a356c54c79d632507dc8a",
                    "traineeName": "Tony Stark",
                    "_id": "639c5368eb50d1b1878ebc53"
                },
                {
                    "content": "yesss",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0cfd9b94d536a0f8fb4f"
                },
                {
                    "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b579f76ea3fa39cb92f457"
                }
            ],
            "overallRating": 3.1666666666666665,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "6395024e17a103e1f5e15f7d"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77d221174185adbe05a50"
                },
                {
                    "rating": 2,
                    "userId": "637a8c03f7740521fbe8246e",
                    "_id": "63a8812bad855bef7ecf7c09"
                },
                {
                    "rating": 2,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb989e20366c450b75a4"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf79b94d536a0f8fb2d"
                },
                {
                    "rating": 3,
                    "userId": "63b5790d6ea3fa39cb92f29c",
                    "_id": "63b579e26ea3fa39cb92f42f"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 4,
                    "_id": "6384a6b190658873b8e1681e"
                },
                {
                    "title": "Embedded Hardware",
                    "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
                    "shortDescription": "This lesson discusses Embedded Hardware",
                    "totalHours": 107,
                    "_id": "6384a6dd90658873b8e16824"
                },
                {
                    "title": "My 3rd Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "the description of my 3rd subtitle",
                    "totalHours": 4,
                    "_id": "63b8775809282f4c8b5f7cd9"
                },
                {
                    "title": "My 4th Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "ana bgd ta3bana",
                    "totalHours": 4,
                    "_id": "63b877b009282f4c8b5f7d27"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Yellow",
                    "_id": "6384a6eb90658873b8e1682b",
                    "index": 0
                },
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "Interstellar",
                    "_id": "6384a6fe90658873b8e16832",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T12:16:22.376Z",
            "updatedAt": "2023-01-06T19:42:00.442Z",
            "__v": 0,
            "discountApplied": true,
            "numOfEnrolledTrainees": 4,
            "traineesProgress": [
                {
                    "traineeId": "63a3196b78d093cbccc82bb7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9d0042821590c8a89c3da"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9ecf99e20366c450b76fb"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63a9ed079e20366c450b772a"
                },
                {
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63aceaeae99ea10bdc1e220e"
                },
                {
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63aceaf1e99ea10bdc1e223a"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b006b92cd8f6cb0e93b6a6"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b006be2cd8f6cb0e93b6d5"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "exercise",
                    "_id": "63b006c62cd8f6cb0e93b708"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b57a7b6ea3fa39cb92f55c"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b57a9d6ea3fa39cb92f61e"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "exercise",
                    "_id": "63b57aad6ea3fa39cb92f660"
                }
            ],
            "iTraineeNotes": [
                {
                    "note": "not ganna's note",
                    "_id": "63a5ad69d4971b7ccc06af13"
                },
                {
                    "iTraineeID": "63a9d4d85defffcabbcbc0a7",
                    "note": "hi im mariam",
                    "_id": "63a9ed7e9e20366c450b778f"
                },
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "noooo",
                    "_id": "63ae1a129b94d536a0f8ff98"
                },
                {
                    "iTraineeID": "63b5790d6ea3fa39cb92f29c",
                    "note": "hello people wussuuuuup",
                    "_id": "63b57a656ea3fa39cb92f527"
                }
            ],
            "published": true,
            "open": true,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63a93d1019aea603602a6680",
                    "note": "should be ganna the ctrainee's ONLY note",
                    "_id": "63add0da268f1e489cede62f"
                }
            ]
        },
        "reporter": {
            "_id": "63a3196b78d093cbccc82bb7",
            "firstname": "Freddie",
            "lastname": "Mercury",
            "username": "f.mercury",
            "password": "$2b$10$Lau8Bz/r3IRDlIONAO9.F.jox5TirJGCu73XLmqKqUn1dLhLv0xHu",
            "email": "melnaggar815@gmail.com",
            "gender": "male",
            "courses": [
                "6384a69690658873b8e1681b"
            ],
            "wallet": 745,
            "grades": [],
            "createdAt": "2022-12-21T14:34:19.175Z",
            "updatedAt": "2022-12-31T12:24:20.954Z",
            "__v": 0
        }
    },
    {
        "_id": "63a9ee5b9e20366c450b786f",
        "type": "tec",
        "content": "asdfghjklsfghjk",
        "status": "Resolved",
        "courseId": "6384aa2163ed1a80c81fa216",
        "reporterId": "63a9d4d85defffcabbcbc0a7",
        "followUp": "where",
        "priority": 27,
        "createdAt": "2022-12-26T18:56:27.266Z",
        "updatedAt": "2022-12-26T19:12:39.721Z",
        "__v": 0,
        "course": {
            "_id": "6384aa2163ed1a80c81fa216",
            "title": "DMET702",
            "hours": 16,
            "subject": "Computer Science",
            "price": 70,
            "discount": 19,
            "discountValidUntil": "2022-12-31T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about Visualization & Animation",
            "previewURL": "//www.youtube.com/embed/aPnqx56V8-0",
            "reviews": [],
            "overallRating": 5,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "638776848b0f6fe1273054ba"
                }
            ],
            "discountApplied": true,
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/aPnqx56V8-0",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 10,
                    "_id": "6384aa4263ed1a80c81fa219"
                },
                {
                    "title": "Lesson 1",
                    "videoLink": "//www.youtube.com/embed/fKgoo_KT6aM",
                    "shortDescription": "This lesson will discuss ray intersections",
                    "totalHours": 3,
                    "_id": "6384aa7c63ed1a80c81fa21f"
                },
                {
                    "title": "Lesson 2",
                    "videoLink": "//www.youtube.com/embed/fKgoo_KT6aM",
                    "shortDescription": "This lesson will discuss illumination and lighting",
                    "totalHours": 3,
                    "_id": "6384aa9463ed1a80c81fa228"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Yellow",
                    "_id": "6384aaa163ed1a80c81fa231"
                },
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "The Help",
                    "_id": "6384aab063ed1a80c81fa239"
                },
                {
                    "question": "What is my favourite band?",
                    "options": [
                        "Queen",
                        "Arctic Monkeys",
                        "The 1975",
                        "5SOS"
                    ],
                    "answer": "Arctic Monkeys",
                    "_id": "6384aad263ed1a80c81fa244"
                },
                {
                    "question": "What is my favourite animal?",
                    "options": [
                        "Koala",
                        "Bear",
                        "Giraffe",
                        "Monkey"
                    ],
                    "answer": "Monkey",
                    "_id": "63a84724fe020776d1ccd5c5"
                }
            ],
            "createdAt": "2022-11-28T12:31:29.976Z",
            "updatedAt": "2022-12-30T23:43:16.598Z",
            "__v": 0,
            "numOfEnrolledTrainees": 8,
            "traineesProgress": [
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "6384aa7c63ed1a80c81fa21f",
                    "_id": "63a5c31ce3ace88c5ebbec1c"
                },
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "6384aa4263ed1a80c81fa219",
                    "_id": "63a5c327e3ace88c5ebbec2f"
                },
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "6384aa9463ed1a80c81fa228",
                    "_id": "63a5c388e3ace88c5ebbec58"
                },
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "exercise",
                    "_id": "63a5c393e3ace88c5ebbec74"
                }
            ],
            "iTraineeNotes": [
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "",
                    "_id": "63a5c331e3ace88c5ebbec47"
                },
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "testtttt",
                    "_id": "63a5c412e3ace88c5ebbec95"
                }
            ],
            "published": false,
            "open": false,
            "cTraineeNotes": []
        },
        "reporter": {
            "_id": "63a9d4d85defffcabbcbc0a7",
            "firstname": "Dylan",
            "lastname": "O'brien",
            "username": "d.obrien",
            "password": "$2b$10$URbL2R1a6LZOx2nj/jnIZ.6r7f59.ZMOKjI0Qgq3SJS1361YvhY2e",
            "email": "melnaggar815@gmail.com",
            "gender": "male",
            "courses": [
                "6384a69690658873b8e1681b",
                "6384b0f9fa8e271ab3db7cee",
                "6384ab3863ed1a80c81fa262",
                "63b022e9a2669ff313f140f4"
            ],
            "wallet": 20,
            "grades": [],
            "createdAt": "2022-12-26T17:07:36.263Z",
            "updatedAt": "2022-12-31T16:15:51.411Z",
            "__v": 0
        }
    },
    {
        "_id": "63b04d842f7665a020b2b881",
        "type": "Technical",
        "content": "edskml",
        "status": "Resolved",
        "courseId": "6384ab3863ed1a80c81fa262",
        "reporterId": "63a9d4d85defffcabbcbc0a7",
        "followUp": "please answer me",
        "priority": 28,
        "createdAt": "2022-12-31T14:56:04.244Z",
        "updatedAt": "2022-12-31T15:36:19.496Z",
        "__v": 0,
        "course": {
            "_id": "6384ab3863ed1a80c81fa262",
            "title": "DMET703",
            "hours": 6,
            "subject": "Digital Media",
            "price": 100,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about video & audio technology.",
            "previewURL": "//www.youtube.com/embed/fKgoo_KT6aM",
            "reviews": [],
            "overallRating": 0,
            "ratings": [],
            "discountApplied": true,
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/fKgoo_KT6aM",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 3,
                    "_id": "6384ab5863ed1a80c81fa265"
                },
                {
                    "title": "Lesson 1",
                    "videoLink": "//www.youtube.com/embed/fKgoo_KT6aM",
                    "shortDescription": "This lesson will discuss colour subsampling.",
                    "totalHours": 3,
                    "_id": "6384ab6963ed1a80c81fa26b"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Red",
                    "_id": "6384ab7763ed1a80c81fa272",
                    "index": 0
                }
            ],
            "createdAt": "2022-11-28T12:36:08.579Z",
            "updatedAt": "2023-01-04T13:24:05.977Z",
            "__v": 0,
            "numOfEnrolledTrainees": 10,
            "published": true,
            "open": true,
            "traineesProgress": [
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "6384ab6963ed1a80c81fa26b",
                    "_id": "63aa3d3e074e796989209f47"
                },
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "6384ab5863ed1a80c81fa265",
                    "_id": "63aa3d4b074e796989209f55"
                },
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "exercise",
                    "_id": "63aa3d56074e796989209f67"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "exercise",
                    "_id": "63b04f9c2f7665a020b2b9c3"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384ab6963ed1a80c81fa26b",
                    "_id": "63b04fe72f7665a020b2b9dd"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384ab5863ed1a80c81fa265",
                    "_id": "63b04fe82f7665a020b2b9fb"
                }
            ],
            "cTraineeNotes": [],
            "iTraineeNotes": []
        },
        "reporter": {
            "_id": "63a9d4d85defffcabbcbc0a7",
            "firstname": "Dylan",
            "lastname": "O'brien",
            "username": "d.obrien",
            "password": "$2b$10$URbL2R1a6LZOx2nj/jnIZ.6r7f59.ZMOKjI0Qgq3SJS1361YvhY2e",
            "email": "melnaggar815@gmail.com",
            "gender": "male",
            "courses": [
                "6384a69690658873b8e1681b",
                "6384b0f9fa8e271ab3db7cee",
                "6384ab3863ed1a80c81fa262",
                "63b022e9a2669ff313f140f4"
            ],
            "wallet": 20,
            "grades": [],
            "createdAt": "2022-12-26T17:07:36.263Z",
            "updatedAt": "2022-12-31T16:15:51.411Z",
            "__v": 0
        }
    },
    {
        "_id": "63b21bdfda1ecf541a89989b",
        "type": "different problem",
        "content": "ctrainee reporting",
        "status": "Resolved",
        "courseId": "63b022e9a2669ff313f140f4",
        "reporterId": "63b20908da1ecf541a8987e0",
        "followUp": "following upp as a ctrainee",
        "priority": 33,
        "createdAt": "2023-01-01T23:48:47.628Z",
        "updatedAt": "2023-01-02T00:06:23.935Z",
        "__v": 0,
        "course": {
            "_id": "63b022e9a2669ff313f140f4",
            "title": "Shoe Design",
            "hours": 12,
            "subject": "Digital Media",
            "price": 60,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a9e4579e20366c450b7379",
            "summary": "Come here and I will teach you about shoe design!",
            "previewURL": "//www.youtube.com/embed/4NRXx6U8ABQ",
            "discountApplied": true,
            "numOfEnrolledTrainees": 14,
            "published": true,
            "open": true,
            "overallRating": 3,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63b20908da1ecf541a8987e0",
                    "note": "ctrainee notes",
                    "_id": "63b21c2fda1ecf541a8999fb"
                }
            ],
            "iTraineeNotes": [],
            "reviews": [
                {
                    "content": "ctrainee reviewingggggggggg",
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "traineeName": "Ganna CTrainee",
                    "_id": "63b21cb1da1ecf541a899ae3"
                }
            ],
            "ratings": [
                {
                    "rating": 3,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63b04be62f7665a020b2b6f5"
                },
                {
                    "rating": 3,
                    "userId": "63b20908da1ecf541a8987e0",
                    "_id": "63b21ca7da1ecf541a899aca"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/4NRXx6U8ABQ",
                    "shortDescription": "This is an introduction about the art of shoe design",
                    "totalHours": 4,
                    "_id": "63b0231ca2669ff313f14123"
                },
                {
                    "title": "Materials & Equipment",
                    "videoLink": "//www.youtube.com/embed/4NRXx6U8ABQ",
                    "shortDescription": "This lesson will get you familiar with the tools needed for shoe design.",
                    "totalHours": 4,
                    "_id": "63b02343a2669ff313f1412d"
                },
                {
                    "title": "Thinking Style",
                    "videoLink": "//www.youtube.com/embed/4NRXx6U8ABQ",
                    "shortDescription": "This will teach you where your head should be while designing a shoe",
                    "totalHours": 4,
                    "_id": "63b02368a2669ff313f1413b"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite shoe brand?",
                    "options": [
                        "Converse",
                        "Clark's",
                        "Nike",
                        "Adidas"
                    ],
                    "answer": "Nike",
                    "index": 0,
                    "_id": "63b02386a2669ff313f1417a"
                },
                {
                    "question": "What is my favourite designer shoe?",
                    "options": [
                        "Balenciaga",
                        "Dior",
                        "YSL",
                        "Gucci"
                    ],
                    "answer": "Balenciaga",
                    "index": 1,
                    "_id": "63b023c0a2669ff313f14185"
                },
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Orange",
                        "Pink",
                        "Blue"
                    ],
                    "answer": "Yellow",
                    "index": 2,
                    "_id": "63b023eea2669ff313f14193"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "exercise",
                    "_id": "63b04c602f7665a020b2b70b"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b0231ca2669ff313f14123",
                    "_id": "63b0690ffe2cb944aae5fdc9"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02368a2669ff313f1413b",
                    "_id": "63b06916fe2cb944aae5fde0"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02343a2669ff313f1412d",
                    "_id": "63b0691afe2cb944aae5fe12"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "63b0231ca2669ff313f14123",
                    "_id": "63b21c46da1ecf541a899a16"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "63b02343a2669ff313f1412d",
                    "_id": "63b21c49da1ecf541a899a3a"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "63b02368a2669ff313f1413b",
                    "_id": "63b21c4cda1ecf541a899a62"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "exercise",
                    "_id": "63b21c55da1ecf541a899a8e"
                }
            ],
            "createdAt": "2022-12-31T11:54:17.834Z",
            "updatedAt": "2023-01-04T13:24:10.799Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b20908da1ecf541a8987e0",
            "firstname": "Ganna",
            "lastname": "CTrainee",
            "username": "gctrainee",
            "password": "$2b$10$59vDsMPP2Z9GNV6XlQ4Xpe.jCZ/ueJsfo4df8cIm4ZIK4V2UVV10y",
            "email": "gannamelsayed@gmail.com",
            "courses": [
                "63b022e9a2669ff313f140f4",
                "63b024dba2669ff313f14280",
                "63b2139bda1ecf541a89907b"
            ],
            "grades": [],
            "corporate": "Versace",
            "createdAt": "2023-01-01T22:28:24.465Z",
            "updatedAt": "2023-01-02T00:44:32.813Z",
            "__v": 0
        }
    },
    {
        "_id": "63a72cc6d0318f90018cfbbe",
        "type": "social",
        "content": "hobbabababbaba",
        "status": "Resolved",
        "courseId": "6384b0f9fa8e271ab3db7cee",
        "reporterId": "637a8c03f7740521fbe8246e",
        "followUp": "",
        "priority": null,
        "createdAt": "2022-12-24T16:45:58.412Z",
        "updatedAt": "2022-12-31T15:35:16.518Z",
        "__v": 0,
        "course": {
            "_id": "6384b0f9fa8e271ab3db7cee",
            "title": "DMET502",
            "hours": 8,
            "subject": "Lab Programming",
            "price": 0,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63715a56d953904400b6a4df",
            "summary": "This course is about computer graphics.",
            "previewURL": "//www.youtube.com/embed/M_lVZIpgnjU",
            "reviews": [],
            "overallRating": 5,
            "ratings": [
                {
                    "rating": 4,
                    "userId": "637a8c03f7740521fbe8246e",
                    "_id": "63a794b91174185adbe05c6a"
                }
            ],
            "discountApplied": true,
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/M_lVZIpgnjU",
                    "shortDescription": "Introduction lesson",
                    "totalHours": 4,
                    "_id": "6384b182fa8e271ab3db7cf1"
                },
                {
                    "title": "Lesson 1",
                    "videoLink": "//www.youtube.com/embed/M_lVZIpgnjU",
                    "shortDescription": "This lesson discusses how to build 2D models using OpenGL.",
                    "totalHours": 4,
                    "_id": "6384b1a1fa8e271ab3db7cf7"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Blue",
                    "_id": "6384b1befa8e271ab3db7cfe",
                    "index": 0
                },
                {
                    "question": "What is my favourite number?",
                    "options": [
                        "3",
                        "4",
                        "11",
                        "5"
                    ],
                    "answer": "3",
                    "_id": "6384b1e1fa8e271ab3db7d05",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T13:00:41.269Z",
            "updatedAt": "2023-01-04T13:24:08.743Z",
            "__v": 0,
            "numOfEnrolledTrainees": 4,
            "traineesProgress": [
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "exercise",
                    "_id": "63aa3d9b074e79698920a018"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384b1a1fa8e271ab3db7cf7",
                    "_id": "63af522cf82355e0adadc6a7"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384b182fa8e271ab3db7cf1",
                    "_id": "63af5232f82355e0adadc6cc"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "exercise",
                    "_id": "63b04c992f7665a020b2b782"
                }
            ],
            "published": true,
            "open": true,
            "iTraineeNotes": [
                {
                    "iTraineeID": "63a9d4d85defffcabbcbc0a7",
                    "note": "This is the best time ever",
                    "_id": "63b04cfb2f7665a020b2b79e"
                }
            ],
            "cTraineeNotes": []
        },
        "reporter": {
            "_id": "637a8c03f7740521fbe8246e",
            "firstname": "Alex",
            "lastname": "Turner",
            "username": "a.turner",
            "password": "$2b$10$kUPNrNHKeixXFAMt5pmyZe7rS01bhN7BpSZoSfMAwnZsRntastThe",
            "email": "a.turner@gmail.com",
            "country": "USA",
            "courses": [
                "6384a69690658873b8e1681b",
                "6384aa2163ed1a80c81fa216"
            ],
            "grades": [
                {
                    "courseID": "6384b23ffa8e271ab3db7d0e",
                    "exercises": [
                        {
                            "exerciseID": "6384b306fa8e271ab3db7d37",
                            "grade": 8,
                            "_id": "637a8c03f7740521fbe82470"
                        }
                    ],
                    "_id": "637a8c03f7740521fbe8246f"
                },
                {
                    "courseID": "6384b23ffa8e271ab3db7d0e",
                    "exercises": [
                        {
                            "exerciseID": "6384b317fa8e271ab3db7d40",
                            "grade": 2,
                            "_id": "637a8c03f7740521fbe82472"
                        }
                    ],
                    "_id": "637a8c03f7740521fbe82471"
                }
            ],
            "createdAt": "2022-11-20T20:20:19.637Z",
            "updatedAt": "2022-12-27T22:29:19.045Z",
            "__v": 0
        }
    },
    {
        "_id": "63a73230d0318f90018cfbe0",
        "type": "emotional",
        "content": "this course makes me feel too smart",
        "status": "Resolved",
        "courseId": "6384ab3863ed1a80c81fa262",
        "reporterId": "63a34389398e97a471db5921",
        "followUp": "",
        "priority": null,
        "createdAt": "2022-12-24T17:09:04.839Z",
        "updatedAt": "2022-12-31T15:41:23.989Z",
        "__v": 0,
        "course": {
            "_id": "6384ab3863ed1a80c81fa262",
            "title": "DMET703",
            "hours": 6,
            "subject": "Digital Media",
            "price": 100,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about video & audio technology.",
            "previewURL": "//www.youtube.com/embed/fKgoo_KT6aM",
            "reviews": [],
            "overallRating": 0,
            "ratings": [],
            "discountApplied": true,
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/fKgoo_KT6aM",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 3,
                    "_id": "6384ab5863ed1a80c81fa265"
                },
                {
                    "title": "Lesson 1",
                    "videoLink": "//www.youtube.com/embed/fKgoo_KT6aM",
                    "shortDescription": "This lesson will discuss colour subsampling.",
                    "totalHours": 3,
                    "_id": "6384ab6963ed1a80c81fa26b"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Red",
                    "_id": "6384ab7763ed1a80c81fa272",
                    "index": 0
                }
            ],
            "createdAt": "2022-11-28T12:36:08.579Z",
            "updatedAt": "2023-01-04T13:24:05.977Z",
            "__v": 0,
            "numOfEnrolledTrainees": 10,
            "published": true,
            "open": true,
            "traineesProgress": [
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "6384ab6963ed1a80c81fa26b",
                    "_id": "63aa3d3e074e796989209f47"
                },
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "6384ab5863ed1a80c81fa265",
                    "_id": "63aa3d4b074e796989209f55"
                },
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "exercise",
                    "_id": "63aa3d56074e796989209f67"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "exercise",
                    "_id": "63b04f9c2f7665a020b2b9c3"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384ab6963ed1a80c81fa26b",
                    "_id": "63b04fe72f7665a020b2b9dd"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384ab5863ed1a80c81fa265",
                    "_id": "63b04fe82f7665a020b2b9fb"
                }
            ],
            "cTraineeNotes": [],
            "iTraineeNotes": []
        },
        "reporter": {
            "_id": "63a34389398e97a471db5921",
            "username": "r.gosling",
            "password": "$2b$10$OUMyY7FuMHzgGwM8ckrRROS6zHaAthAWuY4BIvYnKLqmKgbLfpjAC",
            "country": "USA",
            "email": "nourhan.khedr24@gmail.com",
            "miniBio": "I was really bad in La La Land",
            "name": "Ryan Gosling",
            "rating": 3,
            "wallet": 2017,
            "ratings": [
                {
                    "rating": 0,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "63a76d12d0318f90018cfcd7"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77dad1174185adbe05a91"
                },
                {
                    "rating": 5,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb589e20366c450b7526"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf09b94d536a0f8faf7"
                }
            ],
            "reviews": [
                {
                    "content": "tesssstttt",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0ce29b94d536a0f8faea"
                },
                {
                    "content": "wallahi ya3ni mozza",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b57a0a6ea3fa39cb92f497"
                }
            ],
            "createdAt": "2022-12-21T17:34:01.355Z",
            "updatedAt": "2023-01-04T13:07:22.976Z",
            "__v": 0
        }
    },
    {
        "_id": "63aed0813fb6cb7ae25abb49",
        "type": "Technical",
        "content": "bomobommmmmm",
        "status": "Resolved",
        "courseId": "6384a69690658873b8e1681b",
        "reporterId": "63a3196b78d093cbccc82bb7",
        "followUp": "",
        "priority": null,
        "createdAt": "2022-12-30T11:50:25.608Z",
        "updatedAt": "2022-12-30T12:01:17.411Z",
        "__v": 0,
        "course": {
            "_id": "6384a69690658873b8e1681b",
            "title": "CSEN701",
            "hours": 118,
            "subject": "Computer Science",
            "price": 65,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about Embedded Systems.",
            "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
            "reviews": [
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637909641e794efbe229af85",
                    "traineeName": "Sebastian Stan",
                    "_id": "639c519f01bafa910cabf95b"
                },
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637a356c54c79d632507dc8a",
                    "traineeName": "Tony Stark",
                    "_id": "639c5368eb50d1b1878ebc53"
                },
                {
                    "content": "yesss",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0cfd9b94d536a0f8fb4f"
                },
                {
                    "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b579f76ea3fa39cb92f457"
                }
            ],
            "overallRating": 3.1666666666666665,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "6395024e17a103e1f5e15f7d"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77d221174185adbe05a50"
                },
                {
                    "rating": 2,
                    "userId": "637a8c03f7740521fbe8246e",
                    "_id": "63a8812bad855bef7ecf7c09"
                },
                {
                    "rating": 2,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb989e20366c450b75a4"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf79b94d536a0f8fb2d"
                },
                {
                    "rating": 3,
                    "userId": "63b5790d6ea3fa39cb92f29c",
                    "_id": "63b579e26ea3fa39cb92f42f"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 4,
                    "_id": "6384a6b190658873b8e1681e"
                },
                {
                    "title": "Embedded Hardware",
                    "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
                    "shortDescription": "This lesson discusses Embedded Hardware",
                    "totalHours": 107,
                    "_id": "6384a6dd90658873b8e16824"
                },
                {
                    "title": "My 3rd Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "the description of my 3rd subtitle",
                    "totalHours": 4,
                    "_id": "63b8775809282f4c8b5f7cd9"
                },
                {
                    "title": "My 4th Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "ana bgd ta3bana",
                    "totalHours": 4,
                    "_id": "63b877b009282f4c8b5f7d27"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Yellow",
                    "_id": "6384a6eb90658873b8e1682b",
                    "index": 0
                },
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "Interstellar",
                    "_id": "6384a6fe90658873b8e16832",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T12:16:22.376Z",
            "updatedAt": "2023-01-06T19:42:00.442Z",
            "__v": 0,
            "discountApplied": true,
            "numOfEnrolledTrainees": 4,
            "traineesProgress": [
                {
                    "traineeId": "63a3196b78d093cbccc82bb7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9d0042821590c8a89c3da"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9ecf99e20366c450b76fb"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63a9ed079e20366c450b772a"
                },
                {
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63aceaeae99ea10bdc1e220e"
                },
                {
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63aceaf1e99ea10bdc1e223a"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b006b92cd8f6cb0e93b6a6"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b006be2cd8f6cb0e93b6d5"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "exercise",
                    "_id": "63b006c62cd8f6cb0e93b708"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b57a7b6ea3fa39cb92f55c"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b57a9d6ea3fa39cb92f61e"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "exercise",
                    "_id": "63b57aad6ea3fa39cb92f660"
                }
            ],
            "iTraineeNotes": [
                {
                    "note": "not ganna's note",
                    "_id": "63a5ad69d4971b7ccc06af13"
                },
                {
                    "iTraineeID": "63a9d4d85defffcabbcbc0a7",
                    "note": "hi im mariam",
                    "_id": "63a9ed7e9e20366c450b778f"
                },
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "noooo",
                    "_id": "63ae1a129b94d536a0f8ff98"
                },
                {
                    "iTraineeID": "63b5790d6ea3fa39cb92f29c",
                    "note": "hello people wussuuuuup",
                    "_id": "63b57a656ea3fa39cb92f527"
                }
            ],
            "published": true,
            "open": true,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63a93d1019aea603602a6680",
                    "note": "should be ganna the ctrainee's ONLY note",
                    "_id": "63add0da268f1e489cede62f"
                }
            ]
        },
        "reporter": {
            "_id": "63a3196b78d093cbccc82bb7",
            "firstname": "Freddie",
            "lastname": "Mercury",
            "username": "f.mercury",
            "password": "$2b$10$Lau8Bz/r3IRDlIONAO9.F.jox5TirJGCu73XLmqKqUn1dLhLv0xHu",
            "email": "melnaggar815@gmail.com",
            "gender": "male",
            "courses": [
                "6384a69690658873b8e1681b"
            ],
            "wallet": 745,
            "grades": [],
            "createdAt": "2022-12-21T14:34:19.175Z",
            "updatedAt": "2022-12-31T12:24:20.954Z",
            "__v": 0
        }
    },
    {
        "_id": "63b06c05fe2cb944aae602d1",
        "type": "Financial",
        "content": "c trainee reporting a problem",
        "status": "Resolved",
        "courseId": "63b022e9a2669ff313f140f4",
        "reporterId": "63b04cbffe2cb944aae5de09",
        "followUp": "",
        "priority": null,
        "createdAt": "2022-12-31T17:06:13.945Z",
        "updatedAt": "2022-12-31T17:07:36.904Z",
        "__v": 0,
        "course": {
            "_id": "63b022e9a2669ff313f140f4",
            "title": "Shoe Design",
            "hours": 12,
            "subject": "Digital Media",
            "price": 60,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a9e4579e20366c450b7379",
            "summary": "Come here and I will teach you about shoe design!",
            "previewURL": "//www.youtube.com/embed/4NRXx6U8ABQ",
            "discountApplied": true,
            "numOfEnrolledTrainees": 14,
            "published": true,
            "open": true,
            "overallRating": 3,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63b20908da1ecf541a8987e0",
                    "note": "ctrainee notes",
                    "_id": "63b21c2fda1ecf541a8999fb"
                }
            ],
            "iTraineeNotes": [],
            "reviews": [
                {
                    "content": "ctrainee reviewingggggggggg",
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "traineeName": "Ganna CTrainee",
                    "_id": "63b21cb1da1ecf541a899ae3"
                }
            ],
            "ratings": [
                {
                    "rating": 3,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63b04be62f7665a020b2b6f5"
                },
                {
                    "rating": 3,
                    "userId": "63b20908da1ecf541a8987e0",
                    "_id": "63b21ca7da1ecf541a899aca"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/4NRXx6U8ABQ",
                    "shortDescription": "This is an introduction about the art of shoe design",
                    "totalHours": 4,
                    "_id": "63b0231ca2669ff313f14123"
                },
                {
                    "title": "Materials & Equipment",
                    "videoLink": "//www.youtube.com/embed/4NRXx6U8ABQ",
                    "shortDescription": "This lesson will get you familiar with the tools needed for shoe design.",
                    "totalHours": 4,
                    "_id": "63b02343a2669ff313f1412d"
                },
                {
                    "title": "Thinking Style",
                    "videoLink": "//www.youtube.com/embed/4NRXx6U8ABQ",
                    "shortDescription": "This will teach you where your head should be while designing a shoe",
                    "totalHours": 4,
                    "_id": "63b02368a2669ff313f1413b"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite shoe brand?",
                    "options": [
                        "Converse",
                        "Clark's",
                        "Nike",
                        "Adidas"
                    ],
                    "answer": "Nike",
                    "index": 0,
                    "_id": "63b02386a2669ff313f1417a"
                },
                {
                    "question": "What is my favourite designer shoe?",
                    "options": [
                        "Balenciaga",
                        "Dior",
                        "YSL",
                        "Gucci"
                    ],
                    "answer": "Balenciaga",
                    "index": 1,
                    "_id": "63b023c0a2669ff313f14185"
                },
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Orange",
                        "Pink",
                        "Blue"
                    ],
                    "answer": "Yellow",
                    "index": 2,
                    "_id": "63b023eea2669ff313f14193"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "exercise",
                    "_id": "63b04c602f7665a020b2b70b"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b0231ca2669ff313f14123",
                    "_id": "63b0690ffe2cb944aae5fdc9"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02368a2669ff313f1413b",
                    "_id": "63b06916fe2cb944aae5fde0"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02343a2669ff313f1412d",
                    "_id": "63b0691afe2cb944aae5fe12"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "63b0231ca2669ff313f14123",
                    "_id": "63b21c46da1ecf541a899a16"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "63b02343a2669ff313f1412d",
                    "_id": "63b21c49da1ecf541a899a3a"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "63b02368a2669ff313f1413b",
                    "_id": "63b21c4cda1ecf541a899a62"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "exercise",
                    "_id": "63b21c55da1ecf541a899a8e"
                }
            ],
            "createdAt": "2022-12-31T11:54:17.834Z",
            "updatedAt": "2023-01-04T13:24:10.799Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b04cbffe2cb944aae5de09",
            "firstname": "Ganna",
            "lastname": "ElSayed",
            "username": "gannactraineefinal",
            "password": "$2b$10$XAC79HDjrunqmpoNkCfyyuSDoKuxEgLBzJzT6yxJdwmIGcvi0A4iu",
            "email": "gannamelsayed@gmail.com",
            "courses": [
                "63b022e9a2669ff313f140f4",
                "63b024dba2669ff313f14280",
                "63b054dbfe2cb944aae5e1d4"
            ],
            "grades": [],
            "corporate": "GUC",
            "createdAt": "2022-12-31T14:52:47.017Z",
            "updatedAt": "2022-12-31T17:11:14.110Z",
            "__v": 0
        }
    },
    {
        "_id": "63b071adcf38dfc34f339f04",
        "type": "Financial",
        "content": "life sucks",
        "status": "Resolved",
        "courseId": "63b024dba2669ff313f14280",
        "reporterId": "63b0522f2f7665a020b2ba19",
        "followUp": "",
        "priority": null,
        "createdAt": "2022-12-31T17:30:21.426Z",
        "updatedAt": "2022-12-31T17:30:39.144Z",
        "__v": 0,
        "course": {
            "_id": "63b024dba2669ff313f14280",
            "title": "Jewelry Design",
            "hours": 12,
            "subject": "Lab Programming",
            "price": 80,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a9e4579e20366c450b7379",
            "summary": "This course will teach you the essentials of jewelry design.",
            "previewURL": "//www.youtube.com/embed/aEvbBFV3zB4",
            "discountApplied": true,
            "numOfEnrolledTrainees": 7,
            "published": false,
            "open": true,
            "overallRating": 0,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63b04cbffe2cb944aae5de09",
                    "note": "new ruless",
                    "_id": "63b069f5fe2cb944aae6016e"
                }
            ],
            "iTraineeNotes": [],
            "reviews": [],
            "ratings": [],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "This is an introduction where we discuss the history of jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02506a2669ff313f142bb"
                },
                {
                    "title": "Materials & Equipment",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "In this lesson we will discuss the needed materials and equipment for the jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02532a2669ff313f142c5"
                },
                {
                    "title": "Design Patterns",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "In this lesson, we will discuss the different design patterns used frequently in jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02553a2669ff313f142d3"
                }
            ],
            "exercises": [
                {
                    "question": "What is the best day of the week?",
                    "options": [
                        "Sunday",
                        "Friday",
                        "Monday",
                        "Thursday"
                    ],
                    "answer": "Friday",
                    "index": 0,
                    "_id": "63b02586a2669ff313f1431e"
                },
                {
                    "question": "Who is my favourite singer?",
                    "options": [
                        "The Weeknd",
                        "Frank Ocean",
                        "Taylor Swift",
                        "Daniel Ceasar"
                    ],
                    "answer": "The Weeknd",
                    "index": 1,
                    "_id": "63b025b3a2669ff313f14329"
                },
                {
                    "question": "What is the best time of the year?",
                    "options": [
                        "Thanksgiving",
                        "Christmas",
                        "New Year's",
                        "Summer"
                    ],
                    "answer": "Christmas",
                    "index": 2,
                    "_id": "63b025dba2669ff313f14337"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "exercise",
                    "_id": "63b0525e2f7665a020b2bb01"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02553a2669ff313f142d3",
                    "_id": "63b0528d2f7665a020b2bb13"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02532a2669ff313f142c5",
                    "_id": "63b0528f2f7665a020b2bb29"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02506a2669ff313f142bb",
                    "_id": "63b052932f7665a020b2bb43"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02532a2669ff313f142c5",
                    "_id": "63b06931fe2cb944aae5ffd1"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02553a2669ff313f142d3",
                    "_id": "63b06932fe2cb944aae5fff3"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02506a2669ff313f142bb",
                    "_id": "63b06935fe2cb944aae6006d"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "exercise",
                    "_id": "63b069a6fe2cb944aae60128"
                }
            ],
            "createdAt": "2022-12-31T12:02:35.085Z",
            "updatedAt": "2023-01-04T13:24:11.625Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b0522f2f7665a020b2ba19",
            "firstname": "Mariam",
            "lastname": "ElNaggar",
            "username": "m.elnaggar",
            "password": "$2b$10$aK5p7y53VPEzF6Rw7gInneu5kFReg27KwD7xR0/rd0Z0wjR7Yd3nS",
            "email": "melnaggar815@gmail.com",
            "gender": "female",
            "courses": [
                "63b024dba2669ff313f14280"
            ],
            "wallet": 0,
            "grades": [],
            "createdAt": "2022-12-31T15:15:59.101Z",
            "updatedAt": "2022-12-31T15:57:14.252Z",
            "__v": 0
        }
    },
    {
        "_id": "63b0733ecf38dfc34f33a7c2",
        "type": "Financial",
        "content": "hi",
        "status": "Resolved",
        "courseId": "63b024dba2669ff313f14280",
        "reporterId": "63b0522f2f7665a020b2ba19",
        "followUp": "",
        "priority": null,
        "createdAt": "2022-12-31T17:37:02.280Z",
        "updatedAt": "2022-12-31T17:37:32.372Z",
        "__v": 0,
        "course": {
            "_id": "63b024dba2669ff313f14280",
            "title": "Jewelry Design",
            "hours": 12,
            "subject": "Lab Programming",
            "price": 80,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a9e4579e20366c450b7379",
            "summary": "This course will teach you the essentials of jewelry design.",
            "previewURL": "//www.youtube.com/embed/aEvbBFV3zB4",
            "discountApplied": true,
            "numOfEnrolledTrainees": 7,
            "published": false,
            "open": true,
            "overallRating": 0,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63b04cbffe2cb944aae5de09",
                    "note": "new ruless",
                    "_id": "63b069f5fe2cb944aae6016e"
                }
            ],
            "iTraineeNotes": [],
            "reviews": [],
            "ratings": [],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "This is an introduction where we discuss the history of jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02506a2669ff313f142bb"
                },
                {
                    "title": "Materials & Equipment",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "In this lesson we will discuss the needed materials and equipment for the jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02532a2669ff313f142c5"
                },
                {
                    "title": "Design Patterns",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "In this lesson, we will discuss the different design patterns used frequently in jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02553a2669ff313f142d3"
                }
            ],
            "exercises": [
                {
                    "question": "What is the best day of the week?",
                    "options": [
                        "Sunday",
                        "Friday",
                        "Monday",
                        "Thursday"
                    ],
                    "answer": "Friday",
                    "index": 0,
                    "_id": "63b02586a2669ff313f1431e"
                },
                {
                    "question": "Who is my favourite singer?",
                    "options": [
                        "The Weeknd",
                        "Frank Ocean",
                        "Taylor Swift",
                        "Daniel Ceasar"
                    ],
                    "answer": "The Weeknd",
                    "index": 1,
                    "_id": "63b025b3a2669ff313f14329"
                },
                {
                    "question": "What is the best time of the year?",
                    "options": [
                        "Thanksgiving",
                        "Christmas",
                        "New Year's",
                        "Summer"
                    ],
                    "answer": "Christmas",
                    "index": 2,
                    "_id": "63b025dba2669ff313f14337"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "exercise",
                    "_id": "63b0525e2f7665a020b2bb01"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02553a2669ff313f142d3",
                    "_id": "63b0528d2f7665a020b2bb13"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02532a2669ff313f142c5",
                    "_id": "63b0528f2f7665a020b2bb29"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02506a2669ff313f142bb",
                    "_id": "63b052932f7665a020b2bb43"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02532a2669ff313f142c5",
                    "_id": "63b06931fe2cb944aae5ffd1"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02553a2669ff313f142d3",
                    "_id": "63b06932fe2cb944aae5fff3"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02506a2669ff313f142bb",
                    "_id": "63b06935fe2cb944aae6006d"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "exercise",
                    "_id": "63b069a6fe2cb944aae60128"
                }
            ],
            "createdAt": "2022-12-31T12:02:35.085Z",
            "updatedAt": "2023-01-04T13:24:11.625Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b0522f2f7665a020b2ba19",
            "firstname": "Mariam",
            "lastname": "ElNaggar",
            "username": "m.elnaggar",
            "password": "$2b$10$aK5p7y53VPEzF6Rw7gInneu5kFReg27KwD7xR0/rd0Z0wjR7Yd3nS",
            "email": "melnaggar815@gmail.com",
            "gender": "female",
            "courses": [
                "63b024dba2669ff313f14280"
            ],
            "wallet": 0,
            "grades": [],
            "createdAt": "2022-12-31T15:15:59.101Z",
            "updatedAt": "2022-12-31T15:57:14.252Z",
            "__v": 0
        }
    },
    {
        "_id": "63b074e9cf38dfc34f33b0b9",
        "type": "Financial",
        "content": "no",
        "status": "Resolved",
        "courseId": "63b024dba2669ff313f14280",
        "reporterId": "63b0522f2f7665a020b2ba19",
        "followUp": "",
        "priority": null,
        "createdAt": "2022-12-31T17:44:09.488Z",
        "updatedAt": "2022-12-31T17:44:23.599Z",
        "__v": 0,
        "course": {
            "_id": "63b024dba2669ff313f14280",
            "title": "Jewelry Design",
            "hours": 12,
            "subject": "Lab Programming",
            "price": 80,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a9e4579e20366c450b7379",
            "summary": "This course will teach you the essentials of jewelry design.",
            "previewURL": "//www.youtube.com/embed/aEvbBFV3zB4",
            "discountApplied": true,
            "numOfEnrolledTrainees": 7,
            "published": false,
            "open": true,
            "overallRating": 0,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63b04cbffe2cb944aae5de09",
                    "note": "new ruless",
                    "_id": "63b069f5fe2cb944aae6016e"
                }
            ],
            "iTraineeNotes": [],
            "reviews": [],
            "ratings": [],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "This is an introduction where we discuss the history of jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02506a2669ff313f142bb"
                },
                {
                    "title": "Materials & Equipment",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "In this lesson we will discuss the needed materials and equipment for the jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02532a2669ff313f142c5"
                },
                {
                    "title": "Design Patterns",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "In this lesson, we will discuss the different design patterns used frequently in jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02553a2669ff313f142d3"
                }
            ],
            "exercises": [
                {
                    "question": "What is the best day of the week?",
                    "options": [
                        "Sunday",
                        "Friday",
                        "Monday",
                        "Thursday"
                    ],
                    "answer": "Friday",
                    "index": 0,
                    "_id": "63b02586a2669ff313f1431e"
                },
                {
                    "question": "Who is my favourite singer?",
                    "options": [
                        "The Weeknd",
                        "Frank Ocean",
                        "Taylor Swift",
                        "Daniel Ceasar"
                    ],
                    "answer": "The Weeknd",
                    "index": 1,
                    "_id": "63b025b3a2669ff313f14329"
                },
                {
                    "question": "What is the best time of the year?",
                    "options": [
                        "Thanksgiving",
                        "Christmas",
                        "New Year's",
                        "Summer"
                    ],
                    "answer": "Christmas",
                    "index": 2,
                    "_id": "63b025dba2669ff313f14337"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "exercise",
                    "_id": "63b0525e2f7665a020b2bb01"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02553a2669ff313f142d3",
                    "_id": "63b0528d2f7665a020b2bb13"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02532a2669ff313f142c5",
                    "_id": "63b0528f2f7665a020b2bb29"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02506a2669ff313f142bb",
                    "_id": "63b052932f7665a020b2bb43"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02532a2669ff313f142c5",
                    "_id": "63b06931fe2cb944aae5ffd1"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02553a2669ff313f142d3",
                    "_id": "63b06932fe2cb944aae5fff3"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02506a2669ff313f142bb",
                    "_id": "63b06935fe2cb944aae6006d"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "exercise",
                    "_id": "63b069a6fe2cb944aae60128"
                }
            ],
            "createdAt": "2022-12-31T12:02:35.085Z",
            "updatedAt": "2023-01-04T13:24:11.625Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b0522f2f7665a020b2ba19",
            "firstname": "Mariam",
            "lastname": "ElNaggar",
            "username": "m.elnaggar",
            "password": "$2b$10$aK5p7y53VPEzF6Rw7gInneu5kFReg27KwD7xR0/rd0Z0wjR7Yd3nS",
            "email": "melnaggar815@gmail.com",
            "gender": "female",
            "courses": [
                "63b024dba2669ff313f14280"
            ],
            "wallet": 0,
            "grades": [],
            "createdAt": "2022-12-31T15:15:59.101Z",
            "updatedAt": "2022-12-31T15:57:14.252Z",
            "__v": 0
        }
    },
    {
        "_id": "63b54bb9014e12b8b158df93",
        "type": "Technical",
        "content": "test resolved",
        "status": "Resolved",
        "courseId": "63b024dba2669ff313f14280",
        "reporterId": "63b0522f2f7665a020b2ba19",
        "followUp": "",
        "priority": null,
        "createdAt": "2023-01-04T09:49:45.804Z",
        "updatedAt": "2023-01-04T09:50:53.493Z",
        "__v": 0,
        "course": {
            "_id": "63b024dba2669ff313f14280",
            "title": "Jewelry Design",
            "hours": 12,
            "subject": "Lab Programming",
            "price": 80,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a9e4579e20366c450b7379",
            "summary": "This course will teach you the essentials of jewelry design.",
            "previewURL": "//www.youtube.com/embed/aEvbBFV3zB4",
            "discountApplied": true,
            "numOfEnrolledTrainees": 7,
            "published": false,
            "open": true,
            "overallRating": 0,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63b04cbffe2cb944aae5de09",
                    "note": "new ruless",
                    "_id": "63b069f5fe2cb944aae6016e"
                }
            ],
            "iTraineeNotes": [],
            "reviews": [],
            "ratings": [],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "This is an introduction where we discuss the history of jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02506a2669ff313f142bb"
                },
                {
                    "title": "Materials & Equipment",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "In this lesson we will discuss the needed materials and equipment for the jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02532a2669ff313f142c5"
                },
                {
                    "title": "Design Patterns",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "In this lesson, we will discuss the different design patterns used frequently in jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02553a2669ff313f142d3"
                }
            ],
            "exercises": [
                {
                    "question": "What is the best day of the week?",
                    "options": [
                        "Sunday",
                        "Friday",
                        "Monday",
                        "Thursday"
                    ],
                    "answer": "Friday",
                    "index": 0,
                    "_id": "63b02586a2669ff313f1431e"
                },
                {
                    "question": "Who is my favourite singer?",
                    "options": [
                        "The Weeknd",
                        "Frank Ocean",
                        "Taylor Swift",
                        "Daniel Ceasar"
                    ],
                    "answer": "The Weeknd",
                    "index": 1,
                    "_id": "63b025b3a2669ff313f14329"
                },
                {
                    "question": "What is the best time of the year?",
                    "options": [
                        "Thanksgiving",
                        "Christmas",
                        "New Year's",
                        "Summer"
                    ],
                    "answer": "Christmas",
                    "index": 2,
                    "_id": "63b025dba2669ff313f14337"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "exercise",
                    "_id": "63b0525e2f7665a020b2bb01"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02553a2669ff313f142d3",
                    "_id": "63b0528d2f7665a020b2bb13"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02532a2669ff313f142c5",
                    "_id": "63b0528f2f7665a020b2bb29"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02506a2669ff313f142bb",
                    "_id": "63b052932f7665a020b2bb43"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02532a2669ff313f142c5",
                    "_id": "63b06931fe2cb944aae5ffd1"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02553a2669ff313f142d3",
                    "_id": "63b06932fe2cb944aae5fff3"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02506a2669ff313f142bb",
                    "_id": "63b06935fe2cb944aae6006d"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "exercise",
                    "_id": "63b069a6fe2cb944aae60128"
                }
            ],
            "createdAt": "2022-12-31T12:02:35.085Z",
            "updatedAt": "2023-01-04T13:24:11.625Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b0522f2f7665a020b2ba19",
            "firstname": "Mariam",
            "lastname": "ElNaggar",
            "username": "m.elnaggar",
            "password": "$2b$10$aK5p7y53VPEzF6Rw7gInneu5kFReg27KwD7xR0/rd0Z0wjR7Yd3nS",
            "email": "melnaggar815@gmail.com",
            "gender": "female",
            "courses": [
                "63b024dba2669ff313f14280"
            ],
            "wallet": 0,
            "grades": [],
            "createdAt": "2022-12-31T15:15:59.101Z",
            "updatedAt": "2022-12-31T15:57:14.252Z",
            "__v": 0
        }
    }
]

```
     
     ![Screenshot (263)](https://user-images.githubusercontent.com/77853945/211093421-b01ad38f-3bc0-4a56-9f2d-a9321404966b.png)

</details>
  
  
  
   <details>
<summary>
Response - Test #2
</summary>
Status Code: 400 Bad Request
     
NOTE: that's because I'm logged in as a Trainee not an admin
   
```json
     
     {"error":"Access restricted"}

```
</details>
  
  
  
  ```http
  GET /api/problem/allProblemsUS
```

  
   <details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
     
     [
    {
        "_id": "63b22514da1ecf541a89be69",
        "type": "Financial",
        "content": "test instructor reporting",
        "status": "Unseen",
        "courseId": "63b211e9da1ecf541a898dee",
        "reporterId": "63b208c6da1ecf541a8987d8",
        "followUp": "following upp",
        "priority": 34,
        "createdAt": "2023-01-02T00:28:04.700Z",
        "updatedAt": "2023-01-02T00:28:28.010Z",
        "__v": 0,
        "course": {
            "_id": "63b211e9da1ecf541a898dee",
            "title": "to close",
            "hours": 0,
            "subject": "Digital Media",
            "price": 1,
            "discount": 0,
            "discountValidUntil": "2023-01-01T00:00:00.000Z",
            "instructor": "63b208c6da1ecf541a8987d8",
            "summary": "1",
            "previewURL": "//www.youtube.com/embed/null",
            "discountApplied": false,
            "numOfEnrolledTrainees": 0,
            "published": true,
            "open": false,
            "overallRating": 0,
            "cTraineeNotes": [],
            "iTraineeNotes": [],
            "reviews": [],
            "ratings": [],
            "subtitles": [
                {
                    "title": "1",
                    "videoLink": "//www.youtube.com/embed/null",
                    "shortDescription": "1",
                    "totalHours": 0,
                    "_id": "63b211ecda1ecf541a898e09"
                }
            ],
            "exercises": [],
            "traineesProgress": [],
            "createdAt": "2023-01-01T23:06:17.411Z",
            "updatedAt": "2023-01-01T23:07:06.593Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b208c6da1ecf541a8987d8",
            "username": "ginst",
            "password": "$2b$10$y6K8e4Kn0s4QVMhxPADeF.jeG/kmyc/.nQIBjlOyE/mXDHSyvW7FO",
            "country": "Eg",
            "email": "ganna.uni@gmail.com",
            "miniBio": "My awesome bio edited",
            "name": "Ganna Instructor",
            "rating": 5,
            "wallet": 84,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "63b21764da1ecf541a899341",
                    "_id": "63b218e1da1ecf541a899546"
                }
            ],
            "reviews": [
                {
                    "content": "yasss queen",
                    "traineeId": "63b21764da1ecf541a899341",
                    "traineeName": "Ganna ITrainee",
                    "_id": "63b218edda1ecf541a899556"
                }
            ],
            "createdAt": "2023-01-01T22:27:18.169Z",
            "updatedAt": "2023-01-02T00:49:30.735Z",
            "__v": 0
        }
    },
    {
        "_id": "63b21beeda1ecf541a8998e5",
        "type": "Technical",
        "content": "ctrainee having another problem",
        "status": "Unseen",
        "courseId": "63b022e9a2669ff313f140f4",
        "reporterId": "63b20908da1ecf541a8987e0",
        "followUp": "",
        "priority": null,
        "createdAt": "2023-01-01T23:49:02.803Z",
        "updatedAt": "2023-01-01T23:49:02.803Z",
        "__v": 0,
        "course": {
            "_id": "63b022e9a2669ff313f140f4",
            "title": "Shoe Design",
            "hours": 12,
            "subject": "Digital Media",
            "price": 60,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a9e4579e20366c450b7379",
            "summary": "Come here and I will teach you about shoe design!",
            "previewURL": "//www.youtube.com/embed/4NRXx6U8ABQ",
            "discountApplied": true,
            "numOfEnrolledTrainees": 14,
            "published": true,
            "open": true,
            "overallRating": 3,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63b20908da1ecf541a8987e0",
                    "note": "ctrainee notes",
                    "_id": "63b21c2fda1ecf541a8999fb"
                }
            ],
            "iTraineeNotes": [],
            "reviews": [
                {
                    "content": "ctrainee reviewingggggggggg",
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "traineeName": "Ganna CTrainee",
                    "_id": "63b21cb1da1ecf541a899ae3"
                }
            ],
            "ratings": [
                {
                    "rating": 3,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63b04be62f7665a020b2b6f5"
                },
                {
                    "rating": 3,
                    "userId": "63b20908da1ecf541a8987e0",
                    "_id": "63b21ca7da1ecf541a899aca"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/4NRXx6U8ABQ",
                    "shortDescription": "This is an introduction about the art of shoe design",
                    "totalHours": 4,
                    "_id": "63b0231ca2669ff313f14123"
                },
                {
                    "title": "Materials & Equipment",
                    "videoLink": "//www.youtube.com/embed/4NRXx6U8ABQ",
                    "shortDescription": "This lesson will get you familiar with the tools needed for shoe design.",
                    "totalHours": 4,
                    "_id": "63b02343a2669ff313f1412d"
                },
                {
                    "title": "Thinking Style",
                    "videoLink": "//www.youtube.com/embed/4NRXx6U8ABQ",
                    "shortDescription": "This will teach you where your head should be while designing a shoe",
                    "totalHours": 4,
                    "_id": "63b02368a2669ff313f1413b"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite shoe brand?",
                    "options": [
                        "Converse",
                        "Clark's",
                        "Nike",
                        "Adidas"
                    ],
                    "answer": "Nike",
                    "index": 0,
                    "_id": "63b02386a2669ff313f1417a"
                },
                {
                    "question": "What is my favourite designer shoe?",
                    "options": [
                        "Balenciaga",
                        "Dior",
                        "YSL",
                        "Gucci"
                    ],
                    "answer": "Balenciaga",
                    "index": 1,
                    "_id": "63b023c0a2669ff313f14185"
                },
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Orange",
                        "Pink",
                        "Blue"
                    ],
                    "answer": "Yellow",
                    "index": 2,
                    "_id": "63b023eea2669ff313f14193"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "exercise",
                    "_id": "63b04c602f7665a020b2b70b"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b0231ca2669ff313f14123",
                    "_id": "63b0690ffe2cb944aae5fdc9"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02368a2669ff313f1413b",
                    "_id": "63b06916fe2cb944aae5fde0"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02343a2669ff313f1412d",
                    "_id": "63b0691afe2cb944aae5fe12"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "63b0231ca2669ff313f14123",
                    "_id": "63b21c46da1ecf541a899a16"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "63b02343a2669ff313f1412d",
                    "_id": "63b21c49da1ecf541a899a3a"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "63b02368a2669ff313f1413b",
                    "_id": "63b21c4cda1ecf541a899a62"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "exercise",
                    "_id": "63b21c55da1ecf541a899a8e"
                }
            ],
            "createdAt": "2022-12-31T11:54:17.834Z",
            "updatedAt": "2023-01-04T13:24:10.799Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b20908da1ecf541a8987e0",
            "firstname": "Ganna",
            "lastname": "CTrainee",
            "username": "gctrainee",
            "password": "$2b$10$59vDsMPP2Z9GNV6XlQ4Xpe.jCZ/ueJsfo4df8cIm4ZIK4V2UVV10y",
            "email": "gannamelsayed@gmail.com",
            "courses": [
                "63b022e9a2669ff313f140f4",
                "63b024dba2669ff313f14280",
                "63b2139bda1ecf541a89907b"
            ],
            "grades": [],
            "corporate": "Versace",
            "createdAt": "2023-01-01T22:28:24.465Z",
            "updatedAt": "2023-01-02T00:44:32.813Z",
            "__v": 0
        }
    }
]

```
     ![Screenshot (264)](https://user-images.githubusercontent.com/77853945/211093921-9c7db6dd-c342-409a-bcaa-525af80371ed.png)

     
</details>






<details>
<summary>
Response - Test #2
</summary>
Status Code: 400 Bad Request
     
NOTE: that's because I'm logged in as a Trainee not an admin
   
```json
     
     {"error":"Access restricted"}

```
</details>
  
  

  ```http
  GET /api/problem/allProblemsP
```

  
  
  
<details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
     
     [
    {
        "_id": "63a72c99d0318f90018cfbbc",
        "type": "Financial",
        "content": "my new album is weird",
        "status": "Pending",
        "courseId": "6384b0f9fa8e271ab3db7cee",
        "reporterId": "637a8c03f7740521fbe8246e",
        "followUp": "zooozaa",
        "priority": 19,
        "createdAt": "2022-12-24T16:45:13.087Z",
        "updatedAt": "2022-12-31T15:33:29.022Z",
        "__v": 0,
        "course": {
            "_id": "6384b0f9fa8e271ab3db7cee",
            "title": "DMET502",
            "hours": 8,
            "subject": "Lab Programming",
            "price": 0,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63715a56d953904400b6a4df",
            "summary": "This course is about computer graphics.",
            "previewURL": "//www.youtube.com/embed/M_lVZIpgnjU",
            "reviews": [],
            "overallRating": 5,
            "ratings": [
                {
                    "rating": 4,
                    "userId": "637a8c03f7740521fbe8246e",
                    "_id": "63a794b91174185adbe05c6a"
                }
            ],
            "discountApplied": true,
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/M_lVZIpgnjU",
                    "shortDescription": "Introduction lesson",
                    "totalHours": 4,
                    "_id": "6384b182fa8e271ab3db7cf1"
                },
                {
                    "title": "Lesson 1",
                    "videoLink": "//www.youtube.com/embed/M_lVZIpgnjU",
                    "shortDescription": "This lesson discusses how to build 2D models using OpenGL.",
                    "totalHours": 4,
                    "_id": "6384b1a1fa8e271ab3db7cf7"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Blue",
                    "_id": "6384b1befa8e271ab3db7cfe",
                    "index": 0
                },
                {
                    "question": "What is my favourite number?",
                    "options": [
                        "3",
                        "4",
                        "11",
                        "5"
                    ],
                    "answer": "3",
                    "_id": "6384b1e1fa8e271ab3db7d05",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T13:00:41.269Z",
            "updatedAt": "2023-01-04T13:24:08.743Z",
            "__v": 0,
            "numOfEnrolledTrainees": 4,
            "traineesProgress": [
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "exercise",
                    "_id": "63aa3d9b074e79698920a018"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384b1a1fa8e271ab3db7cf7",
                    "_id": "63af522cf82355e0adadc6a7"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384b182fa8e271ab3db7cf1",
                    "_id": "63af5232f82355e0adadc6cc"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "exercise",
                    "_id": "63b04c992f7665a020b2b782"
                }
            ],
            "published": true,
            "open": true,
            "iTraineeNotes": [
                {
                    "iTraineeID": "63a9d4d85defffcabbcbc0a7",
                    "note": "This is the best time ever",
                    "_id": "63b04cfb2f7665a020b2b79e"
                }
            ],
            "cTraineeNotes": []
        },
        "reporter": {
            "_id": "637a8c03f7740521fbe8246e",
            "firstname": "Alex",
            "lastname": "Turner",
            "username": "a.turner",
            "password": "$2b$10$kUPNrNHKeixXFAMt5pmyZe7rS01bhN7BpSZoSfMAwnZsRntastThe",
            "email": "a.turner@gmail.com",
            "country": "USA",
            "courses": [
                "6384a69690658873b8e1681b",
                "6384aa2163ed1a80c81fa216"
            ],
            "grades": [
                {
                    "courseID": "6384b23ffa8e271ab3db7d0e",
                    "exercises": [
                        {
                            "exerciseID": "6384b306fa8e271ab3db7d37",
                            "grade": 8,
                            "_id": "637a8c03f7740521fbe82470"
                        }
                    ],
                    "_id": "637a8c03f7740521fbe8246f"
                },
                {
                    "courseID": "6384b23ffa8e271ab3db7d0e",
                    "exercises": [
                        {
                            "exerciseID": "6384b317fa8e271ab3db7d40",
                            "grade": 2,
                            "_id": "637a8c03f7740521fbe82472"
                        }
                    ],
                    "_id": "637a8c03f7740521fbe82471"
                }
            ],
            "createdAt": "2022-11-20T20:20:19.637Z",
            "updatedAt": "2022-12-27T22:29:19.045Z",
            "__v": 0
        }
    },
    {
        "_id": "63a5e6bc3f3e68b310cb5efb",
        "type": "financial",
        "content": "life can be hard",
        "status": "Pending",
        "courseId": "6384ab3863ed1a80c81fa262",
        "reporterId": "637a8c03f7740521fbe8246e",
        "followUp": "",
        "priority": 20,
        "createdAt": "2022-12-23T17:34:52.673Z",
        "updatedAt": "2022-12-25T01:57:50.015Z",
        "__v": 0,
        "course": {
            "_id": "6384ab3863ed1a80c81fa262",
            "title": "DMET703",
            "hours": 6,
            "subject": "Digital Media",
            "price": 100,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about video & audio technology.",
            "previewURL": "//www.youtube.com/embed/fKgoo_KT6aM",
            "reviews": [],
            "overallRating": 0,
            "ratings": [],
            "discountApplied": true,
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/fKgoo_KT6aM",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 3,
                    "_id": "6384ab5863ed1a80c81fa265"
                },
                {
                    "title": "Lesson 1",
                    "videoLink": "//www.youtube.com/embed/fKgoo_KT6aM",
                    "shortDescription": "This lesson will discuss colour subsampling.",
                    "totalHours": 3,
                    "_id": "6384ab6963ed1a80c81fa26b"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Red",
                    "_id": "6384ab7763ed1a80c81fa272",
                    "index": 0
                }
            ],
            "createdAt": "2022-11-28T12:36:08.579Z",
            "updatedAt": "2023-01-04T13:24:05.977Z",
            "__v": 0,
            "numOfEnrolledTrainees": 10,
            "published": true,
            "open": true,
            "traineesProgress": [
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "6384ab6963ed1a80c81fa26b",
                    "_id": "63aa3d3e074e796989209f47"
                },
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "6384ab5863ed1a80c81fa265",
                    "_id": "63aa3d4b074e796989209f55"
                },
                {
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "content": "exercise",
                    "_id": "63aa3d56074e796989209f67"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "exercise",
                    "_id": "63b04f9c2f7665a020b2b9c3"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384ab6963ed1a80c81fa26b",
                    "_id": "63b04fe72f7665a020b2b9dd"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384ab5863ed1a80c81fa265",
                    "_id": "63b04fe82f7665a020b2b9fb"
                }
            ],
            "cTraineeNotes": [],
            "iTraineeNotes": []
        },
        "reporter": {
            "_id": "637a8c03f7740521fbe8246e",
            "firstname": "Alex",
            "lastname": "Turner",
            "username": "a.turner",
            "password": "$2b$10$kUPNrNHKeixXFAMt5pmyZe7rS01bhN7BpSZoSfMAwnZsRntastThe",
            "email": "a.turner@gmail.com",
            "country": "USA",
            "courses": [
                "6384a69690658873b8e1681b",
                "6384aa2163ed1a80c81fa216"
            ],
            "grades": [
                {
                    "courseID": "6384b23ffa8e271ab3db7d0e",
                    "exercises": [
                        {
                            "exerciseID": "6384b306fa8e271ab3db7d37",
                            "grade": 8,
                            "_id": "637a8c03f7740521fbe82470"
                        }
                    ],
                    "_id": "637a8c03f7740521fbe8246f"
                },
                {
                    "courseID": "6384b23ffa8e271ab3db7d0e",
                    "exercises": [
                        {
                            "exerciseID": "6384b317fa8e271ab3db7d40",
                            "grade": 2,
                            "_id": "637a8c03f7740521fbe82472"
                        }
                    ],
                    "_id": "637a8c03f7740521fbe82471"
                }
            ],
            "createdAt": "2022-11-20T20:20:19.637Z",
            "updatedAt": "2022-12-27T22:29:19.045Z",
            "__v": 0
        }
    },
    {
        "_id": "63a8c952ad855bef7ecf7de9",
        "type": "emotional",
        "content": "unstable?",
        "status": "Pending",
        "courseId": "6384a69690658873b8e1681b",
        "reporterId": "63a3196b78d093cbccc82bb7",
        "followUp": "",
        "priority": 26,
        "createdAt": "2022-12-25T22:06:10.393Z",
        "updatedAt": "2022-12-25T23:16:49.935Z",
        "__v": 0,
        "course": {
            "_id": "6384a69690658873b8e1681b",
            "title": "CSEN701",
            "hours": 118,
            "subject": "Computer Science",
            "price": 65,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about Embedded Systems.",
            "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
            "reviews": [
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637909641e794efbe229af85",
                    "traineeName": "Sebastian Stan",
                    "_id": "639c519f01bafa910cabf95b"
                },
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637a356c54c79d632507dc8a",
                    "traineeName": "Tony Stark",
                    "_id": "639c5368eb50d1b1878ebc53"
                },
                {
                    "content": "yesss",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0cfd9b94d536a0f8fb4f"
                },
                {
                    "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b579f76ea3fa39cb92f457"
                }
            ],
            "overallRating": 3.1666666666666665,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "6395024e17a103e1f5e15f7d"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77d221174185adbe05a50"
                },
                {
                    "rating": 2,
                    "userId": "637a8c03f7740521fbe8246e",
                    "_id": "63a8812bad855bef7ecf7c09"
                },
                {
                    "rating": 2,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb989e20366c450b75a4"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf79b94d536a0f8fb2d"
                },
                {
                    "rating": 3,
                    "userId": "63b5790d6ea3fa39cb92f29c",
                    "_id": "63b579e26ea3fa39cb92f42f"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 4,
                    "_id": "6384a6b190658873b8e1681e"
                },
                {
                    "title": "Embedded Hardware",
                    "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
                    "shortDescription": "This lesson discusses Embedded Hardware",
                    "totalHours": 107,
                    "_id": "6384a6dd90658873b8e16824"
                },
                {
                    "title": "My 3rd Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "the description of my 3rd subtitle",
                    "totalHours": 4,
                    "_id": "63b8775809282f4c8b5f7cd9"
                },
                {
                    "title": "My 4th Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "ana bgd ta3bana",
                    "totalHours": 4,
                    "_id": "63b877b009282f4c8b5f7d27"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Yellow",
                    "_id": "6384a6eb90658873b8e1682b",
                    "index": 0
                },
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "Interstellar",
                    "_id": "6384a6fe90658873b8e16832",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T12:16:22.376Z",
            "updatedAt": "2023-01-06T19:42:00.442Z",
            "__v": 0,
            "discountApplied": true,
            "numOfEnrolledTrainees": 4,
            "traineesProgress": [
                {
                    "traineeId": "63a3196b78d093cbccc82bb7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9d0042821590c8a89c3da"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9ecf99e20366c450b76fb"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63a9ed079e20366c450b772a"
                },
                {
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63aceaeae99ea10bdc1e220e"
                },
                {
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63aceaf1e99ea10bdc1e223a"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b006b92cd8f6cb0e93b6a6"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b006be2cd8f6cb0e93b6d5"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "exercise",
                    "_id": "63b006c62cd8f6cb0e93b708"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b57a7b6ea3fa39cb92f55c"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b57a9d6ea3fa39cb92f61e"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "exercise",
                    "_id": "63b57aad6ea3fa39cb92f660"
                }
            ],
            "iTraineeNotes": [
                {
                    "note": "not ganna's note",
                    "_id": "63a5ad69d4971b7ccc06af13"
                },
                {
                    "iTraineeID": "63a9d4d85defffcabbcbc0a7",
                    "note": "hi im mariam",
                    "_id": "63a9ed7e9e20366c450b778f"
                },
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "noooo",
                    "_id": "63ae1a129b94d536a0f8ff98"
                },
                {
                    "iTraineeID": "63b5790d6ea3fa39cb92f29c",
                    "note": "hello people wussuuuuup",
                    "_id": "63b57a656ea3fa39cb92f527"
                }
            ],
            "published": true,
            "open": true,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63a93d1019aea603602a6680",
                    "note": "should be ganna the ctrainee's ONLY note",
                    "_id": "63add0da268f1e489cede62f"
                }
            ]
        },
        "reporter": {
            "_id": "63a3196b78d093cbccc82bb7",
            "firstname": "Freddie",
            "lastname": "Mercury",
            "username": "f.mercury",
            "password": "$2b$10$Lau8Bz/r3IRDlIONAO9.F.jox5TirJGCu73XLmqKqUn1dLhLv0xHu",
            "email": "melnaggar815@gmail.com",
            "gender": "male",
            "courses": [
                "6384a69690658873b8e1681b"
            ],
            "wallet": 745,
            "grades": [],
            "createdAt": "2022-12-21T14:34:19.175Z",
            "updatedAt": "2022-12-31T12:24:20.954Z",
            "__v": 0
        }
    },
    {
        "_id": "63b05be9fe2cb944aae5e778",
        "type": "Technical",
        "content": "abc",
        "status": "Pending",
        "courseId": "63b054dbfe2cb944aae5e1d4",
        "reporterId": "63b05998fe2cb944aae5e575",
        "followUp": "follow up",
        "priority": 29,
        "createdAt": "2022-12-31T15:57:29.634Z",
        "updatedAt": "2022-12-31T16:42:29.182Z",
        "__v": 0,
        "course": {
            "_id": "63b054dbfe2cb944aae5e1d4",
            "title": "Intro to Python",
            "hours": 12,
            "subject": "Computer Science",
            "price": 80,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63b04becfe2cb944aae5ddf7",
            "summary": "All about Python",
            "previewURL": "//www.youtube.com/embed/Ozrduu2W9B8",
            "discountApplied": true,
            "numOfEnrolledTrainees": 2,
            "published": true,
            "open": true,
            "overallRating": 4,
            "cTraineeNotes": [],
            "iTraineeNotes": [
                {
                    "iTraineeID": "63b05998fe2cb944aae5e575",
                    "note": "abcdefg I have to go",
                    "_id": "63b05b7efe2cb944aae5e6c7"
                }
            ],
            "reviews": [
                {
                    "content": "best python course out there",
                    "traineeId": "63b05998fe2cb944aae5e575",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63b059dafe2cb944aae5e663"
                },
                {
                    "content": "abc",
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63b06d68fe2cb944aae61127"
                }
            ],
            "ratings": [
                {
                    "rating": 3,
                    "userId": "63b05998fe2cb944aae5e575",
                    "_id": "63b059d0fe2cb944aae5e658"
                },
                {
                    "rating": 5,
                    "userId": "63b04cbffe2cb944aae5de09",
                    "_id": "63b06d63fe2cb944aae61114"
                }
            ],
            "subtitles": [
                {
                    "title": "T1",
                    "videoLink": "//www.youtube.com/embed/SbQAAuom-GA",
                    "shortDescription": "Installing Python",
                    "totalHours": 4,
                    "_id": "63b054f4fe2cb944aae5e1ef"
                },
                {
                    "title": "T2",
                    "videoLink": "//www.youtube.com/embed/Gqby4v5JOu4",
                    "shortDescription": "Numbers",
                    "totalHours": 8,
                    "_id": "63b0550ffe2cb944aae5e1f7"
                }
            ],
            "exercises": [
                {
                    "question": "What is your favorite subject?",
                    "options": [
                        "CS",
                        "Maths",
                        "Graphics",
                        "Cars"
                    ],
                    "answer": "CS",
                    "index": 0,
                    "_id": "63b05530fe2cb944aae5e21c"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63b05998fe2cb944aae5e575",
                    "content": "exercise",
                    "_id": "63b05a19fe2cb944aae5e68a"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b0550ffe2cb944aae5e1f7",
                    "_id": "63b06d49fe2cb944aae610b2"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b054f4fe2cb944aae5e1ef",
                    "_id": "63b06d4cfe2cb944aae610c7"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "exercise",
                    "_id": "63b06d71fe2cb944aae6113a"
                }
            ],
            "createdAt": "2022-12-31T15:27:23.092Z",
            "updatedAt": "2023-01-04T13:24:12.122Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b05998fe2cb944aae5e575",
            "firstname": "Ganna",
            "lastname": "ElSayed",
            "username": "gannaitraineefinal",
            "password": "$2b$10$N6UxjymTbyMberGcDi.ks.yGkf/cfgnZlMXOenHvUAmDcP.2D29Wu",
            "email": "gannamelsayed@gmail.com",
            "gender": "female",
            "courses": [],
            "wallet": 57,
            "grades": [],
            "createdAt": "2022-12-31T15:47:36.952Z",
            "updatedAt": "2022-12-31T16:43:13.774Z",
            "__v": 0
        }
    },
    {
        "_id": "63b05e4ffe2cb944aae5ea8c",
        "type": "type specified only",
        "content": "yesss",
        "status": "Pending",
        "courseId": "63b054dbfe2cb944aae5e1d4",
        "reporterId": "63b04becfe2cb944aae5ddf7",
        "followUp": "inst following up",
        "priority": 30,
        "createdAt": "2022-12-31T16:07:43.791Z",
        "updatedAt": "2022-12-31T16:42:42.830Z",
        "__v": 0,
        "course": {
            "_id": "63b054dbfe2cb944aae5e1d4",
            "title": "Intro to Python",
            "hours": 12,
            "subject": "Computer Science",
            "price": 80,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63b04becfe2cb944aae5ddf7",
            "summary": "All about Python",
            "previewURL": "//www.youtube.com/embed/Ozrduu2W9B8",
            "discountApplied": true,
            "numOfEnrolledTrainees": 2,
            "published": true,
            "open": true,
            "overallRating": 4,
            "cTraineeNotes": [],
            "iTraineeNotes": [
                {
                    "iTraineeID": "63b05998fe2cb944aae5e575",
                    "note": "abcdefg I have to go",
                    "_id": "63b05b7efe2cb944aae5e6c7"
                }
            ],
            "reviews": [
                {
                    "content": "best python course out there",
                    "traineeId": "63b05998fe2cb944aae5e575",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63b059dafe2cb944aae5e663"
                },
                {
                    "content": "abc",
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63b06d68fe2cb944aae61127"
                }
            ],
            "ratings": [
                {
                    "rating": 3,
                    "userId": "63b05998fe2cb944aae5e575",
                    "_id": "63b059d0fe2cb944aae5e658"
                },
                {
                    "rating": 5,
                    "userId": "63b04cbffe2cb944aae5de09",
                    "_id": "63b06d63fe2cb944aae61114"
                }
            ],
            "subtitles": [
                {
                    "title": "T1",
                    "videoLink": "//www.youtube.com/embed/SbQAAuom-GA",
                    "shortDescription": "Installing Python",
                    "totalHours": 4,
                    "_id": "63b054f4fe2cb944aae5e1ef"
                },
                {
                    "title": "T2",
                    "videoLink": "//www.youtube.com/embed/Gqby4v5JOu4",
                    "shortDescription": "Numbers",
                    "totalHours": 8,
                    "_id": "63b0550ffe2cb944aae5e1f7"
                }
            ],
            "exercises": [
                {
                    "question": "What is your favorite subject?",
                    "options": [
                        "CS",
                        "Maths",
                        "Graphics",
                        "Cars"
                    ],
                    "answer": "CS",
                    "index": 0,
                    "_id": "63b05530fe2cb944aae5e21c"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63b05998fe2cb944aae5e575",
                    "content": "exercise",
                    "_id": "63b05a19fe2cb944aae5e68a"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b0550ffe2cb944aae5e1f7",
                    "_id": "63b06d49fe2cb944aae610b2"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b054f4fe2cb944aae5e1ef",
                    "_id": "63b06d4cfe2cb944aae610c7"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "exercise",
                    "_id": "63b06d71fe2cb944aae6113a"
                }
            ],
            "createdAt": "2022-12-31T15:27:23.092Z",
            "updatedAt": "2023-01-04T13:24:12.122Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b04becfe2cb944aae5ddf7",
            "username": "gannainstfinal",
            "password": "$2b$10$/RdiCaIuf52AstrN0ZqX8erfKawKJAUJT0vfAd7Bwc1X85l6B7DB.",
            "country": "Egypt",
            "email": "a",
            "miniBio": "new bio",
            "name": "Ganna",
            "rating": 4.333333333333333,
            "wallet": 108,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "63b0571cfe2cb944aae5e30f",
                    "_id": "63b057e7fe2cb944aae5e441"
                },
                {
                    "rating": 5,
                    "userId": "63b05998fe2cb944aae5e575",
                    "_id": "63b059fbfe2cb944aae5e66f"
                },
                {
                    "rating": 3,
                    "userId": "63b04cbffe2cb944aae5de09",
                    "_id": "63b06d53fe2cb944aae610e3"
                }
            ],
            "reviews": [
                {
                    "content": "cool",
                    "traineeId": "63b0571cfe2cb944aae5e30f",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63b05848fe2cb944aae5e499"
                },
                {
                    "content": "cool",
                    "traineeId": "63b05998fe2cb944aae5e575",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63b059fffe2cb944aae5e681"
                },
                {
                    "content": "sooo coooool ctrainee",
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63b06d5dfe2cb944aae610fd"
                }
            ],
            "createdAt": "2022-12-31T14:49:16.740Z",
            "updatedAt": "2023-01-01T22:07:06.882Z",
            "__v": 0
        }
    },
    {
        "_id": "63b06c19fe2cb944aae6031b",
        "type": "Financial",
        "content": "cgrainee 2",
        "status": "Pending",
        "courseId": "63b022e9a2669ff313f140f4",
        "reporterId": "63b04cbffe2cb944aae5de09",
        "followUp": "following upppp",
        "priority": 31,
        "createdAt": "2022-12-31T17:06:33.277Z",
        "updatedAt": "2022-12-31T17:07:31.278Z",
        "__v": 0,
        "course": {
            "_id": "63b022e9a2669ff313f140f4",
            "title": "Shoe Design",
            "hours": 12,
            "subject": "Digital Media",
            "price": 60,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a9e4579e20366c450b7379",
            "summary": "Come here and I will teach you about shoe design!",
            "previewURL": "//www.youtube.com/embed/4NRXx6U8ABQ",
            "discountApplied": true,
            "numOfEnrolledTrainees": 14,
            "published": true,
            "open": true,
            "overallRating": 3,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63b20908da1ecf541a8987e0",
                    "note": "ctrainee notes",
                    "_id": "63b21c2fda1ecf541a8999fb"
                }
            ],
            "iTraineeNotes": [],
            "reviews": [
                {
                    "content": "ctrainee reviewingggggggggg",
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "traineeName": "Ganna CTrainee",
                    "_id": "63b21cb1da1ecf541a899ae3"
                }
            ],
            "ratings": [
                {
                    "rating": 3,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63b04be62f7665a020b2b6f5"
                },
                {
                    "rating": 3,
                    "userId": "63b20908da1ecf541a8987e0",
                    "_id": "63b21ca7da1ecf541a899aca"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/4NRXx6U8ABQ",
                    "shortDescription": "This is an introduction about the art of shoe design",
                    "totalHours": 4,
                    "_id": "63b0231ca2669ff313f14123"
                },
                {
                    "title": "Materials & Equipment",
                    "videoLink": "//www.youtube.com/embed/4NRXx6U8ABQ",
                    "shortDescription": "This lesson will get you familiar with the tools needed for shoe design.",
                    "totalHours": 4,
                    "_id": "63b02343a2669ff313f1412d"
                },
                {
                    "title": "Thinking Style",
                    "videoLink": "//www.youtube.com/embed/4NRXx6U8ABQ",
                    "shortDescription": "This will teach you where your head should be while designing a shoe",
                    "totalHours": 4,
                    "_id": "63b02368a2669ff313f1413b"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite shoe brand?",
                    "options": [
                        "Converse",
                        "Clark's",
                        "Nike",
                        "Adidas"
                    ],
                    "answer": "Nike",
                    "index": 0,
                    "_id": "63b02386a2669ff313f1417a"
                },
                {
                    "question": "What is my favourite designer shoe?",
                    "options": [
                        "Balenciaga",
                        "Dior",
                        "YSL",
                        "Gucci"
                    ],
                    "answer": "Balenciaga",
                    "index": 1,
                    "_id": "63b023c0a2669ff313f14185"
                },
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Orange",
                        "Pink",
                        "Blue"
                    ],
                    "answer": "Yellow",
                    "index": 2,
                    "_id": "63b023eea2669ff313f14193"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "exercise",
                    "_id": "63b04c602f7665a020b2b70b"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b0231ca2669ff313f14123",
                    "_id": "63b0690ffe2cb944aae5fdc9"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02368a2669ff313f1413b",
                    "_id": "63b06916fe2cb944aae5fde0"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02343a2669ff313f1412d",
                    "_id": "63b0691afe2cb944aae5fe12"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "63b0231ca2669ff313f14123",
                    "_id": "63b21c46da1ecf541a899a16"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "63b02343a2669ff313f1412d",
                    "_id": "63b21c49da1ecf541a899a3a"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "63b02368a2669ff313f1413b",
                    "_id": "63b21c4cda1ecf541a899a62"
                },
                {
                    "traineeId": "63b20908da1ecf541a8987e0",
                    "content": "exercise",
                    "_id": "63b21c55da1ecf541a899a8e"
                }
            ],
            "createdAt": "2022-12-31T11:54:17.834Z",
            "updatedAt": "2023-01-04T13:24:10.799Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b04cbffe2cb944aae5de09",
            "firstname": "Ganna",
            "lastname": "ElSayed",
            "username": "gannactraineefinal",
            "password": "$2b$10$XAC79HDjrunqmpoNkCfyyuSDoKuxEgLBzJzT6yxJdwmIGcvi0A4iu",
            "email": "gannamelsayed@gmail.com",
            "courses": [
                "63b022e9a2669ff313f140f4",
                "63b024dba2669ff313f14280",
                "63b054dbfe2cb944aae5e1d4"
            ],
            "grades": [],
            "corporate": "GUC",
            "createdAt": "2022-12-31T14:52:47.017Z",
            "updatedAt": "2022-12-31T17:11:14.110Z",
            "__v": 0
        }
    },
    {
        "_id": "63b21a26da1ecf541a8996e8",
        "type": "Technical",
        "content": "ITrainee with a technical issueee",
        "status": "Pending",
        "courseId": "63b2139bda1ecf541a89907b",
        "reporterId": "63b21764da1ecf541a899341",
        "followUp": "itrainee following up",
        "priority": 32,
        "createdAt": "2023-01-01T23:41:26.979Z",
        "updatedAt": "2023-01-02T00:06:15.924Z",
        "__v": 0,
        "course": {
            "_id": "63b2139bda1ecf541a89907b",
            "title": "Advanced Computer Lab",
            "hours": 24,
            "subject": "Lab Programming",
            "price": 150,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63b208c6da1ecf541a8987d8",
            "summary": "All about the MERN Stack",
            "previewURL": "//www.youtube.com/embed/98BzS5Oz5E4",
            "discountApplied": true,
            "numOfEnrolledTrainees": 2,
            "published": true,
            "open": true,
            "overallRating": 4,
            "cTraineeNotes": [],
            "iTraineeNotes": [
                {
                    "iTraineeID": "63b21764da1ecf541a899341",
                    "note": "testinngg the notess",
                    "_id": "63b21989da1ecf541a89961a"
                }
            ],
            "reviews": [
                {
                    "content": "Great courseeee!!!",
                    "traineeId": "63b21764da1ecf541a899341",
                    "traineeName": "Ganna ITrainee",
                    "_id": "63b218ddda1ecf541a89953a"
                }
            ],
            "ratings": [
                {
                    "rating": 4,
                    "userId": "63b21764da1ecf541a899341",
                    "_id": "63b218c4da1ecf541a899501"
                }
            ],
            "subtitles": [
                {
                    "title": "Tutorial #1",
                    "videoLink": "//www.youtube.com/embed/98BzS5Oz5E4",
                    "shortDescription": "What is MERN",
                    "totalHours": 8,
                    "_id": "63b213abda1ecf541a899090"
                },
                {
                    "title": "Tutorial #2",
                    "videoLink": "//www.youtube.com/embed/8DploTqLstE",
                    "shortDescription": "Express App Setup",
                    "totalHours": 16,
                    "_id": "63b213bfda1ecf541a899098"
                }
            ],
            "exercises": [
                {
                    "question": "What is the M in MERN",
                    "options": [
                        "Mongo",
                        "My head hurts",
                        "My outfit slayssss",
                        "My coffee went cold"
                    ],
                    "answer": "Mongo",
                    "index": 0,
                    "_id": "63b213e9da1ecf541a8990b7"
                },
                {
                    "question": "What does JS stand for",
                    "options": [
                        "nonn",
                        "just saying",
                        "no",
                        "JavaScript"
                    ],
                    "answer": "JavaScript",
                    "index": 1,
                    "_id": "63b21407da1ecf541a8990bf"
                }
            ],
            "traineesProgress": [],
            "createdAt": "2023-01-01T23:13:31.115Z",
            "updatedAt": "2023-01-04T13:24:13.043Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b21764da1ecf541a899341",
            "firstname": "Ganna",
            "lastname": "ITrainee",
            "username": "gitrainee",
            "password": "$2b$10$mjbFaSwGcJ5u8f4CUVirK.YbfiYkj.DwcmZ0a7h2NuiKjAE8SAW.a",
            "email": "gannamelsayed@gmail.com",
            "gender": "female",
            "courses": [
                "6384a69690658873b8e1681b",
                "63b2139bda1ecf541a89907b"
            ],
            "wallet": -83,
            "grades": [],
            "createdAt": "2023-01-01T23:29:40.052Z",
            "updatedAt": "2023-01-02T02:22:17.077Z",
            "__v": 0
        }
    },
    {
        "_id": "63b57a3c6ea3fa39cb92f4a1",
        "type": "Technical",
        "content": "wallahi yA3NI SHE DIDNT WATCH START TREK",
        "status": "Pending",
        "courseId": "6384a69690658873b8e1681b",
        "reporterId": "63b5790d6ea3fa39cb92f29c",
        "followUp": "wala star wars",
        "priority": 35,
        "createdAt": "2023-01-04T13:08:12.363Z",
        "updatedAt": "2023-01-04T13:22:42.774Z",
        "__v": 0,
        "course": {
            "_id": "6384a69690658873b8e1681b",
            "title": "CSEN701",
            "hours": 118,
            "subject": "Computer Science",
            "price": 65,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about Embedded Systems.",
            "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
            "reviews": [
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637909641e794efbe229af85",
                    "traineeName": "Sebastian Stan",
                    "_id": "639c519f01bafa910cabf95b"
                },
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637a356c54c79d632507dc8a",
                    "traineeName": "Tony Stark",
                    "_id": "639c5368eb50d1b1878ebc53"
                },
                {
                    "content": "yesss",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0cfd9b94d536a0f8fb4f"
                },
                {
                    "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b579f76ea3fa39cb92f457"
                }
            ],
            "overallRating": 3.1666666666666665,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "6395024e17a103e1f5e15f7d"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77d221174185adbe05a50"
                },
                {
                    "rating": 2,
                    "userId": "637a8c03f7740521fbe8246e",
                    "_id": "63a8812bad855bef7ecf7c09"
                },
                {
                    "rating": 2,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb989e20366c450b75a4"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf79b94d536a0f8fb2d"
                },
                {
                    "rating": 3,
                    "userId": "63b5790d6ea3fa39cb92f29c",
                    "_id": "63b579e26ea3fa39cb92f42f"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 4,
                    "_id": "6384a6b190658873b8e1681e"
                },
                {
                    "title": "Embedded Hardware",
                    "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
                    "shortDescription": "This lesson discusses Embedded Hardware",
                    "totalHours": 107,
                    "_id": "6384a6dd90658873b8e16824"
                },
                {
                    "title": "My 3rd Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "the description of my 3rd subtitle",
                    "totalHours": 4,
                    "_id": "63b8775809282f4c8b5f7cd9"
                },
                {
                    "title": "My 4th Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "ana bgd ta3bana",
                    "totalHours": 4,
                    "_id": "63b877b009282f4c8b5f7d27"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Yellow",
                    "_id": "6384a6eb90658873b8e1682b",
                    "index": 0
                },
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "Interstellar",
                    "_id": "6384a6fe90658873b8e16832",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T12:16:22.376Z",
            "updatedAt": "2023-01-06T19:42:00.442Z",
            "__v": 0,
            "discountApplied": true,
            "numOfEnrolledTrainees": 4,
            "traineesProgress": [
                {
                    "traineeId": "63a3196b78d093cbccc82bb7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9d0042821590c8a89c3da"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9ecf99e20366c450b76fb"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63a9ed079e20366c450b772a"
                },
                {
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63aceaeae99ea10bdc1e220e"
                },
                {
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63aceaf1e99ea10bdc1e223a"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b006b92cd8f6cb0e93b6a6"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b006be2cd8f6cb0e93b6d5"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "exercise",
                    "_id": "63b006c62cd8f6cb0e93b708"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b57a7b6ea3fa39cb92f55c"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b57a9d6ea3fa39cb92f61e"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "exercise",
                    "_id": "63b57aad6ea3fa39cb92f660"
                }
            ],
            "iTraineeNotes": [
                {
                    "note": "not ganna's note",
                    "_id": "63a5ad69d4971b7ccc06af13"
                },
                {
                    "iTraineeID": "63a9d4d85defffcabbcbc0a7",
                    "note": "hi im mariam",
                    "_id": "63a9ed7e9e20366c450b778f"
                },
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "noooo",
                    "_id": "63ae1a129b94d536a0f8ff98"
                },
                {
                    "iTraineeID": "63b5790d6ea3fa39cb92f29c",
                    "note": "hello people wussuuuuup",
                    "_id": "63b57a656ea3fa39cb92f527"
                }
            ],
            "published": true,
            "open": true,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63a93d1019aea603602a6680",
                    "note": "should be ganna the ctrainee's ONLY note",
                    "_id": "63add0da268f1e489cede62f"
                }
            ]
        },
        "reporter": {
            "_id": "63b5790d6ea3fa39cb92f29c",
            "firstname": "Nada",
            "lastname": "Ibrahim",
            "username": "nibrahim",
            "password": "$2b$10$lFTB.TyMJxHMImnSSdNdMudtmCmcgS1KimISw4PaHtHQXaC0DXK7G",
            "email": "nada.ibrahim89@gmail.com",
            "gender": "female",
            "courses": [
                "6384a69690658873b8e1681b"
            ],
            "wallet": 62,
            "grades": [],
            "createdAt": "2023-01-04T13:03:09.189Z",
            "updatedAt": "2023-01-04T13:23:13.858Z",
            "__v": 0
        }
    },
    {
        "_id": "63a71bb2d0318f90018cfa63",
        "type": "Technical",
        "content": "it gets boring",
        "status": "Pending",
        "courseId": "6384ae93fa8e271ab3db7c90",
        "reporterId": "63a3196b78d093cbccc82bb7",
        "followUp": "",
        "priority": null,
        "createdAt": "2022-12-24T15:33:06.126Z",
        "updatedAt": "2022-12-30T12:54:33.368Z",
        "__v": 0,
        "course": {
            "_id": "6384ae93fa8e271ab3db7c90",
            "title": "CSEN601",
            "hours": 12,
            "subject": "Computer Science",
            "price": 75,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about computer architecture.",
            "previewURL": "//www.youtube.com/embed/xTXsKMXUi7w",
            "reviews": [],
            "overallRating": 4.5,
            "ratings": [],
            "discountApplied": true,
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/xTXsKMXUi7w",
                    "shortDescription": "Introduction lesson",
                    "totalHours": 4,
                    "_id": "6384aeb4fa8e271ab3db7c93"
                },
                {
                    "title": "Lesson 1",
                    "videoLink": "//www.youtube.com/embed/xTXsKMXUi7w",
                    "shortDescription": "This lesson is about the types of computers",
                    "totalHours": 4,
                    "_id": "6384aecafa8e271ab3db7c99"
                },
                {
                    "title": "Lesson 2",
                    "videoLink": "//www.youtube.com/embed/xTXsKMXUi7w",
                    "shortDescription": "This lesson is about the components of a computer.",
                    "totalHours": 4,
                    "_id": "6384aedefa8e271ab3db7ca2"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "Fractured",
                    "_id": "6384aef8fa8e271ab3db7cab",
                    "index": 0
                },
                {
                    "question": "What is my favourite band?",
                    "options": [
                        "Queen",
                        "Arctic Monkeys",
                        "The 1975",
                        "5SOS"
                    ],
                    "answer": "Queen",
                    "_id": "6384af0cfa8e271ab3db7cb3",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T12:50:27.999Z",
            "updatedAt": "2023-01-04T13:24:07.514Z",
            "__v": 0,
            "numOfEnrolledTrainees": 6,
            "open": true,
            "published": true,
            "cTraineeNotes": [],
            "iTraineeNotes": [],
            "traineesProgress": []
        },
        "reporter": {
            "_id": "63a3196b78d093cbccc82bb7",
            "firstname": "Freddie",
            "lastname": "Mercury",
            "username": "f.mercury",
            "password": "$2b$10$Lau8Bz/r3IRDlIONAO9.F.jox5TirJGCu73XLmqKqUn1dLhLv0xHu",
            "email": "melnaggar815@gmail.com",
            "gender": "male",
            "courses": [
                "6384a69690658873b8e1681b"
            ],
            "wallet": 745,
            "grades": [],
            "createdAt": "2022-12-21T14:34:19.175Z",
            "updatedAt": "2022-12-31T12:24:20.954Z",
            "__v": 0
        }
    },
    {
        "_id": "63a7294ad0318f90018cfb8e",
        "type": "Technical",
        "content": "el shift button msh shaghal fel keyboard......BA COPY PASTEEE BACKETSSSS",
        "status": "Pending",
        "courseId": "6384a69690658873b8e1681b",
        "reporterId": "63a3196b78d093cbccc82bb7",
        "followUp": "",
        "priority": null,
        "createdAt": "2022-12-24T16:31:06.636Z",
        "updatedAt": "2022-12-25T22:20:53.117Z",
        "__v": 0,
        "course": {
            "_id": "6384a69690658873b8e1681b",
            "title": "CSEN701",
            "hours": 118,
            "subject": "Computer Science",
            "price": 65,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about Embedded Systems.",
            "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
            "reviews": [
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637909641e794efbe229af85",
                    "traineeName": "Sebastian Stan",
                    "_id": "639c519f01bafa910cabf95b"
                },
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637a356c54c79d632507dc8a",
                    "traineeName": "Tony Stark",
                    "_id": "639c5368eb50d1b1878ebc53"
                },
                {
                    "content": "yesss",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0cfd9b94d536a0f8fb4f"
                },
                {
                    "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b579f76ea3fa39cb92f457"
                }
            ],
            "overallRating": 3.1666666666666665,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "6395024e17a103e1f5e15f7d"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77d221174185adbe05a50"
                },
                {
                    "rating": 2,
                    "userId": "637a8c03f7740521fbe8246e",
                    "_id": "63a8812bad855bef7ecf7c09"
                },
                {
                    "rating": 2,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb989e20366c450b75a4"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf79b94d536a0f8fb2d"
                },
                {
                    "rating": 3,
                    "userId": "63b5790d6ea3fa39cb92f29c",
                    "_id": "63b579e26ea3fa39cb92f42f"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 4,
                    "_id": "6384a6b190658873b8e1681e"
                },
                {
                    "title": "Embedded Hardware",
                    "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
                    "shortDescription": "This lesson discusses Embedded Hardware",
                    "totalHours": 107,
                    "_id": "6384a6dd90658873b8e16824"
                },
                {
                    "title": "My 3rd Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "the description of my 3rd subtitle",
                    "totalHours": 4,
                    "_id": "63b8775809282f4c8b5f7cd9"
                },
                {
                    "title": "My 4th Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "ana bgd ta3bana",
                    "totalHours": 4,
                    "_id": "63b877b009282f4c8b5f7d27"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Yellow",
                    "_id": "6384a6eb90658873b8e1682b",
                    "index": 0
                },
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "Interstellar",
                    "_id": "6384a6fe90658873b8e16832",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T12:16:22.376Z",
            "updatedAt": "2023-01-06T19:42:00.442Z",
            "__v": 0,
            "discountApplied": true,
            "numOfEnrolledTrainees": 4,
            "traineesProgress": [
                {
                    "traineeId": "63a3196b78d093cbccc82bb7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9d0042821590c8a89c3da"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9ecf99e20366c450b76fb"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63a9ed079e20366c450b772a"
                },
                {
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63aceaeae99ea10bdc1e220e"
                },
                {
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63aceaf1e99ea10bdc1e223a"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b006b92cd8f6cb0e93b6a6"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b006be2cd8f6cb0e93b6d5"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "exercise",
                    "_id": "63b006c62cd8f6cb0e93b708"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b57a7b6ea3fa39cb92f55c"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b57a9d6ea3fa39cb92f61e"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "exercise",
                    "_id": "63b57aad6ea3fa39cb92f660"
                }
            ],
            "iTraineeNotes": [
                {
                    "note": "not ganna's note",
                    "_id": "63a5ad69d4971b7ccc06af13"
                },
                {
                    "iTraineeID": "63a9d4d85defffcabbcbc0a7",
                    "note": "hi im mariam",
                    "_id": "63a9ed7e9e20366c450b778f"
                },
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "noooo",
                    "_id": "63ae1a129b94d536a0f8ff98"
                },
                {
                    "iTraineeID": "63b5790d6ea3fa39cb92f29c",
                    "note": "hello people wussuuuuup",
                    "_id": "63b57a656ea3fa39cb92f527"
                }
            ],
            "published": true,
            "open": true,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63a93d1019aea603602a6680",
                    "note": "should be ganna the ctrainee's ONLY note",
                    "_id": "63add0da268f1e489cede62f"
                }
            ]
        },
        "reporter": {
            "_id": "63a3196b78d093cbccc82bb7",
            "firstname": "Freddie",
            "lastname": "Mercury",
            "username": "f.mercury",
            "password": "$2b$10$Lau8Bz/r3IRDlIONAO9.F.jox5TirJGCu73XLmqKqUn1dLhLv0xHu",
            "email": "melnaggar815@gmail.com",
            "gender": "male",
            "courses": [
                "6384a69690658873b8e1681b"
            ],
            "wallet": 745,
            "grades": [],
            "createdAt": "2022-12-21T14:34:19.175Z",
            "updatedAt": "2022-12-31T12:24:20.954Z",
            "__v": 0
        }
    },
    {
        "_id": "63ac0032909ef5508a13860e",
        "type": "Technical",
        "content": "Testtt",
        "status": "Pending",
        "courseId": "6384a69690658873b8e1681b",
        "reporterId": "63a3435e9958691a5e19bef1",
        "followUp": "",
        "priority": null,
        "createdAt": "2022-12-28T08:37:07.606Z",
        "updatedAt": "2022-12-31T15:35:27.313Z",
        "__v": 0,
        "course": {
            "_id": "6384a69690658873b8e1681b",
            "title": "CSEN701",
            "hours": 118,
            "subject": "Computer Science",
            "price": 65,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a34389398e97a471db5921",
            "summary": "This course is about Embedded Systems.",
            "previewURL": "//www.youtube.com/embed/mkR_Qwix4Ho",
            "reviews": [
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637909641e794efbe229af85",
                    "traineeName": "Sebastian Stan",
                    "_id": "639c519f01bafa910cabf95b"
                },
                {
                    "content": "reviewing as ctrainee",
                    "traineeId": "637a356c54c79d632507dc8a",
                    "traineeName": "Tony Stark",
                    "_id": "639c5368eb50d1b1878ebc53"
                },
                {
                    "content": "yesss",
                    "traineeId": "63a3435e9958691a5e19bef1",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63ae0cfd9b94d536a0f8fb4f"
                },
                {
                    "content": "wallahi ya3ni mish 3aref 2a2ool eh she likes yellow",
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "traineeName": "Nada Ibrahim",
                    "_id": "63b579f76ea3fa39cb92f457"
                }
            ],
            "overallRating": 3.1666666666666665,
            "ratings": [
                {
                    "rating": 5,
                    "userId": "637a356c54c79d632507dc8a",
                    "_id": "6395024e17a103e1f5e15f7d"
                },
                {
                    "rating": 3,
                    "userId": "63a3196b78d093cbccc82bb7",
                    "_id": "63a77d221174185adbe05a50"
                },
                {
                    "rating": 2,
                    "userId": "637a8c03f7740521fbe8246e",
                    "_id": "63a8812bad855bef7ecf7c09"
                },
                {
                    "rating": 2,
                    "userId": "63a9d4d85defffcabbcbc0a7",
                    "_id": "63a9eb989e20366c450b75a4"
                },
                {
                    "rating": 4,
                    "userId": "63a3435e9958691a5e19bef1",
                    "_id": "63ae0cf79b94d536a0f8fb2d"
                },
                {
                    "rating": 3,
                    "userId": "63b5790d6ea3fa39cb92f29c",
                    "_id": "63b579e26ea3fa39cb92f42f"
                }
            ],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/rg18Kf4en2o",
                    "shortDescription": "Introduction Lesson",
                    "totalHours": 4,
                    "_id": "6384a6b190658873b8e1681e"
                },
                {
                    "title": "Embedded Hardware",
                    "videoLink": "//www.youtube.com/embed/7CqJlxBYj-M",
                    "shortDescription": "This lesson discusses Embedded Hardware",
                    "totalHours": 107,
                    "_id": "6384a6dd90658873b8e16824"
                },
                {
                    "title": "My 3rd Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "the description of my 3rd subtitle",
                    "totalHours": 4,
                    "_id": "63b8775809282f4c8b5f7cd9"
                },
                {
                    "title": "My 4th Subtitle",
                    "videoLink": "//www.youtube.com/embed/qtheqr0jgIQ",
                    "shortDescription": "ana bgd ta3bana",
                    "totalHours": 4,
                    "_id": "63b877b009282f4c8b5f7d27"
                }
            ],
            "exercises": [
                {
                    "question": "What is my favourite colour?",
                    "options": [
                        "Yellow",
                        "Red",
                        "Blue",
                        "Green"
                    ],
                    "answer": "Yellow",
                    "_id": "6384a6eb90658873b8e1682b",
                    "index": 0
                },
                {
                    "question": "What is my favourite movie?",
                    "options": [
                        "Interstellar",
                        "Fractured",
                        "Bohemian Rhapsody",
                        "The Help"
                    ],
                    "answer": "Interstellar",
                    "_id": "6384a6fe90658873b8e16832",
                    "index": 1
                }
            ],
            "createdAt": "2022-11-28T12:16:22.376Z",
            "updatedAt": "2023-01-06T19:42:00.442Z",
            "__v": 0,
            "discountApplied": true,
            "numOfEnrolledTrainees": 4,
            "traineesProgress": [
                {
                    "traineeId": "63a3196b78d093cbccc82bb7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9d0042821590c8a89c3da"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63a9ecf99e20366c450b76fb"
                },
                {
                    "traineeId": "63a9d4d85defffcabbcbc0a7",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63a9ed079e20366c450b772a"
                },
                {
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63aceaeae99ea10bdc1e220e"
                },
                {
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63aceaf1e99ea10bdc1e223a"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b006b92cd8f6cb0e93b6a6"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b006be2cd8f6cb0e93b6d5"
                },
                {
                    "traineeId": "63b0058c2cd8f6cb0e93b47a",
                    "content": "exercise",
                    "_id": "63b006c62cd8f6cb0e93b708"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6dd90658873b8e16824",
                    "_id": "63b57a7b6ea3fa39cb92f55c"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "6384a6b190658873b8e1681e",
                    "_id": "63b57a9d6ea3fa39cb92f61e"
                },
                {
                    "traineeId": "63b5790d6ea3fa39cb92f29c",
                    "content": "exercise",
                    "_id": "63b57aad6ea3fa39cb92f660"
                }
            ],
            "iTraineeNotes": [
                {
                    "note": "not ganna's note",
                    "_id": "63a5ad69d4971b7ccc06af13"
                },
                {
                    "iTraineeID": "63a9d4d85defffcabbcbc0a7",
                    "note": "hi im mariam",
                    "_id": "63a9ed7e9e20366c450b778f"
                },
                {
                    "iTraineeID": "63a3435e9958691a5e19bef1",
                    "note": "noooo",
                    "_id": "63ae1a129b94d536a0f8ff98"
                },
                {
                    "iTraineeID": "63b5790d6ea3fa39cb92f29c",
                    "note": "hello people wussuuuuup",
                    "_id": "63b57a656ea3fa39cb92f527"
                }
            ],
            "published": true,
            "open": true,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63a93d1019aea603602a6680",
                    "note": "should be ganna the ctrainee's ONLY note",
                    "_id": "63add0da268f1e489cede62f"
                }
            ]
        },
        "reporter": {
            "_id": "63a3435e9958691a5e19bef1",
            "firstname": "Ganna",
            "lastname": "ElSayed",
            "username": "gannaitrainee",
            "password": "$2b$10$Gna5pzRiWgN2ndMBQlRrsusbA1YtWw42DhRahgsbW1vP0njK2oM0e",
            "email": "a",
            "gender": "female",
            "courses": [
                "6384a69690658873b8e1681b",
                "6384aa2163ed1a80c81fa216",
                "6384ab3863ed1a80c81fa262"
            ],
            "wallet": 0,
            "grades": [],
            "createdAt": "2022-12-21T17:33:20.761Z",
            "updatedAt": "2022-12-31T06:28:42.787Z",
            "__v": 0
        }
    },
    {
        "_id": "63b05cd6fe2cb944aae5e860",
        "type": "Technical",
        "content": "testttt",
        "status": "Pending",
        "courseId": "63b054dbfe2cb944aae5e1d4",
        "reporterId": "63b05998fe2cb944aae5e575",
        "followUp": "",
        "priority": null,
        "createdAt": "2022-12-31T16:01:26.012Z",
        "updatedAt": "2022-12-31T16:42:47.317Z",
        "__v": 0,
        "course": {
            "_id": "63b054dbfe2cb944aae5e1d4",
            "title": "Intro to Python",
            "hours": 12,
            "subject": "Computer Science",
            "price": 80,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63b04becfe2cb944aae5ddf7",
            "summary": "All about Python",
            "previewURL": "//www.youtube.com/embed/Ozrduu2W9B8",
            "discountApplied": true,
            "numOfEnrolledTrainees": 2,
            "published": true,
            "open": true,
            "overallRating": 4,
            "cTraineeNotes": [],
            "iTraineeNotes": [
                {
                    "iTraineeID": "63b05998fe2cb944aae5e575",
                    "note": "abcdefg I have to go",
                    "_id": "63b05b7efe2cb944aae5e6c7"
                }
            ],
            "reviews": [
                {
                    "content": "best python course out there",
                    "traineeId": "63b05998fe2cb944aae5e575",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63b059dafe2cb944aae5e663"
                },
                {
                    "content": "abc",
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "traineeName": "Ganna ElSayed",
                    "_id": "63b06d68fe2cb944aae61127"
                }
            ],
            "ratings": [
                {
                    "rating": 3,
                    "userId": "63b05998fe2cb944aae5e575",
                    "_id": "63b059d0fe2cb944aae5e658"
                },
                {
                    "rating": 5,
                    "userId": "63b04cbffe2cb944aae5de09",
                    "_id": "63b06d63fe2cb944aae61114"
                }
            ],
            "subtitles": [
                {
                    "title": "T1",
                    "videoLink": "//www.youtube.com/embed/SbQAAuom-GA",
                    "shortDescription": "Installing Python",
                    "totalHours": 4,
                    "_id": "63b054f4fe2cb944aae5e1ef"
                },
                {
                    "title": "T2",
                    "videoLink": "//www.youtube.com/embed/Gqby4v5JOu4",
                    "shortDescription": "Numbers",
                    "totalHours": 8,
                    "_id": "63b0550ffe2cb944aae5e1f7"
                }
            ],
            "exercises": [
                {
                    "question": "What is your favorite subject?",
                    "options": [
                        "CS",
                        "Maths",
                        "Graphics",
                        "Cars"
                    ],
                    "answer": "CS",
                    "index": 0,
                    "_id": "63b05530fe2cb944aae5e21c"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63b05998fe2cb944aae5e575",
                    "content": "exercise",
                    "_id": "63b05a19fe2cb944aae5e68a"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b0550ffe2cb944aae5e1f7",
                    "_id": "63b06d49fe2cb944aae610b2"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b054f4fe2cb944aae5e1ef",
                    "_id": "63b06d4cfe2cb944aae610c7"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "exercise",
                    "_id": "63b06d71fe2cb944aae6113a"
                }
            ],
            "createdAt": "2022-12-31T15:27:23.092Z",
            "updatedAt": "2023-01-04T13:24:12.122Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b05998fe2cb944aae5e575",
            "firstname": "Ganna",
            "lastname": "ElSayed",
            "username": "gannaitraineefinal",
            "password": "$2b$10$N6UxjymTbyMberGcDi.ks.yGkf/cfgnZlMXOenHvUAmDcP.2D29Wu",
            "email": "gannamelsayed@gmail.com",
            "gender": "female",
            "courses": [],
            "wallet": 57,
            "grades": [],
            "createdAt": "2022-12-31T15:47:36.952Z",
            "updatedAt": "2022-12-31T16:43:13.774Z",
            "__v": 0
        }
    },
    {
        "_id": "63b0752fcf38dfc34f33b8ba",
        "type": "Technical",
        "content": "yay",
        "status": "Pending",
        "courseId": "63b024dba2669ff313f14280",
        "reporterId": "63b0522f2f7665a020b2ba19",
        "followUp": "",
        "priority": null,
        "createdAt": "2022-12-31T17:45:19.362Z",
        "updatedAt": "2022-12-31T17:46:27.282Z",
        "__v": 0,
        "course": {
            "_id": "63b024dba2669ff313f14280",
            "title": "Jewelry Design",
            "hours": 12,
            "subject": "Lab Programming",
            "price": 80,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a9e4579e20366c450b7379",
            "summary": "This course will teach you the essentials of jewelry design.",
            "previewURL": "//www.youtube.com/embed/aEvbBFV3zB4",
            "discountApplied": true,
            "numOfEnrolledTrainees": 7,
            "published": false,
            "open": true,
            "overallRating": 0,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63b04cbffe2cb944aae5de09",
                    "note": "new ruless",
                    "_id": "63b069f5fe2cb944aae6016e"
                }
            ],
            "iTraineeNotes": [],
            "reviews": [],
            "ratings": [],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "This is an introduction where we discuss the history of jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02506a2669ff313f142bb"
                },
                {
                    "title": "Materials & Equipment",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "In this lesson we will discuss the needed materials and equipment for the jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02532a2669ff313f142c5"
                },
                {
                    "title": "Design Patterns",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "In this lesson, we will discuss the different design patterns used frequently in jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02553a2669ff313f142d3"
                }
            ],
            "exercises": [
                {
                    "question": "What is the best day of the week?",
                    "options": [
                        "Sunday",
                        "Friday",
                        "Monday",
                        "Thursday"
                    ],
                    "answer": "Friday",
                    "index": 0,
                    "_id": "63b02586a2669ff313f1431e"
                },
                {
                    "question": "Who is my favourite singer?",
                    "options": [
                        "The Weeknd",
                        "Frank Ocean",
                        "Taylor Swift",
                        "Daniel Ceasar"
                    ],
                    "answer": "The Weeknd",
                    "index": 1,
                    "_id": "63b025b3a2669ff313f14329"
                },
                {
                    "question": "What is the best time of the year?",
                    "options": [
                        "Thanksgiving",
                        "Christmas",
                        "New Year's",
                        "Summer"
                    ],
                    "answer": "Christmas",
                    "index": 2,
                    "_id": "63b025dba2669ff313f14337"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "exercise",
                    "_id": "63b0525e2f7665a020b2bb01"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02553a2669ff313f142d3",
                    "_id": "63b0528d2f7665a020b2bb13"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02532a2669ff313f142c5",
                    "_id": "63b0528f2f7665a020b2bb29"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02506a2669ff313f142bb",
                    "_id": "63b052932f7665a020b2bb43"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02532a2669ff313f142c5",
                    "_id": "63b06931fe2cb944aae5ffd1"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02553a2669ff313f142d3",
                    "_id": "63b06932fe2cb944aae5fff3"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02506a2669ff313f142bb",
                    "_id": "63b06935fe2cb944aae6006d"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "exercise",
                    "_id": "63b069a6fe2cb944aae60128"
                }
            ],
            "createdAt": "2022-12-31T12:02:35.085Z",
            "updatedAt": "2023-01-04T13:24:11.625Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b0522f2f7665a020b2ba19",
            "firstname": "Mariam",
            "lastname": "ElNaggar",
            "username": "m.elnaggar",
            "password": "$2b$10$aK5p7y53VPEzF6Rw7gInneu5kFReg27KwD7xR0/rd0Z0wjR7Yd3nS",
            "email": "melnaggar815@gmail.com",
            "gender": "female",
            "courses": [
                "63b024dba2669ff313f14280"
            ],
            "wallet": 0,
            "grades": [],
            "createdAt": "2022-12-31T15:15:59.101Z",
            "updatedAt": "2022-12-31T15:57:14.252Z",
            "__v": 0
        }
    },
    {
        "_id": "63b54baa014e12b8b158df37",
        "type": "Financial",
        "content": "yes",
        "status": "Pending",
        "courseId": "63b024dba2669ff313f14280",
        "reporterId": "63b0522f2f7665a020b2ba19",
        "followUp": "",
        "priority": null,
        "createdAt": "2023-01-04T09:49:30.467Z",
        "updatedAt": "2023-01-04T09:50:31.141Z",
        "__v": 0,
        "course": {
            "_id": "63b024dba2669ff313f14280",
            "title": "Jewelry Design",
            "hours": 12,
            "subject": "Lab Programming",
            "price": 80,
            "discount": 50,
            "discountValidUntil": "2023-01-12T00:00:00.000Z",
            "instructor": "63a9e4579e20366c450b7379",
            "summary": "This course will teach you the essentials of jewelry design.",
            "previewURL": "//www.youtube.com/embed/aEvbBFV3zB4",
            "discountApplied": true,
            "numOfEnrolledTrainees": 7,
            "published": false,
            "open": true,
            "overallRating": 0,
            "cTraineeNotes": [
                {
                    "cTraineeID": "63b04cbffe2cb944aae5de09",
                    "note": "new ruless",
                    "_id": "63b069f5fe2cb944aae6016e"
                }
            ],
            "iTraineeNotes": [],
            "reviews": [],
            "ratings": [],
            "subtitles": [
                {
                    "title": "Introduction",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "This is an introduction where we discuss the history of jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02506a2669ff313f142bb"
                },
                {
                    "title": "Materials & Equipment",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "In this lesson we will discuss the needed materials and equipment for the jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02532a2669ff313f142c5"
                },
                {
                    "title": "Design Patterns",
                    "videoLink": "//www.youtube.com/embed/aEvbBFV3zB4",
                    "shortDescription": "In this lesson, we will discuss the different design patterns used frequently in jewelry design.",
                    "totalHours": 4,
                    "_id": "63b02553a2669ff313f142d3"
                }
            ],
            "exercises": [
                {
                    "question": "What is the best day of the week?",
                    "options": [
                        "Sunday",
                        "Friday",
                        "Monday",
                        "Thursday"
                    ],
                    "answer": "Friday",
                    "index": 0,
                    "_id": "63b02586a2669ff313f1431e"
                },
                {
                    "question": "Who is my favourite singer?",
                    "options": [
                        "The Weeknd",
                        "Frank Ocean",
                        "Taylor Swift",
                        "Daniel Ceasar"
                    ],
                    "answer": "The Weeknd",
                    "index": 1,
                    "_id": "63b025b3a2669ff313f14329"
                },
                {
                    "question": "What is the best time of the year?",
                    "options": [
                        "Thanksgiving",
                        "Christmas",
                        "New Year's",
                        "Summer"
                    ],
                    "answer": "Christmas",
                    "index": 2,
                    "_id": "63b025dba2669ff313f14337"
                }
            ],
            "traineesProgress": [
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "exercise",
                    "_id": "63b0525e2f7665a020b2bb01"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02553a2669ff313f142d3",
                    "_id": "63b0528d2f7665a020b2bb13"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02532a2669ff313f142c5",
                    "_id": "63b0528f2f7665a020b2bb29"
                },
                {
                    "traineeId": "63b0522f2f7665a020b2ba19",
                    "content": "63b02506a2669ff313f142bb",
                    "_id": "63b052932f7665a020b2bb43"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02532a2669ff313f142c5",
                    "_id": "63b06931fe2cb944aae5ffd1"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02553a2669ff313f142d3",
                    "_id": "63b06932fe2cb944aae5fff3"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "63b02506a2669ff313f142bb",
                    "_id": "63b06935fe2cb944aae6006d"
                },
                {
                    "traineeId": "63b04cbffe2cb944aae5de09",
                    "content": "exercise",
                    "_id": "63b069a6fe2cb944aae60128"
                }
            ],
            "createdAt": "2022-12-31T12:02:35.085Z",
            "updatedAt": "2023-01-04T13:24:11.625Z",
            "__v": 0
        },
        "reporter": {
            "_id": "63b0522f2f7665a020b2ba19",
            "firstname": "Mariam",
            "lastname": "ElNaggar",
            "username": "m.elnaggar",
            "password": "$2b$10$aK5p7y53VPEzF6Rw7gInneu5kFReg27KwD7xR0/rd0Z0wjR7Yd3nS",
            "email": "melnaggar815@gmail.com",
            "gender": "female",
            "courses": [
                "63b024dba2669ff313f14280"
            ],
            "wallet": 0,
            "grades": [],
            "createdAt": "2022-12-31T15:15:59.101Z",
            "updatedAt": "2022-12-31T15:57:14.252Z",
            "__v": 0
        }
    }
]

```
     
  ![Screenshot (265)](https://user-images.githubusercontent.com/77853945/211094208-f24a5ab6-6545-41d6-9113-1f4fddb48016.png)
   
     
</details>






<details>
<summary>
Response - Test #2
</summary>
Status Code: 400 Bad Request
     
NOTE: that's because I'm logged in as a Trainee not an admin
   
```json
     
     {"error":"Access restricted"}

```
</details>
  
  
  
  
  
```http
  PATCH /api/instructor/reviewInstructor/?id=6384a69690658873b8e1681b
```
  
  
  <details>
<summary>
Body - Test #1
</summary>

```json
    
{
    "content":"excellent instructor"
}


```
</details>
  





  
<details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
  
  {
    "_id": "63a34389398e97a471db5921",
    "username": "r.gosling",
    "password": "$2b$10$OUMyY7FuMHzgGwM8ckrRROS6zHaAthAWuY4BIvYnKLqmKgbLfpjAC",
    "country": "USA",
    "email": "nourhan.khedr24@gmail.com",
    "miniBio": "I was really bad in La La Land",
    "name": "Ryan Gosling",
    "rating": 3,
    "wallet": 2017,
    "ratings": [
        {
            "rating": 0,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "63a76d12d0318f90018cfcd7"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77dad1174185adbe05a91"
        },
        {
            "rating": 5,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb589e20366c450b7526"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf09b94d536a0f8faf7"
        }
    ],
    "reviews": [
        {
            "content": "tesssstttt",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0ce29b94d536a0f8faea"
        },
        {
            "content": "wallahi ya3ni mozza",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b57a0a6ea3fa39cb92f497"
        },
        {
            "content": "excellent instructor",
            "traineeId": "63b21764da1ecf541a899341",
            "traineeName": "Ganna ITrainee",
            "_id": "63b88c67d32caeabf7388bd8"
        }
    ],
    "createdAt": "2022-12-21T17:34:01.355Z",
    "updatedAt": "2023-01-06T21:02:31.494Z",
    "__v": 0
}
  

```
  
  ![Screenshot (271)](https://user-images.githubusercontent.com/77853945/211099619-7c7a9ad9-6e76-4405-9013-014f1b7f5099.png)


</details>
  
  
  
<details>
<summary>
Body - Test #2
</summary>

```json

{
    "content":""
}


```
</details>
  




  
<details>
<summary>
Response - Test #2
</summary>
Status Code: 400 Bad Request
  
  
```json
  
  {"error":"Your review cannot be empty!"}

```

</details>
  
  
  
  
  
```http
  PATCH /api/instructor/editMyInstructorReview/?id=6384a69690658873b8e1681b
```

  <details>
<summary>
Body - Test #1
</summary>

```json
{
    "content":"part 2"
}

```
</details>
  



  
<details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
  
  {
    "_id": "63a34389398e97a471db5921",
    "username": "r.gosling",
    "password": "$2b$10$OUMyY7FuMHzgGwM8ckrRROS6zHaAthAWuY4BIvYnKLqmKgbLfpjAC",
    "country": "USA",
    "email": "nourhan.khedr24@gmail.com",
    "miniBio": "I was really bad in La La Land",
    "name": "Ryan Gosling",
    "rating": 3,
    "wallet": 2017,
    "ratings": [
        {
            "rating": 0,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "63a76d12d0318f90018cfcd7"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77dad1174185adbe05a91"
        },
        {
            "rating": 5,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb589e20366c450b7526"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf09b94d536a0f8faf7"
        }
    ],
    "reviews": [
        {
            "content": "tesssstttt",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0ce29b94d536a0f8faea"
        },
        {
            "content": "wallahi ya3ni mozza",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b57a0a6ea3fa39cb92f497"
        },
        {
            "content": "part 2",
            "traineeId": "63b21764da1ecf541a899341",
            "traineeName": "Ganna ITrainee",
            "_id": "63b88c67d32caeabf7388bd8"
        }
    ],
    "createdAt": "2022-12-21T17:34:01.355Z",
    "updatedAt": "2023-01-06T21:06:03.644Z",
    "__v": 0
}

```

</details>
  
  
  
  

<details>
<summary>
Body - Test #1
</summary>

```json

{
    "content":""
}


```
</details>
  
  
  
  

<details>
<summary>
Response - Test #2
</summary>
Status Code: 400 Bad Request
  
  
```json
  
  {"error":"Your review cannot be empty!"}

```

</details>
  
  
  
  ```http
  PATCH /api/instructor/deleteMyInstructorReview/?id=6384a69690658873b8e1681b
```

 
<details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
  {
    "_id": "63a34389398e97a471db5921",
    "username": "r.gosling",
    "password": "$2b$10$OUMyY7FuMHzgGwM8ckrRROS6zHaAthAWuY4BIvYnKLqmKgbLfpjAC",
    "country": "USA",
    "email": "nourhan.khedr24@gmail.com",
    "miniBio": "I was really bad in La La Land",
    "name": "Ryan Gosling",
    "rating": 3,
    "wallet": 2017,
    "ratings": [
        {
            "rating": 0,
            "userId": "637a356c54c79d632507dc8a",
            "_id": "63a76d12d0318f90018cfcd7"
        },
        {
            "rating": 3,
            "userId": "63a3196b78d093cbccc82bb7",
            "_id": "63a77dad1174185adbe05a91"
        },
        {
            "rating": 5,
            "userId": "63a9d4d85defffcabbcbc0a7",
            "_id": "63a9eb589e20366c450b7526"
        },
        {
            "rating": 4,
            "userId": "63a3435e9958691a5e19bef1",
            "_id": "63ae0cf09b94d536a0f8faf7"
        }
    ],
    "reviews": [
        {
            "content": "tesssstttt",
            "traineeId": "63a3435e9958691a5e19bef1",
            "traineeName": "Ganna ElSayed",
            "_id": "63ae0ce29b94d536a0f8faea"
        },
        {
            "content": "wallahi ya3ni mozza",
            "traineeId": "63b5790d6ea3fa39cb92f29c",
            "traineeName": "Nada Ibrahim",
            "_id": "63b57a0a6ea3fa39cb92f497"
        }
    ],
    "createdAt": "2022-12-21T17:34:01.355Z",
    "updatedAt": "2023-01-06T21:08:38.735Z",
    "__v": 0
}

```
  ![Screenshot (272)](https://user-images.githubusercontent.com/77853945/211100440-21cb9f03-f708-43da-99f1-69c7e92556d4.png)

</details>




<details>
<summary>
Response - Test #2
</summary>
Status Code: 400 Bad Request
  
  
```json
  
  {"error":"Couldn't find a review made by you"}

```

</details>  
  
  
  
```http
  GET /api/instructor/getMyInstReview/?id=6384a69690658873b8e1681b
```

<details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json

    {
    "text": "YASSSS"
}
    
```
![Screenshot (273)](https://user-images.githubusercontent.com/77853945/211101014-31c082d3-59c3-4835-ad34-d87c3d535b11.png)

</details>


<details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
      
NOTE: test is an empty string cause I deleted my review
   
```json

    {
    "text": ""
}
    
```
![Screenshot (274)](https://user-images.githubusercontent.com/77853945/211101189-c80cbd3d-04e6-48df-ab57-0ef22ffd0884.png)

      
</details>

  
  
```http
  GET /api/users/logout
```
  
<details>
<summary>
Response - Test #1
</summary>
Status Code: 200 OK
   
```json
  {
    "message": "Token Deleted"
}

```
  
![Screenshot (270)](https://user-images.githubusercontent.com/77853945/211096896-2ee2be67-d900-492e-b8b9-e78ac9ca744f.png)

</details>
  
  
<details>
<summary>
Response - Test #2
</summary>
Status Code: 200 OK
    
NOTE: i'm getting this reponse because I'm trying to log out when I'm already logged out
   
```json
    
    {
    "message": "incorrect token",
    "isLoggedIn": false
}

```
    
![Screenshot (269)](https://user-images.githubusercontent.com/77853945/211096771-598101fe-20f6-4bb8-a408-8b29ce6a84d0.png)

</details>
  

</details>
  


  




## How to use
After following the instructions in the [Installations](https://github.com/Advanced-Computer-Lab-2022/Academic-Clowns-League#installations) section, you can run the backend and the frontend.
To run the backend:
```js
> cd backend
> nodemon server.js
```
To run the frontend:
```js
> cd frontend
> npm start
```
Then head to http://localhost:3000/ and start navigating.

NOTE: you need to add the following environment variables to a .env file: 
```PORT```
```MONGO_URI```
```YOUTUBE_API_KEY```





## Contributing
Contributions are always welcome! Your contributions in implementing any of these features would be appreciated:
- Having a Q&A section where trainees can leave questions for their instructors and instructors can view and answer those questions.
- Displaying more insights for the trainees by keeping a history of their grades and displaying their average score and keep track of the change in their average score over time.

Here's how to contribute:

1- Fork and clone the repo

2- Install all dependencies and run the project by following the instructions in the [Installations](https://github.com/Advanced-Computer-Lab-2022/Academic-Clowns-League#installations) and [How To Use](https://github.com/Advanced-Computer-Lab-2022/Academic-Clowns-League#how-to-use) sections.

3- Create a new branch and start working on the feature.

4- When you're done, commit and push your changes on your branch.

5- Create a pull request and kindly wait until it's reviewed.


## Credits
https://www.w3schools.com/REACT/DEFAULT.ASP

https://www.tutorialspoint.com/javascript/index.htm

YouTube  playlists for: Node, Express, React, Mongo and MERN stack.

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


## Licenses
- ![Hex.pm](https://img.shields.io/hexpm/l/plug)  Apache License 2.0 for the Stripe CLI.
- ![NPM](https://img.shields.io/npm/l/express)  MIT License for React, react-player, mongoose, express, etc.
