"use strict";(self["webpackChunkazon_kitoblari"]=self["webpackChunkazon_kitoblari"]||[]).push([[393],{54393:function(t,s,o){o.r(s),o.d(s,{default:function(){return m}});var u=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card shopping"},[s("div",{staticClass:"card-image"},[s("img",{attrs:{src:t.product.images[0],alt:t.product.name}})]),s("div",{staticClass:"card-info"},[s("router-link",{attrs:{to:{name:"productsId",params:{id:t.product.id}}}},[s("h3",[t._v(t._s(t.product.name))])]),s("a-button",{on:{click:function(s){return s.preventDefault(),t.deleteProductFromBasket.apply(null,arguments)}}},[t._v(" "+t._s(t.$t("card.delete"))+" ")])],1),s("div",{staticClass:"card-price"},[s("span",[t._v(t._s(t.sumFormatter(t.product.price))+" "+t._s(t.$t("sum")))]),t.product.oldPrice?s("small",[s("s",[t._v(t._s(t.sumFormatter(t.product.oldPrice))+" "+t._s(t.$t("sum")))]),t.product.discount_percent?s("b",[t._v(t._s(t.product.discount_percent)+"%")]):t._e()]):t._e()]),s("div",{staticClass:"card-action",on:{click:function(t){t.preventDefault()}}},[s("a-button",{on:{click:function(s){return t.changeAmount("minus")}}},[s("i",{staticClass:"icon-minus"})]),s("span",[t._v(t._s(t.product.amount))]),s("a-button",{on:{click:function(s){return t.changeAmount("plus")}}},[s("i",{staticClass:"icon-plus"})])],1)])},n=[],c=o(90408),i={props:{info:{type:Object,default:()=>({})}},data:()=>({product:{amount:0,type:"",images:[],name:"",small_description:"",price:"",oldPrice:"",id:"",discount_percent:""}}),methods:{...(0,c.OI)("basket",["setProduct","setAmount"]),addToBasket(){this.product.amount||this.product.amount++,this.setProduct(this.product)},changeAmount(t){"minus"===t?this.product.amount&&this.product.amount--:"plus"===t&&this.product.amount++,this.setAmount({id:this.product.id,amount:this.product.amount})}},mounted(){this.product={...this.product,...this.info},Object.keys(this.product).includes("amount")||(this.product.amount=0)}},a=o(12636),r={mixins:[i],methods:{...(0,c.OI)("basket",["setAmount"]),sumFormatter:a._S,deleteProductFromBasket(){this.setAmount({id:this.product.id,amount:0})}}},e=r,d=o(1001),p=(0,d.Z)(e,u,n,!1,null,null,null),m=p.exports}}]);
//# sourceMappingURL=393.7588a60c.js.map