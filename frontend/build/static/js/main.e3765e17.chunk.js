(this.webpackJsonpproy_ai=this.webpackJsonpproy_ai||[]).push([[0],{426:function(e,t,a){},427:function(e,t,a){},428:function(e,t,a){},435:function(e,t,a){},443:function(e,t,a){},444:function(e,t,a){},445:function(e,t,a){},511:function(e,t,a){},512:function(e,t,a){},537:function(e,t,a){},538:function(e,t,a){},539:function(e,t,a){},540:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(58),i=a.n(c),l=(a(426),a(73)),r=a(62),o=(a(427),a(35)),d=a(544),j=a(113),b=a(551),u=a(558),x=a(559),O=a(560),h=a(561),p=a(562),m=a(563),g=(a(428),a(6)),f=d.a.Footer,v=d.a.Sider,y=j.a.SubMenu,S=function(e){var t=e.children,a=e.menuKey,n=e.title,c=Object(s.useState)({collapsed:!1}),i=Object(o.a)(c,2),S=i[0],C=i[1],V=S.collapsed,k=Object(r.f)();return Object(g.jsxs)(d.a,{style:{minHeight:"100vh"},children:[Object(g.jsx)(v,{collapsible:!0,collapsed:V,onCollapse:function(){C({collapsed:!V})},children:Object(g.jsxs)(j.a,{theme:"dark",defaultSelectedKeys:[a],mode:"inline",children:[Object(g.jsx)(j.a.Item,{icon:Object(g.jsx)(u.a,{}),children:Object(g.jsx)(l.b,{to:"/",style:{color:"white"},children:"Home"})},"1"),Object(g.jsx)(j.a.Item,{icon:Object(g.jsx)(x.a,{}),children:Object(g.jsx)(l.b,{to:"/priori",style:{color:"white"},children:"A priori"})},"2"),Object(g.jsx)(j.a.Item,{icon:Object(g.jsx)(O.a,{}),children:Object(g.jsx)(l.b,{to:"/metricas",style:{color:"white"},children:"M\xe9tricas S."})},"3"),Object(g.jsxs)(y,{icon:Object(g.jsx)(h.a,{}),title:"Clustering",children:[Object(g.jsx)(j.a.Item,{children:Object(g.jsx)(l.b,{to:"/clustering-jerarquico",children:"Jer\xe1rquico"})},"4"),Object(g.jsx)(j.a.Item,{children:Object(g.jsx)(l.b,{to:"/clustering-particional",children:"Particional"})},"5")]},"sub2"),Object(g.jsx)(j.a.Item,{icon:Object(g.jsx)(p.a,{}),children:Object(g.jsx)(l.b,{to:"/regresion-logistica",style:{color:"white"},children:"R. Log\xedstica"})},"6")]})}),Object(g.jsxs)(d.a,{className:"site-layout",children:[Object(g.jsx)(b.a,{className:"site-page-header",onBack:k.goBack,title:n,ghost:!1}),t,Object(g.jsx)(f,{style:{textAlign:"center"},children:Object(g.jsxs)("a",{href:"https://github.com/Possible-99",id:"gitHubLink",children:["Created by Juan SR  ",Object(g.jsx)(m.a,{style:{fontSize:"1.5em",margin:"0 0 0 4px"}})]})})]})]})},C=a(545),V=a(552),k=a(188),I=a(103),w=a(556),T=V.a.Title,F=function(){return Object(g.jsxs)("div",{style:{display:"block",margin:"0 0 40px 0"},children:[Object(g.jsx)(T,{children:"Selecciona un algoritmo"}),Object(g.jsxs)(k.a,{gutter:[{xs:8,sm:14,md:24,lg:32},{xs:14,sm:14,md:14,lg:32}],style:{marginBottom:"10px",height:"140px"},children:[Object(g.jsx)(I.a,{lg:{span:4},md:{span:12},sm:{span:24},xs:{span:24},children:Object(g.jsx)(l.b,{to:"/priori",children:Object(g.jsx)(w.a,{className:"card-algorithm ",hoverable:!0,children:Object(g.jsx)("span",{children:"Algoritmo apriori"})})})}),Object(g.jsx)(I.a,{lg:{span:5},md:{span:12},sm:{span:24},xs:{span:24},children:Object(g.jsx)(l.b,{to:"/metricas",children:Object(g.jsx)(w.a,{className:"card-algorithm ",hoverable:!0,children:Object(g.jsx)("span",{children:"M\xe9tricas de similitud"})})})}),Object(g.jsx)(I.a,{lg:{span:5},md:{span:12},sm:{span:24},xs:{span:24},children:Object(g.jsx)(l.b,{to:"/clustering-jerarquico",children:Object(g.jsx)(w.a,{className:"card-algorithm ",hoverable:!0,children:Object(g.jsx)("span",{children:"Clustering Jer\xe1rquico"})})})}),Object(g.jsx)(I.a,{lg:{span:5},md:{span:12},sm:{span:24},xs:{span:24},children:Object(g.jsx)(l.b,{to:"/clustering-particional",children:Object(g.jsx)(w.a,{className:"card-algorithm ",hoverable:!0,children:Object(g.jsx)("span",{children:"Clustering Particional"})})})}),Object(g.jsx)(I.a,{lg:{span:5},md:{span:12},sm:{span:24},xs:{span:24},children:Object(g.jsx)(l.b,{to:"/regresion-logistica",children:Object(g.jsx)(w.a,{className:"card-algorithm ",hoverable:!0,children:Object(g.jsx)("span",{children:"Regresi\xf3n Logistica"})})})})]})]})},N=a(306),q=a(557),H=a(548),L=(a(435),N.a.TabPane),P=V.a.Title,D=V.a.Paragraph,E=function(e){var t=e.title,a=e.tabNames;return Object(g.jsxs)("div",{id:"howToDiv",children:[Object(g.jsx)(P,{level:3,children:t}),Object(g.jsxs)(N.a,{defaultActiveKey:"1",children:[Object(g.jsxs)(L,{tab:a[0],children:[Object(g.jsxs)(D,{children:["Para usar este algoritmo sube un archivo y par\xe1metros(lift, confianza,etc) tomando en cuenta que tiene que cumplir con las siguientes caracter\xedsticas para obtener los mejores resultados posibles.",Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Subirlo de preferencia en formato CSV(solo se pueden subir archivos CSV o TXT)"}),Object(g.jsx)("li",{children:"Solo subirlo con los campos necesarios para el algoritmo"}),Object(g.jsx)("li",{children:"Respetar el formato establecido en la siguiente secci\xf3n"}),Object(g.jsx)("li",{children:"Usa par\xe1metros de acuerdo a la data que estas subiendo en el archivo"})]}),Object(g.jsx)(P,{level:3,children:"Formato"})]}),Object(g.jsx)(q.b,{grid:{gutter:16,xs:1,sm:4,md:2,lg:4,xl:4,xxl:8},dataSource:[{title:"Formato correcto",imageSrc:"/good_ones/correct.png",preview:{src:"/good_ones/1.png"}},{title:"Formato incorrecto",imageSrc:"/bad_ones/incorrect.png",preview:{src:"/bad_ones/1.png"}}],renderItem:function(e){return Object(g.jsx)(q.b.Item,{children:Object(g.jsx)(w.a,{title:e.title,style:{width:240},children:Object(g.jsx)(H.a,{width:200,height:200,src:e.imageSrc,preview:e.preview})})})}})]},"1"),Object(g.jsxs)(L,{tab:a[1],children:[Object(g.jsxs)(D,{children:["Para usar este algoritmo sube un archivo tomando en cuenta que tiene que cumplir con las siguientes caracter\xedsticas para obtener los mejores resultados posibles.",Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Subirlo de preferencia en formato CSV(solo se pueden subir archivos CSV o TXT)"}),Object(g.jsx)("li",{children:"Solo subirlo con los campos necesarios para el algoritmo"}),Object(g.jsx)("li",{children:"Quitar los campos que contengan el ID(Ej:Paciente_ID, etc) o que sean de tipo cadena(incluyan letras)"}),Object(g.jsx)("li",{children:"Respetar el formato establecido en la siguiente secci\xf3n"}),Object(g.jsx)("li",{children:"De preferencia subir un archivo sin espacios vac\xedos, de otra manera se rellenara con el valor promedio de la columna."})]}),Object(g.jsx)(P,{level:3,children:"Formato"})]}),Object(g.jsx)(q.b,{grid:{gutter:16,xs:1,sm:4,md:2,lg:4,xl:4,xxl:8},dataSource:[{title:"Formato correcto",imageSrc:"/good_ones/correct.png",preview:{src:"/good_ones/2.png"}},{title:"Formato incorrecto ",imageSrc:"/bad_ones/incorrect.png",preview:{src:"/bad_ones/2.png"}}],renderItem:function(e){return Object(g.jsx)(q.b.Item,{children:Object(g.jsx)(w.a,{title:e.title,style:{width:240},children:Object(g.jsx)(H.a,{width:200,height:200,src:e.imageSrc,preview:e.preview})})})}})]},"2"),Object(g.jsxs)(L,{tab:a[2],children:[Object(g.jsxs)(D,{children:["Para usar este algoritmo sube un archivo tomando en cuenta que tiene que cumplir con las siguientes caracter\xedsticas para obtener los mejores resultados posibles.",Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Subirlo de preferencia en formato CSV(solo se pueden subir archivos CSV o TXT)"}),Object(g.jsx)("li",{children:"Solo subirlo con los campos necesarios para el algoritmo"}),Object(g.jsx)("li",{children:"Quitar los campos que contengan el ID(Ej:Paciente_ID, etc) o que sean de tipo cadena(incluyan letras)"}),Object(g.jsx)("li",{children:"Respetar el formato establecido en la siguiente secci\xf3n"}),Object(g.jsx)("li",{children:"De preferencia subir un archivo sin espacios vac\xedos, de otra manera se rellenara con el valor promedio de la columna."})]}),Object(g.jsx)(P,{level:3,children:"Formato"})]}),Object(g.jsx)(q.b,{grid:{gutter:16,xs:1,sm:4,md:2,lg:4,xl:4,xxl:8},dataSource:[{title:"Formato correcto",imageSrc:"/good_ones/correct.png",preview:{src:"/good_ones/3.png"}},{title:"Formato incorrecto ",imageSrc:"/bad_ones/incorrect.png",preview:{src:"/bad_ones/3.png"}}],renderItem:function(e){return Object(g.jsx)(q.b.Item,{children:Object(g.jsx)(w.a,{title:e.title,style:{width:240},children:Object(g.jsx)(H.a,{width:200,height:200,src:e.imageSrc,preview:e.preview})})})}})]},"3"),Object(g.jsxs)(L,{tab:a[3],children:[Object(g.jsxs)(D,{children:["Para usar este algoritmo sube un archivo tomando en cuenta que tiene que cumplir con las siguientes caracter\xedsticas para obtener los mejores resultados posibles.",Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Subirlo de preferencia en formato CSV(solo se pueden subir archivos CSV o TXT)"}),Object(g.jsx)("li",{children:"Solo subirlo con los campos necesarios para el algoritmo"}),Object(g.jsx)("li",{children:"Quitar los campos que contengan el ID(Ej:Paciente_ID, etc) o que sean de tipo cadena(incluyan letras)"}),Object(g.jsxs)("li",{children:["Para llevar a cabo el algoritmo el archivo debe de contar con una ",Object(g.jsx)("b",{children:"variable predictora"}),"(que sea binaria o pueda serlo)"]}),Object(g.jsx)("li",{children:"Respetar el formato establecido en la siguiente secci\xf3n"}),Object(g.jsx)("li",{children:"De preferencia subir un archivo sin espacios vac\xedos, de otra manera se rellenara con el valor promedio de la columna."})]}),Object(g.jsx)(P,{level:3,children:"Formato"})]}),Object(g.jsx)(q.b,{grid:{gutter:16,xs:1,sm:4,md:2,lg:4,xl:4,xxl:8},dataSource:[{title:"Formato correcto",imageSrc:"/good_ones/correct.png",preview:{src:"/good_ones/4.png"}},{title:"Formato incorrecto ",imageSrc:"/bad_ones/incorrect.png",preview:{src:"/bad_ones/3.png"}}],renderItem:function(e){return Object(g.jsx)(q.b.Item,{children:Object(g.jsx)(w.a,{title:e.title,style:{width:240},children:Object(g.jsx)(H.a,{width:200,height:200,src:e.imageSrc,preview:e.preview})})})}})]},"4")]})]})},R=d.a.Content,_=function(){return Object(g.jsx)(S,{menuKey:"1",title:"Home",children:Object(g.jsx)(R,{style:{margin:"5px 16px 0px 16px"},children:Object(g.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:"100%"},children:[Object(g.jsx)(F,{}),Object(g.jsx)(C.a,{}),Object(g.jsx)(E,{title:"Como usar cada algoritmo",tabNames:["A priori","M\xe9tricas de similitud","Clustering","Regresi\xf3n Logistica"]})]})})})},A=a(37),z=(a(443),a(408)),J=a(97),M=a(564),G=a(549),B=(a(444),G.a.Dragger),K=function(e){return Object(g.jsxs)(B,Object(A.a)(Object(A.a)({},e),{},{children:[Object(g.jsx)("p",{className:"ant-upload-drag-icon",children:Object(g.jsx)(M.a,{})}),Object(g.jsx)("p",{className:"ant-upload-text",children:"Haz click o arrastra el archivo hasta aqu\xed para subirlo"}),Object(g.jsx)("p",{className:"ant-upload-hint",children:"Se debe subir un archivo en formato .csv"})]}))},Q=a(553),W=V.a.Title,X=function(e){var t=e.state,a=e.setState,s=e.disabled;return Object(g.jsxs)("div",{children:[Object(g.jsx)(W,{level:3,children:"Introduce los datos para generar las reglas"}),Object(g.jsx)("h4",{style:{fontWeight:"300"},children:"Introduce par\xe1metros validos para obtener los mejores resultados, para subir el archivo introduce los par\xe1metros."}),Object(g.jsxs)(k.a,{children:[Object(g.jsxs)(I.a,{xs:24,sm:8,md:8,lg:6,xl:6,children:[Object(g.jsx)("h3",{children:"Soporte"}),Object(g.jsx)(Q.a,{min:1e-4,max:100,onChange:function(e){return a(Object(A.a)(Object(A.a)({},t),{},{support:e}))},disabled:s})]}),Object(g.jsxs)(I.a,{xs:24,sm:8,md:8,lg:6,xl:6,children:[Object(g.jsx)("h3",{children:"Confianza"}),Object(g.jsx)(Q.a,{min:1e-5,max:100,onChange:function(e){return a(Object(A.a)(Object(A.a)({},t),{},{confidence:e}))},disabled:s})]}),Object(g.jsxs)(I.a,{xs:24,sm:8,md:8,lg:6,xl:6,children:[Object(g.jsx)("h3",{children:"Lift"}),Object(g.jsx)(Q.a,{min:1e-5,max:100,onChange:function(e){return a(Object(A.a)(Object(A.a)({},t),{},{lift:e}))},disabled:s})]}),Object(g.jsxs)(I.a,{xs:24,sm:8,md:8,lg:6,xl:6,children:[Object(g.jsx)("h3",{children:"N\xfam. de elementos min."}),Object(g.jsx)(Q.a,{min:1,max:100,onChange:function(e){return a(Object(A.a)(Object(A.a)({},t),{},{minElements:e}))},disabled:s})]})]})]})},U=a(547),Y=(a(445),function(e){var t=e.data,a=e.columns,s=e.tableTitle,n=e.size,c=e.scroll,i=e.pagination,l=e.display;return Object(g.jsxs)("div",{style:{display:"block"},children:[Object(g.jsx)("h3",{style:{display:l,margin:"15px 0 0 0"},children:s}),Object(g.jsx)(U.a,{columns:a,dataSource:t,scroll:c,size:n,pagination:i,style:{display:l}})]})}),Z=[{title:"Rule",dataIndex:"number",key:"number"},{title:"Items",dataIndex:"items",key:"items",render:function(e){return e.map((function(e){return"".concat(e," | ")}))},responsive:["md"]},{title:"Support",dataIndex:"support",key:"support",responsive:["lg"]},{title:"Confidence",dataIndex:"confidence",key:"confidence",responsive:["lg"]},{title:"Lift",dataIndex:"lift",key:"lift",responsive:["lg"]}],$=d.a.Content,ee=function(){var e=Object(s.useState)({support:null,confidence:null,lift:null,minElements:null}),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(!1),i=Object(o.a)(c,2),l=i[0],r=i[1],d=Object(s.useState)(null),j=Object(o.a)(d,2),b=j[0],u=j[1],x={name:"file",accept:".csv",data:a,maxCount:"1",disabled:Object.values(a).indexOf(null)>-1||l,multiple:!1,action:"/api/priori",onChange:function(e){var t=e.file.status;"uploading"!==t&&r(!0),"done"===t?0===e.file.response.rules.length?(z.b.error("Ingresa un archivo o parametros validos"),u(e.file.response)):(z.b.success("Se completo exitosamente"),u(e.file.response)):"error"===t&&z.b.error("".concat(e.file.name," file upload failed."))},onDrop:function(e){}};return Object(g.jsx)(S,{menuKey:"2",title:"A priori",children:Object(g.jsx)($,{style:{margin:"5px 16px 0px 16px"},children:Object(g.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:[Object(g.jsx)(X,{state:a,setState:n,disabled:l}),Object(g.jsx)(C.a,{}),Object(g.jsx)(K,Object(A.a)({},x)),Object(g.jsx)(C.a,{}),null==b?null:Object(g.jsxs)("div",{children:[Object(g.jsx)(Y,{data:b.rules,columns:Z,tableTitle:"Tabla Apriori"}),Object(g.jsx)(J.a,{type:"primary",onClick:function(){window.location.reload()},children:"Nuevo estudio"})]})]})})})},te=(a(511),function(e,t){var a=[];a.push({title:"",key:"index",render:function(e,a){return t.indexOf(a)}});for(var s=0;s<e;s++)a.push({title:"".concat(s),dataIndex:"".concat(s),key:"".concat(s)});return a}),ae=function(e,t){var a=[];a.push({title:"",key:"index",render:function(e,a){return t.indexOf(a)}});for(var s=0;s<e;s++)a.push({title:"".concat(s),dataIndex:"".concat(s),key:"".concat(s)});return a},se=function(e,t){var a=[];a.push({title:"",key:"index",render:function(e,a){return t.indexOf(a)}});for(var s=0;s<e;s++)a.push({title:"".concat(s),dataIndex:"".concat(s),key:"".concat(s)});return a},ne=function(e,t){var a=[];a.push({title:"",key:"index",render:function(e,a){return t.indexOf(a)}});for(var s=0;s<e;s++)a.push({title:"".concat(s),dataIndex:"".concat(s),key:"".concat(s)});return a},ce=d.a.Content,ie=V.a.Title,le=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(null),i=Object(o.a)(c,2),l=i[0],r=i[1],d=Object(s.useState)(null),j=Object(o.a)(d,2),b=j[0],u=j[1],x={name:"file",accept:".csv,.txt",maxCount:"1",disabled:a,multiple:!1,action:"/api/metricas",onChange:function(e){var t=e.file.status;if("uploading"!==t&&n(!0),"done"===t)if(0===Object.keys(e.file.response).length)z.b.error("Ingresa un archivo o parametros validos"),r(e.file.response);else{z.b.success("Se completo exitosamente"),r(e.file.response);var a=e.file.response.numberColumns,s=e.file.response,c=s.euclidian,i=s.minkowski,l=s.chebyshev,o=s.manhattan;console.log("====-"),console.log(c);var d={euclidianColumns:te(a,c),minkowskiColumns:ae(a,i),chebyshevColumns:se(a,l),manhattanColumns:ne(a,o)};u(d)}else"error"===t&&z.b.error("Error. Suba un archivo valido")},onDrop:function(e){}};return console.log("===="),console.log(b),console.log(l),Object(g.jsx)(S,{menuKey:"3",title:"M\xe9tricas",children:Object(g.jsx)(ce,{style:{margin:"5px 16px 0px 16px"},children:Object(g.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:[Object(g.jsx)(ie,{level:3,children:"Sube el archivo para obtener las metricas de similitud"}),Object(g.jsx)("h4",{style:{fontWeight:"300"},children:"Arrastra un archivo solo con los datos necesarios(sin columnas que contengan ID,etc)"}),Object(g.jsx)(K,Object(A.a)({},x)),Object(g.jsx)(J.a,{type:"primary",style:{float:"right",margin:"10px 0",display:a?"":"none"},size:"middle",onClick:function(){return window.location.reload()},children:"Nuevo estudio"}),null==l?null:0!==Object.keys(l).length&&null!=b&&Object(g.jsxs)("div",{children:[Object(g.jsx)(C.a,{}),Object(g.jsx)(Y,{data:l.euclidian,columns:b.euclidianColumns,tableTitle:"Tabla Euclidiana",scroll:{x:1500},pagination:!0}),Object(g.jsx)(C.a,{}),Object(g.jsx)(Y,{data:l.minkowski,columns:b.minkowskiColumns,tableTitle:"Tabla Minkowski ",scroll:{x:1500},pagination:!0}),Object(g.jsx)(C.a,{}),Object(g.jsx)(Y,{data:l.chebyshev,columns:b.chebyshevColumns,tableTitle:"Tabla Chebyshev(P=1.5)",scroll:{x:1500},pagination:!0}),Object(g.jsx)(C.a,{}),Object(g.jsx)(Y,{data:l.manhattan,columns:b.manhattanColumns,tableTitle:"Tabla Manhattan",scroll:{x:1500},pagination:!0})]})]})})})},re=(a(512),[{title:"Variable",dataIndex:"variable"},{title:"Value",dataIndex:"value"}]),oe=function(e){for(var t=[],a=Object.keys(e),s=Object.values(e),n=0;n<a.length;n++)t.push({variable:a[n],value:s[n]});return{fixedData:t,variables:a}},de=function(e){var t=[];return Object.keys(e[0]).forEach((function(e){t.push({title:e,dataIndex:e})})),t},je=a(210),be=function(e){e.text,e.state;var t=e.setVariablesSelected,a=e.data,n=e.loading,c=e.setLoading,i=(e.title,e.variablesNumber),l=e.allVariablesOptionHidden,r=e.disableAfterSelection,d=(e.disableAllButton,a),j=Object(s.useState)({selectedItems:[],allVariables:!1}),b=Object(o.a)(j,2),u=b[0],x=b[1],O=i||(a.length>5?6:a.length);Object(s.useEffect)((function(){u.selectedItems.length===O&&(t(u.selectedItems),c&&c(!0))}),[u]);var h=u.selectedItems,p=d.filter((function(e){return!h.includes(e)})),m=h.length===O||(!0===u.allVariables||!0===r);return Object(g.jsxs)("div",{children:[Object(g.jsx)(C.a,{}),Object(g.jsx)("h3",{children:"Selecciona ".concat(O," variables")}),Object(g.jsx)(je.a,{showArrow:!0,mode:"multiple",value:h,onChange:function(e){x({selectedItems:e})},style:{width:"100%"},loading:n,disabled:m,allowClear:!0,children:p.map((function(e){return Object(g.jsx)(je.a.Option,{value:e,disabled:m,children:e},e)}))}),Object(g.jsxs)("div",{style:{display:l},children:[Object(g.jsx)(C.a,{}),Object(g.jsx)("h3",{children:"\xd3 selecciona todas las variables en la tabla"}),Object(g.jsx)(J.a,{type:"primary",loading:n,onClick:function(){x(Object(A.a)(Object(A.a)({},u),{},{allVariables:!0})),t("all"),c&&c(!0)},disabled:m,children:"Todas"})]})]})},ue=function(e){var t=e.setCorrVariables,a=e.corrVariables,n=e.variablesSelected,c=e.setVariablesSelected,i=e.setLoading,l=e.loading,r=e.displayFirstTable,d=e.setHeaderVariables,j=e.allVariablesHidden,b=Object(s.useState)(!1),u=Object(o.a)(b,2),x=u[0],O=u[1],h=Object(s.useState)(null),p=Object(o.a)(h,2),m=p[0],f=p[1],v={name:"file",accept:".csv,.txt",maxCount:"1",disabled:x,multiple:!1,action:"/api/pearsonVariables",onChange:function(e){var a=e.file.status;if("uploading"!==a&&O(!0),"done"===a)if(0===Object.keys(e.file.response).length)z.b.error("Ingresa un archivo o parametros validos");else{z.b.success("Se completo exitosamente");var s=e.file.response,n=s.variables,c=s.tablaGeneral;console.log(c),d&&d(Object.keys(JSON.parse(c)[0])),f(JSON.parse(c)),t({file:e.file.originFileObj,variables:n})}else"error"===a&&z.b.error("Error. Introduzca un archivo o parametrtos validos")}};return Object(g.jsxs)("div",{children:[Object(g.jsx)(K,Object(A.a)({},v)),Object(g.jsx)(J.a,{type:"primary",style:{float:"right",margin:"10px 0",display:x?"":"none"},onClick:function(){return window.location.reload()},children:"Otro estudio"}),null!==a&&null!==m&&Object(g.jsxs)("div",{children:[!0===r&&Object(g.jsx)(Y,{columns:de(m),data:m,tableTitle:"Data",pagination:!0,size:"small",scroll:{x:1500}}),Object(g.jsx)(C.a,{}),Object(g.jsx)(Y,{columns:re,data:oe(a.variables[0]).fixedData,tableTitle:"Correlacion de Variables",pagination:!1,scroll:{x:1500}}),Object(g.jsx)(be,{state:n,setVariablesSelected:c,title:"Selecciona seis variables",data:oe(a.variables[0]).variables,setLoading:i,loading:l,allVariablesOptionHidden:j})]})]})},xe=a(173),Oe=a.n(xe),he=function(e){var t=[];return t.push({title:"",key:"index",render:function(e,t,a){return a}}),Object.keys(e[0]).forEach((function(e){t.push({title:e,dataIndex:e})})),t},pe=function(e){var t=[];return Object.keys(e[0]).forEach((function(e){t.push({title:e,dataIndex:e})})),t},me=a(554),ge=je.a.Option,fe=function(e){var t=e.data,a=e.clusterName,n=e.clusters,c=Object(s.useState)({xfield:Object.keys(n[0])[0],yfield:Object.keys(n[0])[1]}),i=Object(o.a)(c,2),l=i[0],r=i[1],d={appendPadding:30,data:t,xField:l.xfield,yField:l.yfield,colorField:a,color:["#332288","#88CCEE","#44AA99","#117733","#999933"],size:5,shape:"circle",yAxis:{nice:!0,line:{style:{stroke:"#eee"}},title:{text:l.yfield}},xAxis:{grid:{line:{style:{stroke:"#eee"}}},line:{style:{stroke:"#eee"}},title:{text:l.xfield}}};return Object(g.jsxs)("div",{children:[Object(g.jsx)(C.a,{}),Object(g.jsx)("h2",{children:"Gr\xe1fico de dispersi\xf3n"}),Object(g.jsx)(me.a,Object(A.a)({},d)),Object(g.jsx)(je.a,{defaultValue:l.xfield,style:{width:120},onChange:function(e){r(Object(A.a)(Object(A.a)({},l),{},{xfield:e}))},children:Object.keys(t[0]).map((function(e){return e===l.xfield||e===l.yfield||"clusterH"===e||"clusterP"===e?null:Object(g.jsx)(ge,{value:e,children:e})}))}),Object(g.jsx)(je.a,{defaultValue:l.yfield,style:{width:120},onChange:function(e){r(Object(A.a)(Object(A.a)({},l),{},{yfield:e}))},children:Object.keys(t[0]).map((function(e){return e===l.xfield||e===l.yfield||"clusterH"===e||"clusterP"===e?null:Object(g.jsx)(ge,{value:e,children:e})}))})]})},ve=function(e){var t=e.variablesSelected,a=e.corrVariables,n=e.clusteringAlgorithm,c=e.clusterName,i=e.setLoading,l=Object(s.useState)(null),r=Object(o.a)(l,2),d=r[0],j=r[1],b=Object(s.useState)(null),u=Object(o.a)(b,2),x=u[0],O=u[1],h="/api/clustering"+n,p=new FormData,m=JSON.stringify(t);return p.append("file",a.file),p.append("variablesSelected",m),Object(s.useEffect)((function(){Oe.a.post(h,p,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t={clustersQuantity:e.data.clustersQuantity,centroidesH:JSON.parse(e.data.centroidesH),tablaGeneral:JSON.parse(e.data.tablaGeneral)};j(t),i(!1)})).catch((function(e){z.b.error("Hubo un error, intentalo de nuevo"),i(!1)}))}),[]),Object(s.useEffect)((function(){if(null!=d){var e=d.tablaGeneral,t=d.centroidesH,a=d.clustersQuantity,s={tablaGeneralColumns:pe(e),centroidesHColumns:he(t),clustersQuantity:pe([a])};O(s)}}),[d]),Object(g.jsx)("div",{children:null!=x&&Object(g.jsxs)("div",{children:[Object(g.jsx)(C.a,{}),Object(g.jsx)(Y,{data:d.tablaGeneral,columns:x.tablaGeneralColumns,scroll:{x:1500},pagination:!0,size:"large",tableTitle:"Tabla de todos los elementos con su cluster"}),Object(g.jsx)(C.a,{}),Object(g.jsx)(Y,{data:[d.clustersQuantity],columns:x.clustersQuantity,scroll:{x:1500},pagination:!1,size:"large",tableTitle:"Num. Elementos en cada cluster"}),Object(g.jsx)(C.a,{}),Object(g.jsx)(Y,{data:d.centroidesH,columns:x.centroidesHColumns,scroll:{x:1500},pagination:!1,size:"large",tableTitle:"Clusters"}),Object(g.jsx)(fe,{data:d.tablaGeneral,clusterName:c,clusters:d.centroidesH})]})})},ye=d.a.Content,Se=V.a.Title,Ce=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(null),i=Object(o.a)(c,2),l=i[0],r=i[1],d=Object(s.useState)(!1),j=Object(o.a)(d,2),b=j[0],u=j[1];return Object(g.jsx)(S,{menuKey:"4",title:"Clustering Jer\xe1rquico",children:Object(g.jsx)(ye,{style:{margin:"5px 16px 0px 16px"},children:Object(g.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:[Object(g.jsx)(Se,{level:3,children:"Sube un archivo para generar los clusters"}),Object(g.jsx)("h4",{style:{fontWeight:"300"},children:"Suber un archivo solo con los datos necesarios(sin columnas que contengan ID,etc)"}),Object(g.jsx)(ue,{setCorrVariables:n,corrVariables:a,variablesSelected:l,setVariablesSelected:r,loading:b,setLoading:u,displayFirstTable:"none"}),null!=l&&Object(g.jsx)("div",{children:Object(g.jsx)(ve,{variablesSelected:l,corrVariables:a,clusteringAlgorithm:"Jerarquico",clusterName:"clusterH",setLoading:u})})]})})})},Ve=(a(537),d.a.Content),ke=V.a.Title,Ie=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(null),i=Object(o.a)(c,2),l=i[0],r=i[1],d=Object(s.useState)(!1),j=Object(o.a)(d,2),b=j[0],u=j[1];return Object(g.jsx)(S,{menuKey:"5",title:"Clustering Particional",children:Object(g.jsx)(Ve,{style:{margin:"5px 16px 0px 16px"},children:Object(g.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:[Object(g.jsx)(ke,{level:3,children:"Sube un archivo para generar los clusters"}),Object(g.jsx)("h4",{style:{fontWeight:"300"},children:"Suber un archivo solo con los datos necesarios(sin columnas que contengan ID,etc)"}),Object(g.jsx)(ue,{setCorrVariables:n,corrVariables:a,variablesSelected:l,setVariablesSelected:r,loading:b,setLoading:u,displayFirstTable:"none"}),null!=l&&Object(g.jsx)("div",{children:Object(g.jsx)(ve,{variablesSelected:l,corrVariables:a,clusteringAlgorithm:"Particional",clusterName:"clusterP",loading:b,setLoading:u})})]})})})},we=(a(538),a(282)),Te=a(555),Fe=function(e){var t=e.setVariablesSelected,a=e.options,s=e.loading,n=e.setLoading;return Object(g.jsx)(be,{setVariablesSelected:t,data:a,loading:s,setLoading:n,variablesNumber:1,allVariablesOptionHidden:"none",title:"Selecciona la variable clase"})},Ne=function(e){var t=e.setClassVariable,a=e.setOtherRegressionVariables,n=e.headerVariables,c=e.loading,i=e.setLoading,l=e.otherRegressionVariables,r=Object(s.useState)(null),d=Object(o.a)(r,2),j=d[0],b=d[1],u=function(){i(!0),a(Object(A.a)(Object(A.a)({},l),{},{complete:!0}))};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Fe,{setVariablesSelected:t,options:n,loading:c}),Object(g.jsx)("h3",{style:{marginTop:"15px"},children:"Introduce el tama\xf1o de la data con el que quieres que se entrene(0-1)"}),Object(g.jsx)(Q.a,{min:.1,max:1,style:{marginBottom:"12px"},onChange:function(e){a(Object(A.a)(Object(A.a)({},l),{},{trainingVariable:e}))}}),Object(g.jsx)("h3",{children:"\xbfLa variable o columna ya es binaria?"}),Object(g.jsxs)(we.a.Group,{onChange:function(e){b(e.target.value),0==e.target.value&&a(Object(A.a)(Object(A.a)({},l),{},{binary:"yes"})),1==e.target.value&&a(Object(A.a)(Object(A.a)({},l),{},{binary:"no"}))},value:j,disabled:!0===l.complete&&!0,children:[Object(g.jsx)(we.a,{value:0,children:"Si"}),Object(g.jsx)(we.a,{value:1,children:"No"})]}),0==j&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{}),Object(g.jsx)(J.a,{type:"primary",loading:c,onClick:u,children:"Obtener modelo"})]}),1===j&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{}),Object(g.jsx)("h3",{children:"Introduce el valor de la variable que valdra 0"}),Object(g.jsx)(Te.a,{placeholder:"Basic usage",size:"small",onChange:function(e){a(Object(A.a)(Object(A.a)({},l),{},{valueFor0:e.target.value}))}}),Object(g.jsx)(C.a,{}),Object(g.jsx)("h3",{children:"Introduce el valor de la variable que valdra 1"}),Object(g.jsx)(Te.a,{placeholder:"Basic usage",size:"small",onChange:function(e){a(Object(A.a)(Object(A.a)({},l),{},{valueFor1:e.target.value}))}}),Object(g.jsx)(C.a,{}),Object(g.jsx)(J.a,{type:"primary",loading:c,onClick:u,disabled:!0===l.complete&&!0,children:"Obtener modelo"})]})]})},qe=a(550),He=function(e){var t=e.label,a=e.name,s=e.key;return Object(g.jsx)(qe.a.Item,{label:t,name:a,rules:[{required:!0,message:"Campo necesario"}],children:Object(g.jsx)(Te.a,{})},s)},Le=function(e){var t=e.variablesSelected,a=e.jsonModel,n=Object(s.useState)(null),c=Object(o.a)(n,2),i=c[0],l=c[1],r=V.a.Text;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(qe.a,{layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:function(e){var t={variables:e,jsonModel:a},s=JSON.stringify(t);Oe.a.post("/api/regresion-logistica-check",s,{headers:{"Content-Type":"application/json"}}).then((function(e){l(e.data)})).catch((function(e){z.b.error("Error. Ingresa parametros validos")}))},onFinishFailed:function(e){z.b.error("Rellena todos los campos")},children:Object(g.jsxs)(qe.a.Item,{children:[t.map((function(e,t){return Object(g.jsx)(He,{label:e,name:e},t)})),Object(g.jsx)(J.a,{type:"primary",htmlType:"submit",children:"Probar"})]})}),null!==i&&("1"===i.numericResult?Object(g.jsx)(r,{style:{fontSize:"18px"},type:"success",children:i.strResult}):Object(g.jsx)(r,{style:{fontSize:"18px"},type:"danger",children:i.strResult}))]})},Pe=function(e){var t=e.variablesSelected,a=e.corrVariables,n=e.setLoading,c=e.classVariable,i=e.otherRegressionVariables,l=Object(s.useState)({}),r=Object(o.a)(l,2),d=r[0],j=r[1],b=new FormData,u=JSON.stringify({variablesSelected:t,classVariable:c,otherRegressionVariables:i});b.append("file",a.file),b.append("regressionVariables",u),Object(s.useEffect)((function(){Oe.a.post("/api/regresion-logistica-model",b,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e.data),j(e.data),n(!1)})).catch((function(e){z.b.error("Hubo un error! Ingresa paramatros validos o un archivo valido"),console.log(e),n(!1)}))}),[]);var x=V.a.Title,O=V.a.Text;return Object(g.jsxs)("div",{children:[Object(g.jsx)(C.a,{}),Object(g.jsx)(x,{level:3,children:"Modelo"}),Object(g.jsx)(O,{children:d.model}),Object(g.jsx)(x,{level:3,children:"Exactitud"}),Object(g.jsx)(O,{children:d.exactitud}),d!=={}&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{}),Object(g.jsx)(x,{level:3,children:"Prueba el modelo"}),Object(g.jsx)(Le,{variablesSelected:t,jsonModel:d.jsonModel})]})]})},De=d.a.Content,Ee=V.a.Title,Re=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(null),i=Object(o.a)(c,2),l=i[0],r=i[1],d=Object(s.useState)(!1),j=Object(o.a)(d,2),b=j[0],u=j[1],x=Object(s.useState)(null),O=Object(o.a)(x,2),h=O[0],p=O[1],m=Object(s.useState)(null),f=Object(o.a)(m,2),v=f[0],y=f[1],C=Object(s.useState)({complete:!1}),V=Object(o.a)(C,2),k=V[0],I=V[1];return Object(g.jsx)(S,{menuKey:"6",title:"Regresi\xf3n Log\xedstica",children:Object(g.jsx)(De,{style:{margin:"5px 16px 0px 16px"},children:Object(g.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:[Object(g.jsx)(Ee,{level:3,children:"Sube el archivo para obtener empezar la regresi\xf3n logistica "}),Object(g.jsx)("h4",{style:{fontWeight:"300"},children:"Arrastra un archivo solo con los datos necesarios(sin columnas que contengan ID,etc)"}),Object(g.jsx)(ue,{setCorrVariables:n,corrVariables:a,variablesSelected:l,setVariablesSelected:r,loading:b,setHeaderVariables:p,displayFirstTable:!0,allVariablesHidden:"none"}),null!==h&&Object(g.jsx)(Ne,{setClassVariable:y,headerVariables:h,loading:b,setLoading:u,setOtherRegressionVariables:I,otherRegressionVariables:k}),!0===k.complete&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(Pe,{variablesSelected:l,corrVariables:a,setLoading:u,classVariable:v,otherRegressionVariables:k})})]})})})};a(539);var _e=function(){return Object(g.jsx)(l.a,{children:Object(g.jsxs)(r.c,{children:[Object(g.jsx)(r.a,{exact:!0,path:"/",component:_}),Object(g.jsx)(r.a,{exact:!0,path:"/priori",component:ee}),Object(g.jsx)(r.a,{exact:!0,path:"/metricas",component:le}),Object(g.jsx)(r.a,{exact:!0,path:"/clustering-jerarquico",component:Ce}),Object(g.jsx)(r.a,{exact:!0,path:"/clustering-particional",component:Ie}),Object(g.jsx)(r.a,{exact:!0,path:"/regresion-logistica",component:Re})]})})},Ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,565)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(_e,{})}),document.getElementById("root")),Ae()}},[[540,1,2]]]);
//# sourceMappingURL=main.e3765e17.chunk.js.map