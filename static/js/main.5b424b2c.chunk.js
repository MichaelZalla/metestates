(this.webpackJsonpmetestates=this.webpackJsonpmetestates||[]).push([[0],{54:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var r=n(29),a=n.n(r),i=n(36),c=n(3),s=n.n(c),o=n(44),l=n.n(o),u=(n(54),n(6)),d=n(32),f={ParcelPixelWidth:32,ParcelPixelMinWidth:8,ParcelPixelMaxWidth:80,ParcelBlockWidth:4,ParcelsPerQuery:16,Origin:{x:0,y:0},PanningStep:1},h=function(){var t=c.useState({width:window.innerWidth,height:window.innerHeight}),e=Object(u.a)(t,2),n=e[0],r=e[1];return c.useEffect((function(){function t(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[window.innerWidth,window.innerHeight]),n};function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1/0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return Math.max(e||-1/0,Math.min(t,n||1/0))}var p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{delta:1},n=c.useState(t),r=Object(u.a)(n,2),a=r[0],i=r[1];return c.useEffect((function(){function t(t){var n=w(a+(t.deltaY<0?-1*e.delta:e.delta),e.minValue,e.maxValue);i(n)}return window.addEventListener("wheel",t),function(){window.removeEventListener("wheel",t)}}),[a,i]),a};var v,x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},e=c.useState(t),n=Object(u.a)(e,2),r=n[0],a=n[1];return c.useEffect((function(){function t(t){var e=f.PanningStep,n={x:0,y:0};switch(t.key){case"ArrowUp":n.y=e;break;case"ArrowDown":n.y=-e;break;case"ArrowLeft":n.x=-e;break;case"ArrowRight":n.x=e}a({x:r.x+n.x,y:r.y+n.y})}return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[r,a]),r},y=n(62),g=n(45),P=n(70),b=Object(P.a)(v||(v=Object(g.a)(["\n\tquery GET_PARCEL_BLOCK(\n\t\t$first: Int,\n\t\t$xGte: BigInt\n\t\t$xLt: BigInt\n\t\t$yLte: BigInt\n\t\t$yGt: BigInt\n\t) {\n\t\tparcels(\n\t\t\tfirst: $first,\n\t\t\twhere: { x_gte: $xGte, x_lt: $xLt, y_lte: $yLte, y_gt: $yGt }\n\t\t) {\n\t\t\tid\n\t\t\t# tokenId\n\t\t\towner {\n\t\t\t\taddress\n\t\t\t}\n\t\t\tx\n\t\t\ty\n\t\t\t# data {\n\t\t\t# \tname\n\t\t\t# \tdescription\n\t\t\t# \tipns\n\t\t\t# }\n\t\t\testate {\n\t\t\t\t# id\n\t\t\t\t# tokenId\n\t\t\t\towner {\n\t\t\t\t\taddress\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])));var j=n(16),m=function(t,e,n,r){var a,i,c,s={x:(a=t)-a%f.ParcelBlockWidth,y:(i=e)-i%f.ParcelBlockWidth},o={first:f.ParcelsPerQuery,xGte:s.x,xLt:s.x+f.ParcelBlockWidth,yLte:s.y,yGt:s.y-f.ParcelBlockWidth},l="".concat(s.x,",").concat(s.y);return l in r?c=r[l]:(c=n.query({query:b,errorPolicy:"all",variables:o}),r[l]=c),c},k=function(t){var e=t.size,n=t.parcelBounds,r=t.parcelSize,a=t.selectedParcel,i=t.setSelectedParcel,c=s.a.useRef(null),o=(s.a.useRef(n[0]),s.a.useRef(r),s.a.useState(null)),l=Object(u.a)(o,2),f=l[0],h=l[1],w=Object(y.a)(),p={},v=s.a.useCallback((function(){if(null!==c.current&&null!==f){var t=c.current,i=t.width,s=t.height;f.clearRect(0,0,i,s);for(var o=Math.ceil(e.height/r),l=Math.ceil(e.width/r),d=function(t){for(var e=function(e){var i=n[0],c=e+i.x,s=i.y-t;m(c,s,w,p).then((function(n){var i,o,l=n.data,d=n.error,h=[0,0,0,255];if(n.loading)h=[248,248,255,.4];else if(d)h=[240,128,128,.4];else if(i=null===l||void 0===l?void 0:l.parcels.find((function(t){return!(parseInt(t.x)!==c||parseInt(t.y)!==s)}))){var w="0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce"===(o=function(t){return(t.estate?t.estate:t).owner.address}(i))?[0,0,0,255]:(o=o.slice(2),[parseInt(o.slice(0,12),16)%256,parseInt(o.slice(12,24),16)%256,parseInt(o.slice(24,36),16)%256,255]),p=Object(u.a)(w,4),v=p[0],x=p[1],y=p[2],g=p[3];v/=256,x/=256,y/=256;var P=1-function(t,e){return e&&!1===function(t,e){var n;if(e.estate||t.estate){if(e.estate&&t.estate){if(e.estate.owner.address===t.estate.owner.address)return!0}else if(e.estate){if(e.estate.owner.address===t.owner.address)return!0}else if(e.owner.address===(null===(n=t.estate)||void 0===n?void 0:n.owner.address))return!0}else if(t.owner.address===e.owner.address)return!0;return!1}(t,e)?.05:1}(i,a),b=.3*v+.6*x+.1*y;h=[256*(v+P*(b-v)),256*(x+P*(b-x)),256*(y+P*(b-y)),g]}var j=[e*r,t*r,r,r];f.fillStyle="rgba(".concat(h.join(","),")"),f.fillRect.apply(f,j)}))},i=0;i<l;i++)e(i)},h=0;h<o;h++)d(h)}}),[f,e,r,n[0].x,n[0].y,a]),x=s.a.useCallback((function(t){var e=n[0],a=t.pageX-t.currentTarget.offsetLeft,c=t.pageY-t.currentTarget.offsetTop,s=Math.floor(a/r),o=Math.floor(c/r),l=s+e.x,u=e.y-o;m(l,u,w,p).then((function(t){var e=t.data,n=(t.error,t.loading,null===e||void 0===e?void 0:e.parcels.find((function(t){return!(parseInt(t.x)!==l||parseInt(t.y)!==u)})));i(n||null),v()}))}),[c.current,n,r,i]);return s.a.useEffect((function(){var t,e=c.current;null===e?h(null):(t=e.getContext("2d",{desynchronized:!1,willReadFrequently:!1}),h(t))}),[c.current,h]),s.a.useEffect(v,[f,e,r,n[0].x,n[0].y]),Object(j.jsx)("nav",{className:"CanvasParcelGrid","data-testid":"CanvasParcelGrid",children:Object(j.jsx)("canvas",{ref:c,width:e.width,height:e.height,onMouseMove:function(t){return x(t)},className:Object(d.a)({position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:-1,backgroundColor:"black",width:"".concat(e.width,"px"),height:"".concat(e.height,"px"),"&:hover":{cursor:"pointer"}})})})};n(57);var O=function(){var t=h(),e=p(f.ParcelPixelWidth,{delta:4,minValue:f.ParcelPixelMinWidth,maxValue:f.ParcelPixelMaxWidth}),n=x(f.Origin),r=[n,{x:n.x+Math.sqrt(f.ParcelsPerQuery),y:n.y-Math.sqrt(f.ParcelsPerQuery)}],a=s.a.useState(null),i=Object(u.a)(a,2),c=i[0],o=i[1];return Object(j.jsx)("main",{className:Object(d.a)({color:"white"}),children:Object(j.jsx)(k,{size:t,parcelBounds:r,parcelSize:e,selectedParcel:c,setSelectedParcel:o})})},L=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),i(t),c(t)}))},I=n(46),M=n.n(I),B=n(71),E=n(69),S=n(68);function W(){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(a.a.mark((function t(){var e,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new B.a({typePolicies:{Parcel:{keyFields:["x","y"]}}}),M.a.config({name:"metestates",storeName:"keyvaluepairs",description:"Local storage for the Metestates web app."}),n=new E.a({uri:"https://api.thegraph.com/subgraphs/name/decentraland/marketplace",cache:e}),t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(){return($=Object(i.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W();case 2:e=t.sent,l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(S.a,{client:e,children:Object(j.jsx)(O,{})})}),document.getElementById("root")),L();case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){$.apply(this,arguments)}()}},[[58,1,2]]]);
//# sourceMappingURL=main.5b424b2c.chunk.js.map