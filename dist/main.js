(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("img");n.src="https://www.usda.gov/sites/default/files/2021-06/fsis-tips-restaurant-leftovers-blog-062121.jpg",n.height="300",t.appendChild(n);const d=document.createElement("h1");d.textContent="Welcome to our restaurant!",t.appendChild(d);const c=document.createElement("p");c.textContent="We serve the best food in town. Come and taste it!",t.appendChild(c),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const n=document.querySelector("#content"),d=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div");d.setAttribute("id","home-btn"),c.setAttribute("id","menu-btn"),o.setAttribute("id","contact-btn"),d.classList.add("tab"),c.classList.add("tab"),o.classList.add("tab"),d.textContent="Home",c.textContent="Menu",o.textContent="Contact",n.appendChild(d),n.appendChild(c),n.appendChild(o),d.addEventListener("click",(()=>{t(),e()})),c.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="MENU";const d=document.createElement("ul"),c=document.createElement("li");c.textContent="Hamburger";const o=document.createElement("li");o.textContent="Coke";const a=document.createElement("li");a.textContent="Pudding",d.appendChild(c),d.appendChild(o),d.appendChild(a),t.appendChild(n),t.appendChild(d),e.appendChild(t)})()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.classList.add("contact-form");const d=document.createElement("input");d.type="text",d.placeholder="Enter heading",n.appendChild(d);const c=document.createElement("input");c.type="email",n.appendChild(c);const o=document.createElement("input");o.value="Submit",o.type="submit",n.appendChild(o),t.appendChild(n),e.appendChild(t)})()}))})(),e()})();