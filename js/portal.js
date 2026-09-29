const state={role:'parent',page:'overview'};
const attendanceStudents=[['GE-26001','Ananya Das','Class 5','present'],['GE-26018','Rahul Das','Class 8','present'],['GE-26031','Mira Deb','Class 10','leave'],['GE-26044','Arjun Reang','Class 7','absent'],['GE-26052','Riya Jamatia','Class 5','present'],['GE-26063','Kabir Debbarma','Class 5','present']];
const attendanceHistory=[['29 Sep','Present','Class 5 · Section A'],['28 Sep','Present','Class 5 · Section A'],['27 Sep','Leave','Class 5 · Section A'],['26 Sep','Present','Class 5 · Section A'],['25 Sep','Absent','Class 5 · Section A']];
const roles={parent:{label:'Parent portal',profile:'Parent view · Linked child records will appear here.',avatar:'P'},student:{label:'Student portal',profile:'Student view · Your academic journey will appear here.',avatar:'S'},teacher:{label:'Teacher portal',profile:'Teacher view · Assigned classes and teaching tools will appear here.',avatar:'T'}};
const notices=[['Admissions information','Official admission details will be published here by authorised school staff.'],['Parent meeting','Meeting schedules and circulars will appear here once published.'],['School calendar','Examinations, holidays and activities will be listed in the calendar.']];
const events=[['04','Mathematics assessment'],['08','Parent meeting'],['10','School activity']];
const students=[['GE-26001','Ananya Das','Class 5','Parent linked'],['GE-26018','Rahul Das','Class 8','Parent linked'],['GE-26031','Mira Deb','Class 10','Parent linked'],['GE-26044','Arjun Reang','Class 7','Parent linked']];
function icons(){if(window.lucide)lucide.createIcons()}
function renderNotices(){
 document.getElementById('noticePreview').innerHTML=notices.slice(0,3).map(n=>'<div class="notice-row"><span class="notice-dot"></span><div><h4>'+n[0]+'</h4><p>'+n[1]+'</p></div></div>').join('');
 document.getElementById('noticeList').innerHTML=notices.map(n=>'<article class="portal-card p-5"><span class="tag">Official notice</span><h3 class="font-extrabold mt-3">'+n[0]+'</h3><p class="text-sm text-slate-500 mt-1">'+n[1]+'</p><div class="mt-4 text-[10px] font-bold text-slate-400">Publishing workflow · backend pending</div></article>').join('');
 document.getElementById('eventPreview').innerHTML=events.map(e=>'<div class="event-row"><span class="event-date">'+e[0]+'</span><div><strong>'+e[1]+'</strong><small>October 2026 · Preview</small></div></div>').join('');
}
function renderAttendance(){
 const roster=document.getElementById('attendanceRoster'); if(!roster)return;
 const cl=document.getElementById('attendanceClass')?.value||'Class 5';
 const list=attendanceStudents.filter(s=>s[2]===cl);
 roster.innerHTML=list.map((s,i)=>'<div class="attendance-student"><div class="student-avatar">'+s[1].split(' ').map(x=>x[0]).join('').slice(0,2)+'</div><div class="min-w-0 flex-1"><b>'+s[1]+'</b><small>'+s[0]+'</small></div><div class="attendance-choice"><button class="att-btn present '+(s[3]==='present'?'selected':'')+'" data-att="'+i+'" data-status="present">Present</button><button class="att-btn absent '+(s[3]==='absent'?'selected':'')+'" data-att="'+i+'" data-status="absent">Absent</button><button class="att-btn leave '+(s[3]==='leave'?'selected':'')+'" data-att="'+i+'" data-status="leave">Leave</button></div></div>').join('');
 roster.querySelectorAll('.att-btn').forEach(b=>b.addEventListener('click',()=>{const visible=attendanceStudents.filter(s=>s[2]===cl); visible[Number(b.dataset.att)][3]=b.dataset.status; renderAttendance(); renderAttendanceSummary()}));
}
function renderAttendanceSummary(){
 const cl=document.getElementById('attendanceClass')?.value||'Class 5', list=attendanceStudents.filter(s=>s[2]===cl);
 const counts={present:list.filter(s=>s[3]==='present').length,absent:list.filter(s=>s[3]==='absent').length,leave:list.filter(s=>s[3]==='leave').length};
 const total=list.length||1, pct=Math.round(counts.present/total*100);
 const el=document.getElementById('attendanceSummary'); if(!el)return;
 el.innerHTML=[['Present',counts.present,'green'],['Absent',counts.absent,'red'],['Leave',counts.leave,'gold']].map(x=>'<div class="attendance-kpi"><span>'+x[0]+'</span><b>'+x[1]+'</b><small>'+Math.round(x[1]/total*100)+'% of class · '+cl+'</small></div>').join('');
 const hist=document.getElementById('attendanceHistory'); if(hist)hist.innerHTML=attendanceHistory.map(x=>'<div class="history-row"><span>'+x[0]+'</span><b class="history-'+x[1].toLowerCase()+'">'+x[1]+'</b><small>'+x[2]+'</small></div>').join('');
}
function setRole(role){
 state.role=role;document.querySelectorAll('.role-btn').forEach(b=>b.classList.toggle('active',b.dataset.role===role));
 document.querySelectorAll('.parent-only,.parent-only-card').forEach(el=>el.style.display=role==='parent'?'':'none');
 document.getElementById('attendanceTeacherTools')?.classList.toggle('hidden',role!=='teacher');
 document.getElementById('attendanceSummary')?.classList.toggle('hidden',role!=='teacher');
 document.getElementById('attendancePersonal')?.classList.toggle('hidden',role==='teacher');
 document.getElementById('attendanceSubtitle').textContent=role==='teacher'?'Mark and review daily class attendance.':'View your attendance percentage, monthly totals and recent attendance.';
 document.getElementById('roleLabel').textContent=roles[role].label;document.getElementById('profileText').textContent=roles[role].profile;document.querySelector('.avatar').textContent=roles[role].avatar;icons();
}
function showPage(page){
 state.page=page;document.querySelectorAll('[data-pageview]').forEach(s=>s.classList.toggle('hidden',s.dataset.pageview!==page));
 document.querySelectorAll('.portal-nav').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
 const title=page.charAt(0).toUpperCase()+page.slice(1);document.getElementById('pageTitle').textContent=title;
 document.getElementById('portalSidebar').classList.remove('open');
}
document.querySelectorAll('[data-role]').forEach(b=>b.addEventListener('click',()=>setRole(b.dataset.role)));
document.getElementById('loginForm').addEventListener('submit',e=>{e.preventDefault();setRole(state.role);document.getElementById('loginView').classList.add('hidden');document.getElementById('portalView').classList.remove('hidden');showPage('overview');icons();});
document.getElementById('forgotBtn').addEventListener('click',()=>{const s=document.getElementById('loginStatus');s.classList.remove('hidden');s.textContent='Password recovery will use the school’s verified email workflow after authentication is connected.'});
function renderStudents(){
 const q=(document.getElementById('studentSearch')?.value||'').toLowerCase(), cl=document.getElementById('classFilter')?.value||'';
 const list=students.filter(s=>(!q||s.join(' ').toLowerCase().includes(q))&&(!cl||s[2]===cl));
 const el=document.getElementById('studentList'); if(!el)return;
 el.innerHTML=list.map(s=>'<div class="student-row"><div class="student-avatar">'+s[1].split(' ').map(x=>x[0]).join('').slice(0,2)+'</div><div class="min-w-0 flex-1"><div class="font-extrabold text-sm">'+s[1]+'</div><div class="text-xs text-slate-500 mt-1">'+s[2]+' · '+s[0]+'</div></div><span class="tag">'+s[3]+'</span></div>').join('')||'<div class="p-8 text-center text-sm text-slate-400">No matching students.</div>';
}
document.querySelectorAll('.portal-nav').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
document.querySelectorAll('[data-pagego]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.pagego)));
document.getElementById('mobilePortalMenu').addEventListener('click',()=>document.getElementById('portalSidebar').classList.toggle('open'));
document.getElementById('studentSearch')?.addEventListener('input',renderStudents);
document.getElementById('classFilter')?.addEventListener('change',renderStudents);
document.getElementById('logout').addEventListener('click',()=>{document.getElementById('portalView').classList.add('hidden');document.getElementById('loginView').classList.remove('hidden')});
window.addEventListener('DOMContentLoaded',()=>{renderNotices();renderStudents();renderAttendance();renderAttendanceSummary();const d=document.getElementById('attendanceDate');if(d)d.value='2026-09-29';icons()});
document.getElementById('attendanceClass')?.addEventListener('change',()=>{renderAttendance();renderAttendanceSummary()});
document.getElementById('markAllPresent')?.addEventListener('click',()=>{const cl=document.getElementById('attendanceClass').value;attendanceStudents.filter(s=>s[2]===cl).forEach(s=>s[3]='present');renderAttendance();renderAttendanceSummary()});
document.getElementById('saveAttendance')?.addEventListener('click',()=>{const s=document.getElementById('attendanceStatus');s.classList.remove('hidden');s.textContent='Attendance saved in preview mode. Live database persistence will be enabled in the backend phase.'});
