/* Reading and Listening content: placement sets and practice sets.
   Question types: tfng (True/False/Not Given), ynng, mcq, gap (short answer / completion), heading (matching headings) */

window.READING_SETS = [
 {id:'R-place-1', use:'placement', level:'B1-B2', title:'Working from anywhere', words:340, minutes:9,
  text:`<p>Ten years ago, most office workers had never heard of the phrase "remote work". Today, it is one of the most discussed topics in business. The shift began slowly, driven by better internet connections and cheaper laptops, but it accelerated dramatically in 2020, when millions of employees were suddenly required to work from home. Companies that had insisted the office was essential discovered, often to their surprise, that productivity did not collapse.</p>
<p>Supporters of remote work point to several advantages. Employees save the time and money they used to spend commuting, and many report that they can concentrate better without the interruptions of an open-plan office. Employers benefit too: they can recruit talented people from other cities or countries, and they can reduce the amount of expensive office space they rent. A 2023 survey of 4,000 technology workers found that 71 per cent would consider leaving a job that required them to be in the office five days a week.</p>
<p>However, the picture is not entirely positive. Managers worry that new employees learn more slowly when they cannot watch experienced colleagues at work. Some researchers have found that creative tasks, such as designing a new product, benefit from face-to-face discussion. There are also concerns about the boundary between work and home life: when the office is the kitchen table, it becomes difficult to switch off, and some remote workers report longer hours and higher stress.</p>
<p>As a result, many organisations have settled on a hybrid model, in which staff spend two or three days a week in the office and the rest at home. This compromise is popular with employees, but it creates practical problems. If everyone chooses to come in on Tuesday and Wednesday, the office is crowded for two days and empty for three. Some companies now use booking systems for desks, while others assign fixed "anchor days" to each team. The office of the future, it seems, will be a place people visit rather than a place where they simply sit.</p>`,
  questions:[
   {type:'tfng', q:'Remote work became common mainly because of improvements in technology before 2020.', a:'FALSE', why:'Technology started the shift "slowly", but the dramatic change came in 2020 when people were "required" to work from home.'},
   {type:'tfng', q:'Companies that believed the office was essential found that productivity fell sharply.', a:'FALSE', why:'The text says productivity "did not collapse".'},
   {type:'tfng', q:'Most of the technology workers surveyed would think about leaving a fully office-based job.', a:'TRUE', why:'71 per cent would consider leaving such a job.'},
   {type:'tfng', q:'Remote employees earn less than office-based employees.', a:'NOT GIVEN', why:'Salaries are not mentioned anywhere in the passage.'},
   {type:'tfng', q:'Some studies suggest that creative work is better done in person.', a:'TRUE', why:'"Creative tasks ... benefit from face-to-face discussion."'},
   {type:'gap', q:'Employees save money because they no longer have to pay for ______. (ONE WORD)', a:['commuting','the commute','commute'], why:'"save the time and money they used to spend commuting".'},
   {type:'gap', q:'Working at home can make it hard to ______ at the end of the day. (TWO WORDS)', a:['switch off'], why:'"it becomes difficult to switch off".'},
   {type:'mcq', q:'What is the main problem with the hybrid model described in the final paragraph?', opts:['Employees dislike it.','Office attendance is unevenly distributed across the week.','It is more expensive than full remote work.','Teams refuse to use booking systems.'], a:1, why:'"crowded for two days and empty for three".'}
  ]},
 {id:'R-place-2', use:'placement', level:'C1', title:'Why sleep makes memories stick', words:470, minutes:13,
  paragraphs:true,
  text:`<p><b>A</b> For most of the twentieth century, sleep was regarded by scientists as a period of inactivity, a kind of nightly shutdown during which the brain simply rested. This view began to change in the 1950s with the discovery of rapid eye movement (REM) sleep, when the brain is almost as active as it is during waking hours. Yet it took another four decades for researchers to establish what that activity might be for. One of the most robust findings to emerge since then is that sleep plays a central role in consolidating memory: the process by which fragile new memories are transformed into stable, long-term ones.</p>
<p><b>B</b> The evidence comes from several directions. In laboratory studies, participants who learn a list of words or a sequence of finger movements and then sleep typically recall more, and perform more accurately, than participants who stay awake for the same number of hours. Crucially, the benefit is not simply the result of rest; people who relax quietly without sleeping do not show the same improvement. Brain-imaging experiments add a further clue. Patterns of neural activity recorded while rats navigate a maze are "replayed" during subsequent sleep, as though the brain were rehearsing the day's experiences at high speed.</p>
<p><b>C</b> Different stages of sleep appear to serve different kinds of memory. Deep, slow-wave sleep, which dominates the first half of the night, is associated with declarative memory: facts, names and events. REM sleep, more plentiful towards morning, seems more important for procedural skills and for emotional memories. This division helps to explain why students who cut their sleep short before an examination may remember the facts they studied but struggle to apply them flexibly, and why a single night of poor sleep can leave people more reactive to negative experiences the following day.</p>
<p><b>D</b> The practical implications are considerable, though they are frequently ignored. Schools in many countries begin lessons early in the morning, at precisely the time when adolescents, whose body clocks run later than those of adults, are least alert. A number of districts in the United States that delayed their start times by an hour reported measurable gains in attendance and grades. In the workplace, the long-hours culture of some professions may be self-defeating: an employee who sleeps five hours a night in order to work longer is likely to retain less of what the extra hours produce.</p>
<p><b>E</b> Not every question has been settled. Researchers still disagree about whether sleep actively strengthens memories or merely protects them from interference, and about how much of the benefit can be obtained from a short daytime nap. What is no longer in doubt is that the old picture of sleep as wasted time was wrong. Far from switching off, the sleeping brain is doing some of its most important work.</p>`,
  headings:['i. Evidence from experiments and brain imaging','ii. How different sleep stages support different memories','iii. The cost of ignoring the findings','iv. Unresolved questions and a settled conclusion','v. From passive rest to active process','vi. Why adolescents need more sleep than adults','vii. The dangers of daytime napping'],
  questions:[
   {type:'heading', q:'Paragraph A', a:'v', why:'Paragraph A traces the change from viewing sleep as rest to understanding it as active consolidation.'},
   {type:'heading', q:'Paragraph B', a:'i', why:'Laboratory studies and brain imaging are the evidence.'},
   {type:'heading', q:'Paragraph C', a:'ii', why:'Slow-wave vs REM sleep and the memory types they support.'},
   {type:'heading', q:'Paragraph D', a:'iii', why:'Practical implications that are "frequently ignored" (schools, workplaces).'},
   {type:'heading', q:'Paragraph E', a:'iv', why:'Open questions plus the conclusion that the old view was wrong.'},
   {type:'mcq', q:'Why does the writer mention people who "relax quietly without sleeping"?', opts:['To show that relaxation is as effective as sleep.','To show that the memory benefit comes from sleep itself, not just from rest.','To suggest that most laboratory studies are flawed.','To explain how rats were tested in the maze.'], a:1, why:'The control group rules out rest as the explanation.'},
   {type:'ynng', q:'Students who sleep too little may remember facts but find it hard to use them flexibly.', a:'YES', why:'Stated directly in paragraph C.'},
   {type:'ynng', q:'Delaying school start times is expensive for school districts.', a:'NOT GIVEN', why:'Cost is not discussed.'},
   {type:'ynng', q:'Working long hours on little sleep is an efficient way to get more done.', a:'NO', why:'The writer calls it "self-defeating".'},
   {type:'gap', q:'Researchers are still unsure whether sleep strengthens memories or simply protects them from ______. (ONE WORD)', a:['interference'], why:'Paragraph E.'}
  ]},
 {id:'R-prac-1', use:'practice', level:'B2', title:'The hidden cost of free apps', words:390, minutes:10,
  text:`<p>When a product is free, the old saying goes, you are the product. Nowhere is this more obvious than in the economy of mobile applications. Of the roughly two million apps available in the major stores, more than nine in ten cost nothing to download. Yet the companies that make them employ thousands of engineers and earn billions of dollars a year. The money has to come from somewhere, and for most free apps it comes from advertising, which in turn depends on data.</p>
<p>The mechanism is straightforward. An app records what you do: the articles you read, the products you look at, the time you spend on each screen, and sometimes your location. This information is combined with data from other sources to build a profile, which advertisers use to decide whether you are worth paying to reach. A user who has recently searched for flights, for example, is far more valuable to a hotel chain than one who has not. The more accurately an app can predict your interests, the more it can charge.</p>
<p>Critics argue that users do not understand this bargain. Privacy policies are long, technical and rarely read; one study estimated that reading every policy an average user encountered in a year would take 76 working days. Regulators in Europe have responded with rules that require explicit consent before data is collected, and some phone manufacturers now allow users to block tracking with a single tap. When one such feature was introduced in 2021, a majority of users chose to switch tracking off, and several large advertising businesses reported sharp falls in revenue.</p>
<p>Defenders of the model make two points in reply. First, many people cannot afford to pay for software and would lose access to useful services if the free model disappeared. Second, personalised advertising is arguably less annoying than the random kind, since it shows people things they might actually want. The debate is unlikely to end soon, but one change is already visible: a growing number of apps now offer a paid version with no advertising and no tracking, letting users decide for themselves which currency they prefer to pay in.</p>`,
  questions:[
   {type:'tfng', q:'Most apps in the major stores are free to download.', a:'TRUE', why:'"more than nine in ten cost nothing".'},
   {type:'tfng', q:'Apps always collect the user\'s location.', a:'FALSE', why:'"and sometimes your location".'},
   {type:'tfng', q:'A hotel company would pay more to advertise to someone who has searched for flights.', a:'TRUE', why:'Stated as an example in paragraph 2.'},
   {type:'tfng', q:'European regulators have banned personalised advertising.', a:'FALSE', why:'They require consent; they have not banned it.'},
   {type:'tfng', q:'The 2021 tracking feature was introduced by a European company.', a:'NOT GIVEN', why:'The manufacturer\'s origin is not stated.'},
   {type:'gap', q:'Reading all the privacy policies a typical user sees in a year would take about ______ working days.', a:['76','seventy-six'], why:'Paragraph 3.'},
   {type:'mcq', q:'According to defenders of free apps, personalised advertising is', opts:['more profitable than random advertising.','less irritating than random advertising.','necessary for European regulation.','disappearing because of paid versions.'], a:1, why:'"less annoying than the random kind".'},
   {type:'mcq', q:'The phrase "which currency they prefer to pay in" (final sentence) refers to', opts:['dollars or euros.','money or personal data.','subscriptions or one-off payments.','advertising or tracking.'], a:1, why:'Users choose between paying money or paying with data.'}
  ]},
 {id:'R-prac-2', use:'practice', level:'C1', title:'The engineering of the pencil', words:430, minutes:12,
  paragraphs:true,
  text:`<p><b>A</b> Few objects are as humble, or as misunderstood, as the pencil. Its core has never contained lead; the dark mineral that early users mistook for lead was graphite, a form of carbon first mined in quantity in the English county of Cumbria in the sixteenth century. The deposit was so pure that lumps of it could be cut into sticks and wrapped in string or sheepskin, and so valuable that the mine was guarded by armed men and its output was transported under escort.</p>
<p><b>B</b> The modern pencil owes its existence to a shortage. During the wars that followed the French Revolution, Britain cut off exports of Cumbrian graphite to France. In 1795 a French officer and inventor, Nicolas-Jacques Conté, solved the problem by grinding low-grade graphite into powder, mixing it with clay, shaping the paste into rods and firing them in a kiln. By varying the proportion of clay he could make the core harder or softer, and this is still the method used today. The familiar grades, from the soft 6B to the hard 9H, are a direct descendant of Conté's experiments.</p>
<p><b>C</b> Mass production turned a craft into an industry. In the nineteenth century, factories in Germany and the United States developed machinery to cut cedar wood into slats, groove them, lay in the cores, glue the halves together and cut the result into individual pencils. A single factory could produce hundreds of thousands a day. Cedar was chosen because it is soft enough to sharpen easily yet does not splinter, and because it has a pleasant smell, a quality manufacturers were well aware of.</p>
<p><b>D</b> The pencil's survival into the digital age is instructive. It requires no power, works upside down and in the rain, leaves marks that can be erased, and costs almost nothing. Astronauts carried pencils before a pressurised pen was developed, and carpenters, surveyors and artists still prefer them. Even in software companies, whiteboards and notebooks remain full of pencilled sketches, because the physical act of drawing appears to aid thinking in ways that typing does not.</p>
<p><b>E</b> Perhaps the pencil's deepest lesson concerns the invisibility of complexity. The economist Leonard Read observed in 1958 that no single person on earth knows how to make a pencil from scratch: the graphite, the clay, the cedar, the lacquer, the brass ferrule and the rubber eraser come from different continents and require dozens of specialised skills. The pencil works, and is cheap, precisely because that knowledge is distributed among thousands of people who have never met.</p>`,
  headings:['i. A product of wartime necessity','ii. The origins of a misleading name','iii. Why the pencil has outlasted its rivals','iv. From workshop to factory','v. Knowledge nobody holds alone','vi. The pencil in space exploration','vii. The environmental cost of cedar'],
  questions:[
   {type:'heading', q:'Paragraph A', a:'ii', why:'Graphite mistaken for lead.'},
   {type:'heading', q:'Paragraph B', a:'i', why:'The British export ban led to Conté\'s invention.'},
   {type:'heading', q:'Paragraph C', a:'iv', why:'Mass production and factories.'},
   {type:'heading', q:'Paragraph D', a:'iii', why:'Why it survives in the digital age.'},
   {type:'heading', q:'Paragraph E', a:'v', why:'Leonard Read\'s observation about distributed knowledge.'},
   {type:'gap', q:'Conté changed the hardness of the core by altering the amount of ______.', a:['clay'], why:'Paragraph B.'},
   {type:'gap', q:'Cedar was chosen partly because it does not ______ when sharpened.', a:['splinter'], why:'Paragraph C.'},
   {type:'mcq', q:'What point does the writer make in paragraph E?', opts:['Pencils should be more expensive.','The pencil is simple enough for one person to make.','Complex cooperation is hidden inside a cheap object.','Leonard Read invented the modern pencil.'], a:2, why:'"the invisibility of complexity".'}
  ]}
];

/* Listening: scripts are arrays of {voice, text}. TTS reads them; a fallback uses the browser's speech synthesis. */
window.LISTENING_SETS = [
 {id:'L-place-1', use:'placement', part:1, title:'Booking a training course', level:'B1', minutes:5,
  intro:'Part 1. You will hear a conversation between a receptionist at a training centre and a man who wants to book a course. First you have some time to look at questions 1 to 6. Now listen carefully and answer questions 1 to 6.',
  script:[
   {voice:'airy', who:'Receptionist', text:'Good morning, Brightline Training Centre. How can I help you?'},
   {voice:'rounded', who:'Caller', text:'Hi, I\'d like to book a place on one of your data analysis courses, please. The evening one, if possible.'},
   {voice:'airy', who:'Receptionist', text:'Certainly. Can I take your name?'},
   {voice:'rounded', who:'Caller', text:'It\'s Daniel Hartwell. That\'s H-A-R-T-W-E-L-L.'},
   {voice:'airy', who:'Receptionist', text:'Thank you, Mr Hartwell. And a contact number?'},
   {voice:'rounded', who:'Caller', text:'My mobile is oh seven seven double two, nine one six, four three eight.'},
   {voice:'airy', who:'Receptionist', text:'Oh seven seven double two, nine one six, four three eight. Lovely. Now, the evening course runs on Tuesdays and Thursdays, from six thirty until nine. It starts on the fourteenth of March and lasts eight weeks.'},
   {voice:'rounded', who:'Caller', text:'The fourteenth of March. That\'s fine. And how much is it?'},
   {voice:'airy', who:'Receptionist', text:'The full fee is four hundred and eighty pounds, but if you pay before the end of February there\'s an early-bird discount, so it comes down to four hundred and twenty.'},
   {voice:'rounded', who:'Caller', text:'Great, I\'ll pay this week then. Do I need to bring my own laptop?'},
   {voice:'airy', who:'Receptionist', text:'Yes, please. We provide the software, but students use their own computers. Oh, and one more thing: the first session is in Room 12, not the usual computer lab, because the lab is being refurbished.'},
   {voice:'rounded', who:'Caller', text:'Room 12. Got it. Thanks very much.'},
   {voice:'airy', who:'Receptionist', text:'You\'re welcome. We\'ll email you a confirmation today.'}
  ],
  questions:[
   {type:'gap', q:'1. Surname: ______', a:['hartwell'], why:'Spelled out: H-A-R-T-W-E-L-L.'},
   {type:'gap', q:'2. Mobile number: 07722 916 ______', a:['438'], why:'"four three eight".'},
   {type:'gap', q:'3. Course days: Tuesdays and ______', a:['thursdays','thursday'], why:'"Tuesdays and Thursdays".'},
   {type:'gap', q:'4. Start date: ______ March', a:['14','14th','fourteenth','the fourteenth'], why:'"the fourteenth of March".'},
   {type:'gap', q:'5. Price with early payment: £______', a:['420','four hundred and twenty'], why:'The discounted price is 420, not the full fee of 480.'},
   {type:'gap', q:'6. First session location: Room ______', a:['12','twelve'], why:'"Room 12, not the usual computer lab".'}
  ]},
 {id:'L-place-2', use:'placement', part:4, title:'Lecture: the history of the shipping container', level:'C1', minutes:6,
  intro:'Part 4. You will hear part of a lecture about the shipping container. First you have some time to look at questions 7 to 12. Now listen carefully and answer questions 7 to 12.',
  script:[
   {voice:'buttery', who:'Lecturer', text:'Good afternoon. Today I want to talk about an invention that most people never think about, and yet it has probably done more to shape the modern economy than the internet. I\'m talking about the shipping container: the steel box, usually twenty or forty feet long, that you see stacked on ships and lorries.'},
   {voice:'buttery', who:'Lecturer', text:'Before the container, loading a ship was slow and extremely labour-intensive. Goods arrived at the docks in sacks, barrels and wooden crates of every size, and gangs of workers carried each item on board by hand. A typical ship could spend more time in port being loaded and unloaded than it spent at sea. Theft was common, damage was frequent, and the cost of moving goods across an ocean could be as much as a quarter of their final price.'},
   {voice:'buttery', who:'Lecturer', text:'The change came in 1956, when an American trucking businessman called Malcolm McLean loaded fifty-eight metal boxes onto a converted tanker ship in New Jersey and sent them to Texas. McLean\'s insight was not the box itself, which was hardly new. It was the idea that the whole transport system, ships, trucks, trains and cranes, should be redesigned around a standard box that never needed to be opened on its journey.'},
   {voice:'buttery', who:'Lecturer', text:'Standardisation was the hard part. Through the 1960s, shipping companies, railways and governments argued about sizes and fittings, and it was not until 1970 that international standards were finally agreed. Once they were, the effects were dramatic. Loading costs fell by more than ninety per cent. A ship that once needed a week in port could be turned around in a day. Ports that invested in cranes, such as Rotterdam and Singapore, grew rapidly, while traditional ports like London\'s docklands, which lacked space for the new equipment, went into decline.'},
   {voice:'buttery', who:'Lecturer', text:'The social costs were real. Hundreds of thousands of dock workers lost their jobs, and communities built around the old ports struggled for decades. But the container also made it possible for a factory in Asia to supply a shop in Europe at a price that would have been unthinkable in 1950, and in that sense it laid the foundation for the global supply chains that we now take for granted. Next week, we\'ll look at what happens when those chains break.'}
  ],
  questions:[
   {type:'mcq', q:'7. According to the lecturer, before containers a ship often', opts:['carried fewer goods than a train.','spent longer in port than at sea.','was unloaded by machines.'], a:1, why:'"could spend more time in port ... than it spent at sea".'},
   {type:'gap', q:'8. Transport could account for up to a ______ of a product\'s final price.', a:['quarter','1/4','25%'], why:'"as much as a quarter of their final price".'},
   {type:'gap', q:'9. In 1956 McLean shipped ______ containers from New Jersey to Texas.', a:['58','fifty-eight','fifty eight'], why:'"fifty-eight metal boxes".'},
   {type:'mcq', q:'10. The lecturer says McLean\'s real innovation was', opts:['inventing the metal box.','building a new kind of ship.','redesigning the whole system around a standard box.'], a:2, why:'"the whole transport system ... redesigned around a standard box".'},
   {type:'gap', q:'11. International standards were agreed in ______.', a:['1970'], why:'"not until 1970".'},
   {type:'mcq', q:'12. Why did London\'s docklands decline?', opts:['Workers refused to use cranes.','There was not enough space for new equipment.','Ships moved to Asia.'], a:1, why:'"lacked space for the new equipment".'}
  ]},
 {id:'L-prac-1', use:'practice', part:3, title:'Two students plan a presentation', level:'B2', minutes:5,
  intro:'Part 3. You will hear two students, Maya and Tom, discussing a presentation they have to give. Answer questions 1 to 6.',
  script:[
   {voice:'airy', who:'Maya', text:'Tom, we need to decide on the topic for the presentation. The tutor said it has to be something about renewable energy, and we\'ve got fifteen minutes, not twenty like last time.'},
   {voice:'rounded', who:'Tom', text:'Fifteen? That\'s tight. I was thinking we could do solar power in desert countries. There\'s loads of data, and it\'s relevant to my dissertation.'},
   {voice:'airy', who:'Maya', text:'It\'s a good topic, but half the class is doing solar. What about tidal energy? Hardly anyone covers it, and the tutor mentioned she worked on a tidal project in Scotland.'},
   {voice:'rounded', who:'Tom', text:'Hmm, you\'re right, that might impress her. Okay, tidal it is. How should we split the work?'},
   {voice:'airy', who:'Maya', text:'I\'ll do the background and the technology, since I did the physics module. Could you handle the costs and the environmental impact? You\'re better with the economics side.'},
   {voice:'rounded', who:'Tom', text:'Fine by me. What about the slides? Last time we had far too many and ran out of time.'},
   {voice:'airy', who:'Maya', text:'Let\'s keep it to ten slides maximum, and no paragraphs of text. Just one chart or image per slide and a short heading.'},
   {voice:'rounded', who:'Tom', text:'Agreed. And we should rehearse at least twice. Are you free on Thursday afternoon? The library has group rooms we can book.'},
   {voice:'airy', who:'Maya', text:'Thursday\'s no good, I\'ve got a lab. Friday morning works, though, say ten o\'clock?'},
   {voice:'rounded', who:'Tom', text:'Friday at ten, in the library. I\'ll book the room. Oh, and let\'s send the slides to the tutor the day before the presentation so she can give feedback.'}
  ],
  questions:[
   {type:'gap', q:'1. The presentation must last ______ minutes.', a:['15','fifteen'], why:'"fifteen minutes".'},
   {type:'mcq', q:'2. Why does Maya reject solar power as a topic?', opts:['There is not enough data.','Too many other students have chosen it.','It is not relevant to the course.'], a:1, why:'"half the class is doing solar".'},
   {type:'mcq', q:'3. Tom agrees to tidal energy mainly because', opts:['it relates to his dissertation.','the tutor has experience of it.','it is easy to research.'], a:1, why:'"that might impress her".'},
   {type:'gap', q:'4. Tom will prepare the sections on costs and ______ impact.', a:['environmental'], why:'Maya asks him to handle "the environmental impact".'},
   {type:'gap', q:'5. Maximum number of slides: ______', a:['10','ten'], why:'"ten slides maximum".'},
   {type:'gap', q:'6. Rehearsal: ______ at 10 a.m. in the library.', a:['friday'], why:'"Friday at ten, in the library".'}
  ]},
 {id:'L-prac-2', use:'practice', part:2, title:'Welcome talk for new employees', level:'B1', minutes:5,
  intro:'Part 2. You will hear a manager giving a welcome talk to new staff at a software company. Answer questions 1 to 6.',
  script:[
   {voice:'buttery', who:'Manager', text:'Welcome, everyone, to your first day at Northgate Software. I\'m Priya, the head of People Operations, and I\'ll be guiding you through this morning. Let me start with a few practical things.'},
   {voice:'buttery', who:'Manager', text:'Your security badges are on the table by the door. Please wear them at all times inside the building. The badge opens the main entrance and the lifts, but not the server room on the third floor; access to that is given only to the infrastructure team.'},
   {voice:'buttery', who:'Manager', text:'Working hours are flexible. The core hours, when everyone must be available, are from ten until three. Outside those hours, you can arrange your day as you like, and you can work from home up to two days a week once you\'ve completed your first month.'},
   {voice:'buttery', who:'Manager', text:'Lunch is provided free in the canteen on the ground floor, from twelve until two. If you have any dietary requirements, let the canteen staff know, not me. The gym in the basement is also free, but you\'ll need to sign a form at reception before your first visit.'},
   {voice:'buttery', who:'Manager', text:'Finally, each of you has been assigned a buddy, an experienced colleague who will answer your questions during the first few weeks. You\'ll meet them at eleven o\'clock in the café, not in the meeting rooms, because we want it to feel informal. Any questions? No? Then let\'s head over to IT to collect your laptops.'}
  ],
  questions:[
   {type:'mcq', q:'1. The badge does NOT give access to', opts:['the lifts.','the main entrance.','the server room.'], a:2, why:'"but not the server room".'},
   {type:'gap', q:'2. Core hours: 10 a.m. to ______ p.m.', a:['3','three'], why:'"from ten until three".'},
   {type:'gap', q:'3. Staff can work from home up to ______ days a week after the first month.', a:['2','two'], why:'"up to two days a week".'},
   {type:'mcq', q:'4. Who should staff tell about dietary requirements?', opts:['Priya','canteen staff','reception'], a:1, why:'"let the canteen staff know, not me".'},
   {type:'gap', q:'5. Before using the gym, staff must sign a form at ______.', a:['reception'], why:'Stated directly.'},
   {type:'gap', q:'6. New staff will meet their buddies in the ______.', a:['café','cafe','the cafe'], why:'"in the café, not in the meeting rooms".'}
  ]}
];

/* Dictation drills: listen and type exactly. Grouped by level. */
window.DICTATION_SETS = {
  'A2':['The meeting starts at half past nine.','Could you send me the file before lunch?','There are two printers on the second floor.','She has worked here since last March.','We need to update the software tonight.'],
  'B1':['The report was approved by the manager yesterday afternoon.','If the server crashes again, we will lose the latest changes.','Although the project was delayed, the client seemed satisfied with the result.','I have been learning English for about three years.','Most of the complaints were related to the login page.'],
  'B2':['Despite the initial setbacks, the team managed to deliver the platform ahead of schedule.','The survey suggests that remote employees are slightly more productive than their office-based colleagues.','Had we tested the backup system earlier, the outage would have been avoided.','There is growing evidence that sleep plays a central role in consolidating memory.','The company is expected to announce a substantial increase in revenue next quarter.'],
  'C1':['Not only did the migration exceed its budget, but it also exposed several vulnerabilities in the legacy architecture.','Researchers remain divided over whether the benefit stems from the intervention itself or from the additional attention participants received.','What distinguishes a competent presenter from an outstanding one is the ability to anticipate the audience\'s objections.','The regulations, which came into force in January, require explicit consent before any personal data is processed.','Were it not for the early-warning system, the consequences of the flood would have been considerably more severe.']
};

/* Strategy guides (EN + AR) per skill */
window.STRATEGIES = {
 reading:{title:'Reading strategies',titleAr:'استراتيجيات القراءة',items:[
  {h:'Manage the clock',ar:'إدارة الوقت',t:'60 minutes, 3 passages, 40 questions. Aim for 17 / 20 / 23 minutes: the passages get harder. Never spend more than 90 seconds on one question; mark it and move on. There is no extra time to transfer answers on the computer test.',ta:'60 دقيقة، 3 نصوص، 40 سؤال. وزّع 17/20/23 دقيقة لأن النصوص تصعب تدريجياً. لا تعطِ سؤالاً أكثر من دقيقة ونصف.'},
  {h:'Questions first, then skim',ar:'الأسئلة أولاً ثم التصفح',t:'Read the question stems before the passage so you know what to look for. Skim each paragraph for its main idea (first and last sentences), then scan for keywords, names, numbers and dates.',ta:'اقرأ الأسئلة قبل النص لتعرف ما تبحث عنه. تصفّح الفكرة الرئيسية لكل فقرة ثم ابحث عن الكلمات المفتاحية والأرقام.'},
  {h:'True / False / Not Given',ar:'صح / خطأ / غير مذكور',t:'FALSE means the text says the opposite. NOT GIVEN means the text does not say. The most common error is choosing FALSE when the information is simply absent. Beware of extreme words (all, always, only, never) in statements.',ta:'FALSE تعني أن النص يقول العكس. NOT GIVEN تعني أن النص لا يذكر. أكثر خطأ: اختيار FALSE عندما تكون المعلومة غير موجودة أصلاً.'},
  {h:'Matching headings',ar:'مطابقة العناوين',t:'A heading summarises the whole paragraph, not one detail. Cross out headings you have used. If two headings seem to fit, check which one covers the first and last sentences of the paragraph.',ta:'العنوان يلخص الفقرة كاملة وليس تفصيلاً واحداً. اشطب العناوين المستخدمة.'},
  {h:'Paraphrase awareness',ar:'الانتباه لإعادة الصياغة',t:'The answer almost never uses the same words as the question. Train yourself to see synonyms: "rose sharply" = "increased dramatically"; "a majority" = "most".',ta:'الإجابة نادراً ما تستخدم نفس كلمات السؤال. درّب نفسك على المرادفات.'},
  {h:'Completion questions',ar:'أسئلة الإكمال',t:'Respect the word limit exactly ("NO MORE THAN TWO WORDS"). Copy the word from the text with correct spelling; hyphenated words count as one. Check grammar: if the gap needs a noun, a verb cannot be right.',ta:'التزم بحد الكلمات تماماً. انسخ الكلمة من النص بالتهجئة الصحيحة. تحقق من القواعد: إذا الفراغ يحتاج اسماً فالفعل خطأ.'}
 ]},
 listening:{title:'Listening strategies',titleAr:'استراتيجيات الاستماع',items:[
  {h:'Use the preview time',ar:'استغل وقت المعاينة',t:'Before each part you get time to read the questions. Underline keywords, predict the type of word needed (number? name? noun?) and note the order: answers come in question order.',ta:'قبل كل جزء تحصل على وقت لقراءة الأسئلة. ضع خطاً تحت الكلمات المفتاحية وتوقع نوع الإجابة (رقم؟ اسم؟). الإجابات تأتي بترتيب الأسئلة.'},
  {h:'Expect distractors',ar:'توقع المشتتات',t:'Speakers correct themselves: "Thursday... no, sorry, Friday." The first thing you hear is often wrong. Listen for "actually", "no", "I mean", "rather than".',ta:'المتحدثون يصححون أنفسهم. أول معلومة تسمعها غالباً خطأ. انتبه لكلمات: actually, no, I mean.'},
  {h:'Numbers and spelling',ar:'الأرقام والتهجئة',t:'Part 1 always tests names spelled out, phone numbers, prices and dates. Practise 13 vs 30, double letters, and British spelling conventions. Write numbers as digits.',ta:'الجزء الأول يختبر الأسماء المهجّأة والأرقام والأسعار والتواريخ. تدرّب على 13 و30 والأحرف المكررة.'},
  {h:'Don\'t get stuck',ar:'لا تتوقف عند سؤال',t:'If you miss an answer, let it go immediately. Missing one question is fine; missing three because you were still thinking about the first is not.',ta:'إذا فاتك سؤال اتركه فوراً. أن تخسر سؤالاً أفضل من أن تخسر ثلاثة.'},
  {h:'Accents and speed',ar:'اللهجات والسرعة',t:'You will hear British, Australian and North American voices. Build tolerance with podcasts and BBC audio at natural speed, and use dictation drills to sharpen word-boundary recognition.',ta:'ستسمع لهجات بريطانية وأسترالية وأمريكية. تدرّب على البودكاست وBBC بسرعة طبيعية واستخدم تدريبات الإملاء.'},
  {h:'Check before you submit',ar:'راجع قبل التسليم',t:'On the computer test you get two minutes at the end to review. Check spelling, plurals (the recording says "cars", not "car") and word limits.',ta:'في الاختبار المحوسب تحصل على دقيقتين للمراجعة. تحقق من التهجئة والجمع وحد الكلمات.'}
 ]},
 writing:{title:'Writing strategies',titleAr:'استراتيجيات الكتابة',items:[
  {h:'Time split',ar:'توزيع الوقت',t:'20 minutes for Task 1 (150+ words), 40 for Task 2 (250+ words). Task 2 is worth twice as much, so never let Task 1 steal its time. Write Task 2 first if you tend to overrun.',ta:'20 دقيقة للمهمة الأولى و40 للثانية. المهمة الثانية وزنها ضعف الأولى.'},
  {h:'Plan for 5 minutes',ar:'خطط 5 دقائق',t:'Task 2: decide your position, two main ideas with one example each, and a counterpoint. A clear plan is the difference between Band 6 and Band 7 in Task Response and Coherence.',ta:'حدد موقفك وفكرتين رئيسيتين مع مثال لكل واحدة. التخطيط الواضح هو الفرق بين 6 و7.'},
  {h:'Task 2 structure',ar:'هيكل المهمة الثانية',t:'Intro (paraphrase the question + clear thesis) → Body 1 (topic sentence, explain, example) → Body 2 (same) → Conclusion (restate position, no new ideas). Four or five paragraphs, 260-300 words.',ta:'مقدمة (إعادة صياغة السؤال + موقف واضح) ← فقرتان رئيسيتان ← خاتمة. 260-300 كلمة.'},
  {h:'Task 1 Academic',ar:'المهمة الأولى (أكاديمي)',t:'Introduction (paraphrase) → Overview (2 main trends, no numbers) → 2 detail paragraphs with figures. Do not give opinions. Use comparison language: "twice as many", "peaked at", "fell steadily".',ta:'مقدمة ← نظرة عامة (اتجاهان رئيسيان بدون أرقام) ← فقرتا تفاصيل بالأرقام. بدون آراء.'},
  {h:'Grammar that scores',ar:'قواعد ترفع الدرجة',t:'Band 7 needs "a variety of complex structures" with most sentences error-free. Use relative clauses, conditionals, passive, and one or two participle clauses. Accuracy beats ambition: a correct simple sentence scores higher than a broken complex one.',ta:'الدرجة 7 تحتاج تنوعاً في التراكيب مع أغلب الجمل بدون أخطاء. الدقة أهم من الطموح.'},
  {h:'Arabic-speaker checklist',ar:'قائمة مراجعة للمتحدث بالعربية',t:'Before submitting, check: articles (a/the), third-person -s, present perfect vs past simple, no "the" for general nouns, no run-on sentences joined by commas, and no contractions.',ta:'قبل التسليم: أدوات التعريف، s الشخص الثالث، المضارع التام مقابل الماضي، لا the مع الأسماء العامة، لا جمل طويلة مربوطة بالفواصل، لا اختصارات.'}
 ]},
 speaking:{title:'Speaking strategies',titleAr:'استراتيجيات التحدث',items:[
  {h:'Extend every answer',ar:'وسّع كل إجابة',t:'Part 1: answer + reason + example, in 2-3 sentences. "Yes" or "No" alone loses marks for Fluency. Use the A-R-E method: Answer, Reason, Example.',ta:'الجزء الأول: إجابة + سبب + مثال في جملتين أو ثلاث. استخدم طريقة A-R-E.'},
  {h:'Part 2: use the minute',ar:'الجزء الثاني: استغل الدقيقة',t:'Note 4-5 keywords covering every bullet on the card. Speak for the full 2 minutes; the examiner will stop you. Structure: set the scene, describe, explain why, and finish with how you felt.',ta:'اكتب 4-5 كلمات مفتاحية تغطي كل نقاط البطاقة. تحدث دقيقتين كاملتين.'},
  {h:'Part 3: think aloud',ar:'الجزء الثالث: فكّر بصوت عالٍ',t:'These are abstract questions. Give a view, compare perspectives, speculate about the future, and hedge: "It depends on...", "In many cases...", "I\'d argue that...".',ta:'أسئلة مجردة. أعطِ رأياً، قارن وجهات نظر، تنبأ بالمستقبل، واستخدم التحوّط.'},
  {h:'Fluency over perfection',ar:'الطلاقة قبل الكمال',t:'Pausing to find a word costs more than a small grammar slip. Use natural fillers sparingly ("Well, that\'s an interesting question...") and keep going. Self-correct once, then move on.',ta:'التوقف للبحث عن كلمة يكلفك أكثر من خطأ نحوي صغير. استمر في الكلام.'},
  {h:'Pronunciation for Arabic speakers',ar:'النطق للمتحدثين بالعربية',t:'Focus on: /p/ vs /b/ (park/bark), /v/ vs /f/ (very/ferry), vowel length (ship/sheep, full/fool), final consonant clusters (asked, months), and word stress (PHOtograph / phoTOgraphy). Sentence intonation matters more than accent.',ta:'ركز على: p/b، v/f، طول الحروف المتحركة (ship/sheep)، تجمعات الحروف الساكنة (asked)، ونبر الكلمات. النغمة أهم من اللهجة.'},
  {h:'Record yourself',ar:'سجّل نفسك',t:'Use the Speaking module daily: record 2-minute answers, read the transcript, count fillers and repeated words, and compare your band estimate over time.',ta:'استخدم قسم التحدث يومياً: سجّل إجابات دقيقتين، اقرأ النص، عدّ كلمات الحشو، وقارن تقدير درجتك مع الوقت.'}
 ]}
};
