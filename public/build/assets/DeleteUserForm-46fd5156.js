import{r as m,W as y,j as r,a as e}from"./app-09ab4485.js";import{T as f}from"./TextInput-37412c10.js";import{C as o,H as w,T as g,b as a,B as s}from"./Text-4d33bba4.js";function D(){const n=m.useRef(),{data:l,setData:d,delete:c,processing:i,reset:u,errors:p}=y({password:""}),h=t=>{t.preventDefault(),c(route("profile.destroy"),{preserveScroll:!0,onError:()=>n.current.focus(),onFinish:()=>u()})};return r(o,{children:[r(o.Header,{children:[e(w,{size:2,children:"Delete Account"}),r(g,{size:"sm",color:"secondary",children:["Once your account is deleted, all of its resources and data will be permanently deleted. ",e("br",{})," Before deleting your account, please download any data or information that you wish to retain."]})]}),e(o.Body,{children:r(a,{children:[e(a.Trigger,{asChild:!0,children:e(s,{variant:"red",children:"Delete Account"})}),r(a.Content,{className:"sm:max-w-[425px]",children:[r(a.Header,{children:[e(a.Title,{children:"Are you sure you want to delete your account?"}),e(a.Description,{children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you wouldlike to permanently delete your account."})]}),r("form",{onSubmit:h,children:[e(f,{id:"password",label:"Password",type:"password",ref:n,value:l.password,onChange:t=>d("password",t.target.value),autoFocus:!0,placeholder:"Password",error:p.password}),r("div",{className:"mt-6 flex justify-end",children:[e(a.Close,{asChild:!0,children:e(s,{variant:"gray",children:"Cancel"})}),e(s,{variant:"red",className:"ml-3",disabled:i,children:"Delete Account"})]})]})]})]})})]})}export{D as default};