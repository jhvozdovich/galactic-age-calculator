import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { User } from "./../src/galactic-age.js";

$(document).ready(function() {
  $("#birthday-form").submit(function(event) {
    event.preventDefault();
    let name = $("#name-input").val();
    let birthday = $("#birthday-input").val();
    let year = parseInt(birthday.slice(0, 4));
    let month = parseInt(birthday.slice(5,7)) - 1;
    let day = parseInt(birthday.slice(8));
    
    let user = new User(name, year, month, day);
    let earthAge = user.findAge();
    $("#user-name").text(name);
    $("#earth-years").text(earthAge);
    $("#mercury-years").text(user.findMercury(earthAge));
    $("#venus-years").text(user.findVenus(earthAge));
    $("#mars-years").text(user.findMars(earthAge));
    $("#jupiter-years").text(user.findJupiter(earthAge));
    $(".age-results").show();
    $(".big-question").show();
  });
});