import BaseComponent from "./BaseComponent.js";

export default function FooterComponent() {
    BaseComponent.apply(this);

    this.render = () => {
        return  '<div class="footer" style="background-color: red; color: white">{{hour}}</div>';
    };
}