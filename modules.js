/* Band Nine Lab — learning modules */
(function(A){
  const {route, t, isAr, esc, el, $, $$, state, save, addXP, toast, fmtBand, bandToCEFR, speakLines, stopSpeech, timerWidget, questionForm, gradeForm, listeningPlayer, writingEditor, speakingSession, LEVELS} = A;
  const header=(v,title,sub)=>v.appendChild(el(`<div class="topbar"><div><h1>${esc(title)}</h1>${sub?`<div class="crumbs">${sub}</div>`:''}</div></div>`));
  const strategiesBlock=(key)=>{ const s=STRATEGIES[key]; return `<details class="card" style="margin-bottom:16px"><summary style="cursor:pointer;font-weight:600">${esc(isAr()?s.titleAr:s.title)}</summary><div class="grid g2" style="margin-top:14px">${s.items.map(i=>`<div class="stack" style="gap:4px"><b>${esc(isAr()?i.ar:i.h)}</b><p class="small en">${esc(i.t)}</p><p class="small muted ar">${esc(i.ta)}</p></div>`).join('')}</div></details>`; };

  /* ---------- GRAMMAR ---------- */
  route('grammar',(v,arg)=>{
    const p=state.profile; const weak=(p.placement.grammar&&p.placement.grammar.weak)||[]; const lvl=p.placement.grammar&&p.placement.grammar.level;
    if(arg){ const L=GRAMMAR_LESSONS.find(l=>l.id===arg); if(L) return lessonView(v,L); }
    header(v,t('grammar'), isAr()?'20 درساً من A1 إلى C1، كل درس بشرح إنجليزي وملاحظة عربية وأخطاء العرب الشائعة واختبار قصير':'20 lessons from A1 to C1, each with an English explanation, an Arabic note, common Arabic-speaker errors and a short quiz');
    const suggested=GRAMMAR_LESSONS.filter(l=>l.topics.some(tp=>weak.includes(tp)));
    if(suggested.length) v.appendChild(el(`<div class="card stack" style="margin-bottom:16px"><span class="eyebrow">${isAr()?'مقترح لك من اختبار المستوى':'Suggested from your placement test'}</span><div class="lesson-list">${suggested.map(lessonRow).join('')}</div></div>`));
    const byLevel={}; GRAMMAR_LESSONS.forEach(l=>{ (byLevel[l.lvl]=byLevel[l.lvl]||[]).push(l); });
    LEVELS.forEach(L=>{ if(!byLevel[L]) return; v.appendChild(el(`<div class="stack" style="margin-bottom:18px"><div class="row"><span class="lvl">${L}</span><div><b>${L}${lvl===L?' · '+(isAr()?'مستواك الحالي':'your current level'):''}</b><div class="small muted">${byLevel[L].filter(l=>p.lessons[l.id]).length}/${byLevel[L].length} ${isAr()?'مكتمل':'done'}</div></div></div><div class="lesson-list">${byLevel[L].map(lessonRow).join('')}</div></div>`)); });
    function lessonRow(l){ const done=!!p.lessons[l.id]; return `<a class="lesson-item" href="#grammar-${l.id}"><span class="check ${done?'on':''}">${done?'✓':''}</span><span class="t"><b>${esc(isAr()?l.titleAr:l.title)}</b><span class="small muted">${esc(isAr()?l.title:l.titleAr)} · ${l.lvl}</span></span>${weak.some(w=>l.topics.includes(w))?'<span class="pill warm">!</span>':''}</a>`; }
  });
  function lessonView(v,L){
    const p=state.profile;
    v.appendChild(el(`<div class="topbar"><div><a href="#grammar" class="small">← ${esc(t('grammar'))}</a><h1>${esc(L.title)}</h1><div class="crumbs">${esc(L.titleAr)} · ${L.lvl}</div></div><span class="pill ${p.lessons[L.id]?'good':''}">${p.lessons[L.id]?(isAr()?'مكتمل':'Completed'):(isAr()?'غير مكتمل':'Not completed')}</span></div>`));
    const card=el(`<div class="two"><div class="stack">
      <div class="card lesson-body en">${L.body}</div>
      <div class="card"><span class="eyebrow">${isAr()?'بالعربي':'In Arabic'}</span><p class="ar" style="margin-top:6px">${esc(L.ar)}</p></div>
      <div class="card"><span class="eyebrow">${isAr()?'أمثلة':'Examples'}</span>${L.examples.map(e=>`<div class="ex en">${e} <button class="btn sm ghost" data-say="${esc(e.replace(/<[^>]+>/g,''))}">🔊</button></div>`).join('')}</div>
      <div class="card"><span class="eyebrow">${isAr()?'أخطاء شائعة عند العرب':'Common Arabic-speaker errors'}</span>${L.traps.map(e=>`<div class="trap en">${e}</div>`).join('')}</div>
    </div><div class="card stack sticky-side"><span class="eyebrow">${isAr()?'اختبار قصير':'Quick check'}</span><form id="qz">${L.quiz.map((q,i)=>`<div class="q en"><p><b>${i+1}. ${esc(q.q)}</b></p><div class="opts">${q.opts.map((o,j)=>`<label class="opt"><input type="radio" name="q${i}" value="${j}"><span class="k">${'ABC'[j]}</span><span>${esc(o)}</span></label>`).join('')}</div></div>`).join('')}</form><button class="btn primary" id="chk">${esc(t('check'))}</button><div id="qr"></div></div></div>`);
    v.appendChild(card);
    $$('[data-say]',card).forEach(b=>b.onclick=()=>speakLines([{text:b.dataset.say,voice:'buttery'}]));
    $('#chk',card).onclick=()=>{ let c=0; L.quiz.forEach((q,i)=>{ const s=card.querySelector(`[name=q${i}]:checked`); const ok=s&&Number(s.value)===q.a; if(ok)c++; $$(`[name=q${i}]`,card).forEach(inp=>{ const lab=inp.closest('.opt'); if(Number(inp.value)===q.a) lab.classList.add('ok'); else if(inp.checked) lab.classList.add('ko'); }); });
      const pass=c>=L.quiz.length-1; $('#qr',card).innerHTML=`<div class="note ${pass?'':'warm'}">${c}/${L.quiz.length} ${pass?(isAr()?'ممتاز، الدرس مكتمل':'Great, lesson completed'):(isAr()?'راجع الشرح وحاول مرة أخرى (تحتاج 4/5)':'Review the explanation and try again (you need 4/5)')}</div>`;
      if(pass && !p.lessons[L.id]){ p.lessons[L.id]={at:Date.now(),score:c}; addXP(30); save(true); } };
  }

  /* ---------- VOCABULARY: type-to-learn ---------- */
  function srsDue(word){ const s=state.profile.srs[word]; return !s || (s.due<=Date.now()); }
  function srsUpdate(word, good){ const s=state.profile.srs[word]||{n:0,interval:0,ease:2.3}; if(good){ s.n++; s.interval = s.n===1?1 : s.n===2?3 : Math.round(s.interval*s.ease); s.ease=Math.min(3,s.ease+0.05); } else { s.n=0; s.interval=0; s.ease=Math.max(1.3,s.ease-0.2); } s.due=Date.now()+s.interval*864e5; s.last=Date.now(); state.profile.srs[word]=s; }
  route('vocab',(v,arg)=>{
    if(arg){ const bank=VOCAB_BANKS.find(b=>b.id===arg); if(bank) return typer(v,bank); }
    header(v,t('vocab'), isAr()?'تدريب الكتابة حرفاً حرفاً (كما في الفيديو): أيقونة + المعنى بالعربي → اكتب الكلمة → اكتب الجملة كاملة. المراجعة المتباعدة تعيد لك الكلمات قبل أن تنساها.':'Letter-by-letter typing drill: icon + Arabic meaning → type the word → type the full sentence. Spaced repetition brings words back before you forget them.');
    const due=Object.keys(state.profile.srs).filter(srsDue).length;
    v.appendChild(el(`<div class="card row between" style="margin-bottom:16px"><div><b>${isAr()?'كلمات مستحقة للمراجعة اليوم':'Words due for review today'}</b><div class="small muted">${Object.keys(state.profile.srs).length} ${isAr()?'كلمة في نظام المراجعة':'words in your review system'}</div></div><span class="lvl">${due}</span></div>`));
    v.appendChild(el(`<div class="grid g2">${VOCAB_BANKS.map(b=>{ const learned=b.words.filter(w=>state.profile.srs[w.w]&&state.profile.srs[w.w].n>0).length; return `<a class="skill-tile" href="#vocab-${b.id}"><span class="eyebrow">${b.level}</span><b style="font-family:var(--display);font-size:1.15rem">${esc(isAr()?b.nameAr:b.name)}</b><span class="small muted">${esc(isAr()?b.name:b.nameAr)} · ${b.words.length} ${t('words')}</span><div class="bar"><i style="width:${learned/b.words.length*100}%"></i></div><span class="tiny muted">${learned}/${b.words.length} ${isAr()?'متعلّمة':'learned'} · ${b.words.filter(w=>srsDue(w.w)).length} ${isAr()?'مستحقة':'due'}</span></a>`; }).join('')}</div>`));
  });
  function typer(v,bank){
    const due=bank.words.filter(w=>srsDue(w.w)); const pool=(due.length?due:bank.words); const words=A.shuffle(pool).slice(0,8);
    let i=0, stage=0, pos=0, errors=0, wordErr=false; const results=[];
    const host=el(`<div class="stack"><div class="row between"><a href="#vocab" class="small">← ${esc(t('vocab'))}</a><span class="small muted">${esc(isAr()?bank.nameAr:bank.name)}</span></div><div class="bar"><i id="pb" style="width:0%"></i></div><div class="card typer" id="ty" tabindex="0"></div><input class="hidden-input" id="hin" autocomplete="off" autocapitalize="off"><p class="tiny muted" style="text-align:center">${isAr()?'اكتب بلوحة المفاتيح؛ المسافة وعلامات الترقيم تُدخل تلقائياً. اضغط على البطاقة إن لم تستجب.':'Type on your keyboard; spaces and punctuation are filled automatically. Tap the card if it does not respond.'}</p></div>`);
    v.appendChild(host); const ty=$('#ty',host), hin=$('#hin',host);
    const focus=()=>{ hin.focus({preventScroll:true}); };
    ty.onclick=focus; setTimeout(focus,50);
    function target(){ const w=words[i]; return stage===0 ? w.w : w.s; }
    function draw(){
      const w=words[i]; const tg=target(); $('#pb',host).style.width=((i+stage/2)/words.length*100)+'%';
      const cells=tg.split('').map((ch,k)=>{ const isSp=ch===' '; const isP=/[^a-zA-Z0-9]/.test(ch)&&!isSp; const done=k<pos; const cls=(stage===0?'L':'L')+(isSp?' sp':'')+(isP?' punct':'')+(k===pos?' cur':'')+(done?' done':''); return `<span class="${cls}" data-k="${k}">${done||isP?esc(ch):(isSp?'':'')}</span>`; }).join('');
      ty.innerHTML=`<div class="icon">${w.icon}</div><div class="meaning ar">${esc(w.ar)}</div>${stage===1?`<div class="letters" style="opacity:.7"><span class="L done" style="width:auto;border:0;font-size:1.3rem">${esc(w.w)}</span></div>`:''}<div class="${stage===0?'letters':'sentence'}">${cells}</div>${stage===1?`<div class="meaning ar small">${esc(w.sa)}</div>`:''}<div class="tiny muted">${i+1}/${words.length} · ${stage===0?(isAr()?'اكتب الكلمة':'type the word'):(isAr()?'اكتب الجملة':'type the sentence')}</div>`;
      skipAuto();
    }
    function skipAuto(){ const tg=target(); while(pos<tg.length && (tg[pos]===' '||/[^a-zA-Z0-9]/.test(tg[pos]))){ pos++; } if(pos>=tg.length) advance(); else { const c=ty.querySelector(`[data-k="${pos}"]`); $$('.cur',ty).forEach(x=>x.classList.remove('cur')); if(c) c.classList.add('cur'); } }
    function advance(){ if(stage===0){ stage=1; pos=0; draw(); } else { srsUpdate(words[i].w, !wordErr); results.push({w:words[i],ok:!wordErr}); i++; stage=0; pos=0; wordErr=false; if(i>=words.length) finish(); else draw(); } }
    hin.addEventListener('input',(e)=>{ const val=hin.value; hin.value=''; if(!val) return; const ch=val[val.length-1]; handle(ch); });
    document.addEventListener('keydown', keyHandler);
    function keyHandler(e){ if(!document.body.contains(host)){ document.removeEventListener('keydown',keyHandler); return; } if(document.activeElement===hin) return; if(e.key.length===1 && !e.metaKey && !e.ctrlKey){ handle(e.key); } }
    function handle(ch){ const tg=target(); if(pos>=tg.length) return; const want=tg[pos]; if(ch.toLowerCase()===want.toLowerCase()){ const c=ty.querySelector(`[data-k="${pos}"]`); if(c){ c.textContent=want; c.classList.add('done'); c.classList.remove('cur'); } pos++; skipAuto(); } else { errors++; wordErr=true; const c=ty.querySelector(`[data-k="${pos}"]`); if(c){ c.classList.remove('err'); void c.offsetWidth; c.classList.add('err'); } } }
    function finish(){ document.removeEventListener('keydown',keyHandler); addXP(10*words.length); save(true);
      ty.innerHTML=`<h2>Done!</h2><p class="muted">${words.length} ${t('words')} · ${errors} ${isAr()?'خطأ':'typos'}</p><div class="done-grid">${results.map(r=>`<div class="w"><span>${r.w.icon}</span><b>${esc(r.w.w)}</b><span class="muted ar">${esc(r.w.ar)}</span>${r.ok?'':'<span class="pill bad">↻</span>'}</div>`).join('')}</div><div class="row"><a class="btn primary" href="#vocab-${bank.id}" onclick="setTimeout(()=>App.render(),0)">${isAr()?'جولة أخرى':'Another round'}</a><a class="btn" href="#vocab">${isAr()?'كل المجموعات':'All banks'}</a></div>`; }
    draw();
  }

  /* ---------- READING ---------- */
  route('reading',(v,arg)=>{
    header(v,t('reading'), isAr()?'استراتيجيات + نصوص تدريبية بمؤقت وتصحيح فوري مع الشرح':'Strategies + timed practice passages with instant marking and explanations');
    v.appendChild(el(strategiesBlock('reading')));
    const sets=READING_SETS.filter(s=>s.use==='practice'||arg==='all');
    if(arg && READING_SETS.find(s=>s.id===arg)){ const set=READING_SETS.find(s=>s.id===arg); return readingPractice(v,set); }
    v.appendChild(el(`<div class="grid g2">${READING_SETS.map(s=>`<a class="skill-tile" href="#reading-${s.id}"><span class="eyebrow">${s.level} · ${s.words} words · ${s.minutes} min${s.use==='placement'?' · placement set':''}</span><b style="font-family:var(--display);font-size:1.1rem">${esc(s.title)}</b><span class="small muted">${s.questions.length} questions · ${[...new Set(s.questions.map(q=>q.type))].join(', ')}</span></a>`).join('')}</div>`));
  });
  function readingPractice(v,set){
    const card=el(`<div class="stack"><div class="row between"><div><span class="eyebrow">${set.level} · ${set.minutes} min</span><h2>${esc(set.title)}</h2></div><span id="tm"></span></div><div class="two"><div class="card passage en">${set.text}</div><div class="card"><form>${questionForm(set,'p')}</form><div class="row" style="margin-top:14px"><button class="btn primary" id="chk">${esc(t('check'))}</button></div><div id="sc"></div></div></div></div>`);
    v.appendChild(card); const tm=timerWidget(set.minutes*60,()=>toast(isAr()?'انتهى الوقت':'Time is up')); $('#tm',card).appendChild(tm);
    $('#chk',card).onclick=()=>{ tm.stop(); const g=gradeForm(set,'p',card); const band=A.rawToBand(g.correct,g.total,state.profile.variant); $('#sc',card).innerHTML=`<div class="note" style="margin-top:12px"><b>${g.correct}/${g.total}</b> · ${isAr()?'ما يعادل تقريباً درجة':'roughly equivalent to band'} <b>${fmtBand(band)}</b> ${isAr()?'لو كان الاختبار كاملاً بهذه الدقة':'if a full test went at this accuracy'}</div>`; $('#chk',card).disabled=true; state.profile.history.push({at:Date.now(),kind:'reading-practice',value:band}); addXP(25); save(true); };
  }

  /* ---------- LISTENING ---------- */
  route('listening',(v,arg)=>{
    header(v,t('listening'), isAr()?'استراتيجيات + أجزاء تدريبية بأصوات طبيعية + تدريبات إملاء':'Strategies + practice parts with natural voices + dictation drills');
    v.appendChild(el(strategiesBlock('listening')));
    if(arg==='dict') return dictationDrill(v);
    if(arg && LISTENING_SETS.find(s=>s.id===arg)){ const set=LISTENING_SETS.find(s=>s.id===arg); const card=el(`<div class="two"><div id="pl"></div><div class="card"><form>${questionForm(set,'x')}</form><div class="row" style="margin-top:14px"><button class="btn primary" id="chk">${esc(t('check'))}</button></div><div id="sc"></div></div></div>`); v.appendChild(card); $('#pl',card).appendChild(listeningPlayer(set,{showScript:true}));
      $('#chk',card).onclick=()=>{ stopSpeech(); const g=gradeForm(set,'x',card); const band=A.rawToBand(g.correct,g.total,'academic'); $('#sc',card).innerHTML=`<div class="note" style="margin-top:12px"><b>${g.correct}/${g.total}</b> ≈ band <b>${fmtBand(band)}</b></div>`; $('#chk',card).disabled=true; state.profile.history.push({at:Date.now(),kind:'listening-practice',value:band}); addXP(25); save(true); }; return; }
    v.appendChild(el(`<div class="grid g2"><a class="skill-tile" href="#listening-dict" style="border-color:var(--accent)"><span class="eyebrow">${isAr()?'تدريب يومي':'Daily drill'}</span><b style="font-family:var(--display);font-size:1.1rem">${isAr()?'إملاء: اسمع واكتب':'Dictation: listen and type'}</b><span class="small muted">${isAr()?'يقوّي تمييز الكلمات والتهجئة، وهو أسرع طريقة لرفع درجة الاستماع':'Sharpens word recognition and spelling; the fastest way to raise your Listening band'}</span></a>${LISTENING_SETS.map(s=>`<a class="skill-tile" href="#listening-${s.id}"><span class="eyebrow">Part ${s.part} · ${s.level}${s.use==='placement'?' · placement set':''}</span><b style="font-family:var(--display);font-size:1.1rem">${esc(s.title)}</b><span class="small muted">${s.questions.length} questions · ~${s.minutes} min</span></a>`).join('')}</div>`));
  });
  function dictationDrill(v){
    const lvl=(state.profile.placement.grammar&&state.profile.placement.grammar.level)||'B1'; const key=DICTATION_SETS[lvl]?lvl:(['A1','A2'].includes(lvl)?'A2':'C1');
    const w=el(`<div class="card stack" style="max-width:720px"><div class="row between"><span class="eyebrow">${isAr()?'إملاء':'Dictation'} · ${key}</span><select id="lv" style="width:auto">${Object.keys(DICTATION_SETS).map(k=>`<option ${k===key?'selected':''}>${k}</option>`).join('')}</select></div><div class="row"><button class="btn primary" id="play">🔊 ${isAr()?'اسمع الجملة':'Play sentence'}</button><button class="btn sm" id="slow">🐢 ${isAr()?'أبطأ':'Slower'}</button><span class="small muted" id="n"></span></div><input type="text" id="ans" class="en" placeholder="${isAr()?'اكتب ما سمعته بالضبط':'Type exactly what you heard'}" autocomplete="off" spellcheck="false"><div class="row"><button class="btn" id="chk">${esc(t('check'))}</button><button class="btn ghost" id="nx">${esc(t('next'))}</button></div><div id="out"></div></div>`);
    v.appendChild(w); let list=A.shuffle(DICTATION_SETS[key]); let i=0;
    const upd=()=>{ $('#n',w).textContent=`${i+1}/${list.length}`; $('#ans',w).value=''; $('#out',w).innerHTML=''; };
    $('#lv',w).onchange=()=>{ list=A.shuffle(DICTATION_SETS[$('#lv',w).value]); i=0; upd(); };
    $('#play',w).onclick=()=>speakLines([{text:list[i],voice:'buttery'}]); $('#slow',w).onclick=()=>speakLines([{text:list[i],voice:'buttery'}],{rate:0.75});
    $('#chk',w).onclick=()=>{ const a=$('#ans',w).value.trim(); const norm=s=>s.toLowerCase().replace(/[^a-z0-9' ]/g,'').split(/\s+/).filter(Boolean); const want=norm(list[i]), got=norm(a); let ok=0; const diff=want.map((wd,k)=>{ const hit=got[k]===wd; if(hit) ok++; return `<span style="color:${hit?'var(--good)':'var(--bad)'}">${esc(list[i].split(/\s+/)[k]||wd)}</span>`; }).join(' '); $('#out',w).innerHTML=`<div class="explain en">${diff}<div class="small muted">${ok}/${want.length} ${isAr()?'كلمات صحيحة':'words correct'}</div></div>`; if(ok===want.length) addXP(5); };
    $('#nx',w).onclick=()=>{ i=(i+1)%list.length; upd(); }; upd();
  }

  /* ---------- WRITING ---------- */
  route('writing',(v,arg)=>{
    header(v,t('writing'), isAr()?'مهام Task 1 وTask 2 بمؤقت حقيقي وتقييم بمعايير الآيلتس الأربعة، مع نموذج إجابة وبنك عبارات':'Task 1 and Task 2 with a real timer and marking on the four IELTS criteria, plus a model answer and phrase bank');
    v.appendChild(el(strategiesBlock('writing')));
    if(arg){ const t2=WRITING_TASKS.task2.find(x=>x.id===arg), t1=WRITING_TASKS.task1.find(x=>x.id===arg); const task=t2?Object.assign({},t2,{kind:state.profile.variant,isTask1:false}):(t1?Object.assign({},t1,{isTask1:true}):null); if(task){ v.appendChild(writingEditor(task,{minutes:task.isTask1?20:40,minWords:task.isTask1?150:250,onResult:(res)=>{ state.profile.writingLog.push({at:Date.now(),taskId:task.id,band:res.band,ai:res.ai}); state.profile.history.push({at:Date.now(),kind:'writing-practice',value:res.band}); if(res.ai&&!task.isTask1){ state.profile.placement.writing={band:res.band,criteria:res.criteria,ai:true,wc:res.wc,taskId:task.id,at:Date.now()}; } addXP(40); save(true); }})); return; } }
    const tabs=el(`<div class="tabs"><button class="on" data-t="t2">Task 2</button><button data-t="t1">Task 1</button><button data-t="model">${isAr()?'نموذج Band 8':'Band 8 model'}</button><button data-t="phr">${isAr()?'بنك العبارات':'Phrase bank'}</button></div>`); v.appendChild(tabs); const pane=el('<div></div>'); v.appendChild(pane);
    const show=(k)=>{ $$('button',tabs).forEach(b=>b.classList.toggle('on',b.dataset.t===k)); if(k==='t2') pane.innerHTML=`<div class="grid g2">${WRITING_TASKS.task2.map(x=>`<a class="skill-tile" href="#writing-${x.id}"><span class="eyebrow">${esc(x.topic)} · ${esc(x.type)}</span><span class="small en">${esc(x.q)}</span>${state.profile.writingLog.some(l=>l.taskId===x.id)?`<span class="pill good">${isAr()?'تمت':'done'} · ${fmtBand(state.profile.writingLog.filter(l=>l.taskId===x.id).slice(-1)[0].band)}</span>`:''}</a>`).join('')}</div>`;
      else if(k==='t1') pane.innerHTML=`<div class="grid g2">${WRITING_TASKS.task1.filter(x=>x.kind===state.profile.variant||true).map(x=>`<a class="skill-tile" href="#writing-${x.id}"><span class="eyebrow">${x.kind==='general'?'General Training letter':'Academic'} · 20 min</span><b style="font-family:var(--display);font-size:1rem">${esc(x.title)}</b><span class="small muted en">${esc(x.q.slice(0,110))}…</span></a>`).join('')}</div>`;
      else if(k==='model'){ const m=WRITING_TASKS.model; const task=WRITING_TASKS.task2.find(x=>x.id===m.id); pane.innerHTML=`<div class="two"><div class="card"><span class="eyebrow">Task 2 · Band ${m.band} model</span><p class="en small muted" style="margin:6px 0 12px">${esc(task.q)}</p><div class="passage en" style="white-space:pre-wrap">${esc(m.text)}</div></div><div class="card stack sticky-side"><span class="eyebrow">${isAr()?'لماذا تستحق 8':'Why it scores 8'}</span><ul class="small en">${m.notes.map(n=>`<li>${esc(n)}</li>`).join('')}</ul></div></div>`; }
      else pane.innerHTML=`<div class="grid g2">${Object.entries(WRITING_TASKS.phrases).map(([k,arr])=>`<div class="card"><span class="eyebrow">${k}</span>${arr.map(p=>`<div class="phrase en"><span>${esc(p)}</span><button class="btn sm ghost" data-say="${esc(p)}">🔊</button></div>`).join('')}</div>`).join('')}</div>`;
      $$('[data-say]',pane).forEach(b=>b.onclick=()=>speakLines([{text:b.dataset.say}])); };
    $$('button',tabs).forEach(b=>b.onclick=()=>show(b.dataset.t)); show('t2');
  });

  /* ---------- SPEAKING ---------- */
  route('speaking',(v,arg)=>{
    header(v,t('speaking'), isAr()?'الأجزاء الثلاثة بالميكروفون، تقييم بالمعايير الرسمية، وتدريب نطق للأصوات الصعبة على العرب':'All three parts by microphone, marking on the official criteria, and pronunciation drills for sounds Arabic speakers find hard');
    v.appendChild(el(strategiesBlock('speaking')));
    if(arg==='full'){ const p1=A.shuffle(SPEAKING_BANK.part1)[0], p2=A.shuffle(SPEAKING_BANK.part2)[0], p3=A.shuffle(SPEAKING_BANK.part3)[0]; const plan=[{label:'Part 1',q:p1.qs[0]},{label:'Part 1',q:p1.qs[1]},{label:'Part 1',q:p1.qs[2]},{label:'Part 2 (2 minutes)',q:p2.card,bullets:p2.bullets,prep:60,talk:120},{label:'Part 3',q:p3.qs[0]},{label:'Part 3',q:p3.qs[1]},{label:'Part 3',q:p3.qs[2]}]; return speakingSession(v,plan,{title:'Full mock',onFinish:(res)=>{ state.profile.speakingLog.push({at:Date.now(),band:res.band,ai:res.ai}); if(res.band!=null){ state.profile.placement.speaking={band:res.band,criteria:res.criteria,ai:true,at:Date.now()}; state.profile.history.push({at:Date.now(),kind:'speaking',value:res.band}); } addXP(60); save(true); }}); }
    if(arg==='p2'){ const p2=A.shuffle(SPEAKING_BANK.part2)[0]; return speakingSession(v,[{label:'Part 2 (2 minutes)',q:p2.card,bullets:p2.bullets,prep:60,talk:120}],{title:'Part 2 cue card',onFinish:(res)=>{ state.profile.speakingLog.push({at:Date.now(),band:res.band,ai:res.ai}); addXP(30); save(true); }}); }
    if(arg==='p1'){ const p1=A.shuffle(SPEAKING_BANK.part1)[0]; return speakingSession(v,p1.qs.slice(0,3).map(q=>({label:'Part 1 · '+p1.topic,q})),{title:'Part 1',onFinish:(res)=>{ state.profile.speakingLog.push({at:Date.now(),band:res.band,ai:res.ai}); addXP(30); save(true); }}); }
    if(arg==='p3'){ const p3=A.shuffle(SPEAKING_BANK.part3)[0]; return speakingSession(v,p3.qs.slice(0,3).map(q=>({label:'Part 3 · '+p3.topic,q})),{title:'Part 3',onFinish:(res)=>{ state.profile.speakingLog.push({at:Date.now(),band:res.band,ai:res.ai}); addXP(30); save(true); }}); }
    if(arg==='pron') return pronDrill(v);
    v.appendChild(el(`<div class="grid g2">
      <a class="skill-tile" href="#speaking-full" style="border-color:var(--accent)"><span class="eyebrow">11–14 min</span><b style="font-family:var(--display);font-size:1.1rem">${isAr()?'محاكاة كاملة (الأجزاء 1-2-3)':'Full mock (Parts 1-2-3)'}</b><span class="small muted">${isAr()?'7 أسئلة وتقييم واحد شامل':'7 prompts, one combined assessment'}</span></a>
      <a class="skill-tile" href="#speaking-p1"><span class="eyebrow">Part 1 · 4–5 min</span><b style="font-family:var(--display);font-size:1.1rem">${isAr()?'أسئلة شخصية قصيرة':'Short personal questions'}</b><span class="small muted">${isAr()?'تدرب على طريقة إجابة + سبب + مثال':'Practise Answer + Reason + Example'}</span></a>
      <a class="skill-tile" href="#speaking-p2"><span class="eyebrow">Part 2 · 3–4 min</span><b style="font-family:var(--display);font-size:1.1rem">${isAr()?'بطاقة الموضوع (دقيقتان)':'Cue card (2-minute talk)'}</b><span class="small muted">${isAr()?'دقيقة تحضير ثم تحدث دقيقتين':'1 minute to prepare, 2 minutes to speak'}</span></a>
      <a class="skill-tile" href="#speaking-p3"><span class="eyebrow">Part 3 · 4–5 min</span><b style="font-family:var(--display);font-size:1.1rem">${isAr()?'نقاش مجرد':'Abstract discussion'}</b><span class="small muted">${isAr()?'آراء ومقارنات وتوقعات':'Opinions, comparisons, speculation'}</span></a>
      <a class="skill-tile" href="#speaking-pron"><span class="eyebrow">${isAr()?'النطق':'Pronunciation'}</span><b style="font-family:var(--display);font-size:1.1rem">${isAr()?'الأصوات الصعبة على العرب':'Sounds Arabic speakers find hard'}</b><span class="small muted">p/b · v/f · ship/sheep · asked · word stress</span></a>
    </div>`));
  });
  function pronDrill(v){
    const pairs=[['park','bark'],['pen','Ben'],['cap','cab'],['very','ferry'],['vote','float'],['live','leaf'],['ship','sheep'],['bit','beat'],['full','fool'],['think','sink'],['this','dis'],['asked','ask'],['months','mouths'],['texts','tests'],['world','word']];
    const stress=['PHOtograph','phoTOgrapher','photoGRAPHic','deVELop','deVELopment','ECOnomy','ecoNOMic','TECHnology','technoLOgical','comFORTable','VEGetable','INteresting'];
    const w=el(`<div class="grid g2"><div class="card stack"><span class="eyebrow">${isAr()?'أزواج الحد الأدنى: اسمع وكرر':'Minimal pairs: listen and repeat'}</span><p class="small muted">${isAr()?'العربية لا تملك /p/ و/v/ ولا تفرّق بين الحركات القصيرة والطويلة بنفس طريقة الإنجليزية. اسمع الفرق ثم سجّل نفسك.':'Arabic has no /p/ or /v/ and treats vowel length differently. Hear the contrast, then record yourself.'}</p>${pairs.map(([a,b])=>`<div class="phrase en"><span><b>${a}</b> / <b>${b}</b></span><span><button class="btn sm ghost" data-say="${a}">🔊 ${a}</button><button class="btn sm ghost" data-say="${b}">🔊 ${b}</button></span></div>`).join('')}</div>
      <div class="card stack"><span class="eyebrow">${isAr()?'نبر الكلمات':'Word stress'}</span><p class="small muted">${isAr()?'المقطع بالأحرف الكبيرة هو المنبور. النبر الخاطئ يجعل الكلمة غير مفهومة حتى لو كانت الحروف صحيحة.':'Capitals mark the stressed syllable. Wrong stress makes a word hard to understand even when every sound is right.'}</p>${stress.map(s=>`<div class="phrase en"><span class="mono">${s}</span><button class="btn sm ghost" data-say="${s.toLowerCase()}">🔊</button></div>`).join('')}
      <span class="eyebrow" style="margin-top:10px">${isAr()?'تدريب الجمل':'Sentence drill'}</span>${['Peter packed a big bag of very fresh vegetables.','I asked about the texts, but they said the tests were on the twelfth.','Please fill the full form before the fool arrives.'].map(s=>`<div class="phrase en"><span class="small">${esc(s)}</span><button class="btn sm ghost" data-say="${esc(s)}">🔊</button></div>`).join('')}</div></div>`);
    v.appendChild(w); $$('[data-say]',w).forEach(b=>b.onclick=()=>speakLines([{text:b.dataset.say,voice:'buttery'}],{rate:0.9}));
  }

  /* ---------- PROFESSIONAL ---------- */
  route('pro',(v,arg)=>{
    header(v,t('pro'), isAr()?'عروض تقديمية واجتماعات وإيميلات للمختصين التقنيين، مع تمرين عرض بتقييم فوري':'Presentations, meetings and emails for tech professionals, with a rehearsal mode and instant feedback');
    if(arg==='rehearse'){ const topic=A.shuffle(PRO_CONTENT.rehearsal)[0]; return speakingSession(v,[{label:'Presentation rehearsal (2–3 minutes)',q:topic,prep:120,talk:180}],{title:'Rehearsal',mode:'presentation',onFinish:(res)=>{ state.profile.speakingLog.push({at:Date.now(),band:res.band,ai:res.ai,mode:'pro'}); addXP(40); save(true); }}); }
    const tabs=el(`<div class="tabs"><button class="on" data-t="s">${isAr()?'هيكل العرض وعباراته':'Presentation structure'}</button><button data-t="p">${isAr()?'كلمات تقنية يُخطئ نطقها':'Tech words people mispronounce'}</button><button data-t="e">${isAr()?'إيميلات':'Emails'}</button></div>`); v.appendChild(tabs);
    v.appendChild(el(`<div class="card row between" style="margin-bottom:16px"><div><b>${isAr()?'تمرين عرض تقديمي':'Rehearse a presentation'}</b><div class="small muted">${isAr()?'موضوع عشوائي، دقيقتان تحضير، 3 دقائق كلام، ثم تقييم للهيكل والوضوح والإقناع واللغة':'Random brief, 2 minutes to prepare, 3 minutes to speak, then feedback on structure, clarity, persuasiveness and language'}</div></div><a class="btn primary" href="#pro-rehearse">▶ ${esc(t('start'))}</a></div>`));
    const pane=el('<div></div>'); v.appendChild(pane);
    const show=k=>{ $$('button',tabs).forEach(b=>b.classList.toggle('on',b.dataset.t===k));
      if(k==='s') pane.innerHTML=`<div class="grid g2">${PRO_CONTENT.structure.map((s,i)=>`<div class="card"><span class="eyebrow">${i+1}. ${esc(s.step)} · ${esc(s.ar)}</span>${s.phrases.map(p=>`<div class="phrase en"><span class="small">${esc(p)}</span><button class="btn sm ghost" data-say="${esc(p)}">🔊</button></div>`).join('')}</div>`).join('')}</div>`;
      else if(k==='p') pane.innerHTML=`<div class="card"><div class="table-wrap"><table class="en"><thead><tr><th>Word</th><th>IPA</th><th>Tip</th><th></th></tr></thead><tbody>${PRO_CONTENT.pronunciation.map(p=>`<tr><td><b>${esc(p.w)}</b></td><td class="mono">${esc(p.ipa)}</td><td>${esc(p.tip)}<div class="ar small muted">${esc(p.ar)}</div></td><td><button class="btn sm ghost" data-say="${esc(p.w)}">🔊</button></td></tr>`).join('')}</tbody></table></div></div>`;
      else pane.innerHTML=`<div class="grid g3">${PRO_CONTENT.emails.map(e=>`<div class="card stack"><span class="eyebrow">${esc(e.kind)}</span><b class="en">${esc(e.subject)}</b><pre class="en small" style="white-space:pre-wrap;font-family:var(--body);margin:0">${esc(e.body)}</pre></div>`).join('')}</div>`;
      $$('[data-say]',pane).forEach(b=>b.onclick=()=>speakLines([{text:b.dataset.say,voice:'rounded'}])); };
    $$('button',tabs).forEach(b=>b.onclick=()=>show(b.dataset.t)); show('s');
  });

  /* ---------- STUDY PLAN ---------- */
  route('plan',(v)=>{
    const p=state.profile, pz=p.placement, ov=A.overallBand();
    header(v,t('plan'), isAr()?'خطة أسبوعية مبنية على نتائجك وهدفك وتاريخ اختبارك':'A weekly plan built from your results, your target and your test date');
    const form=el(`<div class="card grid g3" style="margin-bottom:16px"><label>${esc(t('target'))}<select id="tg">${[5,5.5,6,6.5,7,7.5,8,8.5,9].map(b=>`<option ${p.target==b?'selected':''} value="${b}">${fmtBand(b)}</option>`).join('')}</select></label><label>${isAr()?'تاريخ الاختبار':'Test date'}<input type="date" id="td" value="${esc(p.testDate||'')}"></label><label>${isAr()?'ساعات الدراسة أسبوعياً':'Study hours per week'}<input type="number" id="hrs" min="2" max="40" value="${p.hours||8}"></label></div>`);
    v.appendChild(form); const out=el('<div></div>'); v.appendChild(out);
    const build=()=>{ p.target=Number($('#tg',form).value); p.testDate=$('#td',form).value; p.hours=Number($('#hrs',form).value)||8; save();
      const bands={listening:pz.listening&&pz.listening.band,reading:pz.reading&&pz.reading.band,writing:pz.writing&&pz.writing.band,speaking:pz.speaking&&pz.speaking.band};
      const known=Object.entries(bands).filter(([k,b])=>b!=null);
      if(!known.length){ out.innerHTML=`<div class="note warm">${isAr()?'أكمل اختبار تحديد المستوى أولاً لتكون الخطة مبنية على بياناتك.':'Complete the placement test first so the plan is based on your data.'} <a href="#placement">${esc(t('placement'))}</a></div>`; return; }
      const gaps=known.map(([k,b])=>({k,b,gap:Math.max(0,p.target-b)})).sort((a,b)=>b.gap-a.gap);
      const weeks=p.testDate?Math.max(1,Math.round((new Date(p.testDate)-Date.now())/6048e5)):12;
      const totalGap=gaps.reduce((a,g)=>a+g.gap,0)||1; const hrs=p.hours;
      const alloc=gaps.map(g=>({...g,h:Math.max(0.5,Math.round((0.15+0.85*g.gap/totalGap)*hrs*0.75*2)/2)}));
      const grammarH=Math.round(hrs*0.15*2)/2, vocabH=Math.round(hrs*0.10*2)/2;
      const maxGap=gaps[0].gap; const needed=Math.ceil(maxGap/0.5)*6;
      const tasks={listening:[isAr()?'جزء استماع واحد بأصوات طبيعية + مراجعة النص':'One listening part with natural voices + transcript review', isAr()?'10 دقائق إملاء يومياً':'10 minutes of dictation daily', isAr()?'بودكاست/TED بسرعة طبيعية 20 دقيقة':'20 minutes of podcast/TED at natural speed'],
        reading:[isAr()?'نص تدريبي بمؤقت (أقل من 20 دقيقة)':'One timed passage (under 20 minutes)', isAr()?'تحليل كل خطأ: لماذا كانت الإجابة الصحيحة؟':'Analyse every error: why was the answer right?', isAr()?'قراءة مقال من BBC/The Guardian وتلخيصه':'Read one BBC/Guardian article and summarise it'],
        writing:[isAr()?'مقال Task 2 كامل بمؤقت 40 دقيقة + تقييم':'One full Task 2 under 40 minutes + marking', isAr()?'إعادة كتابة الفقرة الأضعف بالتصحيحات':'Rewrite the weakest paragraph with the corrections', isAr()?'Task 1 واحد (20 دقيقة)':'One Task 1 (20 minutes)'],
        speaking:[isAr()?'محاكاة Part 2 يومياً (دقيقتان)':'Daily Part 2 mock (2 minutes)', isAr()?'محاكاة كاملة أسبوعياً + قراءة النص وعدّ الحشو':'Weekly full mock + read transcript and count fillers', isAr()?'تدريب نطق 10 دقائق':'10 minutes of pronunciation drills']};
      out.innerHTML=`<div class="grid g2"><div class="card stack"><span class="eyebrow">${isAr()?'الواقع':'Reality check'}</span>
        <p>${isAr()?`الدرجة الكلية الحالية <b>${ov?fmtBand(ov.band):'—'}</b>، الهدف <b>${fmtBand(p.target)}</b>. أكبر فجوة في <b>${t(gaps[0].k)}</b> (${gaps[0].gap.toFixed(1)} درجة).`:`Current overall <b>${ov?fmtBand(ov.band):'—'}</b>, target <b>${fmtBand(p.target)}</b>. Largest gap: <b>${t(gaps[0].k)}</b> (${gaps[0].gap.toFixed(1)} bands).`}</p>
        <p class="small">${isAr()?`بمعدل تحسّن واقعي (نصف درجة كل 6 أسابيع تقريباً مع ${hrs} ساعة أسبوعياً)، تحتاج حوالي <b>${needed} أسبوعاً</b>. لديك <b>${weeks} أسبوعاً</b>${p.testDate?'':' (افتراضياً)'}. ${needed>weeks?'الفجوة أكبر من الوقت المتاح: زد الساعات أو ركّز على المهارة الأضعف فقط أو أجّل الاختبار.':'الوقت كافٍ إذا التزمت بالخطة.'}`:`At a realistic rate (about half a band every 6 weeks at ${hrs} h/week) you need roughly <b>${needed} weeks</b>. You have <b>${weeks} weeks</b>${p.testDate?'':' (assumed)'}. ${needed>weeks?'The gap is bigger than the time available: add hours, focus only on the weakest skill, or move the test date.':'The time is sufficient if you follow the plan.'}`}</p>
        <table><thead><tr><th>${isAr()?'المهارة':'Skill'}</th><th>${isAr()?'الآن':'Now'}</th><th>${isAr()?'الفجوة':'Gap'}</th><th>${isAr()?'ساعات/أسبوع':'h/week'}</th></tr></thead><tbody>${alloc.map(a=>`<tr><td>${t(a.k)}</td><td class="mono">${fmtBand(a.b)}</td><td class="mono">${a.gap.toFixed(1)}</td><td class="mono">${a.h}</td></tr>`).join('')}<tr><td>${t('grammar')}</td><td class="mono">${pz.grammar?pz.grammar.level:'—'}</td><td></td><td class="mono">${grammarH}</td></tr><tr><td>${t('vocab')}</td><td></td><td></td><td class="mono">${vocabH}</td></tr></tbody></table></div>
        <div class="card stack"><span class="eyebrow">${isAr()?'روتينك الأسبوعي':'Your weekly routine'}</span>${alloc.map(a=>`<div><b>${t(a.k)} · ${a.h} h</b><ul class="small">${tasks[a.k].map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}<div><b>${t('grammar')} · ${grammarH} h</b><ul class="small"><li>${isAr()?'درسان من القائمة المقترحة + اختبارهما':'Two lessons from the suggested list + their quizzes'}</li></ul></div><div><b>${t('vocab')} · ${vocabH} h</b><ul class="small"><li>${isAr()?'جولة كتابة يومية (8 كلمات) + مراجعة المستحق':'One typing round daily (8 words) + due reviews'}</li></ul></div><p class="tiny muted">${isAr()?'أعد اختبار تحديد المستوى كل 4 أسابيع لتحديث الخطة.':'Retake the placement test every 4 weeks to refresh the plan.'}</p></div></div>`; };
    $$('select,input',form).forEach(x=>x.onchange=build); build();
  });

  /* ---------- PROGRESS ---------- */
  route('progress',(v)=>{
    const p=state.profile, pz=p.placement, ov=A.overallBand();
    header(v,t('progress'), isAr()?'تاريخ درجاتك ونشاطك':'Your band history and activity');
    const vals={listening:pz.listening&&pz.listening.band,reading:pz.reading&&pz.reading.band,writing:pz.writing&&pz.writing.band,speaking:pz.speaking&&pz.speaking.band};
    const hist=p.history.filter(h=>['listening','reading','writing','speaking','grammar'].includes(h.kind));
    v.appendChild(el(`<div class="grid g4" style="margin-bottom:16px"><div class="card"><span class="eyebrow">${esc(t('overall'))}</span><div style="font-family:var(--display);font-size:2rem;font-weight:700">${ov?fmtBand(ov.band):'—'}</div></div><div class="card"><span class="eyebrow">XP</span><div style="font-family:var(--display);font-size:2rem;font-weight:700">${p.xp||0}</div></div><div class="card"><span class="eyebrow">${esc(t('streak'))}</span><div style="font-family:var(--display);font-size:2rem;font-weight:700">${p.streak.count||0}</div></div><div class="card"><span class="eyebrow">${isAr()?'مقالات مقيّمة':'Essays marked'}</span><div style="font-family:var(--display);font-size:2rem;font-weight:700">${p.writingLog.length}</div></div></div>`));
    v.appendChild(el(`<div class="grid g2"><div class="card"><span class="eyebrow">${isAr()?'ملف المهارات':'Skill profile'}</span>${A.radar(vals)}</div><div class="card"><span class="eyebrow">${isAr()?'تطور الدرجات':'Band history'}</span>${histChart(hist)}<div class="small muted" style="margin-top:8px">${hist.length?hist.slice(-8).reverse().map(h=>`<div class="row between"><span>${t(h.kind)}</span><span class="mono">${fmtBand(h.value)} · ${new Date(h.at).toLocaleDateString()}</span></div>`).join(''):(isAr()?'لا توجد نتائج بعد':'No results yet')}</div></div></div>`));
    const srs=Object.values(p.srs); const mastered=srs.filter(s=>s.n>=3).length;
    v.appendChild(el(`<div class="grid g3" style="margin-top:16px"><div class="card"><span class="eyebrow">${t('grammar')}</span><div class="bar" style="margin:8px 0"><i style="width:${Object.keys(p.lessons).length/GRAMMAR_LESSONS.length*100}%"></i></div><span class="small">${Object.keys(p.lessons).length}/${GRAMMAR_LESSONS.length} ${isAr()?'درساً':'lessons'}</span></div><div class="card"><span class="eyebrow">${t('vocab')}</span><div class="bar" style="margin:8px 0"><i style="width:${srs.length?mastered/srs.length*100:0}%"></i></div><span class="small">${mastered} ${isAr()?'كلمة متقنة من':'mastered of'} ${srs.length}</span></div><div class="card"><span class="eyebrow">${t('speaking')}</span><span class="small">${p.speakingLog.length} ${isAr()?'جلسة مسجّلة':'recorded sessions'}</span></div></div>`));
    const btn=el(`<div class="row" style="margin-top:16px"><button class="btn sm ghost" id="exp">${isAr()?'تصدير بياناتي (JSON)':'Export my data (JSON)'}</button><button class="btn sm ghost" id="reset">${isAr()?'مسح كل البيانات':'Reset everything'}</button></div>`); v.appendChild(btn);
    $('#exp',btn).onclick=()=>{ navigator.clipboard.writeText(JSON.stringify(p)).then(()=>toast('Copied to clipboard')).catch(()=>toast('Copy failed')); };
    $('#reset',btn).onclick=()=>{ if($('#reset',btn).dataset.c){ state.profile=Object.assign({},JSON.parse(JSON.stringify({v:1,lang:state.lang,variant:'academic',target:7,testDate:'',placement:{},history:[],lessons:{},srs:{},writingLog:[],speakingLog:[],streak:{last:'',count:0},xp:0}))); save(true); A.go('home'); A.render(); } else { $('#reset',btn).dataset.c='1'; $('#reset',btn).textContent=isAr()?'اضغط مرة أخرى للتأكيد':'Click again to confirm'; } };
  });
  function histChart(hist){ if(!hist.length) return ''; const W=420,H=160,pad=28; const xs=hist.map((h,i)=>pad+i*(W-pad*2)/Math.max(1,hist.length-1)); const y=b=>H-pad-(b-3)/6*(H-pad*2); const col={listening:'var(--info)',reading:'var(--accent)',writing:'var(--warm)',speaking:'var(--good)',grammar:'var(--muted)'};
    let s=`<svg class="band-hist svgchart" viewBox="0 0 ${W} ${H}">`; [3,5,7,9].forEach(b=>{ s+=`<line x1="${pad}" x2="${W-pad}" y1="${y(b)}" y2="${y(b)}" stroke="var(--line)" stroke-dasharray="2 3"/><text x="${pad-6}" y="${y(b)+4}" text-anchor="end">${b}</text>`; });
    const kinds=[...new Set(hist.map(h=>h.kind))]; kinds.forEach(k=>{ const pts=hist.map((h,i)=>h.kind===k?[xs[i],y(h.value)]:null).filter(Boolean); if(pts.length>1) s+=`<polyline points="${pts.map(p=>p.join(',')).join(' ')}" fill="none" stroke="${col[k]}" stroke-width="2"/>`; pts.forEach(p=>s+=`<circle cx="${p[0]}" cy="${p[1]}" r="3.5" fill="${col[k]}"/>`); });
    kinds.forEach((k,i)=>{ s+=`<rect x="${pad+i*80}" y="${H-12}" width="9" height="9" fill="${col[k]}"/><text x="${pad+i*80+12}" y="${H-4}">${t(k)}</text>`; }); return s+'</svg>'; }

  /* ---------- RESOURCES ---------- */
  route('resources',(v)=>{
    header(v,t('resources'), isAr()?'مصادر رسمية ومجانية تم التحقق منها، مرتبة حسب المهارة':'Verified official and free resources, organised by skill');
    v.appendChild(el(`<div class="note" style="margin-bottom:16px">${isAr()?'الترتيب المقترح: اختبارات IELTS الرسمية للمحاكاة الكاملة، Write & Improve للكتابة اليومية، BBC Learning English للاستماع، وهذه المنصة للتشخيص والتدريب الموجّه.':'Suggested order: official IELTS tests for full simulations, Write & Improve for daily writing, BBC Learning English for listening, and this platform for diagnosis and targeted practice.'}</div>`));
    v.appendChild(el(`<div class="stack">${RESOURCES.map(c=>`<div class="card"><h3 style="margin-bottom:10px">${esc(isAr()?c.catAr:c.cat)}</h3><div class="grid g2">${c.items.map(i=>`<div class="stack" style="gap:2px"><a href="${esc(i.u)}" target="_blank" rel="noopener"><b>${esc(i.n)}</b></a><span class="small en">${esc(i.d)}</span><span class="small muted ar">${esc(i.da)}</span></div>`).join('')}</div></div>`).join('')}</div>`));
  });
})(window.App);
