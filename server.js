const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

var cors = require('cors');

app.use(cors());
'use strict';
const nodemailer = require('nodemailer');
app.use(express.static(path.join(__dirname, 'build')));

async function sendMail(res) {
	console.log("Sending Mail...")
	let name = "Alex Price"


	let testAccount = await nodemailer.createTestAccount();
	console.log("Post testAccount")
	let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'emailsendbro@gmail.com', // generated ethereal user
            pass: '' // generated ethereal password
        }
    });

    console.log(transporter)
	console.log("Post transporter")

    let info = await transporter.sendMail({
        from: '"Alex Price" <emailsendbro@gmail.com>', // sender address
        to: 'emailreceivebro@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    });
    console.log("Post send")
    console.log("Info: ", info)
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.end();
2}

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.js'));
});

app.post('/contact', function(req, res){
	console.log(req)
	res.end();
	console.log("HEYs")
	sendMail(res)
	res.end();
})

app.listen(process.env.PORT || 8080);