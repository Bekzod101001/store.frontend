"use strict";(self["webpackChunkazon_kitoblari"]=self["webpackChunkazon_kitoblari"]||[]).push([[238],{63238:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});s(57658);var e=function(){var t=this,a=t._self._c;return a("header",{staticClass:"header",attrs:{"data-aos":"fade-down","data-aos-duration":"300","data-aos-delay":"500"}},[a("div",{staticClass:"header-top"},[a("div",{staticClass:"container"},[a("div",{staticClass:"header-top-wrapper"},[a("div",{staticClass:"header-top-left"},[a("span",[a("i",{staticClass:"icon-branch"}),t._v(" "+t._s(t.about.slogan)+" ")])]),a("div",{staticClass:"header-top-phone"},[a("router-link",{attrs:{to:"/contact"}},[a("i",{staticClass:"icon-phone"}),t._v(" "+t._s(t.$t("home.contact"))+" ")])],1),a("div",{staticClass:"header-top-lang"},[a("a-dropdown",{attrs:{placement:"bottomRight"}},[a("a-button",[a("img",{attrs:{src:t.langs[t.activeLang].img,alt:"flag"}}),a("span",[t._v(" "+t._s(t.langs[t.activeLang].label)+" ")]),a("i",{staticClass:"icon-angle-down"})]),a("div",{staticClass:"header-top-lang-options",attrs:{slot:"overlay"},slot:"overlay"},[a("ul",[t._l(t.langs,(function(s,e){return[t.activeLang!==e?a("li",{key:e,on:{click:function(a){return t.changeLang(e)}}},[a("img",{attrs:{src:s.img,alt:"flag"}}),t._v(" "+t._s(s.label)+" ")]):t._e()]}))],2)])],1)],1)])])]),a("div",{staticClass:"header-middle"},[a("div",{staticClass:"container"},[a("div",{staticClass:"header-middle-wrapper"},[a("div",{staticClass:"header-middle-bars"},[a("a-button",{class:{active:t.isActiveMobile},on:{click:function(a){return t.onClickMobile(!0)}}},[a("i",[a("span"),a("span"),a("span")])])],1),a("div",{staticClass:"header-middle-logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:t.about.logo,alt:"logo"}})])],1),a("div",{staticClass:"header-middle-search"},[a("a-dropdown",{attrs:{placement:"bottomLeft"}},[a("a-button",{staticClass:"header-middle-search-filter"},[t._v(" "+t._s(t.$t("products.button.amount"))+" "),a("i",{staticClass:"icon-angle-down"})]),a("div",{staticClass:"dropdown-options",attrs:{slot:"overlay"},slot:"overlay"},[a("ul",t._l(t.computedCategoriesWithoutSub,(function(s,e){return a("li",{key:e},[a("router-link",{attrs:{to:"/products"}},[t._v(" "+t._s(s.name)+" ")])],1)})),0)])],1),t._m(0),a("a-button",{staticClass:"header-middle-search-submit"},[t._v(t._s(t.$t("button.search")))])],1),a("router-link",{staticClass:"header-middle-shop",attrs:{to:{name:"shopping"}}},[a("div",{staticClass:"header-middle-shop-count"},[a("i",{staticClass:"icon-shop"}),a("span",[t._v(t._s(t.totalProductsAmount))])]),a("div",{staticClass:"header-middle-shop-info"},[a("span",[t._v(t._s(t.$t("navigation.basket")))]),a("small",[t._v(t._s(t.sumFormatter(t.totalSum))+" "+t._s(t.$t("sum")))])])]),a("div",{staticClass:"header-middle-login"},[t.isLoggedIn?a("a-button",{on:{click:function(a){return t.$router.push({name:"Account"})}}},[a("i",{staticClass:"icon-user"}),a("span",[t._v(t._s(t.authUser.firstName)+" ")])]):a("a-button",{on:{click:function(a){return t.$router.push({name:"Sign In"})}}},[a("i",{staticClass:"icon-user"}),a("span",[t._v(t._s(t.$t("button.enter")))])])],1)],1)])]),a("div",{staticClass:"header-bottom"},[a("div",{staticClass:"container"},[a("div",{staticClass:"header-bottom-wrapper"},[t.categories?a("Menu",{attrs:{list:t.computedCategoriesWithSub,isActiveFull:t.isActiveFull},on:{onClickFull:t.onClickFull}}):t._e()],1)])]),a("MobileMenu",{class:{active:t.isActiveMobile},attrs:{list:t.list,onClickMobile:t.onClickMobile}})],1)},A=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"header-middle-search-input"},[a("i",{staticClass:"icon-search"}),a("input",{attrs:{type:"text",placeholder:"Mahsulotlar bo‘ylab izlash"}})])}],i=s(90408),o=s(12636),l=s(71259),n={components:{Menu:()=>s.e(561).then(s.bind(s,95561)),MobileMenu:()=>s.e(765).then(s.bind(s,89765))},props:{categories:Array},data:()=>({isActiveFull:!1,isActiveMobile:!1,langs:{uz:{label:"O‘zbekcha",img:s(15897)},ru:{label:"Русский",img:s(59141)},en:{label:"English",img:s(43147)}},activeLang:localStorage.getItem("lang")}),computed:{...(0,i.rn)("auth",["authUser"]),...(0,i.Se)("auth",["isLoggedIn"]),...(0,i.Se)("menu",["list"]),...(0,i.Se)("basket",["totalSum","totalProductsAmount"]),...(0,i.Se)("about",["about"]),computedCategoriesWithSub(){return this.categories.filter((t=>t.categories.length))},computedCategoriesWithoutSub(){return this.categories.filter((t=>!t.categories.length))}},methods:{...(0,i.OI)("preloader",["setPreloader"]),onClickFull(t){this.isActiveFull=t},onClickMobile(t){this.isActiveMobile=t},changeLang(t){this.setPreloader(!0),this.activeLang=t,l.Z.locale=t,localStorage.setItem("lang",t),location.reload()},sumFormatter:o._S}},r=n,c=s(1001),d=(0,c.Z)(r,e,A,!1,null,null,null),u=d.exports},43147:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQfSURBVHja1JZdbJNlFMd/b1va9X03ugGDsVRYoqgJII6NCCjimJuwkUAYbmEZKIqEmMxoQBwGTIwSRV2EgA4YcAGRIB8BBDaBMAGHBj9QHGQITAZky7qVtuv6tmvfj8eLFrYr8GJceJLn5jnnOf/zP/mfnEcSQvAwzcJDtocOIAE2IAkYNMC5NaDXBiT7v9nvTy0v4cLFNr5YV4fPFwDs/eIMDhxajre8FIBhu/dSMrcasParS2Pw8HSWFj/K+J/rkUaOZERVZZoNUGKXmuk5eJSJxQVs3b6YuiN/0trakSBnAAKbVUKZPh0Am1VixoyxiQZYAUHm6BHkZ0LK1ctYF5bizJkAVZWKBbDVuiYRc8gENtaS1H6bl0tzGf9UFh5PNx6PH48niBCgd3Whd3YiBHg8QTo6/Hh8YR4fk0GRuIXz919wznwRe84EamsbAWwWgJP1F9h1YxCdTzyNumc/4eMNzJo5jsVLXkDTrKhqFCFAqCoiHEYIUNUoMYtM2XNu8lsasUYipFYuIZCcxrYtZ9iz52yfijTN4HpzC59818oPo6bQc/4PvNVfM26UzMqqIkKhXkBgqiqmqgKCUKiXN8dZGXPueyw52bgWL+D0Tzd5b/lumppuYBhSvJ0Aum7S06Ph93ezY98d5Ldn87wcRP2tCff0qayrXogpwAgGATAFbF+Vh+71YS98A5/DxbmGv9m0/hgAaWkymha9J9PRdwKhVkeSgwcNtbdkTlxFBw7fX/sSRHtjDE1VsmwAnlkFOIcMweju/k8C9xTk3ddvdbmIJHLZAAxdR2trwwgEBmTCzFAI0+HoA0ivO4FTlh/4sP3JxwDIvHL9gbGRcBjS0+IAz+SuRtclgsEIABs3L+OV8lz0Ti/qmXPYMzPQsrMRptnXpi6VMaPT6N53GHtmBntvWqlcthmAwYOd2O30l6mEYZggBrFqTRmLynMJHTtJ55wFXDv7F+kvbU1wN+MHyB67gstXPLiKZ3Bny06m1XxI9Vt5JI9wo+sGmmbpAzCMKFlZbhoaV7Pq3QK8q9eirv2MptkLKTlFAhyEacZZiPjds5M/5uiZW7h3fsXQV8sorqulvnwYU/MnoWlaH0Bh4UTqG1aSmy7RXlSGdu0fduQtpXTTJTparmKaAtGPgQBMUxCJdDN/7gZWVh0k6fUKhu+qYeipOjYmX+K1iil9AOs3lGFraKBt3iJC2ZNYIefxeU0j1mgURUlBURxIElhkGYssI0mgKA4URUFWFLZtPU5R/pe0pmTg/vEI1hSZil+/vacirevTDYRPnKZlbgUfHG3nVvOphEsCYoCB3+cj0BufTqfPRywWTtRnAHD+/EWmTV7DR2vnM+/9d5AP1cPZY5oEuIBHgNQBXjgB4Pbdjea4OxMDaDoQlf73v4p/BwAgir62/ncsQQAAAABJRU5ErkJggg=="},59141:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAEZSURBVHja1JYxTkMxDIa/pAGqvkq0M2Jl4BZci50DMXIAjsHUgQEJ2kJf4cWxGehTIzYkZ8BTnMFf8tuOE8yMlhZpbM0BAUjAFDhxjp2BzwTMzeytyelDWEaga6hQF4HUopIOMVOsnBYAmgMSwM3tA1cXS9a7wSX4ojvl6XlzBIgomz6z7bNX9SBSjoAsynaf2e6dADEwlAowlMLqZecnUZ+ZTrSSKAtCRNUn2VIMMakkKoYGwyk+qkauq+j+8Y6Zgb1/+ORg3tGnCdcjQEUIBEzVB6CK5uoGJgJhAk4AimJUSVYpkCJxNvNqY6wq06xSeD00xp+nif3yOez9rHMAzoFLYOH8HK2B1TjRzka5HE2Ar/DvfxXfAwAeSZOQlTRuTwAAAABJRU5ErkJggg=="},15897:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAHcSURBVHja1JZNaxNRFIafM3MzkzjB1iqNgsUK1YUfW2l3Irhw5S8S3Hcl+DvciOLGheJSF4KtKyWoRYtiYpImmdyP48JME0EQ6s3Cd3NnLsx55rzzzr1XVJVFKmHBWjhAAAPUgVrk2hYYG6B56+7TjoiQJbB1aZXe0PL+S5/+0KH/0OOjOzdOGKBIEK5fbXF7c42lRo3HL/dYaeYAqCrrq8XhQ+1vQ9BfrVdS4XCuisyz3X2AwgBm4h1pIpxvNXnwvM3O3g8kQCKwceY4nYFFUQRhvztGAEFRBZmSqjCqCMtFRvAKYAyAU/jaL3nT7rJ1pcXrTz0G1nLhdJOx9dP3EhQYjt1frclSwfoA0w+M+sBobLn38C3XLp7i7MkGOx9KXr37fiTvTSr4MAe4v5lxbMXgywB0ALi5AZAeCZDmKaNWxuVpTM+VZdnOsixqRieTCXmerydVUmKrqpkAhKlfMVXVXDjAAHx+8YSinhGcjbPAmRoH5WQG2HbbGKeM3CAKoE5BsOkM4L1FghA0RLPHz/9o3jtSUpQ/pUmZrTzz1/P3v49KwAedA6hHScjTRpQORuEACdkhwHr1DHs+8j7mAKwAS8AasBw5qV3gY7Wj5ZVdEeWAUv77U8XPAQBQ8cxPcTjg0QAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=238.3ee4c8a9.js.map