const express = require("express");
const router = express.Router();
const pool = require("../db/db");


router.get("/", (req, res) => {
  res.json("Hello");
});

router.get("/patient", (req, res) => {
  //mysqlConnection.query("INSERT INTO 'Patient' (createdAt, modifiedAt, email, firstName ) VALUES (now(), now(), 'matt.j.smith@gmail.com', 'Matt')" ,(err, rows, fiels) => {
    pool.query("select * from Patient;" ,(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      console.log(err);
    }
  });
});
router.post("/", (req, res) => {
  //mysqlConnection.query("INSERT INTO 'Patient' (createdAt, modifiedAt, email, firstName ) VALUES (now(), now(), 'matt.j.smith@gmail.com', 'Matt')" ,(err, rows, fiels) => {
    const patient= req.body
   // console.log(patient.email)
    
    pool.query("INSERT INTO Patient (id ,createdAt, modifiedAt, email, firstName, lastName, phone, ssn, dateOfBirth, street, city, state, zip, insuranceCompany, plan, groupNumber, medications, surgeries, familyHistory, addictions,questionnaire, signature, middleInitial) VALUES ("+patient.id+",'"+patient.createdAt+"','"+ patient.modifiedAt+"','" +patient.email+"',' "+patient.firstName+"','"+patient.lastName+"','"+patient.phone+"','"+patient.ssn+"','"+patient.dateOfBirth+"','"+patient.street+"','"+patient.city+"','"+patient.state+"','"+patient.zip+"','"+patient.insuranceCompany+"','"+patient.plan+"','"+patient.groupNumber+"','"+patient.medications+"','"+patient.surgeries+"','"+patient.familyHistory+"','"+patient.addictions+"','"+patient.questionnaire+"','"+patient.signature+"','"+patient.middleInitial+"');" ,(err, rows, fiels) => {  
    if (!err) {
      res.json(rows);
      console.log(fiels);
    } else {
      console.log(err);
    }
  });
  res.status(201).send(err)
});
module.exports = router;
