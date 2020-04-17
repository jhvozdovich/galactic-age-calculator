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

    if (earthAge <= 0) {
      $("#future-error").modal({
        modal: true,
        autoOpen: false,
      });
      $("#close-future").click(function() {
        $("#future-error").modal("hide");
      });
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      $("#name-error").modal({
        modal: true,
        autoOpen: false,
      });
      $("#close-name").click(function() {
        $("#name-error").modal("hide");
      });
    } else {
      $(".age-questions").hide();
      $(".age-results").show();
      $(".big-question").show();
    }

    $("button.big-question").click(function() {
      $(".age-results").hide();
      $(".big-question").hide();
      $(".life-form").show();
    });

    $("button.phone-home").click(function() {
      window.location.reload();
    });

    $("#life-expectancy-form").submit(function(event) {
      event.preventDefault();

      user.gender = $("#gender-input").val();
      user.activity = $("#activity-input").val();
      user.environment = $("#environment-input").val();
      user.stress = $("#stress-input").val();

      $(".life-expectancy-results").text(user.lifeExpectancyMessage());

      $(".life-form").hide();
      $(".final-answer").show();
    });
  });
});