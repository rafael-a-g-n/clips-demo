(self.webpackChunkclips_demo=self.webpackChunkclips_demo||[]).push([[925],{6426:(L,F,l)=>{"use strict";l.r(F),l.d(F,{defaultOptions:()=>S,fetchFile:()=>Q,getCreateFFmpegCore:()=>g});const S={corePath:`https://unpkg.com/@ffmpeg/core@${l(3681).devDependencies["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`};var h=l(5861),e=l(9905),G=l(5922);const O=function(){var N=(0,h.Z)(function*(_,E){(0,e.log)("info",`fetch ${_}`);const v=yield(yield fetch(_)).arrayBuffer();(0,e.log)("info",`${_} file size = ${v.byteLength} bytes`);const R=new Blob([v],{type:E}),U=URL.createObjectURL(R);return(0,e.log)("info",`${_} blob URL = ${U}`),U});return function(E,v){return N.apply(this,arguments)}}(),g=function(){var N=(0,h.Z)(function*({corePath:_,workerPath:E,wasmPath:v}){if(typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope){if("string"!=typeof _)throw Error("corePath should be a string!");const M=new URL(_,"file:///C:/Learning/Angular%20Projects/clips-demo/node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js").href,Z=yield O(M,"application/javascript"),J=yield O(void 0!==v?v:M.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),D=yield O(void 0!==E?E:M.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(w=>{if(globalThis.importScripts(Z),typeof createFFmpegCore>"u")throw Error((0,G.CREATE_FFMPEG_CORE_IS_NOT_DEFINED)(M));(0,e.log)("info","ffmpeg-core.js script loaded"),w({createFFmpegCore,corePath:Z,wasmPath:J,workerPath:D})}):((0,e.log)("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:Z,wasmPath:J,workerPath:D}))}if("string"!=typeof _)throw Error("corePath should be a string!");const R=new URL(_,"file:///C:/Learning/Angular%20Projects/clips-demo/node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js").href,U=yield O(R,"application/javascript"),k=yield O(void 0!==v?v:R.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),Y=yield O(void 0!==E?E:R.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(M=>{const Z=document.createElement("script"),J=()=>{if(Z.removeEventListener("load",J),typeof createFFmpegCore>"u")throw Error((0,G.CREATE_FFMPEG_CORE_IS_NOT_DEFINED)(R));(0,e.log)("info","ffmpeg-core.js script loaded"),M({createFFmpegCore,corePath:U,wasmPath:k,workerPath:Y})};Z.src=U,Z.type="text/javascript",Z.addEventListener("load",J),document.getElementsByTagName("head")[0].appendChild(Z)}):((0,e.log)("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:U,wasmPath:k,workerPath:Y}))});return function(E){return N.apply(this,arguments)}}(),Q=function(){var N=(0,h.Z)(function*(_){let E=_;return typeof _>"u"?new Uint8Array:("string"==typeof _?E=/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(_)?atob(_.split(",")[1]).split("").map(v=>v.charCodeAt(0)):yield(yield fetch(new URL(_,"file:///C:/Learning/Angular%20Projects/clips-demo/node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js").href)).arrayBuffer():(_ instanceof File||_ instanceof Blob)&&(E=yield(N=>new Promise((_,E)=>{const v=new FileReader;v.onload=()=>{_(v.result)},v.onerror=({target:{error:{code:R}}})=>{E(Error(`File could not be read! Code=${R}`))},v.readAsArrayBuffer(N)}))(_)),new Uint8Array(E))});return function(E){return N.apply(this,arguments)}}()},2999:L=>{L.exports={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}}},389:(L,F,l)=>{var T=l(7156).default;const{defaultArgs:x,baseOptions:S}=l(2999),h=l(1192),{defaultOptions:e,getCreateFFmpegCore:G}=l(6426),{version:O}=l(3681),g=Error("ffmpeg.wasm is not ready, make sure you have completed load().");L.exports=(A={})=>{const{log:Q,logger:N,progress:_,...E}={...S,...e,...A};let v=null,R=null,U=null,k=null,Y=!1,M=()=>{},Z=Q,J=_,D=0,w=0,z=!1,H=0;const B=(c,f)=>{M({type:c,message:f}),Z&&console.log(`[${c}] ${f}`)},ne=c=>{const[f,m,y]=c.split(":");return 60*parseFloat(f)*60+60*parseFloat(m)+parseFloat(y)},W=({type:c,message:f})=>{B(c,f),((c,f)=>{if("string"==typeof c)if(c.startsWith("  Duration")){const m=c.split(", ")[0].split(": ")[1],y=ne(m);f({duration:y,ratio:H}),(0===D||D>y)&&(D=y,z=!0)}else if(z&&c.startsWith("    Stream")){const m=c.match(/([\d.]+) fps/);if(m){const y=parseFloat(m[1]);w=D*y}else w=0;z=!1}else if(c.startsWith("frame")||c.startsWith("size")){const m=c.split("time=")[1].split(" ")[0],y=ne(m),$=c.match(/frame=\s*(\d+)/);if(w&&$){const I=parseFloat($[1]);H=Math.min(I/w,1)}else H=y/D;f({ratio:H,time:y})}else c.startsWith("video:")&&(f({ratio:1}),D=0)})(f,J),(c=>{"FFMPEG_END"===c&&null!==U&&(U(),U=null,k=null,Y=!1)})(f)},q=function(){var c=T(function*(){if(B("info","load ffmpeg-core"),null!==v)throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.");{B("info","loading ffmpeg-core");const{createFFmpegCore:f,corePath:m,workerPath:y,wasmPath:$}=yield G(E);v=yield f({mainScriptUrlOrBlob:m,printErr:I=>W({type:"fferr",message:I}),print:I=>W({type:"ffout",message:I}),locateFile:(I,V)=>{if(typeof window<"u"||typeof WorkerGlobalScope<"u"){if(typeof $<"u"&&I.endsWith("ffmpeg-core.wasm"))return $;if(typeof y<"u"&&I.endsWith("ffmpeg-core.worker.js"))return y}return V+I}}),R=v.cwrap(E.mainName||"proxy_main","number",["number","number"]),B("info","ffmpeg-core loaded")}});return function(){return c.apply(this,arguments)}}();return B("info",`use ffmpeg.wasm v${O}`),{setProgress:c=>{J=c},setLogger:c=>{M=c},setLogging:c=>{Z=c},load:q,isLoaded:()=>null!==v,run:(...c)=>{if(B("info",`run ffmpeg command: ${c.join(" ")}`),null===v)throw g;if(Y)throw Error("ffmpeg.wasm can only run one command at a time");return Y=!0,new Promise((f,m)=>{const y=[...x,...c].filter($=>0!==$.length);U=f,k=m,R(...h(v,y))})},exit:()=>{if(null===v)throw g;k&&k("ffmpeg has exited"),Y=!1;try{v.exit(1)}catch(c){B(c.message),k&&k(c)}finally{v=null,R=null,U=null,k=null}},FS:(c,...f)=>{if(B("info",`run FS.${c} ${f.map(m=>"string"==typeof m?m:`<${m.length} bytes binary file>`).join(" ")}`),null===v)throw g;{let m=null;try{m=v.FS[c](...f)}catch{throw Error("readdir"===c?`ffmpeg.FS('readdir', '${f[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:"readFile"===c?`ffmpeg.FS('readFile', '${f[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return m}}}}},5200:(L,F,l)=>{l(7303);const T=l(389),{fetchFile:x}=l(6426);L.exports={createFFmpeg:T,fetchFile:x}},5922:L=>{L.exports={CREATE_FFMPEG_CORE_IS_NOT_DEFINED:l=>`\ncreateFFmpegCore is not defined. ffmpeg.wasm is unable to find createFFmpegCore after loading ffmpeg-core.js from ${l}. Use another URL when calling createFFmpeg():\n\nconst ffmpeg = createFFmpeg({\n  corePath: 'http://localhost:3000/ffmpeg-core.js',\n});\n`}},9905:L=>{let F=!1,l=()=>{};L.exports={logging:F,setLogging:h=>{F=h},setCustomLogger:h=>{l=h},log:(h,e)=>{l({type:h,message:e}),F&&console.log(`[${h}] ${e}`)}}},1192:L=>{L.exports=(F,l)=>{const T=F._malloc(l.length*Uint32Array.BYTES_PER_ELEMENT);return l.forEach((x,S)=>{const h=F.lengthBytesUTF8(x)+1,e=F._malloc(h);F.stringToUTF8(x,e,h),F.setValue(T+Uint32Array.BYTES_PER_ELEMENT*S,e,"i32")}),[l.length,T]}},9925:(L,F,l)=>{"use strict";l.r(F),l.d(F,{VideoModule:()=>Te});var T=l(6814),x=l(8076),S=l(5861),h=l(5619),e=l(5879),G=l(6200),O=l(2855),g=l(6223),A=l(8105),Q=l(1060),N=l(5193);function _(r,a){if(1&r&&(e.TgZ(0,"app-alert",9)(1,"p"),e._uU(2),e.qZA()()),2&r){const t=e.oxw();e.Q6J("color",t.alertColor),e.xp6(2),e.Oqu(t.alertMsg)}}const E=function(r,a){return{"opacity-50":r,"hover:bg-indigo-700":a}};let v=(()=>{class r{constructor(t,o){this.modal=t,this.clipService=o,this.activeClip=null,this.inSubmission=!1,this.showAlert=!1,this.alertColor="blue",this.alertMsg="Please wait! Updating clipt.",this.update=new e.vpe,this.clipID=new g.NI("",{nonNullable:!0}),this.title=new g.NI("",{validators:[g.kI.required,g.kI.minLength(3)],nonNullable:!0}),this.editForm=new g.cw({title:this.title,id:this.clipID})}ngOnInit(){this.modal.register("editClip")}ngOnDestroy(){this.modal.unregister("editClip")}ngOnChanges(){this.activeClip&&(this.inSubmission=!1,this.showAlert=!1,this.clipID.setValue(this.activeClip.docID??""),this.title.setValue(this.activeClip.title))}submit(){var t=this;return(0,S.Z)(function*(){if(t.activeClip){t.inSubmission=!0,t.showAlert=!0,t.alertColor="blue",t.alertMsg="Please wait! Updating clip.";try{yield t.clipService.updateClip(t.clipID.value,t.title.value)}catch{return t.inSubmission=!1,t.alertColor="red",void(t.alertMsg="Something went wrong. Try again later")}t.activeClip.title=t.title.value,t.update.emit(t.activeClip),t.inSubmission=!1,t.alertColor="green",t.alertMsg="Success!"}})()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(O.Z),e.Y36(G.Y))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-edit"]],inputs:{activeClip:"activeClip"},outputs:{update:"update"},features:[e.TTD],decls:12,vars:8,consts:[["modalID","editClip"],[1,"text-2xl","font-bold"],[3,"color",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mt-4"],[1,"block","text-xl","mb-4"],["placeholder","Enter Title",3,"control"],[1,"mt-4","text-right"],["type","submit",1,"inline-flex","justify-center","py-2","px-4","border","border-transparent","shadow-sm","rounded-md","text-white","bg-indigo-600","focus:outline-none",3,"disabled","ngClass"],[3,"color"]],template:function(t,o){1&t&&(e.TgZ(0,"app-modal",0)(1,"p",1),e._uU(2,"Edit Video"),e.qZA(),e.YNc(3,_,3,2,"app-alert",2),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return o.submit()}),e.TgZ(5,"div",4)(6,"label",5),e._uU(7,"Title"),e.qZA(),e._UZ(8,"app-input",6),e.qZA(),e.TgZ(9,"div",7)(10,"button",8),e._uU(11," Update "),e.qZA()()()()),2&t&&(e.xp6(3),e.Q6J("ngIf",o.showAlert),e.xp6(1),e.Q6J("formGroup",o.editForm),e.xp6(4),e.Q6J("control",o.title),e.xp6(2),e.Q6J("disabled",o.inSubmission)("ngClass",e.WLB(5,E,o.inSubmission,!o.inSubmission)))},dependencies:[T.mk,T.O5,A.z,Q.a,N.w,g._Y,g.JL,g.sg]}),r})();const R=function(r){return["/","clip",r]};function U(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"div",10)(1,"a",11),e._UZ(2,"img",12),e.qZA(),e.TgZ(3,"div",13)(4,"a",14),e._uU(5),e.qZA(),e.TgZ(6,"a",15),e.NdJ("click",function(p){const j=e.CHM(t).$implicit,P=e.oxw();return e.KtG(P.copyToClipboard(p,j.docID))}),e._uU(7," Copy Link "),e.qZA()(),e.TgZ(8,"div",16)(9,"a",17),e.NdJ("click",function(p){const j=e.CHM(t).$implicit,P=e.oxw();return e.KtG(P.openModal(p,j))}),e.TgZ(10,"span",18),e._uU(11,"build"),e.qZA()(),e.TgZ(12,"a",19),e.NdJ("click",function(p){const j=e.CHM(t).$implicit,P=e.oxw();return e.KtG(P.deleteClip(p,j))}),e.TgZ(13,"span",18),e._uU(14,"delete"),e.qZA()()()()}if(2&r){const t=a.$implicit;e.xp6(2),e.Q6J("src",t.screenshotURL,e.LSH),e.xp6(2),e.Q6J("routerLink",e.VKq(3,R,t.docID)),e.xp6(1),e.hij(" ",t.title," ")}}let k=(()=>{class r{constructor(t,o,p,C){this.router=t,this.route=o,this.clipService=p,this.modal=C,this.videoOrder="1",this.clips=[],this.activeClip=null,this.sort$=new h.X(this.videoOrder)}ngOnInit(){this.route.queryParams.subscribe(t=>{this.videoOrder="2"===t.sort?t.sort:"1",this.sort$.next(this.videoOrder)}),this.clipService.getUserClips(this.sort$).subscribe(t=>{this.clips=[],t.forEach(o=>{this.clips.push({docID:o.id,...o.data()})})})}sort(t){const{value:o}=t.target;this.router.navigate([],{relativeTo:this.route,queryParams:{sort:o}})}openModal(t,o){t.preventDefault(),this.activeClip=o,this.modal.toggleModal("editClip")}update(t){this.clips.forEach((o,p)=>{o.docID==t.docID&&(this.clips[p].title=t.title)})}deleteClip(t,o){t.preventDefault(),this.clipService.deleteClip(o),this.clips.forEach((p,C)=>{p.docID==o.docID&&this.clips.splice(C,1)})}copyToClipboard(t,o){return(0,S.Z)(function*(){if(t.preventDefault(),!o)return;const p=`${location.origin}/clip/${o}`;yield navigator.clipboard.writeText(p),alert("Link Copied")})()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(x.F0),e.Y36(x.gz),e.Y36(G.Y),e.Y36(O.Z))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-manage"]],decls:13,vars:4,consts:[[1,"container","mx-auto","my-8","bg-secondary","p-6"],[1,"rounded","relative","flex","justify-between"],["routerLink","/upload",1,"bg-indigo-400","text-white","py-4","px-10","text-xl"],[1,"text-black","px-8","text-xl","outline-none","appearance-none",3,"change"],["value","1",3,"selected"],["value","2",3,"selected"],[1,"container","mx-auto","my-8"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-4"],["class","mt-6 rounded-tl-2xl rounded-br-2xl shadow-xl bg-secondary flex flex-col justify-start",4,"ngFor","ngForOf"],[3,"activeClip","update"],[1,"mt-6","rounded-tl-2xl","rounded-br-2xl","shadow-xl","bg-secondary","flex","flex-col","justify-start"],["href","#"],["crossorigin","",1,"card-img-top","rounded-tl-2xl","w-full",3,"src"],[1,"p-6","text-2xl"],[1,"font-bold","mb-2",3,"routerLink"],["href","#",1,"bg-gray-400","text-white","px-2","py-1","ml-2","text-sm","rounded",3,"click"],[1,"flex","text-center","text-2xl","bg-gray-800","p-2","mt-auto"],["href","#",1,"flex-1","p-2","border-right","border-r-2","border-gray-700","transition","hover:text-indigo-400",3,"click"],[1,"material-icons","text-base"],["href","#",1,"flex-1","p-2","rounded-br-2xl","transition","hover:text-indigo-400",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"a",2),e._uU(3,"Upload Videos"),e.qZA(),e.TgZ(4,"select",3),e.NdJ("change",function(C){return o.sort(C)}),e.TgZ(5,"option",4),e._uU(6,"Recent Uploads"),e.qZA(),e.TgZ(7,"option",5),e._uU(8,"Oldest Uploads"),e.qZA()()()(),e.TgZ(9,"div",6)(10,"div",7),e.YNc(11,U,15,5,"div",8),e.qZA()(),e.TgZ(12,"app-edit",9),e.NdJ("update",function(C){return o.update(C)}),e.qZA()),2&t&&(e.xp6(5),e.Q6J("selected","1"===o.videoOrder),e.xp6(2),e.Q6J("selected","2"===o.videoOrder),e.xp6(4),e.Q6J("ngForOf",o.clips),e.xp6(1),e.Q6J("activeClip",o.activeClip))},dependencies:[T.sg,x.rH,g.YN,g.Kr,v]}),r})();const M={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let Z;const J=new Uint8Array(16);function D(){if(!Z&&(Z=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Z))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Z(J)}const w=[];for(let r=0;r<256;++r)w.push((r+256).toString(16).slice(1));const ne=function B(r,a,t){if(M.randomUUID&&!a&&!r)return M.randomUUID();const o=(r=r||{}).random||(r.rng||D)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,a){t=t||0;for(let p=0;p<16;++p)a[t+p]=o[p];return a}return function z(r,a=0){return(w[r[a+0]]+w[r[a+1]]+w[r[a+2]]+w[r[a+3]]+"-"+w[r[a+4]]+w[r[a+5]]+"-"+w[r[a+6]]+w[r[a+7]]+"-"+w[r[a+8]]+w[r[a+9]]+"-"+w[r[a+10]]+w[r[a+11]]+w[r[a+12]]+w[r[a+13]]+w[r[a+14]]+w[r[a+15]]).toLowerCase()}(o)};var K=l(4664),W=l(7142),q=l(2572),X=l(9315),i=l(6240),n=l(6796),s=l(5200);let d=(()=>{class r{constructor(){this.isRunning=!1,this.isReady=!1,this.ffmpeg=(0,s.createFFmpeg)({log:!0})}init(){var t=this;return(0,S.Z)(function*(){t.isReady||(yield t.ffmpeg.load(),t.isReady=!0)})()}getScreenshots(t){var o=this;return(0,S.Z)(function*(){o.isRunning=!0;const p=yield(0,s.fetchFile)(t);o.ffmpeg.FS("writeFile",t.name,p);const C=[1,5,9],j=[];C.forEach(oe=>{j.push("-i",t.name,"-ss",`00:00:0${oe}`,"-frames:v","1","-filter:v","scale=510:-1",`output_0${oe}.png`)}),yield o.ffmpeg.run(...j);const P=[];return C.forEach(oe=>{const ee=o.ffmpeg.FS("readFile",`output_0${oe}.png`),te=new Blob([ee.buffer],{type:"image/png"}),re=URL.createObjectURL(te);P.push(re)}),o.isRunning=!1,P})()}blobFromURL(t){return(0,S.Z)(function*(){return yield(yield fetch(t)).blob()})()}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),u=(()=>{class r{handleEvent(t){t.preventDefault()}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275dir=e.lG2({type:r,selectors:[["","app-event-blocker",""]],hostBindings:function(t,o){1&t&&e.NdJ("drop",function(C){return o.handleEvent(C)})("dragover",function(C){return o.handleEvent(C)})}}),r})();var b=l(6593);let c=(()=>{class r{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustUrl(t)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(b.H7,16))},r.\u0275pipe=e.Yjl({name:"safeURL",type:r,pure:!0}),r})();function f(r,a){1&r&&(e.TgZ(0,"span",5),e._uU(1," settings "),e.qZA())}function m(r,a){1&r&&(e.TgZ(0,"span",5),e._uU(1," autorenew "),e.qZA())}const y=function(r){return{"bg-indigo-400 border-indigo-400 border-solid":r}};function $(r,a){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",8),e.NdJ("dragend",function(){e.CHM(t);const p=e.oxw(2);return e.KtG(p.isDragOver=!1)})("dragover",function(){e.CHM(t);const p=e.oxw(2);return e.KtG(p.isDragOver=!0)})("dragenter",function(){e.CHM(t);const p=e.oxw(2);return e.KtG(p.isDragOver=!0)})("dragleave",function(){e.CHM(t);const p=e.oxw(2);return e.KtG(p.isDragOver=!1)})("mouseleave",function(){e.CHM(t);const p=e.oxw(2);return e.KtG(p.isDragOver=!1)})("drop",function(p){e.CHM(t);const C=e.oxw(2);return e.KtG(C.storeFile(p))}),e.TgZ(2,"h5"),e._uU(3,"Drop your file here"),e.qZA(),e.TgZ(4,"h5"),e._uU(5,"mp4 only! Max size 25Mb"),e.qZA(),e.YNc(6,m,2,0,"span",9),e.qZA(),e.TgZ(7,"input",10),e.NdJ("change",function(p){e.CHM(t);const C=e.oxw(2);return e.KtG(C.storeFile(p))}),e.qZA(),e.BQk()}if(2&r){const t=e.oxw(2);e.xp6(1),e.Q6J("ngClass",e.VKq(2,y,t.isDragOver)),e.xp6(5),e.Q6J("ngIf",t.ffmpegService.isRunning)}}function I(r,a){if(1&r&&(e.TgZ(0,"p"),e._uU(1),e.ALo(2,"percent"),e.qZA()),2&r){const t=e.oxw(4);e.xp6(1),e.Oqu(e.lcZ(2,1,t.percentage))}}function V(r,a){if(1&r&&(e.TgZ(0,"app-alert",21)(1,"p"),e._uU(2),e.qZA(),e.YNc(3,I,3,3,"p",22),e.qZA()),2&r){const t=e.oxw(3);e.Q6J("color",t.alertColor),e.xp6(2),e.Oqu(t.alertMsg),e.xp6(1),e.Q6J("ngIf",t.showPercentage)}}const de=function(r,a){return{"border-green-400":r,"border-transparent":a}};function fe(r,a){if(1&r){const t=e.EpF();e.TgZ(0,"div",23),e.NdJ("click",function(){const C=e.CHM(t).$implicit,j=e.oxw(3);return e.KtG(j.selectedScreenshot=C)}),e._UZ(1,"img",24),e.ALo(2,"safeURL"),e.qZA()}if(2&r){const t=a.$implicit,o=e.oxw(3);e.Q6J("ngClass",e.WLB(4,de,t===o.selectedScreenshot,t!==o.selectedScreenshot)),e.xp6(1),e.Q6J("src",e.lcZ(2,2,t),e.LSH)}}const ge=function(r,a){return{"opacity-50":r,"hover:bg-indigo-700":a}};function me(r,a){if(1&r){const t=e.EpF();e.YNc(0,V,4,3,"app-alert",11),e.TgZ(1,"form",12),e.NdJ("ngSubmit",function(){e.CHM(t);const p=e.oxw(2);return e.KtG(p.uploadFile())}),e.TgZ(2,"h2",13),e._uU(3,"Select a Thumbnail"),e.qZA(),e.TgZ(4,"div",14),e.YNc(5,fe,3,7,"div",15),e.qZA(),e.TgZ(6,"div",16)(7,"label",17),e._uU(8,"Title"),e.qZA(),e._UZ(9,"app-input",18),e.qZA(),e.TgZ(10,"div",19)(11,"button",20),e._uU(12," Publish "),e.qZA()()()}if(2&r){const t=e.oxw(2);e.Q6J("ngIf",t.showAlert),e.xp6(1),e.Q6J("formGroup",t.uploadForm),e.xp6(4),e.Q6J("ngForOf",t.screenshots),e.xp6(4),e.Q6J("control",t.title),e.xp6(2),e.Q6J("disabled",t.inSubmission)("ngClass",e.WLB(6,ge,t.inSubmission,!t.inSubmission))}}function he(r,a){if(1&r&&(e.YNc(0,$,8,4,"ng-container",6),e.YNc(1,me,13,9,"ng-template",null,7,e.W1O)),2&r){const t=e.MAs(2),o=e.oxw();e.Q6J("ngIf",!o.nextStep)("ngIfElse",t)}}let ve=(()=>{class r{constructor(t,o,p,C,j){this.storage=t,this.auth=o,this.clipsService=p,this.router=C,this.ffmpegService=j,this.isDragOver=!1,this.file=null,this.nextStep=!1,this.showAlert=!1,this.alertColor="blue",this.alertMsg="Please wait! Your clip is being uploaded.",this.inSubmission=!1,this.percentage=0,this.showPercentage=!1,this.user=null,this.screenshots=[],this.selectedScreenshot="",this.title=new g.NI("",{validators:[g.kI.required,g.kI.minLength(3)],nonNullable:!0}),this.uploadForm=new g.cw({title:this.title}),o.user.subscribe(P=>this.user=P),this.ffmpegService.init()}ngOnDestroy(){this.task?.cancel()}storeFile(t){var o=this;return(0,S.Z)(function*(){o.ffmpegService.isRunning||(o.isDragOver=!1,o.file=t.dataTransfer?t.dataTransfer?.files.item(0)??null:t.target.files?.item(0)??null,o.file&&"video/mp4"===o.file.type&&(o.screenshots=yield o.ffmpegService.getScreenshots(o.file),o.selectedScreenshot=o.screenshots[0],o.title.setValue(o.file.name.replace(/\.[^/.]+$/,"")),o.nextStep=!0))})()}uploadFile(){var t=this;return(0,S.Z)(function*(){t.uploadForm.disable(),t.showAlert=!0,t.alertColor="blue",t.alertMsg="Please wait! Your clip is being uploaded.",t.inSubmission=!0,t.showPercentage=!0;const o=ne(),p=`clips/${o}.mp4`,C=yield t.ffmpegService.blobFromURL(t.selectedScreenshot),j=`screenshots/${o}.png`;t.task=t.storage.upload(p,t.file);const P=t.storage.ref(p);t.screenshotTask=t.storage.upload(j,C);const oe=t.storage.ref(j);var ee;(0,q.a)([t.task.percentageChanges(),t.screenshotTask.percentageChanges()]).subscribe(ee=>{const[te,re]=ee;te&&re&&(t.percentage=(te+re)/200)}),(0,X.D)([t.task.snapshotChanges(),t.screenshotTask.snapshotChanges()]).pipe((0,K.w)(()=>(0,X.D)([P.getDownloadURL(),oe.getDownloadURL()]))).subscribe({next:(ee=(0,S.Z)(function*(te){const[re,ce]=te,pe={uid:t.user?.uid,displayName:t.user?.displayName,title:t.title.value,fileName:`${o}.mp4`,url:re,screenshotURL:ce,screenshotFileName:`${o}.png`,timestamp:W.Z.firestore.FieldValue.serverTimestamp()},Ue=yield t.clipsService.createClip(pe);console.log(pe),t.alertColor="green",t.alertMsg="Success! your clip is ready to be shared",t.showPercentage=!1,setTimeout(()=>{t.router.navigate(["clip",Ue.id])},1e3)}),function(re){return ee.apply(this,arguments)}),error:ee=>{t.uploadForm.enable(),t.alertColor="red",t.alertMsg="Upload failed! Game Over.",t.inSubmission=!0,t.showPercentage=!1,console.log(ee)}})})()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(i.Q1),e.Y36(n.zQ),e.Y36(G.Y),e.Y36(x.F0),e.Y36(d))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-upload"]],decls:8,vars:2,consts:[[1,"container","mx-auto","my-8","bg-secondary","p-6"],[1,"rounded","relative","flex","flex-col"],[1,"font-bold","mb-6"],["class","material-icons text-center text-6xl p-8 animate-spin",4,"ngIf","ngIfElse"],["uploadEditorCtr",""],[1,"material-icons","text-center","text-6xl","p-8","animate-spin"],[4,"ngIf","ngIfElse"],["uploadFormCtr",""],["app-event-blocker","",1,"w-full","px-10","py-40","rounded","text-center","cursor-pointer","border","border-dashed","border-gray-400","transition","duration-500","hover:text-white","hover:bg-indigo-400","hover:border-indigo-400","hover:border-solid","text-xl",3,"ngClass","dragend","dragover","dragenter","dragleave","mouseleave","drop"],["class","material-icons text-center text-6xl p-8 animate-spin",4,"ngIf"],["type","file",1,"mt-4",3,"change"],[3,"color",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mb-4","text-xl"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-4"],["class","border-8 cursor-pointer",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"mt-4"],[1,"block","text-xl","mb-4"],["placeholder","Enter Title",3,"control"],[1,"mt-4","text-right"],["type","submit",1,"inline-flex","justify-center","py-2","px-4","border","border-transparent","shadow-sm","rounded-md","text-white","bg-indigo-600","focus:outline-none",3,"disabled","ngClass"],[3,"color"],[4,"ngIf"],[1,"border-8","cursor-pointer",3,"ngClass","click"],[3,"src"]],template:function(t,o){if(1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._uU(3,"Upload Video"),e.qZA(),e.ynx(4),e.YNc(5,f,2,0,"span",3),e.BQk(),e.YNc(6,he,3,2,"ng-template",null,4,e.W1O),e.qZA()()),2&t){const p=e.MAs(7);e.xp6(5),e.Q6J("ngIf",!o.ffmpegService.isReady)("ngIfElse",p)}},dependencies:[T.mk,T.sg,T.O5,Q.a,N.w,u,g._Y,g.JL,g.sg,T.Zx,c]}),r})();var ye=l(8407),se=l(7398),be=l(8180);const ae=(0,se.U)(r=>!!r);let le=(()=>{class r{constructor(t,o){this.router=t,this.auth=o,this.canActivate=(p,C)=>{const j=p.data.authGuardPipe||(()=>ae);return this.auth.user.pipe((0,be.q)(1),j(p,C),(0,se.U)(P=>"boolean"==typeof P?P:Array.isArray(P)?this.router.createUrlTree(P):this.router.parseUrl(P)))}}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(x.F0),e.LFG(n.zQ))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"any"}),r})();const ue=()=>("/",(0,ye.z)(ae,(0,se.U)(a=>a||"/"))),xe=[{path:"manage",component:k,data:{authOnly:!0,authGuardPipe:ue},canActivate:[le]},{path:"upload",component:ve,data:{authOnly:!0,authGuardPipe:ue},canActivate:[le]}];let Ce=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[x.Bz.forChild(xe),x.Bz]}),r})();var Fe=l(6208);let Te=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[T.ez,Ce,Fe.m,g.UX]}),r})()},7303:L=>{var F=function(l){"use strict";var h,T=Object.prototype,x=T.hasOwnProperty,S=Object.defineProperty||function(i,n,s){i[n]=s.value},e="function"==typeof Symbol?Symbol:{},G=e.iterator||"@@iterator",O=e.asyncIterator||"@@asyncIterator",g=e.toStringTag||"@@toStringTag";function A(i,n,s){return Object.defineProperty(i,n,{value:s,enumerable:!0,configurable:!0,writable:!0}),i[n]}try{A({},"")}catch{A=function(n,s,d){return n[s]=d}}function Q(i,n,s,d){var b=Object.create((n&&n.prototype instanceof k?n:k).prototype),c=new W(d||[]);return S(b,"_invoke",{value:ie(i,s,c)}),b}function N(i,n,s){try{return{type:"normal",arg:i.call(n,s)}}catch(d){return{type:"throw",arg:d}}}l.wrap=Q;var _="suspendedStart",E="suspendedYield",v="executing",R="completed",U={};function k(){}function Y(){}function M(){}var Z={};A(Z,G,function(){return this});var J=Object.getPrototypeOf,D=J&&J(J(q([])));D&&D!==T&&x.call(D,G)&&(Z=D);var w=M.prototype=k.prototype=Object.create(Z);function z(i){["next","throw","return"].forEach(function(n){A(i,n,function(s){return this._invoke(n,s)})})}function H(i,n){function s(b,c,f,m){var y=N(i[b],i,c);if("throw"!==y.type){var $=y.arg,I=$.value;return I&&"object"==typeof I&&x.call(I,"__await")?n.resolve(I.__await).then(function(V){s("next",V,f,m)},function(V){s("throw",V,f,m)}):n.resolve(I).then(function(V){$.value=V,f($)},function(V){return s("throw",V,f,m)})}m(y.arg)}var d;S(this,"_invoke",{value:function u(b,c){function f(){return new n(function(m,y){s(b,c,m,y)})}return d=d?d.then(f,f):f()}})}function ie(i,n,s){var d=_;return function(b,c){if(d===v)throw new Error("Generator is already running");if(d===R){if("throw"===b)throw c;return X()}for(s.method=b,s.arg=c;;){var f=s.delegate;if(f){var m=B(f,s);if(m){if(m===U)continue;return m}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(d===_)throw d=R,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);d=v;var y=N(i,n,s);if("normal"===y.type){if(d=s.done?R:E,y.arg===U)continue;return{value:y.arg,done:s.done}}"throw"===y.type&&(d=R,s.method="throw",s.arg=y.arg)}}}function B(i,n){var s=n.method,d=i.iterator[s];if(d===h)return n.delegate=null,"throw"===s&&i.iterator.return&&(n.method="return",n.arg=h,B(i,n),"throw"===n.method)||"return"!==s&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+s+"' method")),U;var u=N(d,i.iterator,n.arg);if("throw"===u.type)return n.method="throw",n.arg=u.arg,n.delegate=null,U;var b=u.arg;return b?b.done?(n[i.resultName]=b.value,n.next=i.nextLoc,"return"!==n.method&&(n.method="next",n.arg=h),n.delegate=null,U):b:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,U)}function ne(i){var n={tryLoc:i[0]};1 in i&&(n.catchLoc=i[1]),2 in i&&(n.finallyLoc=i[2],n.afterLoc=i[3]),this.tryEntries.push(n)}function K(i){var n=i.completion||{};n.type="normal",delete n.arg,i.completion=n}function W(i){this.tryEntries=[{tryLoc:"root"}],i.forEach(ne,this),this.reset(!0)}function q(i){if(i){var n=i[G];if(n)return n.call(i);if("function"==typeof i.next)return i;if(!isNaN(i.length)){var s=-1,d=function u(){for(;++s<i.length;)if(x.call(i,s))return u.value=i[s],u.done=!1,u;return u.value=h,u.done=!0,u};return d.next=d}}return{next:X}}function X(){return{value:h,done:!0}}return Y.prototype=M,S(w,"constructor",{value:M,configurable:!0}),S(M,"constructor",{value:Y,configurable:!0}),Y.displayName=A(M,g,"GeneratorFunction"),l.isGeneratorFunction=function(i){var n="function"==typeof i&&i.constructor;return!!n&&(n===Y||"GeneratorFunction"===(n.displayName||n.name))},l.mark=function(i){return Object.setPrototypeOf?Object.setPrototypeOf(i,M):(i.__proto__=M,A(i,g,"GeneratorFunction")),i.prototype=Object.create(w),i},l.awrap=function(i){return{__await:i}},z(H.prototype),A(H.prototype,O,function(){return this}),l.AsyncIterator=H,l.async=function(i,n,s,d,u){void 0===u&&(u=Promise);var b=new H(Q(i,n,s,d),u);return l.isGeneratorFunction(n)?b:b.next().then(function(c){return c.done?c.value:b.next()})},z(w),A(w,g,"Generator"),A(w,G,function(){return this}),A(w,"toString",function(){return"[object Generator]"}),l.keys=function(i){var n=Object(i),s=[];for(var d in n)s.push(d);return s.reverse(),function u(){for(;s.length;){var b=s.pop();if(b in n)return u.value=b,u.done=!1,u}return u.done=!0,u}},l.values=q,W.prototype={constructor:W,reset:function(i){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(K),!i)for(var n in this)"t"===n.charAt(0)&&x.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=h)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(i){if(this.done)throw i;var n=this;function s(m,y){return b.type="throw",b.arg=i,n.next=m,y&&(n.method="next",n.arg=h),!!y}for(var d=this.tryEntries.length-1;d>=0;--d){var u=this.tryEntries[d],b=u.completion;if("root"===u.tryLoc)return s("end");if(u.tryLoc<=this.prev){var c=x.call(u,"catchLoc"),f=x.call(u,"finallyLoc");if(c&&f){if(this.prev<u.catchLoc)return s(u.catchLoc,!0);if(this.prev<u.finallyLoc)return s(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return s(u.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return s(u.finallyLoc)}}}},abrupt:function(i,n){for(var s=this.tryEntries.length-1;s>=0;--s){var d=this.tryEntries[s];if(d.tryLoc<=this.prev&&x.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var u=d;break}}u&&("break"===i||"continue"===i)&&u.tryLoc<=n&&n<=u.finallyLoc&&(u=null);var b=u?u.completion:{};return b.type=i,b.arg=n,u?(this.method="next",this.next=u.finallyLoc,U):this.complete(b)},complete:function(i,n){if("throw"===i.type)throw i.arg;return"break"===i.type||"continue"===i.type?this.next=i.arg:"return"===i.type?(this.rval=this.arg=i.arg,this.method="return",this.next="end"):"normal"===i.type&&n&&(this.next=n),U},finish:function(i){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.finallyLoc===i)return this.complete(s.completion,s.afterLoc),K(s),U}},catch:function(i){for(var n=this.tryEntries.length-1;n>=0;--n){var s=this.tryEntries[n];if(s.tryLoc===i){var d=s.completion;if("throw"===d.type){var u=d.arg;K(s)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(i,n,s){return this.delegate={iterator:q(i),resultName:n,nextLoc:s},"next"===this.method&&(this.arg=h),U}},l}(L.exports);try{regeneratorRuntime=F}catch{"object"==typeof globalThis?globalThis.regeneratorRuntime=F:Function("r","regeneratorRuntime = r")(F)}},7156:L=>{function F(T,x,S,h,e,G,O){try{var g=T[G](O),A=g.value}catch(Q){return void S(Q)}g.done?x(A):Promise.resolve(A).then(h,e)}L.exports=function l(T){return function(){var x=this,S=arguments;return new Promise(function(h,e){var G=T.apply(x,S);function O(A){F(G,h,e,O,g,"next",A)}function g(A){F(G,h,e,O,g,"throw",A)}O(void 0)})}},L.exports.__esModule=!0,L.exports.default=L.exports},3681:L=>{"use strict";L.exports=JSON.parse('{"name":"@ffmpeg/ffmpeg","version":"0.11.6","description":"FFmpeg WebAssembly version","main":"src/index.js","types":"src/index.d.ts","directories":{"example":"examples"},"scripts":{"start":"node scripts/server.js","start:worker":"node scripts/worker-server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","build:worker":"rimraf dist && webpack --config scripts/webpack.config.worker.prod.js","prepublishOnly":"npm run build","lint":"eslint src","wait":"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node node_modules/mocha/bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"repository":{"type":"git","url":"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},"keywords":["ffmpeg","WebAssembly","video"],"author":"Jerome Wu <jeromewus@gmail.com>","license":"MIT","bugs":{"url":"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},"engines":{"node":">=12.16.1"},"homepage":"https://github.com/ffmpegwasm/ffmpeg.wasm#readme","dependencies":{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},"devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.11.0","@types/emscripten":"^1.39.4","babel-eslint":"^10.1.0","babel-loader":"^8.1.0","chai":"^4.2.0","cors":"^2.8.5","eslint":"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1","express":"^4.17.1","mocha":"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0","webpack":"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}}')}}]);