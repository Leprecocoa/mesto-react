(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(4),r=a.n(n),i=(a(11),a(2)),o=a.p+"static/media/header-logo.ef0798c5.svg",l=a(0);var p=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("img",{src:o,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f.",className:"header__logo"})})};var u=function(e){return Object(l.jsxs)("article",{className:"article",children:[Object(l.jsx)("img",{src:e.card.link,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",className:"article__image"}),Object(l.jsx)("button",{className:"article__delete-button page__button",type:"button"}),Object(l.jsxs)("div",{className:"article__text",children:[Object(l.jsx)("h2",{className:"article__title",children:e.card.name}),Object(l.jsxs)("div",{className:"article__likes",children:[Object(l.jsx)("button",{className:"article__like-button",type:"button"}),Object(l.jsx)("span",{className:"article__like-number",children:e.card.likes.length})]})]})]})},d=a(5),h=a(6),j=new(function(){function e(t){Object(d.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(h.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._checkResponse)}},{key:"sendProfileInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"sendCards",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"sendLikes",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._checkResponse)}},{key:"deleteLikes",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://nomoreparties.co/v1/cohort-27",headers:{authorization:"15ef627d-6933-45cc-b246-9992258b4fe6","Content-Type":"application/json"}});var b=function(e){var t=c.a.useState(""),a=Object(i.a)(t,2),s=a[0],n=a[1],r=c.a.useState(""),o=Object(i.a)(r,2),p=o[0],d=o[1],h=c.a.useState(""),b=Object(i.a)(h,2),_=b[0],m=b[1],O=c.a.useState([]),x=Object(i.a)(O,2),f=x[0],N=x[1];return c.a.useEffect((function(){Promise.all([j.getUserInfo(),j.getCards()]).then((function(e){var t=Object(i.a)(e,2),a=t[0],s=t[1];n(a.name),d(a.about),m(a.avatar),N(s)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("main",{className:"main",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("div",{className:"profile__images",style:{backgroundImage:"url(".concat(_,")")},children:Object(l.jsx)("button",{className:"profile__avatar-edit",onClick:e.onEditAvatar})}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsxs)("div",{className:"profile__header",children:[Object(l.jsx)("h1",{className:"profile__title",children:s}),Object(l.jsx)("button",{className:"profile__edit-button page__button",type:"button",onClick:e.onEditProfile})]}),Object(l.jsx)("p",{className:"profile__subtitle",children:p})]}),Object(l.jsx)("button",{className:"profile__addcard-button page__button",type:"button",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{className:"elements",children:f.map((function(e){return Object(l.jsx)(u,{card:e},e._id)}))})]})};var _=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var m=function(e){return Object(l.jsx)("div",{className:"popup popup-".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("h2",{className:"popup__title",children:e.title}),Object(l.jsx)("button",{className:"popup__close page__button popup__close_type_profile",type:"button",onClick:e.onClose}),Object(l.jsxs)("form",{action:"#",className:"popup__form popup__form_type_".concat(e.name),name:e.name,noValidate:!0,children:[e.children,Object(l.jsx)("button",{className:"popup__submit",type:"submit",children:e.buttonText})]})]})})};var O=function(){return Object(l.jsx)("div",{className:"image-popup popup",children:Object(l.jsxs)("div",{className:"image-popup__container",children:[Object(l.jsx)("button",{className:"page__button image-popup__close popup__close",type:"button"}),Object(l.jsx)("img",{src:"#",alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",className:"image-popup__image"}),Object(l.jsx)("p",{className:"image-popup__title"})]})})};var x=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],n=c.a.useState(!1),r=Object(i.a)(n,2),o=r[0],u=r[1],d=c.a.useState(!1),h=Object(i.a)(d,2),j=h[0],x=h[1];function f(){s(!1),u(!1),x(!1)}return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("div",{className:"root",children:Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(p,{}),Object(l.jsx)(b,{onEditAvatar:function(){s(!0)},onEditProfile:function(){u(!0)},onAddPlace:function(){x(!0)}}),Object(l.jsx)(_,{}),Object(l.jsxs)(m,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:o,onClose:f,children:[Object(l.jsxs)("label",{className:"popup__label",children:[Object(l.jsx)("input",{className:"popup__input popup__input_value_name",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",id:"profile-name"}),Object(l.jsx)("div",{className:"popup__error",children:Object(l.jsx)("span",{className:"popup__error-span",id:"profile-name-error"})})]}),Object(l.jsxs)("label",{className:"popup__label",children:[Object(l.jsx)("input",{className:"popup__input popup__input_value_about",type:"text",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",id:"profile-about"}),Object(l.jsx)("div",{className:"popup__error",children:Object(l.jsx)("span",{className:"popup__error-span",id:"profile-about-error"})})]})]}),Object(l.jsx)(m,{name:"editavatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:f,children:Object(l.jsxs)("label",{className:"popup__label",children:[Object(l.jsx)("input",{className:"popup__input popup__input_value_avatar-link",name:"avatar-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"url",id:"avatar-link"}),Object(l.jsx)("div",{className:"popup__error",children:Object(l.jsx)("span",{className:"popup__error-span",id:"avatar-link-error"})})]})}),Object(l.jsxs)(m,{name:"addcard",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:j,onClose:f,children:[Object(l.jsxs)("label",{className:"popup__label",children:[Object(l.jsx)("input",{className:"popup__input popup__input_value_place-name",type:"text",name:"place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",id:"place-name"}),Object(l.jsx)("div",{className:"popup__error",children:Object(l.jsx)("span",{className:"popup__error-span",id:"place-name-error"})})]}),Object(l.jsxs)("label",{className:"popup__label",children:[Object(l.jsx)("input",{className:"popup__input popup__input_value_image-source",type:"url",name:"image-source",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"image-source"}),Object(l.jsx)("div",{className:"popup__error",children:Object(l.jsx)("span",{className:"popup__error-span",id:"image-source-error"})})]})]}),Object(l.jsx)(m,{name:"deletecard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430"}),Object(l.jsx)(O,{})]})})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.cdb2ce71.chunk.js.map