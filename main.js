import BaseComponent from "./BaseComponent.js";
import HeaderComponent from "./components/HeaderComponent.js";

const headerComponent = new HeaderComponent();
rootComponent.display().then((content) => {
    document.getElementById('root').innerHTML = content;
});