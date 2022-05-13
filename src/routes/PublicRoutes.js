import About from "../pages/Home/Home";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Services from "../pages/Services";

export const publicRoute = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/services', name: 'Services', Component: Services },
    { path: '/contact', name: 'Contact', Component: Contact },
    { path: '/about', name: 'About', Component: About },
    { path: '/login', name: 'Login', Component: Login }
];