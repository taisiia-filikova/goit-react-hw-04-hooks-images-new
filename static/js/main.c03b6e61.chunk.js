(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{13:function(e,t,a){e.exports={item:"ImageGalleryItem_item__3kDH6",image:"ImageGalleryItem_image__37tqr"}},14:function(e,t,a){e.exports={backdrop:"Modal_backdrop__DCWO5",modal:"Modal_modal__26EwS"}},15:function(e,t,a){e.exports={wrapper:"ErrorImg_wrapper__2BTY6",text:"ErrorImg_text__vyadE"}},27:function(e,t,a){e.exports={container:"Container_container__33vRB"}},28:function(e,t,a){e.exports={list:"ImageGallery_list__23ssg"}},29:function(e,t,a){e.exports={overlay:"Loader_overlay__2mkbV"}},31:function(e,t,a){e.exports={button:"Button_button__1mI_H"}},37:function(e,t,a){},7:function(e,t,a){e.exports={header:"Searchbar_header__3ZXjE",form:"Searchbar_form__2UdJI",button:"Searchbar_button__3YH3b",label:"Searchbar_label__WUdFd",input:"Searchbar_input__3GmY6"}},79:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(4),s=a.n(o),i=(a(37),a(6)),u=a.n(i),l=a(16),b=a(10),j=a(5),d=a(26),m=a.n(d),f=function(){var e=Object(b.a)(u.a.mark((function e(t,a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"19086607-f63ea5bac9dbca697b9469f63",e.next=3,m.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat("19086607-f63ea5bac9dbca697b9469f63","&image_type=photo&orientation=horizontal&per_page=12"));case 3:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=a(27),h=a.n(p);var g=function(e){var t=e.children;return Object(n.jsx)("div",{className:h.a.container,children:t})},O=a(7),x=a.n(O),v=a(11);a(25);var _=function(e){var t=e.onHandleSubmit,a=Object(r.useState)(""),c=Object(j.a)(a,2),o=c[0],s=c[1];return Object(n.jsx)("header",{className:x.a.header,children:Object(n.jsxs)("form",{className:x.a.form,onSubmit:function(e){if(e.preventDefault(),""===o.trim())return v.b.info("Please, enter something");t(o),s("")},children:[Object(n.jsx)("button",{type:"submit",className:x.a.button,children:Object(n.jsx)("span",{className:x.a.label,children:"Search"})}),Object(n.jsx)("input",{className:x.a.input,type:"text",value:o,autoComplete:"off",autoFocus:!0,placeholder:"What do you want to find?",onChange:function(e){var t=e.target;return s(t.value)}})]})})},w=a(13),y=a.n(w);var S=function(e){var t=e.webformatURL,a=e.largeImageURL,r=e.tags,c=e.onOpenModal;return Object(n.jsx)("li",{className:y.a.item,children:Object(n.jsx)("img",{src:t,alt:r,"data-source":a,className:y.a.image,onClick:c})})},k=a(28),N=a.n(k);var I=function(e){var t=e.images,a=e.onOpenModal;return Object(n.jsx)("ul",{className:N.a.list,children:t.map((function(e){var t=e.id,r=e.webformatURL,c=e.largeImageURL,o=e.tags;return Object(n.jsx)(S,{webformatURL:r,largeImageURL:c,tags:o,onOpenModal:a},t)}))})},L=a(29),E=a.n(L),M=a(30),U=a.n(M);a(77);var R=function(){return Object(n.jsx)("div",{className:E.a.overlay,children:Object(n.jsx)(U.a,{type:"TailSpin",color:"#3f51b5",height:80,width:80,timeout:0})})},C=a(31),H=a.n(C);var T=function(e){var t=e.onLoadMore;return Object(n.jsx)("button",{type:"button",className:H.a.button,onClick:t,children:"Load more"})},B=a(14),G=a.n(B),q=document.querySelector("#modal-root");var D=function(e){var t=e.largeImageURL,a=e.onToggleModal;return Object(r.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]),Object(o.createPortal)(Object(n.jsx)("div",{className:G.a.backdrop,onClick:function(e){e.currentTarget===e.target&&a()},children:Object(n.jsx)("div",{className:G.a.modal,children:Object(n.jsx)("img",{src:t,alt:""})})}),q)},J=a(15),P=a.n(J),W=a.p+"static/media/nothing-found.38a59716.png";var Y=function(e){var t=e.texterror;return Object(n.jsxs)("div",{role:"alert",className:P.a.wrapper,children:[Object(n.jsx)("img",{src:W,width:"400",alt:"no-results"}),Object(n.jsx)("p",{text:t,className:P.a.text,children:t})]})};var F=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)([]),s=Object(j.a)(o,2),i=s[0],d=s[1],m=Object(r.useState)(""),p=Object(j.a)(m,2),h=p[0],O=p[1],x=Object(r.useState)(1),w=Object(j.a)(x,2),y=w[0],S=w[1],k=Object(r.useState)(null),N=Object(j.a)(k,2),L=N[0],E=N[1],M=Object(r.useState)(!1),U=Object(j.a)(M,2),C=U[0],H=U[1],B=Object(r.useState)(!1),G=Object(j.a)(B,2),q=G[0],J=G[1];Object(r.useEffect)((function(){a&&function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(a,y);case 3:if(0!==(t=e.sent).length){e.next=6;break}return e.abrupt("return",E("Nothing were found for ".concat(a,"!")));case 6:d((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),E("Something went wrong. Please, try again.");case 12:return e.prev=12,H(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}()()}),[y,a]);var P=function(){J(!q)},W=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight,behavior:"smooth"})}),1e3)};return Object(n.jsxs)(g,{children:[Object(n.jsx)(_,{onHandleSubmit:function(e){c(e),d([]),S(1),E(null),H(!0)}}),L&&Object(n.jsx)(Y,{texterror:L}),i.length>0&&!L&&Object(n.jsx)(I,{images:i,onOpenModal:function(e){O(e.target.dataset.source),P()}}),C&&Object(n.jsx)(R,{}),!C&&i.length>=12&&!L&&Object(n.jsx)(T,{onLoadMore:function(){H(!0),S((function(e){return e+1})),W()}}),q&&Object(n.jsx)(D,{onToggleModal:P,largeImageURL:h}),Object(n.jsx)(v.a,{autoClose:3700})]})};a(78);s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.c03b6e61.chunk.js.map