<details>
<summary>Course routes</summary>
  
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
</details>
  
  
<details>
<summary>Problem routes</summary>
  
  
</details>
  


  
