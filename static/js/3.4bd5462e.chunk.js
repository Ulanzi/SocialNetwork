(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{354:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3BYRG",dialogsItems:"Dialogs_dialogsItems__3aqtN",active:"Dialogs_active__oBtjx",messages:"Dialogs_messages__3o8he",message:"Dialogs_message__2KtCC",dialogValues:"Dialogs_dialogValues__3dxvi"}},356:function(e,s,a){"use strict";a.r(s);a(0);var i=a(137),t=a(354),n=a.n(t),c=a(1),d=function(e){return Object(c.jsx)("div",{className:n.a.message,children:e.message})},o=a(16),l=function(e){var s="/dialogs/"+e.id;return Object(c.jsx)("div",{children:Object(c.jsx)(o.b,{to:s,className:function(e){return e.isActive?n.a.active:n.a.dialogsItems},children:e.name})})},g=a(12),r=a(160),j=a(161),b=a(34),m=a(42),u=Object(m.a)(50),O=Object(j.a)({form:"dialogAddMessageForm"})((function(e){return Object(c.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(c.jsx)("div",{children:Object(c.jsx)(r.a,{component:b.b,validate:[m.b,u],name:"newMessageBody",placeholder:"Enter you message"})}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{children:"Send Message"})})]})})),x=function(e){var s=e.dialogsPage,a=s.dialogsData.map((function(e){return Object(c.jsx)(l,{name:e.name,id:e.id},e.id)})),i=s.messagesData.map((function(e){return Object(c.jsx)(d,{message:e.message},e.id)}));s.newMessageBody;return!1===e.isAuth?Object(c.jsx)(g.a,{to:"/login"}):Object(c.jsxs)("div",{className:n.a.dialogs,children:[Object(c.jsx)("div",{className:n.a.dialogsItems,children:a}),Object(c.jsx)("div",{className:n.a.dialogValues,children:Object(c.jsx)(O,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})}),Object(c.jsx)("div",{className:n.a.messages,children:Object(c.jsxs)("div",{children:[" ",i]})})]})},h=a(20),v=a(159),_=a(18);s.default=Object(_.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(i.b)(s))}}})),v.a)(x)}}]);
//# sourceMappingURL=3.4bd5462e.chunk.js.map