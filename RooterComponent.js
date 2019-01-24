import HomeComponent from "./HomeComponent.js";
import ContactComponent from "./ContactComponent.js";
const homePage = new HomeComponent();
const contactPage = new ContactComponent();
console.log(homePage.display())
export const routes = [
    {
        path: '',
        component: homePage
    },
    {
        path: 'contact',
        component: contactPage
    },
];
