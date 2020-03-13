const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('Things are working');
    res.send('hey there!!');
});

app.post('/free_trial',(req,res)=>{
    console.log(req.body);
    res.json({
        version:'1.0.0',
        courseNumber:'ucs305',
        customerName:req.body.user
    })
});

app.listen(port,()=>console.log(`listening at port:${port}`));