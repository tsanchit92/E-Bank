import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const __dirname = path.resolve();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: false
}));


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/Registration.html');
})

app.post("/", (req, res) => {
    let username = req.body.Username;
    let password = req.body.Password;
    let email = req.body.Email;
    let gender = req.body.Gender;

    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <td>Username</td>
            <td>${username}</td>
        </tr>
        <tr>
            <td>Password</td>
            <td>${password}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>${email}</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>${gender}</td>
        </tr>
    </table>
</body>
</html>

    `)
})

app.listen(5000 || process.env.PORT, () => {
    console.log("Started at 5000");
});