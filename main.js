(()=>{class e{constructor(e,t,s,o){this.title=e,this.description=t,this.status=s,this.colorCode=o}getTitle(){return this.title}getDescription(){return this.description}getColorCode(){return this.colorCode}}class t{constructor(e,t,s){this.title=e,this.description=t,this.tasks=[],this.colorCode=s}addTask(t,s,o,c){this.tasks.push(new e(t,s,c))}addTask(e){this.tasks.push(e)}length(){return this.tasks.length}deleteTask(e){this.tasks.splice(e,1)}}let s=[],o=new t("Default Project","This is a default project","red");s.push(o);let c=new e("Default Task","This is a default task","In Progress","red");function r(){const e=document.querySelector(".project-list"),t=document.createElement("div");t.classList.add("project-card"),e.appendChild(t);for(let e=0;e<s.length;e++)t.innerHTML=`\n        <div class="project-card">\n        <p class="project-title">${s[e].title}</p>\n    </div>`}function n(e){const t=document.querySelector(".to-do"),s=document.querySelector(".in-progress"),o=document.querySelector(".completed");t.innerHTML="",s.innerHTML="",o.innerHTML="";for(let c=0;c<e.length();c++){const r=`<div class="task-card"><p>${e.tasks[c].title}</p>\n        <p>${e.tasks[c].description}</p>\n        <p>${e.tasks[c].colorCode}</p></div>`;"To Do"===e.tasks[c].status?t.innerHTML+=r:"In Progress"===e.tasks[c].status?s.innerHTML+=r:"Completed"===e.tasks[c].status&&(o.innerHTML+=r)}}o.addTask(c);const l=document.querySelector("#project-modal"),d=document.querySelector("#task-modal");document.querySelector("#project-close").addEventListener("click",(()=>{l.style.display="none"})),document.querySelector("#task-close").addEventListener("click",(()=>{d.style.display="none"})),document.querySelector(".add-project").addEventListener("click",(()=>{l.style.display="block"})),document.querySelector(".add-task").addEventListener("click",(()=>{d.style.display="block"})),document.querySelector(".project-submit").addEventListener("click",(e=>{const o=document.querySelector("#project-title").value,c=document.querySelector("#project-description").value,l=document.querySelector("#project-color").value;e.preventDefault(),s.push(new t(o,c,l)),r(),n(s[s.length-1])})),document.querySelector(".task-submit").addEventListener("click",(()=>{const e=document.querySelector("#task-title").value,t=document.querySelector("#task-description").value,o=document.querySelector("#task-status").value,c=document.querySelector("#task-color").value;s[0].addTask(e,t,o,c),n(s[s.length-1])})),r(),n(o)})();