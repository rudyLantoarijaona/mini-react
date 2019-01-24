import BaseComponent from "./BaseComponent.js";

export default function HeaderComponent() {
    BaseComponent.apply(this);

    this.render = () => {

        return  '<div class="header" style="background-color: blue; color: white">{{title}}</div>';
    };
}