import{B as N,d as E,M as H,F as z,u as Z,g as R,T as F,r as h,h as q,E as U,i as G,O as J,_ as K,j as y,c as Q}from"./index-2228975d.js";import{L as Y}from"./Loader-0f01e4e5.js";class $ extends N{constructor(c,j,d,x){super();const w=[],A=[],B=[],f=new E,O=new H;O.makeRotationFromEuler(d),O.setPosition(j);const k=new H;k.copy(O).invert(),T(),this.setAttribute("position",new z(w,3)),this.setAttribute("normal",new z(A,3)),this.setAttribute("uv",new z(B,2));function T(){let t,o=[];const e=new E,n=new E;if(c.geometry.isGeometry===!0){console.error("THREE.DecalGeometry no longer supports THREE.Geometry. Use BufferGeometry instead.");return}const r=c.geometry,g=r.attributes.position,p=r.attributes.normal;if(r.index!==null){const i=r.index;for(t=0;t<i.count;t++)e.fromBufferAttribute(g,i.getX(t)),n.fromBufferAttribute(p,i.getX(t)),M(o,e,n)}else for(t=0;t<g.count;t++)e.fromBufferAttribute(g,t),n.fromBufferAttribute(p,t),M(o,e,n);for(o=b(o,f.set(1,0,0)),o=b(o,f.set(-1,0,0)),o=b(o,f.set(0,1,0)),o=b(o,f.set(0,-1,0)),o=b(o,f.set(0,0,1)),o=b(o,f.set(0,0,-1)),t=0;t<o.length;t++){const i=o[t];B.push(.5+i.position.x/x.x,.5+i.position.y/x.y),i.position.applyMatrix4(O),w.push(i.position.x,i.position.y,i.position.z),A.push(i.normal.x,i.normal.y,i.normal.z)}}function M(t,o,e){o.applyMatrix4(c.matrixWorld),o.applyMatrix4(k),e.transformDirection(c.matrixWorld),t.push(new I(o.clone(),e.clone()))}function b(t,o){const e=[],n=.5*Math.abs(x.dot(o));for(let r=0;r<t.length;r+=3){let g,p,i,S=0,u,l,m,D;const C=t[r+0].position.dot(o)-n,X=t[r+1].position.dot(o)-n,_=t[r+2].position.dot(o)-n;switch(g=C>0,p=X>0,i=_>0,S=(g?1:0)+(p?1:0)+(i?1:0),S){case 0:{e.push(t[r]),e.push(t[r+1]),e.push(t[r+2]);break}case 1:{if(g&&(u=t[r+1],l=t[r+2],m=a(t[r],u,o,n),D=a(t[r],l,o,n)),p){u=t[r],l=t[r+2],m=a(t[r+1],u,o,n),D=a(t[r+1],l,o,n),e.push(m),e.push(l.clone()),e.push(u.clone()),e.push(l.clone()),e.push(m.clone()),e.push(D);break}i&&(u=t[r],l=t[r+1],m=a(t[r+2],u,o,n),D=a(t[r+2],l,o,n)),e.push(u.clone()),e.push(l.clone()),e.push(m),e.push(D),e.push(m.clone()),e.push(l.clone());break}case 2:{g||(u=t[r].clone(),l=a(u,t[r+1],o,n),m=a(u,t[r+2],o,n),e.push(u),e.push(l),e.push(m)),p||(u=t[r+1].clone(),l=a(u,t[r+2],o,n),m=a(u,t[r],o,n),e.push(u),e.push(l),e.push(m)),i||(u=t[r+2].clone(),l=a(u,t[r],o,n),m=a(u,t[r+1],o,n),e.push(u),e.push(l),e.push(m));break}}}return e}function a(t,o,e,n){const r=t.position.dot(e)-n,g=o.position.dot(e)-n,p=r/(r-g);return new I(new E(t.position.x+p*(o.position.x-t.position.x),t.position.y+p*(o.position.y-t.position.y),t.position.z+p*(o.position.z-t.position.z)),new E(t.normal.x+p*(o.normal.x-t.normal.x),t.normal.y+p*(o.normal.y-t.normal.y),t.normal.z+p*(o.normal.z-t.normal.z)))}}}class I{constructor(c,j){this.position=c,this.normal=j}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}const P=s=>s===Object(s)&&!Array.isArray(s)&&typeof s!="function";function W(s,c){const j=Z(x=>x.gl),d=R(F,P(s)?Object.values(s):s);if(h.useLayoutEffect(()=>{c==null||c(d)},[c]),h.useEffect(()=>{(Array.isArray(d)?d:[d]).forEach(j.initTexture)},[j,d]),P(s)){const x=Object.keys(s),w={};return x.forEach(A=>Object.assign(w,{[A]:d[x.indexOf(A)]})),w}else return d}W.preload=s=>R.preload(F,s);W.clear=s=>R.clear(F,s);function v(s){return Array.isArray(s)}function L(s=[0,0,0]){return v(s)?s:s instanceof E||s instanceof U?[s.x,s.y,s.z]:[s,s,s]}const V=h.forwardRef(function({debug:c,depthTest:j=!1,polygonOffsetFactor:d=-10,map:x,mesh:w,children:A,position:B,rotation:f,scale:O,...k},T){const M=h.useRef(null);h.useImperativeHandle(T,()=>M.current);const b=h.useRef(null);return h.useLayoutEffect(()=>{const a=(w==null?void 0:w.current)||M.current.parent,t=M.current;if(!(a instanceof q))throw new Error('Decal must have a Mesh as parent or specify its "mesh" prop');const o={position:new E,rotation:new U,scale:new E(1,1,1)};if(a){G(o,{position:B,scale:O});const e=a.matrixWorld.clone();if(a.matrixWorld.identity(),!f||typeof f=="number"){const n=new J;n.position.copy(o.position),n.lookAt(a.position),typeof f=="number"&&n.rotateZ(f),G(o,{rotation:n.rotation})}else G(o,{rotation:f});return t.geometry=new $(a,o.position,o.rotation,o.scale),b.current&&(G(b.current,o),b.current.traverse(n=>n.raycast=()=>null)),a.matrixWorld=e,()=>{t.geometry.dispose()}}},[w,...L(B),...L(O),...L(f)]),h.createElement("mesh",K({ref:M,"material-transparent":!0,"material-polygonOffset":!0,"material-polygonOffsetFactor":d,"material-depthTest":j,"material-map":x},k),A,c&&h.createElement("mesh",{ref:b},h.createElement("boxGeometry",null),h.createElement("meshNormalMaterial",{wireframe:!0}),h.createElement("axesHelper",null)))}),tt=s=>{const[c]=W([s.imgUrl]);return y.jsxs(y.Fragment,{children:[y.jsx("ambientLight",{intensity:.5}),y.jsx("directionalLight",{position:[0,0,.05]}),y.jsxs("mesh",{castShadow:!0,recieveShadow:!0,scale:2.75,children:[y.jsx("circleGeometry",{}),y.jsx("meshStandardMaterial",{color:"#3c3350",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),y.jsx(V,{position:[0,0,0],rotation:[2*Math.PI,0,6.25],scale:1.5,map:c})]})]})},rt=({icon:s})=>y.jsx(Q,{frameLoop:"demand",gl:{preserveDrawingBuffer:!0},children:y.jsx(h.Suspense,{fallback:y.jsx(Y,{}),children:y.jsx(tt,{imgUrl:s})})});export{rt as default};
