(this["webpackJsonpphoto-search-app"]=this["webpackJsonpphoto-search-app"]||[]).push([[0],{26:function(e,a,t){e.exports=t(86)},31:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(5),s=t.n(r),l=(t(31),t(10)),o=t.n(l),u=t(25),m=t(6),i=(t(33),t(34),function(){return c.a.createElement("div",{className:"main-footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("h4",null,"Search up photos using the Unsplash API."),c.a.createElement("a",{className:"creator",href:"https://www.linkedin.com/in/jordanchu1995/"},c.a.createElement("i",{className:"fa fa-linkedin-square fa-2x"})),c.a.createElement("a",{class:"creator ",href:"http://jordanchu.xyz"},c.a.createElement("i",{class:"fa fa-code fa-2x"})),c.a.createElement("a",{class:"creator ",href:"https://github.com/idkjay"},c.a.createElement("i",{class:"fa fa-github-square fa-2x"})))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("p",{className:"col-sm"},"\xa9",c.a.createElement("a",{className:"name",href:"http://jordanchu.xyz/"},"Jordan Chu")," | ",(new Date).getFullYear()," "))))});t(35);var h=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],r=a[1],s=Object(n.useState)([]),l=Object(m.a)(s,2),h=l[0],p=l[1],f=Object(n.useState)(""),E=Object(m.a)(f,2),d=E[0],b=E[1],v=Object(n.useState)(!0),j=Object(m.a)(v,2),N=(j[0],j[1]);Object(n.useEffect)((function(){g()}),[t]);var g=function(){var e=Object(u.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.unsplash.com/search/photos?page=1&query=".concat(t,"&per_page=30&client_id=").concat("XRaYqLejjhPT9zoUTCabwHUTLeJ8r69hbSQbMi76bMM"));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,p(n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Image Searcher"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r(d),b(""),N(!1)},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:d,onChange:function(e){b(e.target.value)},placeholder:"Search Images"}))),c.a.createElement("div",{className:"photo"},0===h.length?null:h.map((function(e){return c.a.createElement("img",{src:e.urls.small,alt:"photos of searched",style:{width:"100%"}})}))),c.a.createElement(i,null))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.65080d67.chunk.js.map