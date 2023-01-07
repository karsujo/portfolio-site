(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[6],{148:function(e,a,t){"use strict";var c=t(9),r=t(2),n=t(3),s=t(4),o=t.n(s),i=t(0),b=t(7),d=t(1),l=["as","bsPrefix","className"],j=["className"];var f=i.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,s=Object(n.a)(e,l);t=Object(b.c)(t,"col");var i=Object(b.a)(),d=Object(b.b)(),j=[],f=[];return i.forEach((function(e){var a,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(a=n.span,c=n.offset,r=n.order):a=n;var o=e!==d?"-".concat(e):"";a&&j.push(!0===a?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(a)),null!=r&&f.push("order".concat(o,"-").concat(r)),null!=c&&f.push("offset".concat(o,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[c].concat(j,f))}),{as:a,bsPrefix:t,spans:j}]}(e),s=Object(c.a)(t,2),i=s[0],f=i.className,O=Object(n.a)(i,j),u=s[1],p=u.as,x=void 0===p?"div":p,m=u.bsPrefix,v=u.spans;return Object(d.jsx)(x,Object(r.a)(Object(r.a)({},O),{},{ref:a,className:o()(f,!v.length&&m)}))}));f.displayName="Col",a.a=f},166:function(e,a,t){"use strict";var c=t(2),r=t(9),n=t(3),s=t(4),o=t.n(s),i=t(0),b=t(39),d=t(7),l=t(1),j=["as","bsPrefix","variant","size","active","className"],f=i.forwardRef((function(e,a){var t=e.as,s=e.bsPrefix,i=e.variant,f=e.size,O=e.active,u=e.className,p=Object(n.a)(e,j),x=Object(d.c)(s,"btn"),m=Object(b.b)(Object(c.a)({tagName:t},p)),v=Object(r.a)(m,2),y=v[0],g=v[1].tagName;return Object(l.jsx)(g,Object(c.a)(Object(c.a)(Object(c.a)({},y),p),{},{ref:a,className:o()(u,x,O&&"active",i&&"".concat(x,"-").concat(i),f&&"".concat(x,"-").concat(f),p.href&&p.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=f},91:function(e,a,t){"use strict";t.r(a);var c=t(2),r=t(0),n=t(148),s=t(3),o=t(4),i=t.n(o),b=t(7),d=t(25),l=t(67),j=t(1),f=["bsPrefix","className","variant","as"],O=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.variant,o=e.as,d=void 0===o?"img":o,l=Object(s.a)(e,f),O=Object(b.c)(t,"card-img");return Object(j.jsx)(d,Object(c.a)({ref:a,className:i()(n?"".concat(O,"-").concat(n):O,r)},l))}));O.displayName="CardImg";var u=O,p=t(68),x=["bsPrefix","className","as"],m=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,d=void 0===o?"div":o,l=Object(s.a)(e,x),f=Object(b.c)(t,"card-header"),O=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return Object(j.jsx)(p.a.Provider,{value:O,children:Object(j.jsx)(d,Object(c.a)(Object(c.a)({ref:a},l),{},{className:i()(n,f)}))})}));m.displayName="CardHeader";var v=m,y=["bsPrefix","className","bg","text","border","body","children","as"],g=Object(l.a)("h5"),h=Object(l.a)("h6"),N=Object(d.a)("card-body"),P=Object(d.a)("card-title",{Component:g}),S=Object(d.a)("card-subtitle",{Component:h}),C=Object(d.a)("card-link",{Component:"a"}),k=Object(d.a)("card-text",{Component:"p"}),w=Object(d.a)("card-footer"),B=Object(d.a)("card-img-overlay"),T=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.bg,o=e.text,d=e.border,l=e.body,f=e.children,O=e.as,u=void 0===O?"div":O,p=Object(s.a)(e,y),x=Object(b.c)(t,"card");return Object(j.jsx)(u,Object(c.a)(Object(c.a)({ref:a},p),{},{className:i()(r,x,n&&"bg-".concat(n),o&&"text-".concat(o),d&&"border-".concat(d)),children:l?Object(j.jsx)(N,{children:f}):f}))}));T.displayName="Card",T.defaultProps={body:!1};var R=Object.assign(T,{Img:u,Title:P,Subtitle:S,Body:N,Link:C,Text:k,Header:v,Footer:w,ImgOverlay:B}),I=t(166),V=["bsPrefix","bg","pill","text","className","as"],z=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bg,n=e.pill,o=e.text,d=e.className,l=e.as,f=void 0===l?"span":l,O=Object(s.a)(e,V),u=Object(b.c)(t,"badge");return Object(j.jsx)(f,Object(c.a)(Object(c.a)({ref:a},O),{},{className:i()(d,u,n&&"rounded-pill",o&&"text-".concat(o),r&&"bg-".concat(r))}))}));z.displayName="Badge",z.defaultProps={bg:"primary",pill:!1};var F=z,H=t(20),J=t(171),L={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};a.default=function(e){var a,t,s=Object(r.useContext)(H.a),o=e.project;return Object(j.jsx)(n.a,{children:Object(j.jsxs)(R,{style:Object(c.a)(Object(c.a)({},L.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[Object(j.jsx)(R.Img,{variant:"top",src:null===o||void 0===o?void 0:o.image}),Object(j.jsxs)(R.Body,{children:[Object(j.jsx)(R.Title,{style:L.cardTitleStyle,children:o.title}),Object(j.jsx)(R.Text,{style:L.cardTextStyle,children:(t=o.bodyText,Object(j.jsx)(J.a,{children:t}))})]}),Object(j.jsx)(R.Body,{children:null===o||void 0===o||null===(a=o.links)||void 0===a?void 0:a.map((function(e){return Object(j.jsx)(I.a,{style:L.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),o.tags&&Object(j.jsx)(R.Footer,{style:{backgroundColor:s.cardFooterBackground},children:o.tags.map((function(e){return Object(j.jsx)(F,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:L.badgeStyle,children:e},e)}))})]})})}}}]);
//# sourceMappingURL=6.35d60a95.chunk.js.map