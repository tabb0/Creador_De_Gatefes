(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t(58)},35:function(e,a,t){},36:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(23),c=t.n(r),o=t(25),m=t(1),i=(t(35),t(36),t(37),t(38),t(2)),s=t(60),u=t(59),d=t(61),p=t(62),E=t(12),f=t.n(E),b=t(14),g="El nombre es requerido",h="El apellido es requerido",O="El correo es requerido",v="El celular es requerido",N="La foto es requerida",C="Un correo v\xe1lido es requerido",j="Solo se permiten letras y/o espacios",x="Solo se permiten letras y/o n\xfameros",I=function(e){var a=Object(l.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(l.useState)(""),m=Object(i.a)(o,2),s=m[0],d=m[1];Object(l.useEffect)(function(){var a=p(r);e.handleOnChangeValidation&&e.handleOnChangeValidation({field:e.controlName,result:a,message:s,value:r})},[r]);var p=function(){return d(""),!(!r||!1===/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(r))||(d(C),!1)};return n.a.createElement("label",null,n.a.createElement("p",null,e.label),n.a.createElement("input",{className:"sapri-input",type:"email",name:e.controlName,placeholder:e.placeholderText,onChange:function(e){c(e.target.value)}}),n.a.createElement(u.a,null,n.a.createElement("span",{className:"text-danger"},s)))},S=function(e){var a=Object(l.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(l.useState)(""),m=Object(i.a)(o,2),s=m[0],d=m[1];Object(l.useEffect)(function(){var a=p(r);e.handleOnChangeValidation&&e.handleOnChangeValidation({field:e.controlName,result:a,message:s,value:r})},[r]);var p=function(e){d("");var a=/^[A-Za-z0-9]*$/.test(e);return a||d(x),a};return n.a.createElement("label",null,n.a.createElement("p",null,e.label),n.a.createElement("input",{className:"sapri-input",type:"text",name:e.controlName,placeholder:e.placeholderText,value:r,onChange:function(e){c(e.target.value)}}),n.a.createElement(u.a,null,n.a.createElement("span",{className:"text-danger"},s)))},w=function(e){var a=Object(l.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(l.useState)(""),m=Object(i.a)(o,2),s=m[0],d=m[1];Object(l.useEffect)(function(){var a=p(r);e.handleOnChangeValidation&&e.handleOnChangeValidation({field:e.controlName,result:a,message:s,value:r})},[r]);var p=function(e){d("");var a=/^[A-Za-z\s]*$/.test(e);return a||d(j),a};return n.a.createElement("label",null,n.a.createElement("p",null,e.label),n.a.createElement("input",{className:"sapri-input",type:"text",name:e.controlName,placeholder:e.placeholderText,value:r,onChange:function(e){c(e.target.value)}}),n.a.createElement(u.a,null,n.a.createElement("span",{className:"text-danger"},s)))};function V(e){var a=Object(l.useState)(null),t=Object(i.a)(a,2),r=(t[0],t[1]),c=Object(l.useRef)(null);return n.a.createElement("label",{className:"ImageUploaderInput"},n.a.createElement("div",{className:"sapri-button",onClick:function(e){e.preventDefault(),c.current.click()}},"Cargar Imagen"),n.a.createElement("input",{type:"file",ref:c,className:"sapri-file-input",id:"file",name:"file",onChange:function(a){r(a.target.files[0]),e.handleOnChangeValidation&&e.handleOnChangeValidation({field:e.controlName,result:!0,message:"",value:a.target.files[0]})}}))}var y=function(e){var a=Object(l.useState)(!0),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(l.useState)("https://ondemand.bannerbear.com/signedurl/5w6PKMLVw43yxG4DQg/image.jpg?modifications=W3sibmFtZSI6Ik5vbWJyZSIsInRleHQiOiJSb25ueSJ9LHsibmFtZSI6ImZvdG8iLCJpbWFnZV91cmwiOiJodHRwczpcL1wvY2VkdWxhLm1pd2ViY3IuY29tXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDIyXC8wN1wvM19kb3dubG9hZC5qcGVnIn0seyJuYW1lIjoiY2VkdWxhIiwidGV4dCI6IjEyMzQ1NjcifV0&s=f4158bee4941ca8cf49d83d8da9044e562945a43c9b6b51b5115547cef0923c8"),m=Object(i.a)(o,2),E=m[0],C=m[1],j=Object(l.useState)(!0),x=Object(i.a)(j,2),y=x[0],T=x[1],k=Object(l.useState)(!1),F=Object(i.a)(k,2),P=F[0],q=F[1],R=Object(l.useRef)(),J={name:{state:!1,message:g,value:""},lastName:{state:!1,message:h,value:""},cedula:{state:!1,message:v,value:""},email:{state:!1,message:O,value:""},profilePic:{state:!1,message:N,value:""}},L=function(){var e=new FormData;e.append("profilePic",J.profilePic.value),e.append("name",J.name.value),e.append("lastName",J.lastName.value),e.append("email",J.email.value),e.append("cedula",J.cedula.value),q(!0),fetch("https://cedula.miwebcr.com/formProcess.php",{method:"POST",body:e}).then(function(e){return e.text()}).then(function(e){try{var a=JSON.parse(e),t=a.result.resultCode;if("0"!==t)switch(q(!1),t){case"11":f.a.fire({title:"\xa1Espere!",text:"Parece que ya est\xe1s registrado.",icon:"info",confirmButtonText:"Ok"}),T(!0),c(!1),C(a.result.registro.ImagenCedula);break;case"10":f.a.fire({title:"\xa1Espere!",text:"Ocurri\xf3 un problema al generar tu c\xe9dula",icon:"error",confirmButtonText:"Ok"})}else T(!0),c(!1),C(a.result.registro.ImagenCedula)}catch(l){}}).catch(function(e){console.log("error",e)})},Z=function(e){var a=e.field,t=e.result,l=e.message,n=e.value,r=J[a];r&&(r.result=t,r.message=l,r.value=n)};return n.a.createElement(s.a,{fluid:!0,className:"sapri-container"},n.a.createElement(u.a,null,n.a.createElement(d.a,{md:"5",className:"text-center"},n.a.createElement("img",{className:"mainLogoImage",src:"/images/img87.png",alt:""})),r&&n.a.createElement(d.a,{md:"7"},n.a.createElement("form",{id:"form",method:"post",onSubmit:function(e){e.preventDefault(),function(){for(var e=!1,a=0,t=Object.entries(J);a<t.length;a++){var l=t[a],n=Object(i.a)(l,2);n[0],n[1].result||(e=e||!0)}return e}()?f.a.fire({title:"\xa1Espere!",text:"Falta que completes tu informaci\xf3n",icon:"warning",confirmButtonText:"Ok"}):L()}},n.a.createElement(u.a,null,n.a.createElement(d.a,{md:"6"},n.a.createElement(w,{label:"Nombre:",controlName:"name",placeholderText:"",handleOnChangeValidation:Z})),n.a.createElement(d.a,{md:"6"},n.a.createElement(w,{label:"Apellido:",controlName:"lastName",placeholderText:"",handleOnChangeValidation:Z}))),n.a.createElement(u.a,{className:"sub-title"},n.a.createElement("p",null,'Tu Apellido Cambiara por "Saprissa"')),n.a.createElement(u.a,null,n.a.createElement(d.a,{md:"8"},n.a.createElement(I,{label:"Correo Electr\xf3nico:",controlName:"email",placeholderText:"",handleOnChangeValidation:Z})),n.a.createElement(d.a,{md:"4"},n.a.createElement(S,{label:"Cedula:",controlName:"cedula",placeholderText:"",handleOnChangeValidation:Z}))),n.a.createElement(u.a,null,n.a.createElement(d.a,{className:"text-center"},n.a.createElement(V,{controlName:"profilePic",handleOnChangeValidation:Z}))),n.a.createElement(u.a,null,n.a.createElement(d.a,{className:"text-center"},P?n.a.createElement(n.a.Fragment,null):n.a.createElement("label",null,n.a.createElement(p.a,{className:"sapri-button",type:"submit"},"CREAR IDENTIFICACION")),n.a.createElement(b.a,{loading:P,color:"#FF7626"}))))),!r&&n.a.createElement(d.a,{md:"7"},n.a.createElement("div",{className:"sapri-cedula-container-col"},n.a.createElement(u.a,null,n.a.createElement("p",null,"Oficialmente Sos Parte de La Familia..."),n.a.createElement("p",null,n.a.createElement("small",null,"\xa1Compartila En Tus Redes Y Etiquetanos Para Verla!"))),y?n.a.createElement(u.a,{className:"sapri-cedula-image-loading"},n.a.createElement(b.b,{className:"line-loader",loading:y,color:"#FF7626",width:"300"})):n.a.createElement(n.a.Fragment,null),n.a.createElement(u.a,{className:"sapri-cedula-image"},n.a.createElement("a",{href:E,download:!0},n.a.createElement("img",{ref:R,src:E,onLoad:function(){T(!1)},alt:""}))),n.a.createElement(u.a,null,n.a.createElement("a",{className:"button sapri-button",href:E,download:!0},"Descargar")),n.a.createElement(u.a,null,n.a.createElement("button",{className:"sapri-button",onClick:function(e){C(""),c(!0)}},"Crear Otra"))))),n.a.createElement(u.a,{className:"logoPatro-Row"},n.a.createElement(d.a,null,n.a.createElement("img",{className:"logoPatro",src:"/images/logopatro.jpg",alt:""}))))};function T(){return n.a.createElement(o.a,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{index:!0,element:n.a.createElement(y,null)}),n.a.createElement(m.a,{path:"form",element:n.a.createElement(y,null)})))}t.d(a,"default",function(){return T}),c.a.createRoot(document.getElementById("root")).render(n.a.createElement(T,null))}},[[26,1,2]]]);
//# sourceMappingURL=main.5d27226a.chunk.js.map