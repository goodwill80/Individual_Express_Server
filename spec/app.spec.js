var app = require('../app');
var supertest = require('supertest');
var request = require("request");
var base_url = "http://localhost:7000/";
var about_url = base_url + "about";
var contact_url = base_url + "contact";
var users_url = base_url + "users";

//Server front end

describe("Server Front end", function(){
  describe("GET / homepage", function(){
    it("is working and return code 200", function(done){
      supertest(app)
      .get("/")
      .set('accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done);
    });
  });
});

describe("GET / about page", function(){
  it("is working and return code 200", function(done){
    supertest(app)
    .get('/about')
    .set('accept', 'text/html')
    .expect('Content-Type', /html/)
    .expect(200, done);
  });
});

describe("GET / contact page", function(){
  it("is working and return code 200", function(done){
    supertest(app)
    .get('/contact')
    .set('accept','text/html')
    .expect('Content-Type', /html/)
    .expect(200, done);
  });
});

//Server API

describe("Server API", function(){
  describe("should return users json from GET /users", function(){

    it("it has to return users code 200", function(done){
      console.log("in /users");
      supertest(app)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200, done);
    });

    it("returns the correct data for /users/jonathan", function(done) {
      console.log("in /users/jonathan test");
      supertest(app)
        .get('/users/jonathan')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {
          "name": "jonathan",
          "age": 27,
          "email": "jonathan@gmail.com",
          "image": "http://static1.squarespace.com/static/553a8716e4b0bada3c80ca6b/553a9655e4b03939abece18a/5731fc75f85082142b12b095/1462893710445/mayfourblocknature.jpg",
          "quote": "I don't know what to say"
        }, done);
    });


    it("if page undefined should return 404",   function(done){
      console.log("in /users/undefined");
       supertest(app)
        .get('/users/undefined')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404)
        .end(function(err, res){
        if (err)
         return done(err);
          done();

      });

    });


  });
});
