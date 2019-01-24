import BaseComponent from "/BaseComponent.js";
import HomeComponent from "./HomeComponent.js";
import "./interpolate.js";

//ici j'appelle la homepage mais il faudrait changer ce qu'on appelle en fonction de la route

const homePage = new HomeComponent();
var home = homePage.display()

var to_display = home;
document.getElementById('root').innerHTML = to_display;
