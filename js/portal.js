const state={role:'parent',page:'overview'};
const attendanceStudents=[['GE-26001','Ananya Das','Class 5','Section A','present'],['GE-26052','Riya Jamatia','Class 5','Section A','present'],['GE-26063','Kabir Debbarma','Class 5','Section B','present'],['GE-26011','Ishaan Deb','Class 6','Section A','absent'],['GE-26072','Naina Reang','Class 6','Section B','present'],['GE-26044','Arjun Reang','Class 7','Section A','absent'],['GE-26077','Tania Jamatia','Class 7','Section B','present'],['GE-26018','Rahul Das','Class 8','Section A','present'],['GE-26081','Rohan Debbarma','Class 8','Section B','leave'],['GE-26091','Puja Reang','Class 9','Section A','present'],['GE-26095','Milan Deb','Class 9','Section B','present'],['GE-26031','Mira Deb','Class 10','Section A','leave'],['GE-26102','Ankit Jamatia','Class 10','Section B','present']];
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
 const cl=document.getElementById('attendanceClass')?.value||'Class 5',sec=document.getElementById('attendanceSection')?.value||'Section A';
 const list=attendanceStudents.filter(s=>s[2]===cl&&s[3]===sec);
 roster.innerHTML=list.map((s,i)=>'<div class="attendance-student"><div class="student-avatar">'+s[1].split(' ').map(x=>x[0]).join('').slice(0,2)+'</div><div class="min-w-0 flex-1"><b>'+s[1]+'</b><small>'+s[0]+' · '+s[3]+'</small></div><div class="attendance-choice"><button class="att-btn present '+(s[4]==='present'?'selected':'')+'" data-att="'+i+'" data-status="present">Present</button><button class="att-btn absent '+(s[4]==='absent'?'selected':'')+'" data-att="'+i+'" data-status="absent">Absent</button><button class="att-btn leave '+(s[4]==='leave'?'selected':'')+'" data-att="'+i+'" data-status="leave">Leave</button></div></div>').join('')||'<div class="p-5 text-sm text-slate-400">No students found for this class and section.</div>';
 roster.querySelectorAll('.att-btn').forEach(b=>b.addEventListener('click',()=>{const visible=attendanceStudents.filter(s=>s[2]===cl&&s[3]===sec);visible[Number(b.dataset.att)][4]=b.dataset.status;renderAttendance();renderAttendanceSummary()}));
}
function renderAttendanceSummary(){
 const cl=document.getElementById('attendanceClass')?.value||'Class 5',sec=document.getElementById('attendanceSection')?.value||'Section A',list=attendanceStudents.filter(s=>s[2]===cl&&s[3]===sec);
 const counts={present:list.filter(s=>s[4]==='present').length,absent:list.filter(s=>s[4]==='absent').length,leave:list.filter(s=>s[4]==='leave').length};
 const total=list.length||1,el=document.getElementById('attendanceSummary');if(!el)return;
 el.innerHTML=[['Present',counts.present],['Absent',counts.absent],['Leave',counts.leave]].map(x=>'<div class="attendance-kpi"><span>'+x[0]+'</span><b>'+x[1]+'</b><small>'+Math.round(x[1]/total*100)+'% of class · '+cl+' · '+sec+'</small></div>').join('');
 const hist=document.getElementById('attendanceHistory');if(hist)hist.innerHTML=attendanceHistory.map(x=>'<div class="history-row"><span>'+x[0]+'</span><b class="history-'+x[1].toLowerCase()+'">'+x[1]+'</b><small>'+x[2]+'</small></div>').join('');
}
function setRole(role){
 state.role=role;document.querySelectorAll('.role-btn').forEach(b=>b.classList.toggle('active',b.dataset.role===role));
 document.querySelectorAll('.parent-only,.parent-only-card').forEach(el=>el.style.display=role==='parent'?'':'none');
 document.getElementById('attendanceTeacherTools')?.classList.toggle('hidden',role!=='teacher');
 document.querySelectorAll('.teacher-admin-only').forEach(el=>el.classList.toggle('hidden',role!=='teacher'));
 if(role!=='teacher'&&state.page==='students')showPage('overview');
 document.getElementById('attendanceSummary')?.classList.toggle('hidden',role!=='teacher');
 document.getElementById('attendancePersonal')?.classList.toggle('hidden',role==='teacher');
 document.getElementById('attendanceSubtitle').textContent=role==='teacher'?'Mark and review daily class attendance.':'View your attendance percentage, monthly totals and recent attendance.';
 document.getElementById('roleLabel').textContent=roles[role].label;document.getElementById('profileText').textContent=roles[role].profile;document.querySelector('.avatar').textContent=roles[role].avatar;icons();
}
function showPage(page){
 if(page==='students'&&state.role!=='teacher')page='overview';
 state.page=page;document.querySelectorAll('[data-pageview]').forEach(s=>s.classList.toggle('hidden',s.dataset.pageview!==page));
 document.querySelectorAll('.portal-nav').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
 document.getElementById('pageTitle').textContent=page.charAt(0).toUpperCase()+page.slice(1);document.getElementById('portalSidebar').classList.remove('open');
}
function syncPhase4Role(){const teacher=state.role==='teacher';document.querySelectorAll('.teacher-admin-only').forEach(el=>el.classList.toggle('hidden',!teacher));document.getElementById('academicTeacherTools')?.classList.toggle('hidden',!teacher);document.getElementById('assignmentTeacherTools')?.classList.toggle('hidden',!teacher)}
document.querySelectorAll('[data-role]').forEach(b=>b.addEventListener('click',()=>{setRole(b.dataset.role);syncPhase4Role()}));
document.getElementById('loginForm').addEventListener('submit',e=>{e.preventDefault();setRole(state.role);syncPhase4Role();document.getElementById('loginView').classList.add('hidden');document.getElementById('portalView').classList.remove('hidden');showPage('overview');icons()});
document.getElementById('forgotBtn').addEventListener('click',()=>{const s=document.getElementById('loginStatus');s.classList.remove('hidden');s.textContent='Password recovery will use the school’s verified email workflow after authentication is connected.'});
function renderStudents(){
 const q=(document.getElementById('studentSearch')?.value||'').toLowerCase(),cl=document.getElementById('classFilter')?.value||'',list=students.filter(s=>(!q||s.join(' ').toLowerCase().includes(q))&&(!cl||s[2]===cl)),el=document.getElementById('studentList');if(!el)return;
 el.innerHTML=list.map(s=>'<div class="student-row"><div class="student-avatar">'+s[1].split(' ').map(x=>x[0]).join('').slice(0,2)+'</div><div class="min-w-0 flex-1"><div class="font-extrabold text-sm">'+s[1]+'</div><div class="text-xs text-slate-500 mt-1">'+s[2]+' · '+s[0]+'</div></div><span class="tag">'+s[3]+'</span></div>').join('')||'<div class="p-8 text-center text-sm text-slate-400">No matching students.</div>';
}
document.querySelectorAll('.portal-nav').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
document.querySelectorAll('[data-pagego]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.pagego)));
document.getElementById('mobilePortalMenu').addEventListener('click',()=>document.getElementById('portalSidebar').classList.toggle('open'));
document.getElementById('studentSearch')?.addEventListener('input',renderStudents);document.getElementById('classFilter')?.addEventListener('change',renderStudents);
document.getElementById('logout').addEventListener('click',()=>{document.getElementById('portalView').classList.add('hidden');document.getElementById('loginView').classList.remove('hidden')});
window.addEventListener('DOMContentLoaded',()=>{renderNotices();renderStudents();renderAttendance();renderAttendanceSummary();const d=document.getElementById('attendanceDate');if(d)d.value='2026-09-29';icons()});
document.getElementById('attendanceClass')?.addEventListener('change',()=>{renderAttendance();renderAttendanceSummary()});document.getElementById('attendanceSection')?.addEventListener('change',()=>{renderAttendance();renderAttendanceSummary()});
document.getElementById('markAllPresent')?.addEventListener('click',()=>{const cl=document.getElementById('attendanceClass').value,sec=document.getElementById('attendanceSection').value;attendanceStudents.filter(s=>s[2]===cl&&s[3]===sec).forEach(s=>s[4]='present');renderAttendance();renderAttendanceSummary()});
document.getElementById('saveAttendance')?.addEventListener('click',()=>{const s=document.getElementById('attendanceStatus');s.classList.remove('hidden');s.textContent='Attendance saved in preview mode. Live database persistence will be enabled in the backend phase.'});
const academicRecords=[['English','Class Test','84','A'],['Mathematics','Unit Test','91','A+'],['Science','Class Test','78','B+'],['Social Science','Class Test','82','A']];
const resultRecords=[['English','100','84','A'],['Mathematics','100','91','A+'],['Science','100','78','B+'],['Social Science','100','82','A']];
const academicStudents=[['GE-26001','Ananya Das','82'],['GE-26052','Riya Jamatia','88'],['GE-26063','Kabir Debbarma','76']];
let assignments=[
 {id:'ASG-001',subject:'Mathematics',title:'Chapter exercise',className:'Class 5',section:'All sections',due:'05 Oct 2026',dueState:'Due soon',priority:'Important',status:'Published',description:'Complete the assigned textbook questions.',submissions:{submitted:2,pending:1}},
 {id:'ASG-002',subject:'English',title:'Reading activity',className:'Class 5',section:'Section A',due:'08 Oct 2026',dueState:'Upcoming',priority:'Normal',status:'Published',description:'Read the selected passage and prepare five sentences.',submissions:{submitted:1,pending:2}},
 {id:'ASG-003',subject:'Science',title:'Observation worksheet',className:'Class 5',section:'All sections',due:'12 Oct 2026',dueState:'Upcoming',priority:'Normal',status:'Published',description:'Complete the classroom observation worksheet.',submissions:{submitted:0,pending:3}}
];
const assignmentSubmissions=[
 {name:'Ananya Das',studentId:'GE-26001',assignmentId:'ASG-001',status:'Submitted',submittedOn:'29 Sep 2026',score:'',feedback:'',fileName:'Ananya_Das_Chapter_Exercise.pdf'},
 {name:'Riya Jamatia',studentId:'GE-26052',assignmentId:'ASG-001',status:'Submitted',submittedOn:'29 Sep 2026',score:'',feedback:'',fileName:'Riya_Jamatia_Chapter_Exercise.pdf'},
 {name:'Kabir Debbarma',studentId:'GE-26063',assignmentId:'ASG-001',status:'Pending',submittedOn:'—',score:'',feedback:'',fileName:''}
];
let selectedSubmissionIndex=0;
let studentSubmission={assignmentId:'ASG-001',status:'Pending',submittedOn:'—',fileName:''};
function renderAcademics(){const t=document.getElementById('academicTable');if(t)t.innerHTML=academicRecords.map(r=>'<tr><td>'+r[0]+'</td><td>'+r[1]+'</td><td>'+r[2]+'/100</td><td><span class="tag">'+r[3]+'</span></td></tr>').join('');const r=document.getElementById('resultTable');if(r)r.innerHTML=resultRecords.map(x=>'<tr><td>'+x[0]+'</td><td>'+x[1]+'</td><td>'+x[2]+'</td><td><span class="tag">'+x[3]+'</span></td></tr>').join('');const roster=document.getElementById('academicRoster');if(roster)roster.innerHTML=academicStudents.map((s,i)=>'<div class="attendance-student"><div class="student-avatar">'+s[1].split(' ').map(x=>x[0]).join('').slice(0,2)+'</div><div class="min-w-0 flex-1"><b>'+s[1]+'</b><small>'+s[0]+' · Class 5</small></div><input class="field-input academic-mark" data-index="'+i+'" type="number" min="0" max="100" value="'+s[2]+'" style="max-width:110px"></div>').join('')}
function renderStudentAssignment(){
 const panel=document.getElementById('studentAssignmentPanel'),detail=document.getElementById('studentAssignmentDetail');if(!panel||!detail)return;
 panel.classList.toggle('hidden',state.role==='teacher');
 const a=assignments.find(x=>x.id===studentSubmission.assignmentId)||assignments[0];if(!a)return;
 detail.innerHTML='<div class="grid lg:grid-cols-3 gap-4"><div class="lg:col-span-2"><div class="flex flex-wrap gap-2"><span class="tag">'+a.subject+'</span><span class="tag blue">'+a.className+' · '+a.section+'</span><span class="tag">'+a.status+'</span></div><h4 class="font-extrabold text-lg mt-3">'+a.title+'</h4><p class="text-sm text-slate-500 mt-2">'+a.description+'</p><div class="mt-4 grid sm:grid-cols-3 gap-3"><div class="summary-cell"><b>'+a.due+'</b><span>Due date</span></div><div class="summary-cell"><b>'+a.priority+'</b><span>Priority</span></div><div class="summary-cell"><b>'+studentSubmission.status+'</b><span>My status</span></div></div></div><div class="rounded-2xl border border-dashed border-slate-300 p-4"><label class="field-label">Select assignment</label><select id="studentAssignmentSelect" class="field-input">'+assignments.filter(x=>x.status==='Published').map(x=>'<option value="'+x.id+'" '+(x.id===studentSubmission.assignmentId?'selected':'')+'>'+x.subject+' · '+x.title+'</option>').join('')+'</select><label class="field-label mt-4">Work file</label><input id="studentWorkFile" type="file" class="field-input" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"><div id="studentFileName" class="text-xs text-slate-400 mt-2">'+(studentSubmission.fileName||'No file selected')+'</div><button id="submitAssignment" class="mt-4 w-full attendance-action primary">Submit assignment</button><div id="studentSubmissionStatus" class="hidden mt-3 status-box"></div></div></div>';
 document.getElementById('studentAssignmentSelect')?.addEventListener('change',e=>{studentSubmission.assignmentId=e.target.value;studentSubmission.status='Pending';studentSubmission.submittedOn='—';studentSubmission.fileName='';renderStudentAssignment()});
 document.getElementById('studentWorkFile')?.addEventListener('change',e=>{studentSubmission.fileName=e.target.files[0]?.name||'';const n=document.getElementById('studentFileName');if(n)n.textContent=studentSubmission.fileName||'No file selected'});
 document.getElementById('submitAssignment')?.addEventListener('click',()=>{if(!studentSubmission.fileName){const s=document.getElementById('studentSubmissionStatus');s.classList.remove('hidden');s.textContent='Choose a work file before submitting.';return}studentSubmission.status='Submitted';studentSubmission.submittedOn='29 Sep 2026';const s=document.getElementById('studentSubmissionStatus');s.classList.remove('hidden');s.textContent='Assignment submitted in preview mode. Live file storage and teacher review will be connected in the backend.';renderStudentAssignment()});
}
function renderAssignmentReview(){
 const list=document.getElementById('assignmentReviewList'),detail=document.getElementById('assignmentReviewDetail');if(!list||!detail)return;
 list.innerHTML=assignmentSubmissions.map((s,i)=>'<button type="button" class="student-row text-left w-full" data-review-index="'+i+'"><div class="student-avatar">'+s.name.split(' ').map(x=>x[0]).join('').slice(0,2)+'</div><div class="min-w-0 flex-1"><b>'+s.name+'</b><small>'+s.studentId+' · '+s.assignmentId+'</small></div><span class="'+(s.status==='Submitted'||s.status==='Reviewed'?'tag':'due')+'">'+s.status+'</span><span class="text-xs text-slate-400">'+s.submittedOn+'</span></button>').join('');
 list.querySelectorAll('[data-review-index]').forEach(btn=>btn.addEventListener('click',()=>{selectedSubmissionIndex=Number(btn.dataset.reviewIndex);renderAssignmentReview()}));
 const s=assignmentSubmissions[selectedSubmissionIndex];detail.classList.remove('hidden');
 const a=assignments.find(x=>x.id===s.assignmentId);
 detail.innerHTML='<div class="flex flex-col lg:flex-row gap-4 lg:items-start lg:justify-between"><div><span class="tag blue">Reviewing</span><h4 class="font-extrabold text-lg mt-2">'+s.name+'</h4><p class="text-xs text-slate-500">'+s.studentId+' · '+(a?.title||s.assignmentId)+' · Submitted '+s.submittedOn+'</p><div class="mt-3 rounded-xl bg-white border border-slate-200 p-3 text-sm"><b>Work file</b><div class="text-slate-500 mt-1">'+(s.fileName||'No file submitted yet')+'</div></div></div><div class="lg:w-[420px]"><label class="field-label">Score</label><input id="reviewScore" class="field-input" type="number" min="0" max="100" value="'+s.score+'" placeholder="0–100"><label class="field-label mt-3">Teacher feedback</label><textarea id="reviewFeedback" class="field-input" rows="4" placeholder="Write feedback for the student...">'+s.feedback+'</textarea><div class="flex flex-wrap gap-2 mt-3"><button id="saveReview" class="attendance-action primary">Save review</button><button id="markReviewed" class="attendance-action secondary">Mark as reviewed</button></div><div id="reviewStatus" class="hidden mt-3 status-box"></div></div></div>';
 document.getElementById('saveReview')?.addEventListener('click',()=>{s.score=document.getElementById('reviewScore').value;s.feedback=document.getElementById('reviewFeedback').value.trim();s.status='Reviewed';const z=document.getElementById('reviewStatus');z.classList.remove('hidden');z.textContent='Review saved in preview mode. Score and feedback are not yet stored in the database.';renderAssignmentReview()});
 document.getElementById('markReviewed')?.addEventListener('click',()=>{s.status='Reviewed';const z=document.getElementById('reviewStatus');z.classList.remove('hidden');z.textContent='Submission marked as reviewed in preview mode.';renderAssignmentReview()});
}
function renderAssignments(){
 const el=document.getElementById('assignmentList');if(!el)return;
 const fc=document.getElementById('assignmentFilterClass')?.value||'',fs=document.getElementById('assignmentFilterStatus')?.value||'',fd=document.getElementById('assignmentFilterDue')?.value||'';
 const list=assignments.filter(a=>(!fc||a.className===fc)&&(!fs||a.status===fs)&&(!fd||a.dueState===fd));
 el.innerHTML=list.length?list.map(a=>'<article class="portal-card p-5"><div class="flex flex-col lg:flex-row lg:items-start justify-between gap-4"><div class="min-w-0"><div class="flex flex-wrap gap-2"><span class="tag">'+a.subject+'</span><span class="tag blue">'+a.className+' · '+a.section+'</span><span class="tag">'+a.status+'</span></div><h3 class="font-extrabold mt-3 text-base">'+a.title+'</h3><p class="text-sm text-slate-500 mt-1">'+a.description+'</p><div class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400"><span>Due '+a.due+'</span><span>'+a.priority+' priority</span><span>'+a.submissions.submitted+' submitted · '+a.submissions.pending+' pending</span></div></div><div class="flex lg:flex-col items-start gap-2"><span class="due">'+a.dueState+'</span><span class="text-[10px] text-slate-400 font-bold">'+a.id+'</span></div></div></article>').join(''):'<div class="portal-card p-8 text-center text-sm text-slate-400">No assignments match the selected filters.</div>';
 renderAssignmentReview();
 renderStudentAssignment();
}
document.getElementById('saveAcademic')?.addEventListener('click',()=>{[...document.querySelectorAll('.academic-mark')].forEach((el,i)=>academicStudents[i][2]=el.value||'0');const s=document.getElementById('academicStatus');s.classList.remove('hidden');s.textContent='Marks saved in preview mode. Database persistence will be enabled with the backend.';renderAcademics()});
document.getElementById('createAssignment')?.addEventListener('click',()=>{
 const title=document.getElementById('assignmentTitle').value.trim(),subject=document.getElementById('assignmentSubject').value,className=document.getElementById('assignmentClass').value,section=document.getElementById('assignmentSection').value,due=document.getElementById('assignmentDue').value,priority=document.getElementById('assignmentPriority').value,status=document.getElementById('assignmentPublishStatus').value,desc=document.getElementById('assignmentDescription').value.trim(),s=document.getElementById('assignmentStatus');
 if(!title||!due){s.classList.remove('hidden');s.textContent='Enter an assignment title and due date.';return}
 const date=new Date(due+'T00:00:00').toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
 assignments.unshift({id:'ASG-'+String(assignments.length+1).padStart(3,'0'),subject,title,className,section,due:date,dueState:status==='Draft'?'Draft':'New',priority,status,description:desc||'Assignment instructions will be provided by the teacher.',submissions:{submitted:0,pending:section==='All sections'?3:2}});
 renderAssignments();s.classList.remove('hidden');s.textContent=status==='Draft'?'Assignment saved as draft in preview mode.':'Assignment published in preview mode.';
 document.getElementById('assignmentTitle').value='';document.getElementById('assignmentDescription').value='';
});
document.getElementById('clearAssignment')?.addEventListener('click',()=>{['assignmentTitle','assignmentDescription'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=''});const s=document.getElementById('assignmentStatus');s.classList.add('hidden')});
['assignmentFilterClass','assignmentFilterStatus','assignmentFilterDue'].forEach(id=>document.getElementById(id)?.addEventListener('change',renderAssignments));
document.getElementById('printResult')?.addEventListener('click',()=>window.print());
renderAcademics();renderAssignments();syncPhase4Role();
