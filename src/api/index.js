import {Core} from "@/api/base/Core";

export default {
    auth: new Core('/auth'),
    about: new Core('/about'),
    azonProjects: new Core('/azon-projects'),
    banners: new Core('/banners'),
    branches: new Core('/branches'),
    contacts: new Core('/contact'),
    categories: new Core('/categories'),
    partners: new Core('/partners'),
    products: new Core('/products')
}