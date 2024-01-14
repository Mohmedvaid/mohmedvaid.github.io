"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[465],{9886:(e,t,a)=>{a.d(t,{Z:()=>r});a(2791);var i=a(5763),o=a(184);const r=e=>{let{children:t,duration:a=1}=e;return(0,o.jsx)(i.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:a},children:t})}},4676:(e,t,a)=>{a.d(t,{Z:()=>P});var i=a(2791),o=a(7462),r=a(3366),n=a(3733),s=a(4419),c=a(6934),d=a(1402),p=a(5527),m=a(5878),h=a(1217);function l(e){return(0,h.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var g=a(184);const u=["className","raised"],f=(0,c.ZP)(p.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),b=i.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCard"}),{className:i,raised:c=!1}=a,p=(0,r.Z)(a,u),m=(0,o.Z)({},a,{raised:c}),h=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},l,t)})(m);return(0,g.jsx)(f,(0,o.Z)({className:(0,n.Z)(h.root,i),elevation:c?8:void 0,ref:t,ownerState:m},p))}));function k(e){return(0,h.Z)("MuiCardContent",e)}(0,m.Z)("MuiCardContent",["root"]);const Z=["className","component"],v=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),w=i.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:i,component:c="div"}=a,p=(0,r.Z)(a,Z),m=(0,o.Z)({},a,{component:c}),h=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},k,t)})(m);return(0,g.jsx)(v,(0,o.Z)({as:c,className:(0,n.Z)(h.root,i),ownerState:m,ref:t},p))}));function y(e){return(0,h.Z)("MuiCardMedia",e)}(0,m.Z)("MuiCardMedia",["root","media","img"]);const M=["children","className","component","image","src","style"],x=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e,{isMediaComponent:i,isImageComponent:o}=a;return[t.root,i&&t.media,o&&t.img]}})((e=>{let{ownerState:t}=e;return(0,o.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),C=["video","audio","picture","iframe","img"],j=["picture","img"],S=i.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiCardMedia"}),{children:i,className:c,component:p="div",image:m,src:h,style:l}=a,u=(0,r.Z)(a,M),f=-1!==C.indexOf(p),b=!f&&m?(0,o.Z)({backgroundImage:'url("'.concat(m,'")')},l):l,k=(0,o.Z)({},a,{component:p,isMediaComponent:f,isImageComponent:-1!==j.indexOf(p)}),Z=(e=>{const{classes:t,isMediaComponent:a,isImageComponent:i}=e,o={root:["root",a&&"media",i&&"img"]};return(0,s.Z)(o,y,t)})(k);return(0,g.jsx)(x,(0,o.Z)({className:(0,n.Z)(Z.root,c),as:p,role:!f&&m?"img":void 0,ref:t,style:b,ownerState:k,src:f?m||h:void 0},u,{children:i}))}));var L=a(890),R=a(4294);const N={wrapper:{maxWidth:"100%",borderRadius:"16px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)","&:hover":{boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)"}},media:{height:300,objectFit:"cover"}},P=e=>{let{title:t,content:a,image:i,repoLink:o}=e;const r=a.length>60?"".concat(a.substring(0,60),"..."):a;return(0,g.jsxs)(b,{sx:N.wrapper,children:[i&&(0,g.jsx)(S,{component:"img",sx:N.media,image:i,alt:t}),(0,g.jsxs)(w,{children:[(0,g.jsx)(L.Z,{variant:"h5",component:"div",children:t}),(0,g.jsx)(L.Z,{variant:"body2",color:"text.secondary",children:r}),o&&(0,g.jsx)(R.Z,{href:o,target:"_blank",children:"View Repo"})]})]})}},4090:(e,t,a)=>{a.d(t,{Z:()=>p});const i=a.p+"static/media/crShift.89abeecddafe3de11d92.png",o=a.p+"static/media/shaker.13b270c2a84d3a97be28.png",r=a.p+"static/media/employeeManager.e2ce5fa319121d4aa2e9.png",n=a.p+"static/media/fetch.6983f9b47f48674329e5.png",s=a.p+"static/media/noteTaker.41b2cd492846a7869013.png",c=a.p+"static/media/passwordGenerator.6cebcf227db57b68b405.png",d=a.p+"static/media/weatherApp.27310396b316191cc59d.png",p=[{name:"Shift Scheduler",description:"Efficiently manage employee shifts and schedules with this intuitive scheduling tool.",image:i,repoLink:"https://github.com/Mohmedvaid/cr-shift"},{name:"Shaker",description:"Shaker is a web app for discovering new cocktails and drinks.",image:o,repoLink:"https://github.com/JSON-D3RULO/shaker"},{name:"Fetch",description:"Fetch connects and helps socialize pets across cities and towns.",image:n,repoLink:"https://github.com/raise-da-woof/fetch"},{name:"My Pantry",description:"MyPantry is a web application that help users to track groceries.",image:a.p+"static/media/mypantry.045a92ce29d405b480b6.png",repoLink:"https://github.com/Hot-Fixers/mypantry"},{name:"Fitness Tracker",description:"The fitness tracker allows users to create, track and manage workouts/exercises.",image:a.p+"static/media/fitnessTracker.67cd2ca8f36303d2e5af.png",repoLink:"https://github.com/Mohmedvaid/fitness-tracker"},{name:"Note Taker",description:"An easy-to-use app for organizing notes, ideas, and reminders on the go.",image:s,repoLink:"https://github.com/Mohmedvaid/note-taker"},{name:"Password Generator",description:"Generate secure, complex passwords instantly for enhanced digital security.",image:c,repoLink:"https://github.com/Mohmedvaid/password-generator"},{name:"Weather Dashboard",description:"Get real-time weather updates and forecasts with this interactive weather dashboard.",image:d,repoLink:"https://github.com/Mohmedvaid/weather-app"},{name:"Employee Manager",description:"Streamline employee management with features for scheduling, payroll, and performance tracking",image:r,repoLink:"https://github.com/Mohmedvaid/employee-tracker"},{name:"Employee Tracker",description:"A robust solution for tracking employee details, assignments, and productivity metrics.",image:a.p+"static/media/employeeDirectory.db0f1362b250e671f516.png",repoLink:"https://github.com/Mohmedvaid/employer-directory"}]},542:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});a(2791);var i=a(1889),o=a(4676),r=a(9886),n=a(4090),s=a(184);const c=()=>(0,s.jsx)(i.ZP,{container:!0,spacing:2,children:n.Z.map(((e,t)=>(0,s.jsx)(i.ZP,{item:!0,sm:12,md:6,lg:4,children:(0,s.jsx)(r.Z,{children:(0,s.jsx)(o.Z,{title:e.name,content:e.description,image:e.image,repoLink:e.repoLink})})},t)))})}}]);
//# sourceMappingURL=465.ff866426.chunk.js.map