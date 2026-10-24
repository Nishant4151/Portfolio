/* ==== EDIT THIS PART: your details and projects ==== */
const CONFIG={
 email:"rajputnishant342@gmail.com",
 whatsapp:"917505297456", /* country code + number, digits only */
 github:"https://github.com/Nishant4151",
 linkedin:"https://www.linkedin.com/in/nishant-chauhan-747356388",
 certificate:"Deloitte_Certificate.pdf",
 projects:[
  {title:"E-Commerce Sales Analysis",problem:"E-commerce order data needed to show which products and categories drive sales.",did:"Cleaned the order data with Python (Pandas and NumPy), visualised sales trends with Matplotlib and Seaborn, and built a Power BI dashboard.",result:"Interactive Power BI dashboard with KPIs and filters that tracks revenue and monthly sales, backed by charts that show the top-selling products and categories.",tags:["Python","Pandas","NumPy","Matplotlib","Seaborn","Power BI"],live:"",code:"",img:""},
  {title:"Student Database Analysis",problem:"Student records needed to be queried for clear answers.",did:"Wrote SQL queries covering joins, CTEs and window functions.",result:"A structured student database (primary keys, auto-increment IDs) where joins, CTEs, window functions, GROUP BY and CASE queries turn raw records into clear summaries.",tags:["SQL","MySQL"],live:"",code:"",img:""},
  {title:"Coca-Cola Sales Analysis",problem:"Sales data needed to show what drives revenue.",did:"Cleaned the data and built an Excel and Power BI dashboard.",result:"Interactive dashboard with slicers and a timeline filter. It showed December as the top sales month and New York as the top state by units sold.",tags:["Excel","Power BI","SQL"],live:"",code:"",img:""},
  {title:"AI Health Assistant",problem:"People struggle to turn health numbers into a usable diet plan.",did:"Streamlit app that calculates BMI, BMR, TDEE and daily calories, then builds diet plans with a LangChain and FAISS retrieval pipeline.",result:"Gives instant BMI, BMR, TDEE and daily calorie targets, then a personalised diet plan drawn from a nutrition knowledge base instead of generic advice.",tags:["Python","Streamlit","LangChain","FAISS"],live:"",code:"",img:""},
  {title:"Expense Tracker Pro",problem:"Daily expenses are hard to follow when they are scattered across notes and apps.",did:"Built a full-stack web app with an HTML, CSS and JavaScript front end and a Node.js server, with expense records stored in MySQL.",result:"Users can add, edit, delete and categorize expenses, and SQL queries give category-wise and monthly spending summaries.",tags:["HTML","CSS","JavaScript","Node.js","MySQL"],live:"",code:"",img:""}
 ],
skillGroups:[
  {label:"Languages",items:["Python","SQL","C# (basic)","Java (basic)","HTML","CSS","JavaScript"]},
  {label:"Database",items:["MySQL","PostgreSQL","MongoDB"]},
  {label:"Data Analysis",items:["Pandas","Polars","NumPy","Matplotlib","Seaborn"]},
  {label:"BI & Excel",items:["Power BI","Excel ( PivotTables, Slicers, XLOOKUP, Dashboards )"]},
  {label:"GenAI",items:["LangChain","FAISS","RAG Pipelines","HuggingFace","LLM API Integration"]},
  {label:"Tools",items:["Git","GitHub","VS Code","Jupyter Notebook"]},
  {label:"Core CS",items:["Data Structures & Algorithms (basic)","OOP Concepts"]}
 ]
};
/* ==== END EDIT AREA ==== */

const COLORS=["var(--c1)","var(--c2)","var(--c3)","var(--c4)"];
const $=s=>document.querySelector(s),esc=t=>t.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const mailto="mailto:"+CONFIG.email+"?subject="+encodeURIComponent("Data Analyst opportunity");
$("#gh").href=CONFIG.github;$("#li").href=CONFIG.linkedin;$("#cert").href=CONFIG.certificate;
$("#gh2").href=CONFIG.github;$("#li2").href=CONFIG.linkedin;
$("#wa").href="https://wa.me/"+CONFIG.whatsapp+"?text="+encodeURIComponent("Hi Nishant, I saw your portfolio and would like to connect.");
$("#mail").href=mailto;$("#mail2").href=mailto;
const em=$("#emailTxt");em.textContent=CONFIG.email;em.href=mailto;
const n=CONFIG.projects.length;
$("#pc").textContent=n;

/* projects */
$("#pgrid").innerHTML=CONFIG.projects.map((p,i)=>`<article class="proj" style="--pc:${COLORS[i%4]}">
 <div>${p.img?`<img src="${esc(p.img)}" alt="Screenshot of ${esc(p.title)}">`:""}
  <h3>${esc(p.title)}</h3>
  <div class="chips">${p.tags.map(t=>`<span class="chip">${esc(t)}</span>`).join("")}</div>
  <div class="links">${p.live?`<a href="${esc(p.live)}" target="_blank" rel="noopener">Live demo</a>`:""}${p.code?`<a href="${esc(p.code)}" target="_blank" rel="noopener">View code</a>`:""}</div></div>
 <dl><div><dt>Problem</dt><dd>${esc(p.problem)}</dd></div><div><dt>What I did</dt><dd>${esc(p.did)}</dd></div><div class="res"><dt>Result</dt><dd>${esc(p.result)}</dd></div></dl>
</article>`).join("");

/* technical skills */
$("#sgrid").innerHTML=CONFIG.skillGroups.map((g,i)=>`<div class="sk-row" style="--c:${COLORS[i%4]}"><b>${esc(g.label)}</b>
 <div class="chips">${g.items.map(t=>`<span class="chip">${esc(t)}</span>`).join("")}</div></div>`).join("");

/* copy buttons */
const toast=m=>{const t=$("#toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1600)};
document.querySelectorAll("[data-copy]").forEach(b=>b.onclick=async()=>{
 try{await navigator.clipboard.writeText(CONFIG[b.dataset.copy]);toast("Copied")}catch(e){toast("Copy failed. Select the text instead.")}});

/* theme */
const root=document.documentElement;let saved=null;try{saved=localStorage.getItem("theme")}catch(e){}
if(saved)root.dataset.theme=saved;else if(matchMedia("(prefers-color-scheme:dark)").matches)root.dataset.theme="dark";
$("#theme").onclick=()=>{const d=root.dataset.theme==="dark"?"light":"dark";root.dataset.theme=d;try{localStorage.setItem("theme",d)}catch(e){}};

/* active nav link */
const links=[...document.querySelectorAll(".top nav a")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.hash==="#"+e.target.id))}),{rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("section[id]").forEach(s=>io.observe(s));

/* scroll progress bar */
const bar=$("#progress");
const prog=()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100)+"%"};
addEventListener("scroll",prog,{passive:true});prog();

/* reveal rows as they scroll into view */
const rvIO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");rvIO.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".proj,.sk-row,.tl li").forEach(el=>{el.classList.add("rv");rvIO.observe(el)});
