(this["webpackJsonpmy-project-react-one"]=this["webpackJsonpmy-project-react-one"]||[]).push([[0],{104:function(e,t,n){e.exports={status:"Status_status__2QIdT",input:"Status_input__16j3K"}},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(5),r=n(48),s=n(49),c=n(51),i=n(50),o=n(1),u=n(13),l=n(14),d=n(29),j=n(0),b=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(i.a)(o);function o(){return Object(r.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(j.jsx)(e,Object(a.a)({},this.props)):Object(j.jsx)(u.a,{to:"/login"})}}]),o}(o.Component);return Object(l.b)((function(e){return{isAuth:Object(d.b)(e)}}))(t)}},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(30),r=n(5),s="ADD-MESSAGES",c={dataMessages:[{id:2,messages:"Good"},{id:3,messages:"Yo"}],dataDialogs:[{id:3,name:"Roma",img:"https://forexdengi.com/attachment.php?attachmentid=2474955&d=1549378078"},{id:4,name:"Dima",img:"https://i.artfile.ru/2048x1430_677036_[www.ArtFile.ru].jpg"}]},i=function(e){return{type:s,message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(r.a)(Object(r.a)({},e),{},{dataMessages:[].concat(Object(a.a)(e.dataMessages),[{id:e.dataMessages.length+1,messages:t.message}])});default:return e}}},138:function(e,t,n){"use strict";n.d(t,"d",(function(){return v})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return P})),n.d(t,"e",(function(){return w}));var a=n(10),r=n.n(a),s=n(17),c=n(30),i=n(5),o=n(18),u="SET-USERS",l="ADD-USER",d="REMOVE-USER",j="TOTAL-COUNT-USER",b="SHOW-NEXT-PAGE",p="TOGGLE-IS-PRELOAD",f="TOGGLE-IS-DISABLED-BUTTON",h={users:[],totalCountUsers:0,countUsers:30,currentPage:1,isPreload:!1,isDisabledButton:[]},O=function(e){return{type:l,userId:e}},m=function(e){return{type:d,userId:e}},x=function(e){return{type:p,isPreload:e}},_=function(e,t){return{type:f,disabled:e,userId:t}},v=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(x(!0)),n.next=3,o.d.getUsers(e,t);case 3:s=n.sent,a(x(!1)),a((c=s.data.items,{type:u,users:c})),a((r=s.data.totalCount,{type:j,totalUsers:r}));case 7:case"end":return n.stop()}var r,c}),n)})));return function(e){return n.apply(this,arguments)}}()},g=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(x(!0)),n.next=3,o.d.getUsers(e,t);case 3:s=n.sent,a(x(!1)),a((r=s.data.items,{type:b,users:r,page:t}));case 6:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,o.b.userFollow(e);case 3:0==t.sent.data.resultCode&&n(O(e)),n(_(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(_(!0,e)),t.next=3,o.b.userUnfollow(e);case 3:0==t.sent.data.resultCode&&n(m(e)),n(_(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id==t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case u:return Object(i.a)(Object(i.a)({},e),{},{users:[].concat(Object(c.a)(e.users),Object(c.a)(t.users))});case j:return Object(i.a)(Object(i.a)({},e),{},{totalCountUsers:t.totalUsers});case b:return Object(i.a)(Object(i.a)({},e),{},{users:[].concat(Object(c.a)(e.users),Object(c.a)(t.users)),currentPage:t.page});case p:return Object(i.a)(Object(i.a)({},e),{},{isPreload:t.isPreload});case f:return Object(i.a)(Object(i.a)({},e),{},{isDisabledButton:t.disabled?[].concat(Object(c.a)(e.isDisabledButton),[t.userId]):[]});default:return e}}},142:function(e,t,n){e.exports={title:"Footer_title__2CZ6e"}},143:function(e,t,n){e.exports={wrapper:"StartPage_wrapper__1VzA3"}},144:function(e,t,n){e.exports={section__info:"Info_section__info__1YqLr"}},146:function(e,t,n){},147:function(e,t,n){e.exports={wrapper:"MyPost_wrapper__1xMvx"}},15:function(e,t,n){e.exports={wrapper__info:"PersonData_wrapper__info__B180r",section__data:"PersonData_section__data__5uXXB",section__name:"PersonData_section__name__nEPo1",edit:"PersonData_edit__1Qmx8",aboutMe:"PersonData_aboutMe__1fR8O",contacts:"PersonData_contacts__3m5pP",buttonForm:"PersonData_buttonForm__1bBS_",error:"PersonData_error__2TBH5"}},179:function(e,t,n){},18:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(148),r=a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b5c3e73e-8418-4ceb-b3e6-20bd4dcb3b27"}}),s={getUsers:function(e,t){return r.get("users?count=".concat(e,"&page=").concat(t))}},c={getProfileData:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})},updatePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},updateProfile:function(e){return r.put("profile",e)}},i={userUnfollow:function(e){return r.delete("follow/".concat(e))},userFollow:function(e){return r.post("follow/".concat(e))}},o={authMeData:function(){return r.get("auth/me")},authLogin:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},authLogout:function(){return r.post("auth/logout")}}},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},24:function(e,t,n){e.exports={preloader:"PreloaderTwo_preloader__2VuvY",cssloader:"PreloaderTwo_cssloader__1NjuP",cssloadInner:"PreloaderTwo_cssloadInner__1qg2c",cssloadOne:"PreloaderTwo_cssloadOne__3AnTJ","cssload-rotate-one":"PreloaderTwo_cssload-rotate-one__gd9nr",cssloadTwo:"PreloaderTwo_cssloadTwo__2smSq","cssload-rotate-two":"PreloaderTwo_cssload-rotate-two__2CQFH",cssloadThree:"PreloaderTwo_cssloadThree__270nt","cssload-rotate-three":"PreloaderTwo_cssload-rotate-three__3w0Ly",container:"PreloaderTwo_container__3FNsp",itemOne:"PreloaderTwo_itemOne__wLVPJ",scale:"PreloaderTwo_scale__2yHIc",itemTwo:"PreloaderTwo_itemTwo__2APjn",itemThree:"PreloaderTwo_itemThree__1X0lJ"}},29:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var a=function(e){return e.auth.login},r=function(e){return e.auth.isAuth},s=function(e){return e.auth.id}},309:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(77),c=n.n(s),i=(n(179),n(180),n(181),n(182),n(0));var o=function(e){return Object(i.jsx)("div",{})};n(184);var u=function(e){return Object(i.jsx)("div",{})};n(185);var l=function(e){return Object(i.jsx)("div",{})},d=n(142),j=n.n(d);var b=function(){return Object(i.jsx)("footer",{children:Object(i.jsx)("div",{className:j.a.title,children:"FrLikes \xa9 2021"})})},p=n(143),f=n.n(p),h=n.p+"static/media/welcome.6e897cd3.png",O=function(e){return Object(i.jsx)("div",{className:f.a.wrapper,children:Object(i.jsx)("img",{src:h,alt:""})})},m=n(45),x=n.n(m),_=n(11),v=n(12),g=function(e){return Object(i.jsxs)("div",{className:x.a.info,children:[Object(i.jsx)("div",{className:x.a.photo,children:Object(i.jsx)("img",{src:e.img,alt:""})}),Object(i.jsx)("div",{className:x.a.name,children:e.name}),Object(i.jsxs)("div",{className:x.a.actions,children:[Object(i.jsx)("p",{children:"To write a message"}),Object(i.jsx)("p",{children:"Remove from friends"})]})]})},P=function(e){var t=e.friendsCount.map((function(e){return Object(i.jsx)(g,{img:e.img,name:e.name},e.id)}));return Object(i.jsxs)("div",{className:x.a.section,children:[Object(i.jsxs)("div",{className:x.a.input,children:[Object(i.jsx)("input",{type:"text",placeholder:"Start typing your friend's name"}),Object(i.jsx)("span",{children:Object(i.jsx)(_.a,{icon:v.j})})]}),t]})},w=n(14),k=n(7),N=function(e){return e.friendsPage.friendsList},S=Object(k.d)(Object(w.b)((function(e){return{friendsCount:N(e)}})))(P),T=n(82),y=n.n(T),F=n(21);function A(e){return Object(i.jsx)("li",{children:Object(i.jsx)(F.c,{to:e.url,activeClassName:y.a.active,children:Object(i.jsxs)("div",{className:y.a.items,children:[Object(i.jsx)("p",{children:e.icon}),Object(i.jsx)("span",{children:e.item})]})})})}var E=function(e){var t=e.store.map((function(e){return Object(i.jsx)(A,{url:e.url,icon:e.icon,item:e.item},e.id)}));return Object(i.jsx)("nav",{className:y.a.main__nav,children:Object(i.jsx)("ul",{children:t})})},I=Object(w.b)((function(e){return{store:e.navPage.itemsNav}}))(E),L=n(13),D=n(83),C=n.n(D),M=n(144),U=n.n(M),R=n(44),z=n.p+"static/media/anonym.42e4f7db.jpg",H=n(84),V=n.n(H),J=n(60),B=n.p+"static/media/iphoneLoader.02cfd8e6.gif";var G=function(e){var t=Object(a.useState)(!1),n=Object(R.a)(t,2),r=n[0],s=n[1];return Object(a.useEffect)((function(){s(!1)}),[e.profile]),e.profile?Object(i.jsxs)("div",{className:V.a.section__foto,children:[r?Object(i.jsx)("div",{className:V.a.loaderImg,children:Object(i.jsx)("img",{src:B,alt:""})}):Object(i.jsx)("img",{src:e.profile.photos.large?e.profile.photos.large:z,alt:""}),e.isOwnProfile&&Object(i.jsxs)("div",{className:V.a.inputWrapper,children:[Object(i.jsx)("input",{onChange:function(t){t.target.files.length&&(s(!0),e.updatePhotoThunk(t.target.files[0]))},type:"file",name:"file",id:"file"}),Object(i.jsxs)("label",{htmlFor:"file",children:["Update photo ",Object(i.jsx)(_.a,{icon:v.c})," "]})]})]}):Object(i.jsx)(J.a,{})},Q=n(15),X=n.n(Q),W=n(104),Y=n.n(W),Z=function(e){var t=Object(a.useState)(!1),n=Object(R.a)(t,2),r=n[0],s=n[1],c=Object(a.useState)(e.status),o=Object(R.a)(c,2),u=o[0],l=o[1];return Object(a.useEffect)((function(){l(e.status)}),[e.status]),Object(i.jsx)("div",{children:r?Object(i.jsx)("input",{onChange:function(e){l(e.target.value)},maxLength:300,autoFocus:!0,onBlur:function(){s(!1),e.updateStatusThunk(u)},value:u,className:Y.a.input,type:"text"}):Object(i.jsx)("div",{onDoubleClick:function(){s(!0)},className:Y.a.status,children:e.status||"add your status..."})})},q=function(e){return Object(i.jsxs)("div",{className:X.a.contacts,children:[e.contactTitle," : ",Object(i.jsx)("span",{children:e.contactResourse})]})};var K=function(e){return e.profile?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:X.a.section__name,children:[e.profile.fullName,Object(i.jsx)(Z,{updateStatusThunk:e.updateStatusThunk,status:e.status})]}),Object(i.jsxs)("div",{className:X.a.section__data,children:[Object(i.jsxs)("p",{children:["About Me: ",Object(i.jsx)("span",{children:e.profile.aboutMe?e.profile.aboutMe:"no information"})]}),Object(i.jsxs)("p",{children:["Looking for a job: ",Object(i.jsx)("span",{children:e.profile.lookingForAJob?Object(i.jsx)(_.a,{icon:v.l}):"no"})]}),Object(i.jsxs)("p",{children:["My skills : ",Object(i.jsx)("span",{children:e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:"no information"})]}),Object(i.jsxs)("p",{children:["Contacts:",Object.keys(e.profile.contacts).map((function(t){if("mainLink"!==t)return Object(i.jsx)(q,{contactTitle:t,contactResourse:e.profile.contacts["".concat(t)]?e.profile.contacts["".concat(t)]:"no information"},t)}))]})]}),e.isOwnProfile&&Object(i.jsx)("div",{className:X.a.edit,children:Object(i.jsxs)("button",{onDoubleClick:function(){e.setEditMode(!0)},children:["Edit ",Object(i.jsx)(_.a,{icon:v.d})]})})]}):Object(i.jsx)(J.a,{})},$=n(81),ee=n(139),te=n(140),ne=["handleSubmit","profile"];var ae=Object(te.a)({form:"editProfile"})((function(e){var t=e.handleSubmit,n=(e.profile,Object($.a)(e,ne));return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsxs)("div",{className:X.a.fullName,children:[Object(i.jsx)("label",{htmlFor:"editProfile",children:Object(i.jsx)("b",{children:"Your Name: "})}),Object(i.jsx)(ee.a,{component:"input",name:"fullName"})]}),Object(i.jsxs)("div",{className:X.a.aboutMe,children:[Object(i.jsx)("label",{htmlFor:"editProfile",children:Object(i.jsx)("b",{children:"About me: "})}),Object(i.jsx)(ee.a,{component:"textarea",name:"aboutMe"})]}),Object(i.jsxs)("div",{className:X.a.aboutMe,children:[Object(i.jsx)("label",{htmlFor:"editProfile",children:Object(i.jsx)("b",{children:"Your skills: "})}),Object(i.jsx)(ee.a,{component:"textarea",name:"lookingForAJobDescription"})]}),Object(i.jsxs)("div",{className:X.a.facebook,children:[Object(i.jsx)("label",{htmlFor:"editProfile",children:Object(i.jsx)("b",{children:"facebook: "})}),Object(i.jsx)(ee.a,{component:"input",name:"contacts.facebook"})]}),Object(i.jsxs)("div",{className:X.a.vk,children:[Object(i.jsx)("label",{htmlFor:"editProfile",children:Object(i.jsx)("b",{children:"vk: "})}),Object(i.jsx)(ee.a,{component:"input",name:"contacts.vk"})]}),Object(i.jsxs)("div",{className:X.a.website,children:[Object(i.jsx)("label",{htmlFor:"editProfile",children:Object(i.jsx)("b",{children:"website: "})}),Object(i.jsx)(ee.a,{component:"input",name:"contacts.website"})]}),Object(i.jsxs)("div",{className:X.a.twitter,children:[Object(i.jsx)("label",{htmlFor:"editProfile",children:Object(i.jsx)("b",{children:"twitter: "})}),Object(i.jsx)(ee.a,{component:"input",name:"contacts.twitter"})]}),Object(i.jsxs)("div",{className:X.a.instagram,children:[Object(i.jsx)("label",{htmlFor:"editProfile",children:Object(i.jsx)("b",{children:"instagram: "})}),Object(i.jsx)(ee.a,{component:"input",name:"contacts.instagram"})]}),Object(i.jsxs)("div",{className:X.a.youtube,children:[Object(i.jsx)("label",{htmlFor:"editProfile",children:Object(i.jsx)("b",{children:"youtube: "})}),Object(i.jsx)(ee.a,{component:"input",name:"contacts.youtube"})]}),Object(i.jsxs)("div",{className:X.a.github,children:[Object(i.jsx)("label",{htmlFor:"editProfile",children:Object(i.jsx)("b",{children:"github: "})}),Object(i.jsx)(ee.a,{component:"input",name:"contacts.github"})]}),Object(i.jsxs)("div",{className:X.a.inputCheckbox,children:[Object(i.jsx)("label",{htmlFor:"editProfile",children:Object(i.jsx)("b",{children:"looking for a job: "})}),Object(i.jsx)(ee.a,{component:"input",type:"checkbox",name:"lookingForAJob"})]}),n.error&&Object(i.jsxs)("div",{className:X.a.error,children:[Object(i.jsxs)("span",{children:[n.error," "]}),Object(i.jsxs)("span",{children:[" ",Object(i.jsx)(_.a,{icon:v.f})]})]}),Object(i.jsx)("button",{className:X.a.buttonForm,type:"submit",children:"SAVE"})]})}));var re=function(e){var t=Object(a.useState)(!1),n=Object(R.a)(t,2),r=n[0],s=n[1];return Object(i.jsx)("div",{className:X.a.wrapper__info,children:r?Object(i.jsx)(ae,{initialValues:e.profile,onSubmit:function(t){e.updateProfileThunk(t),"success"===e.isSuccess&&s(!1)}}):Object(i.jsx)(K,{updateStatusThunk:e.updateStatusThunk,status:e.status,profile:e.profile,isOwnProfile:e.isOwnProfile,setEditMode:s})})};var se=function(e){return Object(i.jsxs)("div",{className:U.a.section__info,children:[Object(i.jsx)(G,{profile:e.profile,updatePhotoThunk:e.updatePhotoThunk,isOwnProfile:e.isOwnProfile}),Object(i.jsx)(re,{updateStatusThunk:e.updateStatusThunk,status:e.status,profile:e.profile,isOwnProfile:e.isOwnProfile,updateProfileThunk:e.updateProfileThunk,isSuccess:e.isSuccess})]})},ce=n(55),ie=n.n(ce),oe=function(e){return Object(i.jsxs)("div",{className:ie.a.wrapper,children:[Object(i.jsx)("div",{className:ie.a.section,children:Object(i.jsx)("img",{src:e.img,alt:""})}),Object(i.jsx)("div",{className:ie.a.name,children:e.name})]})},ue=function(e){var t=e.state.map((function(e){return Object(i.jsx)(oe,{img:e.img,name:e.name})}));return Object(i.jsxs)("div",{className:ie.a.friendsList,children:[Object(i.jsxs)("p",{children:[Object(i.jsx)(F.b,{exact:!0,to:"/friends",children:"Friends"})," ",e.state.length]}),Object(i.jsx)("div",{className:ie.a.items,children:t})]})},le=Object(w.b)((function(e){return{state:N(e)}}))(ue),de=n(146),je=n.n(de),be=n(31),pe=n.n(be),fe=n.p+"static/media/image.058cdaec.jpg";var he=function(e){return Object(i.jsx)("div",{className:pe.a.wrapper,children:Object(i.jsxs)("div",{className:pe.a.container,children:[Object(i.jsxs)("div",{className:pe.a.image,children:[Object(i.jsx)("img",{src:fe,alt:""}),Object(i.jsx)("div",{className:pe.a.name,children:e.name})]}),Object(i.jsx)("div",{className:pe.a.post,children:Object(i.jsx)("span",{children:e.text})}),Object(i.jsxs)("div",{className:pe.a.like,children:[Object(i.jsx)("span",{className:pe.a.icon,children:Object(i.jsx)(_.a,{icon:v.l})}),Object(i.jsx)("span",{className:pe.a.count_like,children:"0"})]})]})})},Oe=n(147),me=n.n(Oe),xe=n(43);var _e=Object(te.a)({form:"myPost"})((function(e){return Object(i.jsx)("div",{className:me.a.wrapper,children:Object(i.jsxs)("form",{onSubmit:e.handleSubmit((function(t){console.log(t),e.addPost(t.post)})),children:[Object(i.jsx)(ee.a,{component:"textarea",placeholder:"add a post...",name:"post",validate:[xe.c,xe.b]}),Object(i.jsx)("button",{type:"submit",children:"Submit"})]})})}));var ve=function(e){var t=e.dataPost.map((function(e){return Object(i.jsx)(he,{text:e.post,like:e.like,name:e.name})}));return Object(i.jsxs)("div",{className:je.a.section__messages,children:[Object(i.jsx)(_e,{addPost:e.addPost}),t]})};var ge=function(e){return Object(i.jsx)("div",{className:C.a.main__content,children:Object(i.jsxs)("div",{className:C.a.main__section,children:[Object(i.jsx)(se,{updateStatusThunk:e.updateStatusThunk,updatePhotoThunk:e.updatePhotoThunk,updateProfileThunk:e.updateProfileThunk,status:e.status,profile:e.profile,isOwnProfile:e.isOwnProfile,isSuccess:e.isSuccess}),Object(i.jsxs)("div",{className:C.a.items,children:[Object(i.jsx)(le,{}),Object(i.jsx)(ve,{addPost:e.addPost,dataPost:e.dataPost})]})]})})},Pe=n(10),we=n.n(Pe),ke=n(17),Ne=n(30),Se=n(5),Te=n(18),ye=n(34),Fe="ADD-POST",Ae="USERS-PROFILE",Ee="SET-STATUS",Ie="SET-PHOTO",Le="SET-IS-SUCCESS",De={dataPost:[],personData:null,status:"",isSuccessSubmit:""},Ce=function(e){return{type:Ee,status:e}},Me=function(e){return{type:Le,isSuccess:e}},Ue=function(e){return function(){var t=Object(ke.a)(we.a.mark((function t(n){var a;return we.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Te.c.getProfileData(e);case 2:a=t.sent,n((r=a.data,{type:Ae,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return Object(Se.a)(Object(Se.a)({},e),{},{dataPost:[].concat(Object(Ne.a)(e.dataPost),[{id:e.dataPost.length+1,post:t.post,name:"Konstantin"}])});case Ae:return Object(Se.a)(Object(Se.a)({},e),{},{personData:Object(Se.a)({},t.profile)});case Ee:return Object(Se.a)(Object(Se.a)({},e),{},{status:t.status});case Ie:return Object(Se.a)(Object(Se.a)({},e),{},{personData:Object(Se.a)(Object(Se.a)({},e.personData),{},{photos:t.photos})});case Le:return Object(Se.a)(Object(Se.a)({},e),{},{isSuccessSubmit:t.isSuccess});default:return e}},ze=n(136),He=function(e){return e.profilePage.personData},Ve=function(e){return e.profilePage.status},Je=function(e){return e.profilePage.dataPost},Be=function(e){return e.profilePage.isSuccessSubmit},Ge=n(29);var Qe=Object(k.d)(Object(w.b)((function(e){return{profile:He(e),status:Ve(e),dataPost:Je(e),userId:Object(Ge.a)(e),isAuth:Object(Ge.b)(e),isSuccess:Be(e)}}),{profileAPIThunk:Ue,setStatusThunk:function(e){return function(){var t=Object(ke.a)(we.a.mark((function t(n){var a;return we.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Te.c.getStatus(e);case 2:a=t.sent,n(Ce(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatusThunk:function(e){return function(){var t=Object(ke.a)(we.a.mark((function t(n){return we.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Te.c.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(Ce(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},addPost:function(e){return{type:Fe,post:e}},updatePhotoThunk:function(e){return function(){var t=Object(ke.a)(we.a.mark((function t(n){var a;return we.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Te.c.updatePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n((r=a.data.data.photos,{type:Ie,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},updateProfileThunk:function(e){return function(){var t=Object(ke.a)(we.a.mark((function t(n,a){var r,s;return we.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.id,t.next=3,Te.c.updateProfile(e);case 3:0===(s=t.sent).data.resultCode?(n(Ue(r)),n(Me("success"))):(n(Object(ye.a)("editProfile",{_error:s.data.messages[0]})),n(Me("fail")));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),ze.a,L.g)((function(e){return Object(a.useEffect)((function(){var t=e.match.params.userId;t||(t=e.userId)||e.history.push("/login"),e.profileAPIThunk(t),e.setStatusThunk(t)}),[e.match.params.userId,e.userId]),Object(i.jsx)(ge,{updateStatusThunk:e.updateStatusThunk,updatePhotoThunk:e.updatePhotoThunk,updateProfileThunk:e.updateProfileThunk,status:e.status,profile:e.profile,addPost:e.addPost,dataPost:e.dataPost,isOwnProfile:!e.match.params.userId,isSuccess:e.isSuccess})})),Xe=n(48),We=n(49),Ye=n(51),Ze=n(50),qe=n.p+"static/media/logo.f78a5155.png",Ke=n(38),$e=n.n(Ke);var et=function(e){return Object(i.jsxs)("header",{className:$e.a.header,children:[Object(i.jsx)("div",{className:$e.a.logo,children:Object(i.jsx)("a",{href:"#",children:Object(i.jsx)("img",{src:qe,alt:"logo"})})}),Object(i.jsxs)("div",{className:$e.a.header__title,children:[Object(i.jsx)("p",{className:$e.a.title,children:"FrLikes"}),Object(i.jsx)("p",{className:$e.a.subtitle,children:"Stay in touch"})]}),Object(i.jsx)("div",{className:$e.a.login,children:e.isAuth?Object(i.jsxs)("div",{children:[Object(i.jsx)(F.c,{to:"/profile",children:e.login}),Object(i.jsx)("div",{className:$e.a.exit,children:Object(i.jsxs)("button",{onClick:function(){e.authLogoutThunk()},children:[Object(i.jsx)(_.a,{icon:v.k})," Logout"]})})]}):Object(i.jsx)(F.c,{to:"/login",children:"Login"})})]})},tt="TYPE-SET-AUTH-DATA",nt={id:null,login:null,email:null,isAuth:!1},at=function(e,t,n,a){return{type:tt,data:{id:e,login:t,email:n,isAuth:a}}},rt=function(){return function(){var e=Object(ke.a)(we.a.mark((function e(t){var n,a,r,s,c;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te.a.authMeData();case 2:return 0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,s=a.login,c=a.email,t(at(r,s,c,!0))),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case tt:return Object(Se.a)(Object(Se.a)({},e),t.data);default:return e}},ct=function(e){Object(Ye.a)(n,e);var t=Object(Ze.a)(n);function n(){return Object(Xe.a)(this,n),t.apply(this,arguments)}return Object(We.a)(n,[{key:"render",value:function(){return Object(i.jsx)(et,Object(Se.a)({},this.props))}}]),n}(a.Component),it=Object(k.d)(Object(w.b)((function(e){return{login:Object(Ge.c)(e),isAuth:Object(Ge.b)(e)}}),{authLogoutThunk:function(){return function(){var e=Object(ke.a)(we.a.mark((function e(t){return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te.a.authLogout();case 2:0===e.sent.data.resultCode&&t(at(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ct),ot=n(39),ut=n.n(ot),lt=n(56),dt=n.n(lt),jt=["input","meta"],bt=function(e){var t=e.input,n=e.meta,a=Object($.a)(e,jt);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("input",Object(Se.a)(Object(Se.a)(Object(Se.a)({},t),a),{},{className:"".concat(dt.a.input," ").concat(n.error&&n.touched?dt.a.error:"")})),n.error&&n.touched&&Object(i.jsx)("span",{className:dt.a.exclamation,children:Object(i.jsx)(_.a,{icon:v.f})})]}),n.error&&n.touched&&Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:dt.a.triangle}),Object(i.jsx)("div",{className:dt.a.errorMessage,children:Object(i.jsx)("span",{children:n.error})})]})]})},pt=function(e){Object(Ye.a)(n,e);var t=Object(Ze.a)(n);function n(){return Object(Xe.a)(this,n),t.apply(this,arguments)}return Object(We.a)(n,[{key:"onSubmit",value:function(e){this.props.authLoginThunk(e.login,e.password,e.checkbox)}},{key:"render",value:function(){return this.props.isAuth?Object(i.jsx)(L.a,{to:"/profile"}):Object(i.jsx)("div",{className:ut.a.form,children:Object(i.jsxs)("div",{className:ut.a.wrapper,children:[Object(i.jsx)("div",{className:ut.a.title,children:"FrLikes"}),Object(i.jsx)("div",{className:ut.a.sign,children:"SIGN IN"}),Object(i.jsxs)("form",{onSubmit:this.props.handleSubmit(this.onSubmit.bind(this)),children:[Object(i.jsx)("div",{children:Object(i.jsx)(ee.a,{component:bt,type:"text",name:"login",placeholder:"login",validate:[xe.c,xe.a]})}),Object(i.jsx)("div",{children:Object(i.jsx)(ee.a,{component:bt,type:"password",name:"password",placeholder:"password",validate:[xe.c]})}),this.props.error&&Object(i.jsx)("div",{className:ut.a.generalError,children:Object(i.jsx)("span",{children:this.props.error})}),Object(i.jsxs)("div",{className:ut.a.inputCheckbox,children:[Object(i.jsx)(ee.a,{component:"input",type:"checkbox",name:"checkbox"}),Object(i.jsx)("label",{htmlFor:"login",children:"Remember me"})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:ut.a.btn,type:"submit",children:"Sign In"})})]})]})})}}]),n}(a.Component),ft=Object(k.d)(Object(w.b)((function(e){return{isAuth:Object(Ge.b)(e)}}),{authLoginThunk:function(e,t,n){return function(){var a=Object(ke.a)(we.a.mark((function a(r){var s;return we.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Te.a.authLogin(e,t,n);case 2:0===(s=a.sent).data.resultCode?r(rt()):r(Object(ye.a)("login",{_error:s.data.messages[0]}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}}),Object(te.a)({form:"login"}))(pt),ht=n(24),Ot=n.n(ht),mt=function(e){return Object(i.jsxs)("div",{className:Ot.a.preloader,children:[Object(i.jsxs)("div",{className:Ot.a.cssloader,children:[Object(i.jsx)("div",{className:"".concat(Ot.a.cssloadInner," ").concat(Ot.a.cssloadOne)}),Object(i.jsx)("div",{className:"".concat(Ot.a.cssloadInner," ").concat(Ot.a.cssloadTwo)}),Object(i.jsx)("div",{className:"".concat(Ot.a.cssloadInner," ").concat(Ot.a.cssloadThree)})]}),Object(i.jsxs)("div",{className:Ot.a.container,children:[Object(i.jsx)("span",{children:"Loading"}),Object(i.jsx)("div",{className:Ot.a.itemOne}),Object(i.jsx)("div",{className:Ot.a.itemTwo}),Object(i.jsx)("div",{className:Ot.a.itemThree})]})]})},xt="INITIALIZED-SUCCESS",_t={isInitialized:!1},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case xt:return Object(Se.a)(Object(Se.a)({},e),{},{isInitialized:!0});default:return e}},gt=function(e){return Object(i.jsx)(a.Suspense,{fallback:Object(i.jsx)(mt,{}),children:Object(i.jsx)(e,{})})},Pt=a.lazy((function(){return n.e(4).then(n.bind(null,315))})),wt=a.lazy((function(){return n.e(3).then(n.bind(null,314))}));var kt=Object(k.d)(L.g,Object(w.b)((function(e){return{isInitialized:e.app.isInitialized}}),{initializedThunk:function(){return function(e){e(rt()).then((function(){e({type:xt})}))}}}))((function(e){return Object(a.useEffect)((function(){e.initializedThunk()}),[e.initializedThunk()]),e.isInitialized?Object(i.jsxs)("div",{className:"app-wrapper",children:[Object(i.jsx)(it,{}),Object(i.jsxs)("div",{className:"main",children:[Object(i.jsx)(I,{}),Object(i.jsxs)(L.d,{children:[Object(i.jsx)(L.b,{exact:!0,path:"/",render:function(){return Object(i.jsx)(O,{})}}),Object(i.jsx)(L.b,{path:"/dialogs",render:function(){return gt(wt)}}),Object(i.jsx)(L.b,{path:"/usersAll",render:function(){return gt(Pt)}}),Object(i.jsx)(L.b,{path:"/login",render:function(){return Object(i.jsx)(ft,{})}}),Object(i.jsx)(L.b,{path:"/profile/:userId?",render:function(){return Object(i.jsx)(Qe,{})}}),Object(i.jsx)(L.b,{path:"/friends",render:function(){return Object(i.jsx)(S,{})}}),Object(i.jsx)(L.b,{path:"/news",render:function(){return Object(i.jsx)(o,{})}}),Object(i.jsx)(L.b,{path:"/music",render:function(){return Object(i.jsx)(u,{})}}),Object(i.jsx)(L.b,{path:"/setting",render:function(){return Object(i.jsx)(l,{})}})]})]}),Object(i.jsx)(b,{})]}):Object(i.jsx)(mt,{})})),Nt={itemsNav:[{url:"/profile",item:"My profile",icon:Object(i.jsx)(_.a,{icon:v.g})},{url:"/usersAll",item:"All people",icon:Object(i.jsx)(_.a,{icon:v.n})},{url:"/dialogs",item:"Messages",icon:Object(i.jsx)(_.a,{icon:v.e})},{url:"/friends",item:"Friends",icon:Object(i.jsx)(_.a,{icon:v.m})},{url:"/news",item:"News",icon:Object(i.jsx)(_.a,{icon:v.i})},{url:"/photos",item:"Photos",icon:Object(i.jsx)(_.a,{icon:v.a})},{url:"/music",item:"Music",icon:Object(i.jsx)(_.a,{icon:v.h})},{url:"/setting",item:"Setting",icon:Object(i.jsx)(_.a,{icon:v.b})}]},St=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt;return e},Tt=n(137),yt={friendsList:[{id:1,name:"Konstantin",img:"https://proprikol.ru/wp-content/uploads/2020/09/kartinki-milyh-zhivotnyh-37.jpg"},{id:2,name:"Vika",img:"https://img1.badfon.ru/original/2047x1321/4/e4/medved-cvetok-priroda.jpg"},{id:3,name:"Roma",img:"https://c.wallhere.com/photos/aa/d6/panda_baby_animals_animals-146359.jpg!d"},{id:4,name:"Andrey",img:"https://www.anypics.ru/download.php?file=201210/1440x900/anypics.ru-15377.jpg"},{id:5,name:"Alex",img:"https://i.pinimg.com/originals/5e/8c/31/5e8c310ac9ff10ed45b9c71be55f0b3a.jpg"},{id:6,name:"Egor",img:"https://proprikol.ru/wp-content/uploads/2020/03/kartinki-afrikanskih-zhivotnyh-43.jpg"},{id:7,name:"Sasha",img:"https://a.d-cd.net/485ba21s-960.jpg"}]},Ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt;return e},At=n(138),Et=n(149),It=n(141),Lt=Object(k.c)({profilePage:Re,dialogsPage:Tt.b,navPage:St,friendsPage:Ft,UsersAllPage:At.b,auth:st,form:It.a,app:vt}),Dt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,Ct=Object(k.e)(Lt,Dt(Object(k.a)(Et.a)));c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(F.a,{children:Object(i.jsx)(w.a,{store:Ct,children:Object(i.jsx)(kt,{})})})}),document.getElementById("root"))},31:function(e,t,n){e.exports={wrapper:"Post_wrapper__3zisx",container:"Post_container__3or_X",image:"Post_image__23Ari",name:"Post_name__fF408",post:"Post_post__1S721",like:"Post_like__3O56O",count_like:"Post_count_like__3fDxV",icon:"Post_icon__3QurJ"}},37:function(e,t,n){e.exports={preloader:"Preloader_preloader__1zT4E",loader:"Preloader_loader__3-arJ",dot:"Preloader_dot__3SxEh"}},38:function(e,t,n){e.exports={header:"Header_header__2o2WJ",logo:"Header_logo__3u028",header__title:"Header_header__title__3qQWI",title:"Header_title__32cUV",header__logo:"Header_header__logo__1pxUZ",login:"Header_login__2XOSY",exit:"Header_exit__2irHf"}},39:function(e,t,n){e.exports={title:"Login_title__BFSSo",sign:"Login_sign__Wr8SA",form:"Login_form__3Didm",wrapper:"Login_wrapper__2QmI-",inputCheckbox:"Login_inputCheckbox__1frW6",btn:"Login_btn__1ds_x",generalError:"Login_generalError__2Qzvi"}},43:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c}));var a,r=function(e){if(!e)return"required"},s=function(e){if(e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e))return"Invalid email address"},c=(a=1,function(e){if(!(e&&e.length>=a))return"---"})},45:function(e,t,n){e.exports={section:"Friends_section__3ad19",input:"Friends_input__20nQS",info:"Friends_info__3ueHs",photo:"Friends_photo__2_fH6",name:"Friends_name__3AQUW",actions:"Friends_actions__xoNvi"}},55:function(e,t,n){e.exports={friendsList:"FriendsList_friendsList__3mgkr",wrapper:"FriendsList_wrapper__rmG0p",items:"FriendsList_items__2YSl0",section:"FriendsList_section__dmiCH",name:"FriendsList_name__3iqg-"}},56:function(e,t,n){e.exports={input:"FormsElementsForValidation_input__QKfVO",triangle:"FormsElementsForValidation_triangle__3okZI",errorMessage:"FormsElementsForValidation_errorMessage__1RvzP",error:"FormsElementsForValidation_error__3JobX",exclamation:"FormsElementsForValidation_exclamation__3V24J"}},60:function(e,t,n){"use strict";var a=n(37),r=n.n(a),s=n(0);t.a=function(e){return Object(s.jsx)("div",{className:r.a.preloader,children:Object(s.jsxs)("div",{className:r.a.loader,children:[Object(s.jsx)("div",{className:r.a.dot}),Object(s.jsx)("div",{className:r.a.dot}),Object(s.jsx)("div",{className:r.a.dot}),Object(s.jsx)("div",{className:r.a.dot}),Object(s.jsx)("div",{className:r.a.dot})]})})}},82:function(e,t,n){e.exports={main__nav:"Nav_main__nav__1bGXx",active:"Nav_active__1diQh",items:"Nav_items__2avRC"}},83:function(e,t,n){e.exports={main__content:"Profile_main__content__3gLDM",items:"Profile_items__1iMI-"}},84:function(e,t,n){e.exports={section__foto:"Avatar_section__foto__1eroJ",inputWrapper:"Avatar_inputWrapper__3MGkc",loaderImg:"Avatar_loaderImg__11rDC"}}},[[309,1,2]]]);
//# sourceMappingURL=main.c04755fe.chunk.js.map