import BaseComponent from "./BaseComponent.js";

export default function ContentComponent() {
    BaseComponent.apply(this);

    this.render = () => {
        return  '<div class="subscribe_form"> <div class="sub"><h1>Newsletter</h1><h4>Inscrivez-vous à notre newsletter</h4><form action="" method="post"><p><input type="text" name="Nom" id="nom" required placeholder="Nom"></p><p><input type="email" name="email" id="email" required placeholder="Email"></p><button type="submit" name="submit" id="submit">Soumettre</button></form></div></div>';
    };
}