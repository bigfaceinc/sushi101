"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[556],{9023:function(e,t,n){n.d(t,{e_:function(){return x},TR:function(){return j},Ss:function(){return m}});var r=n(2809),i=n(6311),o=n(9226),c=n(5305),a=n(2642),u=n(9602),s=n(453),l=n(1796),h=n(7294),d=n(1664),p=n(5893);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var x=function(){return(0,p.jsx)(o.Z,{sx:{height:18,borderRight:2,borderRightColor:"primary.main"}})},j=function(){return(0,p.jsx)("img",{src:"./img/home/logo.png",height:"100%",alt:"sushi101-menubar-logo"})},m=function(e){var t=e.active,n=void 0!==t&&t,r=e.title,o=e.to,u=void 0===o?"":o,s=e.onClick,l=e.childrenItems,f=h.useState(null),x=(0,i.Z)(f,2),j=x[0],m=x[1],b=Boolean(j),v=function(){m(null)},y=(0,h.useMemo)((function(){return n?{variant:"contained",color:"primary"}:{variant:"text",color:"secondary"}}),[n]),Z=y.variant,k=y.color,O=function(){return l?(0,p.jsx)(p.Fragment,{children:r}):(0,p.jsx)(d.default,{href:null!==u&&void 0!==u?u:"",passHref:!0,children:r})};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.Z,{variant:Z,color:k,onClick:function(e){m(e.currentTarget),s&&s()},sx:{minWidth:100},disableRipple:!0,disableTouchRipple:!0,disableFocusRipple:!0,children:(0,p.jsx)(O,{})}),function(){if(l)return(0,p.jsx)(g,{id:"positioned-menu","aria-labelledby":"positioned-button",anchorEl:j,open:b,onClose:v,children:l.map((function(e){var t;return(0,p.jsx)(d.default,{href:null!==(t=e.path)&&void 0!==t?t:"/#",passHref:!0,children:(0,p.jsx)(c.Z,{onClick:v,children:e.title})},e.title)}))})}()]})},g=(0,u.ZP)((function(e){return(0,p.jsx)(s.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({disableScrollLock:!0,elevation:1,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},e))}))((function(e){var t=e.theme;return{"& .MuiPaper-root":{borderRadius:6,marginTop:t.spacing(1),minWidth:120,"& .MuiMenu-list":{padding:"8px 4px"},"& .MuiMenuItem-root":{"&:hover":{color:t.palette.primary.main},"&:active":{backgroundColor:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}}}}))},6296:function(e,t,n){n.d(t,{D:function(){return o},w:function(){return c}});var r=n(2804),i=n(7480),o=(0,r.cn)({key:"menuStyleState"+(0,i.x0)(),default:{background:"transparent",boxShadow:"none"}}),c=(0,r.cn)({key:"menuInterSectingState"+(0,i.x0)(),default:!1})},8767:function(e,t,n){n.d(t,{W:function(){return D}});var r=n(4667),i=n(7294),o=n(2804),c=n(6311),a=n(4065),u=n(558),s=n(6296),l=n(4331),h=[{title:l.k.root.title,path:l.k.root.path},{title:l.k.about.title,path:l.k.about.path},{title:"Menu",children:[l.q.regular,l.q.takeOut,l.q.lunch]},l.k.contact],d=n(9023),p=n(7480),f=(0,o.cn)({key:"activeLaptopMenu"+(0,p.x0)(),default:l.k.root}),x=n(5893),j=function(){var e=(0,o.sJ)(s.w);return(0,x.jsx)(a.Z,{children:(0,x.jsxs)(u.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",direction:"row",sx:{height:64},children:[(0,x.jsx)(u.ZP,{spacing:2,direction:"row",alignItems:"center",item:!0,container:!0,sx:{width:"auto"},children:(0,x.jsx)(m,{})}),e&&(0,x.jsx)(u.ZP,{item:!0,sx:{height:"85%",width:100,position:"relative"},children:(0,x.jsx)(d.TR,{})})]})})},m=function(){var e=(0,o.FV)(f),t=(0,c.Z)(e,2),n=t[0],r=t[1];return(0,x.jsx)(x.Fragment,{children:h.map((function(e,t){var o=e.title===n.title;return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(u.ZP,{item:!0,children:(0,x.jsx)(d.Ss,{active:o,title:e.title.toUpperCase(),to:e.path,onClick:function(){return r(e)},childrenItems:e.children})}),t!==h.length-1&&(0,x.jsx)(u.ZP,{item:!0,children:(0,x.jsx)(d.e_,{})})]},e.title)}))})},g=n(4386),b=n(6867),v=n(2318),y=n(576),Z=n(9334),k=n(8619),O=n(2658),P=n(326),w=n(7720),S=n(1664),C=n(1680),I=n(6571),R=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=(0,o.sJ)(s.w);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g.Z,{children:(0,x.jsxs)(u.ZP,{sx:{height:56},container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,x.jsx)(u.ZP,{item:!0,children:(0,x.jsx)(b.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:1},onClick:function(){return n(!0)},children:(0,x.jsx)(P.Z,{})})}),r&&(0,x.jsx)(u.ZP,{item:!0,p:.5,sx:{height:"90%",width:80,position:"relative"},children:(0,x.jsx)(d.TR,{})})]})}),(0,x.jsx)(v.ZP,{anchor:"left",open:t,onClose:function(){return n(!1)},children:(0,x.jsx)(u.ZP,{container:!0,direction:"column",sx:{width:200},children:(0,x.jsx)(M,{})})})]})},M=function(){var e=function(e){var t=e.menuItem;return(0,x.jsx)(S.default,{href:t.path,passHref:!0,children:(0,x.jsx)(y.ZP,{button:!0,children:(0,x.jsx)(Z.Z,{primary:t.title,sx:{textAlign:"center"}})})})},t=function(e){var t=e.menuItem,n=(0,i.useState)(!0),r=n[0],o=n[1];return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(k.Z,{onClick:function(){return o((function(e){return!e}))},children:(0,x.jsxs)(u.ZP,{container:!0,justifyContent:"center",alignItems:"center",children:[(0,x.jsx)(O.Z,{my:.5,lineHeight:1.5,display:"inline-block",children:t.title}),r?(0,x.jsx)(C.Z,{}):(0,x.jsx)(I.Z,{})]})}),r&&(0,x.jsx)(w.Z,{}),r&&t.children.map((function(e,n){var r,i=n!==t.children.length-1;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(k.Z,{sx:{backgroundColor:"grey.100"},children:(0,x.jsx)(S.default,{href:null!==(r=e.path)&&void 0!==r?r:"",passHref:!0,children:(0,x.jsx)(Z.Z,{primary:e.title,sx:{textAlign:"center"}})})},e.title),i&&(0,x.jsx)(w.Z,{})]})}))]})},n=function(n){return n.children?(0,x.jsx)(t,{menuItem:n}):(0,x.jsx)(e,{menuItem:n})};return(0,x.jsx)(x.Fragment,{children:h.map((function(e,t){var r=t!==h.length-1;return(0,x.jsxs)(i.Fragment,{children:[n(e),r&&(0,x.jsx)(w.Z,{})]},e.title)}))})},F=n(317),D=function(){var e=(0,o.sJ)(r.p),t=(e.isLaptop,e.isMobile);return(0,F.u)(),t?(0,x.jsx)(R,{}):(0,x.jsx)(j,{})}},317:function(e,t,n){n.d(t,{u:function(){return c}});var r=n(6296),i=n(7294),o=n(2804),c=function(){var e=(0,i.useRef)(null),t=(0,i.useRef)(),n=(0,o.Zl)(r.D),c=(0,o.Zl)(r.w),a=(0,i.useRef)(!1);return(0,i.useEffect)((function(){return e.current&&(t.current=new IntersectionObserver((function(e){e[0].isIntersecting||a.current?(n({background:"transparent"}),c(!1)):(n({background:"white",boxShadow:3}),c(!0))})),t.current.observe(e.current)),function(){a.current=!0}}),[c,n]),{observerRef:e}}},4331:function(e,t,n){n.d(t,{k:function(){return r},q:function(){return i}});var r={root:{path:"/",title:"Home",description:"Sushi 101"},about:{path:"/#about",title:"About",description:"About Sushi 101"},contact:{path:"/#contact",title:"Contact",description:"Contact Sushi 101"}},i={regular:{path:"/menu",title:"Dine-In Menu",description:"Sushi 101 Regular Menu"},takeOut:{path:"/takeout",title:"Take-Out Menu",description:"Sushi 101 Take-out Menu"},lunch:{path:"/lunch",title:"Lunch Special",description:"Sushi 101 Lunch Special Menu"}}},1556:function(e,t,n){n.d(t,{gI:function(){return j},sN:function(){return m},ti:function(){return g}});var r=n(2809),i=n(8767),o=n(6296),c=n(317),a=n(558),u=n(2658),s=n(9226),l=n(4065),h=n(2804),d=n(1025),p=n(5893);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(e){var t=e.category;return(0,p.jsx)(a.ZP,{item:!0,xs:12,py:.5,sx:{borderBottom:"1px",borderBottomStyle:"solid",borderBottomColor:d.k.palette.primary.main},children:(0,p.jsx)(u.Z,{color:"primary",variant:"h5",children:t})})},m=function(e){var t=e.description,n=e.price,r=e.title;return(0,p.jsxs)(a.ZP,{item:!0,container:!0,pt:1,direction:"column",children:[(0,p.jsxs)(a.ZP,{item:!0,container:!0,justifyContent:"space-between",sx:{borderBottom:"1px",borderBottomStyle:"dotted",borderBottomColor:d.k.palette.primary.light},children:[(0,p.jsx)(a.ZP,{item:!0,children:(0,p.jsx)(u.Z,{variant:"h6",children:r})}),(0,p.jsx)(a.ZP,{item:!0,children:(0,p.jsx)(u.Z,{variant:"h6",children:n.toFixed(2)})})]}),(0,p.jsx)(a.ZP,{item:!0,children:(0,p.jsx)(u.Z,{variant:"caption",children:t})})]})},g=function(e){var t=e.menuTitle,n=(0,h.sJ)(o.D),r=(0,c.u)().observerRef;return(0,p.jsxs)("div",{style:{position:"relative"},children:[(0,p.jsx)(s.Z,{sx:x({position:"fixed",top:0,left:0,right:0,zIndex:5},n),children:(0,p.jsx)(i.W,{})}),(0,p.jsx)("div",{ref:r}),(0,p.jsx)(s.Z,{sx:{backgroundSize:"cover",height:"240px",width:"100%",backgroundImage:"url('/img/menu/menu-background.webp')",backgroundPosition:"center ",backgroundRepeat:"no-repeat"},children:(0,p.jsx)(a.ZP,{container:!0,justifyContent:"start",alignItems:"flex-end",sx:{height:"100%",pb:2,textShadow:"1px 1px 3px lightgray"},children:(0,p.jsx)(l.Z,{children:(0,p.jsx)(u.Z,{variant:"h4",sx:{color:"primary.main"},children:t})})})})]})}}}]);