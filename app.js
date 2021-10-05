
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/" , function(req, res){
  res.render("home");
});
app.get("/paper3" , function(req, res){
  res.render("paper3");
});
app.get("/paper2" , function(req, res){
  res.render("paper2");
});

app.get("/paper1" , function(req, res){
  res.render("paper1");
});

app.get("/pc1" , function(req, res){
  res.render("pc1");
});
app.get("/pc2" , function(req, res){
  res.render("pc2");
});
app.get("/pc3" , function(req, res){
  res.render("pc3");
});
app.get("/pc4" , function(req, res){
  res.render("pc4");
});app.get("/pc5" , function(req, res){
  res.render("pc5");
});
app.get("/pc6" , function(req, res){
  res.render("pc6");
});

app.get("/ps1" , function(req, res){
  res.render("ps1");
});
app.get("/ps2" , function(req, res){
  res.render("ps2");
});
app.get("/ps3" , function(req, res){
  res.render("ps3");
});
app.get("/ps4" , function(req, res){
  res.render("ps4");
});app.get("/ps5" , function(req, res){
  res.render("ps5");
});
app.get("/ps6" , function(req, res){
  res.render("ps6");
});

app.get("/pm1" , function(req, res){
  res.render("pm1");
});
app.get("/pm2" , function(req, res){
  res.render("pm2");
});
app.get("/pm3" , function(req, res){
  res.render("pm3");
});
app.get("/pm4" , function(req, res){
  res.render("pm4");
});app.get("/pm5" , function(req, res){
  res.render("pm5");
});
app.get("/pm6" , function(req, res){
  res.render("pm6");

});
app.get("/pm7" , function(req, res){
  res.render("pm7");
});app.get("/pm8" , function(req, res){
  res.render("pm8");
});
app.get("/pm9" , function(req, res){
  res.render("pm9");
});















app.post("/paper3",function(req, res) {
  res.render("paper3");
});
app.post("/paper2",function(req, res) {
  res.render("paper2");
});
app.post("/paper1",function(req, res) {
  res.render("paper1");
});
app.post("/pc1",function(req, res) {
  res.render("pc1");
});
app.post("/pc2",function(req, res) {
  res.render("pc2");
});app.post("/pc3",function(req, res) {
  res.render("pc3");
});app.post("/pc4",function(req, res) {
  res.render("pc4");
});app.post("/pc5",function(req, res) {
  res.render("pc5");
});app.post("/pc6",function(req, res) {
  res.render("pc6");
});

app.post("/ps1",function(req, res) {
  res.render("ps1");
});
app.post("/ps2",function(req, res) {
  res.render("ps2");
});app.post("/ps3",function(req, res) {
  res.render("ps3");
});app.post("/ps4",function(req, res) {
  res.render("ps4");
});app.post("/ps5",function(req, res) {
  res.render("ps5");
});app.post("/ps6",function(req, res) {
  res.render("ps6");
});
app.post("/pm1",function(req, res) {
  res.render("pm1");
});
app.post("/pm2",function(req, res) {
  res.render("pm2");
});app.post("/pm3",function(req, res) {
  res.render("pm3");
});app.post("/pm4",function(req, res) {
  res.render("pm4");
});app.post("/pm5",function(req, res) {
  res.render("pm5");
});app.post("/pm6",function(req, res) {
  res.render("pm6");
});
app.post("/pm7",function(req, res) {
  res.render("pm7");
});app.post("/pm8",function(req, res) {
  res.render("pm8");
});
app.post("/pm9",function(req, res) {
  res.render("pm9");
});

app.post("/home",function (req, res) {
  res.redirect("/");
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
