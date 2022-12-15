import About from "@/api/parts/about";
import AzonProjects from "@/api/parts/azonProjects";
import Banners from "@/api/parts/banners";
import Auth from '@/api/parts/auth.js';

export default {
    auth: new Auth('/auth'),
    about: new About('/about'),
    azonProjects: new AzonProjects('/azon-projects'),
    banners: new Banners('/banners')
}