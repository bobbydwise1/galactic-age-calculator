import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Calculator } from "./../src/calculator.js"

$(document).ready(function() {
  let calculator = null;
  $("#calculator").submit(function(event) {
    event.preventDefault();
    const birthday = $("#birthday").val().split("-");
    const expectancy = $("#expectancy").val();
    calculator = new Calculator({year: parseInt(birthday[0]), month: parseInt(birthday[1])-1, day: parseInt(birthday[2]), lifeExpectancy: parseInt(expectancy)});
    $("#calculator").hide();
    $("#mercury").text(`In Mercury time, you have lived ${calculator.planetaryYears(0)} years and, given your life expectancy, have ${calculator.planetaryLifeExpectancy(0)} years to live.`)
    $("#venus").text(`In Venus time, you have lived ${calculator.planetaryYears(1)} years and, given your life expectancy, have ${calculator.planetaryLifeExpectancy(1)} years to live.`)
    $("#mars").text(`In Mars time, you have lived ${calculator.planetaryYears(2)} years and, given your life expectancy, have ${calculator.planetaryLifeExpectancy(2)} years to live.`)
    $("#jupiter").text(`In Jupiter time, you have lived ${calculator.planetaryYears(3)} years and, given your life expectancy, have ${calculator.planetaryLifeExpectancy(3)} years to live.`)
    $("#output").show();
    $("#back").show();
  });
  $("#back").click(function() {
    $("#calculator").show();
    $("#output").hide();
    $("#back").hide();
    $("#mercury").text("");
    $("#venus").text("");
    $("#mars").text("");
    $("#jupiter").text("");
  });
});
