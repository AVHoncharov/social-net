(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[0],{104:function(e,t,n){"use strict";t.a=n.p+"static/media/avatar-default-small.f9b727f8.png"},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return u}));var r=n(135),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"api-key":"642dd878-8a02-409c-874f-eb31899a6794"}}),c={authMe:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},o={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},saveProfile:function(e){return a.put("profile",e)},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},i={follow:function(e){return a.post("follow/".concat(e),{posted_data:""}).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},u={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(40),a=n(3),c="ADD-MESSAGE",s={users:[{id:1,name:"One"},{id:2,name:"Two"},{id:3,name:"Three"},{id:4,name:"Four"},{id:5,name:"Five"},{id:6,name:"Six"}],messagesData:{messages:[{id:1,message:"message 1"},{id:2,message:"message 2"},{id:3,message:"message 3"}]}},o=function(e){return{type:c,newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(a.a)(Object(a.a)({},e),{},{messagesData:Object(a.a)(Object(a.a)({},e.messagesData),{},{messages:[].concat(Object(r.a)(e.messagesData.messages),[{id:5,message:t.newMessageBody}])})});default:return e}}},128:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loading-imdicator.42aaa181.gif",a=n(138),c=n.n(a),s=n(1);t.a=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:r,className:c.a.preloader})})}},129:function(e,t,n){e.exports={avatar:"Avatar_avatar__2pCK5"}},130:function(e,t,n){e.exports={footer:"Footer_footer__RqhNs"}},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},136:function(e,t,n){e.exports={usersList:"UsersList_usersList__3QV5M"}},137:function(e,t,n){e.exports={userPhoto:"User_userPhoto__2V_Ow"}},138:function(e,t,n){e.exports={preloader:"Preloader_preloader__1TiN1"}},16:function(e,t,n){e.exports={navigation:"Navigation_navigation__38XHA",item:"Navigation_item__mXw_l",activeLink:"Navigation_activeLink__1BRbN"}},171:function(e,t,n){},172:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(60),s=n.n(c);n(171),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(25),i=n(26),u=n(28),l=n(27),f=(n(172),n(129)),d=n.n(f),j=n(1),p=function(){return Object(j.jsx)("div",{className:d.a.avatar,children:"avatar"})},b=n(16),h=n.n(b),O=n(15),g=function(){return Object(j.jsxs)("nav",{className:h.a.navigation,children:[Object(j.jsx)("div",{className:h.a.item,children:Object(j.jsx)(O.b,{to:"/profile",activeClassName:h.a.activeLink,children:"Profile"})}),Object(j.jsx)("div",{className:h.a.item,children:Object(j.jsx)(O.b,{to:"/users",activeClassName:h.a.activeLink,children:"Users"})}),Object(j.jsx)("div",{className:h.a.item,children:Object(j.jsx)(O.b,{to:"/dialogs",activeClassName:h.a.activeLink,children:"Messages"})}),Object(j.jsx)("div",{className:h.a.item,children:Object(j.jsx)(O.b,{to:"/news",activeClassName:h.a.activeLink,children:"News"})}),Object(j.jsx)("div",{className:h.a.item,children:Object(j.jsx)(O.b,{to:"/music",activeClassName:h.a.activeLink,children:"Music"})}),Object(j.jsx)("div",{className:h.a.item,children:Object(j.jsx)(O.b,{to:"/settings",activeClassName:h.a.activeLink,children:"Settings"})})]})},v=n(130),m=n.n(v),x=function(){return Object(j.jsx)("div",{className:m.a.footer,children:"Footer"})},w=n(10),_=n(131),C=n.n(_),P=function(e){return Object(j.jsx)("div",{className:C.a.news})},y=n(132),S=n.n(y),k=function(e){return Object(j.jsx)("div",{className:S.a.music})},N=n(133),E=n.n(N),I=function(e){return Object(j.jsx)("div",{className:E.a.settings})},L=n(14),U=n(8),T=n.n(U),A=n(13),F=n(40),z=n(3),M=n(11),D=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(z.a)(Object(z.a)({},e),r):e}))},R="FOLLOW",B="UNFOLLOW",G="SET_USERS",H="SET_CURRENT_PAGE",q="SET_TOTAL_USERS_COUNT",V="TOOGLE_IS_FETCHING",W="TOOGLE_IS_FOLLOWING_PROGRESS",X={users:[],pageSize:25,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},J=function(e){return{type:R,userId:e}},Q=function(e){return{type:B,userId:e}},K=function(e){return{type:V,isFetching:e}},Z=function(e,t){return{type:W,followingInProgress:e,userId:t}},$=function(){var e=Object(A.a)(T.a.mark((function e(t,n,r,a){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Z(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(a(n)),t(Z(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(z.a)(Object(z.a)({},e),{},{users:D(e.users,t.userId,"id",{followed:!0})});case B:return Object(z.a)(Object(z.a)({},e),{},{users:D(e.users,t.userId,"id",{followed:!1})});case G:return Object(z.a)(Object(z.a)({},e),{},{users:t.users});case H:return Object(z.a)(Object(z.a)({},e),{},{currentPage:t.currentPage});case q:return Object(z.a)(Object(z.a)({},e),{},{totalUsersCount:t.totalCount});case V:return Object(z.a)(Object(z.a)({},e),{},{isFetching:t.isFetching});case W:return Object(z.a)(Object(z.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(F.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},ee=n(64),te=n(136),ne=n.n(te),re=n(93),ae=n(65),ce=n.n(ae),se=function(e){for(var t=e.totalCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,s=e.portionSize,o=void 0===s?10:s,i=Math.ceil(t/n),u=[],l=1;l<i;l++)u.push(l);var f=Math.ceil(i/o),d=Object(r.useState)(1),p=Object(re.a)(d,2),b=p[0],h=p[1],O=(b-1)*o+1,g=b*o;return Object(j.jsxs)("div",{className:ce.a.paginatorLine,children:[b>1&&Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{onClick:function(){h(1)},children:"<<"}),Object(j.jsx)("button",{onClick:function(){h(b-1)},children:"<"})]}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(j.jsx)("span",{className:a===e?ce.a.selectedPage:ce.a.defaultPage,onClick:function(t){c(e)},children:e},e)})),f>b&&Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{onClick:function(){h(f)},children:">>"}),Object(j.jsx)("button",{onClick:function(){h(b+1)},children:">"})]})]})},oe=n(137),ie=n.n(oe),ue=n(104),le=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(O.b,{to:"/profile/"+t.id,children:Object(j.jsx)("img",{src:null!=t.photos.small?t.photos.small:ue.a,className:ie.a.userPhoto})})}),Object(j.jsx)("div",{children:t.followed?Object(j.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"unfollow"}):Object(j.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"follow"})})]}),Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:t.name}),Object(j.jsx)("div",{children:t.status})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:"user.location.country"}),Object(j.jsx)("div",{children:"user.location.city"})]})]})]},t.id)},fe=function(e){for(var t=e.currentPage,n=e.totalCount,r=e.pageSize,a=e.onPageChanged,c=Object(ee.a)(e,["currentPage","totalCount","pageSize","onPageChanged"]),s=Math.ceil(n/r),o=[],i=1;i<s;i++)o.push(i);return Object(j.jsxs)("div",{className:ne.a.usersList,children:[Object(j.jsx)(se,{currentPage:t,onPageChanged:a,totalCount:n,pageSize:r}),Object(j.jsx)("div",{children:c.users.map((function(e){return Object(j.jsx)(le,{follow:c.follow,unfollow:c.unfollow,followingInProgress:c.followingInProgress,user:e},e.id)}))})]})},de=n(128),je=n(9),pe=n(139),be=Object(pe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),he=function(e){return e.usersPage.pageSize},Oe=function(e){return e.usersPage.totalUsersCount},ge=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.isFetching},me=function(e){return e.usersPage.followingInProgress},xe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.setCurrentPage(t),e.props.requestUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[this.props.isFetching?Object(j.jsx)(de.a,{}):null,Object(j.jsx)(fe,{totalCount:this.props.totalCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),we=Object(je.d)(Object(L.b)((function(e){return{users:be(e),pageSize:he(e),totalCount:Oe(e),currentPage:ge(e),isFetching:ve(e),followingInProgress:me(e)}}),{follow:function(e){return function(){var t=Object(A.a)(T.a.mark((function t(n){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=M.b.follow.bind(M.e),$(n,e,r,J);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(A.a)(T.a.mark((function t(n){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=M.b.unfollow.bind(M.e),$(n,e,r,Q);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:H,currentPage:e}},requestUsers:function(e,t){return function(){var n=Object(A.a)(T.a.mark((function n(r){var a;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(K(!0)),n.next=3,M.e.getUsers(e,t);case 3:a=n.sent,r(K(!1)),r((s=a.items,{type:G,users:s})),r((c=a.totalCount,{type:q,totalCount:c}));case 7:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(xe),_e=n(89),Ce=n.n(_e),Pe=function(e){return Object(j.jsx)("div",{className:Ce.a.header,children:Object(j.jsx)("div",{className:Ce.a.loginBlock,children:e.isAuth?Object(j.jsxs)("div",{children:[e.login," - ",Object(j.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(j.jsx)(O.b,{to:"/login",children:"Login"})})})},ye=n(31),Se="social-net/auth.SET_USER_DATA",ke={userId:null,email:null,login:null,isAuth:!1,isFetching:!1,captchaUrl:null},Ne=function(e,t,n,r){return{type:Se,payload:{userId:e,email:t,login:n,isAuth:r}}},Ee=function(e){return{type:"social-net/auth.GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},Ie=function(){return function(){var e=Object(A.a)(T.a.mark((function e(t){var n,r,a,c,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.authMe();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,s=r.login,t(Ne(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Le=function(e,t,n){return function(){var r=Object(A.a)(T.a.mark((function r(a){var c,s;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,M.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(Ie()):(10===c.data.resultCode&&a(Ue()),s=c.data.messages.length>0?c.data.messages[0]:"Some error",a(Object(ye.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},Ue=function(){return function(){var e=Object(A.a)(T.a.mark((function e(t){var n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.d.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(Ee(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(z.a)(Object(z.a)({},e),t.payload);default:return e}},Ae=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)(Pe,Object(z.a)({},this.props))}}]),n}(a.a.Component),Fe=Object(L.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(A.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.logout();case 2:0===e.sent.data.resultCode&&t(Ne(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ae),ze=n(126),Me=n(41),De=n(67),Re=n(44),Be=n.n(Re),Ge=Object(Me.a)("input"),He=Object(ze.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(Me.b)("Email","email",[De.b],Ge),Object(Me.b)("Password","password",[De.b],Ge,{type:"password"}),Object(Me.b)(null,"rememberMe",[],Ge,{type:"checkbox"},"Remeber me"),r&&Object(j.jsx)("img",{src:r}),n&&Object(j.jsx)("div",{className:Be.a.formSummaryError,children:n}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Login"})})]})})),qe=Object(L.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:Le})((function(e){return e.isAuth?Object(j.jsx)(w.a,{to:"/profile"}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)(He,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)},captchaUrl:e.captchaUrl})]})})),Ve=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)(qe,Object(z.a)({},this.props))}}]),n}(a.a.Component),We=Object(L.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:Le})(Ve),Xe="INITIALIZED_SUCCESS",Je={initialized:!1},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xe:return Object(z.a)(Object(z.a)({},e),{},{initialized:!0});default:return e}},Ke=n(125),Ze=n(92),$e={},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=Object(z.a)({},e);return t},et=n(141),tt=n(127),nt=Object(je.c)({profilePage:Ze.b,dialogsPage:Ke.b,sideBar:Ye,usersPage:Y,auth:Te,form:tt.a,app:Qe}),rt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.d,at=Object(je.e)(nt,rt(Object(je.a)(et.a)));window.__store__=at;var ct=at,st=function(e){return function(t){return Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)("div",{children:"Loading..."}),children:Object(j.jsx)(e,Object(z.a)({},t))})}},ot=a.a.lazy((function(){return n.e(4).then(n.bind(null,305))})),it=a.a.lazy((function(){return n.e(3).then(n.bind(null,304))})),ut=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(Fe,{}),Object(j.jsx)(p,{}),Object(j.jsx)(g,{}),Object(j.jsxs)("div",{className:"wrapper-content",children:[Object(j.jsx)(w.b,{path:"/profile/:userId?",render:st(it)}),Object(j.jsx)(w.b,{path:"/dialogs",render:st(ot)}),Object(j.jsx)(w.b,{path:"/users",render:function(){return Object(j.jsx)(we,{})}}),Object(j.jsx)(w.b,{path:"/news",render:function(){return Object(j.jsx)(P,{})}}),Object(j.jsx)(w.b,{path:"/music",render:function(){return Object(j.jsx)(k,{})}}),Object(j.jsx)(w.b,{path:"/settings",render:function(){return Object(j.jsx)(I,{})}}),Object(j.jsx)(w.b,{path:"/login",render:function(){return Object(j.jsx)(We,{})}})]}),Object(j.jsx)(x,{})]})}}]),n}(a.a.Component),lt=Object(je.d)(w.f,Object(L.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Ie());Promise.all([t]).then((function(){e({type:Xe})}))}}}))(ut),ft=function(e){return Object(j.jsx)(O.a,{children:Object(j.jsx)(L.a,{store:ct,children:Object(j.jsx)(lt,{})})})};s.a.render(Object(j.jsx)(ft,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n(3),a=n(64),c=(n(0),n(44)),s=n.n(c),o=n(84),i=n(1),u=function(e){return function(t){var n=t.input,c=t.meta,o=c.touched,u=c.error,l=Object(a.a)(t,["input","meta"]),f=u&&o;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(f?s.a.error:""),children:[Object(i.jsx)("div",{children:Object(i.jsx)(e,Object(r.a)(Object(r.a)({},n),l))}),f&&Object(i.jsx)("span",{children:u})]})}},l=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5?arguments[5]:void 0;return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,Object(r.a)({placeholder:e,name:t,component:a,validate:n},c)),s]})}},44:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1pFhw",error:"FormsControls_error__3jGDQ",formSummaryError:"FormsControls_formSummaryError__1MN2M"}},65:function(e,t,n){e.exports={paginatorLine:"Paginator_paginatorLine__25hC8",selectedPage:"Paginator_selectedPage__VvsC-",defaultPage:"Paginator_defaultPage__qkfhv"}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},89:function(e,t,n){e.exports={header:"Header_header__16rnR",loginBlock:"Header_loginBlock__3923U"}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return v})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(8),a=n.n(r),c=n(13),s=n(40),o=n(3),i=n(31),u=n(11),l="ADD-POST",f="SET_USER_PROFILE",d="SET_STATUS",j="DELETE_POST",p="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"How are you?",likeCount:5},{id:2,message:"Follow the whire rabbit",likeCount:10}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:f,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,u.c.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(g(c)),t.next=12;break;case 8:return o=s.data.messages.length>0?s.data.messages[0]:"Some error",o.match(/(?<=>)\w+/)[0].toLowerCase()+"",n(Object(i.a)("edit-profile-contacs-info",{_error:o})),t.abrupt("return",Promise.reject(o));case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[{id:5,message:t.newPostText,likeCount:0}])});case f:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case d:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case j:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case p:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[295,1,2]]]);
//# sourceMappingURL=main.74d09ae0.chunk.js.map