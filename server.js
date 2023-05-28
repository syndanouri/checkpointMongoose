const express = require("express");
const app = express();
const connectDb = require("./Config/connectDb");
const person = require("./models/person");
const port = 4000;

// const mongoose = require ("mongoose");
// require('dotenv').config()

// appel func
connectDb();
// task1:

// person
//   .create({
//     name: "sinda",
//     age: 32,
//     favoriteFoods: ["sushi", "pizza"],
//   })
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// task 2 :
// person
//   .insertMany([
//     {
//       name: "user1",
//       age: 30,
//       favoriteFoods: ["sushi"],
//     },
//     {
//       name: "user2",
//       age: 31,
//       favoriteFoods: ["pizza"],
//     },
//   ])
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//task3:
// person
//   .find()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//task4:
// person
//   .findOne({ favoriteFoods: ["pizza"] })
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//task5:
// person
//   .findById({ _id: "64707d4c89a3a44d0f95d94f" })
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//task6:
// person
//   .findByIdAndUpdate(
//     { _id: "64707d4c89a3a44d0f95d94f" },
//     { $push: { favoriteFoods: "salade" } }
//   )
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//task7
//   main();
// async function main(){
//     try {
//         const personS = await person.findOne({ name: 'sinda' });
//         person.age = 26;
//         const updatedPerson = await personS.save();
//         console.log(updatedPerson);
//       } catch (err) {
//         console.error(err);
//       }
// }

//task8
// main()
// let id ="62126721ad24d21edd1b696a"
// personModel.findByIdAndRemove(
//    {_id:id},
//    (err,data)=>{
//  if (err)throw err
//    console.log(data)
//  })

//task9

//  personModel.deleteMany({name:"salma"},(err,res)=>{
//  if (err)throw err
//  .done()
//     console.log(res)
//     })

//task10
// personModel.find({favoriteFoods:"sushi"})
// .sort({name : "sus"})
// .limit(2)
// .select("-age")
// .exec((err, data) => {
//   if(err)
//    throw (err);
// }
//  console.log(data));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server run with sucess");
  }
});
