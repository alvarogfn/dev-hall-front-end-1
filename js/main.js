const submitForm=()=>{const t=({target:e})=>{m[e.id]=e.value,n(m.name,m.tel)},n=(e,t)=>{const n=RegExp(/^[A-zÀ-ú '´]*$/),o=RegExp(/^\([0-9]{2}\) [0-9]{5} [0-9]{4}/);return!(!n.test(e)||!o.test(t))},e=document.getElementById.bind(document),o=e("form");o.onsubmit=e=>e.preventDefault();const a=e("name"),c=e("tel"),d=e("submit"),m={name:a.value,tel:c.value};["keyup","change","blur"].forEach(e=>{a.addEventListener(e,e=>t(e)),c.addEventListener(e,e=>t(e))}),d.addEventListener("click",()=>{n(m.name,m.tel)&&(e=>{try{if(null!==document.getElementById("contact-modal"))throw new Error}catch{document.getElementById("contact-modal").remove()}finally{const t=document.getElementById("contact"),n=document.createElement("aside");n.classList.add("modal"),n.id="contact-modal";const o=document.createElement("h1");o.innerText=e.title,o.classList.add("modal__title");const a=document.createElement("p");a.innerText=e.content,a.classList.add("modal__content"),n.appendChild(o),n.appendChild(a),t.appendChild(n),setTimeout(()=>{n.remove()},5e3)}})({title:`Recebemos seu contato ${m.name}.`,content:"Entraremos em contato em breve!"})})};submitForm();
//# sourceMappingURL=main.js.map
