import BaseComponent from "../BaseComponent.js";

export default function HeaderComponent() {
	TemplateComponent.apply(this);

	this.render = () => {
        const test = "test";

        return `
            <div class="navbar" style="line-height: 64px;margin-bottom: 12px;background: #ecedee;">
               {{test}}
            </div>  
        `;
    };
}