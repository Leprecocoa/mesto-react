(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),o=n.n(s),r=(n(14),n(9)),i=n(2),l=n.p+"static/media/header-logo.ef0798c5.svg",u=n(0);var p=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f.",className:"header__logo"})})},d=Object(a.createContext)({});var b=function(e){var t=Object(a.useContext)(d),n=e.card.owner._id===t._id,c="page__button article__delete-button ".concat(n?"article__delete-button_visible":"article__delete-button_hidden"),s=e.card.likes.some((function(e){return e._id===t._id})),o="article__like-button ".concat(s?"article__like-button_state_active":"article__like-button_state_unactive");return Object(u.jsxs)("article",{className:"article",children:[Object(u.jsx)("img",{src:e.card.link,alt:e.card.name,className:"article__image",onClick:function(){e.onCardClick(e.card)}}),Object(u.jsx)("button",{className:c,type:"button",onClick:function(){e.onCardDelete(e.card)}}),Object(u.jsxs)("div",{className:"article__text",children:[Object(u.jsx)("h2",{className:"article__title",children:e.card.name}),Object(u.jsxs)("div",{className:"article__likes",children:[Object(u.jsx)("button",{className:o,type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(u.jsx)("span",{className:"article__like-number",children:e.card.likes.length})]})]})]})};var j=function(e){var t=Object(a.useContext)(d);return Object(u.jsxs)("main",{className:"main",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsx)("div",{className:"profile__images",style:{backgroundImage:"url(".concat(t.avatar,")")},children:Object(u.jsx)("button",{className:"profile__avatar-edit",onClick:e.onEditAvatar})}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__header",children:[Object(u.jsx)("h1",{className:"profile__title",children:t.name}),Object(u.jsx)("button",{className:"profile__edit-button page__button",type:"button",onClick:e.onEditProfile})]}),Object(u.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(u.jsx)("button",{className:"profile__addcard-button page__button",type:"button",onClick:e.onAddPlace})]}),Object(u.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(u.jsx)(b,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardLike},t._id)}))})]})};var _=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var h=function(e){return Object(u.jsx)("div",{className:"popup popup-".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsx)("h2",{className:"popup__title",children:e.title}),Object(u.jsx)("button",{className:"popup__close page__button popup__close_type_profile",type:"button",onClick:e.onClose}),Object(u.jsxs)("form",{action:"#",className:"popup__form popup__form_type_".concat(e.name),name:e.name,onSubmit:e.onSubmit,children:[e.children,Object(u.jsx)("button",{className:"popup__submit",type:"submit",children:e.buttonText})]})]})})};var m=function(e){var t=e.card||{},n=t.link,a=t.name;return Object(u.jsx)("div",{className:"image-popup popup ".concat(e.card&&"popup_opened"),children:Object(u.jsxs)("div",{className:"image-popup__container",children:[Object(u.jsx)("button",{className:"page__button image-popup__close popup__close",type:"button",onClick:e.onClose}),Object(u.jsx)("img",{src:n,alt:a,className:"image-popup__image"}),Object(u.jsx)("p",{className:"image-popup__title",children:a})]})})},f=n(7),O=n(8),x=new(function(){function e(t){Object(f.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(O.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._checkResponse)}},{key:"sendProfileInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"sendCards",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"sendLikes",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._checkResponse)}},{key:"deleteLikes",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://nomoreparties.co/v1/cohort-27",headers:{authorization:"15ef627d-6933-45cc-b246-9992258b4fe6","Content-Type":"application/json"}});var v=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),r=Object(i.a)(o,2),l=r[0],p=r[1],b=Object(a.useContext)(d);return Object(a.useEffect)((function(){s(b.name||""),p(b.about||"")}),[b]),Object(u.jsxs)(h,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:l})},children:[Object(u.jsxs)("label",{className:"popup__label",children:[Object(u.jsx)("input",{className:"popup__input popup__input_value_name",type:"text",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",id:"profile-name",value:c,onChange:function(e){s(e.target.value)}}),Object(u.jsx)("div",{className:"popup__error",children:Object(u.jsx)("span",{className:"popup__error-span",id:"profile-name-error"})})]}),Object(u.jsxs)("label",{className:"popup__label",children:[Object(u.jsx)("input",{className:"popup__input popup__input_value_about",type:"text",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",id:"profile-about",value:l,onChange:function(e){p(e.target.value)}}),Object(u.jsx)("div",{className:"popup__error",children:Object(u.jsx)("span",{className:"popup__error-span",id:"profile-about-error"})})]})]})};var k=function(e){var t=Object(a.useRef)();return Object(u.jsx)(h,{name:"editavatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(u.jsxs)("label",{className:"popup__label",children:[Object(u.jsx)("input",{className:"popup__input popup__input_value_avatar-link",name:"avatar-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"url",id:"avatar-link",ref:t}),Object(u.jsx)("div",{className:"popup__error",children:Object(u.jsx)("span",{className:"popup__error-span",id:"avatar-link-error"})})]})})};var g=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),r=Object(i.a)(o,2),l=r[0],p=r[1];return Object(u.jsxs)(h,{name:"addcard",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c,link:l})},children:[Object(u.jsxs)("label",{className:"popup__label",children:[Object(u.jsx)("input",{className:"popup__input popup__input_value_place-name",type:"text",name:"place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",id:"place-name",value:c,onChange:function(e){s(e.target.value)}}),Object(u.jsx)("div",{className:"popup__error",children:Object(u.jsx)("span",{className:"popup__error-span",id:"place-name-error"})})]}),Object(u.jsxs)("label",{className:"popup__label",children:[Object(u.jsx)("input",{className:"popup__input popup__input_value_image-source",type:"url",name:"image-source",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"image-source",value:l,onChange:function(e){p(e.target.value)}}),Object(u.jsx)("div",{className:"popup__error",children:Object(u.jsx)("span",{className:"popup__error-span",id:"image-source-error"})})]})]})};var N=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),l=o[0],b=o[1],f=Object(a.useState)(!1),O=Object(i.a)(f,2),N=O[0],C=O[1],y=Object(a.useState)(null),S=Object(i.a)(y,2),U=S[0],L=S[1],P=Object(a.useState)({}),E=Object(i.a)(P,2),T=E[0],A=E[1],R=Object(a.useState)([]),D=Object(i.a)(R,2),I=D[0],q=D[1];function J(){c(!1),b(!1),C(!1),L(null)}return Object(a.useEffect)((function(){x.getUserInfo().then((function(e){A(e)}))}),[]),Object(a.useEffect)((function(){x.getCards().then((function(e){q(e)})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(d.Provider,{value:T,children:Object(u.jsx)("div",{className:"root",children:Object(u.jsxs)("div",{className:"page",children:[Object(u.jsx)(p,{}),Object(u.jsx)(j,{onEditAvatar:function(){c(!0)},onEditProfile:function(){b(!0)},onAddPlace:function(){C(!0)},onCardClick:function(e){L(e)},cards:I,onCardLike:function(e){e.likes.some((function(e){return e._id===T._id}))?x.deleteLikes(e._id).then((function(t){q((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)})):x.sendLikes(e._id).then((function(t){q((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){x.deleteCard(e._id).then((function(){q((function(t){return t.filter((function(t){return t._id!==e._id}))}))}))}}),Object(u.jsx)(_,{}),Object(u.jsx)(v,{isOpen:l,onClose:J,onUpdateUser:function(e){x.sendProfileInfo(e).then(A).then(J).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(k,{isOpen:n,onClose:J,onUpdateAvatar:function(e){x.editAvatar(e.avatar).then(A).then(J).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(g,{isOpen:N,onClose:J,onAddPlace:function(e){x.sendCards(e).then((function(e){q([e].concat(Object(r.a)(I)))})).then(J).catch((function(e){return console.log(e)}))}}),Object(u.jsx)(h,{name:"deletecard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430"}),Object(u.jsx)(m,{card:U,onClose:J})]})})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),C()}},[[16,1,2]]]);
//# sourceMappingURL=main.3c160bcf.chunk.js.map