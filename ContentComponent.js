import BaseComponent from "./BaseComponent.js";

export default function ContentComponent() {
    BaseComponent.apply(this);

    this.render = () => {
        return  '{{content}}';
    };
}