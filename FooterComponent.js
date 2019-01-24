import BaseComponent from "./BaseComponent.js";

export default function FooterComponent() {
    BaseComponent.apply(this);

    this.render = () => {
        return  "<div id='footer_holder'><div id='footer'><div id='blue2'>{{hour}}</div></div></div>";
        
    };
}