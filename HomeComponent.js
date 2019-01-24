import BaseComponent from "./BaseComponent.js";
import HeaderComponent from "./HeaderComponent.js";
import ContentComponent from "./ContentComponent.js";
import FooterComponent from "./FooterComponent.js";

export default function HomeComponent() {
    BaseComponent.apply(this);

    this.render = () => {
        const header = new HeaderComponent();
        const content = new ContentComponent();
        const footer = new FooterComponent();
        let date = new Date();
        const data = {
            title: `homepage`,
            hour : date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
            content : '<div class="subscribe_form"> <div class="sub"><h1>Bonjour John Doe !</h1><h4>Venez découvrir notre nouveau produit</h4></div></div>',
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