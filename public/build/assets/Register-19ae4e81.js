import{W as p,r as c,j as a,a as r,b as h,d as f}from"./app-09ab4485.js";import{T as t}from"./TextInput-37412c10.js";import{C as i,H as g,T as d,B as w}from"./Text-4d33bba4.js";import{G as v}from"./Guest-3afc3d66.js";import"./index-f29db320.js";import"./ApplicationLogo-23518ef4.js";function T(){const{data:n,setData:o,post:l,processing:m,errors:s,reset:u}=p({name:"",email:"",password:"",password_confirmation:""});return c.useEffect(()=>()=>{u("password","password_confirmation")},[]),a(v,{children:[r(h,{title:"Register"}),r("form",{onSubmit:e=>{e.preventDefault(),l(route("register"))},children:a(i,{children:[a(i.Header,{children:[r(g,{children:"Register"}),a(d,{size:"sm",color:"secondary",children:["Already have an account?"," ",r(d,{as:f,size:"sm",href:route("login"),children:"Login"})]})]}),a(i.Body,{children:[a("div",{className:"space-y-4",children:[r(t,{id:"name",label:"Name",onChange:e=>o("name",e.target.value),placeholder:"Your name",error:s.name,value:n.name,required:!0}),r(t,{id:"email",label:"Email",autoComplete:"email",onChange:e=>o("email",e.target.value),placeholder:"you@reactor.dev",error:s.email,value:n.email,required:!0}),r(t,{id:"password",type:"password",label:"Password",autoComplete:"current-password",onChange:e=>o("password",e.target.value),placeholder:"Your password",error:s.password,required:!0}),r(t,{id:"password_confirmation",type:"password",label:"Confirm Password",onChange:e=>o("password_confirmation",e.target.value),placeholder:"Confirm Password",error:s.password_confirmation,required:!0})]}),r(w,{type:"submit",className:"mt-6",radius:"lg",fullWidth:!0,loading:m,children:"Register"})]})]})})]})}export{T as default};