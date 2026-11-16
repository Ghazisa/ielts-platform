/* Writing, Speaking, Vocabulary, Professional English, Resources, Band descriptors */

window.BAND_DESCRIPTORS = {
 writing:{
  criteria:['Task Response','Coherence & Cohesion','Lexical Resource','Grammatical Range & Accuracy'],
  bands:{
   5:['Partly addresses the task; position unclear or underdeveloped; ideas limited.','Some organisation but weak progression; linkers inadequate or overused; repetition from poor referencing.','Limited but minimally adequate vocabulary; noticeable spelling errors that may cause difficulty.','Limited range; complex sentences less accurate; frequent errors and faulty punctuation.'],
   6:['Addresses all parts though some more fully; relevant position; conclusions may be unclear or repetitive.','Clear overall progression; cohesive devices effective but mechanical; referencing not always clear.','Adequate vocabulary; attempts less common words with some inaccuracy; errors do not impede.','Mix of simple and complex sentences; errors in grammar and punctuation but rarely reduce communication.'],
   7:['Addresses all parts with a clear position throughout; main ideas extended and supported, may over-generalise.','Logical organisation with clear progression; range of cohesive devices used appropriately with some over/under-use.','Sufficient vocabulary for flexibility and precision; less common items with awareness of style and collocation; occasional errors.','Variety of complex structures; frequent error-free sentences; good control with a few errors.'],
   8:['Sufficiently addresses all parts; well-developed response with relevant, extended, supported ideas.','Information logically sequenced; cohesion well managed; paragraphing sufficient and appropriate.','Wide range used fluently and flexibly; skilful use of uncommon items; rare errors.','Wide range of structures; majority of sentences error-free; very occasional errors.'],
   9:['Fully addresses all parts; fully developed position; ideas fully extended and well supported.','Cohesion attracts no attention; skilful paragraphing.','Wide range used naturally and with sophistication; rare minor slips.','Wide range with full flexibility and accuracy; rare minor slips.']
  }},
 speaking:{
  criteria:['Fluency & Coherence','Lexical Resource','Grammatical Range & Accuracy','Pronunciation'],
  bands:{
   5:['Keeps going but relies on repetition, self-correction and slow speech; overuses connectives.','Sufficient for familiar and unfamiliar topics with limited flexibility; paraphrase attempted.','Basic forms fairly well controlled; complex structures limited and often erroneous.','Shows some effective features but with limited control; mispronunciations cause some difficulty.'],
   6:['Willing to speak at length though coherence may break down through hesitation and repetition; discourse markers not always appropriate.','Wide enough for extended discussion; meaning clear despite inappropriacies; paraphrase generally successful.','Mix of simple and complex sentences with limited flexibility; errors in complex structures rarely impede.','Range of features with mixed control; generally understood though some mispronunciation.'],
   7:['Speaks at length without noticeable effort; some hesitation or repetition; flexible discourse markers.','Flexible vocabulary across topics; some less common and idiomatic items with awareness of style and collocation.','Range of complex structures with some flexibility; frequent error-free sentences; a few basic errors persist.','Shows all positive features of Band 6 and some of Band 8.'],
   8:['Fluent with only occasional repetition or self-correction; hesitation is content-related; coherent, relevant topic development.','Wide, flexible resource for all topics; skilful use of less common and idiomatic items; occasional inaccuracies.','Wide range used flexibly; majority of sentences error-free; occasional non-systematic errors.','Wide range of features; sustained rhythm, flexible stress and intonation; easily understood throughout.'],
   9:['Fluent with only rare hesitation to prepare content; fully coherent and extended.','Total flexibility and precision; sustained accurate idiomatic use.','Full range of structures, precise and accurate throughout.','Full range of features; connected speech flexible throughout; effortlessly understood.']
  }}
};

window.WRITING_TASKS = {
 task2:[
  {id:'W2-1', topic:'Technology', q:'Some people believe that advances in artificial intelligence will create more jobs than they destroy, while others think the opposite. Discuss both views and give your own opinion.', type:'Discuss both views'},
  {id:'W2-2', topic:'Education', q:'In many countries, university students are increasingly choosing to study subjects such as computing and engineering rather than the arts. Why is this happening? Is this a positive or negative development?', type:'Causes + evaluation'},
  {id:'W2-3', topic:'Work', q:'Many companies now allow employees to work from home. Do the advantages of this trend outweigh the disadvantages?', type:'Advantages/disadvantages'},
  {id:'W2-4', topic:'Environment', q:'Individuals can do nothing to improve the environment; only governments and large companies can make a real difference. To what extent do you agree or disagree?', type:'Agree/disagree'},
  {id:'W2-5', topic:'Society', q:'The number of people who shop online is increasing rapidly. What problems does this cause for traditional shops and communities, and what solutions can you suggest?', type:'Problem/solution'},
  {id:'W2-6', topic:'Health', q:'Some people think that governments should tax unhealthy food and drinks. Others believe that people should be free to choose what they eat. Discuss both views and give your opinion.', type:'Discuss both views'},
  {id:'W2-7', topic:'Technology', q:'Children today spend a large amount of time using smartphones and tablets. What are the effects of this on their development, and should parents limit screen time?', type:'Effects + opinion'},
  {id:'W2-8', topic:'Education', q:'Some people believe that practical skills such as coding should be taught in schools from an early age. To what extent do you agree or disagree?', type:'Agree/disagree'},
  {id:'W2-9', topic:'Work', q:'In the future, most jobs will require workers to retrain several times during their careers. What are the causes of this trend, and is it a positive or negative development?', type:'Causes + evaluation'},
  {id:'W2-10', topic:'Globalisation', q:'Many people now use English as the main language of international business. Is this a positive or negative development for other languages and cultures?', type:'Evaluation'},
  {id:'W2-11', topic:'Cities', q:'Traffic congestion is a growing problem in many cities. What are the main causes, and what measures could governments take to solve it?', type:'Problem/solution'},
  {id:'W2-12', topic:'Media', q:'Some people argue that social media companies should be responsible for removing false information from their platforms. Others say this threatens freedom of speech. Discuss both views and give your opinion.', type:'Discuss both views'}
 ],
 task1:[
  {id:'W1-1', kind:'academic', title:'Table: Internet users by region, 2010 and 2024', q:'The table below shows the percentage of the population using the internet in five regions in 2010 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
   table:{head:['Region','2010','2024'],rows:[['North America','72%','93%'],['Europe','67%','91%'],['Middle East','26%','77%'],['Asia-Pacific','23%','66%'],['Africa','10%','43%']]}},
  {id:'W1-2', kind:'academic', title:'Chart: Energy sources for electricity, one country', q:'The chart below shows the share of electricity generated from four sources in one country in 2000, 2012 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
   chart:{labels:['Coal','Gas','Nuclear','Renewables'],series:[{name:'2000',v:[55,25,15,5]},{name:'2012',v:[40,32,14,14]},{name:'2024',v:[12,30,13,45]}]}},
  {id:'W1-3', kind:'academic', title:'Process: how a mobile app is developed and released', q:'The diagram below describes the stages in developing and releasing a mobile application. Summarise the information by selecting and reporting the main features. Write at least 150 words.',
   process:['Idea & market research','Requirements & design','Development (sprints)','Testing & bug fixing','Beta release to users','App store review','Public launch','Monitoring & updates']},
  {id:'W1-4', kind:'general', title:'Letter: requesting training', q:'You would like to attend a professional training course, but it takes place during working hours. Write a letter to your manager. In your letter: explain what the course is and why it is useful; say how you will manage your work while you are away; ask for the company to support you. Write at least 150 words. Begin your letter "Dear Mr Nasser,".'},
  {id:'W1-5', kind:'general', title:'Letter: complaint about a service', q:'You recently bought an internet package, but the service has been unreliable. Write a letter to the company. In your letter: describe the problems you have experienced; explain how this has affected you; say what you want the company to do. Write at least 150 words. Begin your letter "Dear Sir or Madam,".'}
 ],
 phrases:{
  intro:['It is often argued that...','In recent years, ... has become a subject of considerable debate.','While some people maintain that..., others believe that...','This essay will argue that..., before examining...'],
  body:['One of the main reasons for this is that...','A clear example of this can be seen in...','This is largely because...','Admittedly, ...; however, ...','It could be argued that..., but...'],
  task1:['Overall, it is clear that...','The most striking feature is...','X rose steadily from ... to ..., whereas Y remained stable at around...','By 2024, the figure had more than doubled, reaching...','In contrast, ... accounted for only...'],
  conclusion:['In conclusion, although..., I firmly believe that...','To sum up, the evidence suggests that...','Taking all of this into account, ...']
 },
 model:{id:'W2-3', band:8, text:`In recent years, remote working has shifted from a rare privilege to a standard arrangement in many industries. Although critics warn that it weakens teamwork and blurs the boundary between work and private life, I believe its benefits for both employees and organisations clearly outweigh these drawbacks.

The most obvious advantage is the time and money saved on commuting. An employee who previously spent two hours a day travelling can now devote that time to work, family or rest, and many report lower stress as a result. Companies benefit as well: they can recruit from a far wider pool of talent, since location is no longer a barrier, and they can reduce the cost of office space. A software firm in Riyadh, for instance, can now hire a designer in Cairo or Kuala Lumpur without relocating anyone.

Admittedly, remote work has real disadvantages. New employees learn more slowly when they cannot observe experienced colleagues, and creative tasks often benefit from spontaneous face-to-face discussion. Furthermore, some workers find it difficult to switch off when the office is the kitchen table. However, these problems can largely be solved through hybrid arrangements, in which staff meet in person for collaboration and training while completing focused work at home. In other words, the disadvantages are practical challenges to be managed rather than reasons to abandon the model.

In conclusion, while remote working requires careful management to protect training, creativity and wellbeing, its gains in flexibility, productivity and access to talent are substantial. For most organisations, therefore, the advantages decisively outweigh the disadvantages.`,
  notes:['Clear position in the introduction and restated in the conclusion (Task Response).','Each body paragraph has a topic sentence, explanation and a concrete example (Coherence).','Precise, less common vocabulary: "privilege", "blurs the boundary", "spontaneous", "decisively" (Lexical Resource).','Complex structures used accurately: concession clause "Although...", relative clause "in which...", participle phrase "requires careful management to protect..." (Grammatical Range).','299 words: long enough to develop ideas, short enough to check.']}
};

window.SPEAKING_BANK = {
 part1:[
  {topic:'Work', qs:['What do you do for a living?','What do you enjoy most about your job?','Would you like to change anything about your work?','Do you prefer working alone or in a team?']},
  {topic:'Technology', qs:['What technology do you use every day?','Do you think you spend too much time on your phone?','What new technology would you like to learn about?','How has technology changed the way you study or work?']},
  {topic:'Hometown', qs:['Where are you from?','What do you like about your hometown?','Has your hometown changed much in recent years?','Would you recommend it to visitors?']},
  {topic:'Free time', qs:['What do you usually do at the weekend?','Do you prefer spending free time indoors or outdoors?','Is there a hobby you would like to take up?','Did you have the same hobbies when you were a child?']},
  {topic:'Learning', qs:['Are you studying anything at the moment?','Do you prefer learning from books or from videos?','What was your favourite subject at school?','How do you remember new information?']}
 ],
 part2:[
  {card:'Describe a piece of technology you find useful.', bullets:['what it is','how you use it','how you learned to use it','and explain why you find it useful.']},
  {card:'Describe a presentation or talk you gave or attended.', bullets:['what it was about','where it took place','who the audience was','and explain how you felt about it.']},
  {card:'Describe a skill you learned that helped you in your career.', bullets:['what the skill is','how you learned it','how long it took','and explain how it has helped you.']},
  {card:'Describe a time when you solved a difficult problem at work or study.', bullets:['what the problem was','what you did','who helped you','and explain what you learned from the experience.']},
  {card:'Describe a person who has influenced your professional life.', bullets:['who the person is','how you know them','what they do','and explain how they have influenced you.']},
  {card:'Describe a change you would like to make in your life.', bullets:['what the change is','why you want to make it','how you plan to do it','and explain how it would improve your life.']}
 ],
 part3:[
  {topic:'Technology and work', qs:['How has technology changed the way people work in your country?','Do you think automation will reduce the number of jobs available?','Should companies be responsible for retraining workers whose jobs are replaced by machines?','What skills will be most valuable in twenty years\' time?']},
  {topic:'Education', qs:['Is it better to learn skills at university or on the job?','Why do some people prefer online learning to classroom learning?','Should governments fund university education for everyone?','How important is it to learn a foreign language today?']},
  {topic:'Communication', qs:['Why do some people find public speaking so difficult?','Has social media improved or damaged the way people communicate?','What makes a presentation effective?','Do you think face-to-face meetings will disappear?']}
 ]
};

/* Vocabulary banks for the type-to-learn trainer. Each: word, ar, icon (emoji), sentence (with word), sentenceAr, pos */
window.VOCAB_BANKS = [
 {id:'tech', name:'Technology & IT', nameAr:'التقنية', level:'B1-B2', words:[
  {w:'database',ar:'قاعدة بيانات',icon:'🗄️',s:'The database stores every customer record.',sa:'قاعدة البيانات تخزن كل سجلات العملاء.'},
  {w:'deploy',ar:'ينشر / يطلق (برنامجاً)',icon:'🚀',s:'We deploy new code every Friday.',sa:'ننشر كوداً جديداً كل جمعة.'},
  {w:'encrypt',ar:'يشفّر',icon:'🔐',s:'Always encrypt sensitive data.',sa:'شفّر البيانات الحساسة دائماً.'},
  {w:'bandwidth',ar:'عرض النطاق',icon:'📶',s:'Video calls need a lot of bandwidth.',sa:'مكالمات الفيديو تحتاج عرض نطاق كبير.'},
  {w:'vulnerability',ar:'ثغرة أمنية',icon:'🛡️',s:'The update fixes a critical vulnerability.',sa:'التحديث يصلح ثغرة حرجة.'},
  {w:'scalable',ar:'قابل للتوسع',icon:'📈',s:'The system must be scalable to millions of users.',sa:'يجب أن يكون النظام قابلاً للتوسع لملايين المستخدمين.'},
  {w:'latency',ar:'زمن الاستجابة',icon:'⏱️',s:'High latency makes the app feel slow.',sa:'زمن الاستجابة العالي يجعل التطبيق يبدو بطيئاً.'},
  {w:'authentication',ar:'المصادقة',icon:'🪪',s:'Two-factor authentication protects your account.',sa:'المصادقة الثنائية تحمي حسابك.'},
  {w:'outage',ar:'انقطاع الخدمة',icon:'⚡',s:'The outage lasted three hours.',sa:'استمر انقطاع الخدمة ثلاث ساعات.'},
  {w:'integrate',ar:'يدمج',icon:'🔗',s:'We need to integrate the payment system.',sa:'نحتاج دمج نظام الدفع.'},
  {w:'troubleshoot',ar:'يستكشف الأعطال ويصلحها',icon:'🔧',s:'I spent the morning troubleshooting the network.',sa:'قضيت الصباح في استكشاف أعطال الشبكة.'},
  {w:'redundancy',ar:'التكرار الاحتياطي',icon:'🧩',s:'Redundancy keeps the service running if one server fails.',sa:'التكرار الاحتياطي يبقي الخدمة تعمل إذا تعطل خادم.'}
 ]},
 {id:'academic', name:'Academic Word List (core)', nameAr:'المفردات الأكاديمية', level:'B2-C1', words:[
  {w:'analyse',ar:'يحلل',icon:'🔍',s:'We analyse the data every quarter.',sa:'نحلل البيانات كل ربع سنة.'},
  {w:'significant',ar:'مهم / ملحوظ',icon:'❗',s:'There was a significant increase in sales.',sa:'كان هناك ارتفاع ملحوظ في المبيعات.'},
  {w:'approach',ar:'منهج / طريقة',icon:'🧭',s:'The new approach reduced costs.',sa:'المنهج الجديد قلل التكاليف.'},
  {w:'establish',ar:'يؤسس / يثبت',icon:'🏛️',s:'The study established a clear link.',sa:'أثبتت الدراسة علاقة واضحة.'},
  {w:'consequently',ar:'نتيجة لذلك',icon:'➡️',s:'Prices rose; consequently, demand fell.',sa:'ارتفعت الأسعار؛ ونتيجة لذلك انخفض الطلب.'},
  {w:'evidence',ar:'دليل',icon:'📋',s:'There is strong evidence for this theory.',sa:'هناك دليل قوي على هذه النظرية.'},
  {w:'factor',ar:'عامل',icon:'⚖️',s:'Cost is a major factor in the decision.',sa:'التكلفة عامل رئيسي في القرار.'},
  {w:'implement',ar:'ينفّذ',icon:'🛠️',s:'The government will implement the policy next year.',sa:'ستنفذ الحكومة السياسة العام القادم.'},
  {w:'perceive',ar:'يدرك / يرى',icon:'👁️',s:'Many people perceive risk differently.',sa:'كثير من الناس يدركون الخطر بشكل مختلف.'},
  {w:'substantial',ar:'كبير / جوهري',icon:'🏗️',s:'The company made a substantial investment.',sa:'قامت الشركة باستثمار كبير.'},
  {w:'hypothesis',ar:'فرضية',icon:'🧪',s:'The results support our hypothesis.',sa:'تدعم النتائج فرضيتنا.'},
  {w:'contradict',ar:'يناقض',icon:'↔️',s:'The new findings contradict earlier reports.',sa:'النتائج الجديدة تناقض التقارير السابقة.'}
 ]},
 {id:'ielts-topics', name:'IELTS essay topics', nameAr:'مواضيع مقالات الآيلتس', level:'B2', words:[
  {w:'sustainable',ar:'مستدام',icon:'🌱',s:'Cities need sustainable transport.',sa:'المدن تحتاج نقلاً مستداماً.'},
  {w:'curriculum',ar:'المنهج الدراسي',icon:'📚',s:'Coding should be part of the curriculum.',sa:'يجب أن تكون البرمجة جزءاً من المنهج.'},
  {w:'obesity',ar:'السمنة',icon:'🍔',s:'Obesity is rising among children.',sa:'السمنة ترتفع بين الأطفال.'},
  {w:'infrastructure',ar:'البنية التحتية',icon:'🌉',s:'Good infrastructure attracts investment.',sa:'البنية التحتية الجيدة تجذب الاستثمار.'},
  {w:'inequality',ar:'عدم المساواة',icon:'📊',s:'Income inequality has widened.',sa:'اتسعت فجوة عدم المساواة في الدخل.'},
  {w:'legislation',ar:'التشريع',icon:'⚖️',s:'New legislation protects online privacy.',sa:'التشريع الجديد يحمي الخصوصية على الإنترنت.'},
  {w:'automation',ar:'الأتمتة',icon:'🤖',s:'Automation threatens routine jobs.',sa:'الأتمتة تهدد الوظائف الروتينية.'},
  {w:'urbanisation',ar:'التحضّر',icon:'🏙️',s:'Rapid urbanisation causes congestion.',sa:'التحضر السريع يسبب الازدحام.'},
  {w:'consumption',ar:'الاستهلاك',icon:'🛒',s:'Energy consumption must fall.',sa:'يجب أن ينخفض استهلاك الطاقة.'},
  {w:'wellbeing',ar:'الرفاهية / الصحة النفسية',icon:'🧘',s:'Exercise improves mental wellbeing.',sa:'التمارين تحسن الصحة النفسية.'},
  {w:'incentive',ar:'حافز',icon:'🎯',s:'Tax incentives encourage green energy.',sa:'الحوافز الضريبية تشجع الطاقة الخضراء.'},
  {w:'outweigh',ar:'يفوق / يرجح',icon:'⚖️',s:'The benefits outweigh the costs.',sa:'الفوائد تفوق التكاليف.'}
 ]},
 {id:'presentations', name:'Presentations & meetings', nameAr:'العروض والاجتماعات', level:'B1-B2', words:[
  {w:'agenda',ar:'جدول الأعمال',icon:'📝',s:'The first item on the agenda is the budget.',sa:'البند الأول في جدول الأعمال هو الميزانية.'},
  {w:'outline',ar:'يلخّص / مخطط عام',icon:'🗺️',s:'Let me outline the main points.',sa:'دعوني ألخص النقاط الرئيسية.'},
  {w:'highlight',ar:'يبرز',icon:'🖍️',s:'I want to highlight three results.',sa:'أريد إبراز ثلاث نتائج.'},
  {w:'stakeholder',ar:'صاحب مصلحة',icon:'🤝',s:'Every stakeholder approved the plan.',sa:'وافق كل أصحاب المصلحة على الخطة.'},
  {w:'milestone',ar:'مرحلة رئيسية / إنجاز',icon:'🏁',s:'We reached the first milestone in May.',sa:'وصلنا للمرحلة الرئيسية الأولى في مايو.'},
  {w:'feasible',ar:'ممكن التنفيذ',icon:'✅',s:'Is the deadline feasible?',sa:'هل الموعد النهائي ممكن التنفيذ؟'},
  {w:'recap',ar:'يلخص باختصار',icon:'🔁',s:'To recap, we have three options.',sa:'للتلخيص، لدينا ثلاثة خيارات.'},
  {w:'objection',ar:'اعتراض',icon:'✋',s:'Does anyone have an objection?',sa:'هل لدى أحد اعتراض؟'},
  {w:'leverage',ar:'يستفيد من / يستغل',icon:'🪜',s:'We can leverage our existing data.',sa:'يمكننا الاستفادة من بياناتنا الحالية.'},
  {w:'takeaway',ar:'الخلاصة الأساسية',icon:'🎁',s:'The key takeaway is to test early.',sa:'الخلاصة الأساسية: اختبر مبكراً.'},
  {w:'elaborate',ar:'يفصّل',icon:'🔎',s:'Could you elaborate on that point?',sa:'هل يمكنك التفصيل في تلك النقطة؟'},
  {w:'consensus',ar:'إجماع',icon:'🧑‍🤝‍🧑',s:'We reached a consensus quickly.',sa:'وصلنا إلى إجماع بسرعة.'}
 ]},
 {id:'everyday', name:'Everyday essentials', nameAr:'الكلمات اليومية الأساسية', level:'A2', words:[
  {w:'schedule',ar:'جدول / موعد',icon:'📅',s:'My schedule is full on Monday.',sa:'جدولي ممتلئ يوم الاثنين.'},
  {w:'appointment',ar:'موعد',icon:'🕘',s:'I have an appointment at the bank.',sa:'لدي موعد في البنك.'},
  {w:'neighbourhood',ar:'الحي',icon:'🏘️',s:'Our neighbourhood is very quiet.',sa:'حيّنا هادئ جداً.'},
  {w:'receipt',ar:'إيصال',icon:'🧾',s:'Keep the receipt for the refund.',sa:'احتفظ بالإيصال لاسترداد المبلغ.'},
  {w:'available',ar:'متاح',icon:'🟢',s:'Are you available tomorrow?',sa:'هل أنت متاح غداً؟'},
  {w:'convenient',ar:'مناسب / مريح',icon:'👍',s:'Online banking is very convenient.',sa:'الخدمات المصرفية الإلكترونية مريحة جداً.'},
  {w:'borrow',ar:'يستعير',icon:'📖',s:'Can I borrow your charger?',sa:'هل يمكنني استعارة شاحنك؟'},
  {w:'delay',ar:'تأخير',icon:'⏳',s:'The flight has a two-hour delay.',sa:'الرحلة متأخرة ساعتين.'},
  {w:'recommend',ar:'يوصي / ينصح',icon:'⭐',s:'I recommend the fish here.',sa:'أنصح بالسمك هنا.'},
  {w:'exhausted',ar:'مرهق جداً',icon:'😩',s:'I was exhausted after the trip.',sa:'كنت مرهقاً جداً بعد الرحلة.'}
 ]}
];

/* Professional English for tech presentations */
window.PRO_CONTENT = {
 structure:[
  {step:'Opening (30 s)',ar:'الافتتاح',phrases:['Good morning, everyone. Thank you for joining.','My name is ..., and I lead the platform team.','Today I\'m going to walk you through our migration plan.','By the end of this session, you\'ll know exactly what changes on Monday and what it means for you.']},
  {step:'Signposting the structure',ar:'الإشارة إلى الهيكل',phrases:['I\'ve divided the talk into three parts.','First, I\'ll cover the background. Then, I\'ll move on to the architecture. Finally, we\'ll look at the timeline.','Feel free to interrupt with questions, or we can save them for the end.']},
  {step:'Presenting data and demos',ar:'عرض البيانات والديمو',phrases:['As you can see from this chart, response times dropped by 40 per cent.','Let me draw your attention to the spike in March.','I\'ll switch to a live demo now. Bear with me while it loads.','In other words, we\'re doing twice the work with the same servers.']},
  {step:'Transitions',ar:'الانتقالات',phrases:['That brings me to my next point.','Moving on to the security side...','Let\'s step back for a moment and look at the bigger picture.','Having covered the costs, let\'s turn to the risks.']},
  {step:'Handling questions',ar:'التعامل مع الأسئلة',phrases:['That\'s a great question. Let me make sure I understand: you\'re asking whether...','I don\'t have the exact figure to hand, but I\'ll follow up by email today.','Could I come back to that at the end? It ties in with the last section.','If I\'ve understood correctly, your concern is about downtime. Is that right?']},
  {step:'Closing',ar:'الختام',phrases:['To sum up: three changes, one deadline, zero downtime.','The key takeaway is that we need sign-off by Friday.','Thank you for your time. I\'ll leave my contact details on the screen.']}
 ],
 pronunciation:[
  {w:'cache',ipa:'/kæʃ/',tip:'Sounds like "cash", never "catch-ay".',ar:'تُنطق "كاش"'},
  {w:'queue',ipa:'/kjuː/',tip:'Just the letter Q.',ar:'تُنطق "كيو" فقط'},
  {w:'suite',ipa:'/swiːt/',tip:'Same as "sweet" (test suite).',ar:'تُنطق "سويت" مثل sweet'},
  {w:'hierarchy',ipa:'/ˈhaɪərɑːki/',tip:'HI-er-ar-ky, stress on the first syllable.',ar:'النبر على المقطع الأول'},
  {w:'paradigm',ipa:'/ˈpærədaɪm/',tip:'The g is silent: PA-ra-dime.',ar:'حرف g صامت'},
  {w:'archive',ipa:'/ˈɑːkaɪv/',tip:'AR-kive, with a hard k.',ar:'ch تُنطق k'},
  {w:'variable',ipa:'/ˈveəriəbl/',tip:'VAIR-ee-uh-bul, stress on the first syllable.',ar:'النبر على المقطع الأول'},
  {w:'deprecated',ipa:'/ˈdeprəkeɪtɪd/',tip:'DEP-ruh-kay-tid.',ar:'ثلاثة مقاطع قبل ted'},
  {w:'integer',ipa:'/ˈɪntɪdʒə/',tip:'Soft g like "j": IN-ti-jer.',ar:'g تُنطق j'},
  {w:'develop',ipa:'/dɪˈveləp/',tip:'Stress on VEL, and no "e" at the end: not "develope".',ar:'النبر على المقطع الثاني'},
  {w:'infrastructure',ipa:'/ˈɪnfrəstrʌktʃə/',tip:'IN-fra-struk-cher, stress on the first syllable.',ar:'النبر على المقطع الأول'},
  {w:'comfortable',ipa:'/ˈkʌmftəbl/',tip:'Three syllables: KUMF-tuh-bul.',ar:'ثلاثة مقاطع فقط'},
  {w:'vehicle',ipa:'/ˈviːɪkl/',tip:'VEE-i-kul, the h is silent.',ar:'حرف h صامت'},
  {w:'genre',ipa:'/ˈʒɒnrə/',tip:'ZHON-ruh, French-style soft j.',ar:'ج ناعمة مثل الفرنسية'}
 ],
 emails:[
  {kind:'Request',subject:'Request for access to the staging environment',body:'Hi Sarah,\n\nI hope you\'re well. I\'m working on the checkout redesign and need read access to the staging database to reproduce the issue reported in ticket #4821.\n\nCould you grant access to my account by Thursday, if possible? Happy to join a quick call if you need more context.\n\nThanks in advance,\nAhmed'},
  {kind:'Status update',subject:'Weekly update: API migration (week 3 of 6)',body:'Hi team,\n\nQuick update on the migration:\n\n• Done: authentication and user services are now on the new gateway.\n• In progress: payment service (expected Wednesday).\n• Blocked: we are waiting for the security review of the logging change.\n\nNo change to the overall timeline. Let me know if you have questions.\n\nBest regards,\nAhmed'},
  {kind:'Disagreeing politely',subject:'Re: Proposal to skip load testing',body:'Hi Omar,\n\nThanks for sharing the proposal. I understand the pressure on the timeline, but I have some concerns about skipping load testing before the launch.\n\nLast year\'s outage was caused by exactly this kind of untested traffic spike. Could we instead run a reduced test on Tuesday night? It would take about four hours and give us a safety margin.\n\nHappy to discuss on a call if that helps.\n\nBest,\nAhmed'}
 ],
 rehearsal:[
  'Explain to a non-technical manager why your team needs two more weeks to finish a project.',
  'Present the results of a performance improvement using one chart (invent realistic numbers).',
  'Give a 2-minute overview of a system you built: the problem, the architecture, and the result.',
  'Pitch a new internal tool to the leadership team in 90 seconds.',
  'Walk a new colleague through how a deployment works at your company.',
  'Handle this question from the audience: "Why should we trust your numbers?"'
 ]
};

window.RESOURCES = [
 {cat:'Official IELTS',catAr:'المصادر الرسمية',items:[
  {n:'IELTS.org – free sample test questions',u:'https://ielts.org/take-a-test/preparation-resources/sample-test-questions',d:'Official samples for all four sections, Academic and General Training.',da:'نماذج رسمية لجميع الأقسام الأربعة.'},
  {n:'IELTS.org – how IELTS is scored',u:'https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail',d:'Band descriptors and the raw-score conversion tables.',da:'معايير الدرجات وجداول تحويل الدرجات الخام.'},
  {n:'British Council – free practice tests',u:'https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-practice-tests',d:'Full-length practice tests with answers.',da:'اختبارات تدريبية كاملة مع الإجابات.'},
  {n:'IDP – IELTS preparation materials',u:'https://ielts.idp.com/prepare/ielts-practice-materials',d:'Practice tests, webinars and the free official mock test.',da:'اختبارات تدريبية وندوات واختبار تجريبي رسمي مجاني.'},
  {n:'Cambridge English – IELTS test format',u:'https://www.cambridgeenglish.org/exams-and-tests/ielts/test-format/',d:'The authoritative description of every question type.',da:'الوصف الرسمي لكل أنواع الأسئلة.'}
 ]},
 {cat:'Writing',catAr:'الكتابة',items:[
  {n:'Write & Improve (Cambridge)',u:'https://writeandimprove.com/',d:'Free automated feedback on essays with a CEFR level estimate. Excellent for daily practice.',da:'تصحيح آلي مجاني للمقالات مع تقدير المستوى. ممتاز للتدريب اليومي.'},
  {n:'IELTS Liz – Writing',u:'https://ieltsliz.com/ielts-writing-task-2/',d:'Clear lessons, model answers and the most common mistakes.',da:'دروس واضحة ونماذج إجابات وأشهر الأخطاء.'},
  {n:'Purdue OWL',u:'https://owl.purdue.edu/owl/purdue_owl.html',d:'Academic writing, punctuation and grammar reference.',da:'مرجع للكتابة الأكاديمية وعلامات الترقيم.'}
 ]},
 {cat:'Grammar & vocabulary',catAr:'القواعد والمفردات',items:[
  {n:'British Council LearnEnglish – Grammar',u:'https://learnenglish.britishcouncil.org/grammar',d:'Grammar by CEFR level (A1–C1) with exercises.',da:'قواعد مرتبة حسب المستوى مع تمارين.'},
  {n:'Perfect English Grammar',u:'https://www.perfect-english-grammar.com/',d:'Hundreds of free exercises on tenses, conditionals and more.',da:'مئات التمارين المجانية على الأزمنة والشرط وغيرها.'},
  {n:'Oxford 3000 & 5000 word lists',u:'https://www.oxfordlearnersdictionaries.com/wordlists/',d:'The most important words to know, tagged by CEFR level.',da:'أهم الكلمات مرتبة حسب المستوى.'},
  {n:'Academic Word List (Coxhead)',u:'https://www.wgtn.ac.nz/lals/resources/academicwordlist',d:'The 570 word families that dominate academic texts.',da:'570 عائلة كلمات تهيمن على النصوص الأكاديمية.'},
  {n:'Cambridge Dictionary',u:'https://dictionary.cambridge.org/',d:'Definitions with CEFR levels, collocations and British/American audio.',da:'تعريفات مع المستوى والتلازم اللفظي والنطق.'}
 ]},
 {cat:'Listening & speaking',catAr:'الاستماع والتحدث',items:[
  {n:'BBC Learning English',u:'https://www.bbc.co.uk/learningenglish',d:'6 Minute English, pronunciation and news-based lessons.',da:'دروس قصيرة ونطق ودروس مبنية على الأخبار.'},
  {n:'YouGlish',u:'https://youglish.com/',d:'Hear any word pronounced in thousands of real YouTube clips.',da:'اسمع أي كلمة في آلاف المقاطع الحقيقية.'},
  {n:'TED Talks',u:'https://www.ted.com/talks',d:'Authentic lectures with transcripts; ideal Part 4 listening practice and presentation models.',da:'محاضرات حقيقية مع نصوص؛ مثالية للجزء الرابع ونماذج للعروض.'},
  {n:'IELTS Liz – Speaking',u:'https://ieltsliz.com/ielts-speaking-free-lessons-essential-tips/',d:'Part 1/2/3 topics, model answers and tips.',da:'مواضيع الأجزاء الثلاثة ونماذج إجابات.'}
 ]},
 {cat:'Professional & presentations',catAr:'الإنجليزية المهنية والعروض',items:[
  {n:'Business English Pod – Presentations',u:'https://www.businessenglishpod.com/category/presentations/',d:'Podcast lessons on presenting, meetings and negotiating.',da:'بودكاست عن العروض والاجتماعات والتفاوض.'},
  {n:'British Council – business presentations',u:'https://englishonline.britishcouncil.org/blog/articles/how-to-ace-your-business-presentation-in-english',d:'Language and structure for presenting in English.',da:'اللغة والهيكل للعرض بالإنجليزية.'},
  {n:'IEEE – presentation skills for non-native speakers',u:'https://innovationatwork.ieee.org/three-simple-ways-non-native-english-speakers-can-improve-their-presentation-skills/',d:'Engineering-focused advice on presenting.',da:'نصائح موجهة للمهندسين.'},
  {n:'Google developer documentation style guide',u:'https://developers.google.com/style',d:'How to write clear technical English.',da:'كيف تكتب إنجليزية تقنية واضحة.'}
 ]}
];
