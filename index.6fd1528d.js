!function(){var t=document.querySelector("button[data-action='follow']"),e=document.querySelector("#value"),o="bgColor",l="btnText",a="status",n="followers",c=100500,r=!1;t.textContent=localStorage.getItem(l)||"Follow",t.style.background=localStorage.getItem(o)||"#EBD8FF",r=localStorage.getItem(a)||!1,e.textContent=localStorage.getItem(n)||"100,500",t.addEventListener("click",(function(){!0===r?(c-=1,e.textContent=c.toLocaleString("en-US"),t.style.background="#EBD8FF",t.textContent="Follow",r=!1,localStorage.setItem(o,"#EBD8FF"),localStorage.setItem(l,"Follow"),localStorage.setItem(a,!1),localStorage.setItem(n,e.textContent)):(c+=1,e.textContent=c.toLocaleString("en-US"),t.style.background="#5CD3A8",t.textContent="Following",r=!0,localStorage.setItem(o,"#5CD3A8"),localStorage.setItem(l,"Following"),localStorage.setItem(a,!0),localStorage.setItem(n,e.textContent))}))}();
//# sourceMappingURL=index.6fd1528d.js.map