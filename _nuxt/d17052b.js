(window.webpackJsonp=window.webpackJsonp||[]).push([[12,13],{301:function(e,t,o){var content=o(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(44).default)("54800212",content,!0,{sourceMap:!1})},307:function(e,t,o){"use strict";o.r(t),t.default=[{title:"Jogo da Velha",description:"Jogo feito puramente em JavaScript, HTML, CSS",url:"http://github.com/mjrdev"},{title:"Client Riot",description:"none",url:"http://github.com/mjrdev"},{title:"Aplicativo de Tarefas",description:"none",url:"http://github.com/mjrdev"},{title:"crud js",description:"none",url:"http://github.com/mjrdev"},{title:"php",description:"none",url:"http://github.com/mjrdev"},{title:"app react native",description:"none",url:"http://github.com/mjrdev"}]},314:function(e,t,o){"use strict";o(301)},315:function(e,t,o){var n=o(43)(!1);n.push([e.i,'.projects[data-v-7e3ee860]{display:flex;flex-direction:column;justify-content:center;align-items:center;justify-items:center;margin:6rem 0}.projects .title-projects[data-v-7e3ee860]{font-family:"Raleway",sans-serif;margin:0;font-size:30pt;color:#4c527a}.container-projects[data-v-7e3ee860]{display:flex;position:relative;justify-content:center;align-items:center;flex-wrap:wrap;grid-gap:30px;gap:30px;margin-top:2rem}.container-projects .item-project[data-v-7e3ee860]{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;flex:0 0 200px;width:200px;height:200px;background-color:#424ed0;box-shadow:5px 5px 10px rgba(0,0,0,.062745098)}.container-projects .item-project h1[data-v-7e3ee860]{font-size:12pt;color:#fff;margin:0}.container-projects .item-project p[data-v-7e3ee860]{font-size:8pt;color:#fff;margin:0 .4rem .4rem;text-align:center}.carousel[data-v-7e3ee860]{display:flex;align-items:center;justify-content:center}.carousel .item-project[data-v-7e3ee860]{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;flex:0 0 300px;width:300px;height:300px;background-color:#424ed0}.carousel .item-project h1[data-v-7e3ee860]{font-size:12pt;color:#fff;margin:0}.carousel .item-project p[data-v-7e3ee860]{font-size:8pt;color:#fff;margin:0 .4rem .4rem;text-align:center}.carousel .animation-opacity[data-v-7e3ee860]{-webkit-animation-name:opacity-7e3ee860;animation-name:opacity-7e3ee860;-webkit-animation-duration:.7s;animation-duration:.7s}@-webkit-keyframes opacity-7e3ee860{0%{opacity:0}to{opacity:1%}}@keyframes opacity-7e3ee860{0%{opacity:0}to{opacity:1%}}.carousel .arrow[data-v-7e3ee860]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media only screen and (min-width:801px){.carousel[data-v-7e3ee860]{display:none}}@media only screen and (max-width:800px){.container-projects[data-v-7e3ee860]{display:none}}',""]),e.exports=n},325:function(e,t,o){"use strict";o.r(t);o(35),o(64),o(77);var n=o(307),r={name:"Projects",data:function(){return{projectsList:n.default,indexItemActive:0,carouselScrollActive:!0,animation:!1}},methods:{carouselScroll:function(e){var t=this;switch(e){case"right":this.indexItemActive<n.default.length-1&&this.carouselScrollActive&&(this.indexItemActive++,this.animation=!0,this.carouselScrollActive=!1);break;case"left":this.indexItemActive>0&&this.carouselScrollActive&&(this.indexItemActive--,this.animation=!0,this.carouselScrollActive=!1)}setTimeout((function(){t.animation=!1,t.carouselScrollActive=!0}),400)}}},c=(o(314),o(45)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"projects",attrs:{"data-aos":"fade-up"}},[t("h1",{staticClass:"title-projects"},[e._v("Projetos")]),e._v(" "),t("div",{staticClass:"carousel"},[t("span",{staticClass:"material-symbols-outlined arrow",on:{click:function(t){return e.carouselScroll("left")}}},[e._v("chevron_left")]),e._v(" "),t("div",{class:{"item-project":!0,"animation-opacity":e.animation}},[t("h1",[e._v(e._s(e.projectsList[e.indexItemActive].title))]),e._v(" "),t("p",[e._v(e._s(e.projectsList[e.indexItemActive].description))])]),e._v(" "),t("span",{staticClass:"material-symbols-outlined arrow",on:{click:function(t){return e.carouselScroll("right")}}},[e._v("chevron_right")])]),e._v(" "),t("div",{staticClass:"container-projects"},e._l(e.projectsList,(function(o,n){return t("div",{staticClass:"item-project"},[t("h1",[e._v(e._s(o.title))]),e._v(" "),t("p",[e._v(e._s(o.description))])])})),0)])}),[],!1,null,"7e3ee860",null);t.default=component.exports}}]);