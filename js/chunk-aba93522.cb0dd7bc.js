(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aba93522"],{"408f":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-alert",{attrs:{value:!0,type:"success"}},[t._v("\n    This is a success alert.\n  ")]),i("v-alert",{attrs:{value:!0,type:"info"}},[t._v("\n    This is a info alert.\n  ")]),i("v-alert",{attrs:{value:!0,type:"warning"}},[t._v("\n    This is a warning alert.\n  ")]),i("v-alert",{attrs:{value:!0,type:"error"}},[t._v("\n    This is a error alert.\n  ")]),i("v-alert",{attrs:{value:!0,color:"success",icon:"check_circle",outline:""}},[t._v("\n    This is a success alert.\n  ")]),i("v-alert",{attrs:{value:!0,color:"info",icon:"info",outline:""}},[t._v("\n    This is an info alert.\n  ")]),i("v-alert",{attrs:{value:!0,color:"warning",icon:"priority_high",outline:""}},[t._v("\n    This is a warning alert.\n  ")]),i("v-alert",{attrs:{value:!0,color:"error",icon:"warning",outline:""}},[t._v("\n    This is a error alert.\n  ")])],1)},s=[],r={name:"Alert"},o=r,a=i("2877"),c=i("6544"),l=i.n(c),u=(i("a57f"),i("9d26")),h=i("b64a"),v=i("98a1"),f=i("2b0e"),p=f["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=i("58df"),m=Object(d["a"])(h["a"],v["a"],p).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(u["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var t=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){t.isActive=!1}}},[this.$createElement(u["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(t){var e=[this.genIcon(),t("div",this.$slots.default),this.genDismissible()],i=this.outline?this.setTextColor:this.setBackgroundColor,n=t("div",i(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),e);return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[n]):n}}),g=i("a523"),w=Object(a["a"])(o,n,s,!1,null,"515079d6",null);e["default"]=w.exports;l()(w,{VAlert:m,VContainer:g["a"]})},a57f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-aba93522.cb0dd7bc.js.map