require('dotenv').config()
const express= require('express');
const app=express()
const port=3000;
app.get('/',(req,res)=>{
    
    res.send("hello  i am shubham mourya")
})
app.get('/api/jokes',(req,res)=>{
      const jokes=[
        {
            id:1,
            title:'jokes 1',
            content:'बैंक के बाहर भीड़ लगी थी...एक आदमी बार-बार आगे जाने की कोशिश करता और लोग उसे पकड़कर पीछे खींच लेते.5-6 बार पीछे खींचे जाने के बाद वह चिल्लाया :-‘लगे रहो लाइन में, मैं आज बैंक ही नहीं खोलूंगा!😂🤣😂😂'
        },
        {
            id:2,
            title:'jokes 2',
            content:'30 दिन से बिना बताए घर से गायब एक राजस्थानी पति घर लौटा…  पत्नी – मैं थारे गम में बीमार पड़ी थी, जै मैं मर जाती तो पति- तो मैं कौन सा श्मशान की चाबी अप...'
        },
        {
            id:3,
            title:' jokes 3',
            content:'this is a om jokes'
        },
        {
            id:4,
            title:'a jokes 4',
            content:'this is a prem jokes'
        },
        {
            id:5,
            title:'a jokes 5',
            content:'this is a parvez jokes'
        }
      ]
    res.send(jokes)
})
app.get('/home',(req,res)=>{
    
    res.send(" home route")
})
app.get('/login',(req,res)=>{
    
    res.send("<h1 >shubham mourya</h1> <p>lorem12</p>")
})

app.listen(process.env.PORT,()=>{
    console.log('server is running on port 3000')
})
