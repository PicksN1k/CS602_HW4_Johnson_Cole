// File: Course.js

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Fill in the code

const courseSchema = new Schema({

  _id: String,

  courseName: String,

  coordinator: {
    type: String,
    ref: 'Coordinator'
  }

},
{collection : 'courses'});

export const Course = mongoose.model(
  "Course", courseSchema);