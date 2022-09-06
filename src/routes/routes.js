// import ContactList from '../components/ContactList';
import AddContact from '../components/AddContact';
import EditContact from '../components/EditContact';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import Header from '../components/Header'
import ContactList from '../components/ContactList';
import { createRouter, createWebHistory } from 'vue-router';




const routes = [
    {
        name: 'ContactList',
        path: '/contact',
        component: ContactList
    },
    {
        name: 'Login',
        path: '/login',
        component:  Login
    },

    {
        name: 'Home',
        path: '/',
        component: Home
    },

    {
        name: 'AddContact',
        path: '/add_contact',
        component: AddContact
    },
    {
        name: 'EditContact',
        path: '/contact/edit/:id?',
        component: EditContact
    },
    {
        name: 'Register',
        path: '/register',
        component: Register
    },
    {
        name: 'Header',
        path: '/header',
        component: Header
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;