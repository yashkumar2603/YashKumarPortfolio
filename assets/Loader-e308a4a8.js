import{r as n,u as Pe,aB as be,i as Se,_ as we,a9 as je,c as z,D as re,A as ne,aC as Ee,aD as L,j as I}from"./index-0915417c.js";const R=new z,B=new z,We=new z;function Ce(e,t,r){const s=R.setFromMatrixPosition(e.matrixWorld);s.project(t);const i=r.width/2,a=r.height/2;return[s.x*i+i,-(s.y*a)+a]}function Re(e,t){const r=R.setFromMatrixPosition(e.matrixWorld),s=B.setFromMatrixPosition(t.matrixWorld),i=r.sub(s),a=t.getWorldDirection(We);return i.angleTo(a)>Math.PI/2}function Te(e,t,r,s){const i=R.setFromMatrixPosition(e.matrixWorld),a=i.clone();a.project(t),r.setFromCamera(a,t);const x=r.intersectObjects(s,!0);if(x.length){const b=x[0].distance;return i.distanceTo(r.ray.origin)<b}return!0}function $e(e,t){if(t instanceof re)return t.zoom;if(t instanceof ne){const r=R.setFromMatrixPosition(e.matrixWorld),s=B.setFromMatrixPosition(t.matrixWorld),i=t.fov*Math.PI/180,a=r.distanceTo(s);return 1/(2*Math.tan(i/2)*a)}else return 1}function Oe(e,t,r){if(t instanceof ne||t instanceof re){const s=R.setFromMatrixPosition(e.matrixWorld),i=B.setFromMatrixPosition(t.matrixWorld),a=s.distanceTo(i),x=(r[1]-r[0])/(t.far-t.near),b=r[1]-x*t.far;return Math.round(x*a+b)}}const N=e=>Math.abs(e)<1e-10?0:e;function se(e,t,r=""){let s="matrix3d(";for(let i=0;i!==16;i++)s+=N(t[i]*e.elements[i])+(i!==15?",":")");return r+s}const Fe=(e=>t=>se(t,e))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),He=(e=>(t,r)=>se(t,e(r),"translate(-50%,-50%)"))(e=>[1/e,1/e,1/e,1,-1/e,-1/e,-1/e,-1,1/e,1/e,1/e,1,1,1,1,1]);function Le(e){return e&&typeof e=="object"&&"current"in e}const ze=n.forwardRef(({children:e,eps:t=.001,style:r,className:s,prepend:i,center:a,fullscreen:x,portal:b,distanceFactor:j,sprite:oe=!1,transform:m=!1,occlude:c,onOcclude:Z,castShadow:ie,receiveShadow:ae,material:ce,geometry:_,zIndexRange:T=[16777271,0],calculatePosition:G=Ce,as:le="div",wrapperClass:A,pointerEvents:q="auto",...v},J)=>{const{gl:K,camera:l,scene:Q,size:f,raycaster:ue,events:fe,viewport:de}=Pe(),[u]=n.useState(()=>document.createElement(le)),D=n.useRef(),h=n.useRef(null),U=n.useRef(0),$=n.useRef([0,0]),E=n.useRef(null),V=n.useRef(null),S=(b==null?void 0:b.current)||fe.connected||K.domElement.parentNode,p=n.useRef(null),O=n.useRef(!1),F=n.useMemo(()=>c&&c!=="blending"||Array.isArray(c)&&c.length&&Le(c[0]),[c]);n.useLayoutEffect(()=>{const d=K.domElement;c&&c==="blending"?(d.style.zIndex=`${Math.floor(T[0]/2)}`,d.style.position="absolute",d.style.pointerEvents="none"):(d.style.zIndex=null,d.style.position=null,d.style.pointerEvents=null)},[c]),n.useLayoutEffect(()=>{if(h.current){const d=D.current=be(u);if(Q.updateMatrixWorld(),m)u.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const o=G(h.current,l,f);u.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${o[0]}px,${o[1]}px,0);transform-origin:0 0;`}return S&&(i?S.prepend(u):S.appendChild(u)),()=>{S&&S.removeChild(u),d.unmount()}}},[S,m]),n.useLayoutEffect(()=>{A&&(u.className=A)},[A]);const X=n.useMemo(()=>m?{position:"absolute",top:0,left:0,width:f.width,height:f.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:a?"translate3d(-50%,-50%,0)":"none",...x&&{top:-f.height/2,left:-f.width/2,width:f.width,height:f.height},...r},[r,a,x,f,m]),he=n.useMemo(()=>({position:"absolute",pointerEvents:q}),[q]);n.useLayoutEffect(()=>{if(O.current=!1,m){var d;(d=D.current)==null||d.render(n.createElement("div",{ref:E,style:X},n.createElement("div",{ref:V,style:he},n.createElement("div",{ref:J,className:s,style:r,children:e}))))}else{var o;(o=D.current)==null||o.render(n.createElement("div",{ref:J,style:X,className:s,children:e}))}});const w=n.useRef(!0);Se(d=>{if(h.current){l.updateMatrixWorld(),h.current.updateWorldMatrix(!0,!1);const o=m?$.current:G(h.current,l,f);if(m||Math.abs(U.current-l.zoom)>t||Math.abs($.current[0]-o[0])>t||Math.abs($.current[1]-o[1])>t){const y=Re(h.current,l);let g=!1;F&&(c!=="blending"?g=[Q]:Array.isArray(c)&&(g=c.map(M=>M.current)));const W=w.current;if(g){const M=Te(h.current,l,ue,g);w.current=M&&!y}else w.current=!y;W!==w.current&&(Z?Z(!w.current):u.style.display=w.current?"block":"none");const H=Math.floor(T[0]/2),me=c?F?[T[0],H]:[H-1,0]:T;if(u.style.zIndex=`${Oe(h.current,l,me)}`,m){const[M,ee]=[f.width/2,f.height/2],k=l.projectionMatrix.elements[5]*ee,{isOrthographicCamera:te,top:xe,left:ve,bottom:ge,right:pe}=l,ye=Fe(l.matrixWorldInverse),Me=te?`scale(${k})translate(${N(-(pe+ve)/2)}px,${N((xe+ge)/2)}px)`:`translateZ(${k}px)`;let P=h.current.matrixWorld;oe&&(P=l.matrixWorldInverse.clone().transpose().copyPosition(P).scale(h.current.scale),P.elements[3]=P.elements[7]=P.elements[11]=0,P.elements[15]=1),u.style.width=f.width+"px",u.style.height=f.height+"px",u.style.perspective=te?"":`${k}px`,E.current&&V.current&&(E.current.style.transform=`${Me}${ye}translate(${M}px,${ee}px)`,V.current.style.transform=He(P,1/((j||10)/400)))}else{const M=j===void 0?1:$e(h.current,l)*j;u.style.transform=`translate3d(${o[0]}px,${o[1]}px,0) scale(${M})`}$.current=o,U.current=l.zoom}}if(!F&&p.current&&!O.current)if(m){if(E.current){const o=E.current.children[0];if(o!=null&&o.clientWidth&&o!=null&&o.clientHeight){const{isOrthographicCamera:y}=l;if(y||_)v.scale&&(Array.isArray(v.scale)?v.scale instanceof z?p.current.scale.copy(v.scale.clone().divideScalar(1)):p.current.scale.set(1/v.scale[0],1/v.scale[1],1/v.scale[2]):p.current.scale.setScalar(1/v.scale));else{const g=(j||10)/400,W=o.clientWidth*g,H=o.clientHeight*g;p.current.scale.set(W,H,1)}O.current=!0}}}else{const o=u.children[0];if(o!=null&&o.clientWidth&&o!=null&&o.clientHeight){const y=1/de.factor,g=o.clientWidth*y,W=o.clientHeight*y;p.current.scale.set(g,W,1),O.current=!0}p.current.lookAt(d.camera.position)}});const Y=n.useMemo(()=>({vertexShader:m?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom" 
            is false. 
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;
            
            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[m]);return n.createElement("group",we({},v,{ref:h}),c&&!F&&n.createElement("mesh",{castShadow:ie,receiveShadow:ae,ref:p},_||n.createElement("planeGeometry",null),ce||n.createElement("shaderMaterial",{side:je,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader})))});let C=0;const Ae=Ee(e=>(L.onStart=(t,r,s)=>{e({active:!0,item:t,loaded:r,total:s,progress:(r-C)/(s-C)*100})},L.onLoad=()=>{e({active:!1})},L.onError=t=>e(r=>({errors:[...r.errors,t]})),L.onProgress=(t,r,s)=>{r===s&&(C=s),e({active:!0,item:t,loaded:r,total:s,progress:(r-C)/(s-C)*100||100})},{errors:[],active:!1,progress:0,item:"",loaded:0,total:0})),Ve=()=>{const{progress:e}=Ae();return I.jsxs(ze,{children:[I.jsx("span",{className:"canvas-load"}),I.jsxs("p",{style:{fontSize:18,color:"#f1f1f1",fontWeight:800,marginTop:40},children:[e.toFixed(2),"%"]})]})};export{Ve as L};
