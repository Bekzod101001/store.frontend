import About from "@/api/parts/about";
import AzonProjects from "@/api/parts/azonProjects";
import Banners from "@/api/parts/banners";

export default {
    about: new About('/about'),
    azonProjects: new AzonProjects('/azon-projects'),
    banners: new Banners('/banners')
}