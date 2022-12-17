import {Core} from "@/api/base/Core";
import Auth from '@/api/parts/auth.js';
import Reviews from "@/api/parts/reviews";

export default {
    auth: new Auth('/auth'),
    about: new Core('/about'),
    azonProjects: new Core('/azon-projects'),
    banners: new Core('/banners'),
    branches: new Core('/branches'),
    contacts: new Core('/contact'),
    categories: new Core('/categories'),
    partners: new Core('/partners'),
    products: new Core('/products'),
    delivery: new Core('/delivery'),
    offers: new Core('/terms-and-offer'),
    featuredAd: new Core('/featured-ad'),
    socialProfiles: new Core('/social-profiles'),
    reviews: new Reviews('/reviews')
}