import BaseComponent from "./BaseComponent.js";
import { HeaderComponent } from "./src/components/HeaderComponent.js";

export default function HomeComponent() {
    BaseComponent.apply(this);

    this.render = () => {
        const header = new HeaderComponent();

        const data = {
            title: `homepage`,
        };
        //on est dans la page home, on appelle le module(component) header avec les data ci-dessus
        //on appelle sa fonction display avec en param data (les options qu'on veut (genre le titre))
        //on return le bloc de la page main avec le header bien paramétré dedans
        let output_header = header.display(data)

        return '<div class="container">'
        		+
                output_header
                +
                '</div>'
       	;
    };
}