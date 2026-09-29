const demoData = {
  admissions: [
    {id:"GEMHS-2026-00007",student:"Riya Deb",cls:"Class 6",parent:"Maya Deb",phone:"98XXXXXX21",hostel:"Required",date:"29 Sep 2026",status:"New"},
    {id:"GEMHS-2026-00006",student:"Arjun Das",cls:"Class 8",parent:"Bikash Das",phone:"97XXXXXX45",hostel:"Not Required",date:"28 Sep 2026",status:"Under Review"},
    {id:"GEMHS-2026-00005",student:"Ananya Roy",cls:"Class 4",parent:"Suman Roy",phone:"96XXXXXX78",hostel:"Not Required",date:"27 Sep 2026",status:"Contacted"},
    {id:"GEMHS-2026-00004",student:"Kabir Paul",cls:"Class 9",parent:"Rakesh Paul",phone:"95XXXXXX12",hostel:"Required",date:"25 Sep 2026",status:"Approved"},
    {id:"GEMHS-2026-00003",student:"Nisha Jamatia",cls:"Class 5",parent:"Kamal Jamatia",phone:"94XXXXXX64",hostel:"Not Required",date:"23 Sep 2026",status:"New"},
    {id:"GEMHS-2026-00002",student:"Dev Saha",cls:"Class 7",parent:"Puja Saha",phone:"93XXXXXX31",hostel:"Not Required",date:"21 Sep 2026",status:"Under Review"},
    {id:"GEMHS-2026-00001",student:"Meera Nath",cls:"Class 3",parent:"Tapan Nath",phone:"92XXXXXX19",hostel:"Required",date:"18 Sep 2026",status:"Rejected"}
  ],
  notices:[
    {id:"N-001",title:"Admission Enquiries — 2026–27",category:"Admission",date:"15 Sep 2026",priority:"Important",published:true,description:"Parents and guardians can use the admission enquiry section to contact the school."},
    {id:"N-002",title:"School information update",category:"General",date:"10 Sep 2026",priority:"Normal",published:true,description:"Updated school information and contact guidance is available on the website."},
    {id:"N-003",title:"Sample draft notice",category:"General",date:"29 Sep 2026",priority:"Normal",published:false,description:"Draft content for demonstration of the admin workflow."}
  ],
  events:[
    {id:"E-001",title:"Parent–Teacher Meeting",date:"12 Oct 2026",time:"10:00 AM",location:"School Campus",published:true,description:"Scheduled school community meeting."},
    {id:"E-002",title:"Sample School Activity",date:"22 Oct 2026",time:"09:30 AM",location:"School Campus",published:false,description:"Draft event for demonstration."}
  ],
  gallery:[
    {id:"G-001",caption:"School campus",category:"Campus",published:true},
    {id:"G-002",caption:"Classroom activity",category:"Classroom",published:true},
    {id:"G-003",caption:"School activity",category:"Activities",published:false}
  ],
  faculty:[
    {id:"F-001",name:"Faculty profile",designation:"Teacher",subject:"Academic",published:true},
    {id:"F-002",name:"Staff profile",designation:"Teacher",subject:"Academic",published:false}
  ],
  audit:[
    {time:"29 Sep 2026 · 14:20",user:"Administrator",action:"OPENED",entity:"Dashboard",details:"Entered administration preview"},
    {time:"29 Sep 2026 · 14:24",user:"Administrator",action:"VIEWED",entity:"Admissions",details:"Opened admission enquiries"},
    {time:"29 Sep 2026 · 14:31",user:"Administrator",action:"PREVIEW",entity:"Notice",details:"Previewed notice publishing workflow"}
  ]
};

const state = {section:"dashboard", data:structuredClone(demoData)};
const $ = id => document.getElementById(id);
const esc = value => String(value ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const statusClass = s => ({New:"status-new","Under Review":"status-review",Contacted:"status-contacted",Approved:"status-approved",Rejected:"status-rejected"}[s] || "status-new");
const pill = s => '<span class="status-pill '+statusClass(s)+'"><span class="w-1.5 h-1.5 rounded-full bg-current"></span>'+esc(s)+'</span>';

function showToast(message){
  const el=$("toast"); el.textContent=message; el.classList.remove("hidden");
  clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>el.classList.add("hidden"),2800);
}
function closeMobile(){$("sidebar").classList.add("-translate-x-full");$("mobileOverlay").classList.add("hidden")}
function setSection(section){
  state.section=section;
  document.querySelectorAll(".admin-section").forEach(el=>el.classList.toggle("hidden",el.id!==section));
  document.querySelectorAll(".nav-item").forEach(el=>el.classList.toggle("active",el.dataset.section===section));
  const titles={dashboard:"Dashboard",admissions:"Admissions",notices:"Notices",events:"Events",gallery:"Gallery",faculty:"Faculty",settings:"Settings",audit:"Audit Log"};
  $("pageTitle").textContent=titles[section] || "Dashboard"; closeMobile();
  if(section==="dashboard") renderDashboard(); if(section==="admissions") renderAdmissions(); if(section==="notices") renderNotices();
  if(section==="events") renderEvents(); if(section==="gallery") renderGallery(); if(section==="faculty") renderFaculty(); if(section==="audit") renderAudit();
  lucide.createIcons();
}
function renderDashboard(){
  const counts=state.data.admissions.reduce((a,x)=>(a[x.status]=(a[x.status]||0)+1,a),{});
  document.querySelector('[data-metric="new"]').textContent=counts.New||0;
  document.querySelector('[data-metric="review"]').textContent=counts["Under Review"]||0;
  document.querySelector('[data-metric="contacted"]').textContent=counts.Contacted||0;
  document.querySelector('[data-metric="approved"]').textContent=counts.Approved||0;
  document.querySelector('[data-metric="notices"]').textContent=state.data.notices.filter(x=>x.published).length;
  $("navNewCount").textContent=counts.New||0;
  $("recentAdmissions").innerHTML=state.data.admissions.slice(0,5).map(x=>'<tr><td><div class="font-bold">'+esc(x.student)+'</div><div class="text-[11px] text-slate-400">'+esc(x.id)+'</div></td><td>'+esc(x.cls)+'</td><td>'+esc(x.date)+'</td><td>'+pill(x.status)+'</td></tr>').join("");
}
function filteredAdmissions(){
  const q=$("admissionSearch").value.trim().toLowerCase(), s=$("statusFilter").value, c=$("classFilter").value, h=$("hostelFilter").value;
  return state.data.admissions.filter(x=>(!q||[x.id,x.student,x.parent,x.phone].join(" ").toLowerCase().includes(q))&&(s==="all"||x.status===s)&&(c==="all"||x.cls===c)&&(h==="all"||x.hostel===h));
}
function renderAdmissions(){
  $("admissionsTable").innerHTML=filteredAdmissions().map(x=>'<tr><td><div class="font-extrabold text-[#1f6b4b]">'+esc(x.id)+'</div></td><td><div class="font-bold">'+esc(x.student)+'</div><div class="text-[11px] text-slate-400">'+esc(x.phone)+'</div></td><td>'+esc(x.cls)+'</td><td>'+esc(x.parent)+'</td><td>'+esc(x.hostel)+'</td><td>'+esc(x.date)+'</td><td><select class="text-xs font-bold border border-slate-200 rounded-lg px-2 py-1.5 bg-white" onchange="changeStatus(\''+x.id+'\',this.value)">'+["New","Under Review","Contacted","Approved","Rejected"].map(s=>'<option '+(s===x.status?"selected":"")+'>'+s+'</option>').join("")+'</select></td><td><button class="secondary-btn" onclick="viewAdmission(\''+x.id+'\')"><i data-lucide="eye"></i> View</button></td></tr>').join("") || '<tr><td colspan="8" class="text-center py-12 text-slate-400">No enquiries match these filters.</td></tr>';
  lucide.createIcons();
}
window.changeStatus=(id,status)=>{const x=state.data.admissions.find(a=>a.id===id);if(!x)return;x.status=status;state.data.audit.unshift({time:"29 Sep 2026 · now",user:"Administrator",action:"UPDATE_STATUS",entity:"Admission",details:id+" → "+status});renderAdmissions();renderDashboard();showToast("Status updated in preview mode.");};
window.viewAdmission=id=>{
  const x=state.data.admissions.find(a=>a.id===id);if(!x)return;
  openModal("Admission details",'<div class="space-y-5"><div class="flex items-start justify-between gap-4"><div><div class="text-xs uppercase tracking-wider font-extrabold text-[#1f6b4b]">'+esc(x.id)+'</div><h3 class="mt-1 text-2xl font-extrabold">'+esc(x.student)+'</h3></div>'+pill(x.status)+'</div><div class="grid sm:grid-cols-2 gap-4 text-sm"><div><div class="admin-label">Parent / Guardian</div><div class="font-bold">'+esc(x.parent)+'</div></div><div><div class="admin-label">Phone</div><div class="font-bold">'+esc(x.phone)+'</div></div><div><div class="admin-label">Class</div><div class="font-bold">'+esc(x.cls)+'</div></div><div><div class="admin-label">Hostel</div><div class="font-bold">'+esc(x.hostel)+'</div></div></div><div><label class="admin-label">Internal notes</label><textarea class="admin-input" rows="4" placeholder="Add a private follow-up note..."></textarea></div><div class="flex justify-end gap-2"><button class="secondary-btn" data-close-modal>Close</button><button class="primary-btn" onclick="showToast('Note saved in preview mode.');closeModal()">Save note</button></div></div>');
};

function renderNotices(){
  $("noticesGrid").innerHTML=state.data.notices.map(x=>'<article class="content-card"><div class="flex items-center justify-between gap-3"><span class="content-meta">'+esc(x.category)+'</span><span class="text-[10px] font-extrabold px-2 py-1 rounded-full '+(x.published?"bg-emerald-50 text-emerald-700":"bg-slate-100 text-slate-500")+'">'+(x.published?"Published":"Draft")+'</span></div><h3>'+esc(x.title)+'</h3><p>'+esc(x.description)+'</p><div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between"><span class="text-xs text-slate-400">'+esc(x.date)+' · '+esc(x.priority)+'</span><button class="secondary-btn" onclick="togglePublish(\'notice\',\''+x.id+'\')">'+(x.published?"Unpublish":"Publish")+'</button></div></article>').join("");
}
function renderEvents(){
  $("eventsGrid").innerHTML=state.data.events.map(x=>'<article class="content-card"><div class="flex items-center justify-between"><span class="content-meta">Event</span><span class="text-[10px] font-extrabold px-2 py-1 rounded-full '+(x.published?"bg-emerald-50 text-emerald-700":"bg-slate-100 text-slate-500")+'">'+(x.published?"Published":"Draft")+'</span></div><h3>'+esc(x.title)+'</h3><p>'+esc(x.description)+'</p><div class="mt-5 text-sm font-bold">'+esc(x.date)+' · '+esc(x.time)+'</div><div class="text-xs text-slate-400 mt-1">'+esc(x.location)+'</div><div class="mt-5 pt-4 border-t border-slate-100"><button class="secondary-btn" onclick="togglePublish(\'event\',\''+x.id+'\')">'+(x.published?"Unpublish":"Publish")+'</button></div></article>').join("");
}
function renderGallery(){
  $("galleryGrid").innerHTML=state.data.gallery.map(x=>'<article class="gallery-card"><div class="gallery-placeholder"><i data-lucide="image"></i></div><div class="gallery-body"><div class="flex justify-between gap-2"><div><div class="font-extrabold">'+esc(x.caption)+'</div><div class="text-xs text-slate-400 mt-1">'+esc(x.category)+'</div></div><span class="text-[10px] font-extrabold '+(x.published?"text-emerald-700":"text-slate-400")+'">'+(x.published?"LIVE":"DRAFT")+'</span></div><button class="secondary-btn mt-4" onclick="togglePublish(\'gallery\',\''+x.id+'\')">'+(x.published?"Unpublish":"Publish")+'</button></div></article>').join(""); lucide.createIcons();
}
function renderFaculty(){
  $("facultyGrid").innerHTML=state.data.faculty.map(x=>'<article class="faculty-card"><div class="faculty-avatar"><i data-lucide="user"></i></div><div class="min-w-0 flex-1"><div class="flex justify-between gap-2"><div><h3>'+esc(x.name)+'</h3><p>'+esc(x.designation)+' · '+esc(x.subject)+'</p></div><span class="text-[10px] font-extrabold '+(x.published?"text-emerald-700":"text-slate-400")+'">'+(x.published?"LIVE":"DRAFT")+'</span></div><button class="secondary-btn mt-4" onclick="togglePublish(\'faculty\',\''+x.id+'\')">'+(x.published?"Unpublish":"Publish")+'</button></div></article>').join(""); lucide.createIcons();
}
function renderAudit(){$("auditTable").innerHTML=state.data.audit.map(x=>'<tr><td class="text-slate-400">'+esc(x.time)+'</td><td class="font-bold">'+esc(x.user)+'</td><td><span class="text-[10px] font-extrabold px-2 py-1 rounded-full bg-slate-100 text-slate-600">'+esc(x.action)+'</span></td><td>'+esc(x.entity)+'</td><td class="text-slate-500">'+esc(x.details)+'</td></tr>').join("");}
window.togglePublish=(type,id)=>{
  const map={notice:"notices",event:"events",gallery:"gallery",faculty:"faculty"}[type],x=state.data[map].find(a=>a.id===id);if(!x)return;x.published=!x.published;
  state.data.audit.unshift({time:"29 Sep 2026 · now",user:"Administrator",action:x.published?"PUBLISH":"UNPUBLISH",entity:type,details:id});
  ({notice:renderNotices,event:renderEvents,gallery:renderGallery,faculty:renderFaculty}[type])();renderDashboard();showToast((x.published?"Published":"Unpublished")+" in preview mode.");
};
function openModal(title,body){
  $("modalRoot").innerHTML='<div class="modal-backdrop" role="dialog" aria-modal="true"><div class="modal"><div class="modal-header"><h2 class="font-extrabold text-lg">'+esc(title)+'</h2><button class="modal-close" data-close-modal aria-label="Close"><i data-lucide="x"></i></button></div><div class="modal-body">'+body+'</div></div></div>';
  $("modalRoot").querySelectorAll("[data-close-modal]").forEach(b=>b.addEventListener("click",closeModal));lucide.createIcons();
}
function closeModal(){$("modalRoot").innerHTML=""} window.closeModal=closeModal;
function newContent(type){
  const labels={notice:["New notice","Title","Description","Category"],event:["New event","Event name","Description","Category"],gallery:["Add gallery image","Caption","Image URL","Category"],faculty:["Add faculty","Name","Short bio","Subject"]};
  const [title,a,b,c]=labels[type];
  openModal(title,'<form id="contentForm" class="form-grid"><div class="full"><label class="admin-label">'+a+'</label><input required class="admin-input" name="a"></div><div class="full"><label class="admin-label">'+b+'</label><textarea required class="admin-input" rows="3" name="b"></textarea></div><div><label class="admin-label">'+c+'</label><input class="admin-input" name="c"></div><div><label class="admin-label">Publish</label><select class="admin-input" name="published"><option value="false">Draft</option><option value="true">Publish</option></select></div><div class="full flex justify-end gap-2 pt-2"><button type="button" class="secondary-btn" data-close-modal>Cancel</button><button class="primary-btn">Save</button></div></form>');
  $("contentForm").addEventListener("submit",e=>{
    e.preventDefault();const f=new FormData(e.target),id=type[0].toUpperCase()+"-"+String(Date.now()).slice(-4),published=f.get("published")==="true";
    if(type==="notice")state.data.notices.unshift({id,title:f.get("a"),description:f.get("b"),category:f.get("c")||"General",date:"29 Sep 2026",priority:"Normal",published});
    if(type==="event")state.data.events.unshift({id,title:f.get("a"),description:f.get("b"),date:"To be confirmed",time:"",location:"School Campus",published});
    if(type==="gallery")state.data.gallery.unshift({id,caption:f.get("a"),category:f.get("c")||"Other",published});
    if(type==="faculty")state.data.faculty.unshift({id,name:f.get("a"),designation:"Teacher",subject:f.get("c")||"Academic",published});
    state.data.audit.unshift({time:"29 Sep 2026 · now",user:"Administrator",action:"CREATE",entity:type,details:id});
    closeModal();setSection(type==="notice"?"notices":type==="event"?"events":type);showToast("Saved in preview mode.");
  });
  $("modalRoot").querySelectorAll("[data-close-modal]").forEach(b=>b.addEventListener("click",closeModal));
}
function openSidebar(){$("sidebar").classList.remove("-translate-x-full");$("mobileOverlay").classList.remove("hidden")}
$("openSidebar").addEventListener("click",openSidebar);$("closeSidebar").addEventListener("click",closeMobile);$("mobileOverlay").addEventListener("click",closeMobile);
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>setSection(b.dataset.section)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>setSection(b.dataset.go)));
document.querySelectorAll("[data-open-modal]").forEach(b=>b.addEventListener("click",()=>newContent(b.dataset.openModal)));
["admissionSearch","statusFilter","classFilter","hostelFilter"].forEach(id=>$(id).addEventListener("input",renderAdmissions));
$("exportAdmissions").addEventListener("click",()=>{
  const rows=filteredAdmissions(),csv=[["Application ID","Student","Class","Parent / Guardian","Phone","Hostel","Date","Status"],...rows.map(x=>[x.id,x.student,x.cls,x.parent,x.phone,x.hostel,x.date,x.status])].map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(",")).join("\\n");
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));a.download="gisela-admissions-preview.csv";a.click();URL.revokeObjectURL(a.href);showToast("Preview CSV exported.");
});
$("saveSettings").addEventListener("click",()=>{$("settingsStatus").textContent="Saved locally for this preview.";showToast("Settings saved in preview mode.")});
$("loginForm").addEventListener("submit",e=>{e.preventDefault();$("loginStatus").className="mt-4 text-sm rounded-xl px-4 py-3 bg-emerald-50 text-emerald-700";$("loginStatus").textContent="Opening frontend preview — authentication is not connected.";setTimeout(()=>{$("loginView").classList.add("hidden");$("appView").classList.remove("hidden");renderDashboard();lucide.createIcons()},450)});
$("logoutBtn").addEventListener("click",()=>{$("appView").classList.add("hidden");$("loginView").classList.remove("hidden");});
renderDashboard();lucide.createIcons();
