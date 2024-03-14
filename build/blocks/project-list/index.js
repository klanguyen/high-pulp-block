(()=>{"use strict";var e,t={8:(e,t,r)=>{const o=window.wp.blocks,l=window.React;var a=r.n(l);window.wp.i18n;const n=window.wp.blockEditor;window.wp.components;class s extends a().Component{render(){const{attributes:e,setAttributes:t}=this.props;return(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(n.PanelColorSettings,{title:"Colors",colorSettings:[{label:"Heading color",value:e.headingColor,onChange:e=>t({headingColor:e})}]}))}}const i=JSON.parse('{"N9":"kn/project-list"}');(0,o.registerBlockType)(i.N9,{edit:function({attributes:e,setAttributes:t}){return(0,l.createElement)("div",{...(0,n.useBlockProps)()},(0,l.createElement)(s,{attributes:e,setAttributes:t}),(0,l.createElement)("div",{className:"project-card"},(0,l.createElement)("img",{className:"project-img",src:"https://placehold.it/1000",alt:"A featured picture"}),(0,l.createElement)("div",{className:"project-info"},(0,l.createElement)("h2",{className:"project-title",style:{color:e.headingColor}},"Popcorn"),(0,l.createElement)("span",{className:"brief-desc"},"A movie library"),(0,l.createElement)("ul",{className:"technologies-list"},(0,l.createElement)("li",{className:"tech-item"},"CSS"),(0,l.createElement)("li",{className:"tech-item"},"HTML"),(0,l.createElement)("li",{className:"tech-item"},"WordPress")))))}})}},r={};function o(e){var l=r[e];if(void 0!==l)return l.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,r,l,a)=>{if(!r){var n=1/0;for(p=0;p<e.length;p++){for(var[r,l,a]=e[p],s=!0,i=0;i<r.length;i++)(!1&a||n>=a)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(s=!1,a<n&&(n=a));if(s){e.splice(p--,1);var c=l();void 0!==c&&(t=c)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[r,l,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={316:0,428:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var l,a,[n,s,i]=r,c=0;if(n.some((t=>0!==e[t]))){for(l in s)o.o(s,l)&&(o.m[l]=s[l]);if(i)var p=i(o)}for(t&&t(r);c<n.length;c++)a=n[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(p)},r=globalThis.webpackChunkhigh_pulp_blocks=globalThis.webpackChunkhigh_pulp_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=o.O(void 0,[428],(()=>o(8)));l=o.O(l)})();