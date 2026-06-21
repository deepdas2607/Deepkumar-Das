import{r,j as l}from"./threeUtils-CLSgAnG-.js";import{a8 as Oe}from"./interactions-CuK_Qb6V.js";const me={maxVerticalRotationDeg:5,dragSensitivity:20,enlargeTransitionMs:300,segments:35},re=(u,z,A)=>Math.min(Math.max(u,z),A),De=u=>(u%360+360)%360,Ue=u=>((u+180)%360+360)%360-180,fe=(u,z,A)=>{const Y=u.dataset[z]??u.getAttribute(`data-${z}`),X=Y==null?NaN:parseFloat(Y);return Number.isFinite(X)?X:A};function Ve(u,z){const A=Array.from({length:z},(n,a)=>-37+a*2),Y=[-4,-2,0,2,4],X=[-3,-1,1,3,5],D=A.flatMap((n,a)=>(a%2===0?Y:X).map(Q=>({x:n,y:Q,sizeX:2,sizeY:2}))),F=D.length;if(u.length===0)return D.map(n=>({...n,src:"",alt:"",description:""}));const _=u.map(n=>typeof n=="string"?{src:n,alt:"",description:""}:{src:n.src||"",alt:n.alt||"",description:n.description||""}),d=Array.from({length:F},(n,a)=>_[a%_.length]);let C=2654435769;const U=()=>{C=C+2654435769>>>0;let n=C;return n=Math.imul(n^n>>>16,73244475),n=Math.imul(n^n>>>16,73244475),n=n^n>>>16,(n>>>0)/4294967295};for(let n=d.length-1;n>0;n--){const a=Math.floor(U()*(n+1)),M=d[n];d[n]=d[a],d[a]=M}for(let n=1;n<d.length;n++)if(d[n].src===d[n-1].src){for(let a=n+1;a<d.length;a++)if(d[a].src!==d[n-1].src){const M=d[n];d[n]=d[a],d[a]=M;break}}return D.map((n,a)=>({...n,src:d[a].src,alt:d[a].alt,description:d[a].description}))}function Ze(u,z,A,Y,X){const D=360/X/2,F=D*(u+(A-1)/2);return{rotateX:D*(z-(Y-1)/2),rotateY:F}}function He({images:u=[],fit:z=.5,fitBasis:A="auto",minRadius:Y=600,maxRadius:X=1/0,padFactor:D=.25,overlayBlurColor:F="#030412",maxVerticalRotationDeg:_=me.maxVerticalRotationDeg,dragSensitivity:d=me.dragSensitivity,enlargeTransitionMs:C=me.enlargeTransitionMs,segments:U=me.segments,dragDampening:n=2,openedImageWidth:a="420px",openedImageHeight:M="420px",imageBorderRadius:Q="20px",openedImageBorderRadius:S="24px",grayscale:V=!1}){const P=r.useRef(null),se=r.useRef(null),ze=r.useRef(null),oe=r.useRef(null),ae=r.useRef(null),Ae=r.useRef(null),q=r.useRef(null),he=r.useRef(null),L=r.useRef(null),T=r.useRef({x:0,y:0}),ye=r.useRef({x:0,y:0}),G=r.useRef(null),J=r.useRef(!1),ce=r.useRef(!1),Z=r.useRef(!1),H=r.useRef(null),B=r.useRef("mouse"),le=r.useRef(null),W=r.useRef(!1),Ce=r.useRef(0),ge=r.useRef(0),de=r.useRef(!1),Ee=r.useCallback(()=>{de.current||(de.current=!0,document.body.style.overflow="hidden",document.body.style.touchAction="none")},[]),$e=r.useCallback(()=>{var t;de.current&&((t=P.current)==null?void 0:t.getAttribute("data-enlarging"))!=="true"&&(de.current=!1,document.body.style.overflow="",document.body.style.touchAction="")},[]),_e=r.useMemo(()=>Ve(u,U),[u,U]),ue=(t,i)=>{const h=ze.current;h&&(h.style.transform=`translateZ(calc(var(--radius) * -1)) rotateX(${t}deg) rotateY(${i}deg)`)},Te=r.useRef(null);r.useEffect(()=>{const t=P.current;if(!t)return;const i=new ResizeObserver(h=>{var c;const o=h[0].contentRect,p=Math.max(1,o.width),g=Math.max(1,o.height),f=Math.min(p,g),R=Math.max(p,g),k=p/g;let y;switch(A){case"min":y=f;break;case"max":y=R;break;case"width":y=p;break;case"height":y=g;break;default:y=k>=1.3?p:f}let m=y*z;const v=g*1.35;m=Math.min(m,v),m=re(m,Y,X),Te.current=Math.round(m);const s=Math.max(8,Math.round(f*D));t.style.setProperty("--radius",`${Te.current}px`),t.style.setProperty("--viewer-pad",`${s}px`),t.style.setProperty("--overlay-blur-color",F),t.style.setProperty("--tile-radius",Q),t.style.setProperty("--enlarge-radius",S),t.style.setProperty("--image-filter",V?"grayscale(1)":"none"),ue(T.current.x,T.current.y);const w=(c=ae.current)==null?void 0:c.querySelector(".enlarge");if(w&&oe.current&&se.current){const e=oe.current.getBoundingClientRect(),E=se.current.getBoundingClientRect();if(a&&M){const b=document.createElement("div");b.style.cssText=`position: absolute; width: ${a}; height: ${M}; visibility: hidden;`,document.body.appendChild(b);const j=b.getBoundingClientRect();document.body.removeChild(b);const ee=e.left-E.left+(e.width-j.width)/2,ve=e.top-E.top+(e.height-j.height)/2;w.style.left=`${ee}px`,w.style.top=`${ve}px`}else w.style.left=`${e.left-E.left}px`,w.style.top=`${e.top-E.top}px`,w.style.width=`${e.width}px`,w.style.height=`${e.height}px`}});return i.observe(t),()=>i.disconnect()},[z,A,Y,X,D,F,V,Q,S,a,M]),r.useEffect(()=>{ue(T.current.x,T.current.y)},[]);const xe=r.useCallback(()=>{H.current&&(cancelAnimationFrame(H.current),H.current=null)},[]),Pe=r.useCallback((t,i)=>{let o=re(t,-1.4,1.4)*80,p=re(i,-1.4,1.4)*80,g=0;const f=re(n??.6,0,1),R=.94+.055*f,k=.015-.01*f,y=Math.round(90+270*f),m=()=>{if(o*=R,p*=R,Math.abs(o)<k&&Math.abs(p)<k){H.current=null;return}if(++g>y){H.current=null;return}const v=re(T.current.x-p/200,-_,_),s=Ue(T.current.y+o/200);T.current={x:v,y:s},ue(v,s),H.current=requestAnimationFrame(m)};xe(),H.current=requestAnimationFrame(m)},[n,_,xe]);Oe({onDragStart:({event:t})=>{var h,o;if(q.current)return;xe(),B.current=t.pointerType||"mouse",B.current==="touch"&&t.preventDefault(),B.current==="touch"&&Ee(),J.current=!0,ce.current=!1,Z.current=!1,ye.current={...T.current},G.current={x:t.clientX,y:t.clientY};const i=(o=(h=t.target).closest)==null?void 0:o.call(h,".item__image");le.current=i||null},onDrag:({event:t,last:i,velocity:h=[0,0],direction:o=[0,0],movement:p})=>{if(q.current||!J.current||!G.current)return;B.current==="touch"&&t.preventDefault();const g=t.clientX-G.current.x,f=t.clientY-G.current.y;Z.current||g*g+f*f>16&&(Z.current=!0);const R=re(ye.current.x-f/d,-_,_),k=ye.current.y+g/d,y=T.current;if((y.x!==R||y.y!==k)&&(T.current={x:R,y:k},ue(R,k)),i){J.current=!1;let m=!1;if(G.current){const x=t.clientX-G.current.x,b=t.clientY-G.current.y,j=x*x+b*b,ee=B.current==="touch"?10:6;j<=ee*ee&&(m=!0)}let[v,s]=h;const[w,c]=o;let e=v*w,E=s*c;if(!m&&Math.abs(e)<.001&&Math.abs(E)<.001&&Array.isArray(p)){const[x,b]=p;e=x/d*.02,E=b/d*.02}!m&&(Math.abs(e)>.005||Math.abs(E)>.005)&&Pe(e,E),G.current=null,ce.current=!m,m&&le.current&&!q.current&&be(le.current),le.current=null,ce.current&&setTimeout(()=>ce.current=!1,120),Z.current&&(ge.current=performance.now()),Z.current=!1,B.current==="touch"&&$e()}}},{target:se,eventOptions:{passive:!1}}),r.useEffect(()=>{const t=Ae.current;if(!t)return;const i=()=>{var e,E;if(performance.now()-Ce.current<250)return;const o=q.current;if(!o)return;const p=o.parentElement,g=(e=ae.current)==null?void 0:e.querySelector(".enlarge");if(!g)return;L.current&&(L.current.remove(),L.current=null);const f=p.querySelector(".item__image--reference"),R=he.current;if(!R){g.remove(),f&&f.remove(),p.style.setProperty("--rot-y-delta","0deg"),p.style.setProperty("--rot-x-delta","0deg"),o.style.visibility="",o.style.zIndex=0,q.current=null,(E=P.current)==null||E.removeAttribute("data-enlarging"),W.current=!1;return}const k=g.getBoundingClientRect(),y=P.current.getBoundingClientRect(),m={left:R.left-y.left,top:R.top-y.top,width:R.width,height:R.height},v={left:k.left-y.left,top:k.top-y.top,width:k.width,height:k.height},s=document.createElement("div");s.className="enlarge-closing",s.style.cssText=`
        position: absolute;
        left: ${v.left}px;
        top: ${v.top}px;
        width: ${v.width}px;
        height: ${v.height}px;
        z-index: 9999;
        border-radius: ${S};
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,.35);
        transition: all ${C}ms ease-out;
        pointer-events: none;
        margin: 0;
        transform: none;
        filter: ${V?"grayscale(1)":"none"};
      `;const w=g.querySelector("img");if(w){const x=w.cloneNode();x.style.cssText="width: 100%; height: 100%; object-fit: cover;",s.appendChild(x)}g.remove(),P.current.appendChild(s),s.getBoundingClientRect(),requestAnimationFrame(()=>{s.style.left=m.left+"px",s.style.top=m.top+"px",s.style.width=m.width+"px",s.style.height=m.height+"px",s.style.opacity="0"});const c=()=>{s.remove(),he.current=null,f&&f.remove(),p.style.transition="none",o.style.transition="none",p.style.setProperty("--rot-y-delta","0deg"),p.style.setProperty("--rot-x-delta","0deg"),requestAnimationFrame(()=>{var x;o.style.visibility="",o.style.opacity="0",o.style.zIndex=0,q.current=null,(x=P.current)==null||x.removeAttribute("data-enlarging"),requestAnimationFrame(()=>{p.style.transition="",o.style.transition="opacity 300ms ease-out",requestAnimationFrame(()=>{o.style.opacity="1",setTimeout(()=>{var b;o.style.transition="",o.style.opacity="",W.current=!1,!J.current&&((b=P.current)==null?void 0:b.getAttribute("data-enlarging"))!=="true"&&(document.body.style.overflow="",document.body.style.touchAction="")},300)})})})};s.addEventListener("transitionend",c,{once:!0})};t.addEventListener("click",i);const h=o=>{o.key==="Escape"&&i()};return window.addEventListener("keydown",h),()=>{t.removeEventListener("click",i),window.removeEventListener("keydown",h)}},[C,S,V]);const be=t=>{var je,Se,Fe,Me;if(W.current)return;W.current=!0,Ce.current=performance.now(),Ee();const i=t.parentElement;q.current=t,t.setAttribute("data-focused","true");const h=fe(i,"offsetX",0),o=fe(i,"offsetY",0),p=fe(i,"sizeX",2),g=fe(i,"sizeY",2),f=Ze(h,o,p,g,U),R=De(f.rotateY),k=De(T.current.y);let y=-(R+k)%360;y<-180&&(y+=360);const m=-f.rotateX-T.current.x;i.style.setProperty("--rot-y-delta",`${y}deg`),i.style.setProperty("--rot-x-delta",`${m}deg`);const v=document.createElement("div");v.className="item__image item__image--reference opacity-0",v.style.transform=`rotateX(${-f.rotateX}deg) rotateY(${-f.rotateY}deg)`,i.appendChild(v),v.offsetHeight;const s=v.getBoundingClientRect(),w=(je=se.current)==null?void 0:je.getBoundingClientRect(),c=(Se=oe.current)==null?void 0:Se.getBoundingClientRect();if(!w||!c||s.width<=0||s.height<=0){W.current=!1,q.current=null,i.removeChild(v),$e();return}he.current={left:s.left,top:s.top,width:s.width,height:s.height},t.style.visibility="hidden",t.style.zIndex=0;const e=document.createElement("div");e.className="enlarge",e.style.position="absolute",e.style.left=c.left-w.left+"px",e.style.top=c.top-w.top+"px",e.style.width=c.width+"px",e.style.height=c.height+"px",e.style.opacity="0",e.style.zIndex="30",e.style.willChange="transform, opacity",e.style.transformOrigin="top left",e.style.transition=`transform ${C}ms ease, opacity ${C}ms ease`,e.style.borderRadius=S,e.style.overflow="hidden",e.style.boxShadow="0 24px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(92,51,204,0.2)";const E=i.dataset.src||((Fe=t.querySelector("img"))==null?void 0:Fe.src)||"",x=i.dataset.alt||((Me=t.querySelector("img"))==null?void 0:Me.alt)||"",b=i.dataset.description||"",j=document.createElement("img");j.src=E,j.alt=x,j.style.width="100%",j.style.height="100%",j.style.objectFit="cover",j.style.filter=V?"grayscale(1)":"none",e.appendChild(j),ae.current.appendChild(e);const ee=s.left-c.left,ve=s.top-c.top,we=s.width/c.width,Re=s.height/c.height,Le=isFinite(we)&&we>0?we:1,qe=isFinite(Re)&&Re>0?Re:1;if(e.style.transform=`translate(${ee}px, ${ve}px) scale(${Le}, ${qe})`,setTimeout(()=>{var $;e.parentElement&&(e.style.opacity="1",e.style.transform="translate(0px, 0px) scale(1, 1)",($=P.current)==null||$.setAttribute("data-enlarging","true"))},16),a||M){const $=pe=>{if(pe.propertyName!=="transform")return;e.removeEventListener("transitionend",$);const I=e.style.transition;e.style.transition="none";const ie=a||`${c.width}px`,te=M||`${c.height}px`;e.style.width=ie,e.style.height=te;const N=e.getBoundingClientRect();e.style.width=c.width+"px",e.style.height=c.height+"px",e.offsetWidth,e.style.transition=`left ${C}ms ease, top ${C}ms ease, width ${C}ms ease, height ${C}ms ease`;const Ge=c.left-w.left+(c.width-N.width)/2,Ie=c.top-w.top+(c.height-N.height)/2;requestAnimationFrame(()=>{e.style.left=`${Ge}px`,e.style.top=`${Ie}px`,e.style.width=ie,e.style.height=te}),(x||b)&&setTimeout(()=>{L.current&&L.current.remove();const O=document.createElement("div");O.className="dg-description-box",O.style.cssText=`
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              padding: 0;
              z-index: 10;
              opacity: 0;
              transform: translateY(10px);
              transition: opacity 400ms cubic-bezier(0.4,0,0.2,1), transform 400ms cubic-bezier(0.4,0,0.2,1);
              pointer-events: none;
            `;const Ye=document.createElement("div");Ye.style.cssText=`
              position: absolute;
              inset: 0;
              background: linear-gradient(to top, #030412 15%, rgba(3,4,18,0.95) 45%, rgba(3,4,18,0) 100%);
              border-radius: 0 0 ${S} ${S};
            `,O.appendChild(Ye);const ne=document.createElement("div");ne.style.cssText=`
              position: relative;
              padding: 28px 24px 22px 24px;
            `;const Xe=document.createElement("div");if(Xe.style.cssText=`
              width: 36px;
              height: 3px;
              background: linear-gradient(90deg, #5c33cc, #7a57db);
              border-radius: 99px;
              margin-bottom: 12px;
            `,ne.appendChild(Xe),x){const K=document.createElement("p");K.style.cssText=`
                margin: 0 0 8px 0;
                font-size: 16px;
                font-weight: 700;
                color: rgba(255,255,255,0.97);
                font-family: 'Funnel Display', sans-serif;
                letter-spacing: 0.01em;
                line-height: 1.35;
              `,K.textContent=x,ne.appendChild(K)}if(b){const K=document.createElement("p");K.style.cssText=`
                margin: 0;
                font-size: 13px;
                color: rgba(255,255,255,0.6);
                font-family: 'Funnel Display', sans-serif;
                line-height: 1.6;
                font-weight: 400;
              `,K.textContent=b,ne.appendChild(K)}const ke=document.createElement("p");ke.style.cssText=`
              margin: 12px 0 0 0;
              font-size: 11px;
              color: rgba(255,255,255,0.28);
              font-family: 'Funnel Display', sans-serif;
              letter-spacing: 0.05em;
              text-transform: uppercase;
            `,ke.textContent="Click backdrop to close  ·  Esc",ne.appendChild(ke),O.appendChild(ne),e.appendChild(O),L.current=O,requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.style.opacity="1",O.style.transform="translateY(0)"})})},C+80);const Ne=()=>{e.removeEventListener("transitionend",Ne),e.style.transition=I};e.addEventListener("transitionend",Ne,{once:!0})};e.addEventListener("transitionend",$)}else(x||b)&&setTimeout(()=>{L.current&&L.current.remove();const $=document.createElement("div");$.style.cssText=`
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 0;
          z-index: 10; opacity: 0;
          transform: translateY(10px);
          transition: opacity 400ms cubic-bezier(0.4,0,0.2,1), transform 400ms cubic-bezier(0.4,0,0.2,1);
          pointer-events: none;
        `;const pe=document.createElement("div");pe.style.cssText=`
          position: absolute; inset: 0;
          background: linear-gradient(to top, #030412 15%, rgba(3,4,18,0.95) 45%, transparent 100%);
          border-radius: 0 0 ${S} ${S};
        `,$.appendChild(pe);const I=document.createElement("div");I.style.cssText="position:relative;padding:28px 24px 22px 24px;";const ie=document.createElement("div");if(ie.style.cssText="width:36px;height:3px;background:linear-gradient(90deg,#5c33cc,#7a57db);border-radius:99px;margin-bottom:12px;",I.appendChild(ie),x){const N=document.createElement("p");N.style.cssText='margin:0 0 8px 0;font-size:16px;font-weight:700;color:rgba(255,255,255,0.97);font-family:"Funnel Display",sans-serif;letter-spacing:0.01em;line-height:1.35;',N.textContent=x,I.appendChild(N)}if(b){const N=document.createElement("p");N.style.cssText='margin:0;font-size:13px;color:rgba(255,255,255,0.6);font-family:"Funnel Display",sans-serif;line-height:1.6;',N.textContent=b,I.appendChild(N)}const te=document.createElement("p");te.style.cssText='margin:12px 0 0 0;font-size:11px;color:rgba(255,255,255,0.28);font-family:"Funnel Display",sans-serif;letter-spacing:0.05em;text-transform:uppercase;',te.textContent="Click backdrop to close  ·  Esc",I.appendChild(te),$.appendChild(I),e.appendChild($),L.current=$,requestAnimationFrame(()=>requestAnimationFrame(()=>{$.style.opacity="1",$.style.transform="translateY(0)"}))},C+80)};return r.useEffect(()=>()=>{document.body.style.overflow="",document.body.style.touchAction=""},[]),l.jsxs(l.Fragment,{children:[l.jsx("style",{dangerouslySetInnerHTML:{__html:`
    .sphere-root {
      --radius: 520px;
      --viewer-pad: 72px;
      --circ: calc(var(--radius) * 3.14);
      --rot-y: calc((360deg / var(--segments-x)) / 2);
      --rot-x: calc((360deg / var(--segments-y)) / 2);
      --item-width: calc(var(--circ) / var(--segments-x));
      --item-height: calc(var(--circ) / var(--segments-y));
    }
    .sphere-root * { box-sizing: border-box; }
    .sphere, .sphere-item, .item__image { transform-style: preserve-3d; }
    .stage {
      width: 100%; height: 100%;
      display: grid; place-items: center;
      position: absolute; inset: 0; margin: auto;
      perspective: calc(var(--radius) * 2);
      perspective-origin: 50% 50%;
    }
    .sphere {
      transform: translateZ(calc(var(--radius) * -1));
      will-change: transform; position: absolute;
    }
    .sphere-item {
      width: calc(var(--item-width) * var(--item-size-x));
      height: calc(var(--item-height) * var(--item-size-y));
      position: absolute;
      top: -999px; bottom: -999px; left: -999px; right: -999px;
      margin: auto; transform-origin: 50% 50%;
      backface-visibility: hidden; transition: transform 300ms;
      transform: rotateY(calc(var(--rot-y) * (var(--offset-x) + ((var(--item-size-x) - 1) / 2)) + var(--rot-y-delta, 0deg)))
                 rotateX(calc(var(--rot-x) * (var(--offset-y) - ((var(--item-size-y) - 1) / 2)) + var(--rot-x-delta, 0deg)))
                 translateZ(var(--radius));
    }
    .sphere-root[data-enlarging="true"] .scrim {
      opacity: 1 !important; pointer-events: all !important;
    }
    .item__image {
      position: absolute; inset: 10px;
      border-radius: var(--tile-radius, 12px);
      overflow: hidden; cursor: pointer;
      backface-visibility: hidden; -webkit-backface-visibility: hidden;
      transition: transform 300ms; pointer-events: auto;
      -webkit-transform: translateZ(0); transform: translateZ(0);
    }
    .item__image--reference {
      position: absolute; inset: 10px; pointer-events: none;
    }
    .enlarge { position: absolute; }
  `}}),l.jsx("div",{ref:P,className:"sphere-root relative w-full h-full",style:{"--segments-x":U,"--segments-y":U,"--overlay-blur-color":F,"--tile-radius":Q,"--enlarge-radius":S,"--image-filter":V?"grayscale(1)":"none"},children:l.jsxs("main",{ref:se,className:"absolute inset-0 grid place-items-center overflow-hidden select-none bg-transparent",style:{touchAction:"none",WebkitUserSelect:"none"},children:[l.jsx("div",{className:"stage",children:l.jsx("div",{ref:ze,className:"sphere",children:_e.map((t,i)=>l.jsx("div",{className:"sphere-item absolute m-auto","data-src":t.src,"data-alt":t.alt,"data-description":t.description,"data-offset-x":t.x,"data-offset-y":t.y,"data-size-x":t.sizeX,"data-size-y":t.sizeY,style:{"--offset-x":t.x,"--offset-y":t.y,"--item-size-x":t.sizeX,"--item-size-y":t.sizeY,top:"-999px",bottom:"-999px",left:"-999px",right:"-999px"},children:l.jsx("div",{className:"item__image absolute block overflow-hidden cursor-pointer bg-gray-800 transition-transform duration-300",role:"button",tabIndex:0,"aria-label":t.alt||"Open image",onClick:h=>{J.current||Z.current||performance.now()-ge.current<80||W.current||be(h.currentTarget)},onPointerUp:h=>{h.pointerType==="touch"&&(J.current||Z.current||performance.now()-ge.current<80||W.current||be(h.currentTarget))},style:{inset:"10px",borderRadius:`var(--tile-radius, ${Q})`,backfaceVisibility:"hidden"},children:l.jsx("img",{src:t.src,draggable:!1,alt:t.alt,className:"w-full h-full object-cover pointer-events-none",style:{backfaceVisibility:"hidden",filter:`var(--image-filter, ${V?"grayscale(1)":"none"})`}})})},`${t.x},${t.y},${i}`))})}),l.jsx("div",{className:"absolute inset-0 m-auto z-[3] pointer-events-none",style:{backgroundImage:`radial-gradient(circle at center, rgba(3,4,18, 0) 30%, rgba(3,4,18, 0.5) 75%, var(--overlay-blur-color, ${F}) 100%)`}}),l.jsx("div",{className:"absolute inset-0 m-auto z-[3] pointer-events-none",style:{WebkitMaskImage:"radial-gradient(circle at center, rgba(3,4,18,0) 50%, black 100%)",maskImage:"radial-gradient(circle at center, rgba(3,4,18,0) 50%, black 100%)"}}),l.jsx("div",{className:"absolute left-0 right-0 top-0 h-[130px] z-[5] pointer-events-none rotate-180",style:{background:`linear-gradient(to bottom, transparent, var(--overlay-blur-color, ${F}))`}}),l.jsx("div",{className:"absolute left-0 right-0 bottom-0 h-[130px] z-[5] pointer-events-none",style:{background:`linear-gradient(to bottom, transparent, var(--overlay-blur-color, ${F}))`}}),l.jsxs("div",{ref:ae,className:"absolute inset-0 z-20 pointer-events-none flex items-center justify-center",style:{padding:"var(--viewer-pad)"},children:[l.jsx("div",{ref:Ae,className:"scrim absolute inset-0 z-10 pointer-events-none opacity-0 transition-opacity duration-500",style:{background:"rgba(0,0,0,0.55)",backdropFilter:"blur(4px)"}}),l.jsx("div",{ref:oe,className:"viewer-frame h-full aspect-square flex",style:{borderRadius:`var(--enlarge-radius, ${S})`}})]})]})})]})}const We=[{src:"/assets/image/amd.jpeg",alt:"AMD Slingshot '26 — Regional Winners, Mumbai",description:"Showcased my project before a distinguished jury from leading industry organizations and clinched the Regional title from a competitive pool of ~30,000 participants."},{src:"/assets/image/amdfinal.jpeg",alt:"AMD Slingshot '26 Grand Finale — Top 6 Nationally",description:"Represented Mumbai at the Grand Finale, presenting Lifelens to a jury that included CEOs from Swiggy, Almond AI, MobiKwik, and AMD. Finished in the Top 6 out of 10 national finalists — a defining moment of growth and recognition."},{src:"/assets/image/dmce.jpeg",alt:"First Runner-Up — Code-a-Thon 2.0, DMCE",description:"Competed in a rigorous 24-hour hackathon and secured First Runner-Up honours, delivering SocialSense — a full-stack social intelligence platform — under intense time constraints."},{src:"/assets/image/iit.jpeg",alt:"Global Finalist — Convolve 4.0, PAN-IIT Hackathon",description:"Selected for the QdrantDB track and ranked in the Top 10 out of 25,000+ participants across India. Received commendation from the jury for innovative project ideation and seamless Qdrant vector-search integration."},{src:"/assets/image/second.jpeg",alt:"2nd Rank — AI & Data Science Dept. · 9.2+ CGPA",description:"Balanced an active hackathon and event calendar with rigorous academics, achieving 2nd Rank in the AI & Data Science department with a CGPA above 9.2 — a testament to consistent excellence on both fronts."}];function et(){const[u,z]=r.useState(!1);return r.useEffect(()=>{const A=()=>z(window.innerWidth<768);return A(),window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]),l.jsxs("section",{className:"items-start mt-25 md:mt-35 c-space overflow-hidden",id:"gallery",children:[l.jsx("h2",{className:"text-heading",children:"Image Gallery"}),l.jsx("p",{className:"subtext mt-3 max-w-xl",children:"A glimpse of my world — drag to explore, click to know the details behind each image."}),l.jsxs("div",{className:"relative mt-8 sm:mt-12 w-full rounded-2xl sm:rounded-3xl overflow-hidden",style:{height:u?"450px":"600px"},children:[l.jsx("div",{className:"absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none z-10",style:{boxShadow:"inset 0 0 0 1px rgba(92,51,204,0.18), 0 0 60px rgba(92,51,204,0.08)"}}),l.jsx(He,{images:We,overlayBlurColor:"#030412",fit:u?.75:.55,minRadius:u?350:500,openedImageWidth:u?"280px":"460px",openedImageHeight:u?"360px":"520px",imageBorderRadius:"16px",openedImageBorderRadius:"22px",grayscale:!1,dragDampening:2,dragSensitivity:18})]}),l.jsx("p",{className:"text-neutral-500 text-xs text-center mt-4",children:"✦ Drag to rotate · Click an image to expand"})]})}export{et as default};
