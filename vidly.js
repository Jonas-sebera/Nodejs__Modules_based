
const { verify } = require('crypto');
const express = require('express');
const vidly = express();
const http = require('http');

vidly.use(express.json());//enable json objects in the request body

//CREATING SERVER
const server = http.createServer((req,res) =>{
if(req.url === '/'){
    res.write('WELCOME TO VIDLY.COM\nYOUR FREE MOVIE RANKING MOBILE APPLICATION.').statusCode(200);
    res.end();
}
if(req.url === '/apis/vidly'){
    res.statusCode(200).write('You successfully gotten access..Please enter the ID of the movie of your desire...');
    res.write(JSON.stringify([001,002,003,004,005]));
    res.end();
}
else{
    res.statusCode(404).write('THE WEB SERVER YOU TRYING TO REACH IS "NOT FOUND"');
}
});


const movies = [
    {id: 001, name: 'LOST_CITY' , quality:['144p','360p','960p','1080p','1444p'] },
    {id: 002, name: 'KUNGFU_KILLER' , quality:['144p','360p','960p','1080p','1444p'] },
    {id: 003, name: 'CHAOS_WALKING' , quality:['144p','360p','960p','1080p','1444p'] },
    {id: 004, name: 'OUTER_ BANKS' , quality:['144p','360p','960p','1080p','1444p'] },
    {id: 005, name: 'WARRIOR_NUN' , quality:['144p','360p','960p','1080p','1444p'] }
]
//GETTING THE DATA//first route 
vidly.get('/',(req,res) =>{
    res.write('WELCOME TO VIDLY.COM \n YOUR FREE MOVIE RANKING MOBILE APPLICATION.');
    res.end('....Your movie ranking starts now...Need some assisstance..??..Let us know...??');
 });
vidly.get('/vidly.com/apis/movies',(req,res) =>{
    res.write('You made the right choice to choose us to be your top movie ranking application..');
res.end('...Just Go ahead and select your desired movie...START RIGHT BY ENTERING YOUR MOVIE "id"');
});
vidly.get('/vidly.com/apis/movies/:id',(req,res) =>{
    res.write('ALMOST THERE BUDDY,PLEASE ENTER THE "name" OF YOUR OWN DESIRED MOVIE');
   res.end('...Having trouble entering your MOVIE "name"..??..Let us know...')

//checking inputs
let movie = movies.find( c => c.id === parseInt(req.params.id));
if(!movie) return res.status(404).send(`The movie with the ID ${id} was NOT FOUND...`);
res.send(movie);
});
vidly.get('/vidly.com/apis/movies/:id/:name',(req,res) =>{
    res.write('ALMOST THERE BUDDY,PLEASE ENTER THE "quality" OF YOUR OWN DESIRED MOVIE');
    res.end('...Having trouble entering your movie "quality"..??..Let us know..');

});
vidly.get('/vidly.com/apis/movies/:id/:name/:quality',(req,res) =>{
    res.write('You should have started enjoying your streaming movie right now...');
   res.end('...Not the fact...??..Let us know what went wrong...');

});
 //all those get requests in a single grabber
// vidly.get('/vidly.com/apis/movies/:id/:name/:quality',(req,res) =>{
//     res.write('ALMOST THERE BUDDY,PLEASE ENTER THE "id" , "name" AND THE "quality" OF YOUR OWN DESIRED MOVIE...GET READY TO GET STARTED A SOON AS POSSIBLE');
//  end();
// });


//checking inputs entered by the user
//HANDLING POST REQUESTS
vidly.post('/vidly.com/api/movies',(req,res) =>{
   let myMovie = {
     id: movies.length + 1, //assign to id manually
     name: req.body.name,
     quality: req.body.quality
    };

    movies.push(myMovie);
    res.send(myMovie);


});


//setting the environment variable

const PORT = process.env.PORT || 3000
vidly.listen(3000,() =>console.log(`Our Vidly app is listening on port ${PORT}...`));
