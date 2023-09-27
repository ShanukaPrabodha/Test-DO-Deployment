const express =require ('express');

const app =express ();

app.get('/' , (req,res)=>{
    res.send('<h1>My Node App SPK-Updated</h1>');
});

app.listen(5000, ()=>{
    console.log('App Listning on port 5000 !');
});
