import BaseComponent from "/BaseComponent.js";
import HomeComponent from "/HomeComponent.js";
import ContactComponent from "/ContactComponent.js";
import { routes } from "./RooterComponent.js";
import "./interpolate.js";

//ici j'appelle la homepage mais il faudrait changer ce qu'on appelle en fonction de la route

var url = window.location.href;
var page = url.substring(url.lastIndexOf('/') + 1);

var current_component = '';

var current_route = routes.find(route=>route.path === page)
current_component = current_route.component;

var to_display = current_component.display();
document.getElementById('root').innerHTML = to_display;