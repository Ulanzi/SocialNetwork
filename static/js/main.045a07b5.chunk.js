(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(3),s=n(22),a=n(23),c=n(25),i=n(24),o=n(1),u=n.n(o),l=n(6),j=n(11),d=n(0),p=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(i.a)(o);function o(){return Object(s.a)(this,o),n.apply(this,arguments)}return Object(a.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(r.a)({},this.props)):Object(d.jsx)(l.a,{to:"/login"})}}]),o}(u.a.Component);return Object(j.b)(p)(t)}},124:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1dmoz",selectedPage:"users_selectedPage__2fnhC"}},127:function(e,t,n){e.exports={descriptionBlock:"ContentInfo_descriptionBlock__73U7i"}},128:function(e,t,n){e.exports={item:"Post_item__2QjdK"}},15:function(e,t,n){e.exports={nav:"Nav_nav__ZwvNP",item:"Nav_item__2Gs1e",active:"Nav_active__375pZ"}},240:function(e,t,n){},241:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,289)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))},s=n(9),a=n(10),c=n.n(a),i=n(17),o=n(39),u=n(3),l=n(121).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"api-key":"237de4a2-60b4-4d3d-a09d-4c3e2f0c5c52"}}),j={getUsers:function(e,t){return l.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return l.post("follow/".concat(e))},unfollow:function(e){return l.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileApi object."),d.getProfile(e)}},d={getProfile:function(e){return l.get("profile/"+e)},getStatus:function(e){return l.get("profile/status/"+e)},updateStatus:function(e){return l.put("profile/status",{status:e})}},p=function(){return l.get("auth/me")},b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return l.post("auth/login",{email:e,password:t,rememberMe:n})},f=function(){return l.delete("auth/login")},h="ADD-POST",O="SET_USER_PROFILE",g="SET_STATUS",m="DELETE_POST",x={postData:[{id:1,message:"Hi, how are you",likesCount:3},{id:2,message:"It's my first post",likesCount:30}],profile:null,status:""},v=function(e){return{type:g,status:e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var n={id:5,message:t.newPostText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{postData:[].concat(Object(o.a)(e.postData),[n]),newPostText:""});case g:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case O:return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case m:return Object(u.a)(Object(u.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!=t.postId}))});default:return e}},w=n(96),_={},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;return e},y=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(u.a)(Object(u.a)({},e),r):e}))},C="FOLLOW",k="UNFOLLOW",N="SET_USERS",I="SET_CURRENT_PAGE",E="SET_TOTAL_USERS_COUNT",T="TOGGLE_IS_FETCHING",A="TOGGLE_IS_FOLLOWING_PROGRESS",U={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},F=function(e){return{type:C,userId:e}},D=function(e){return{type:k,userId:e}},z=function(e){return{type:I,currentPage:e}},M=function(e){return{type:T,isFetching:e}},L=function(e,t){return{type:A,isFetching:e,userId:t}},R=function(){var e=Object(i.a)(c.a.mark((function e(t,n,r,s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(L(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(s(n)),t(L(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(u.a)(Object(u.a)({},e),{},{users:y(e.users,t.userId,"id",{followed:!0})});case k:return Object(u.a)(Object(u.a)({},e),{},{users:y(e.users,t.userId,"id",{followed:!1})});case N:return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case I:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case E:return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.count});case T:return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case A:return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},G=n(42),H="auth/SET_USER_DATA",Z={id:null,email:null,login:null,isAuth:!1},J=function(e,t,n,r){return{type:H,payload:{id:e,email:t,login:n,isAuth:r}}},K=function(){return function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r,s,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.login,i=r.email,t(J(s,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type===H?Object(u.a)(Object(u.a)({},e),t.payload):e},V=n(123),X=n(120),q="INITIALIZED_SUCCESS",W={initialized:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return t.type===q?Object(u.a)(Object(u.a)({},e),{},{initialized:!0}):e},$=Object(s.c)({contentPage:P,dialogsPage:w.a,sidebar:S,usersPage:B,auth:Q,form:X.a,app:Y}),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,te=Object(s.e)($,ee(Object(s.a)(V.a)));window.__store__=te;var ne=te,re=n(1),se=n.n(re),ae=n(63),ce=n.n(ae),ie=(n(240),n(22)),oe=n(23),ue=n(25),le=n(24),je=(n(241),n(15)),de=n.n(je),pe=n(13),be=n(0),fe=function(){return Object(be.jsxs)("nav",{className:de.a.nav,children:[Object(be.jsx)("div",{className:de.a.item,children:Object(be.jsx)(pe.b,{to:"/profile",className:function(e){return e.isActive?de.a.active:de.a.item},children:"Profile"})}),Object(be.jsx)("div",{className:de.a.item,children:Object(be.jsx)(pe.b,{to:"/dialogs",className:function(e){return e.isActive?de.a.active:de.a.item},children:"Messages"})}),Object(be.jsx)("div",{className:de.a.item,children:Object(be.jsx)(pe.b,{to:"/users",className:function(e){return e.isActive?de.a.active:de.a.item},children:"Users"})}),Object(be.jsx)("div",{className:de.a.item,children:Object(be.jsx)("a",{children:"News"})}),Object(be.jsx)("div",{className:de.a.item,children:Object(be.jsx)("a",{children:"Music"})}),Object(be.jsx)("div",{className:de.a.item,children:Object(be.jsx)("a",{children:"Settings"})})]})},he=n(6),Oe=n(41),ge=n(124),me=n.n(ge),xe=n.p+"static/media/user4.75052a87.jpg",ve=n(65),Pe=n(19),we=n(67),_e=n.n(we),Se=n(125),ye=n.n(Se),Ce=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);var s=Math.ceil(t/10),a=Object(re.useState)(1),c=Object(Pe.a)(a,2),i=c[0],o=c[1],u=10*(i-1)+1,l=10*i;return Object(be.jsxs)("div",{className:_e.a.paginator,children:[i>1&&Object(be.jsx)("button",{onClick:function(){o(i-1)},children:"PREV"}),n.filter((function(e){return e>=u&&e<=l})).map((function(t){return Object(be.jsx)("span",{className:ye()(Object(ve.a)({},_e.a.selectedPage,e.currentPage===t),_e.a.pageNumber),onClick:function(n){e.onPageChanged(t)},children:t},t)})),s>i&&Object(be.jsx)("button",{onClick:function(){o(i+1)},children:"NEXT"})]})},ke=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,s=e.follow;return Object(be.jsxs)("div",{children:[Object(be.jsxs)("span",{children:[Object(be.jsx)("div",{children:Object(be.jsx)(pe.b,{to:"/profile/"+t.id,children:Object(be.jsx)("img",{src:null!=t.photos.small?t.photos.small:xe,className:me.a.userPhoto})})}),Object(be.jsx)("div",{children:t.followed?Object(be.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(be.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Follow"})})]}),Object(be.jsxs)("span",{children:[Object(be.jsxs)("span",{children:[Object(be.jsx)("div",{children:t.name}),Object(be.jsx)("div",{children:t.status})]}),Object(be.jsxs)("span",{children:[Object(be.jsx)("div",{children:"user.location.country"}),Object(be.jsx)("div",{children:"user.location.city"})]})]})]})},Ne=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],Ie=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,s=e.pageSize,a=e.users,c=Object(Oe.a)(e,Ne);return Object(be.jsxs)("div",{children:[Object(be.jsx)("div",{children:Object(be.jsx)(Ce,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:s})}),Object(be.jsx)("div",{children:a.map((function(e){return Object(be.jsx)(ke,{user:e,follow:c.follow,unfollow:c.unfollow,followingInProgress:c.followingInProgress},e.id)}))})]})},Ee=n(11),Te=n.p+"static/media/preloader06.72627050.svg",Ae=function(e){return Object(be.jsx)("img",{src:Te})},Ue=n(130),Fe=Object(Ue.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),De=function(e){return e.usersPage.pageSize},ze=function(e){return e.usersPage.totalUsersCount},Me=function(e){return e.usersPage.currentPage},Le=function(e){return e.usersPage.isFetching},Re=function(e){return e.usersPage.followingInProgress},Be=function(e){Object(ue.a)(n,e);var t=Object(le.a)(n);function n(){var e;Object(ie.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(oe.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(be.jsxs)(be.Fragment,{children:[this.props.isFetching?Object(be.jsx)(Ae,{}):null,Object(be.jsx)(Ie,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(se.a.Component),Ge=Object(s.d)(Object(Ee.b)((function(e){return{users:Fe(e),pageSize:De(e),totalUsersCount:ze(e),currentPage:Me(e),isFetching:Le(e),followingInProgress:Re(e)}}),{follow:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=j.follow.bind(j),R(n,e,r,F);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=j.unfollow.bind(j),R(n,e,r,D);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleFollowingProgress:L,setCurrentPage:z,getUsers:function(e,t){return function(){var n=Object(i.a)(c.a.mark((function n(r){var s;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(M(!0)),r(z(e)),n.next=4,j.getUsers(e,t);case 4:s=n.sent,r(M(!1)),r((c=s.items,{type:N,users:c})),r((a=s.totalCount,{type:E,count:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Be),He=n(127),Ze=n.n(He),Je=function(e){var t=Object(re.useState)(!1),n=Object(Pe.a)(t,2),r=n[0],s=n[1],a=Object(re.useState)(!1),c=Object(Pe.a)(a,2),i=c[0],o=c[1];Object(re.useEffect)((function(){o(e.status)}),[e.status]);return Object(be.jsxs)("div",{children:[!r&&Object(be.jsx)("div",{children:Object(be.jsx)("span",{onDoubleClick:function(){s(!0)},children:e.status||"---"})}),r&&Object(be.jsx)("div",{children:Object(be.jsx)("input",{onChange:function(e){o(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(i)},value:i})})]})},Ke=function(e){return e.profile?Object(be.jsxs)("div",{children:[Object(be.jsx)("div",{children:Object(be.jsx)("img",{src:"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"})}),Object(be.jsxs)("div",{className:Ze.a.descriptionBlock,children:[Object(be.jsx)("img",{src:e.profile.photos.large}),Object(be.jsx)(Je,{status:e.status,updateStatus:e.updateStatus})]})]}):Object(be.jsx)(Ae,{})},Qe=n(84),Ve=n.n(Qe),Xe=n(128),qe=n.n(Xe),We=function(e){return Object(be.jsxs)("div",{className:qe.a.item,children:[Object(be.jsx)("img",{src:"https://uprostim.com/wp-content/uploads/2021/05/image011-7.jpg"}),e.message,Object(be.jsxs)("div",{children:[Object(be.jsx)("span",{children:"like"})," ",e.likesCount]})]})},Ye=n(118),$e=n(119),et=n(34),tt=n(35),nt=Object(et.a)(10),rt=se.a.memo((function(e){console.log("RENDER YO");var t=e.postData.map((function(e){return Object(be.jsx)(We,{message:e.message,likesCount:e.likesCount})}));return Object(be.jsxs)("div",{className:Ve.a.postsBlock,children:[Object(be.jsx)("h3",{children:"My posts"}),Object(be.jsx)(st,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(be.jsx)("div",{className:Ve.a.posts,children:t})]})})),st=Object($e.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(be.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(be.jsx)("div",{children:Object(be.jsx)(Ye.a,{name:"newPostText",component:tt.b,placeholder:"Post message",validate:[et.b,nt]})}),Object(be.jsx)("div",{children:Object(be.jsx)("button",{children:"Add post"})})]})})),at=rt,ct=Object(Ee.b)((function(e){return{postData:e.contentPage.postData,newPostText:e.contentPage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:h,newPostText:e}}(t))}}}))(at),it=function(e){return Object(be.jsxs)("div",{children:[Object(be.jsx)(Ke,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(be.jsx)(ct,{})]})},ot=n(117),ut=function(e){Object(ue.a)(n,e);var t=Object(le.a)(n);function n(){return Object(ie.a)(this,n),t.apply(this,arguments)}return Object(oe.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match?this.props.match.params.userId:this.props.authorizedUserId;this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(be.jsx)(it,Object(u.a)(Object(u.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),n}(se.a.Component),lt=Object(s.d)(Object(Ee.b)((function(e){return{profile:e.contentPage.profile,status:e.contentPage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.getProfile(e);case 2:r=t.sent,n((s=r.data,{type:O,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.getStatus(e);case 2:r=t.sent,n(v(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(v(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),ot.a)((function(e){var t=Object(he.g)("/profile/:userId/");return Object(be.jsx)(ut,Object(u.a)(Object(u.a)({},e),{},{match:t}))})),jt=n(87),dt=n.n(jt),pt=function(e){return Object(be.jsxs)("header",{className:dt.a.header,children:[Object(be.jsx)("img",{src:"https://images.squarespace-cdn.com/content/v1/5b8f9107b105986303431f14/1536137733445-C0OIK3M1MJRKX9ZO34Z7/logo-header.png"}),"/*\u0442\u043e\u0435\u0441\u0442\u044c \u0435\u0441\u043b\u0438 \u044f \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d \u0442\u043e \u043f\u0438\u0448\u0435\u043c \u043b\u043e\u0433\u0438\u043d*/",Object(be.jsx)("div",{className:dt.a.loginBlock,children:e.isAuth?Object(be.jsxs)("div",{children:[e.login," - ",Object(be.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(be.jsx)(pe.b,{to:"/login",children:"Login"})})]})},bt=function(e){Object(ue.a)(n,e);var t=Object(le.a)(n);function n(){return Object(ie.a)(this,n),t.apply(this,arguments)}return Object(oe.a)(n,[{key:"render",value:function(){return Object(be.jsx)(pt,Object(u.a)({},this.props))}}]),n}(se.a.Component),ft=Object(Ee.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:0===e.sent.data.resultCode&&t(J(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(bt),ht=n(51),Ot=n.n(ht),gt=Object($e.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(be.jsxs)("form",{onSubmit:t,children:[Object(be.jsxs)("div",{children:[Object(be.jsx)(Ye.a,{placeholder:"Email",validate:[et.b],name:"email",component:tt.a})," "]}),Object(be.jsx)("div",{children:Object(be.jsx)(Ye.a,{placeholder:"Password",validate:[et.b],name:"password",component:tt.a})}),Object(be.jsxs)("div",{children:[Object(be.jsx)(Ye.a,{type:"checkbox",name:"rememberMe",component:tt.a})," remember me"]}),n&&Object(be.jsxs)("div",{className:Ot.a.formSummaryError,children:[" ",n," "]})," ",Object(be.jsx)("div",{children:Object(be.jsx)("button",{children:"Login"})})]})})),mt=Object(Ee.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(i.a)(c.a.mark((function r(s){var a,i;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b(e,t,n);case 2:0===(a=r.sent).data.resultCode?s(K()):(i=a.data.messages.length>0?a.data.messages[0]:"Some error",s(Object(G.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(be.jsx)(he.a,{replace:!0,to:"/profile"}):Object(be.jsxs)("div",{children:[Object(be.jsx)("h1",{children:"Login"}),Object(be.jsx)(gt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),xt=se.a.lazy((function(){return n.e(3).then(n.bind(null,290))})),vt=function(e){Object(ue.a)(n,e);var t=Object(le.a)(n);function n(){return Object(ie.a)(this,n),t.apply(this,arguments)}return Object(oe.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(be.jsxs)("div",{className:"app-wrapper",children:[Object(be.jsx)(ft,{}),Object(be.jsx)(fe,{}),Object(be.jsx)("div",{className:"app-wrapper-content",children:Object(be.jsx)("div",{className:"item",children:Object(be.jsxs)(he.d,{children:[Object(be.jsx)(he.b,{path:"/profile/*",element:Object(be.jsx)(lt,{})}),Object(be.jsx)(he.b,{path:"/login",element:Object(be.jsx)(mt,{})}),Object(be.jsx)(he.b,{path:"/profile/:userId",element:Object(be.jsx)(lt,{})}),Object(be.jsx)(he.b,{path:"/dialogs/*",element:Object(be.jsx)(re.Suspense,{fallback:Object(be.jsx)(Ae,{}),children:Object(be.jsx)(xt,{})})}),Object(be.jsx)(he.b,{path:"/users",element:Object(be.jsx)(Ge,{})})]})})})]}):Object(be.jsx)(Ae,{})}}]),n}(re.Component),Pt=Object(Ee.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(K());Promise.all([t]).then((function(){e({type:q})}))}}})(vt);ce.a.render(Object(be.jsx)(se.a.StrictMode,{children:Object(be.jsx)(pe.a,{children:Object(be.jsxs)(Ee.a,{store:ne,children:[" ",Object(be.jsx)(Pt,{})]})})}),document.getElementById("root")),r()},34:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r=function(e){if(!e)return"Field is required"},s=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},35:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n(3),s=n(41),a=(n(1),n(51)),c=n.n(a),i=n(0),o=["input","meta","children"],u=["input","meta","child","element"],l=["input","meta","child","element"],j=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,u=(Object(s.a)(e,o),n&&r);return Object(i.jsxs)("div",{className:c.a.formControl+" "+(u?c.a.error:""),children:[Object(i.jsxs)("div",{children:[a," "]}),u&&Object(i.jsx)("span",{children:r}),"  "]})},d=function(e){var t=e.input,n=(e.meta,e.child,e.element,Object(s.a)(e,u));return Object(i.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},p=function(e){var t=e.input,n=(e.meta,e.child,e.element,Object(s.a)(e,l));return Object(i.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},51:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1tZgT",error:"FormsControls_error__1GNu9",formSummaryError:"FormsControls_formSummaryError__3ffzf"}},67:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__2Fzys",selectedPage:"Paginator_selectedPage__Q_NQN",paginator:"Paginator_paginator__L0Pl_"}},84:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__392AT",posts:"MyPosts_posts__3ehED"}},87:function(e,t,n){e.exports={header:"Header_header__1FH41",loginBlock:"Header_loginBlock__1Svbp"}},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(39),s=n(3),a="SEND_MESSAGE",c={dialogsData:[{id:1,name:"Dima"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messagesData:[{id:1,message:"Hello Mister bulka"},{id:2,message:"yes it easy peasy"},{id:3,message:"yo men"},{id:4,message:"Oh my god"},{id:5,message:"I love you"},{id:6,message:"Hi its Ilon Mask"}]},i=function(e){return{type:a,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if(t.type===a){var n=t.newMessageBody;return Object(s.a)(Object(s.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:7,message:n}])})}return e}}},[[287,1,2]]]);
//# sourceMappingURL=main.045a07b5.chunk.js.map