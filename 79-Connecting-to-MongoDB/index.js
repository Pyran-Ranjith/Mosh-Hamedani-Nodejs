const mongoose = require("mongoose");
// connect to MongoDB. .
// Dont worry mongodb will create a database for you
// with name playground if it is not there.
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB. . ", err));

/* 80-Schemas */
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  IsPublished: Boolean,
});

/* 81-Models */
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    namke: "Node.js Course",
    author: "Mosh",
    tags: ["node", "backend"],
    IsPublished: true,
  });
}

/* 82-Saving the Document */
const result = await course.save();
console.log(result);

createCourse();