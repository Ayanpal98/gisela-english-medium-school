/**
 * Gisela English Medium High School - Trilingual Translation Engine (i18n)
 * Supports: English (en), বাংলা/Bengali (bn), हिन्दी/Hindi (hi)
 * Includes smooth counter-clockwise (anticlock) emblem rotation and live DOM translation.
 */

(function () {
  'use strict';

  const translations = {
    en: {
      // Top bar
      'topbar.helpline': 'Helpline:',
      'topbar.location': 'Silachari, Gomati, Tripura',
      'topbar.choose_lang': 'Select Language',

      // Header & Navigation
      'header.school_name': 'Gisela English Medium',
      'header.school_sub': 'High School • Silachari',
      'header.nav_about': 'About',
      'header.nav_academics': 'Academics',
      'header.nav_campus': 'Campus',
      'header.nav_student_life': 'Student Life',
      'header.nav_gallery': 'Gallery',
      'header.nav_admissions': 'Admissions',
      'header.nav_portals': 'Portals',
      'header.nav_contact': 'Contact',
      'header.portal_btn': 'School Portal',
      'header.enquiry_btn': 'Admission Enquiry',

      // About Dropdown
      'dropdown.about_header': 'About School',
      'dropdown.about_us_title': 'About Us',
      'dropdown.about_us_desc': 'School history & foundation in Silachari',
      'dropdown.principal_title': "Principal's Desk",
      'dropdown.principal_desc': 'Message from school leadership',
      'dropdown.mission_title': 'Our Mission & Values',
      'dropdown.mission_desc': 'Discipline, respect & holistic growth',
      'dropdown.history_title': 'Milestones & History',
      'dropdown.history_desc': '20+ years of education since 2003',

      // Academics Dropdown
      'dropdown.academics_header': 'Academics & Study',
      'dropdown.curriculum_title': 'Academic Curriculum',
      'dropdown.curriculum_desc': 'English-medium secondary framework',
      'dropdown.classes_title': 'Classes 1 to 10',
      'dropdown.classes_desc': 'Foundational to high school grades',
      'dropdown.methodology_title': 'Methodology & Evaluation',
      'dropdown.methodology_desc': 'Continuous assessment and concept clarity',

      // Campus Dropdown
      'dropdown.campus_header': 'Facilities & Living',
      'dropdown.facilities_title': 'Campus & Facilities',
      'dropdown.facilities_desc': 'Classrooms, library & computer lab',
      'dropdown.hostel_title': 'Hostel Life',
      'dropdown.hostel_desc': 'Safe residential accommodation',
      'dropdown.video_title': 'School Video Tour',
      'dropdown.video_desc': 'Watch our virtual campus walkthrough',

      // Student Life Dropdown
      'dropdown.student_header': 'Beyond Classroom',
      'dropdown.activities_title': 'Activities & Participation',
      'dropdown.activities_desc': 'Sports, creativity, teamwork & arts',
      'dropdown.achievements_title': 'Student Achievements',
      'dropdown.achievements_desc': 'Academic & co-curricular honours',
      'dropdown.events_title': 'Events & Exhibitions',
      'dropdown.events_desc': 'Annual exhibition & announcements',

      // Gallery Dropdown
      'dropdown.gallery_header': 'Media & Moments',
      'dropdown.photos_title': 'Photos',
      'dropdown.photos_desc': 'Events, sports & campus life',
      'dropdown.videos_title': 'Videos',
      'dropdown.videos_desc': 'Campus walkthrough & highlights',

      // Admissions Dropdown
      'dropdown.admissions_header': 'Admissions 2026–27',
      'dropdown.process_title': 'Admission Process',
      'dropdown.process_desc': 'Classes 1–10 eligibility & steps',
      'dropdown.enquiry_title': 'Submit Enquiry',
      'dropdown.enquiry_desc': 'Online browser admission enquiry',
      'dropdown.help_title': 'Parent Help & FAQ',
      'dropdown.help_desc': 'Common questions & guidelines',

      // Portals Dropdown
      'dropdown.portals_header': 'Digital School',
      'dropdown.portal_title': 'School Portal',
      'dropdown.portal_desc': 'Parent, Student & Teacher workspace',
      'dropdown.admin_title': 'Admin Workspace',
      'dropdown.admin_desc': 'Enquiries, notices & banner control',

      // Stats Strip
      'stats.item1_num': 'Estd. 2003',
      'stats.item1_sub': '20+ Years in Silachari',
      'stats.item2_num': 'Classes 1–10',
      'stats.item2_sub': 'English-Medium School',
      'stats.item3_num': 'Tripura Board',
      'stats.item3_sub': 'Secondary Affiliation',
      'stats.item4_num': 'Day & Hostel',
      'stats.item4_sub': 'Enquiry Support',
      'stats.item5_num': 'UDISE Verified',
      'stats.item5_sub': '16071200409',
      'stats.years_num': '23+',
      'stats.years_title': 'Years of school history',
      'stats.years_sub': 'Established in 2003 · Silachari',
      'stats.classes_num': 'Classes 1–10',
      'stats.classes_title': 'English-medium schooling',
      'stats.classes_sub': 'Tripura Board (TBSE) Curriculum',
      'stats.pass_num': '100%',
      'stats.pass_title': 'Secondary Board Pass Rate',
      'stats.pass_sub': 'Consistent academic performance',
      'stats.campus_num': 'Safe Campus',
      'stats.campus_title': 'Hostel & Facilities',
      'stats.campus_sub': 'Holistic development & care',

      // Hero Section
      'hero.badge_estd': 'Established 2003 · Silachari, Gomati, Tripura',
      'hero.main_h1': 'A place to <span class="text-[#e8bf63]">learn, grow</span> and move forward.',
      'hero.main_desc': 'Gisela English Medium High School provides English-medium schooling from Class 1 to Class 10 in Silachari, with a focus on learning, discipline, participation and student development.',
      'hero.btn_enquiry': 'Admission Enquiry',
      'hero.btn_explore': 'Explore the School',
      'hero.stat_estd_num': '2003',
      'hero.stat_estd_label': 'Established',
      'hero.stat_classes_num': '1–10',
      'hero.stat_classes_label': 'Classes',
      'hero.stat_district_num': 'Gomati',
      'hero.stat_district_label': 'District',
      'hero.badge': 'School profile',
      'hero.tag': 'GEMHS · SILACHARI',
      'hero.title': 'Learn with purpose.',
      'hero.desc': 'A digital front door for parents, students and the school community.',
      'hero.chip_academics': 'Academics',
      'hero.chip_academics_sub': 'Classes 1–10',
      'hero.chip_hostel': 'Hostel',
      'hero.chip_hostel_sub': 'Enquiry support',

      // Quick Access
      'quick.admissions_kicker': 'Admissions',
      'quick.admissions_title': 'Start an enquiry',
      'quick.admissions_sub': 'Classes 1–10 · 2026–27',
      'quick.academics_kicker': 'Academics',
      'quick.academics_title': 'Explore learning',
      'quick.academics_sub': 'Academic journey & classes',
      'quick.student_kicker': 'Student Life',
      'quick.student_title': 'Beyond the classroom',
      'quick.student_sub': 'Activities & participation',
      'quick.portal_kicker': 'Digital School',
      'quick.portal_title': 'Open School Portal',
      'quick.portal_sub': 'Parent · Student · Teacher',

      // Trust Strip
      'trust.location_title': 'Silachari, Gomati',
      'trust.location_sub': 'Tripura · PIN 799104',
      'trust.classes_title': 'Classes 1–10',
      'trust.classes_sub': 'English-medium schooling',
      'trust.board_title': 'Tripura Board',
      'trust.board_sub': 'Secondary-level affiliation',
      'trust.udise_title': 'UDISE Code',
      'trust.udise_sub': '16071200409',

      // About Section
      'about.kicker': 'About the school',
      'about.title': 'Education with a local foundation.',
      'about.desc': 'Gisela English Medium High School is based in Silachari, Gomati District, Tripura. The school’s public-facing website is designed to make essential information easier for families to find before they visit or enquire.',
      'about.history_card_num': '23+',
      'about.history_card_title': 'Years of school history',
      'about.history_card_sub': 'Established in 2003',
      'about.card_learning_title': 'Learning',
      'about.card_learning_desc': 'An English-medium environment for academic learning across Classes 1–10.',
      'about.card_values_title': 'Values',
      'about.card_values_desc': 'A school experience shaped by discipline, respect, participation and responsibility.',
      'about.card_confidence_title': 'Confidence',
      'about.card_confidence_desc': 'Room for students to ask questions, participate and develop beyond textbooks.',
      'about.card_growth_title': 'Growth',
      'about.card_growth_desc': 'Academic and co-curricular development as part of a balanced school journey.',

      // Principal's Desk Section
      'principal.badge': "Principal's Desk",
      'principal.leadership_pill': 'Head of Institution',
      'principal.name': 'Dr. Subhash Chandra Debbarma',
      'principal.designation': 'Principal & Headmaster',
      'principal.experience': 'M.A., B.Ed., Ph.D. · 20+ Years in Education',
      'principal.school_loc': 'GEMHS · Silachari, Gomati, Tripura',
      'principal.kicker': "Principal's Desk",
      'principal.quote_label': "Principal's Vision & Motto",
      'principal.quote': '"Education is not the learning of facts, but the training of the mind to think, care, and lead with character."',
      'principal.msg_students_title': 'Message for Our Dear Students',
      'principal.msg_students': 'Every morning you walk through our school gates, you bring limitless curiosity and potential. Do not fear making mistakes; embrace learning with passion, ask fearless questions, respect your peers, and build habits that will shape your future. At Gisela, you are empowered to shine in academics, sports, and life.',
      'principal.about_him_title': 'About the Leadership & Philosophy',
      'principal.about_him': "For over two decades, my life's mission has been to ensure that high-caliber English-medium education reaches every student in Silachari and surrounding rural areas of Gomati District. We combine traditional discipline with modern pedagogical standards to prepare confident, capable young citizens.",
      'principal.wishes_title': 'Warm Wishes for Session 2026–27',
      'principal.wishes': 'To all our students, teachers, and esteemed parents: may this academic year be blessed with stellar achievements, joyful discoveries, vibrant sportsmanship, and holistic personal growth. We look forward to walking this rewarding journey together.',
      'principal.board_badge': 'Affiliated with Tripura Board',
      'principal.board_sub': 'Secondary Assessment & English Medium',
      'principal.contact_btn': 'Meet or contact school administration',

      // Student Life Section
      'student_life.kicker': 'Student life',
      'student_life.title': 'Learning continues beyond the classroom.',
      'student_life.desc': 'A modern school experience is also about participation, creativity, teamwork and the everyday moments that help students grow.',
      'student_life.activities_title': 'Activities & participation',
      'student_life.activities_desc': 'Create space for sports, cultural activities, competitions, celebrations and student-led experiences.',
      'student_life.creativity_title': 'Creativity',
      'student_life.creativity_desc': 'Projects, expression & discovery.',
      'student_life.community_title': 'Community',
      'student_life.community_desc': 'Belonging, respect & teamwork.',
      'student_life.achievements_kicker': 'Honours & Participation',
      'student_life.achievements_title': 'Student Achievements & School Culture',
      'student_life.achievements_desc': 'Verified academic milestones, sports honours, co-curricular awards, and student achievements.',
      'student_life.admin_btn': 'Manage in Admin',

      // Academics Section
      'academics.kicker': 'Academics',
      'academics.title': 'A simple academic journey, clearly presented.',
      'academics.desc': 'The website groups the learning journey into practical stages rather than making unsupported claims about results, rankings or faculty numbers.',
      'academics.stage1_title': 'Foundational Years',
      'academics.stage1_desc': 'Build core understanding, communication and positive learning habits through the early classes.',
      'academics.stage2_title': 'Core Learning',
      'academics.stage2_desc': 'Develop subject knowledge with classroom learning, activities and opportunities for participation.',
      'academics.stage3_title': 'Secondary Years',
      'academics.stage3_desc': 'Support students as they progress toward secondary-level assessments and their next stage of education.',

      // Campus Section
      'campus.kicker': 'Campus & facilities',
      'campus.title': 'The spaces that support school life.',
      'campus.desc': 'Facilities shown below are kept intentionally factual. Detailed photos, timings and facility specifications can be managed from the school admin area in the next phase.',
      'campus.library_title': 'Library',
      'campus.library_desc': 'A dedicated space for reading and self-learning.',
      'campus.lab_title': 'Computer Lab',
      'campus.lab_desc': 'A space for foundational digital learning and computer-based activities.',
      'campus.sports_title': 'Sports & Playground',
      'campus.sports_desc': 'Space for outdoor play, physical activity and teamwork.',
      'campus.campus_title': 'School Campus',
      'campus.campus_desc': 'A school environment designed around everyday learning and student life.',

      // Hostel Section
      'hostel.kicker': 'Hostel information',
      'hostel.title': 'Residential support for families who need it.',
      'hostel.desc': 'Hostel support is available as part of the school information journey. Parents can enquire about eligibility, availability, residential arrangements, fees and current rules directly through the admission process.',
      'hostel.card1_title': 'Ask first',
      'hostel.card1_desc': 'Confirm current hostel availability and terms with the school.',
      'hostel.card2_title': 'Enquire together',
      'hostel.card2_desc': 'Include your hostel requirement with the admission enquiry.',
      'hostel.box_kicker': 'Residential enquiry',
      'hostel.box_title': 'Need hostel information?',
      'hostel.box_desc': 'Tell us that residential accommodation is needed and the school team can handle the follow-up.',
      'hostel.box_btn': 'Ask about hostel',

      // Gallery Section
      'gallery.kicker': 'Moments & Memories',
      'gallery.title': 'School Photo Gallery',
      'gallery.desc': 'Glimpses of academic milestones, annual exhibitions, sports tournaments, and student life at Gisela English Medium High School.',
      'gallery.watch_video': 'Watch Video Tour',
      'gallery.photo1_tag': 'Academic Event',
      'gallery.photo1_title': 'Science & Project Fair',
      'gallery.photo1_desc': 'Students presenting innovative science models, environmental projects, and interactive live demonstrations.',
      'gallery.photo2_tag': 'Sports Day',
      'gallery.photo2_title': 'Annual Sports Meet',
      'gallery.photo2_desc': 'Track events, relay races, football tournaments, and athletic achievements celebrated across school houses.',
      'gallery.photo3_tag': 'Cultural',
      'gallery.photo3_title': 'Cultural Day & Arts',
      'gallery.photo3_desc': 'Traditional dance, music, drama recitals, and regional heritage programmes performed by students.',
      'gallery.photo4_tag': 'Academics',
      'gallery.photo4_title': 'Foundational Learning',
      'gallery.photo4_desc': 'Interactive classroom sessions, group activities, library reading hours, and foundational language development.',
      'gallery.photo5_tag': 'Technology',
      'gallery.photo5_title': 'Computer Lab Sessions',
      'gallery.photo5_desc': 'Practical computer education, digital literacy, and educational software practice in the ICT room.',
      'gallery.photo6_tag': 'Celebration',
      'gallery.photo6_title': 'Independence & Republic Day',
      'gallery.photo6_desc': 'Flag hoisting ceremonies, parade drills, patriotic recitations, and community assembly celebrations.',

      // Video Section
      'video.kicker': 'School video',
      'video.title': 'See the school through its video tour.',
      'video.desc': 'A video section gives families a quick visual introduction while keeping the rest of the website focused on useful school information.',
      'video.youtube_btn': 'Open video on YouTube',

      // Admissions & Enquiry Section
      'admissions.kicker': 'Admissions 2026–27',
      'admissions.title': 'Start with a simple enquiry.',
      'admissions.desc': 'Share the basic details below. In the secure Phase 2 workflow, each enquiry will be stored for authorised staff follow-up rather than relying on browser-only messages.',
      'admissions.step1_title': 'Submit enquiry',
      'admissions.step1_desc': 'Tell the school who is applying and for which class.',
      'admissions.step2_title': 'School follow-up',
      'admissions.step2_desc': 'The admissions team can review the enquiry and contact the family.',
      'admissions.step3_title': 'Next steps',
      'admissions.step3_desc': 'Documents, availability and admission requirements can be discussed directly.',
      'enquiry.form_title': 'Admission enquiry',
      'enquiry.form_sub': 'For Classes 1–10 · Session 2026–27',
      'enquiry.lbl_parent': 'Parent / Guardian',
      'enquiry.ph_parent': 'Full name',
      'enquiry.lbl_student': 'Student name',
      'enquiry.ph_student': "Student's full name",
      'enquiry.lbl_phone': 'Contact number',
      'enquiry.ph_phone': '10-digit mobile number',
      'enquiry.lbl_class': 'Applying for',
      'enquiry.lbl_location': 'Village / location',
      'enquiry.ph_location': 'Your village or town',
      'enquiry.lbl_hostel': 'I would like information about hostel / residential options.',
      'enquiry.lbl_message': 'Message (optional)',
      'enquiry.ph_message': 'Any question for the school?',
      'enquiry.submit_btn': 'Submit admission enquiry',
      'enquiry.note': 'Preview build: this enquiry is not stored yet. Live submission will be connected when the school database is added.',

      // FAQ Section
      'faq.kicker': 'Support & Guidance',
      'faq.title': 'Parent Help & Admission FAQ',
      'faq.desc': 'Answers to common questions from parents regarding enrolment, classes, and facilities.',
      'faq.submit_enquiry_btn': 'Submit Enquiry',
      'faq.q1': 'Which classes are open?',
      'faq.a1': 'Admissions are open for Classes 1 to 10 for Session 2026–27. Enquiries can be submitted directly through the form above.',
      'faq.q2': 'Is hostel accommodation available?',
      'faq.a2': 'Yes, residential accommodation is available. Parents can check the hostel box on the enquiry form to receive accommodation guidelines.',
      'faq.q3': 'What documents are needed?',
      'faq.a3': 'Birth certificate, previous report card / transfer certificate, passport photographs, and address proof for the admission verification.',

      // Digital Portal Card
      'portal.kicker': 'School digital portal',
      'portal.title': 'One secure place for school administration.',
      'portal.desc': 'A dedicated school portal is available for parents, students and teachers, with attendance, academics, assignments and results workflows ready for the next backend phase.',
      'portal.card_title': 'School portal',
      'portal.card_sub': 'Parent · Student · Teacher',
      'portal.admin_title': 'Admin preview',
      'portal.admin_sub': 'Open administration',

      // Contact Section
      'contact.kicker': 'Contact & visit',
      'contact.title': 'Gisela English Medium High School',
      'contact.address': 'Silachari, Gomati District, Tripura — PIN 799104',
      'contact.lbl_udise': 'UDISE Code',
      'contact.lbl_board': 'Board',
      'contact.board_name': 'Tripura Board of Secondary Education',
      'contact.lbl_classes': 'Classes',
      'contact.classes_val': 'Class 1 to Class 10',
      'contact.lbl_admissions': 'Admissions',
      'contact.admissions_val': 'Use the enquiry form on this page',
      'contact.planning_title': 'Planning a visit?',
      'contact.planning_desc': 'For current directions, office timings and admission availability, please confirm details with the school before travelling.',
      'contact.enquiry_btn': 'Send an enquiry',

      // Footer
      'footer.explore': 'Explore',
      'footer.roadmap_title': 'Digital roadmap',
      'footer.roadmap_desc': 'Public website · Modern school experience<br>School portal · Parent · Student · Teacher<br>Next: Secure database & live school operations',
      'footer.copyright': '© 2003–2026 Gisela English Medium High School, Silachari, Tripura.',
      'footer.tagline': 'Built for a clearer digital school experience.'
    },

    bn: {
      // Top bar
      'topbar.helpline': 'হেল্পলাইন:',
      'topbar.location': 'শিলাছড়ি, গোমতী, ত্রিপুরা',
      'topbar.choose_lang': 'ভাষা নির্বাচন করুন',

      // Header & Navigation
      'header.school_name': 'গিসেলা ইংলিশ মিডিয়াম',
      'header.school_sub': 'হাই স্কুল • শিলাছড়ি',
      'header.nav_about': 'পরিচিতি',
      'header.nav_academics': 'শিক্ষাক্রম',
      'header.nav_campus': 'ক্যাম্পাস',
      'header.nav_student_life': 'ছাত্রজীবন',
      'header.nav_gallery': 'গ্যালারি',
      'header.nav_admissions': 'ভর্তি',
      'header.nav_portals': 'পোর্টাল',
      'header.nav_contact': 'যোগাযোগ',
      'header.portal_btn': 'স্কুল পোর্টাল',
      'header.enquiry_btn': 'ভর্তি অনুসন্ধান',

      // About Dropdown
      'dropdown.about_header': 'বিদ্যালয় পরিচিতি',
      'dropdown.about_us_title': 'আমাদের কথা',
      'dropdown.about_us_desc': 'বিদ্যালয়ের ইতিহাস ও শিলাছড়িতে পথচলা',
      'dropdown.principal_title': "অধ্যক্ষের বার্তা",
      'dropdown.principal_desc': 'বিদ্যালয় নেতৃত্বের অনুপ্রেরণামূলক বার্তা',
      'dropdown.mission_title': 'আমাদের লক্ষ্য ও আদর্শ',
      'dropdown.mission_desc': 'শৃঙ্খলা, নৈতিক মূল্যবোধ ও সামগ্রিক বিকাশ',
      'dropdown.history_title': 'ইতিহাস ও মাইলফলক',
      'dropdown.history_desc': '২০০৩ সাল থেকে ২০+ বছরের শিক্ষাদান',

      // Academics Dropdown
      'dropdown.academics_header': 'শিক্ষাক্রম ও পাঠদান',
      'dropdown.curriculum_title': 'পাঠ্যক্রম ও পাঠদান',
      'dropdown.curriculum_desc': 'ইংরেজি মাধ্যম মাধ্যমিক পাঠ্যক্রম',
      'dropdown.classes_title': '১ম থেকে ১০ম শ্রেণি',
      'dropdown.classes_desc': 'প্রাথমিক থেকে মাধ্যমিক স্তর',
      'dropdown.methodology_title': 'মূল্যায়ন ও শিক্ষাদান পদ্ধতি',
      'dropdown.methodology_desc': 'ধারাবাহিক মূল্যায়ন ও স্পষ্ট ধারণা',

      // Campus Dropdown
      'dropdown.campus_header': 'সুযোগ-সুবিধা ও পরিবেশ',
      'dropdown.facilities_title': 'ক্যাম্পাস ও সুযোগ-সুবিধা',
      'dropdown.facilities_desc': 'শ্রেণিকক্ষ, পাঠাগার ও কম্পিউটার ল্যাব',
      'dropdown.hostel_title': 'হোস্টেল জীবন',
      'dropdown.hostel_desc': 'নিরাপদ ও সুশৃঙ্খল আবাসিক ব্যবস্থা',
      'dropdown.video_title': 'স্কুল ভিডিও ট্যুর',
      'dropdown.video_desc': 'ক্যাম্পাসের ভার্চুয়াল ভিডিও পরিদর্শন',

      // Student Life Dropdown
      'dropdown.student_header': 'শ্রেণিকক্ষের বাইরে',
      'dropdown.activities_title': 'সহপাঠ্যক্রমিক কার্যক্রম',
      'dropdown.activities_desc': 'খেলাধুলা, সৃজনশীলতা ও দলগত কাজ',
      'dropdown.achievements_title': 'শিক্ষার্থীদের সাফল্য',
      'dropdown.achievements_desc': 'শিক্ষা ও প্রতিযোগিতায় গৌরবময় সাফল্য',
      'dropdown.events_title': 'প্রদর্শনী ও অনুষ্ঠান',
      'dropdown.events_desc': 'বার্ষিক বিজ্ঞান মেলা ও উৎসব',

      // Gallery Dropdown
      'dropdown.gallery_header': 'মিডিয়া ও স্মৃতি',
      'dropdown.photos_title': 'চিত্রশালা (ছবি)',
      'dropdown.photos_desc': 'উৎসব, খেলাধুলা ও ক্যাম্পাসের মুহূর্ত',
      'dropdown.videos_title': 'ভিডিও',
      'dropdown.videos_desc': 'ক্যাম্পাস পরিদর্শন ও বিশেষ মুহূর্ত',

      // Admissions Dropdown
      'dropdown.admissions_header': 'ভর্তি ২০২৬–২৭',
      'dropdown.process_title': 'ভর্তি প্রক্রিয়া',
      'dropdown.process_desc': '১ম–১০ম শ্রেণির ভর্তি নিয়মাবলী',
      'dropdown.enquiry_title': 'অনুসন্ধান জমা দিন',
      'dropdown.enquiry_desc': 'অনলাইনে ভর্তির প্রাথমিক তথ্য পাঠান',
      'dropdown.help_title': 'অভিভাবক সহায়তা ও প্রশ্নোত্তর',
      'dropdown.help_desc': 'সাধারণ জিজ্ঞাসা ও নির্দেশিকা',

      // Portals Dropdown
      'dropdown.portals_header': 'ডিজিটাল স্কুল',
      'dropdown.portal_title': 'ডিজিটাল স্কুল পোর্টাল',
      'dropdown.portal_desc': 'অভিভাবক, ছাত্র ও শিক্ষক পোর্টাল',
      'dropdown.admin_title': 'অ্যাডমিন ড্যাশবোর্ড',
      'dropdown.admin_desc': 'বিজ্ঞপ্তি, অনুসন্ধান ও ব্যানার নিয়ন্ত্রণ',

      // Stats Strip
      'stats.item1_num': 'প্রতিষ্ঠিত ২০০৩',
      'stats.item1_sub': '২০+ বছরের ঐতিহ্য',
      'stats.item2_num': '১ম–১০ম শ্রেণি',
      'stats.item2_sub': 'ইংরেজি মাধ্যম বিদ্যালয়',
      'stats.item3_num': 'ত্রিপুরা বোর্ড',
      'stats.item3_sub': 'মাধ্যমিক স্বীকৃতি',
      'stats.item4_num': 'ডে ও হোস্টেল',
      'stats.item4_sub': 'আবাসিক সুবিধা',
      'stats.item5_num': 'UDISE স্বীকৃত',
      'stats.item5_sub': '১৬০৭১২০০৪০৯',
      'stats.years_num': '২৩+',
      'stats.years_title': 'বছরের গৌরবময় ইতিহাস',
      'stats.years_sub': 'প্রতিষ্ঠিত ২০০৩ · শিলাছড়ি',
      'stats.classes_num': '১ম–১০ম শ্রেণি',
      'stats.classes_title': 'ইংরেজি মাধ্যম শিক্ষা',
      'stats.classes_sub': 'ত্রিপুরা বোর্ড (TBSE) পাঠ্যক্রম',
      'stats.pass_num': '১০০%',
      'stats.pass_title': 'মাধ্যমিক বোর্ড সাফল্যের হার',
      'stats.pass_sub': 'ধারাবাহিক উজ্জ্বল ফলাফল',
      'stats.campus_num': 'নিরাপদ ক্যাম্পাস',
      'stats.campus_title': 'হোস্টেল ও আধুনিক সুযোগ-সুবিধা',
      'stats.campus_sub': 'শিক্ষার্থীদের সামগ্রিক যত্ন ও সুরক্ষা',

      // Hero Section
      'hero.badge_estd': 'প্রতিষ্ঠিত ২০০৩ · শিলাছড়ি, গোমতী, ত্রিপুরা',
      'hero.main_h1': 'শিক্ষা, বিকাশ ও <span class="text-[#e8bf63]">এগিয়ে চলার</span> আদর্শ প্রতিষ্ঠান।',
      'hero.main_desc': 'গিসেলা ইংলিশ মিডিয়াম হাই স্কুল শিলাছড়িতে ১ম থেকে ১০ম শ্রেণি পর্যন্ত গুণমানসম্পন্ন ইংরেজি মাধ্যম শিক্ষা, শৃঙ্খলা ও ব্যক্তিত্ব বিকাশ প্রদান করে।',
      'hero.btn_enquiry': 'ভর্তি অনুসন্ধান',
      'hero.btn_explore': 'বিদ্যালয় পরিচিতি',
      'hero.stat_estd_num': '২০০৩',
      'hero.stat_estd_label': 'প্রতিষ্ঠাবর্ষ',
      'hero.stat_classes_num': '১–১০',
      'hero.stat_classes_label': 'শ্রেণিসমূহ',
      'hero.stat_district_num': 'গোমতী',
      'hero.stat_district_label': 'জেলা',
      'hero.badge': 'বিদ্যালয় প্রোফাইল',
      'hero.tag': 'গিসেলা স্কুল · শিলাছড়ি',
      'hero.title': 'সঠিক উদ্দেশ্যে শিক্ষা গ্রহণ করুন।',
      'hero.desc': 'অভিভাবক, শিক্ষার্থী ও বিদ্যালয় পরিবারের জন্য আধুনিক ডিজিটাল তথ্যকেন্দ্র।',
      'hero.chip_academics': 'শিক্ষাক্রম',
      'hero.chip_academics_sub': '১ম–১০ম শ্রেণি',
      'hero.chip_hostel': 'হোস্টেল',
      'hero.chip_hostel_sub': 'আবাসিক সুবিধা',

      // Quick Access
      'quick.admissions_kicker': 'ভর্তি',
      'quick.admissions_title': 'ভর্তি অনুসন্ধান শুরু করুন',
      'quick.admissions_sub': '১ম–১০ম শ্রেণি · ২০২৬–২৭',
      'quick.academics_kicker': 'শিক্ষাক্রম',
      'quick.academics_title': 'শিক্ষাদান জানুন',
      'quick.academics_sub': 'শ্রেণিভিত্তিক শিখন পথচলা',
      'quick.student_kicker': 'ছাত্রজীবন',
      'quick.student_title': 'শ্রেণিকক্ষের বাইরে',
      'quick.student_sub': 'খেলাধুলা ও কার্যক্রম',
      'quick.portal_kicker': 'ডিজিটাল স্কুল',
      'quick.portal_title': 'স্কুল পোর্টাল খুলুন',
      'quick.portal_sub': 'অভিভাবক · ছাত্র · শিক্ষক',

      // Trust Strip
      'trust.location_title': 'শিলাছড়ি, গোমতী',
      'trust.location_sub': 'ত্রিপুরা · পিন ৭৯৯১০৪',
      'trust.classes_title': '১ম–১০ম শ্রেণি',
      'trust.classes_sub': 'ইংরেজি মাধ্যম শিক্ষা',
      'trust.board_title': 'ত্রিপুরা বোর্ড',
      'trust.board_sub': 'মাধ্যমিক স্তরীয় অনুমোদন',
      'trust.udise_title': 'UDISE কোড',
      'trust.udise_sub': '১৬০৭১২০০৪০৯',

      // About Section
      'about.kicker': 'বিদ্যালয় পরিচিতি',
      'about.title': 'দৃঢ় ভিত্তির ওপর আধুনিক শিক্ষা।',
      'about.desc': 'গিসেলা ইংলিশ মিডিয়াম হাই স্কুল ত্রিপুরার গোমতী জেলার শিলাছড়িতে অবস্থিত। অভিভাবকরা যেন সহজে বিদ্যালয়ের সকল প্রয়োজনীয় তথ্য জানতে পারেন, সেই উদ্দেশ্যে এই ডিজিটাল প্ল্যাটফর্ম প্রস্তুত করা হয়েছে।',
      'about.history_card_num': '২৩+',
      'about.history_card_title': 'বছর শিক্ষাদানের ঐতিহ্য',
      'about.history_card_sub': 'প্রতিষ্ঠিত ২০০৩ সালে',
      'about.card_learning_title': 'শিখন',
      'about.card_learning_desc': '১ম থেকে ১০ম শ্রেণির জন্য মানসম্মত ইংরেজি মাধ্যম শিক্ষাদানের পরিবেশ।',
      'about.card_values_title': 'মূল্যবোধ',
      'about.card_values_desc': 'শৃঙ্খলা, পারস্পরিক সম্মান, দায়িত্ববোধ ও সহানুভূতির মাধ্যমে চরিত্র গঠন।',
      'about.card_confidence_title': 'আত্মবিশ্বাস',
      'about.card_confidence_desc': 'শিক্ষার্থীদের প্রশ্ন করার স্বাধীনতা, বিতর্ক ও সৃজনশীল প্রতিভা বিকাশের সুযোগ।',
      'about.card_growth_title': 'সার্বিক বিকাশ',
      'about.card_growth_desc': 'শিক্ষাগত এবং সহপাঠ্যক্রমিক কার্যক্রমের সুষম সমন্বয়ে আত্মবিকাশ।',

      // Principal's Desk Section
      'principal.badge': "অধ্যক্ষের বার্তা",
      'principal.leadership_pill': 'প্রতিষ্ঠান প্রধান',
      'principal.name': 'ড. সুভাষ চন্দ্র দেববর্মা',
      'principal.designation': 'অধ্যক্ষ ও প্রধান শিক্ষক',
      'principal.experience': 'এম.এ., বি.এড., পিএইচ.ডি. · ২০+ বছরের শিক্ষাদান অভিজ্ঞতা',
      'principal.school_loc': 'গিসেলা স্কুল · শিলাছড়ি, গোমতী, ত্রিপুরা',
      'principal.kicker': 'অধ্যক্ষের বার্তা',
      'principal.quote_label': 'অধ্যক্ষের মূল ভাবধারা ও শিক্ষাদর্শ',
      'principal.quote': '"শিক্ষা কেবল তথ্যের মুখস্থকরণ নয়, বরং চরিত্র গঠন ও স্বাধীন চিন্তার বিকাশ ঘটানোই প্রকৃত শিক্ষা।"',
      'principal.msg_students_title': 'স্নেহের শিক্ষার্থীদের উদ্দেশ্যে বার্তা',
      'principal.msg_students': 'বিদ্যালয়ের আঙিনায় তোমাদের প্রতিটি পদক্ষেপ নিয়ে আসে অপার সম্ভাবনা ও নতুন আশা। ভুল করতে ভয় পেয়ো না; অদম্য আগ্রহ নিয়ে শেখো, নির্ভয়ে প্রশ্ন করো, সহপাঠীদের শ্রদ্ধা করো এবং প্রতিদিন নিজেকে আরো উন্নত করে তোলো। গিসেলা পরিবারে তোমাদের প্রতিটি ছোট-বড় সাফল্য আমাদের পরম অহংকার।',
      'principal.about_him_title': 'বিদ্যালয় নেতৃত্ব ও শিক্ষাদর্শ',
      'principal.about_him': 'বিগত দুই দশকেরও বেশি সময় ধরে আমার মূল ব্রত হলো শিলাছড়ি এবং গোমতী জেলার প্রত্যন্ত অঞ্চলের প্রতিটি শিক্ষার্থীর কাছে উচ্চমানের ইংরেজি মাধ্যম শিক্ষা পৌঁছে দেওয়া। আমরা শৃঙ্খলা, মানবিক মূল্যবোধ ও আধুনিক শিক্ষার সমন্বয়ে প্রতিটি শিশুকে আত্মবিশ্বাসী নাগরিক হিসেবে গড়ে তুলি।',
      'principal.wishes_title': '২০২৬–২৭ শিক্ষাবর্ষের আন্তরিক শুভকামনা',
      'principal.wishes': 'আমাদের প্রিয় শিক্ষার্থী, নিষ্ঠাবান শিক্ষক-শিক্ষিকা ও পরম শ্রদ্ধেয় অভিভাবকদের জানাই নতুন শিক্ষাবর্ষের আন্তরিক অভিনন্দন। এই বছরটি যেন সকলের জীবনে নতুন আবিষ্কার, আনন্দময় শিখন, ক্রীড়া নৈপুণ্য ও সার্বিক বিকাশের সূচনা করে।',
      'principal.board_badge': 'ত্রিপুরা বোর্ড (TBSE) অনুমোদিত',
      'principal.board_sub': 'মাধ্যমিক মূল্যায়ন ও ইংরেজি মাধ্যম',
      'principal.contact_btn': 'বিদ্যালয় প্রশাসনের সাথে যোগাযোগ করুন',

      // Student Life Section
      'student_life.kicker': 'ছাত্রজীবন',
      'student_life.title': 'শিক্ষাদান শ্রেণিকক্ষের গণ্ডি পেরিয়ে বিস্তৃত।',
      'student_life.desc': 'একটি আধুনিক বিদ্যালয়ের অভিজ্ঞতা অংশগ্রহণ, সৃজনশীলতা, দলগত কাজ এবং শিক্ষার্থীদের সামগ্রিক বিকাশের ওপর গড়ে ওঠে।',
      'student_life.activities_title': 'কার্যক্রম ও অংশগ্রহণ',
      'student_life.activities_desc': 'খেলাধুলা, সাংস্কৃতিক অনুষ্ঠান, প্রতিযোগিতা এবং ছাত্র-নেতৃত্বাধীন অভিজ্ঞতার জন্য উন্মুক্ত পরিবেশ।',
      'student_life.creativity_title': 'সৃজনশীলতা',
      'student_life.creativity_desc': 'প্রকল্প, প্রকাশ ও নতুন কিছু আবিষ্কার।',
      'student_life.community_title': 'বিদ্যালয় পরিবার',
      'student_life.community_desc': 'ঐক্য, শ্রদ্ধা এবং দলগত সংহতি।',
      'student_life.achievements_kicker': 'কৃতিত্ব ও গৌরব',
      'student_life.achievements_title': 'শিক্ষার্থীদের সাফল্য ও সংস্কৃতি',
      'student_life.achievements_desc': 'যাচাইকৃত শিক্ষাগত মাইলফলক, ক্রীড়া সম্মাননা ও সহপাঠ্যক্রমিক পুরস্কার।',
      'student_life.admin_btn': 'অ্যাডমিনে পরিচালনা',

      // Academics Section
      'academics.kicker': 'শিক্ষাক্রম',
      'academics.title': 'একটি সুবিন্যস্ত ও স্পষ্ট শিক্ষণ পথচলা।',
      'academics.desc': 'বিদ্যালয়ের শিক্ষাক্রম ধাপভিত্তিক এবং বাস্তবমুখীভাবে সাজানো হয়েছে।',
      'academics.stage1_title': 'প্রাথমিক পর্যায়',
      'academics.stage1_desc': 'প্রাথমিক শ্রেণিগুলোতে ভাষা দক্ষতা, মৌলিক ধারণা ও সঠিক অধ্যয়নের অভ্যাস গড়ে তোলা হয়।',
      'academics.stage2_title': 'মূল শিক্ষণ পর্যায়',
      'academics.stage2_desc': 'শ্রেণিকক্ষে পাঠদান ও ব্যবহারিক কার্যক্রমের মাধ্যমে বিষয়ের গভীর জ্ঞান বৃদ্ধি করা হয়।',
      'academics.stage3_title': 'মাধ্যমিক পর্যায়',
      'academics.stage3_desc': 'বোর্ড পরীক্ষার জন্য শিক্ষার্থীদের সুদৃঢ় প্রস্তুতি ও পরবর্তী শিক্ষার জন্য প্রস্তুত করা হয়।',

      // Campus Section
      'campus.kicker': 'ক্যাম্পাস ও সুযোগ-সুবিধা',
      'campus.title': 'যে পরিবেশ গড়ে তোলে শিক্ষাজীবন।',
      'campus.desc': 'বিদ্যালয়ের অবকাঠামো ও পরিবেশ শিক্ষার্থীদের দৈনন্দিন পাঠদানকে আনন্দময় করে তোলে।',
      'campus.library_title': 'পাঠাগার (Library)',
      'campus.library_desc': 'বই পড়া ও স্বশিক্ষার জন্য নিরিবিলি জ্ঞানভাণ্ডার।',
      'campus.lab_title': 'কম্পিউটার ল্যাব',
      'campus.lab_desc': 'ডিজিটাল শিক্ষা ও ব্যবহারিক কম্পিউটার শেখার আধুনিক ল্যাব।',
      'campus.sports_title': 'খেলার মাঠ ও ক্রীড়া',
      'campus.sports_desc': 'শারীরিক ব্যায়াম, আউটডোর খেলা ও দলগত মনোভাব তৈরির মাঠ।',
      'campus.campus_title': 'বিদ্যালয় প্রাঙ্গণ',
      'campus.campus_desc': 'নিরাপদ ও সুশৃঙ্খল ক্যাম্পাস যেখানে ছাত্রছাত্রীরা নিরাপদে শেখে।',

      // Hostel Section
      'hostel.kicker': 'হোস্টেল তথ্য',
      'hostel.title': 'দূরবর্তী পরিবারের জন্য নিরাপদ আবাসিক ব্যবস্থা।',
      'hostel.desc': 'বিদ্যালয়ে নিরাপদ হোস্টেল সুবিধা রয়েছে। অভিভাবকরা আসন প্রাপ্যতা, নিয়মাবলী ও ফি সংক্রান্ত তথ্য সরাসরি জানতে পারেন।',
      'hostel.card1_title': 'আগে নিশ্চিত করুন',
      'hostel.card1_desc': 'বিদ্যালয়ের সাথে বর্তমান হোস্টেল আসন প্রাপ্যতা জেনে নিন।',
      'hostel.card2_title': 'একত্রে আবেদন করুন',
      'hostel.card2_desc': 'ভর্তি অনুসন্ধানের সাথে আপনার হোস্টেল প্রয়োজনীয়তা জানান।',
      'hostel.box_kicker': 'আবাসিক অনুসন্ধান',
      'hostel.box_title': 'হোস্টেল তথ্য প্রয়োজন?',
      'hostel.box_desc': 'আমাদের জানান যে আপনার হোস্টেল সুবিধা প্রয়োজন, বিদ্যালয় দল আপনার সাথে যোগাযোগ করবে।',
      'hostel.box_btn': 'হোস্টেল সম্পর্কে জানুন',

      // Gallery Section
      'gallery.kicker': 'স্মৃতি ও স্মরণীয় মুহূর্ত',
      'gallery.title': 'বিদ্যালয় চিত্রশালা (Photo Gallery)',
      'gallery.desc': 'গিসেলা ইংলিশ মিডিয়াম হাই স্কুলের বার্ষিক প্রদর্শনী, ক্রীড়া প্রতিযোগিতা, উৎসব ও ক্যাম্পাসের বিভিন্ন মুহূর্তের ছবি।',
      'gallery.watch_video': 'ভিডিও ট্যুর দেখুন',
      'gallery.photo1_tag': 'বিজ্ঞান মেলা',
      'gallery.photo1_title': 'বিজ্ঞান ও প্রযুক্তি প্রদর্শনী',
      'gallery.photo1_desc': 'শিক্ষার্থীদের উদ্ভাবনী বিজ্ঞান মডেল, পরিবেশ প্রকল্প ও রোবোটিক্স প্রদর্শনী।',
      'gallery.photo2_tag': 'ক্রীড়া দিবস',
      'gallery.photo2_title': 'বার্ষিক ক্রীড়া প্রতিযোগিতা',
      'gallery.photo2_desc': 'দৌড়, রিলে রেস, ফুটবল ও বিভিন্ন হাউস ভিত্তিক ক্রীড়া প্রতিযোগিতা।',
      'gallery.photo3_tag': 'সাংস্কৃতিক',
      'gallery.photo3_title': 'সাংস্কৃতিক অনুষ্ঠান ও চারুকলা',
      'gallery.photo3_desc': 'ঐতিহ্যবাহী নৃত্য, সংগীত, নাটিকা এবং আঞ্চলিক সংস্কৃতি পরিবেশন।',
      'gallery.photo4_tag': 'শ্রেণিকক্ষ',
      'gallery.photo4_title': 'আনন্দময় পাঠদান',
      'gallery.photo4_desc': 'ইন্টারেক্টিভ শ্রেণিকক্ষ, দলগত আলোচনা ও ভাষা দক্ষতা বিকাশ।',
      'gallery.photo5_tag': 'প্রযুক্তি',
      'gallery.photo5_title': 'কম্পিউটার ল্যাব অনুশীলন',
      'gallery.photo5_desc': 'ব্যবহারিক কম্পিউটার শিক্ষা ও ডিজিটাল সাক্ষরতার হাতে-কলমে প্রশিক্ষণ।',
      'gallery.photo6_tag': 'জাতীয় দিবস',
      'gallery.photo6_title': 'স্বাধীনতা ও প্রজাতন্ত্র দিবস',
      'gallery.photo6_desc': 'জাতীয় পতাকা উত্তোলন, কুচকাওয়াজ ও দেশাত্মবোধক অনুষ্ঠান।',

      // Video Section
      'video.kicker': 'বিদ্যালয় ভিডিও',
      'video.title': 'ভিডিওর মাধ্যমে আমাদের বিদ্যালয় দেখুন।',
      'video.desc': 'এই ভিডিওর মাধ্যমে অভিভাবকরা ঘরে বসেই বিদ্যালয় প্রাঙ্গণ ও পাঠদান পরিবেশ সম্পর্কে স্পষ্ট ধারণা লাভ করতে পারেন।',
      'video.youtube_btn': 'YouTube-এ ভিডিও খুলুন',

      // Admissions & Enquiry Section
      'admissions.kicker': 'ভর্তি ২০২৬–২৭',
      'admissions.title': 'সহজেই ভর্তির প্রাথমিক তথ্য পাঠান।',
      'admissions.desc': 'নিচের প্রাথমিক তথ্য পূরণ করুন। বিদ্যালয়ের ভর্তি বিভাগ আপনার সাথে ফোনে সরাসরি যোগাযোগ করবে।',
      'admissions.step1_title': 'তথ্য জমা দিন',
      'admissions.step1_desc': 'কোন শ্রেণিতে ভর্তি হতে আগ্রহী তা উল্লেখ করুন।',
      'admissions.step2_title': 'বিদ্যালয় থেকে যোগাযোগ',
      'admissions.step2_desc': 'ভর্তি দল আবেদন পর্যালোচনা করে যোগাযোগ করবে।',
      'admissions.step3_title': 'পরবর্তী পদক্ষেপ',
      'admissions.step3_desc': 'নথিপত্র যাচাই ও আসন সংখ্যা নিশ্চিত করা হবে।',
      'enquiry.form_title': 'ভর্তি অনুসন্ধান প্রপত্র',
      'enquiry.form_sub': '১ম–১০ম শ্রেণির জন্য · শিক্ষাবর্ষ ২০২৬–২৭',
      'enquiry.lbl_parent': 'অভিভাবকের পুরো নাম',
      'enquiry.ph_parent': 'আপনার নাম লিখুন',
      'enquiry.lbl_student': 'শিক্ষার্থীর নাম',
      'enquiry.ph_student': 'ছাত্র/ছাত্রীর পুরো নাম',
      'enquiry.lbl_phone': 'যোগাযোগের মোবাইল নম্বর',
      'enquiry.ph_phone': '১০ সংখ্যার মোবাইল নম্বর',
      'enquiry.lbl_class': 'আবেদনকৃত শ্রেণি',
      'enquiry.lbl_location': 'গ্রাম / এলাকা',
      'enquiry.ph_location': 'আপনার গ্রাম বা শহর',
      'enquiry.lbl_hostel': 'আমি হোস্টেল বা আবাসিক সুবিধার তথ্য জানতে আগ্রহী।',
      'enquiry.lbl_message': 'বার্তা (ঐচ্ছিক)',
      'enquiry.ph_message': 'বিদ্যালয়ের কাছে কোনো জিজ্ঞাসা থাকলে লিখুন...',
      'enquiry.submit_btn': 'ভর্তি অনুসন্ধান জমা দিন',
      'enquiry.note': 'প্রিভিউ সংস্করণ: ডাটাবেজ সংযুক্ত হলে সরাসরি সংরক্ষিত হবে।',

      // FAQ Section
      'faq.kicker': 'সহায়তা ও নির্দেশিকা',
      'faq.title': 'অভিভাবকদের জন্য প্রয়োজনীয় প্রশ্নোত্তর',
      'faq.desc': 'ভর্তি, শিক্ষাক্রম ও সুযোগ-সুবিধা সংক্রান্ত সবচেয়ে গুরুত্বপূর্ণ সাধারণ জিজ্ঞাসা।',
      'faq.submit_enquiry_btn': 'অনুসন্ধান পাঠান',
      'faq.q1': 'কোন কোন শ্রেণিতে ভর্তি চলছে?',
      'faq.a1': '২০২৬–২৭ শিক্ষাবর্ষের জন্য ১ম থেকে ১০ম শ্রেণিতে আসন খালি থাকা সাপেক্ষে ভর্তি চলছে। উপরের ফর্মে আবেদন করুন।',
      'faq.q2': 'হোস্টেল বা আবাসিক সুবিধা কি রয়েছে?',
      'faq.a2': 'হ্যাঁ, শিক্ষার্থীদের জন্য নিরাপদ ও সুশৃঙ্খল হোস্টেল সুবিধা রয়েছে। অনুসন্ধান ফর্মে হোস্টেল বক্সে টিক দিন।',
      'faq.q3': 'ভর্তির জন্য কী কী নথিপত্র প্রয়োজন?',
      'faq.a3': 'জন্ম সনদ, পূর্ববর্তী শ্রেণির মার্কশিট/টিসি, পাসপোর্ট ছবি এবং ঠিকানার প্রমাণপত্র প্রয়োজন হবে।',

      // Digital Portal Card
      'portal.kicker': 'ডিজিটাল স্কুল পোর্টাল',
      'portal.title': 'বিদ্যালয় ব্যবস্থাপনার সমন্বিত ডিজিটাল প্ল্যাটফর্ম।',
      'portal.desc': 'উপস্থিতি, ফলাফল ও অ্যাসাইনমেন্টের জন্য অভিভাবক, ছাত্র ও শিক্ষকদের ডেডিকেটেড পোর্টাল।',
      'portal.card_title': 'স্কুল পোর্টাল',
      'portal.card_sub': 'অভিভাবক · ছাত্র · শিক্ষক',
      'portal.admin_title': 'অ্যাডমিন প্রিভিউ',
      'portal.admin_sub': 'বিদ্যালয় প্রশাসন',

      // Contact Section
      'contact.kicker': 'যোগাযোগ ও বিদ্যালয় পরিদর্শন',
      'contact.title': 'গিসেলা ইংলিশ মিডিয়াম হাই স্কুল',
      'contact.address': 'শিলাছড়ি, গোমতী জেলা, ত্রিপুরা — পিন ৭৯৯১০৪',
      'contact.lbl_udise': 'UDISE কোড',
      'contact.lbl_board': 'বোর্ড অনুমোদন',
      'contact.board_name': 'ত্রিপুরা মাধ্যমিক শিক্ষা পর্ষদ (TBSE)',
      'contact.lbl_classes': 'শ্রেণি সমূহ',
      'contact.classes_val': '১ম থেকে ১০ম শ্রেণি',
      'contact.lbl_admissions': 'ভর্তি তথ্য',
      'contact.admissions_val': 'এই পৃষ্ঠার অনলাইন ফর্ম ব্যবহার করুন',
      'contact.planning_title': 'বিদ্যালয় পরিদর্শনে আসতে চান?',
      'contact.planning_desc': 'সঠিক দিকনির্দেশনা, অফিসের সময়সূচি ও আসন সংখ্যা জানতে আসার পূর্বে ফোনে নিশ্চিত করুন।',
      'contact.enquiry_btn': 'অনুসন্ধান পাঠান',

      // Footer
      'footer.explore': 'প্রয়োজনীয় লিঙ্ক',
      'footer.roadmap_title': 'ডিজিটাল রূপরেখা',
      'footer.roadmap_desc': 'পাবলিক ওয়েবসাইট · আধুনিক স্কুল অভিজ্ঞতা<br>স্কুল পোর্টাল · অভিভাবক · ছাত্র · শিক্ষক<br>পরবর্তী: ক্লাউড ডাটাবেজ ও অনলাইন পেমেন্ট',
      'footer.copyright': '© ২০০৩–২০২৬ গিসেলা ইংলিশ মিডিয়াম হাই স্কুল, শিলাছড়ি, ত্রিপুরা।',
      'footer.tagline': 'উন্নত ডিজিটাল শিক্ষা ব্যবস্থাপনায় প্রতিশ্রুতিবদ্ধ।'
    },

    hi: {
      // Top bar
      'topbar.helpline': 'हेल्पलाइन:',
      'topbar.location': 'शिलाछड़ी, गोमती, त्रिपुरा',
      'topbar.choose_lang': 'भाषा चुनें',

      // Header & Navigation
      'header.school_name': 'गिसेला इंग्लिश मीडियम',
      'header.school_sub': 'हाई स्कूल • शिलाछड़ी',
      'header.nav_about': 'परिचय',
      'header.nav_academics': 'शिक्षा',
      'header.nav_campus': 'परिसर',
      'header.nav_student_life': 'छात्र जीवन',
      'header.nav_gallery': 'गैलरी',
      'header.nav_admissions': 'प्रवेश',
      'header.nav_portals': 'पोर्टल',
      'header.nav_contact': 'संपर्क',
      'header.portal_btn': 'स्कूल पोर्टल',
      'header.enquiry_btn': 'प्रवेश पूछताछ',

      // About Dropdown
      'dropdown.about_header': 'स्कूल परिचय',
      'dropdown.about_us_title': 'हमारे बारे में',
      'dropdown.about_us_desc': 'स्कूल का इतिहास व शिलाछड़ी में नींव',
      'dropdown.principal_title': 'प्रधानाचार्य का संदेश',
      'dropdown.principal_desc': 'स्कूल नेतृत्व का प्रेरणादायक संदेश',
      'dropdown.mission_title': 'हमारा उद्देश्य और मूल्य',
      'dropdown.mission_desc': 'अनुशासन, संस्कार व समग्र विकास',
      'dropdown.history_title': 'इतिहास व उपलब्धियां',
      'dropdown.history_desc': '2003 से 20+ वर्षों की शिक्षा',

      // Academics Dropdown
      'dropdown.academics_header': 'शिक्षा व अध्ययन',
      'dropdown.curriculum_title': 'शैक्षणिक पाठ्यक्रम',
      'dropdown.curriculum_desc': 'अंग्रेजी माध्यम माध्यमिक रूपरेखा',
      'dropdown.classes_title': 'कक्षा 1 से 10',
      'dropdown.classes_desc': 'प्राथमिक से उच्च विद्यालय स्तर',
      'dropdown.methodology_title': 'शिक्षण व मूल्यांकन',
      'dropdown.methodology_desc': 'सतत मूल्यांकन व स्पष्ट अवधारणा',

      // Campus Dropdown
      'dropdown.campus_header': 'सुविधाएं व वातावरण',
      'dropdown.facilities_title': 'परिसर व सुविधाएं',
      'dropdown.facilities_desc': 'कक्षाएं, पुस्तकालय व कंप्यूटर लैब',
      'dropdown.hostel_title': 'छात्रावास जीवन',
      'dropdown.hostel_desc': 'सुरक्षित आवासीय व्यवस्था',
      'dropdown.video_title': 'स्कूल वीडियो टूर',
      'dropdown.video_desc': 'परिसर का वीडियो भ्रमण देखें',

      // Student Life Dropdown
      'dropdown.student_header': 'कक्षा से परे',
      'dropdown.activities_title': 'गतिविधियां व भागीदारी',
      'dropdown.activities_desc': 'खेलकूद, रचनात्मकता व कला',
      'dropdown.achievements_title': 'विद्यार्थियों की उपलब्धियां',
      'dropdown.achievements_desc': 'शैक्षणिक व सह-पाठ्यक्रम सम्मान',
      'dropdown.events_title': 'समारोह व प्रदर्शनियां',
      'dropdown.events_desc': 'वार्षिक प्रदर्शनी व सूचनाएं',

      // Gallery Dropdown
      'dropdown.gallery_header': 'मीडिया व स्मृतियां',
      'dropdown.photos_title': 'तस्वीरें (फोटो)',
      'dropdown.photos_desc': 'समारोह, खेल व परिसर की झलकियां',
      'dropdown.videos_title': 'वीडियो',
      'dropdown.videos_desc': 'परिसर भ्रमण व मुख्य आकर्षण',

      // Admissions Dropdown
      'dropdown.admissions_header': 'प्रवेश 2026–27',
      'dropdown.process_title': 'प्रवेश प्रक्रिया',
      'dropdown.process_desc': 'कक्षा 1–10 पात्रता व चरण',
      'dropdown.enquiry_title': 'पूछताछ प्रपत्र',
      'dropdown.enquiry_desc': 'ऑनलाइन प्रवेश पूछताछ भेजें',
      'dropdown.help_title': 'अभिभावक सहायता व एफएक्यू',
      'dropdown.help_desc': 'सामान्य प्रश्न व दिशा-निर्देश',

      // Portals Dropdown
      'dropdown.portals_header': 'डिजिटल स्कूल',
      'dropdown.portal_title': 'स्कूल डिजिटल पोर्टल',
      'dropdown.portal_desc': 'अभिभावक, छात्र व शिक्षक वर्कस्पेस',
      'dropdown.admin_title': 'एडमिन वर्कस्पेस',
      'dropdown.admin_desc': 'पूछताछ, सूचनाएं व नियंत्रण',

      // Stats Strip
      'stats.item1_num': 'स्थापना 2003',
      'stats.item1_sub': '20+ वर्षों का गौरव',
      'stats.item2_num': 'कक्षा 1–10',
      'stats.item2_sub': 'अंग्रेजी माध्यम विद्यालय',
      'stats.item3_num': 'त्रिपुरा बोर्ड',
      'stats.item3_sub': 'माध्यमिक संबद्धता',
      'stats.item4_num': 'डे व हॉस्टल',
      'stats.item4_sub': 'आवासीय सुविधा',
      'stats.item5_num': 'UDISE सत्यापित',
      'stats.item5_sub': '16071200409',
      'stats.years_num': '23+',
      'stats.years_title': 'वर्षों का गौरवशाली इतिहास',
      'stats.years_sub': 'स्थापित 2003 · शिलाछड़ी',
      'stats.classes_num': 'कक्षा 1–10',
      'stats.classes_title': 'अंग्रेजी माध्यम शिक्षा',
      'stats.classes_sub': 'त्रिपुरा बोर्ड (TBSE) पाठ्यक्रम',
      'stats.pass_num': '100%',
      'stats.pass_title': 'माध्यमिक बोर्ड सफलता दर',
      'stats.pass_sub': 'निरंतर उत्कृष्ट परीक्षा परिणाम',
      'stats.campus_num': 'सुरक्षित परिसर',
      'stats.campus_title': 'छात्रावास व आधुनिक सुविधाएं',
      'stats.campus_sub': 'छात्रों की सर्वांगीण देखभाल',

      // Hero Section
      'hero.badge_estd': 'स्थापना 2003 · शिलाछड़ी, गोमती, त्रिपुरा',
      'hero.main_h1': 'शिक्षा, विकास और <span class="text-[#e8bf63]">आगे बढ़ने</span> का आदर्श केंद्र।',
      'hero.main_desc': 'गिसेला इंग्लिश मीडियम हाई स्कूल शिलाछड़ी में कक्षा 1 से 10 तक गुणवत्तापूर्ण अंग्रेजी माध्यम शिक्षा, अनुशासन और समग्र विकास प्रदान करता है।',
      'hero.btn_enquiry': 'प्रवेश पूछताछ',
      'hero.btn_explore': 'विद्यालय परिचय',
      'hero.stat_estd_num': '2003',
      'hero.stat_estd_label': 'स्थापना वर्ष',
      'hero.stat_classes_num': '1–10',
      'hero.stat_classes_label': 'कक्षाएं',
      'hero.stat_district_num': 'गोमती',
      'hero.stat_district_label': 'जिला',
      'hero.badge': 'स्कूल प्रोफाइल',
      'hero.tag': 'गिसेला स्कूल · शिलाछड़ी',
      'hero.title': 'सार्थक उद्देश्य के साथ शिक्षा।',
      'hero.desc': 'अभिभावकों, छात्रों और स्कूल समुदाय के लिए आधुनिक डिजिटल केंद्र।',
      'hero.chip_academics': 'शिक्षा',
      'hero.chip_academics_sub': 'कक्षा 1–10',
      'hero.chip_hostel': 'छात्रावास',
      'hero.chip_hostel_sub': 'आवासीय सुविधा',

      // Quick Access
      'quick.admissions_kicker': 'प्रवेश',
      'quick.admissions_title': 'पूछताछ शुरू करें',
      'quick.admissions_sub': 'कक्षा 1–10 · सत्र 2026–27',
      'quick.academics_kicker': 'शिक्षा',
      'quick.academics_title': 'शिक्षा व्यवस्था देखें',
      'quick.academics_sub': 'कक्षावार शिक्षण यात्रा',
      'quick.student_kicker': 'छात्र जीवन',
      'quick.student_title': 'कक्षा से परे',
      'quick.student_sub': 'गतिविधियां व खेलकूद',
      'quick.portal_kicker': 'डिजिटल स्कूल',
      'quick.portal_title': 'स्कूल पोर्टल खोलें',
      'quick.portal_sub': 'अभिभावक · छात्र · शिक्षक',

      // Trust Strip
      'trust.location_title': 'शिलाछड़ी, गोमती',
      'trust.location_sub': 'त्रिपुरा · पिन 799104',
      'trust.classes_title': 'कक्षा 1–10',
      'trust.classes_sub': 'अंग्रेजी माध्यम शिक्षा',
      'trust.board_title': 'त्रिपुरा बोर्ड',
      'trust.board_sub': 'माध्यमिक स्तर की संबद्धता',
      'trust.udise_title': 'UDISE कोड',
      'trust.udise_sub': '16071200409',

      // About Section
      'about.kicker': 'विद्यालय परिचय',
      'about.title': 'स्थानीय नींव पर आधारित आधुनिक शिक्षा।',
      'about.desc': 'गिसेला इंग्लिश मीडियम हाई स्कूल त्रिपुरा के गोमती जिले के शिलाछड़ी में स्थित है। यह वेबसाइट अभिभावकों को स्कूल आने से पहले सभी आवश्यक जानकारियां सरलता से उपलब्ध कराती है।',
      'about.history_card_num': '23+',
      'about.history_card_title': 'वर्षों का शैक्षणिक इतिहास',
      'about.history_card_sub': 'स्थापित वर्ष 2003',
      'about.card_learning_title': 'शिक्षण',
      'about.card_learning_desc': 'कक्षा 1 से 10 तक अंग्रेजी माध्यम में गुणवत्तापूर्ण शिक्षा का वातावरण।',
      'about.card_values_title': 'संस्कार व मूल्य',
      'about.card_values_desc': 'अनुशासन, परस्पर सम्मान, जिम्मेदारी और सहभागिता से युक्त विद्यालय अनुभव।',
      'about.card_confidence_title': 'आत्मविश्वास',
      'about.card_confidence_desc': 'छात्रों को प्रश्न पूछने, भाग लेने और पाठ्यपुस्तकों से परे सीखने का खुला मंच।',
      'about.card_growth_title': 'समग्र विकास',
      'about.card_growth_desc': 'शैक्षणिक और सह-पाठ्यक्रम गतिविधियों के संतुलित समन्वय से सर्वांगीण विकास।',

      // Principal's Desk Section
      'principal.badge': 'प्रधानाचार्य का संदेश',
      'principal.leadership_pill': 'संस्था प्रमुख',
      'principal.name': 'डॉ. सुभाष चंद्र देबबर्मा',
      'principal.designation': 'प्रधानाचार्य एवं हेडमास्टर',
      'principal.experience': 'एम.ए., बी.एड., पीएच.डी. · 20+ वर्षों का शिक्षण अनुभव',
      'principal.school_loc': 'गिसेला स्कूल · शिलाछड़ी, गोमती, त्रिपुरा',
      'principal.kicker': 'प्रधानाचार्य का संदेश',
      'principal.quote_label': 'प्रधानाचार्य का प्रेरक विचार व दृष्टिकोण',
      'principal.quote': '"शिक्षा केवल तथ्यों को याद करना नहीं, बल्कि चरित्र निर्माण और स्वतंत्र सोच का विकास करना है।"',
      'principal.msg_students_title': 'प्रिय विद्यार्थियों के लिए संदेश',
      'principal.msg_students': 'विद्यालय परिसर में आपके कदम नई उम्मीदें और असीम संभावनाएं लेकर आते हैं। गलतियों से कभी मत डरें; जिज्ञासा के साथ सीखें, निर्भीक होकर प्रश्न पूछें, अपने सहपाठियों का सम्मान करें और ऐसे संस्कार अपनाएं जो आपका भविष्य संवारें। गिसेला परिवार में आपकी हर उपलब्धि हमारे लिए अत्यंत गर्व का विषय है।',
      'principal.about_him_title': 'नेतृत्व और शैक्षिक दृष्टिकोण',
      'principal.about_him': 'पिछले दो दशकों से मेरा मुख्य उद्देश्य शिलाछड़ी और गोमती जिले के हर बच्चे तक गुणवत्तापूर्ण अंग्रेजी माध्यम शिक्षा पहुंचाना रहा है। हम नैतिक मूल्यों और आधुनिक शिक्षण पद्धति के समन्वय से छात्रों को आत्मनिर्भर और जिम्मेदार नागरिक बनाने के लिए समर्पित हैं।',
      'principal.wishes_title': 'सत्र 2026–27 के लिए हार्दिक शुभकामनाएं',
      'principal.wishes': 'हमारे सभी विद्यार्थियों, कर्मठ शिक्षकों और सम्मानित अभिभावकों को नए शैक्षणिक सत्र की हार्दिक बधाई। यह वर्ष आप सभी के लिए उत्कृष्ट उपलब्धियों, आनंदमय शिक्षण, खेल भावना और सर्वांगीण विकास से परिपूर्ण हो।',
      'principal.board_badge': 'त्रिपुरा बोर्ड (TBSE) से संबद्ध',
      'principal.board_sub': 'माध्यमिक मूल्यांकन व अंग्रेजी माध्यम',
      'principal.contact_btn': 'स्कूल प्रशासन से संपर्क करें',

      // Student Life Section
      'student_life.kicker': 'छात्र जीवन',
      'student_life.title': 'सीखने का दायरा कक्षा से कहीं आगे है।',
      'student_life.desc': 'एक आधुनिक स्कूल का अनुभव सहभागिता, रचनात्मकता, टीम वर्क और छात्रों के सर्वांगीण विकास पर आधारित होता है।',
      'student_life.activities_title': 'गतिविधियां व खेलकूद',
      'student_life.activities_desc': 'खेल, सांस्कृतिक कार्यक्रमों, प्रतियोगिताओं और छात्र नेतृत्व के लिए भरपूर अवसर।',
      'student_life.creativity_title': 'रचनात्मकता',
      'student_life.creativity_desc': 'प्रोजेक्ट्स, अभिव्यक्ति और नई खोज।',
      'student_life.community_title': 'स्कूल समुदाय',
      'student_life.community_desc': 'एकता, परस्पर सम्मान और टीम वर्क।',
      'student_life.achievements_kicker': 'उपलब्धियां व सम्मान',
      'student_life.achievements_title': 'विद्यार्थियों की उपलब्धियां व संस्कृति',
      'student_life.achievements_desc': 'सत्यापित शैक्षणिक मील के पत्थर, खेल सम्मान और सह-पाठ्यक्रम पुरस्कार।',
      'student_life.admin_btn': 'एडमिन में प्रबंधित करें',

      // Academics Section
      'academics.kicker': 'शिक्षा',
      'academics.title': 'एक सरल और स्पष्ट शैक्षणिक यात्रा।',
      'academics.desc': 'विद्यालय की अध्ययन यात्रा को चरणबद्ध और व्यावहारिक रूप से प्रस्तुत किया गया है।',
      'academics.stage1_title': 'प्रारंभिक वर्ष',
      'academics.stage1_desc': 'शुरुआती कक्षाओं में बुनियादी समझ, भाषा संवाद और अध्ययन की अच्छी आदतें विकसित की जाती हैं।',
      'academics.stage2_title': 'मुख्य शिक्षण वर्ष',
      'academics.stage2_desc': 'कक्षा शिक्षण और गतिविधियों के माध्यम से विषयों का गहन ज्ञान विकसित किया जाता है।',
      'academics.stage3_title': 'माध्यमिक वर्ष',
      'academics.stage3_desc': '10वीं बोर्ड परीक्षा में उत्कृष्ट प्रदर्शन और आगे की शिक्षा के लिए ठोस तैयारी।',

      // Campus Section
      'campus.kicker': 'परिसर व सुविधाएं',
      'campus.title': 'वह वातावरण जो स्कूली जीवन को संवारता है।',
      'campus.desc': 'स्कूल की आधुनिक सुविधाएं छात्रों के दैनिक अध्ययन को सुरक्षित और प्रभावी बनाती हैं।',
      'campus.library_title': 'पुस्तकालय (Library)',
      'campus.library_desc': 'अध्ययन और स्वाध्याय के लिए शांत पुस्तकालय।',
      'campus.lab_title': 'कंप्यूटर लैब',
      'campus.lab_desc': 'डिजिटल साक्षरता और कंप्यूटर आधारित व्यावहारिक शिक्षा का केंद्र।',
      'campus.sports_title': 'खेल का मैदान व क्रीड़ा',
      'campus.sports_desc': 'आउटडोर खेल, शारीरिक स्वास्थ्य और खेल भावना का विकास।',
      'campus.campus_title': 'विद्यालय परिसर',
      'campus.campus_desc': 'सुरक्षित और सुव्यवस्थित परिसर जहां बच्चे निडर होकर सीखते हैं।',

      // Hostel Section
      'hostel.kicker': 'छात्रावास जानकारी',
      'hostel.title': 'दूरदराज के परिवारों के लिए सुरक्षित आवासीय व्यवस्था।',
      'hostel.desc': 'स्कूल में आवासीय सुविधा उपलब्ध है। अभिभावक पात्रता, नियम और शुल्क संबंधी जानकारी सीधे प्राप्त कर सकते हैं।',
      'hostel.card1_title': 'पहले पुष्टि करें',
      'hostel.card1_desc': 'स्कूल से वर्तमान छात्रावास सीट उपलब्धता की जानकारी लें।',
      'hostel.card2_title': 'साथ में पूछताछ करें',
      'hostel.card2_desc': 'प्रवेश पूछताछ के साथ अपनी छात्रावास आवश्यकता का उल्लेख करें।',
      'hostel.box_kicker': 'आवासीय पूछताछ',
      'hostel.box_title': 'छात्रावास की जानकारी चाहिए?',
      'hostel.box_desc': 'हमें बताएं कि छात्रावास की आवश्यकता है, स्कूल टीम आपसे तुरंत संपर्क करेगी।',
      'hostel.box_btn': 'छात्रावास के बारे में जानें',

      // Gallery Section
      'gallery.kicker': 'यादगार पल व झलकियां',
      'gallery.title': 'स्कूल फोटो गैलरी (Photo Gallery)',
      'gallery.desc': 'गिसेला इंग्लिश मीडियम हाई स्कूल के शैक्षणिक उत्सवों, खेलकूद प्रतियोगिताओं और छात्र जीवन की सुंदर तस्वीरें।',
      'gallery.watch_video': 'वीडियो टूर देखें',
      'gallery.photo1_tag': 'विज्ञान मेला',
      'gallery.photo1_title': 'विज्ञान व प्रोजेक्ट प्रदर्शनी',
      'gallery.photo1_desc': 'छात्रों द्वारा बनाए गए नवाचारी विज्ञान मॉडल, पर्यावरण प्रोजेक्ट और रोबोटिक्स प्रयोग।',
      'gallery.photo2_tag': 'खेल दिवस',
      'gallery.photo2_title': 'वार्षिक खेलकूद प्रतियोगिता',
      'gallery.photo2_desc': 'ट्रैक इवेंट्स, रिले रेस, फुटबॉल और विभिन्न हाउस की एथलेटिक उपलब्धियां।',
      'gallery.photo3_tag': 'सांस्कृतिक',
      'gallery.photo3_title': 'सांस्कृतिक दिवस व कला',
      'gallery.photo3_desc': 'पारंपरिक नृत्य, संगीत, नाटक और सांस्कृतिक कार्यक्रमों की मनमोहक प्रस्तुतियां।',
      'gallery.photo4_tag': 'कक्षा कक्ष',
      'gallery.photo4_title': 'सक्रिय व आनंददायक शिक्षण',
      'gallery.photo4_desc': 'रोचक कक्षा सत्र, समूह गतिविधियां, पुस्तकालय वाचन और भाषा विकास।',
      'gallery.photo5_tag': 'प्रौद्योगिकी',
      'gallery.photo5_title': 'कंप्यूटर लैब अभ्यास',
      'gallery.photo5_desc': 'व्यावहारिक कंप्यूटर शिक्षा और आईसीटी कक्ष में सॉफ्टवेयर अभ्यास।',
      'gallery.photo6_tag': 'राष्ट्रीय दिवस',
      'gallery.photo6_title': 'स्वतंत्रता व गणतंत्र दिवस',
      'gallery.photo6_desc': 'ध्वजारोहण समारोह, परेड ड्रिल और देशभक्ति से ओत-प्रोत प्रस्तुतियां।',

      // Video Section
      'video.kicker': 'स्कूल वीडियो',
      'video.title': 'वीडियो टूर के माध्यम से स्कूल को जानें।',
      'video.desc': 'यह वीडियो अभिभावकों को स्कूल परिसर और शैक्षणिक वातावरण का सीधा परिचय कराता है।',
      'video.youtube_btn': 'YouTube पर वीडियो देखें',

      // Admissions & Enquiry Section
      'admissions.kicker': 'प्रवेश 2026–27',
      'admissions.title': 'सरल ऑनलाइन पूछताछ से शुरुआत करें।',
      'admissions.desc': 'नीचे बुनियादी विवरण साझा करें। स्कूल प्रवेश टीम आपसे फोन पर संपर्क करेगी।',
      'admissions.step1_title': 'पूछताछ भेजें',
      'admissions.step1_desc': 'बताएं कि कौन और किस कक्षा के लिए आवेदन कर रहा है।',
      'admissions.step2_title': 'स्कूल से संपर्क',
      'admissions.step2_desc': 'प्रवेश टीम जानकारी देखकर परिवार से फोन पर संपर्क करेगी।',
      'admissions.step3_title': 'अगला चरण',
      'admissions.step3_desc': 'दस्तावेज़, उपलब्धता व प्रवेश प्रक्रिया प्रत्यक्ष रूप से पूरी होगी।',
      'enquiry.form_title': 'प्रवेश पूछताछ प्रपत्र',
      'enquiry.form_sub': 'कक्षा 1–10 के लिए · सत्र 2026–27',
      'enquiry.lbl_parent': 'अभिभावक का नाम',
      'enquiry.ph_parent': 'पूरा नाम लिखें',
      'enquiry.lbl_student': 'छात्र/छात्रा का नाम',
      'enquiry.ph_student': 'छात्र का पूरा नाम',
      'enquiry.lbl_phone': 'मोबाइल नंबर',
      'enquiry.ph_phone': '10 अंकों का मोबाइल नंबर',
      'enquiry.lbl_class': 'आवेदन कक्षा',
      'enquiry.lbl_location': 'गाँव / क्षेत्र',
      'enquiry.ph_location': 'अपना गाँव या शहर लिखें',
      'enquiry.lbl_hostel': 'मुझे छात्रावास / आवासीय सुविधा की जानकारी चाहिए।',
      'enquiry.lbl_message': 'संदेश (वैकल्पिक)',
      'enquiry.ph_message': 'स्कूल के लिए कोई प्रश्न या संदेश?',
      'enquiry.submit_btn': 'प्रवेश पूछताछ प्रेषित करें',
      'enquiry.note': 'पूर्वावलोकन संस्करण: डेटाबेस जुड़ने पर लाइव डेटा सुरक्षित होगा।',

      // FAQ Section
      'faq.kicker': 'सहायता व मार्गदर्शन',
      'faq.title': 'अभिभावक सहायता व सामान्य प्रश्न',
      'faq.desc': 'प्रवेश, कक्षाओं और सुविधाओं से संबंधित अक्सर पूछे जाने वाले महत्वपूर्ण प्रश्न।',
      'faq.submit_enquiry_btn': 'पूछताछ भेजें',
      'faq.q1': 'किन कक्षाओं में प्रवेश खुला है?',
      'faq.a1': 'सत्र 2026-27 के लिए कक्षा 1 से 10 तक सीट उपलब्धता के अनुसार प्रवेश खुला है। ऊपर दिए गए प्रपत्र से संपर्क करें।',
      'faq.q2': 'क्या छात्रावास सुविधा उपलब्ध है?',
      'faq.a2': 'हाँ, छात्रों के लिए सुरक्षित छात्रावास सुविधा उपलब्ध है। प्रपत्र में छात्रावास विकल्प चुनें।',
      'faq.q3': 'प्रवेश हेतु कौन से दस्तावेज़ चाहिए?',
      'faq.a3': 'जन्म प्रमाण पत्र, पूर्व कक्षा की अंकतालिका/टीसी, पासपोर्ट फोटो और निवास प्रमाण पत्र।',

      // Digital Portal Card
      'portal.kicker': 'स्कूल डिजिटल पोर्टल',
      'portal.title': 'स्कूल प्रबंधन का सुरक्षित डिजिटल मंच।',
      'portal.desc': 'अभिभावकों, छात्रों और शिक्षकों के लिए उपस्थिति, परिणाम और असाइनमेंट की आधुनिक व्यवस्था।',
      'portal.card_title': 'स्कूल पोर्टल',
      'portal.card_sub': 'अभिभावक · छात्र · शिक्षक',
      'portal.admin_title': 'एडमिन पूर्वावलोकन',
      'portal.admin_sub': 'स्कूल प्रशासन',

      // Contact Section
      'contact.kicker': 'संपर्क व विद्यालय भ्रमण',
      'contact.title': 'गिसेला इंग्लिश मीडियम हाई स्कूल',
      'contact.address': 'शिलाछड़ी, गोमती जिला, त्रिपुरा — पिन 799104',
      'contact.lbl_udise': 'UDISE कोड',
      'contact.lbl_board': 'बोर्ड संबद्धता',
      'contact.board_name': 'त्रिपुरा माध्यमिक शिक्षा बोर्ड (TBSE)',
      'contact.lbl_classes': 'कक्षाएं',
      'contact.classes_val': 'कक्षा 1 से 10 तक',
      'contact.lbl_admissions': 'प्रवेश जानकारी',
      'contact.admissions_val': 'इस पृष्ठ पर ऑनलाइन प्रपत्र का उपयोग करें',
      'contact.planning_title': 'विद्यालय आने की योजना है?',
      'contact.planning_desc': 'मार्गदर्शन, कार्यालय समय और सीटों की जानकारी हेतु आने से पहले स्कूल से पुष्टि करें।',
      'contact.enquiry_btn': 'पूछताछ भेजें',

      // Footer
      'footer.explore': 'महत्वपूर्ण लिंक',
      'footer.roadmap_title': 'डिजिटल रूपरेखा',
      'footer.roadmap_desc': 'पब्लिक वेबसाइट · आधुनिक स्कूल अनुभव<br>स्कूल पोर्टल · अभिभावक · छात्र · शिक्षक<br>अगला चरण: क्लाउड डेटाबेस व लाइव ऑपरेशन्स',
      'footer.copyright': '© 2003–2026 गिसेला इंग्लिश मीडियम हाई स्कूल, शिलाछड़ी, त्रिपुरा।',
      'footer.tagline': 'आधुनिक व पारदर्शी डिजिटल शिक्षा अनुभव।'
    }
  };

  const langMeta = {
    en: { name: 'English', letter: 'A', dir: 'ltr', rotAngle: -120 },
    bn: { name: 'বাংলা', letter: 'অ', dir: 'ltr', rotAngle: 0 },
    hi: { name: 'हिन्दी', letter: 'अ', dir: 'ltr', rotAngle: -240 }
  };

  let currentLang = 'en';

  function applyLanguage(lang, triggerAnimation = true) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;

    try {
      localStorage.setItem('gisela_lang', lang);
    } catch (e) {}

    document.documentElement.lang = lang;

    // Update label & letter badge in top bar
    const labelEl = document.getElementById('currentLangLabel');
    const letterEl = document.getElementById('currentLangLetter');
    const emblemImg = document.getElementById('langEmblemImg');

    if (labelEl) labelEl.textContent = langMeta[lang].name;
    if (letterEl) letterEl.textContent = langMeta[lang].letter;

    // Trigger counter-clockwise (anticlock) spin transition
    if (emblemImg) {
      emblemImg.setAttribute('data-active-lang', lang);
      if (triggerAnimation) {
        emblemImg.classList.remove('anticlock-animating');
        void emblemImg.offsetWidth; // trigger reflow
        emblemImg.classList.add('anticlock-animating');
        setTimeout(() => {
          emblemImg.classList.remove('anticlock-animating');
        }, 700);
      }
    }

    // Update checkmark indicators in dropdown
    document.querySelectorAll('.lang-opt-btn').forEach((btn) => {
      const bLang = btn.getAttribute('data-lang');
      const check = btn.querySelector('.lang-check');
      if (bLang === lang) {
        btn.classList.add('is-active');
        if (check) check.classList.remove('hidden');
      } else {
        btn.classList.remove('is-active');
        if (check) check.classList.add('hidden');
      }
    });

    // Translate all data-i18n elements
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // If element has HTML tags or line breaks, set innerHTML, else textContent
        if (dict[key].includes('<') || dict[key].includes('&')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Translate titles & aria-labels
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.setAttribute('title', dict[key]);
      }
    });

    // Re-create icons if required
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  function initLanguageSelector() {
    const wrap = document.querySelector('.lang-dropdown-wrap');
    const btn = document.getElementById('langSelectorBtn');
    const menu = document.getElementById('langDropdownMenu');

    if (!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = wrap.classList.toggle('is-open');
      menu.classList.toggle('hidden', !isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.lang-opt-btn').forEach((optBtn) => {
      optBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = optBtn.getAttribute('data-lang');
        if (selectedLang) {
          applyLanguage(selectedLang, true);
        }
        wrap.classList.remove('is-open');
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) {
        wrap.classList.remove('is-open');
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    // Load initial language preference
    let savedLang = 'en';
    try {
      savedLang = localStorage.getItem('gisela_lang') || 'en';
    } catch (e) {}

    applyLanguage(savedLang, false);
  }

  // Export global translation helper
  window.GiselaI18n = {
    setLanguage: applyLanguage,
    getLanguage: () => currentLang,
    t: (key) => (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSelector);
  } else {
    initLanguageSelector();
  }
})();
