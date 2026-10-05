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
  achievements:[
    {id:"A-001",student:"Ananya Das",className:"Class 5",category:"Academic",title:"Mathematics assessment recognition",date:"29 Sep 2026",award:"Verified school recognition",description:"Placeholder record — replace with the school's actual verified achievement before publishing.",published:false,featured:true},
    {id:"A-002",student:"Student story",className:"Class —",category:"Sports",title:"Add a verified sports achievement",date:"",award:"",description:"Record the competition, position, event and verified result here.",published:false,featured:false}
  ],
  culture:[
    {id:"C-001",title:"School activities & participation",category:"Student Life",date:"",description:"Document sports, cultural programmes, competitions, projects and celebrations that represent the school community.",published:false},
    {id:"C-002",title:"Learning beyond the classroom",category:"Learning",date:"",description:"Capture field activities, exhibitions, clubs, community engagement and other learning experiences.",published:false}
  ],
  ads:[
    {id:"AD-001",title:"Admissions information · 2026–27",description:"Parents and guardians can explore admission information and submit an enquiry for Classes 1–10.",category:"Admissions",cta:"View admissions",href:"#admissions",published:true},
    {id:"AD-002",title:"Stay connected with the digital school",description:"Open the Parent, Student or Teacher portal to explore the current school workflow preview.",category:"School Portal",cta:"Open portal",href:"portal.html",published:true},
    {id:"AD-003",title:"School announcements in one place",description:"Official notices, events, achievements and school culture can be showcased here as the website grows.",category:"School Updates",cta:"Explore updates",href:"#updates",published:true}
  ],
  banners:[
    {id:"banner-admissions-2026",image:"images/banners/admission-2026-desktop.svg",mobileImage:"images/banners/admission-2026-mobile.svg",title:"Admissions Open 2026–27",subtitle:"Classes I–X · Day School & Hostel Facility",description:"Admission enquiries are now being accepted for the 2026–27 session. Providing disciplined, English-medium education in Silachari.",link:"#admissions",buttonText:"Enquire Now",type:"school",badge:"Admissions 2026–27",sponsored:false,style:"style-b",active:true},
    {id:"banner-annual-exhibition",image:"images/banners/annual-exhibition-desktop.svg",mobileImage:"images/banners/annual-exhibition-mobile.svg",title:"Annual Science & Cultural Exhibition 2026",subtitle:"Innovate · Create · Inspire",description:"Student exhibits, working science models and cultural presentations on November 14–16, 2026.",link:"#campus",buttonText:"Explore Campus",type:"school",badge:"School Event",sponsored:false,style:"style-a",active:true},
    {id:"banner-excellence-awards",image:"images/banners/excellence-awards-desktop.svg",mobileImage:"images/banners/excellence-awards-mobile.svg",title:"Celebrating Student Excellence",subtitle:"Academic & Co-Curricular Honours",description:"Commending our students on outstanding performance in state assessments, co-curricular competitions and academic growth.",link:"#achievements",buttonText:"View Achievements",type:"school",badge:"School Achievement",sponsored:false,style:"style-b",active:true},
    {id:"banner-community-bookfair",image:"images/banners/community-bookfair-desktop.svg",mobileImage:"images/banners/community-bookfair-mobile.svg",title:"Silachari Community Educational Book Fair",subtitle:"Community Reading & Educational Resources",description:"Explore curated student books, reading materials and educational stationery in Silachari. Partner educational initiative.",link:"#contact",buttonText:"Partner Details",type:"advertisement",badge:"Sponsored",sponsored:true,style:"style-b",active:true}
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

const savedAchievements=(()=>{try{return JSON.parse(localStorage.getItem("giselaAchievements")||"null")}catch(e){return null}})();
const savedCulture=(()=>{try{return JSON.parse(localStorage.getItem("giselaCulture")||"null")}catch(e){return null}})();
const savedNotices=(()=>{try{return JSON.parse(localStorage.getItem("giselaNotices")||"null")}catch(e){return null}})();
const savedEvents=(()=>{try{return JSON.parse(localStorage.getItem("giselaEvents")||"null")}catch(e){return null}})();
const state = {section:"dashboard", data:structuredClone(demoData)};
if(savedAchievements) state.data.achievements=savedAchievements;
if(savedCulture) state.data.culture=savedCulture;
if(savedNotices) state.data.notices=savedNotices;
if(savedEvents) state.data.events=savedEvents;
const savedAds=(()=>{try{return JSON.parse(localStorage.getItem("giselaAds")||"null")}catch(e){return null}})();
if(savedAds) state.data.ads=savedAds;
const savedBanners=(()=>{try{return JSON.parse(localStorage.getItem("giselaBanners")||"null")}catch(e){return null}})();
if(savedBanners) state.data.banners=savedBanners;
const persistPublicContent=()=>{localStorage.setItem("giselaAchievements",JSON.stringify(state.data.achievements));localStorage.setItem("giselaCulture",JSON.stringify(state.data.culture));localStorage.setItem("giselaAds",JSON.stringify(state.data.ads));localStorage.setItem("giselaBanners",JSON.stringify(state.data.banners));localStorage.setItem("giselaNotices",JSON.stringify(state.data.notices));localStorage.setItem("giselaEvents",JSON.stringify(state.data.events));};
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
  const titles={dashboard:"Dashboard",admissions:"Admissions",notices:"Notices",events:"Events",gallery:"Gallery",banners:"Homepage Banners",ads:"Advertisements",achievements:"Achievements",culture:"School Culture",faculty:"Faculty",settings:"Settings",audit:"Audit Log"};
  $("pageTitle").textContent=titles[section] || "Dashboard"; closeMobile();
  if(section==="dashboard") renderDashboard(); if(section==="admissions") renderAdmissions(); if(section==="notices") renderNotices();
  if(section==="events") renderEvents(); if(section==="gallery") renderGallery(); if(section==="banners") renderBanners(); if(section==="ads") renderAds(); if(section==="achievements") renderAchievements(); if(section==="culture") renderCulture(); if(section==="faculty") renderFaculty(); if(section==="audit") renderAudit();
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
  openModal("Admission details",'<div class="space-y-5"><div class="flex items-start justify-between gap-4"><div><div class="text-xs uppercase tracking-wider font-extrabold text-[#1f6b4b]">'+esc(x.id)+'</div><h3 class="mt-1 text-2xl font-extrabold">'+esc(x.student)+'</h3></div>'+pill(x.status)+'</div><div class="grid sm:grid-cols-2 gap-4 text-sm"><div><div class="admin-label">Parent / Guardian</div><div class="font-bold">'+esc(x.parent)+'</div></div><div><div class="admin-label">Phone</div><div class="font-bold">'+esc(x.phone)+'</div></div><div><div class="admin-label">Class</div><div class="font-bold">'+esc(x.cls)+'</div></div><div><div class="admin-label">Hostel</div><div class="font-bold">'+esc(x.hostel)+'</div></div></div><div><label class="admin-label">Internal notes</label><textarea class="admin-input" rows="4" placeholder="Add a private follow-up note..."></textarea></div><div class="flex justify-end gap-2"><button class="secondary-btn" data-close-modal>Close</button><button class="primary-btn" onclick="showToast(\'Note saved in preview mode.\');closeModal()">Save note</button></div></div>');
};

function renderBanners(){
  $("bannersGrid").innerHTML=state.data.banners.map(x=>'<article class="content-card"><div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2"><span class="content-meta">'+esc(x.type==="advertisement"||x.sponsored?"SPONSORED AD":"SCHOOL BANNER")+'</span>'+(x.style==="style-a"?'<span class="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">Style A (Artwork)</span>':'<span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Style B (Overlay)</span>')+'</div><span class="text-[10px] font-extrabold '+(x.active?"text-emerald-700":"text-slate-400")+'">'+(x.active?"ACTIVE":"INACTIVE")+'</span></div><h3 class="mt-2">'+esc(x.title||"Artwork-only Banner")+'</h3><p class="text-xs text-slate-500 font-semibold">'+esc(x.subtitle||"")+'</p><p class="mt-1">'+esc(x.description||"")+'</p><div class="mt-4 text-xs text-slate-400 truncate">Desktop: '+esc(x.image)+'</div><div class="text-xs text-slate-400 mt-1">Link: '+esc(x.link||"#")+(x.buttonText?" · Button: "+esc(x.buttonText):"")+'</div><div class="mt-5 pt-4 border-t border-slate-100 flex gap-2"><button class="secondary-btn" onclick="togglePublish(\'banner\',\''+x.id+'\')">'+(x.active?"Deactivate":"Activate")+'</button></div></article>').join("") || '<div class="admin-card p-8 text-slate-400">No banners configured yet.</div>';
  lucide.createIcons();
}

function renderAds(){
  $("adsGrid").innerHTML=state.data.ads.map(x=>'<article class="content-card"><div class="flex items-center justify-between gap-3"><span class="content-meta">'+esc(x.category)+'</span><span class="text-[10px] font-extrabold '+(x.published?"text-emerald-700":"text-slate-400")+'">'+(x.published?"LIVE":"DRAFT")+'</span></div><h3>'+esc(x.title)+'</h3><p>'+esc(x.description)+'</p><div class="mt-4 text-xs text-slate-400">Floating card · CTA: '+esc(x.cta)+' · '+esc(x.href)+' · '+esc(x.duration||7)+'s rotation</div><div class="mt-5 pt-4 border-t border-slate-100"><button class="secondary-btn" onclick="togglePublish(\'ad\',\''+x.id+'\')">'+(x.published?"Unpublish":"Publish")+'</button></div></article>').join("") || '<div class="admin-card p-8 text-slate-400">No advertisements created yet.</div>';
  lucide.createIcons();
}

function renderAchievements(){
  $("achievementsGrid").innerHTML=state.data.achievements.map(x=>'<article class="content-card"><div class="flex items-center justify-between gap-3"><span class="content-meta">'+esc(x.category)+'</span><span class="text-[10px] font-extrabold '+(x.published?"text-emerald-700":"text-slate-400")+'">'+(x.published?"LIVE":"DRAFT")+'</span></div><h3>'+esc(x.title)+'</h3><p class="font-bold text-[#1f6b4b]">'+esc(x.student)+' · '+esc(x.className)+'</p><p>'+esc(x.description)+'</p><div class="mt-4 text-xs text-slate-400">'+esc(x.date||"Date to be added")+(x.event?" · "+esc(x.event):"")+(x.award?" · "+esc(x.award):"")+'</div><div class="mt-5 pt-4 border-t border-slate-100 flex gap-2"><button class="secondary-btn" onclick="togglePublish(\'achievement\',\''+x.id+'\')">'+(x.published?"Unpublish":"Publish")+'</button></div></article>').join("");
}
function renderCulture(){
  $("cultureGrid").innerHTML=state.data.culture.map(x=>'<article class="content-card"><div class="flex items-center justify-between gap-3"><span class="content-meta">'+esc(x.category)+'</span><span class="text-[10px] font-extrabold '+(x.published?"text-emerald-700":"text-slate-400")+'">'+(x.published?"LIVE":"DRAFT")+'</span></div><h3>'+esc(x.title)+'</h3><p>'+esc(x.description)+'</p><div class="mt-4 text-xs text-slate-400">'+esc(x.date||"Date to be added")+'</div><div class="mt-5 pt-4 border-t border-slate-100"><button class="secondary-btn" onclick="togglePublish(\'culture\',\''+x.id+'\')">'+(x.published?"Unpublish":"Publish")+'</button></div></article>').join("");
}

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
  const map={notice:"notices",event:"events",gallery:"gallery",ads:"ads",banners:"banners",banner:"banners",faculty:"faculty",achievement:"achievements",culture:"culture"}[type],x=state.data[map].find(a=>a.id===id);if(!x)return;
  if(type==="banner"||type==="banners"){x.active=!x.active;x.published=x.active;} else {x.published=!x.published;}
  state.data.audit.unshift({time:"29 Sep 2026 · now",user:"Administrator",action:(x.active??x.published)?"PUBLISH":"UNPUBLISH",entity:type,details:id});
  if(type==="achievement"){persistPublicContent();renderAchievements()} else if(type==="culture"){persistPublicContent();renderCulture()} else if(type==="ads"){persistPublicContent();renderAds()} else if(type==="banner"||type==="banners"){persistPublicContent();renderBanners()} else ({notice:renderNotices,event:renderEvents,gallery:renderGallery,faculty:renderFaculty}[type])();renderDashboard();showToast(((x.active??x.published)?"Activated":"Deactivated")+" in preview mode.");
};
function openModal(title,body){
  $("modalRoot").innerHTML='<div class="modal-backdrop" role="dialog" aria-modal="true"><div class="modal"><div class="modal-header"><h2 class="font-extrabold text-lg">'+esc(title)+'</h2><button class="modal-close" data-close-modal aria-label="Close"><i data-lucide="x"></i></button></div><div class="modal-body">'+body+'</div></div></div>';
  $("modalRoot").querySelectorAll("[data-close-modal]").forEach(b=>b.addEventListener("click",closeModal));lucide.createIcons();
}
function closeModal(){$("modalRoot").innerHTML=""} window.closeModal=closeModal;
function newContent(type){
  const labels={banner:["New homepage banner","Headline","Description","Category"],ad:["New advertisement","Headline","Description","Category"],notice:["New notice","Title","Description","Category"],event:["New event","Event name","Description","Category"],gallery:["Add gallery image","Caption","Image URL","Category"],faculty:["Add faculty","Name","Short bio","Subject"],achievement:["Add student achievement","Achievement title","Achievement description","Category"],culture:["Add school culture story","Story title","What happened / why it matters","Category"]};
  const [title,a,b,c]=labels[type];
  const special=type==="achievement"||type==="culture"||type==="ad"||type==="banner";
  const fields=special?(type==="banner"?'<div class="full"><label class="admin-label">Banner Title</label><input required class="admin-input" name="title" placeholder="Admissions Open 2026–27"></div><div><label class="admin-label">Subtitle / Tagline</label><input class="admin-input" name="subtitle" placeholder="Classes I–X · Silachari"></div><div><label class="admin-label">Badge text</label><input class="admin-input" name="badge" placeholder="Official Announcement or Sponsored"></div><div class="full"><label class="admin-label">Description (optional for Style A artwork)</label><textarea class="admin-input" rows="2" name="description" placeholder="Short description for Style B overlay..."></textarea></div><div class="full"><label class="admin-label">Desktop Image URL</label><input required class="admin-input" name="image" value="images/banners/admission-2026-desktop.svg"></div><div class="full"><label class="admin-label">Mobile Image URL (optional)</label><input class="admin-input" name="mobileImage" value="images/banners/admission-2026-mobile.svg"></div><div><label class="admin-label">Link URL</label><input class="admin-input" name="link" value="#admissions"></div><div><label class="admin-label">Button Text</label><input class="admin-input" name="buttonText" value="Enquire Now"></div><div><label class="admin-label">Banner Type</label><select class="admin-input" name="bannerType"><option value="school">School Notice / Event</option><option value="advertisement">Sponsored Advertisement</option></select></div><div><label class="admin-label">Sponsored?</label><select class="admin-input" name="sponsored"><option value="false">No (Official)</option><option value="true">Yes (Sponsored Ad)</option></select></div><div class="full"><label class="admin-label">Banner Presentation Style</label><select class="admin-input" name="bannerStyle"><option value="style-b">Style B: Image + Text Overlay + CTA</option><option value="style-a">Style A: Image-Only Promotional Artwork</option></select></div>':type==="ad"?'<div><label class="admin-label">CTA label</label><input class="admin-input" name="cta" placeholder="View admissions"></div><div><label class="admin-label">CTA link</label><input class="admin-input" name="href" placeholder="#admissions"></div><div><label class="admin-label">Rotation time (seconds)</label><input class="admin-input" name="duration" type="number" min="4" max="60" value="7"></div>':type==="achievement"?'<div><label class="admin-label">Student name</label><input required class="admin-input" name="student"></div><div><label class="admin-label">Class / section</label><input class="admin-input" name="className" placeholder="Class 5 · A"></div><div><label class="admin-label">Achievement date</label><input class="admin-input" name="date" placeholder="29 Sep 2026"></div><div><label class="admin-label">Academic year</label><input class="admin-input" name="academicYear" placeholder="2026–27"></div><div><label class="admin-label">Competition / event</label><input class="admin-input" name="event" placeholder="Competition or school event"></div><div><label class="admin-label">Award / result</label><input class="admin-input" name="award" placeholder="1st position, medal, certificate, result..."></div><div><label class="admin-label">Photo URL (optional)</label><input class="admin-input" name="image" placeholder="https://..."></div>':'<div><label class="admin-label">Date</label><input class="admin-input" name="date" placeholder="29 Sep 2026"></div><div><label class="admin-label">Image URL (optional)</label><input class="admin-input" name="image" placeholder="https://..."></div>'):'';
  openModal(title,'<form id="contentForm" class="form-grid">'+(special?fields:'<div class="full"><label class="admin-label">'+a+'</label><input required class="admin-input" name="a"></div><div class="full"><label class="admin-label">'+b+'</label><textarea required class="admin-input" rows="3" name="b"></textarea></div><div><label class="admin-label">'+c+'</label><input class="admin-input" name="c"></div>')+(special&&type==="achievement"?'<div><label class="admin-label">Category</label><select class="admin-input" name="category"><option>Academic</option><option>Sports</option><option>Cultural</option><option>Competition</option><option>Leadership</option><option>Community</option><option>Other</option></select></div>':'')+(special&&type==="culture"?'<div><label class="admin-label">Category</label><select class="admin-input" name="category"><option>Student Life</option><option>Sports</option><option>Cultural</option><option>Learning</option><option>Community</option><option>Celebration</option></select></div>':'')+'<div><label class="admin-label">Status</label><select class="admin-input" name="published"><option value="true">Active / Published</option><option value="false">Draft / Inactive</option></select></div><div class="full flex justify-end gap-2 pt-2"><button type="button" class="secondary-btn" data-close-modal>Cancel</button><button class="primary-btn">Save</button></div></form>');
  $("contentForm").addEventListener("submit",e=>{
    e.preventDefault();const f=new FormData(e.target),id=type[0].toUpperCase()+"-"+String(Date.now()).slice(-4),published=f.get("published")==="true";
    if(type==="banner"){
      state.data.banners.unshift({
        id:"banner-"+Date.now(),
        title:f.get("title")||"",
        subtitle:f.get("subtitle")||"",
        description:f.get("description")||"",
        image:f.get("image")||"images/banners/admission-2026-desktop.svg",
        mobileImage:f.get("mobileImage")||"",
        link:f.get("link")||"#admissions",
        buttonText:f.get("buttonText")||"Learn More",
        type:f.get("bannerType")||"school",
        badge:f.get("badge")||(f.get("sponsored")==="true"?"Sponsored":"Official Announcement"),
        sponsored:f.get("sponsored")==="true",
        style:f.get("bannerStyle")||"style-b",
        active:published
      });
      persistPublicContent();
    }
    if(type==="notice")state.data.notices.unshift({id,title:f.get("a"),description:f.get("b"),category:f.get("c")||"General",date:"29 Sep 2026",priority:"Normal",published});
    if(type==="event")state.data.events.unshift({id,title:f.get("a"),description:f.get("b"),date:"To be confirmed",time:"",location:"School Campus",published});
    if(type==="gallery")state.data.gallery.unshift({id,caption:f.get("a"),category:f.get("c")||"Other",published});
    if(type==="ad")state.data.ads.unshift({id,title:f.get("a"),description:f.get("b"),category:f.get("c")||"School Promotion",cta:f.get("cta")||"Learn more",href:f.get("href")||"#admissions",duration:Math.max(4,Math.min(60,Number(f.get("duration"))||7)),published});
    if(type==="faculty")state.data.faculty.unshift({id,name:f.get("a"),designation:"Teacher",subject:f.get("c")||"Academic",published});
    if(type==="achievement")state.data.achievements.unshift({id,student:f.get("student"),className:f.get("className")||"Class —",category:f.get("category")||"Other",title:f.get("a"),description:f.get("b"),date:f.get("date")||"Date to be added",academicYear:f.get("academicYear")||"",event:f.get("event")||"",award:f.get("award")||"",image:f.get("image")||"",published,featured:false});
    if(type==="culture")state.data.culture.unshift({id,title:f.get("a"),description:f.get("b"),category:f.get("category")||"Student Life",date:f.get("date")||"Date to be added",image:f.get("image")||"",published});
    if(type==="achievement"||type==="culture"||type==="ad"||type==="banner")persistPublicContent();
    state.data.audit.unshift({time:"29 Sep 2026 · now",user:"Administrator",action:"CREATE",entity:type,details:id});
    closeModal();setSection(type==="notice"?"notices":type==="event"?"events":type==="ad"?"ads":type==="banner"?"banners":type);showToast("Saved in preview mode.");
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
const PREVIEW_ADMIN_EMAIL="admin@giselaenglishmedium.edu.in";
const PREVIEW_ADMIN_PASSWORD="Admin@2003";
$("loginForm").addEventListener("submit",e=>{e.preventDefault();const email=$("loginEmail").value.trim().toLowerCase();const password=$("loginPassword").value;if(email!==PREVIEW_ADMIN_EMAIL||password!==PREVIEW_ADMIN_PASSWORD){$("loginStatus").className="mt-4 text-sm rounded-xl px-4 py-3 bg-red-50 text-red-700";$("loginStatus").textContent="Invalid preview admin email or password.";return;}$("loginStatus").className="mt-4 text-sm rounded-xl px-4 py-3 bg-emerald-50 text-emerald-700";$("loginStatus").textContent="Signed in to the admin preview.";setTimeout(()=>{$("loginView").classList.add("hidden");$("appView").classList.remove("hidden");renderDashboard();lucide.createIcons()},300)});
$("logoutBtn").addEventListener("click",()=>{$("appView").classList.add("hidden");$("loginView").classList.remove("hidden");});
renderDashboard();lucide.createIcons();
