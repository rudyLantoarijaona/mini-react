import BaseComponent from "./BaseComponent.js";
import HeaderComponent from "./HeaderComponent.js";
import FooterComponent from "./FooterComponent.js";
import ContentComponent from "./ContentComponent.js";
export default function ContactComponent() {
    BaseComponent.apply(this);

    this.render = () => {
        const header = new HeaderComponent();
        const footer = new FooterComponent();
        const content = new ContentComponent();
        let date = new Date();

        let form = '<div class="subscribe_form"> <div class="sub"><h1>Newsletter</h1><h4>Inscrivez-vous à notre newsletter</h4><form action="" method="post"><p><input type="text" name="Nom" id="nom" required placeholder="Nom"></p><p><input type="email" name="email" id="email" required placeholder="Email"></p><button type="submit" name="submit" id="submit">Soumettre</button></form></div></div>';

        const data = {
            title: `Contact`,
            hour : date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
            content : form
        };
        //on est dans la page home, on appelle le module(component) header avec les data ci-dessus
        //on appelle sa fonction display avec en param data (les options qu'on veut (genre le titre))
        //on return le bloc de la page main avec le header bien paramétré dedans
        let output_header = header.display(data)
        let output_footer = footer.display(data)
        let output_content = content.display(data)

        return '<div class="container">'
        		+
                output_header
                +
                output_content
                +
                output_footer
                +
                '</div>'
       	;
    };
}