"use strict";(self["webpackChunkazon_kitoblari"]=self["webpackChunkazon_kitoblari"]||[]).push([[254],{14254:function(t,e,a){a.r(e),a.d(e,{default:function(){return _}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"pages"},[e("div",{staticClass:"orders__row"},t._l(t.orders,(function(a,s){return e("div",{key:s,staticClass:"orders__item"},[e("div",{staticClass:"orders__item__details"},[e("h3",{staticClass:"orders__item__details__title"},[t._v(t._s(t.$t("order.detail.title")))]),e("p",[e("strong",[t._v(t._s(t.$t("order.detail.created"))+":")]),t._v(" "+t._s(t.dateFormatter(new Date))+" ")])]),e("a-table",{staticClass:"orders__table",attrs:{columns:t.columns,dataSource:a.items,pagination:!1}},[e("a-table-column",{key:"name",attrs:{title:"name","data-index":"name"},scopedSlots:t._u([{key:"default",fn:function(a,s){return[e("span",[e("a",[t._v(t._s(t.$t("title.action"))+" 一 "+t._s(s.name))]),e("a-divider",{attrs:{type:"vertical"}}),e("a",[t._v(t._s(t.$t("button.delete")))])],1)]}}],null,!0)})],1)],1)})),0)])},r=[],i=a(88621),n=a(90408),d=a(12636),l={name:"accountOrders",data:()=>({orders:[{items:[{key:"1",name:"Mike",age:32,address:"10 Downing Street"},{key:"2",name:"John",age:42,address:"10 Downing Street"}]}],credentials:{email:"",password:""},isRememberMeActive:!1}),computed:{...(0,n.Se)("auth",["userID"]),columns(){return[{title:this.$t("title.name"),dataIndex:"name",key:"name"},{title:this.$t("title.age"),dataIndex:"age",key:"age"},{title:this.$t("title.address"),dataIndex:"address",key:"address"}]}},methods:{dateFormatter:d.vh,signIn(){this.$store.dispatch("auth/signIn",this.credentials)},async getOrders(){await i.Z.order.get({populate:"carts.product",filters:{user:{id:{$eq:this.userID}}}})}},mounted(){this.getOrders()}},o=l,u=a(1001),c=(0,u.Z)(o,s,r,!1,null,null,null),_=c.exports}}]);
//# sourceMappingURL=254.5e424c9b.js.map