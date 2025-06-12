import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Skills from'../views/skills.vue'
import Experience from '../views/experience.vue'
import Contact from '../views/contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },

    {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },

    {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },

     {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router