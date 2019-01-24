import BaseComponent from "./BaseComponent.js";

export default function HeaderComponent() {
    BaseComponent.apply(this);

    this.render = () => {

        return  "<div id='header_holder'><h2>{{title}}</h2><div id='header'><div id='blue'></div></div></div>";
        
    };
}