import About from "@/api/parts/about";
import AzonProjects from "@/api/parts/azonProjects";
import Banners from "@/api/parts/banners";
import Branches from "@/api/parts/branches";
import Contacts from "@/api/parts/contacts";
import Categories from "@/api/parts/categories";
import Auth from '@/api/parts/auth.js';

export default {
    auth: new Auth('/auth'),
    about: new About('/about'),
    azonProjects: new AzonProjects('/azon-projects'),
    banners: new Banners('/banners'),
    branches: new Branches('/branches'),
    contacts: new Contacts('/contact'),
    categories: new Categories('/categories')
}