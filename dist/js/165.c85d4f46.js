"use strict";(self["webpackChunkazon_kitoblari"]=self["webpackChunkazon_kitoblari"]||[]).push([[165],{23165:function(t,s,a){a.r(s),a.d(s,{default:function(){return p}});var i=function(){var t=this,s=t._self._c;return s("main",{staticClass:"pages products"},[s("div",{staticClass:"container"},[s("div",{staticClass:"pages-wrapper"},[s("div",{staticClass:"pages-breadcrumbs"},[s("ul",[s("li",[s("i",{staticClass:"icon-home"}),s("router-link",{attrs:{to:"/"}},[t._v(" "+t._s(t.$t("products.menus.main"))+" ")])],1),s("li",[s("i",{staticClass:"icon-angle-right"}),s("router-link",{attrs:{to:{name:"products"}}},[t._v(" "+t._s(t.$t("products.menus.product"))+" ")])],1)])]),s("div",{staticClass:"pages-title"},[s("h2",[t._v(" "+t._s(t.$t("products.title"))+" "),s("span",[t._v("(124)")])])]),s("div",{staticClass:"products-wrapper"},[s("div",{staticClass:"products-filter"},[s("h2",[t._v("Narxi")]),s("a-row",{attrs:{type:"flex",gutter:[16,16]}},[s("a-col",{attrs:{sm:24,xs:24}},[s("label",{attrs:{for:""}},[t._v(t._s(t.$t("products.filter.from")))]),s("a-input",{model:{value:t.filter.price.min,callback:function(s){t.$set(t.filter.price,"min",s)},expression:"filter.price.min"}})],1),s("a-col",{attrs:{sm:24,xs:24}},[s("label",{attrs:{for:""}},[t._v(t._s(t.$t("products.filter.to")))]),s("a-input",{model:{value:t.filter.price.max,callback:function(s){t.$set(t.filter.price,"max",s)},expression:"filter.price.max"}})],1)],1)],1),s("div",{staticClass:"products-list"},[s("div",{staticClass:"products-list-header"},[s("div",{staticClass:"products-list-header-filter"},[s("a-dropdown",{attrs:{placement:"bottomCenter"}},[s("a-button",[t._v(t._s(t.$t("products.filter.byPrice"))),s("i",{staticClass:"icon-angle-down"})]),s("div",{staticClass:"dropdown-options",attrs:{slot:"overlay"},slot:"overlay"},[s("ul",[s("li",[s("span",[t._v(t._s(t.$t("products.filter.high")))])]),s("li",[s("span",[t._v(t._s(t.$t("products.filter.low")))])])])])],1)],1),s("div",{staticClass:"products-list-header-count"},[s("a-dropdown",{attrs:{placement:"bottomCenter"}},[s("a-button",[s("span",[t._v("20")]),s("i",{staticClass:"icon-angle-down"})]),s("div",{staticClass:"dropdown-options",attrs:{slot:"overlay"},slot:"overlay"},[s("ul",[s("li",[s("span",[t._v("10")])]),s("li",[s("span",[t._v("20")])]),s("li",[s("span",[t._v("30")])]),s("li",[s("span",[t._v("40")])]),s("li",[s("span",[t._v(t._s(t.$t("products.button.amount")))])])])])],1)],1)]),s("div",{staticClass:"products-list-body"},[s("a-row",{attrs:{type:"flex",gutter:[{xl:24,sm:16,xs:16},{xl:24,sm:16,xs:16}]}},["vertical"==t.layout?t._l(t.computedProducts,(function(t){return s("a-col",{key:t.id,attrs:{xxl:6,xl:8,md:12,sm:12,xs:24}},[s("ProductCardVertical",{attrs:{info:t}})],1)})):t._l(t.computedProducts,(function(t){return s("a-col",{key:t.id,attrs:{xxl:12,xs:24,sm:24}},[s("ProductCardHorizontal",{attrs:{info:t}})],1)}))],2)],1),s("div",{staticClass:"pages-pagination products-list-pagination"},[t.products.meta?s("Pagination",{attrs:{page:t.products.meta.pagination.page,count:t.products.meta.pagination.pageCount}}):t._e()],1)])])])])])},r=[],e=a(88621),o=a(12636),c=a(90408),n={components:{ProductCardVertical:()=>a.e(511).then(a.bind(a,85511)),ProductCardHorizontal:()=>a.e(247).then(a.bind(a,44247)),Pagination:()=>a.e(163).then(a.bind(a,99163))},data(){return{layout:"vertical",activeKeys:[],activeKeysInside:[],filter:{price:{}},products:{}}},computed:{...(0,c.Se)("basket",["productsInBasket"]),computedProducts(){if(!this.products.data)return[];const t=this.products.data.map((t=>{const s=(0,o.ol)(t,"images");t={id:t.id,...t.attributes},t.images=s.map((t=>"https://d9a6-45-9-230-35.ngrok.io"+t)),delete t.attributes,t.discount_percent&&(t.oldPrice=JSON.parse(JSON.stringify(t.price)),t.discount=t.oldPrice/100*t.discount_percent,t.price=t.oldPrice-t.discount);const a=this.productsInBasket.find((s=>s.id===t.id));return t.amount=a?a.amount:0,t}));return t}},methods:{async getProducts(){const{data:t}=await e.Z.products.get({populate:["images","category"]});this.products=t},filterProducts(){}},mounted(){this.getProducts()}},l=n,d=a(1001),u=(0,d.Z)(l,i,r,!1,null,null,null),p=u.exports}}]);
//# sourceMappingURL=165.c85d4f46.js.map