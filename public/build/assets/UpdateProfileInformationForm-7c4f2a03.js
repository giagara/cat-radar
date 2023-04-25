import{W as b,j as r,a as e,F as x,d as g}from"./app-09ab4485.js";import{T as C}from"./index-f29db320.js";import{T as l}from"./TextInput-37412c10.js";import{C as i,H as y,T as t,B as T}from"./Text-4d33bba4.js";import{u as N}from"./useCurrentUser-fc8f6040.js";function P({mustVerifyEmail:m,status:d}){const{name:u,email:c,email_verified_at:f}=N(),{data:n,setData:o,patch:p,errors:s,processing:h}=b({name:u,email:c}),v=a=>{a.preventDefault(),p(route("profile.update"),{onSuccess:()=>{C.success("Profile Information has been updated")}})};return r(i,{children:[r(i.Header,{children:[e(y,{size:2,children:"Profile Information"}),e(t,{size:"sm",color:"secondary",children:"Update your account's profile information and email address."})]}),e(i.Body,{children:r("form",{onSubmit:v,className:"space-y-6",children:[e(l,{id:"name",label:"Name",value:n.name,onChange:a=>o("name",a.target.value),error:s.name,required:!0,autoFocus:!0,autoComplete:"name"}),e(l,{id:"email",label:"Email",type:"email",value:n.email,onChange:a=>o("email",a.target.value),error:s.email,required:!0,autoComplete:"email"}),m&&f===null&&r(x,{children:[r("div",{className:"mt-2 flex flex-wrap",children:[e(t,{children:"Your email address is unverified."}),e(g,{href:route("verification.send"),as:"button",method:"post",className:"ml-1 text-blue-600 underline",children:"Re-send the verification email."})]}),d==="verification-link-sent"&&e(t,{className:"mt-2 text-green-600",children:"A new verification link has been sent to your email address."})]}),e(T,{disabled:h,children:"Save"})]})})]})}export{P as default};