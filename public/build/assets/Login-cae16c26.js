import{W as f,r as g,j as a,a as e,b as w,d as n}from"./app-09ab4485.js";import{T as c,C as t}from"./TextInput-37412c10.js";import{C as o,H as C,T as i,B as x}from"./Text-4d33bba4.js";import{G as v}from"./Guest-3afc3d66.js";import"./index-f29db320.js";import"./ApplicationLogo-23518ef4.js";function B({status:m,canResetPassword:u}){const{data:l,setData:s,post:p,processing:h,errors:d,reset:b}=f({email:"",password:"",remember:!1});return g.useEffect(()=>()=>{b("password")},[]),a(v,{children:[e(w,{title:"Log in"}),m&&e("div",{className:"mb-4 text-sm font-medium text-green-600",children:m}),e("form",{onSubmit:r=>{r.preventDefault(),p(route("login"))},children:a(o,{children:[a(o.Header,{children:[e(C,{children:"Welcome back!"}),a(i,{size:"sm",color:"secondary",children:["Do not have an account yet?"," ",e(i,{as:n,size:"sm",href:route("register"),children:"Create account"})]})]}),a(o.Body,{children:[e(c,{id:"email",label:"Email",autoComplete:"email",onChange:r=>s("email",r.target.value),placeholder:"you@reactor.dev",error:d.email,value:l.email,required:!0}),e(c,{type:"password",label:"Password",autoComplete:"current-password",onChange:r=>s("password",r.target.value),placeholder:"Your password",error:d.password,required:!0,className:"mt-4"}),a("div",{className:"mt-4 flex justify-between",children:[a(t.Group,{children:[e(t,{id:"remember",checked:l.remember,onCheckedChange:r=>s("remember",r)}),e(t.Label,{htmlFor:"remember",children:"Remember me"})]}),u&&e(i,{as:n,size:"sm",href:route("password.request"),children:"Forgot password?"})]}),e(x,{type:"submit",className:"mt-6",radius:"lg",fullWidth:!0,loading:h,children:"Sign in"})]})]})})]})}export{B as default};
