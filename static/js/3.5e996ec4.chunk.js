(this["webpackJsonpsocial-net"]=this["webpackJsonpsocial-net"]||[]).push([[3],{297:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__8zEAT",posts:"MyPosts_posts__2yI-c"}},298:function(e,t,a){e.exports={item:"Post_item__21Gy6",like:"Post_like__1biSz"}},299:function(e,t,a){e.exports={profileInfo:"ProfileInfo_profileInfo__197CX",profileAvatarBlock:"ProfileInfo_profileAvatarBlock__1zzS9",profileDesciptionBlock:"ProfileInfo_profileDesciptionBlock__2KyXx",profileCommonInfoBlock:"ProfileInfo_profileCommonInfoBlock__3PgoP",profielAvatarImg:"ProfileInfo_profielAvatarImg__19-uj"}},300:function(e,t){},301:function(e,t,a){e.exports={profile:"Profile_profile__3SicN"}},302:function(e,t,a){"use strict";a.r(t);var n=a(24),o=a(25),l=a(27),r=a(26),s=a(0),i=a.n(s),c=a(15),u=a(9),p=a(7),f=a(91),m=a(127),d=a(83),E=a(124),v=a(297),b=a.n(v),_=a(298),h=a.n(_),P=function(e){return i.a.createElement("div",{className:h.a.item},e.message,i.a.createElement("div",null,i.a.createElement("span",{className:h.a.like},"like - ",e.likeCount)))},k=a(66),g=a(43),j=i.a.memo((function(e){var t=e.profilePage.posts.map((function(e){return i.a.createElement(P,{id:e.id,message:e.message,likeCount:e.likeCount})}));return i.a.createElement("div",{className:b.a.postsBlock},i.a.createElement("div",null,i.a.createElement("h3",null,"My posts"),i.a.createElement(S,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:b.a.posts},t)))})),I=Object(k.a)(50),O=Object(g.a)("textarea"),S=Object(E.a)({form:"newPostTextForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement(d.a,{component:O,validate:[I],name:"newPostText",placeholder:"Enter you new post"}),i.a.createElement("div",null,i.a.createElement("button",null,"New Post")))})),B=j,N=Object(c.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e(Object(f.a)(t))}}}))(B),y=a(299),C=a.n(y),x=a(102),A=a(125),w=(a(300),function(e){var t=Object(s.useState)(!1),a=Object(A.a)(t,2),n=a[0],o=a[1],l=Object(s.useState)(e.status),r=Object(A.a)(l,2),c=r[0],u=r[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},onBlur:function(){o(!1),e.updateStatus(c)},autoFocus:!0,value:c})))}),z=function(e){return i.a.createElement("div",{className:C.a.profileInfo},i.a.createElement("div",{className:C.a.profileAvatarBlock},i.a.createElement("img",{src:e.profile.photos.large||x.a,alt:"",className:C.a.profielAvatarImg})),i.a.createElement("div",{className:C.a.profileDesciptionBlock},i.a.createElement("div",null,i.a.createElement("span",null,e.profile.aboutMe),i.a.createElement(w,{status:e.status,updateStatus:e.updateStatus})),i.a.createElement("div",null,Object.entries(e.profile.contacts).map((function(e){return i.a.createElement("p",null,i.a.createElement("b",null,e[0],":")," ",e[1])})))),i.a.createElement("div",{className:C.a.profileCommonInfoBlock},i.a.createElement("div",null,i.a.createElement("span",{style:{padding:"25px"}},i.a.createElement("b",null,e.profile.fullName.toUpperCase())))))},D=a(301),M=a.n(D),T=function(e){return e.profile?i.a.createElement("div",{className:M.a.profile},i.a.createElement(z,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),i.a.createElement(N,null)):i.a.createElement(m.a,null)},U=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return i.a.createElement(T,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(i.a.Component);t.default=Object(p.d)(Object(c.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getProfile:f.c,getStatus:f.d,updateStatus:f.e}),u.f)(U)}}]);
//# sourceMappingURL=3.5e996ec4.chunk.js.map