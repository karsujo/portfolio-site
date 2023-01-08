(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[10],{101:function(e,n,t){},140:function(e,n,t){var o={"./About":[92,0,3],"./About.jsx":[92,0,3],"./Education":[93,9,4],"./Education.jsx":[93,9,4],"./Experience":[94,0,1,5],"./Experience.jsx":[94,0,1,5],"./FallbackSpinner":[30],"./FallbackSpinner.jsx":[30],"./Header":[88,8],"./Header.jsx":[88,8],"./Home":[47],"./Home.jsx":[47],"./NavBar":[43],"./NavBar.jsx":[43],"./Projects":[95,0,2],"./Projects.jsx":[95,0,2],"./Skills":[96,0,7],"./Skills.jsx":[96,0,7],"./Social":[48],"./Social.jsx":[48],"./ThemeToggler":[44],"./ThemeToggler.jsx":[44],"./projects/ProjectCard":[91,0,6],"./projects/ProjectCard.jsx":[91,0,6]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id=140,e.exports=r},141:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(17),i=t.n(c),a=(t(101),t(90),t(102),t(32)),l=t(20),s=t(77),u=t(50),d=t(9),f=t(10),j=t(30),h=t(43),b=t(47),v=t(24),m=t(1);var x,p=function(){var e=Object(o.useState)(null),n=Object(d.a)(e,2),c=n[0],i=n[1];return Object(o.useEffect)((function(){fetch(v.a.routes,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return e}))}),[]),Object(m.jsxs)("div",{className:"MainApp",children:[Object(m.jsx)(h.default,{}),Object(m.jsx)("main",{className:"main",children:Object(m.jsx)(f.c,{children:Object(m.jsxs)(o.Suspense,{fallback:Object(m.jsx)(j.default,{}),children:[Object(m.jsx)(f.a,{exact:!0,path:"/",component:b.default}),c&&c.sections.map((function(e){var n=r.a.lazy((function(){return t(140)("./"+e.component)}));return Object(m.jsx)(f.a,{path:e.path,component:function(){return Object(m.jsx)(n,{header:e.headerTitle})}},e.headerTitle)}))]})})})]})},O=t(34),g=Object(l.c)(x||(x=Object(O.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),k={background:"#fff",color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},C={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"};var y=function(){window.matchMedia=null;var e=Object(s.a)(!0);return Object(m.jsx)(u.a.Provider,{value:{darkMode:e},children:Object(m.jsxs)(l.b,{theme:e.value?C:k,children:[Object(m.jsx)(g,{}),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(a.a,{basename:"/portfolio-site",children:Object(m.jsx)(p,{})})})]})})},S=function(e){e&&e instanceof Function&&t.e(13).then(t.bind(null,170)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),S()},24:function(e,n,t){"use strict";n.a={navbar:"profile/navbar.json",routes:"profile/routes.json",home:"portfolio-site/profile/home.json",social:"portfolio-site/profile/social.json",about:"portfolio-site/profile/about.json",skills:"portfolio-site/profile/skills.json",education:"portfolio-site/profile/education.json",experiences:"portfolio-site/profile/experiences.json",projects:"portfolio-site/profile/projects.json"}},30:function(e,n,t){"use strict";t.r(n);t(0);var o=t(142),r=t(1),c={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};n.default=function(){return Object(r.jsx)("div",{style:c.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},43:function(e,n,t){"use strict";t.r(n);var o,r,c=t(9),i=t(34),a=t(55),l=t(143),s=t(87),u=t(0),d=t(10),f=t(32),j=t(20),h=t(24),b=t(44),v=t(1),m={logoStyle:{width:50,height:40}},x=j.d.a(o||(o=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),p=Object(j.d)(f.b)(r||(r=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),O=Object(d.f)((function(){var e,n,t,o,r,i,d=Object(u.useContext)(j.a),f=Object(u.useState)(null),O=Object(c.a)(f,2),g=O[0],k=O[1],C=Object(u.useState)(!1),y=Object(c.a)(C,2),S=y[0],T=y[1];return Object(u.useEffect)((function(){fetch(h.a.navbar,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return k(e)})).catch((function(e){return e}))}),[]),Object(v.jsx)(a.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:S,children:Object(v.jsxs)(l.a,{children:[(null===g||void 0===g?void 0:g.logo)&&Object(v.jsx)(a.a.Brand,{href:"/",children:Object(v.jsx)("img",{src:null===g||void 0===g||null===(e=g.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==g&&void 0!==g&&null!==(n=g.logo)&&void 0!==n&&n.height&&null!==g&&void 0!==g&&null!==(t=g.logo)&&void 0!==t&&t.width?{height:null===g||void 0===g||null===(o=g.logo)||void 0===o?void 0:o.height,width:null===g||void 0===g||null===(r=g.logo)||void 0===r?void 0:r.width}:m.logoStyle})}),Object(v.jsx)(a.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return T(!S)}}),Object(v.jsxs)(a.a.Collapse,{id:"responsive-navbar-nav",children:[Object(v.jsx)(s.a,{className:"me-auto"}),Object(v.jsx)(s.a,{children:g&&(null===(i=g.sections)||void 0===i?void 0:i.map((function(e,n){return"link"===(null===e||void 0===e?void 0:e.type)?Object(v.jsx)(x,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return T(!1)},className:"navbar__link",theme:d,children:e.title},e.title):Object(v.jsx)(p,{onClick:function(){return T(!1)},exact:0===n,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:d,children:e.title},e.title)})))}),Object(v.jsx)(b.default,{onClick:function(){return T(!1)}})]})]})})}));n.default=O},44:function(e,n,t){"use strict";t.r(n);t(0);var o=t(79),r=t.n(o),c=t(50),i=t(1);function a(e){var n=e.onClick;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(c.a.Consumer,{children:function(e){return Object(i.jsx)("div",{style:{marginBottom:8},children:Object(i.jsx)(r.a,{onChange:function(){return e.darkMode.toggle(),void n()},checked:e.darkMode.value,size:50})})}})})}a.defaultProps={onClick:function(){}},n.default=a},47:function(e,n,t){"use strict";t.r(n);var o=t(9),r=t(0),c=t(84),i=t.n(c),a=t(64),l=t.n(a),s=t(24),u=t(48),d=t(30),f=t(1),j={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};n.default=function(){var e=Object(r.useState)(null),n=Object(o.a)(e,2),t=n[0],c=n[1];return Object(r.useEffect)((function(){fetch(s.a.home,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return e}))}),[]),t?Object(f.jsx)(l.a,{children:Object(f.jsxs)("div",{style:j.mainContainer,children:[Object(f.jsx)("h1",{style:j.nameStyle,children:null===t||void 0===t?void 0:t.name}),Object(f.jsxs)("div",{style:{flexDirection:"row"},children:[Object(f.jsx)("h2",{style:j.inlineChild,children:"I'm\xa0"}),Object(f.jsx)(i.a,{options:{loop:!0,autoStart:!0,strings:null===t||void 0===t?void 0:t.roles}})]}),Object(f.jsx)(u.default,{})]})}):Object(f.jsx)(d.default,{})}},48:function(e,n,t){"use strict";t.r(n);var o=t(9),r=t(0),c=t(85),i=t(20),a=t(24),l=t(1),s={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};n.default=function(){var e=Object(r.useContext)(i.a),n=Object(r.useState)(null),t=Object(o.a)(n,2),u=t[0],d=t[1];return Object(r.useEffect)((function(){fetch(a.a.social,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return e}))}),[]),Object(l.jsx)("div",{className:"social",children:u?u.social.map((function(n){return Object(l.jsx)(c.SocialIcon,{style:s.iconStyle,url:n.href,network:n.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},n.network)})):null})}},50:function(e,n,t){"use strict";var o=t(0),r=t.n(o).a.createContext();n.a=r},90:function(e,n,t){}},[[141,11,12]]]);
//# sourceMappingURL=main.7d1b7c08.chunk.js.map