(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fa50f3b"],{2677:function(t,e,a){"use strict";var i=a("8654"),n=(a("7e63"),a("d9bd")),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},r={name:"v-textarea",extends:i["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return o({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||i["a"].options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(n["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}},s=a("7cf7"),u=a("ab6d");a.d(e,"a",function(){return l});var l={functional:!0,$_wrapperFor:i["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var a=e.props,o=e.data,c=e.slots,d=e.parent;Object(u["a"])(o);var h=Object(s["a"])(c(),t);return a.textarea&&Object(n["d"])("<v-text-field textarea>","<v-textarea outline>",l,d),a.multiLine&&Object(n["d"])("<v-text-field multi-line>","<v-textarea>",l,d),a.textarea||a.multiLine?(o.attrs.outline=a.textarea,t(r,o,h)):t(i["a"],o,h)}}},"26e5":function(t,e,a){},"2de7":function(t,e,a){"use strict";var i=a("ed30"),n=a.n(i);n.a},"4bd4":function(t,e,a){"use strict";a("26e5");var i=a("94ab");e["a"]={name:"v-form",mixins:[Object(i["b"])("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",function(a){e.$set(e.errorBag,t._uid,a)},{immediate:!0})},i={_uid:t._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))}):i.valid=a(t),i},validate:function(){var t=this.inputs.filter(function(t){return!t.validate(!0)}).length;return!t},reset:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(t){var e=this.watchInput(t);this.inputs.push(t),this.watchers.push(e)},unregister:function(t){var e=this.inputs.find(function(e){return e._uid===t._uid});if(e){var a=this.watchers.find(function(t){return t._uid===e._uid});a.valid&&a.valid(),a.shouldValidate&&a.shouldValidate(),this.watchers=this.watchers.filter(function(t){return t._uid!==e._uid}),this.inputs=this.inputs.filter(function(t){return t._uid!==e._uid}),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},"7e63":function(t,e,a){},"9c34":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"primary",attrs:{id:"registration"}},[a("v-content",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:"",lg4:""}},[a("v-card",{staticClass:"elevation-5 pa-3"},[a("v-card-text",[a("div",{staticClass:"layout column align-center"},[a("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/logos/v-alt.svg",alt:"Vue Vuetify Admin",width:"120",height:"120"}}),a("h1",{staticClass:"text-xs-center  my-4 primary--text"},[t._v("Vue Vuetify Admin Template")])]),a("v-form",[a("v-text-field",{attrs:{"append-icon":"person",name:"login",label:t.$t("login.email"),type:"text",required:""},model:{value:t.model.username,callback:function(e){t.$set(t.model,"username",e)},expression:"model.username"}}),a("v-text-field",{attrs:{"append-icon":"lock",name:"password",label:t.$t("login.password"),id:"password",type:"password",required:""},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password",e)},expression:"model.password"}}),a("v-text-field",{attrs:{"append-icon":"lock",name:"confirm",label:t.$t("login.confirm"),id:"confirm",type:"password",required:""},model:{value:t.model.confirm,callback:function(e){t.$set(t.model,"confirm",e)},expression:"model.confirm"}})],1)],1),a("v-card-actions",[a("localization"),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"blue"}},[t._v("fa fa-facebook-square fa-lg")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"red"}},[t._v("fa fa-google fa-lg")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{color:"light-blue"}},[t._v("fa fa-twitter fa-lg")])],1),a("v-spacer"),a("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.login}},[t._v(t._s(t.$t("login.singUp")))])],1)],1)],1)],1)],1)],1)],1)},n=[],o=a("e87f"),r={name:"SingUp",components:{Localization:o["a"]},data:function(){return{loading:!1,model:{username:"admin@isockde.com",password:"password",confirm:"password"}}},methods:{login:function(){var t=this;this.loading=!0,setTimeout(function(){t.$router.push("/dashboard")},1e3)}}},s=r,u=(a("2de7"),a("2877")),l=a("6544"),c=a.n(l),d=a("7496"),h=a("8336"),f=a("b0af"),p=a("99d9"),m=a("a523"),v=a("549c"),g=a("0e8f"),w=a("4bd4"),b=a("132d"),x=a("a722"),y=a("9910"),V=a("2677"),_=Object(u["a"])(s,i,n,!1,null,"184f78ee",null);e["default"]=_.exports;c()(_,{VApp:d["a"],VBtn:h["a"],VCard:f["a"],VCardActions:p["a"],VCardText:p["b"],VContainer:m["a"],VContent:v["a"],VFlex:g["a"],VForm:w["a"],VIcon:b["a"],VLayout:x["a"],VSpacer:y["a"],VTextField:V["a"]})},ed30:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5fa50f3b.523ba654.js.map