"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[1789],{38676:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(83117),a=n(80102),o=n(67294),l=n(86010),c=n(11614),i=n(37559),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",p=["as","id"],m=["as"];function d(e){var t=e.as,n=e.id,m=(0,a.Z)(e,p),d=(0,i.LU)().navbar.hideOnScroll;return n?o.createElement(t,(0,r.Z)({},m,{className:(0,l.Z)("anchor",d?u:s),id:n}),m.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,m)}function f(e){var t=e.as,n=(0,a.Z)(e,m);return"h1"===t?o.createElement("h1",(0,r.Z)({},n,{id:void 0}),n.children):o.createElement(d,(0,r.Z)({as:t},n))}},88584:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(83117),a=n(80102),o=n(67294),l=n(86010),c="iconEdit_dcUD",i=["className"];function s(e){var t=e.className,n=(0,a.Z)(e,i);return o.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(c,t),"aria-hidden":"true"},n),o.createElement("g",null,o.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},84611:function(e,t,n){n.d(t,{Z:function(){return R}});var r=n(83117),a=n(67294),o=n(80102),l=n(32411),c=["mdxType","originalType"];var i=n(86010),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(87410).default,theme:s};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var d=/\r\n|\r|\n/,f=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=m({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=m({},n,{backgroundColor:null}),a};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var v=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=m({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?m({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=m({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?m({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),p(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],p=n[l][o];if("string"==typeof p?(u=l>0?u:["plain"],s=p):(u=y(u,p.type),p.alias&&(u=y(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(d),g=m.length;c.push({types:u,content:m[0]});for(var h=1;h<g;h++)f(c),i.push(c=[]),c.push({types:u,content:m[h]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return f(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),b=v,E=n(37559);var k=n(11614),Z="copyButton_eDfN",N="copyButtonCopied_ljy5",O="copyButtonIcons_W9eQ",T="copyButtonIcon_XEyF",_="copyButtonSuccessIcon_i9w9";function j(e){var t=e.code,n=(0,a.useState)(!1),r=n[0],o=n[1],l=(0,a.useRef)(void 0),c=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(t),o(!0),l.current=window.setTimeout((function(){o(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),a.createElement("button",{type:"button","aria-label":r?(0,k.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,k.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,k.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,i.Z)(Z,"clean-btn",r&&N),onClick:c},a.createElement("span",{className:O,"aria-hidden":"true"},a.createElement("svg",{className:T,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:_,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var w="codeBlockContainer_I0IT",P="codeBlockContent_wNvx",x="codeBlockTitle_BvAR",C="codeBlock_jd64",L="codeBlockStandalone_csWH",B="codeBlockLines_mRuA";function A(e){var t,n=e.children,o=e.className,l=void 0===o?"":o,c=e.metastring,s=e.title,p=e.language,m=(0,E.LU)().prism,d=(0,a.useState)(!1),f=d[0],y=d[1];(0,a.useEffect)((function(){y(!0)}),[]);var g=(0,E.bc)(c)||s,h=(0,E.pJ)();if(a.Children.toArray(n).some((function(e){return(0,a.isValidElement)(e)})))return a.createElement(b,(0,r.Z)({},u,{key:String(f),theme:h,code:"",language:"text"}),(function(e){var t=e.className,r=e.style;return a.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,L,"thin-scrollbar",w,l,E.kM.common.codeBlock),style:r},a.createElement("code",{className:B},n))}));var v=Array.isArray(n)?n.join(""):n,k=null!=(t=null!=p?p:(0,E.Vo)(l))?t:m.defaultLanguage,Z=(0,E.nZ)(v,c,k),N=Z.highlightLines,O=Z.code;return a.createElement(b,(0,r.Z)({},u,{key:String(f),theme:h,code:O,language:null!=k?k:"text"}),(function(e){var t,n=e.className,o=e.style,c=e.tokens,s=e.getLineProps,u=e.getTokenProps;return a.createElement("div",{className:(0,i.Z)(w,l,(t={},t["language-"+k]=k&&!l.includes("language-"+k),t),E.kM.common.codeBlock)},g&&a.createElement("div",{style:o,className:x},g),a.createElement("div",{className:P,style:o},a.createElement("pre",{tabIndex:0,className:(0,i.Z)(n,C,"thin-scrollbar")},a.createElement("code",{className:B},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return N.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},u({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement(j,{code:O})))}))}var D=n(88746);var S="details_BAp3";function I(e){var t=Object.assign({},e);return a.createElement(E.PO,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",S,t.className)}))}var V=n(38676);function H(e){return a.createElement(V.Z,e)}var z="img_E7b_";var R={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,o.Z)(r,c));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(l.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(A,e)},a:function(e){return a.createElement(D.Z,e)},pre:function(e){var t;return a.createElement(A,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(I,(0,r.Z)({},e,{summary:n}),o)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,i.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"contains-task-list_tsSF"))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,i.Z)(t,z))}));var t},h1:function(e){return a.createElement(H,(0,r.Z)({as:"h1"},e))},h2:function(e){return a.createElement(H,(0,r.Z)({as:"h2"},e))},h3:function(e){return a.createElement(H,(0,r.Z)({as:"h3"},e))},h4:function(e){return a.createElement(H,(0,r.Z)({as:"h4"},e))},h5:function(e){return a.createElement(H,(0,r.Z)({as:"h5"},e))},h6:function(e){return a.createElement(H,(0,r.Z)({as:"h6"},e))}}},61428:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(88746);function o(e){var t=e.permalink,n=e.title,o=e.subLabel;return r.createElement(a.Z,{className:"pagination-nav__link",to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},n))}},63865:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),o=n(88746),l="tag_hD8n",c="tagRegular_D6E_",i="tagWithCount_i0QQ";function s(e){var t=e.permalink,n=e.name,s=e.count;return r.createElement(o.Z,{href:t,className:(0,a.Z)(l,s?i:c)},n,s&&r.createElement("span",null,s))}},41921:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),o=n(11614),l=n(63865),c="tags_XVD_",i="tag_JSN8";function s(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return r.createElement("li",{key:n,className:i},r.createElement(l.Z,{name:t,permalink:n}))}))))}},15987:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(76775),o=n(51402),l=n(52426),c=n(11614),i=n(35601);function s(e){var t=e.editUrl,n=(0,a.TH)().pathname,s=(0,i.gA)(),u=(0,l.usePluginData)("docusaurus-plugin-docs-editor"),p=function(){if(s){var e=n;return n.startsWith("/")&&(e=e.slice(1)),"/"+u.route+"/"+e}}();return r.createElement(r.Fragment,null,p&&r.createElement(r.Fragment,null,r.createElement("a",{href:(0,o.Z)(p),target:"_blank",rel:"noreferrer noopener"},"Open in editor"),r.createElement("span",{className:"margin-horiz--sm"},"|")),r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(c.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Open on GitHub")))}},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);