(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7839:function(e,t,a){Promise.resolve().then(a.bind(a,4374))},4374:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return page}});var s=a(7437);async function updateGoogleSpreadsheet(e){try{let t=await fetch("https://script.google.com/macros/s/AKfycbzkPu9mFosYhPNC_G9bHt9Jzn7LSEXXK24e9hQqY42o8bQZ6eRzmiYFHuUVzCttC9HtIA/exec",{method:"POST",body:JSON.stringify(e)}),a=await t.json();if(console.debug("res: ",a,", response: ",t),!a||!a.success)throw Error("invalid response");return!0}catch(e){console.error("Error updating data:",e)}return!1}async function fetchDataFromGoogleAppsScript(){try{let e=await fetch("https://script.google.com/macros/s/AKfycbzkPu9mFosYhPNC_G9bHt9Jzn7LSEXXK24e9hQqY42o8bQZ6eRzmiYFHuUVzCttC9HtIA/exec"),t=await e.json(),a=Array.isArray(t)?t.filter(isPost):[];return a}catch(e){console.error("Error fetching data:",e)}return[]}function isPost(e){return isOptionalBoolean(e.asiste)&&isOptionalBoolean(e.celiaco)&&isOptionalBoolean(e.vegetariano)&&!isNaN(e.familia)&&"string"==typeof e.nombre}function isOptionalBoolean(e){return"string"==typeof e&&(!e||["si","no"].includes(e))}var l=a(2265),app_useData=function(){let[e,t]=(0,l.useState)(!1),[a,s]=(0,l.useState)(!1),[n,i]=(0,l.useState)(!0),[o,r]=(0,l.useState)([]);(0,l.useEffect)(()=>{!async function(){let e=await fetchDataFromGoogleAppsScript();r(e),i(!1)}()},[]);let c=(0,l.useCallback)(async e=>{i(!0);let a=await updateGoogleSpreadsheet(e);a?s(!0):t(!0),i(!1)},[]);return{loading:n,success:a,error:e,data:o,save:c,setSuccess:s}},n=a(9135),i=a.n(n),components_Loading=function(){let[e,t]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let e=setInterval(()=>{t(e=>e<100?e+2:e)},1e3);return()=>{e&&(clearInterval(e),e=null)}},[]),(0,s.jsxs)("div",{className:"text-black w-full h-full flex flex-col justify-center gap-8 text-center relative",children:[(0,s.jsx)("p",{className:"text-lg font-['LibreBaskerville'] bg-gray-300 p-2 w-fit pl-20 pr-20 ml-auto mr-auto",children:"Cargando"}),(0,s.jsx)("img",{src:"/img/loading.png",className:"w-[50px] h-[50px] ".concat(i()["rotating-image"]," ml-auto mr-auto")}),(0,s.jsx)("div",{style:{minWidth:"".concat(e,"%")},className:"w-fit h-[5px] bg-gray-400"}),(0,s.jsx)("p",{className:"text-sm font-['LibreBaskerville'",children:"Pronto vas a poder continuar confirmando tu asistencia al cumplea\xf1os de Martu"})]})},components_Martina=function(){return(0,s.jsx)("div",{className:"w-full",children:(0,s.jsx)("div",{className:"relative ml-auto mr-auto w-[118px] h-[101px] bg-cover bg-no-repeat bg-[url('../assets/img/15.png')]",children:(0,s.jsxs)("div",{className:"absolute bottom-[-0.2em] left-[-0.6em] font-custom text-6xl font-['ChopinScript']",children:[(0,s.jsx)("span",{className:"font-['ChopinScript']",children:"M"}),"artina"]})})})},components_Welcome=function(e){let{setInNextScreen:t}=e;return(0,s.jsxs)("div",{className:"text-black w-full h-full flex flex-col justify-center gap-8 text-center",children:[(0,s.jsx)(components_Martina,{}),(0,s.jsx)("p",{className:"text-lg font-['LibreBaskerville']",children:"\xa1Te invito a festejar mi cumplea\xf1os!"}),(0,s.jsxs)("div",{className:"grid grid-cols-2 ml-6 mr-6",children:[(0,s.jsxs)("div",{className:"border-l-[1px] border-l-black",children:[(0,s.jsx)("p",{className:"text-2xl font-['LibreBaskerville'] font-light",children:"15"}),(0,s.jsx)("p",{className:"text-xl font-['LibreBaskerville'] font-bold",children:"Diciembre"})]}),(0,s.jsxs)("div",{className:"border-l-[1px] border-l-black border-r-[1px] border-r-black",children:[(0,s.jsx)("p",{className:"text-2xl font-['LibreBaskerville'] font-light",children:"21"}),(0,s.jsx)("p",{className:"text-xl font-['LibreBaskerville'] font-bold",children:"Horas"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"text-lg font-['LibreBaskerville'] flex flex-row justify-center gap-2",children:["Av. D\xedaz V\xe9lez 1497"," ",(0,s.jsx)("a",{href:"https://maps.app.goo.gl/TPcKnZ4SgEgY7viN8",target:"_blank",children:(0,s.jsx)("img",{src:"/img/google-maps.png",className:"w-[25px] h-[25px]"})})]}),(0,s.jsx)("p",{className:"text-lg font-['LibreBaskerville']",children:"Isili Recepciones"})]}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{onClick:()=>t(!0),className:"text-lg font-['LibreBaskerville'] bg-gray-300 border-green-700 border-[2px] p-2",children:"\xa1Click para confirmar asistencia!"})})]})},o=a(5510),components_AutoComplete=function(e){let{data:t,setSelected:a,selected:l,setConfirming:n}=e;return(0,s.jsxs)("div",{className:"text-black w-full h-full flex flex-col justify-center gap-8 text-center relative",children:[(0,s.jsx)("p",{className:"text-4xl font-['ChopinScript'] mb-8",children:"Confirmar asistencia"}),(0,s.jsxs)("div",{className:" flex flex-col gap-2 items-start pl-2 pr-2",children:[(0,s.jsx)("p",{className:"text-lg font-['LibreBaskerville']",children:"Escrib\xed y seleccion\xe1 tu nombre:"}),!!t.length&&(0,s.jsx)(o.ZP,{className:"basic-single w-full text-left font-['LibreBaskerville']",placeholder:"",onChange:e=>a((null==e?void 0:e.value)||""),styles:{input:e=>({...e,minWidth:"200px"}),menu:e=>({...e,color:"black"})},options:t.map(e=>({value:e.nombre,label:e.nombre}))})]}),l&&(0,s.jsx)("button",{className:"p-2 pl-4 pr-4 font-['LibreBaskerville'] text-2xl bg-gray-300 w-fit ml-auto mr-auto",onClick:()=>n(!0),children:"SIGUIENTE"}),(0,s.jsx)("div",{className:"absolute bottom-10 ml-auto mr-auto left-0 right-0",children:(0,s.jsx)(components_Martina,{})})]})},components_PeopleList=function(e){let{family:t,toggleValue:a,touched:l,confirm:n}=e;return(0,s.jsxs)("div",{className:"text-black w-full h-full flex flex-col justify-center gap-4 text-center relative",children:[(0,s.jsx)("p",{className:"text-4xl font-['ChopinScript'] mb-4",children:"Confirmar asistencia"}),(0,s.jsx)("p",{className:"text-sm text-left font-['LibreBaskerville']",children:"Seleccion\xe1 tus condiciones alimentarias y asistencia:"}),(0,s.jsx)("div",{className:"flex flex-col justify-start gap-4 max-h-[30%] mb-4 overflow-auto mt-4",children:t.map((e,t)=>(0,s.jsxs)("div",{className:"text-left",children:[(0,s.jsx)("p",{className:"p-2 border-2 inline-block w-full max-w-[65%] font-['LibreBaskerville'] text-sm ".concat("si"===e.asiste?"border-green-700":"border-gray-200","\n                    ").concat("si"===e.asiste?"bg-gray-300":"bg-gray-200","\n                    "),children:e.nombre}),(0,s.jsx)("img",{src:"si"===e.asiste?"/img/selected.png":"/img/not-selected.png",className:"w-[30px] h-[30px] inline-block ml-2",onClick:()=>a("asiste",e)}),"si"===e.asiste&&(0,s.jsx)("img",{src:"si"===e.vegetariano?"/img/veggie-selected.png":"/img/veggie-not-selected.png",className:"w-[25px] h-[30px] inline-block ml-2 ".concat("si"===e.vegetariano?"border-b-[2px] border-b-red-700 pb-1":""),onClick:()=>a("vegetariano",e)}),"si"===e.asiste&&(0,s.jsx)("img",{src:"si"===e.celiaco?"/img/sintac-selected.png":"/img/sintac-not-selected.png",className:"w-[30px] h-[30px] inline-block ml-2 ".concat("si"===e.celiaco?"border-b-[2px] border-b-red-700 pb-1":""),onClick:()=>a("celiaco",e)})]},"".concat(e.nombre,"-").concat(t)))}),(0,s.jsx)("button",{disabled:!l,className:"p-2 pl-4 pr-4 font-['LibreBaskerville'] text-2xl bg-gray-300 w-fit ml-auto mr-auto ".concat(l?"":"text-gray-400"),onClick:n,children:"CONFIRMAR"}),(0,s.jsx)("div",{className:"absolute bottom-10 ml-auto mr-auto left-0 right-0",children:(0,s.jsx)(components_Martina,{})})]})},components_End=function(e){let{success:t,error:a}=e;return(0,s.jsxs)("div",{className:"text-black w-full h-full flex flex-col justify-center gap-8 text-center relative",children:[(0,s.jsx)("p",{className:"text-6xl font-['ChopinScript'] mb-8",children:t?"Felicitaciones":"Disculpas"}),(0,s.jsx)("p",{className:"text-xl font-['LibreBaskerville'] mb-8 w-[250px] text-center ml-auto mr-auto",children:t?"Ya confirmaste todo para los 15 de Martu":"Hubo un problema al intentar guardar los datos, por favor mandale un mensaje de whatsapp a Gise"}),(0,s.jsx)("div",{className:"bg-gray-300 ml-auto mr-auto relative w-[300px] h-[30px]",children:(0,s.jsx)("p",{className:"absolute text-5xl font-['ChopinScript'] left-0 right-0 mr-auto ml-auto bottom-0",children:"Te esperamos"})}),(0,s.jsxs)("div",{className:"mt-8",children:[(0,s.jsxs)("p",{className:"text-lg font-['LibreBaskerville'] flex flex-row justify-center gap-2",children:["Av. D\xedaz V\xe9lez 1497"," ",(0,s.jsx)("a",{href:"https://maps.app.goo.gl/TPcKnZ4SgEgY7viN8",target:"_blank",children:(0,s.jsx)("img",{src:"/img/google-maps.png",className:"w-[25px] h-[25px]"})})]}),(0,s.jsx)("p",{className:"text-lg font-['LibreBaskerville']",children:"Isili Recepciones"})]})]})},page=function(){var e;let{data:t,error:a,loading:n,success:i,save:o,setSuccess:r}=app_useData(),[c,m]=(0,l.useState)(!1),[p,x]=(0,l.useState)(""),[u,f]=(0,l.useState)(!1),[d,g]=(0,l.useState)([]),b=t.find(e=>e.nombre===p),h=null!==(e=null==b?void 0:b.familia)&&void 0!==e?e:null;async function confirm(){f(!1),await o(d)}(0,l.useEffect)(()=>{if(h){let e=getFamily(t,h);g(e)}else g([])},[t,h]);let v=h?getFamily(t,h):[],j=!!(v.length===d.length&&d.find(e=>v.find(t=>t.nombre===e.nombre&&("".concat(t.asiste)!=="".concat(e.asiste)||"".concat(t.celiaco)!=="".concat(e.celiaco)||"".concat(t.vegetariano)!=="".concat(e.vegetariano)))));return(0,s.jsxs)("main",{className:"relative w-full h-screen max-w-2xl m-auto pl-4 pr-4 bg-white bg-cover bg-no-repeat bg-[url('../assets/img/fondos-solos-1.png')]",children:[!c&&(0,s.jsx)(components_Welcome,{setInNextScreen:m}),c&&(i||a)&&(0,s.jsx)(components_End,{success:i,error:a}),c&&n&&(0,s.jsx)(components_Loading,{}),!n&&c&&!u&&!i&&!a&&(0,s.jsx)(components_AutoComplete,{data:t,selected:p,setConfirming:function(){b&&b.asiste?r(!0):f(!0)},setSelected:x}),!n&&c&&u&&!i&&!a&&(0,s.jsx)(components_PeopleList,{confirm:confirm,family:d,toggleValue:function(e,t){let a=d.map(a=>a.nombre===t.nombre?{...t,[e]:"si"===a[e]?"no":"si"}:a);g(a)},touched:j})]})};function getFamily(e,t){return e.filter(e=>e.familia===t).map(mapFamily)}function mapFamily(e){return{...e,asiste:e.asiste?e.asiste:"no",celiaco:e.celiaco?e.celiaco:"no",vegetariano:e.vegetariano?e.vegetariano:"no"}}},9135:function(e){e.exports={"rotating-image":"loading_rotating-image__iaI35",rotate:"loading_rotate__aGP1x"}}},function(e){e.O(0,[878,971,864,744],function(){return e(e.s=7839)}),_N_E=e.O()}]);