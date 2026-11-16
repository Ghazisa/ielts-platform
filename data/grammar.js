/* Grammar & vocabulary diagnostic item bank, tagged by CEFR level and topic.
   Each item: { id, lvl, topic, q, opts, a (index), why, whyAr } */
window.GRAMMAR_ITEMS = [
  // ---------- A1 ----------
  {id:'g1', lvl:'A1', topic:'be', q:'She ___ a software engineer.', opts:['is','are','am','be'], a:0, why:'"She" takes "is". Arabic has no verb "to be" in the present, so it is often dropped by Arabic speakers.', whyAr:'الفاعل She يأخذ is. في العربية لا نستخدم فعل الكينونة في المضارع، لذلك كثير من العرب يحذفونه بالخطأ: "She engineer" ✗'},
  {id:'g2', lvl:'A1', topic:'articles', q:'I have ___ new laptop.', opts:['a','an','the','—'], a:0, why:'"a" before a consonant sound: a new laptop.', whyAr:'نستخدم a قبل الصوت الساكن (new). الكلمة الأولى بعد الأداة هي التي تحدد a أو an.'},
  {id:'g3', lvl:'A1', topic:'present-simple', q:'He ___ to work by bus every day.', opts:['go','goes','going','is go'], a:1, why:'Third person singular adds -s in the present simple.', whyAr:'مع He/She/It نضيف s للفعل في المضارع البسيط: goes.'},
  {id:'g4', lvl:'A1', topic:'plurals', q:'There are three ___ in the office.', opts:['womans','womens','women','woman'], a:2, why:'"Woman" has the irregular plural "women".', whyAr:'جمع woman شاذ: women (بدون s).'},
  {id:'g5', lvl:'A1', topic:'prepositions', q:'The meeting is ___ Monday ___ 9 a.m.', opts:['in / at','on / at','at / in','on / in'], a:1, why:'"on" for days, "at" for clock times.', whyAr:'on مع الأيام، at مع الساعات، in مع الشهور والسنوات.'},
  {id:'g6', lvl:'A1', topic:'questions', q:'___ you like coffee?', opts:['Are','Do','Does','Is'], a:1, why:'Present simple questions with "you" use the auxiliary "do".', whyAr:'الأسئلة في المضارع البسيط تحتاج فعل مساعد: Do you like...؟ وليس Are you like.'},
  {id:'g7', lvl:'A1', topic:'possessives', q:'This is ___ phone. It belongs to Sara.', opts:['she','hers','her','her\'s'], a:2, why:'"her" is the possessive adjective before a noun.', whyAr:'her صفة ملكية قبل الاسم: her phone. أما hers فتأتي بدون اسم بعدها.'},
  {id:'g8', lvl:'A1', topic:'there-is', q:'___ a printer on the second floor?', opts:['Is there','There is','Are there','Is it'], a:0, why:'"Is there...?" asks about existence of a singular thing.', whyAr:'للسؤال عن وجود شيء مفرد: Is there...؟'},
  {id:'g9', lvl:'A1', topic:'vocab', q:'The opposite of "cheap" is ___.', opts:['poor','expensive','rich','big'], a:1, why:'cheap ↔ expensive (price).', whyAr:'cheap رخيص ↔ expensive غالي.'},
  {id:'g10', lvl:'A1', topic:'past-simple', q:'Yesterday I ___ a new project.', opts:['start','started','starting','starts'], a:1, why:'"Yesterday" signals the past simple: started.', whyAr:'كلمة Yesterday تدل على الماضي البسيط: started.'},

  // ---------- A2 ----------
  {id:'g11', lvl:'A2', topic:'past-simple', q:'We ___ the client last week, but he didn\'t reply.', opts:['emailed','have emailed','email','were emailing'], a:0, why:'A finished time ("last week") takes the past simple, not the present perfect.', whyAr:'مع زمن منتهٍ محدد (last week) نستخدم الماضي البسيط، وليس المضارع التام.'},
  {id:'g12', lvl:'A2', topic:'comparatives', q:'This version is ___ than the old one.', opts:['more fast','faster','fastest','most fast'], a:1, why:'Short adjectives form the comparative with -er + than.', whyAr:'الصفات القصيرة تأخذ er للمقارنة: faster than.'},
  {id:'g13', lvl:'A2', topic:'countables', q:'How ___ time do we have before the deadline?', opts:['many','much','few','a lot'], a:1, why:'"Time" (duration) is uncountable, so "how much".', whyAr:'time (بمعنى الوقت) اسم غير معدود، فنستخدم much وليس many.'},
  {id:'g14', lvl:'A2', topic:'future', q:'Look at those clouds! It ___ rain.', opts:['will','is going to','goes to','would'], a:1, why:'"Going to" is used for predictions based on present evidence.', whyAr:'going to للتنبؤ بناءً على دليل حاضر (الغيوم). will للقرار اللحظي أو التنبؤ العام.'},
  {id:'g15', lvl:'A2', topic:'modals', q:'You ___ wear a badge in the data centre. It\'s a rule.', opts:['can','must','might','would'], a:1, why:'"Must" expresses obligation/rules.', whyAr:'must للإلزام والقواعد.'},
  {id:'g16', lvl:'A2', topic:'present-continuous', q:'Please be quiet, I ___ to the customer.', opts:['talk','am talking','talking','talks'], a:1, why:'An action happening now takes the present continuous.', whyAr:'الحدث الجاري الآن يأخذ المضارع المستمر: am talking.'},
  {id:'g17', lvl:'A2', topic:'articles', q:'My brother is ___ best programmer in our company.', opts:['a','an','the','—'], a:2, why:'Superlatives take "the".', whyAr:'صيغة التفضيل (best, biggest) تأخذ the دائماً.'},
  {id:'g18', lvl:'A2', topic:'prepositions', q:'I\'m interested ___ cloud computing.', opts:['on','at','in','about'], a:2, why:'interested in (fixed preposition).', whyAr:'interested in تعبير ثابت. حروف الجر بعد الصفات تُحفظ كوحدة واحدة.'},
  {id:'g19', lvl:'A2', topic:'vocab', q:'A person who uses a product or service is a ___.', opts:['customer','employer','manager','colleague'], a:0, why:'customer = someone who buys or uses a service.', whyAr:'customer عميل/زبون.'},
  {id:'g20', lvl:'A2', topic:'adverbs', q:'She speaks English very ___.', opts:['good','well','best','better'], a:1, why:'"Well" is the adverb; "good" is an adjective.', whyAr:'well ظرف يصف الفعل (speaks)، أما good صفة تصف الاسم.'},

  // ---------- B1 ----------
  {id:'g21', lvl:'B1', topic:'present-perfect', q:'I ___ in Riyadh since 2019.', opts:['live','lived','have lived','am living'], a:2, why:'"Since + point in time" with an unfinished period takes the present perfect.', whyAr:'since + نقطة زمنية والحالة مستمرة حتى الآن = المضارع التام: have lived.'},
  {id:'g22', lvl:'B1', topic:'conditionals', q:'If the server ___ again, we\'ll lose the data.', opts:['will crash','crashes','crashed','would crash'], a:1, why:'First conditional: if + present simple, will + verb.', whyAr:'الشرط الأول (حقيقي): if + مضارع بسيط ، will + فعل. لا نضع will بعد if.'},
  {id:'g23', lvl:'B1', topic:'passive', q:'The report ___ by the finance team every month.', opts:['prepares','is prepared','is preparing','prepared'], a:1, why:'Passive present simple: is/are + past participle.', whyAr:'المبني للمجهول: is + التصريف الثالث. التقرير يُعَدّ وليس يُعِدّ.'},
  {id:'g24', lvl:'B1', topic:'relative-clauses', q:'The engineer ___ fixed the bug got a bonus.', opts:['which','who','whom','whose'], a:1, why:'"Who" for people as the subject of the relative clause.', whyAr:'who للأشخاص، which للأشياء، whose للملكية.'},
  {id:'g25', lvl:'B1', topic:'gerunds', q:'I enjoy ___ with international teams.', opts:['to work','work','working','worked'], a:2, why:'"Enjoy" is followed by a gerund (-ing).', whyAr:'بعض الأفعال تأخذ ing بعدها (enjoy, avoid, suggest, finish). enjoy working.'},
  {id:'g26', lvl:'B1', topic:'modals', q:'You ___ have sent that email; the manager was angry.', opts:['mustn\'t','shouldn\'t','couldn\'t','needn\'t'], a:1, why:'"Shouldn\'t have + past participle" criticises a past action.', whyAr:'shouldn\'t have + تصريف ثالث: ما كان ينبغي أن تفعل (نقد لفعل ماضٍ).'},
  {id:'g27', lvl:'B1', topic:'reported-speech', q:'She said she ___ the migration the next day.', opts:['will finish','would finish','finishes','finish'], a:1, why:'In reported speech, "will" shifts to "would".', whyAr:'في الكلام المنقول، will تتحول إلى would.'},
  {id:'g28', lvl:'B1', topic:'past-continuous', q:'I ___ the code when the power went off.', opts:['reviewed','was reviewing','have reviewed','review'], a:1, why:'A longer action interrupted by a shorter one: past continuous + past simple.', whyAr:'حدث طويل (was reviewing) قُطع بحدث قصير (went off).'},
  {id:'g29', lvl:'B1', topic:'vocab', q:'The company decided to ___ the launch until next quarter.', opts:['postpone','cancel','increase','achieve'], a:0, why:'postpone = delay to a later time.', whyAr:'postpone يؤجل. cancel يلغي.'},
  {id:'g30', lvl:'B1', topic:'quantifiers', q:'There is ___ information about the new policy on the intranet.', opts:['a few','few','little','many'], a:2, why:'"Information" is uncountable; "little" = not much.', whyAr:'information غير معدود، فنستخدم little (قليل). few للمعدود.'},

  // ---------- B2 ----------
  {id:'g31', lvl:'B2', topic:'conditionals', q:'If we ___ the backup earlier, we wouldn\'t have lost the files.', opts:['ran','had run','would run','run'], a:1, why:'Third conditional: if + past perfect, would have + past participle.', whyAr:'الشرط الثالث (ماضٍ غير حقيقي): if + past perfect ، would have + تصريف ثالث.'},
  {id:'g32', lvl:'B2', topic:'present-perfect', q:'By the time the audit starts, we ___ all the documentation.', opts:['finish','will have finished','have finished','finished'], a:1, why:'Future perfect for an action completed before a future point.', whyAr:'المستقبل التام: حدث سيكتمل قبل نقطة في المستقبل.'},
  {id:'g33', lvl:'B2', topic:'passive', q:'The new feature ___ tested when the client called.', opts:['was being','has been','is being','was'], a:0, why:'Past continuous passive: was being + past participle.', whyAr:'ماضٍ مستمر مبني للمجهول: was being tested (كان يُختبر عندما اتصل).'},
  {id:'g34', lvl:'B2', topic:'wish', q:'I wish I ___ more time to prepare for the presentation.', opts:['have','had','would have','will have'], a:1, why:'"Wish + past simple" for a present regret.', whyAr:'wish + ماضٍ بسيط للتعبير عن تمنٍ في الحاضر (ليتني أملك).'},
  {id:'g35', lvl:'B2', topic:'linking', q:'___ the budget cuts, the team delivered the project on time.', opts:['Although','Despite','However','Even though'], a:1, why:'"Despite" is followed by a noun phrase; "although" needs a clause.', whyAr:'Despite + اسم/عبارة اسمية. Although + جملة كاملة (فاعل وفعل).'},
  {id:'g36', lvl:'B2', topic:'articles', q:'___ unemployment is rising in many countries.', opts:['The','An','A','—'], a:3, why:'Abstract/uncountable nouns used generally take no article.', whyAr:'الأسماء المجردة العامة (unemployment, education) لا تأخذ أداة. هذا خطأ شائع جداً عند العرب لأن العربية تستخدم "ال" للتعميم.'},
  {id:'g37', lvl:'B2', topic:'inversion', q:'Not only ___ the deadline, but they also exceeded the targets.', opts:['they met','did they meet','they did meet','met they'], a:1, why:'After "Not only" at the start, subject and auxiliary invert.', whyAr:'بعد Not only في بداية الجملة يحدث قلب: did they meet.'},
  {id:'g38', lvl:'B2', topic:'vocab', q:'The data ___ that remote workers are slightly more productive.', opts:['suggests','insists','tells','says to'], a:0, why:'"Suggest" is the natural academic verb for what evidence indicates.', whyAr:'suggests/indicates الفعل الأكاديمي الطبيعي لما تشير إليه البيانات.'},
  {id:'g39', lvl:'B2', topic:'gerunds', q:'He admitted ___ the production database by mistake.', opts:['to delete','deleting','delete','that deleting'], a:1, why:'"Admit" takes a gerund.', whyAr:'admit + ing (admitted deleting).'},
  {id:'g40', lvl:'B2', topic:'modals', q:'The system ___ down last night; nobody can log in.', opts:['must have gone','must go','should go','can have gone'], a:0, why:'"Must have + past participle" = a logical deduction about the past.', whyAr:'must have + تصريف ثالث: استنتاج منطقي عن الماضي (لا بد أنه تعطل).'},

  // ---------- C1 ----------
  {id:'g41', lvl:'C1', topic:'inversion', q:'___ had the update been installed than the system crashed.', opts:['No sooner','Hardly','Scarcely','Barely'], a:0, why:'"No sooner ... than" is the fixed pair; hardly/scarcely pair with "when".', whyAr:'No sooner يتبعها than. أما Hardly/Scarcely فتتبعها when.'},
  {id:'g42', lvl:'C1', topic:'subjunctive', q:'The board recommended that the CTO ___ the proposal.', opts:['reviews','reviewed','review','would review'], a:2, why:'Subjunctive after recommend/suggest/insist: base form.', whyAr:'بعد recommend/suggest/insist that نستخدم المصدر بدون s (review).'},
  {id:'g43', lvl:'C1', topic:'participles', q:'___ by the results, the researchers repeated the experiment.', opts:['Surprising','Surprised','Having surprised','To surprise'], a:1, why:'A past participle clause describes how the subject felt (passive meaning).', whyAr:'عبارة اسم المفعول (Surprised) تصف شعور الفاعل. Surprising تصف الشيء المسبب للدهشة.'},
  {id:'g44', lvl:'C1', topic:'linking', q:'The policy was unpopular; ___, it reduced costs significantly.', opts:['nevertheless','therefore','moreover','whereas'], a:0, why:'A contrast between two independent clauses: nevertheless.', whyAr:'nevertheless = ومع ذلك (تناقض). therefore = لذلك (نتيجة).'},
  {id:'g45', lvl:'C1', topic:'cleft', q:'___ worries me most is the lack of documentation.', opts:['That','What','Which','It'], a:1, why:'A "what-cleft" sentence emphasises the subject: What worries me most is...', whyAr:'جملة التركيز (cleft): What + جملة + is... للتأكيد.'},
  {id:'g46', lvl:'C1', topic:'vocab', q:'The committee reached a ___ after hours of negotiation.', opts:['compromise','comparison','component','compliance'], a:0, why:'compromise = an agreement where each side gives something up.', whyAr:'compromise حل وسط. compliance امتثال. component مكوّن.'},
  {id:'g47', lvl:'C1', topic:'collocation', q:'The startup failed to ___ a profit in its first three years.', opts:['do','make','take','earn'], a:1, why:'Collocation: make a profit.', whyAr:'التلازم اللفظي: make a profit (وليس do a profit).'},
  {id:'g48', lvl:'C1', topic:'conditionals', q:'___ you require further assistance, please contact the help desk.', opts:['Should','Would','If','Unless'], a:0, why:'Formal inverted conditional: Should you require = If you should require.', whyAr:'شرط رسمي مقلوب: Should you require = If you require (أسلوب رسمي جداً).'},
  {id:'g49', lvl:'C1', topic:'passive', q:'The suspect is believed ___ the country last night.', opts:['to leave','to have left','leaving','having left'], a:1, why:'Impersonal passive + perfect infinitive for a past action.', whyAr:'المبني للمجهول غير الشخصي + to have + تصريف ثالث لحدث ماضٍ: يُعتقد أنه غادر.'},
  {id:'g50', lvl:'C1', topic:'articles', q:'She was appointed ___ head of the department last year.', opts:['the','a','—','an'], a:2, why:'After appoint/elect, unique job titles take no article.', whyAr:'بعد appoint/elect المنصب الفريد لا يأخذ أداة: appointed head of...'},

  // ---------- C2 ----------
  {id:'g51', lvl:'C2', topic:'vocab', q:'His argument was so ___ that even his critics were persuaded.', opts:['cogent','cognate','congenial','conceited'], a:0, why:'cogent = clear, logical and convincing.', whyAr:'cogent مقنع ومنطقي. cognate مشترك الأصل. conceited مغرور.'},
  {id:'g52', lvl:'C2', topic:'idiom', q:'The new regulations are a ___ in the works for small businesses.', opts:['spanner','hammer','wrench of','needle'], a:0, why:'"A spanner in the works" (BrE) = something that disrupts a plan.', whyAr:'a spanner in the works = عقبة تعطّل الخطة (تعبير بريطاني).'},
  {id:'g53', lvl:'C2', topic:'subjunctive', q:'___ it not for the grant, the lab would have closed.', opts:['Were','Was','Had','Should'], a:0, why:'"Were it not for" = if it were not for (formal inversion).', whyAr:'Were it not for = لولا (أسلوب رسمي مقلوب).'},
  {id:'g54', lvl:'C2', topic:'collocation', q:'The minister\'s remarks ___ fierce criticism from the opposition.', opts:['drew','pulled','took','made'], a:0, why:'Collocation: draw criticism/attention.', whyAr:'draw criticism = يجذب/يثير الانتقاد (تلازم لفظي).'},
  {id:'g55', lvl:'C2', topic:'linking', q:'___ as it may seem, the simpler algorithm outperformed the neural network.', opts:['Paradoxical','However','Although','Despite'], a:0, why:'"Adjective + as it may seem" is a concessive structure.', whyAr:'Paradoxical as it may seem = مهما بدا متناقضاً (تركيب تنازلي).'},
  {id:'g56', lvl:'C2', topic:'vocab', q:'The report\'s findings were ___ by the independent review.', opts:['corroborated','collaborated','corrugated','coagulated'], a:0, why:'corroborate = confirm with additional evidence.', whyAr:'corroborate يؤكد/يدعم بدليل إضافي.'},
  {id:'g57', lvl:'C2', topic:'participles', q:'___ to the terms, the contractor had no grounds for appeal.', opts:['Having agreed','Agreeing','Agreed','To agree'], a:0, why:'Perfect participle for an earlier completed action by the same subject.', whyAr:'Having + تصريف ثالث: فعل اكتمل قبل الفعل الرئيسي لنفس الفاعل.'},
  {id:'g58', lvl:'C2', topic:'register', q:'Which sentence is the most appropriate in a formal report?', opts:['The results were kind of unexpected.','The results were somewhat unexpected.','The results were a bit weird.','Results = unexpected, lol.'], a:1, why:'"Somewhat" is the formal hedge; the others are informal.', whyAr:'somewhat تخفيف رسمي. kind of / a bit عامية لا تناسب التقارير.'},
  {id:'g59', lvl:'C2', topic:'vocab', q:'The CEO\'s ___ response to the crisis reassured investors.', opts:['measured','measuring','measurable','immeasurable'], a:0, why:'measured (adj.) = careful and calm.', whyAr:'measured response = رد متزن وهادئ.'},
  {id:'g60', lvl:'C2', topic:'prepositions', q:'The committee is ___ the opinion that further testing is unwarranted.', opts:['of','in','at','on'], a:0, why:'Fixed formal expression: to be of the opinion that.', whyAr:'be of the opinion that = يرى أن (تعبير رسمي ثابت).'},
];

/* Topic labels for diagnosis */
window.GRAMMAR_TOPICS = {
  'be':{en:'Verb "to be"',ar:'فعل الكينونة be'}, 'articles':{en:'Articles (a/an/the)',ar:'أدوات التعريف والتنكير'}, 'present-simple':{en:'Present simple',ar:'المضارع البسيط'},
  'plurals':{en:'Plurals',ar:'الجمع'}, 'prepositions':{en:'Prepositions',ar:'حروف الجر'}, 'questions':{en:'Question forms',ar:'صياغة الأسئلة'}, 'possessives':{en:'Possessives',ar:'الملكية'},
  'there-is':{en:'There is / are',ar:'There is / are'}, 'vocab':{en:'Vocabulary',ar:'المفردات'}, 'past-simple':{en:'Past simple',ar:'الماضي البسيط'}, 'comparatives':{en:'Comparatives & superlatives',ar:'المقارنة والتفضيل'},
  'countables':{en:'Countable / uncountable',ar:'المعدود وغير المعدود'}, 'future':{en:'Future forms',ar:'صيغ المستقبل'}, 'modals':{en:'Modal verbs',ar:'الأفعال الناقصة (modals)'}, 'present-continuous':{en:'Present continuous',ar:'المضارع المستمر'},
  'adverbs':{en:'Adverbs vs adjectives',ar:'الظروف والصفات'}, 'present-perfect':{en:'Perfect tenses',ar:'الأزمنة التامة'}, 'conditionals':{en:'Conditionals',ar:'الجمل الشرطية'}, 'passive':{en:'Passive voice',ar:'المبني للمجهول'},
  'relative-clauses':{en:'Relative clauses',ar:'جمل الوصل'}, 'gerunds':{en:'Gerunds & infinitives',ar:'ing أو to بعد الفعل'}, 'reported-speech':{en:'Reported speech',ar:'الكلام المنقول'}, 'past-continuous':{en:'Past continuous',ar:'الماضي المستمر'},
  'quantifiers':{en:'Quantifiers',ar:'أدوات الكمية'}, 'wish':{en:'Wish / unreal past',ar:'التمني والماضي غير الحقيقي'}, 'linking':{en:'Linking words',ar:'أدوات الربط'}, 'inversion':{en:'Inversion',ar:'القلب (Inversion)'},
  'subjunctive':{en:'Subjunctive & formal structures',ar:'التراكيب الرسمية'}, 'participles':{en:'Participle clauses',ar:'عبارات اسم الفاعل/المفعول'}, 'cleft':{en:'Emphasis (cleft sentences)',ar:'جمل التركيز'}, 'collocation':{en:'Collocations',ar:'التلازم اللفظي'},
  'idiom':{en:'Idioms',ar:'التعابير الاصطلاحية'}, 'register':{en:'Register (formal/informal)',ar:'مستوى اللغة الرسمي'}
};

/* Grammar curriculum: lessons with EN explanation, Arabic note, examples, Arabic-speaker traps, quiz */
window.GRAMMAR_LESSONS = [
 {id:'L1', lvl:'A1', title:'The verb "to be" and sentence basics', titleAr:'فعل be وأساسيات الجملة', topics:['be','questions'],
  body:`Every English sentence needs a verb. When there is no action, the verb is <b>be</b> (am / is / are). Arabic drops this verb in the present ("هو مهندس" = he engineer), which is why "<s>He engineer</s>" is the most common beginner error.
<ul><li>I <b>am</b> / you <b>are</b> / he, she, it <b>is</b> / we, they <b>are</b></li>
<li>Negative: add <b>not</b> → She is<b>n't</b> here.</li>
<li>Question: move the verb first → <b>Is</b> she here?</li></ul>
Other verbs need <b>do/does</b> for questions and negatives: <i>Do you work here? He does<b>n't</b> work here.</i>`,
  ar:`الجملة الإنجليزية لازم فيها فعل. إذا ما فيه فعل حركة، نستخدم be (am/is/are). العربية ما تستخدم فعل في الجملة الاسمية ("هو مهندس")، فأكثر خطأ عند العرب هو حذف is/are. مع الأفعال الأخرى نستخدم do/does للسؤال والنفي.`,
  examples:['She <b>is</b> a project manager.','They <b>are</b> in a meeting.','<b>Are</b> you ready? — Yes, I <b>am</b>.','<b>Does</b> he speak English? — No, he <b>doesn\'t</b>.'],
  traps:['"He engineer" ✗ → "He <b>is</b> an engineer" ✓','"Are you like tea?" ✗ → "<b>Do</b> you like tea?" ✓','"I am agree" ✗ → "I agree" ✓ (agree is a verb)'],
  quiz:[{q:'They ___ my colleagues.',opts:['is','are','am'],a:1},{q:'___ she from Jeddah?',opts:['Does','Is','Do'],a:1},{q:'I ___ agree with you.',opts:['am','—','is'],a:1},{q:'___ you work remotely?',opts:['Are','Do','Is'],a:1},{q:'He ___ not here today.',opts:['is','are','do'],a:0}]},

 {id:'L2', lvl:'A1', title:'Articles: a, an, the', titleAr:'أدوات التنكير والتعريف', topics:['articles'],
  body:`<b>a / an</b> = one of many (first mention, not specific). <b>the</b> = a specific one both speaker and listener know. The choice between a and an depends on the <i>sound</i>, not the letter: <i>a university</i> (sounds like "yu"), <i>an hour</i> (silent h).
<ul><li>Singular countable nouns almost always need an article or another determiner: <s>I have car</s> → I have <b>a</b> car.</li>
<li>Use <b>the</b> for things that are unique or already mentioned: <i>the sun, the manager, the file I sent.</i></li>
<li>No article for plurals and uncountables in a general sense: <i>Engineers earn well. Water is essential.</i></li></ul>`,
  ar:`a/an للشيء غير المحدد (أول ذكر)، the للشيء المحدد المعروف. القاعدة الذهبية: الاسم المفرد المعدود لا يأتي وحده أبداً، يحتاج a أو the أو my/this... أما الجمع وغير المعدود في المعنى العام فلا يأخذ أداة: Engineers earn well. الخطأ الشائع عند العرب: وضع the للتعميم مثل "The education is important" لأن العربية تقول "التعليم مهم".`,
  examples:['I bought <b>a</b> laptop. <b>The</b> laptop was expensive.','She is <b>an</b> honest person.','<b>Education</b> is important. (general, no article)','<b>The</b> education I received was excellent. (specific)'],
  traps:['"The life is hard" ✗ → "Life is hard" ✓','"I am engineer" ✗ → "I am <b>an</b> engineer" ✓','"a hour" ✗ → "<b>an</b> hour" ✓ (silent h)'],
  quiz:[{q:'She works as ___ accountant.',opts:['a','an','the'],a:1},{q:'___ money is not everything.',opts:['The','A','—'],a:2},{q:'This is ___ best option.',opts:['a','the','—'],a:1},{q:'He is ___ university student.',opts:['a','an','the'],a:0},{q:'I love ___ music.',opts:['the','a','—'],a:2}]},

 {id:'L3', lvl:'A2', title:'Present simple vs present continuous', titleAr:'المضارع البسيط والمستمر', topics:['present-simple','present-continuous'],
  body:`<b>Present simple</b> = habits, facts, schedules: <i>I check my email every morning. The train leaves at 8.</i>
<b>Present continuous</b> = happening now, temporary, or a fixed future arrangement: <i>I'm checking my email now. I'm meeting the client on Thursday.</i>
State verbs (know, like, believe, need, own, seem) are not normally continuous: <s>I am knowing</s> → I <b>know</b>.`,
  ar:`المضارع البسيط للعادات والحقائق والجداول. المضارع المستمر لما يحدث الآن أو مؤقت أو ترتيب مستقبلي مؤكد. أفعال الحالة (know, like, need, believe) لا تأتي بصيغة ing عادةً.`,
  examples:['I usually <b>work</b> from the office, but this week I<b>\'m working</b> from home.','<b>Does</b> the shop <b>open</b> on Fridays?','What <b>are</b> you <b>doing</b>? — I<b>\'m debugging</b> the login page.'],
  traps:['"I am knowing him" ✗ → "I <b>know</b> him" ✓','"He work here" ✗ → "He work<b>s</b> here" ✓ (third person -s)','"I am agree" ✗ → "I agree" ✓'],
  quiz:[{q:'Water ___ at 100°C.',opts:['boils','is boiling','boil'],a:0},{q:'Be quiet! The baby ___.',opts:['sleeps','is sleeping','sleep'],a:1},{q:'She ___ three languages.',opts:['is speaking','speaks','speak'],a:1},{q:'We ___ a new office next month.',opts:['open','are opening','opens'],a:1},{q:'I ___ what you mean.',opts:['am understanding','understand','understands'],a:1}]},

 {id:'L4', lvl:'A2', title:'Past simple and irregular verbs', titleAr:'الماضي البسيط والأفعال الشاذة', topics:['past-simple'],
  body:`Use the past simple for finished actions at a finished time: <i>yesterday, last week, in 2020, two hours ago</i>. Regular verbs add <b>-ed</b>; about 200 common verbs are irregular and must be memorised (go→went, write→wrote, build→built).
Negatives and questions use <b>did</b> + base form: <i>I did<b>n't</b> go. <b>Did</b> you go?</i> (never "did went").`,
  ar:`الماضي البسيط لحدث انتهى في وقت محدد انتهى. الأفعال المنتظمة تأخذ ed، والشاذة تُحفظ (go→went). في النفي والسؤال نستخدم did + الفعل في صيغته الأساسية (بدون ماضٍ): Did you go؟ وليس Did you went.`,
  examples:['We <b>launched</b> the app in March.','I <b>didn\'t see</b> your message.','<b>Did</b> the update <b>fix</b> the bug?','She <b>wrote</b> the documentation last week.'],
  traps:['"Did you went?" ✗ → "Did you <b>go</b>?" ✓','"I have seen him yesterday" ✗ → "I <b>saw</b> him yesterday" ✓','"He teached me" ✗ → "He <b>taught</b> me" ✓'],
  quiz:[{q:'They ___ the meeting an hour ago.',opts:['finish','finished','have finished'],a:1},{q:'I ___ to the gym last night.',opts:['went','go','have gone'],a:0},{q:'___ you ___ the report?',opts:['Did / sent','Did / send','Do / sent'],a:1},{q:'She ___ a new job in 2023.',opts:['found','finded','has found'],a:0},{q:'We ___ have time yesterday.',opts:['didn\'t','don\'t','haven\'t'],a:0}]},

 {id:'L5', lvl:'B1', title:'Present perfect vs past simple', titleAr:'المضارع التام مقابل الماضي البسيط', topics:['present-perfect'],
  body:`The <b>present perfect</b> (have/has + past participle) connects the past to now:
<ul><li>Experience (time not important): <i>I<b>'ve worked</b> with AWS.</i></li>
<li>Unfinished period: <i>I<b>'ve lived</b> here <b>for</b> five years / <b>since</b> 2021.</i></li>
<li>Recent result: <i>The server <b>has crashed</b>. (it's down now)</i></li></ul>
If the time is finished and stated (yesterday, last year, in 2019, when I was a child), use the <b>past simple</b>.
<b>for</b> + duration, <b>since</b> + starting point. <b>Just / already / yet</b> are typical present-perfect signals.`,
  ar:`المضارع التام (have/has + التصريف الثالث) يربط الماضي بالحاضر: تجربة بدون وقت، فترة مستمرة (for/since)، أو نتيجة حديثة. إذا ذُكر وقت ماضٍ منتهٍ (yesterday, in 2019) نستخدم الماضي البسيط. هذا التمييز من أكثر ما يرفع درجة القواعد في الآيلتس.`,
  examples:['I<b>\'ve finished</b> the task. (recent, relevant now)','I <b>finished</b> it at 3 p.m. (finished time)','<b>Have</b> you ever <b>used</b> Kubernetes?','She <b>has been</b> a developer <b>since</b> 2018.'],
  traps:['"I have visited Dubai last year" ✗ → "I <b>visited</b> Dubai last year" ✓','"I live here since 2019" ✗ → "I <b>have lived</b> here since 2019" ✓','"since five years" ✗ → "<b>for</b> five years" ✓'],
  quiz:[{q:'I ___ this film twice.',opts:['saw','have seen','see'],a:1},{q:'We ___ the client in May.',opts:['have met','met','meet'],a:1},{q:'She has worked here ___ 2020.',opts:['for','since','from'],a:1},{q:'___ you finished yet?',opts:['Did','Have','Do'],a:1},{q:'He ___ his keys; he can\'t get in.',opts:['lost','has lost','loses'],a:1}]},

 {id:'L6', lvl:'B1', title:'Conditionals (zero, first, second)', titleAr:'الجمل الشرطية (0، 1، 2)', topics:['conditionals'],
  body:`<b>Zero</b> (always true): If + present, present. <i>If you heat ice, it melts.</i>
<b>First</b> (real future): If + present, <b>will</b> + verb. <i>If it rains, we'll cancel.</i> Never put "will" in the if-clause.
<b>Second</b> (unreal/imaginary present): If + past, <b>would</b> + verb. <i>If I had more time, I would learn Rust.</i> "Were" is used for all persons in formal English: <i>If I were you...</i>`,
  ar:`الصفر: حقيقة دائمة. الأول: مستقبل حقيقي محتمل (if + مضارع، will). الثاني: خيالي/غير حقيقي الآن (if + ماضٍ، would). لا نضع will بعد if أبداً.`,
  examples:['If the test <b>fails</b>, the build <b>won\'t deploy</b>.','If I <b>were</b> the manager, I <b>would hire</b> more testers.','If you <b>press</b> Ctrl+S, it <b>saves</b> the file.'],
  traps:['"If it will rain" ✗ → "If it <b>rains</b>" ✓','"If I would have money" ✗ → "If I <b>had</b> money" ✓'],
  quiz:[{q:'If you ___ the cable, the light turns on.',opts:['connect','will connect','connected'],a:0},{q:'If she ___ late again, she will be in trouble.',opts:['is','will be','were'],a:0},{q:'If I ___ you, I would accept the offer.',opts:['was','were','am'],a:1},{q:'We ___ the launch if the tests fail.',opts:['delay','would delay','will delay'],a:2},{q:'If he ___ harder, he would pass.',opts:['studied','studies','will study'],a:0}]},

 {id:'L7', lvl:'B1', title:'The passive voice', titleAr:'المبني للمجهول', topics:['passive'],
  body:`Form: <b>be</b> (in the right tense) + <b>past participle</b>. Use it when the action matters more than who did it, or the doer is unknown/obvious. It is very common in academic and technical writing.
<ul><li>Present: The data <b>is stored</b> in the cloud.</li><li>Past: The bug <b>was reported</b> yesterday.</li><li>Present perfect: The files <b>have been deleted</b>.</li><li>Modal: The password <b>must be changed</b> monthly.</li></ul>
Add <b>by</b> + agent only if it adds information.`,
  ar:`المبني للمجهول = be بالزمن المناسب + التصريف الثالث. نستخدمه حين يكون الحدث أهم من الفاعل، وهو شائع جداً في الكتابة الأكاديمية والتقنية (Task 1 في الآيلتس خصوصاً). تذكر تغيير be حسب الزمن.`,
  examples:['Python <b>was created</b> by Guido van Rossum.','The results <b>will be published</b> next week.','Users <b>are asked</b> to reset their passwords.'],
  traps:['"The report was wrote" ✗ → "was <b>written</b>" ✓','"It is consist of" ✗ → "It consists of" ✓ (consist is never passive)','"I was born in 1998" ✓ (born is always passive)'],
  quiz:[{q:'The email ___ sent this morning.',opts:['is','was','has'],a:1},{q:'New features ___ added every month.',opts:['are','is','be'],a:0},{q:'The problem has ___ solved.',opts:['been','be','being'],a:0},{q:'The office ___ cleaned right now.',opts:['is being','is','was'],a:0},{q:'Mistakes ___ be avoided.',opts:['must','must to','must are'],a:0}]},

 {id:'L8', lvl:'B1', title:'Relative clauses (who, which, that, where, whose)', titleAr:'جمل الوصل', topics:['relative-clauses'],
  body:`Relative clauses add information about a noun: <i>The engineer <b>who</b> fixed the bug.</i>
<ul><li><b>who</b> (people), <b>which</b> (things), <b>that</b> (both, informal), <b>where</b> (places), <b>whose</b> (possession), <b>when</b> (times).</li>
<li><b>Defining</b> (essential, no commas): <i>The laptop <b>that</b> I bought is fast.</i></li>
<li><b>Non-defining</b> (extra info, commas, no "that"): <i>My laptop, <b>which</b> I bought last year, is fast.</i></li></ul>
Do not repeat the object pronoun: <s>the file which I sent it</s> → the file which I sent.`,
  ar:`جمل الوصل تضيف معلومات عن اسم. who للأشخاص، which للأشياء، where للأماكن، whose للملكية. خطأ شائع عند العرب: تكرار الضمير (the file which I sent it ✗) لأن العربية تستخدم ضمير عائد ("الملف الذي أرسلته").`,
  examples:['This is the tool <b>which</b> saves us hours.','That\'s the colleague <b>whose</b> code never breaks.','The city <b>where</b> I grew up is small.'],
  traps:['"the man who he works here" ✗ → "the man who works here" ✓','"the app that I use it" ✗ → "the app that I use" ✓'],
  quiz:[{q:'The woman ___ leads the team is Egyptian.',opts:['which','who','whose'],a:1},{q:'The server ___ we installed yesterday is down.',opts:['who','which','where'],a:1},{q:'That\'s the café ___ we first met.',opts:['which','where','who'],a:1},{q:'A developer ___ laptop was stolen called IT.',opts:['whose','who\'s','which'],a:0},{q:'The report ___ I sent was approved.',opts:['that','who','where'],a:0}]},

 {id:'L9', lvl:'B2', title:'Perfect tenses: past perfect & future perfect', titleAr:'الأزمنة التامة: الماضي التام والمستقبل التام', topics:['present-perfect'],
  body:`<b>Past perfect</b> (had + past participle) = the earlier of two past actions: <i>When I arrived, the meeting <b>had started</b>.</i> It is essential in narratives and reported speech.
<b>Future perfect</b> (will have + past participle) = completed before a future point: <i>By 2030, we <b>will have migrated</b> everything to the cloud.</i>
<b>Present perfect continuous</b> (have been + -ing) stresses duration: <i>I<b>'ve been learning</b> English for ten years.</i>`,
  ar:`الماضي التام (had + تصريف ثالث) للحدث الأسبق من حدثين في الماضي. المستقبل التام (will have + تصريف ثالث) لحدث سيكتمل قبل نقطة مستقبلية (By 2030...). المضارع التام المستمر يركز على مدة الحدث.`,
  examples:['She <b>had already left</b> when I called.','By Friday, I <b>will have finished</b> the course.','We<b>\'ve been working</b> on this since morning.'],
  traps:['"When I arrived, the meeting started" (ambiguous) → "<b>had started</b>" (before I arrived)','"I am working here for 5 years" ✗ → "I <b>have been working</b>" ✓'],
  quiz:[{q:'By the time we got there, the shop ___.',opts:['closed','had closed','has closed'],a:1},{q:'By next year, I ___ my degree.',opts:['will finish','will have finished','finish'],a:1},{q:'He ___ for an hour when the bus came.',opts:['had been waiting','waited','is waiting'],a:0},{q:'I realised I ___ my badge at home.',opts:['left','had left','have left'],a:1},{q:'She ___ English since she was six.',opts:['has been learning','is learning','learned'],a:0}]},

 {id:'L10', lvl:'B2', title:'Third and mixed conditionals, wish & regret', titleAr:'الشرط الثالث والمختلط والتمني', topics:['conditionals','wish'],
  body:`<b>Third conditional</b> (unreal past): If + <b>had</b> + past participle, <b>would have</b> + past participle. <i>If we had tested it, it wouldn't have crashed.</i>
<b>Mixed</b>: past condition, present result: <i>If I had studied medicine, I would be a doctor now.</i>
<b>Wish</b>: wish + past (present regret), wish + past perfect (past regret), wish + would (annoyance). <i>I wish I <b>knew</b>. I wish I <b>had applied</b>. I wish he <b>would stop</b>.</i>
<b>Should have / could have</b> + past participle for criticism or missed opportunity.`,
  ar:`الشرط الثالث لما لم يحدث في الماضي (if + had + تصريف ثالث، would have + تصريف ثالث). المختلط: سبب ماضٍ ونتيجة حاضرة. wish + ماضٍ للندم على الحاضر، wish + ماضٍ تام للندم على الماضي. should have للنقد.`,
  examples:['If I <b>had known</b>, I <b>would have told</b> you.','I wish I <b>had taken</b> that job.','You <b>should have backed up</b> the database.'],
  traps:['"If I would have known" ✗ → "If I <b>had</b> known" ✓','"I wish I have" ✗ → "I wish I <b>had</b>" ✓'],
  quiz:[{q:'If they ___ earlier, they would have caught the flight.',opts:['left','had left','would leave'],a:1},{q:'I wish I ___ taller.',opts:['am','were','will be'],a:1},{q:'You ___ told me about the change!',opts:['should have','should','should had'],a:0},{q:'If he had trained more, he ___ fitter now.',opts:['would be','would have been','is'],a:0},{q:'I wish you ___ interrupting me.',opts:['stop','would stop','stopped'],a:1}]},

 {id:'L11', lvl:'B2', title:'Linking and cohesion for IELTS Writing', titleAr:'أدوات الربط والتماسك في الكتابة', topics:['linking'],
  body:`Cohesion is 25% of your Writing score. Use linkers accurately and <i>not</i> too often.
<ul><li><b>Contrast</b>: however, nevertheless, whereas, while, although + clause, despite/in spite of + noun or -ing.</li>
<li><b>Cause/result</b>: therefore, consequently, as a result, due to + noun, because + clause.</li>
<li><b>Addition</b>: moreover, furthermore, in addition, not only ... but also.</li>
<li><b>Examples</b>: for instance, such as, namely.</li>
<li><b>Sequence</b>: first(ly), subsequently, finally.</li></ul>
Punctuation: <i>However,</i> starts a new sentence; <i>whereas</i> joins two clauses in one sentence. Band 7 descriptors reward "a range of cohesive devices used appropriately"; overuse is penalised.`,
  ar:`التماسك (Coherence & Cohesion) هو ربع درجة الكتابة. استخدم الروابط بدقة وبدون إفراط. انتبه: however تبدأ جملة جديدة بعدها فاصلة، while/whereas تربط جملتين داخل جملة واحدة، despite يتبعها اسم وليس جملة.`,
  examples:['<b>Although</b> the cost is high, the benefits are clear.','<b>Despite</b> the high cost, the benefits are clear.','Sales fell; <b>consequently</b>, the company cut jobs.'],
  traps:['"Despite it is expensive" ✗ → "Despite <b>being</b> expensive / Although it is expensive" ✓','"On the other hand" needs a real first hand (a contrast with what came before)'],
  quiz:[{q:'___ the rain, the match continued.',opts:['Although','Despite','However'],a:1},{q:'The design is simple; ___, it is effective.',opts:['moreover','whereas','despite'],a:0},{q:'He failed ___ he had not prepared.',opts:['because','due to','therefore'],a:0},{q:'Some prefer cities, ___ others prefer the countryside.',opts:['whereas','despite','therefore'],a:0},{q:'___ the delay, the client was satisfied.',opts:['In spite of','Although','Even though'],a:0}]},

 {id:'L12', lvl:'B2', title:'Modals of deduction and obligation', titleAr:'الأفعال الناقصة: الاستنتاج والإلزام', topics:['modals'],
  body:`<b>Deduction (present)</b>: must (sure it's true), may/might/could (possible), can't (sure it's not). <i>He <b>must</b> be at lunch. He <b>can't</b> be at home.</i>
<b>Deduction (past)</b>: must have / might have / can't have + past participle. <i>The server <b>must have</b> overheated.</i>
<b>Obligation</b>: must (speaker's authority), have to (external rule), should (advice), needn't / don't have to (no obligation), mustn't (prohibition).`,
  ar:`الاستنتاج: must (متأكد)، might/may (ممكن)، can't (مستحيل). للماضي نضيف have + تصريف ثالث. الإلزام: must/have to (لازم)، mustn't (ممنوع)، don't have to (مو لازم). انتبه: mustn't ≠ don't have to.`,
  examples:['You <b>mustn\'t</b> share your password. (prohibited)','You <b>don\'t have to</b> come on Friday. (not necessary)','She <b>might have</b> missed the email.'],
  traps:['"You mustn\'t come" means "don\'t come", not "you don\'t need to"','"must to" ✗ → "must" ✓'],
  quiz:[{q:'The lights are off. They ___ be out.',opts:['must','can\'t','mustn\'t'],a:0},{q:'You ___ wear a tie; it\'s optional.',opts:['mustn\'t','don\'t have to','can\'t'],a:1},{q:'He ___ have seen me; he was abroad.',opts:['can\'t','must','should'],a:0},{q:'Visitors ___ sign in at reception. (rule)',opts:['might','have to','could'],a:1},{q:'She ___ be in a meeting, I\'m not sure.',opts:['must','might','can\'t'],a:1}]},

 {id:'L13', lvl:'C1', title:'Inversion and emphasis', titleAr:'القلب والتأكيد', topics:['inversion','cleft'],
  body:`Advanced structures that raise Grammatical Range scores:
<ul><li><b>Negative adverb inversion</b>: <i>Never <b>have I</b> seen such a bug. Not only <b>did it</b> fail, but it also corrupted the data. Rarely <b>do we</b> see...</i></li>
<li><b>No sooner ... than / Hardly ... when</b>: <i>No sooner <b>had</b> we deployed than the alerts started.</i></li>
<li><b>Conditional inversion</b>: <i>Had I known, ... / Should you need help, ... / Were it not for...</i></li>
<li><b>Cleft sentences</b>: <i><b>It was</b> the database <b>that</b> caused the outage. <b>What</b> we need <b>is</b> more testing.</i></li></ul>
Use one or two per essay, not in every sentence.`,
  ar:`تراكيب متقدمة ترفع درجة "المدى النحوي": القلب بعد الظروف السلبية (Never have I...)، No sooner...than، القلب الشرطي (Had I known...)، وجمل التركيز (It was X that... / What we need is...). استخدم واحدة أو اثنتين في المقال فقط.`,
  examples:['<b>Seldom does</b> a project finish under budget.','<b>Had</b> the team tested earlier, the launch would have succeeded.','<b>What</b> matters most <b>is</b> user trust.'],
  traps:['"Never I have seen" ✗ → "Never <b>have I</b> seen" ✓','"No sooner ... when" ✗ → "No sooner ... <b>than</b>" ✓'],
  quiz:[{q:'Not only ___ late, but he also forgot the slides.',opts:['he was','was he','he were'],a:1},{q:'___ you need anything, call me.',opts:['Should','Would','If should'],a:0},{q:'Hardly had I sat down ___ the phone rang.',opts:['than','when','that'],a:1},{q:'___ was the manager who approved it.',opts:['It','What','That'],a:0},{q:'Under no circumstances ___ the door be left open.',opts:['should','it should','should it'],a:0}]},

 {id:'L14', lvl:'C1', title:'Participle clauses and reduced relatives', titleAr:'عبارات اسم الفاعل والمفعول', topics:['participles'],
  body:`Participle clauses make writing concise and academic.
<ul><li><b>-ing</b> (active, same time): <i><b>Working</b> remotely, I save two hours a day.</i></li>
<li><b>-ed</b> (passive): <i><b>Built</b> in 2010, the system is now outdated.</i></li>
<li><b>Having + past participle</b> (earlier action): <i><b>Having finished</b> the tests, we deployed.</i></li>
<li><b>Reduced relative clauses</b>: <i>the people <s>who are</s> <b>waiting</b>; the data <s>which was</s> <b>collected</b> in 2024.</i></li></ul>
The subject of the participle must be the subject of the main clause (avoid "dangling" participles).`,
  ar:`عبارات اسم الفاعل (ing) والمفعول (ed) تجعل الكتابة مختصرة وأكاديمية. Having + تصريف ثالث للحدث الأسبق. القاعدة: فاعل العبارة يجب أن يكون نفس فاعل الجملة الرئيسية.`,
  examples:['<b>Faced</b> with rising costs, the company outsourced support.','<b>Having worked</b> in three countries, she adapts quickly.','The report <b>published</b> last month shows growth.'],
  traps:['"Walking to work, the rain started" ✗ (the rain wasn\'t walking) → "While I was walking to work, the rain started" ✓'],
  quiz:[{q:'___ the email, she replied immediately.',opts:['Reading','Having read','Read'],a:1},{q:'The candidates ___ for the role must have a degree.',opts:['applying','applied','apply'],a:0},{q:'___ in Java, the app is easy to maintain.',opts:['Writing','Written','Wrote'],a:1},{q:'The data ___ last year is unreliable.',opts:['collecting','collected','collect'],a:1},{q:'___ no reply, we escalated the issue.',opts:['Receiving','Received','Having receive'],a:0}]},

 {id:'L15', lvl:'C1', title:'Formal register, hedging and the subjunctive', titleAr:'الأسلوب الرسمي والتحوّط', topics:['subjunctive','register'],
  body:`Academic and professional English avoids absolute claims and casual words.
<ul><li><b>Hedging</b>: <i>tends to, appears to, is likely to, to some extent, arguably, it could be argued that.</i></li>
<li><b>Subjunctive</b> after suggest/recommend/insist/demand + that: <i>I recommend that he <b>be</b> promoted.</i></li>
<li><b>Formal vocabulary</b>: get → obtain, a lot of → a considerable number of, big → substantial, kids → children, stuff → materials.</li>
<li>No contractions in IELTS Writing Task 2 or formal reports (don't → do not).</li></ul>`,
  ar:`الإنجليزية الأكاديمية تتجنب الادعاءات المطلقة والكلمات العامية. استخدم التحوّط (tends to, is likely to, arguably)، والمصدر بعد suggest/recommend that، والمفردات الرسمية (obtain بدل get)، وبدون اختصارات (do not بدل don't) في المقال.`,
  examples:['Remote work <b>appears to</b> improve productivity <b>to some extent</b>.','The committee insisted that the policy <b>be</b> revised.','A <b>substantial</b> proportion of respondents disagreed.'],
  traps:['"Kids use phones a lot" (informal) → "Children use mobile devices extensively"','"It is obvious that" (too strong) → "It is widely believed that"'],
  quiz:[{q:'The doctor suggested that she ___ more.',opts:['rests','rest','rested'],a:1},{q:'Choose the formal option: The results were ___.',opts:['pretty good','encouraging','awesome'],a:1},{q:'Social media ___ to reduce attention spans.',opts:['definitely','appears','obviously'],a:1},{q:'Choose the formal verb: We need to ___ more data.',opts:['get','obtain','grab'],a:1},{q:'It is essential that every employee ___ trained.',opts:['is','be','was'],a:1}]},

 {id:'L16', lvl:'A2', title:'Prepositions of time, place and dependent prepositions', titleAr:'حروف الجر', topics:['prepositions'],
  body:`<b>Time</b>: <b>at</b> 9:00 / night / the weekend (BrE); <b>on</b> Monday / 5 May / my birthday; <b>in</b> March / 2024 / the morning / two weeks.
<b>Place</b>: <b>at</b> a point (at the door, at work); <b>in</b> an enclosed space (in the room, in Riyadh); <b>on</b> a surface (on the table, on the second floor).
<b>Dependent prepositions</b> must be memorised as chunks: depend <b>on</b>, interested <b>in</b>, good <b>at</b>, responsible <b>for</b>, apply <b>for</b> a job, arrive <b>at</b> a place / <b>in</b> a city, discuss (no preposition), explain something <b>to</b> someone.`,
  ar:`الزمن: at للساعات، on للأيام والتواريخ، in للشهور والسنين والفترات. المكان: at نقطة، in داخل مكان، on على سطح. حروف الجر التابعة تُحفظ كوحدة: depend on, interested in, responsible for. وانتبه: discuss بدون about، وexplain يتبعها to.`,
  examples:['The call is <b>at</b> 3 p.m. <b>on</b> Tuesday.','She is responsible <b>for</b> security.','Let me explain the issue <b>to</b> you.'],
  traps:['"discuss about" ✗ → "discuss" ✓','"depend of" ✗ → "depend <b>on</b>" ✓','"in Monday" ✗ → "<b>on</b> Monday" ✓','"married with" ✗ → "married <b>to</b>" ✓'],
  quiz:[{q:'I was born ___ 1999.',opts:['in','on','at'],a:0},{q:'We will discuss ___ the plan tomorrow.',opts:['about','—','on'],a:1},{q:'She is good ___ maths.',opts:['in','at','on'],a:1},{q:'The keys are ___ the table.',opts:['on','in','at'],a:0},{q:'It depends ___ the budget.',opts:['of','on','from'],a:1}]},

 {id:'L17', lvl:'B1', title:'Gerunds and infinitives', titleAr:'ing أو to بعد الفعل', topics:['gerunds'],
  body:`Some verbs are followed by <b>-ing</b>: enjoy, avoid, finish, suggest, consider, mind, keep, practise, recommend, admit, deny, risk.
Some by <b>to + verb</b>: want, decide, plan, hope, agree, refuse, manage, afford, promise, offer, fail.
Some change meaning: <i>stop <b>to smoke</b></i> (pause in order to smoke) vs <i>stop <b>smoking</b></i> (quit); <i>remember <b>to send</b></i> (don't forget) vs <i>remember <b>sending</b></i> (recall).
After prepositions, always -ing: <i>good <b>at coding</b>, before <b>leaving</b>, look forward <b>to hearing</b></i>.`,
  ar:`بعض الأفعال يتبعها ing (enjoy, avoid, finish, suggest, consider)، وبعضها to (want, decide, plan, hope, agree). بعد حروف الجر دائماً ing، حتى مع to في look forward to hearing. بعض الأفعال يتغير معناها (stop to smoke / stop smoking).`,
  examples:['I look forward to <b>meeting</b> you.','She decided <b>to study</b> abroad.','Avoid <b>using</b> passive voice everywhere.'],
  traps:['"look forward to meet you" ✗ → "look forward to <b>meeting</b> you" ✓','"suggest to go" ✗ → "suggest <b>going</b>" ✓','"want that you come" ✗ → "want <b>you to come</b>" ✓'],
  quiz:[{q:'We agreed ___ the deadline.',opts:['extending','to extend','extend'],a:1},{q:'He suggested ___ a break.',opts:['to take','taking','take'],a:1},{q:'I\'m interested in ___ more.',opts:['learn','to learn','learning'],a:2},{q:'Don\'t forget ___ the door.',opts:['locking','to lock','lock'],a:1},{q:'They can\'t afford ___ a new car.',opts:['buying','to buy','buy'],a:1}]},

 {id:'L18', lvl:'B2', title:'Reported speech and reporting verbs', titleAr:'الكلام المنقول', topics:['reported-speech'],
  body:`When reporting, tenses usually shift back: present → past, past → past perfect, will → would, can → could, must → had to. Pronouns and time words change: today → that day, tomorrow → the next day, here → there.
Questions: no auxiliary, no question mark: <i>She asked <b>where I lived</b>. He asked <b>if</b> I was ready.</i>
Reporting verbs add precision: <i>admit, deny, claim, warn, advise, promise, suggest, insist, apologise for.</i>`,
  ar:`في النقل تتراجع الأزمنة خطوة للوراء (present → past, will → would). الأسئلة المنقولة بدون فعل مساعد وبدون علامة استفهام: She asked where I lived. الأفعال الناقلة (claim, warn, deny, apologise) ترفع دقة التعبير.`,
  examples:['"I\'ll call you tomorrow" → He said he <b>would call</b> me <b>the next day</b>.','"Are you busy?" → She asked <b>if I was</b> busy.','He <b>denied breaking</b> the build.'],
  traps:['"She asked where do I live" ✗ → "where I lived" ✓','"He said me" ✗ → "He <b>told</b> me / He said <b>to</b> me" ✓'],
  quiz:[{q:'"I am tired." → She said she ___ tired.',opts:['is','was','were'],a:1},{q:'He asked me ___ I had finished.',opts:['that','if','what'],a:1},{q:'They told us they ___ come.',opts:['will','would','can'],a:1},{q:'She ___ me that the meeting was cancelled.',opts:['said','told','explained to'],a:1},{q:'He apologised ___ late.',opts:['to be','for being','being'],a:1}]},

 {id:'L19', lvl:'B1', title:'Countable, uncountable and quantifiers', titleAr:'المعدود وغير المعدود', topics:['countables','quantifiers'],
  body:`Uncountable nouns have no plural and take singular verbs: <i>information, advice, equipment, research, software, furniture, news, feedback, knowledge, progress, work (job), money, traffic.</i>
<ul><li><b>much / little / a little</b> with uncountables; <b>many / few / a few</b> with countables.</li>
<li><b>a lot of / plenty of / some / any / enough</b> work with both.</li>
<li>To count an uncountable: <i>a piece of advice, an item of equipment, three pieces of software.</i></li></ul>`,
  ar:`أسماء غير معدودة شائعة وتُخطئ فيها كثيراً: information, advice, equipment, research, software, feedback, news. ليس لها جمع وتأخذ فعلاً مفرداً. much/little لغير المعدود، many/few للمعدود. للعدّ: a piece of advice.`,
  examples:['The <b>research is</b> promising.','She gave me <b>some advice</b>. (not "an advice")','We don\'t have <b>much</b> time but we have <b>a few</b> options.'],
  traps:['"informations" ✗ → "information" ✓','"an advice" ✗ → "a piece of advice / some advice" ✓','"The news are" ✗ → "The news <b>is</b>" ✓'],
  quiz:[{q:'We need more ___ about the users.',opts:['informations','information','an information'],a:1},{q:'How ___ servers do you manage?',opts:['much','many','little'],a:1},{q:'There is ___ furniture in the room.',opts:['few','a few','little'],a:2},{q:'The equipment ___ expensive.',opts:['are','is','were'],a:1},{q:'Could you give me ___ advice?',opts:['an','some','a few'],a:1}]},

 {id:'L20', lvl:'A2', title:'Future forms: will, going to, present continuous', titleAr:'صيغ المستقبل', topics:['future'],
  body:`<ul><li><b>will</b>: instant decisions, offers, promises, predictions based on opinion. <i>I'll help you. I think it will work.</i></li>
<li><b>going to</b>: plans/intentions and predictions with evidence. <i>I'm going to learn Go. It's going to rain.</i></li>
<li><b>present continuous</b>: fixed arrangements with time/place. <i>I'm flying to Dubai on Monday.</i></li>
<li><b>present simple</b>: timetables. <i>The exam starts at 9.</i></li></ul>`,
  ar:`will للقرار اللحظي والوعود والتنبؤ بالرأي. going to للخطط والتنبؤ بدليل. المضارع المستمر للترتيبات المؤكدة بوقت ومكان. المضارع البسيط للجداول الرسمية.`,
  examples:['The phone\'s ringing. — I<b>\'ll get</b> it.','We<b>\'re going to</b> migrate to the cloud next year.','I<b>\'m seeing</b> the dentist at 4.'],
  traps:['"I will to go" ✗ → "I will go" ✓','"I will meet him tomorrow" is fine, but for a fixed arrangement "I<b>\'m meeting</b> him tomorrow" is more natural'],
  quiz:[{q:'A: It\'s cold. B: I ___ close the window.',opts:['will','am going to','am closing'],a:0},{q:'Look out! You ___ fall!',opts:['will','are going to','fall'],a:1},{q:'The train ___ at 6:40.',opts:['leaves','will leave','is leaving'],a:0},{q:'We ___ dinner with clients on Friday. (arranged)',opts:['will have','are having','have'],a:1},{q:'I promise I ___ be late.',opts:['won\'t','am not going to','am not'],a:0}]},
];
