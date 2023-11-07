const express = require('express');
const Student = require("./models/studentModel");
const app = express();
const Faculty = require("./models/facultyModel")
const PORT = 5000;

app.use(express.json())
require('./db')

app.get("/", (req, res) => {
    res.send("Hello world.");
});
app.get("/students", (req, res) => {
    res.send("Hello from Students.");
});
app.get("/facultys", (req, res) => {
    res.send("Hello from Faculty....");
});
app.listen(PORT, function () {
    console.log(`Server is running on localhost:${PORT}`);
});

app.get('/student', async (req, res) => {
    try {
        const studentList = await Student.find();
        res.send(studentList)
    } catch (error) {
        console.log(error)
    }


}
)
app.post("/faculty", async (req, res) => {
    try {
        const data = req.body;
        const createdFaculty = new Faculty(data);
        await createdFaculty.save();
        res.send("Student Created")

    } catch (error) {
        console.log(error)
    }
})



//update 
app.put('/student/:id', async (req, res) => {
    try {
        const studentid = req.params.id;
        await Student.updateOne({ id: studentid }, { $set: req.body });
        res.send("Student updated")
    } catch (error) {
        console.log(error)
    }
})

app.delete("/student/:id", async (req, res) => {
    try {
        const studentid = req.params.id;
        await Student.deleteOne({ id: studentid });

        res.send("student deleted");
    } catch (error) {
        console.log(error);
    }
})
app.put("/faculty", async (req, res) => {
    try {
        const facultyList = await Faculty.find();
        res.send(facultyList)
    } catch (error) {
        console.log(error)
    }
})
app.put("/faculty/:id", async (req, res) => {
    try {
        const facultyid = req.params.id;
        await Faculty.updateOne({ id: facultyid }, { $set: req.body });
        res.send("Faculty updated")
    } catch (error) {
        console.log(error)
    }
})
app.delete("/faculty/:id", async (req, res) => {
    const facultyid= req.params.id;
    await Faculty.deleteOne({id:facultyid})
    res.send("Faculty deleted")
})