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
To test out the project, try signing up as an Individual trainee, taking a look at all the courses and buying a course so you can have access to all the content inside the course and have the full experience.



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
