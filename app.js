/* Band Nine Lab — core: i18n, state, capabilities, router, placement engine, scoring */
window.App = (function(){
  const LEVELS = ['A1','A2','B1','B2','C1','C2'];
  const LEVEL_BAND = {A1:3, A2:4, B1:5, B2:6, C1:7, C2:8.5};
  const ACAD_TABLE = [[39,9],[37,8.5],[35,8],[32,7.5],[30,7],[26,6.5],[23,6],[18,5.5],[16,5],[13,4.5],[11,4],[8,3.5],[6,3],[4,2.5],[0,2]];
  const GT_TABLE = [[40,9],[39,8.5],[37,8],[36,7.5],[34,7],[32,6.5],[30,6],[27,5.5],[23,5],[19,4.5],[15,4],[12,3.5],[9,3],[6,2.5],[0,2]];

  /* ---------- i18n ---------- */
  const T = {
    home:{en:'Home',ar:'الرئيسية'}, placement:{en:'Placement test',ar:'اختبار تحديد المستوى'}, grammar:{en:'Grammar',ar:'القواعد'}, vocab:{en:'Vocabulary',ar:'المفردات'},
    reading:{en:'Reading',ar:'القراءة'}, listening:{en:'Listening',ar:'الاستماع'}, writing:{en:'Writing',ar:'الكتابة'}, speaking:{en:'Speaking',ar:'التحدث'},
    pro:{en:'Professional English',ar:'الإنجليزية المهنية'}, plan:{en:'Study plan',ar:'خطة الدراسة'}, progress:{en:'Progress',ar:'التقدم'}, resources:{en:'Resources',ar:'المصادر'},
    skills:{en:'Skills',ar:'المهارات'}, build:{en:'Build',ar:'التطوير'}, track:{en:'Track',ar:'المتابعة'},
    start:{en:'Start',ar:'ابدأ'}, next:{en:'Next',ar:'التالي'}, back:{en:'Back',ar:'رجوع'}, submit:{en:'Submit',ar:'إرسال'}, check:{en:'Check answers',ar:'تحقق من الإجابات'}, continue_:{en:'Continue',ar:'متابعة'},
    skip:{en:'Do this section later',ar:'أكمل هذا القسم لاحقاً'}, finish:{en:'Finish',ar:'إنهاء'}, retry:{en:'Try again',ar:'حاول مرة أخرى'},
    overall:{en:'Overall band',ar:'الدرجة الكلية'}, estimated:{en:'estimated',ar:'تقديري'}, notTaken:{en:'Not taken yet',ar:'لم يُختبر بعد'},
    yourLevel:{en:'Your level',ar:'مستواك'}, target:{en:'Target band',ar:'الدرجة المستهدفة'}, lang:{en:'العربية',ar:'English'},
    theme:{en:'Theme',ar:'المظهر'}, streak:{en:'day streak',ar:'يوم متتالي'}, words:{en:'words',ar:'كلمة'}, minutes:{en:'min',ar:'د'},
    aiOff:{en:'AI feedback is not available in this view. You can still practise and use the self-check.',ar:'تقييم الذكاء الاصطناعي غير متاح هنا. يمكنك التدرب واستخدام التقييم الذاتي.'},
    thinking:{en:'Evaluating… this usually takes 20–60 seconds.',ar:'جارٍ التقييم… عادة يستغرق 20-60 ثانية.'},
  };
  const state = { lang:'en', cap:{sample:null,tts:null,dictation:null,db:null,user:null,downloads:null}, uid:null, profile:null, saveTimer:null };
  const t = k => (T[k]||{})[state.lang] || (T[k]||{}).en || k;
  const isAr = () => state.lang==='ar';
  const esc = s => String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const el = (html) => { const d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstElementChild; };
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
  const today = () => new Date().toISOString().slice(0,10);

  /* ---------- state & persistence ---------- */
  function defaultProfile(){ return { v:1, lang:'en', variant:'academic', target:7, testDate:'', placement:{}, history:[], lessons:{}, srs:{}, writingLog:[], speakingLog:[], streak:{last:'',count:0}, xp:0, updatedAt:0 }; }
  function load(){
    let p=null; try{ p=JSON.parse(localStorage.getItem('bnl-profile')||'null'); }catch(e){}
    state.profile = Object.assign(defaultProfile(), p||{});
    state.lang = state.profile.lang || 'en';
  }
  function save(immediate){
    const p=state.profile; p.lang=state.lang; p.updatedAt=Date.now();
    try{ localStorage.setItem('bnl-profile', JSON.stringify(p)); }catch(e){}
    if(state.cap.db && state.uid){
      clearTimeout(state.saveTimer);
      const doWrite = async()=>{ try{ await state.cap.db.doc('data/users/'+state.uid+'/profile').set(JSON.parse(JSON.stringify(p))); }catch(e){} };
      if(immediate) doWrite(); else state.saveTimer=setTimeout(doWrite, 1500);
    }
  }
  function touchStreak(){
    const s=state.profile.streak, d=today();
    if(s.last===d) return;
    const y=new Date(Date.now()-864e5).toISOString().slice(0,10);
    s.count = (s.last===y) ? s.count+1 : 1; s.last=d; save();
  }
  function addXP(n){ state.profile.xp=(state.profile.xp||0)+n; touchStreak(); save(); }

  async function initCaps(){
    if(!window.claude || !claude.use) return;
    const names=['sample','tts','dictation','db','user','downloads'];
    await Promise.all(names.map(async n=>{ try{ state.cap[n]=await claude.use(n); }catch(e){ state.cap[n]=null; } }));
    if(state.cap.user && state.cap.db){
      try{ state.uid = await state.cap.user.id(); }catch(e){ state.uid=null; }
      if(state.uid){
        try{
          const snap = await state.cap.db.doc('data/users/'+state.uid+'/profile').get();
          if(snap.exists){ const remote=snap.data(); if((remote.updatedAt||0) > (state.profile.updatedAt||0)){ state.profile=Object.assign(defaultProfile(), remote); state.lang=state.profile.lang||state.lang; render(); } }
        }catch(e){}
      }
    }
  }

  /* ---------- scoring ---------- */
  function rawToBand(raw, outOf, variant){
    const scaled = Math.round(raw/outOf*40);
    const table = (variant==='general') ? GT_TABLE : ACAD_TABLE;
    for(const [min,band] of table){ if(scaled>=min) return band; }
    return 2;
  }
  function roundBand(avg){ const f=Math.floor(avg), d=avg-f; if(d<0.25) return f; if(d<0.75) return f+0.5; return f+1; }
  function bandToCEFR(b){ if(b==null) return null; if(b>=8.5) return 'C2'; if(b>=7) return 'C1'; if(b>=5.5) return 'B2'; if(b>=4) return 'B1'; if(b>=3) return 'A2'; return 'A1'; }
  function overallBand(){
    const p=state.profile.placement; const bands=['listening','reading','writing','speaking'].map(k=>p[k]&&p[k].band).filter(b=>b!=null);
    if(!bands.length) return null;
    return { band: roundBand(bands.reduce((a,b)=>a+b,0)/bands.length), complete: bands.length===4, n:bands.length };
  }
  function fmtBand(b){ return b==null?'—':(Number.isInteger(b)?b+'.0':String(b)); }

  /* ---------- router & shell ---------- */
  const NAV = [
    {sec:'track'}, {id:'home',ic:'⌂'}, {id:'placement',ic:'◎'}, {id:'progress',ic:'▤'}, {id:'plan',ic:'▦'},
    {sec:'skills'}, {id:'listening',ic:'♪'}, {id:'reading',ic:'≡'}, {id:'writing',ic:'✎'}, {id:'speaking',ic:'◉'},
    {sec:'build'}, {id:'grammar',ic:'§'}, {id:'vocab',ic:'⌨'}, {id:'pro',ic:'▶'}, {id:'resources',ic:'⚑'}
  ];
  const routes = {};
  function route(id, fn){ routes[id]=fn; }
  function current(){ const h=(location.hash||'#home').slice(1); const [id, ...rest]=h.split('-'); return {id: routes[id]?id:'home', arg: rest.join('-')}; }
  function go(h){ location.hash=h; }
  function renderShell(){
    const {id}=current();
    const links = NAV.map(n=> n.sec ? `<div class="sec">${esc(t(n.sec))}</div>` : `<a href="#${n.id}" class="${id===n.id?'active':''}"><span class="ic">${n.ic}</span>${esc(t(n.id))}</a>`).join('');
    $('#rail').innerHTML = `<div class="brand"><div class="logo">9.0</div><b>Band Nine Lab</b></div><nav class="nav">${links}</nav>
      <div class="rail-foot"><button class="btn sm ghost" id="langBtn">${esc(t('lang'))}</button><div class="tiny muted">${esc(isAr()?'الهدف':'Target')}: ${fmtBand(state.profile.target)} · ${esc(isAr()?'سلسلة':'Streak')}: ${state.profile.streak.count||0}</div></div>`;
    const mob=['home','placement','listening','reading','writing','speaking','grammar','vocab','pro','progress'];
    $('#tabs').innerHTML = mob.map(m=>{const n=NAV.find(x=>x.id===m); return `<a href="#${m}" class="${id===m?'active':''}"><span class="ic">${n.ic}</span>${esc(t(m))}</a>`;}).join('');
    $('#langBtn').onclick=()=>{ state.lang=isAr()?'en':'ar'; save(); render(); };
    document.documentElement.setAttribute('dir', isAr()?'rtl':'ltr');
    document.documentElement.lang = isAr()?'ar':'en';
  }
  function render(){
    renderShell();
    const {id,arg}=current(); const v=$('#view'); v.innerHTML='';
    v.appendChild(el(`<div class="mob-head"><div class="brand" style="padding:0"><div class="logo">9.0</div><b>Band Nine Lab</b></div><button class="btn sm ghost" id="langBtn2">${esc(t('lang'))}</button></div>`));
    $('#langBtn2').onclick=()=>{ state.lang=isAr()?'en':'ar'; save(); render(); };
    try{ routes[id](v, arg); }catch(e){ v.appendChild(el(`<div class="card"><h2>Something went wrong</h2><p class="muted">${esc(e.message)}</p></div>`)); console.error(e); }
    window.scrollTo(0,0);
  }
  function toast(msg){ const x=$('#toast'); x.textContent=msg; x.hidden=false; clearTimeout(x._t); x._t=setTimeout(()=>x.hidden=true, 2600); }

  /* ---------- speech helpers (TTS with browser fallback) ---------- */
  let synthVoices=[];
  function pickSynthVoice(name){
    if(!synthVoices.length && window.speechSynthesis) synthVoices=speechSynthesis.getVoices();
    const en=synthVoices.filter(v=>/^en/i.test(v.lang));
    if(!en.length) return null;
    const idx = {airy:0, rounded:1, buttery:2, glassy:3}[name]||0;
    return en[idx % en.length];
  }
  async function speakLines(lines, opts={}){
    // lines: [{text, voice}] ; returns promise resolved when done. opts.onLine(i)
    if(state.cap.tts){
      try{
        const tts=state.cap.tts;
        if(opts.onLine){ tts.onLine(({id})=>{ if(id!=null) opts.onLine(Number(id)); }); }
        await tts.speak(lines.map((l,i)=>({text:l.text, voice:l.voice||'buttery', id:String(i), language:'en', rate:opts.rate||1})));
        return true;
      }catch(e){ if(e && e.code==='viewer_stopped') return false; /* fall through to browser */ }
    }
    if(!window.speechSynthesis) return false;
    return new Promise(res=>{
      speechSynthesis.cancel();
      let i=0;
      const next=()=>{ if(i>=lines.length){res(true);return;} const u=new SpeechSynthesisUtterance(lines[i].text); u.lang='en-GB'; u.rate=opts.rate||0.95; const v=pickSynthVoice(lines[i].voice); if(v) u.voice=v; if(opts.onLine) opts.onLine(i); u.onend=()=>{i++;next();}; u.onerror=()=>{i++;next();}; speechSynthesis.speak(u); };
      next();
    });
  }
  function stopSpeech(){ try{ state.cap.tts && state.cap.tts.stop(); }catch(e){} try{ window.speechSynthesis && speechSynthesis.cancel(); }catch(e){} }
  if(window.speechSynthesis){ speechSynthesis.onvoiceschanged=()=>{ synthVoices=speechSynthesis.getVoices(); }; }

  /* ---------- AI evaluation ---------- */
  function descriptorText(kind){
    const d=BAND_DESCRIPTORS[kind]; return Object.keys(d.bands).map(b=>`Band ${b}: `+d.criteria.map((c,i)=>`${c}: ${d.bands[b][i]}`).join(' | ')).join('\n');
  }
  async function evaluateWriting(task, text, onText){
    const sample=state.cap.sample; if(!sample) throw {code:'not_granted'};
    const prompt = `You are a certified IELTS Writing examiner. Assess the candidate's response strictly using the public IELTS Writing band descriptors below. Be accurate and consistent with real IELTS marking: do not inflate. Count words. If the response is under the minimum length, under-length responses are penalised in Task Achievement/Response.

TASK (${task.kind==='general'?'General Training':'Academic'} ${task.isTask1?'Task 1':'Task 2'}):
${task.q}

BAND DESCRIPTORS (public version):
${descriptorText('writing')}

CANDIDATE RESPONSE:
"""
${text.slice(0,12000)}
"""

Reply with ONLY a JSON object of this shape:
{"word_count":number,"band":number,"criteria":{"tr":number,"cc":number,"lr":number,"gra":number},"summary":"2-3 sentences in English on the overall level","strengths":["..."],"errors":[{"original":"exact phrase from the text","correction":"corrected phrase","rule":"short explanation in English"}],"vocabulary_upgrades":[{"basic":"word used","better":"more precise alternative"}],"improved_paragraph":"rewrite the weakest paragraph at Band 8 level, keeping the candidate's ideas","advice_ar":"3-4 sentences of practical advice in Arabic (Saudi dialect acceptable) on what to fix first to reach the next band","next_band_steps":["3 concrete steps in English"]}
Bands are whole or half numbers from 1 to 9. "band" is the average of the four criteria rounded to the nearest half. Include at least 4 errors if the text has them, quoting exact phrases.`;
    return sample.json(prompt, {onText, modelTier:'default', cache:false});
  }
  async function evaluateSpeaking(parts, onText, mode){
    const sample=state.cap.sample; if(!sample) throw {code:'not_granted'};
    const transcript = parts.map(p=>`[${p.label}] Q: ${p.q}\nA: ${p.a}`).join('\n\n');
    const focus = mode==='presentation' ? 'This is a rehearsal of a professional presentation by an IT professional. Also comment on structure, signposting, clarity for a non-technical audience and persuasiveness.' : 'This is a simulated IELTS Speaking test.';
    const prompt = `You are a certified IELTS Speaking examiner. ${focus} You receive a machine transcript of the candidate's spoken answers (punctuation may be missing; do not penalise punctuation). Assess Fluency & Coherence, Lexical Resource and Grammatical Range & Accuracy using the public IELTS Speaking band descriptors below. You cannot hear the audio, so do NOT assess Pronunciation; set it to null.

BAND DESCRIPTORS:
${descriptorText('speaking')}

TRANSCRIPT:
"""
${transcript.slice(0,12000)}
"""

Reply with ONLY a JSON object:
{"band":number,"criteria":{"fc":number,"lr":number,"gra":number,"pron":null},"summary":"2-3 sentences in English","fillers_and_repetition":["words or phrases the candidate overused"],"strengths":["..."],"errors":[{"original":"exact phrase","correction":"corrected","rule":"short explanation"}],"better_answer":"a model Band 8 answer to ONE of the questions, 80-120 words, natural spoken style","vocabulary_upgrades":[{"basic":"...","better":"..."}],"advice_ar":"3-4 sentences of practical advice in Arabic on what to fix first","next_band_steps":["3 concrete steps in English"]}
"band" is the average of fc, lr and gra rounded to the nearest half. Be realistic: short, simple answers with basic vocabulary are Band 5-6, not 7.`;
    return sample.json(prompt, {onText, modelTier:'default', cache:false});
  }
  function heuristicWriting(text, min){
    const words = text.trim().split(/\s+/).filter(Boolean); const wc=words.length;
    const sents = text.split(/[.!?]+/).filter(s=>s.trim().length>3); const avg = wc/Math.max(1,sents.length);
    const linkers = (text.match(/\b(however|moreover|furthermore|therefore|consequently|although|whereas|despite|in addition|for instance|for example|in conclusion|on the other hand|nevertheless)\b/gi)||[]).length;
    const complex = (text.match(/\b(which|who|that|because|if|unless|while|although|whereas)\b/gi)||[]).length;
    const contractions = (text.match(/\b\w+'(t|s|re|ve|ll|d)\b/g)||[]).length;
    let band = 5;
    if(wc>=min) band+=0.5; if(wc>=min+30) band+=0.5;
    if(linkers>=3) band+=0.5; if(complex>=6) band+=0.5; if(avg>=14 && avg<=24) band+=0.5;
    if(contractions>2) band-=0.5; if(wc<min*0.8) band-=1;
    band=Math.max(3,Math.min(7,band));
    return {band, wc, linkers, complex, contractions, avg:Math.round(avg)};
  }

  /* ---------- HOME ---------- */
  route('home',(v)=>{
    const p=state.profile, ov=overallBand(); const pl=p.placement;
    const gl = pl.grammar ? pl.grammar.level : null;
    const tiles = ['listening','reading','writing','speaking'].map(k=>{ const r=pl[k]; return `<a class="skill-tile" href="#${k}"><span class="eyebrow">${esc(t(k))}</span><span class="band ${r?'':'none'}">${r?fmtBand(r.band):esc(t('notTaken'))}</span><span class="small muted">${r?('CEFR '+bandToCEFR(r.band)+' · '+new Date(r.at).toLocaleDateString()):(isAr()?'ابدأ من اختبار تحديد المستوى':'Start with the placement test')}</span></a>`; }).join('');
    v.appendChild(el(`<section class="hero">
      <div class="card stack">
        <span class="eyebrow">${esc(isAr()?'منصتك الشخصية للآيلتس والإنجليزية المهنية':'Your personal IELTS & professional English lab')}</span>
        <h1>${ov ? (isAr()?'درجتك التقديرية الحالية':'Your current estimated band') : (isAr()?'ابدأ بتحديد مستواك بدقة':'Start by measuring your level precisely')}</h1>
        ${ov ? `<div class="row"><span style="font-family:var(--display);font-size:3.2rem;font-weight:700;line-height:1">${fmtBand(ov.band)}</span><div class="stack" style="gap:2px"><span class="pill accent">CEFR ${bandToCEFR(ov.band)}</span><span class="small muted">${ov.complete?(isAr()?'مبني على المهارات الأربع':'Based on all four skills'):(isAr()?`مبني على ${ov.n} من 4 مهارات`:`Based on ${ov.n} of 4 skills`)}</span></div></div>` : ''}
        <p class="lead">${isAr()?'اختبار تحديد المستوى يقيس القواعد والمفردات بشكل تكيفي، ثم القراءة والاستماع والكتابة والتحدث بأسئلة بنفس نمط الآيلتس، ويعطيك درجة تقديرية لكل مهارة مع نقاط ضعفك بالتحديد.':'The placement test measures grammar and vocabulary adaptively, then Reading, Listening, Writing and Speaking with IELTS-style tasks, and gives you an estimated band per skill with your specific weak points.'}</p>
        <div class="row"><a class="btn primary" href="#placement">${ov?(isAr()?'أعد الاختبار':'Retake placement'):esc(t('placement'))}</a><a class="btn" href="#plan">${esc(t('plan'))}</a></div>
      </div>
      <div class="card stack">
        <span class="eyebrow">${esc(isAr()?'اليوم':'Today')}</span>
        <div class="row"><span class="lvl">${gl||'?'}</span><div><b>${esc(isAr()?'مستوى القواعد والمفردات':'Grammar & vocabulary level')}</b><div class="small muted">${gl?(isAr()?'من الاختبار التكيفي':'from the adaptive test'):(isAr()?'غير محدد بعد':'not measured yet')}</div></div></div>
        <div class="row between"><span>${esc(isAr()?'سلسلة الأيام':'Streak')}</span><b class="mono">${p.streak.count||0} ${esc(isAr()?'يوم':'days')}</b></div>
        <div class="row between"><span>${esc(isAr()?'دروس القواعد المكتملة':'Grammar lessons done')}</span><b class="mono">${Object.keys(p.lessons).length}/${GRAMMAR_LESSONS.length}</b></div>
        <div class="row between"><span>${esc(isAr()?'كلمات في المراجعة':'Words in review')}</span><b class="mono">${Object.keys(p.srs).length}</b></div>
        <div class="row between"><span>${esc(t('target'))}</span><b class="mono">${fmtBand(p.target)}</b></div>
        <a class="btn sm" href="#vocab">${isAr()?'تدريب كتابة 5 دقائق':'5-minute typing drill'}</a>
      </div>
    </section>`));
    v.appendChild(el(`<h2 style="margin:4px 0 12px">${esc(isAr()?'المهارات الأربع':'The four skills')}</h2>`));
    v.appendChild(el(`<div class="grid g4">${tiles}</div>`));
    const weak = pl.grammar && pl.grammar.weak && pl.grammar.weak.length ? pl.grammar.weak : null;
    v.appendChild(el(`<div class="grid g2" style="margin-top:20px">
      <div class="card stack"><span class="eyebrow">${isAr()?'ابدأ من هنا':'Where to start'}</span>
        ${weak ? `<p>${isAr()?'أضعف مواضيعك في القواعد:':'Your weakest grammar topics:'}</p><div>${weak.map(w=>`<span class="chip warn">${esc(GRAMMAR_TOPICS[w]?GRAMMAR_TOPICS[w][state.lang]:w)}</span>`).join('')}</div><a class="btn sm primary" href="#grammar">${isAr()?'افتح دروس القواعد المقترحة':'Open the suggested grammar lessons'}</a>` : `<p class="muted">${isAr()?'بعد اختبار تحديد المستوى ستظهر هنا المواضيع التي تحتاج تركيزاً.':'After the placement test, the topics you need most will appear here.'}</p>`}
      </div>
      <div class="card stack"><span class="eyebrow">${isAr()?'كيف يعمل التقييم':'How scoring works'}</span>
        <p class="small">${isAr()?'القراءة والاستماع: عدد الإجابات الصحيحة يُحوَّل إلى درجة بجدول التحويل الرسمي. الكتابة والتحدث: يقيّمها الذكاء الاصطناعي حسب معايير الآيلتس الأربعة المعلنة. الدرجة الكلية = متوسط المهارات الأربع مقرّباً لأقرب نصف درجة، تماماً كالاختبار الحقيقي. هذه تقديرات تدريبية وليست نتيجة رسمية.':'Reading and Listening: correct answers are converted with the official raw-score table. Writing and Speaking: AI marks against the four public IELTS criteria. Overall = average of the four, rounded to the nearest half band, exactly as in the real test. These are practice estimates, not an official result.'}</p>
      </div></div>`));
  });

  /* ---------- PLACEMENT ---------- */
  const PL_STEPS = ['intro','grammar','reading','listening','writing','speaking','results'];
  let pl = null; // live placement session
  route('placement',(v,arg)=>{
    if(!pl || arg==='new'){ pl={step:0}; if(arg==='new') go('placement'); }
    const steps=[['grammar',t('grammar')],['reading',t('reading')],['listening',t('listening')],['writing',t('writing')],['speaking',t('speaking')]];
    const done=state.profile.placement;
    const stepIdx=pl.step;
    const prog = steps.map((s,i)=>`<span class="pill ${done[s[0]]?'good':(PL_STEPS[stepIdx]===s[0]?'accent':'')}">${i+1}. ${esc(s[1])}${done[s[0]]?' ✓':''}</span>`).join(' ');
    v.appendChild(el(`<div class="topbar"><div><h1>${esc(t('placement'))}</h1><div class="crumbs">${isAr()?'خمسة أقسام · حوالي 75 دقيقة كاملة، أو قسماً واحداً في كل مرة':'Five sections · about 75 minutes in total, or one section at a time'}</div></div><div class="row">${prog}</div></div>`));
    const stepName=PL_STEPS[stepIdx];
    if(stepName==='intro') plIntro(v);
    else if(stepName==='grammar') plGrammar(v);
    else if(stepName==='reading') plReading(v);
    else if(stepName==='listening') plListening(v);
    else if(stepName==='writing') plWriting(v);
    else if(stepName==='speaking') plSpeaking(v);
    else plResults(v);
  });
  function plNext(){ pl.step++; render(); }
  function plIntro(v){
    const p=state.profile;
    v.appendChild(el(`<div class="grid g2">
      <div class="card stack">
        <h2>${isAr()?'قبل أن تبدأ':'Before you start'}</h2>
        <p class="small">${isAr()?'الاختبار يحاكي الآيلتس المحوسب: مؤقت على الشاشة، تكتب إجاباتك، وتسمع التسجيل مرة واحدة. اختر نوع الاختبار الذي ستقدمه:':'The test simulates computer-delivered IELTS: on-screen timer, typed answers, and recordings played once. Choose the version you will take:'}</p>
        <div class="row"><label class="opt ${p.variant==='academic'?'sel':''}" style="flex:1"><input type="radio" name="variant" value="academic" ${p.variant==='academic'?'checked':''}> <span><b>Academic</b><br><span class="small muted">${isAr()?'للدراسة الجامعية والتسجيل المهني (الأكثر شيوعاً)':'University study and professional registration (most common)'}</span></span></label>
        <label class="opt ${p.variant==='general'?'sel':''}" style="flex:1"><input type="radio" name="variant" value="general" ${p.variant==='general'?'checked':''}> <span><b>General Training</b><br><span class="small muted">${isAr()?'للهجرة والعمل':'Migration and work'}</span></span></label></div>
        <div class="grid g2"><label>${esc(t('target'))}<select id="target">${[5,5.5,6,6.5,7,7.5,8,8.5,9].map(b=>`<option ${p.target==b?'selected':''} value="${b}">${fmtBand(b)}</option>`).join('')}</select></label><label>${isAr()?'تاريخ الاختبار (اختياري)':'Test date (optional)'}<input type="date" id="testDate" value="${esc(p.testDate||'')}"></label></div>
        <button class="btn primary" id="startPl">${esc(t('start'))} → ${esc(t('grammar'))}</button>
        <p class="tiny muted">${isAr()?'يمكنك التوقف بعد أي قسم؛ النتائج تُحفظ تلقائياً.':'You can stop after any section; results are saved automatically.'}</p>
      </div>
      <div class="card stack">
        <h3>${isAr()?'ماذا ستختبر':'What you will do'}</h3>
        <table><tbody>
          <tr><td><b>1. ${esc(t('grammar'))} + ${esc(t('vocab'))}</b></td><td>${isAr()?'24 سؤالاً تكيفياً (A1→C2)':'24 adaptive questions (A1→C2)'}</td><td class="mono">~10 ${t('minutes')}</td></tr>
          <tr><td><b>2. ${esc(t('reading'))}</b></td><td>${isAr()?'نصّان، 18 سؤالاً بأنواع الآيلتس':'2 passages, 18 IELTS-type questions'}</td><td class="mono">22 ${t('minutes')}</td></tr>
          <tr><td><b>3. ${esc(t('listening'))}</b></td><td>${isAr()?'جزءان (محادثة + محاضرة)، 12 سؤالاً':'2 parts (conversation + lecture), 12 questions'}</td><td class="mono">~12 ${t('minutes')}</td></tr>
          <tr><td><b>4. ${esc(t('writing'))}</b></td><td>${isAr()?'مقال Task 2 (250 كلمة) بتقييم الذكاء الاصطناعي':'Task 2 essay (250 words) with AI marking'}</td><td class="mono">40 ${t('minutes')}</td></tr>
          <tr><td><b>5. ${esc(t('speaking'))}</b></td><td>${isAr()?'ثلاثة أجزاء بالميكروفون أو الكتابة':'3 parts by microphone or typing'}</td><td class="mono">~12 ${t('minutes')}</td></tr>
        </tbody></table>
        <p class="small muted">${isAr()?'الدرجات التقديرية تعتمد على جداول التحويل الرسمية ومعايير التقييم المعلنة، لكنها ليست نتيجة رسمية.':'Estimates use the official conversion tables and public marking criteria, but they are not an official result.'}</p>
      </div></div>`));
    $$('input[name=variant]',v).forEach(r=>r.onchange=()=>{ state.profile.variant=r.value; save(); $$('.opt',v).forEach(o=>o.classList.toggle('sel', o.querySelector('input').checked)); });
    $('#startPl',v).onclick=()=>{ state.profile.target=Number($('#target',v).value); state.profile.testDate=$('#testDate',v).value; save(); plNext(); };
  }

  /* adaptive grammar engine */
  function plGrammar(v){
    if(!pl.g){ pl.g={theta:2, step:1.0, used:new Set(), log:[], n:0, max:24}; pickNext(); }
    function pickNext(){
      const g=pl.g; const want=Math.max(0,Math.min(5,Math.round(g.theta)));
      let pool=GRAMMAR_ITEMS.filter(it=>!g.used.has(it.id) && LEVELS.indexOf(it.lvl)===want);
      if(!pool.length){ pool=GRAMMAR_ITEMS.filter(it=>!g.used.has(it.id)).sort((a,b)=>Math.abs(LEVELS.indexOf(a.lvl)-g.theta)-Math.abs(LEVELS.indexOf(b.lvl)-g.theta)).slice(0,3); }
      g.cur = pool[Math.floor(Math.random()*pool.length)]; g.used.add(g.cur.id);
    }
    const g=pl.g; const it=g.cur;
    const box=el(`<div class="card stack" style="max-width:720px">
      <div class="progress-top"><div class="row between small muted"><span>${isAr()?'سؤال':'Question'} ${g.n+1} / ${g.max}</span><span class="pill">${isAr()?'المستوى الحالي':'Current estimate'}: ${LEVELS[Math.max(0,Math.min(5,Math.round(g.theta)))]}</span></div><div class="bar"><i style="width:${g.n/g.max*100}%"></i></div></div>
      <h2 class="en q">${esc(it.q)}</h2>
      <div class="opts en">${it.opts.map((o,i)=>`<button class="opt" data-i="${i}"><span class="k">${'ABCD'[i]}</span><span>${esc(o)}</span></button>`).join('')}</div>
      <div id="exp"></div>
      <div class="row between"><button class="btn ghost sm" id="skipG">${esc(t('skip'))}</button><button class="btn primary" id="nextG" disabled>${esc(t('next'))}</button></div>
    </div>`);
    v.appendChild(box);
    let answered=false;
    $$('.opt',box).forEach(b=>b.onclick=()=>{
      if(answered) return; answered=true;
      const i=Number(b.dataset.i), ok=i===it.a;
      $$('.opt',box).forEach(x=>{ x.disabled=true; if(Number(x.dataset.i)===it.a) x.classList.add('ok'); else if(x===b&&!ok) x.classList.add('ko'); });
      $('#exp',box).innerHTML=`<div class="explain"><b>${ok?(isAr()?'صحيح':'Correct'):(isAr()?'غير صحيح':'Not quite')}.</b> <span class="en">${esc(it.why)}</span><div class="ar">${esc(it.whyAr)}</div></div>`;
      g.log.push({id:it.id,lvl:it.lvl,topic:it.topic,ok});
      g.theta += ok ? g.step : -g.step; g.theta=Math.max(0,Math.min(5.4,g.theta)); g.step=Math.max(0.35, g.step*0.86); g.n++;
      $('#nextG',box).disabled=false;
    });
    $('#nextG',box).onclick=()=>{ if(g.n>=g.max){ finishGrammar(); } else { pickNext(); render(); } };
    $('#skipG',box).onclick=()=>{ pl.step++; render(); };
    function finishGrammar(){
      const lvlIdx=Math.max(0,Math.min(5,Math.round(g.theta))); const level=LEVELS[lvlIdx];
      const topics={}; g.log.forEach(l=>{ topics[l.topic]=topics[l.topic]||{ok:0,n:0}; topics[l.topic].n++; if(l.ok) topics[l.topic].ok++; });
      const weak=Object.keys(topics).filter(k=>topics[k].ok<topics[k].n).sort((a,b)=>(topics[a].ok/topics[a].n)-(topics[b].ok/topics[b].n)).slice(0,6);
      const acc=g.log.filter(l=>l.ok).length/g.log.length;
      state.profile.placement.grammar={level, theta:Math.round(g.theta*100)/100, band:LEVEL_BAND[level], weak, topics, accuracy:Math.round(acc*100), at:Date.now()};
      state.profile.history.push({at:Date.now(), kind:'grammar', value:LEVEL_BAND[level]});
      addXP(50); save(true); pl.step++; render();
    }
  }

  /* generic question renderer for reading/listening sets */
  function questionForm(set, prefix){
    const qs=set.questions;
    const heads = set.headings ? `<div class="card flat" style="margin-bottom:12px"><b>${isAr()?'قائمة العناوين':'List of headings'}</b><div class="heading-list en">${set.headings.map(h=>`<span>${esc(h)}</span>`).join('')}</div></div>` : '';
    const items=qs.map((q,i)=>{
      const name=`${prefix}q${i}`;
      let input='';
      if(q.type==='tfng'||q.type==='ynng'){ const o=q.type==='tfng'?['TRUE','FALSE','NOT GIVEN']:['YES','NO','NOT GIVEN']; input=`<div class="row">${o.map(x=>`<label class="pill" style="cursor:pointer"><input type="radio" name="${name}" value="${x}"> ${x}</label>`).join('')}</div>`; }
      else if(q.type==='mcq'){ input=`<div class="opts">${q.opts.map((o,j)=>`<label class="opt"><input type="radio" name="${name}" value="${j}"><span class="k">${'ABCD'[j]||j}</span><span>${esc(o)}</span></label>`).join('')}</div>`; }
      else if(q.type==='heading'){ input=`<select name="${name}"><option value="">—</option>${set.headings.map(h=>`<option value="${esc(h.split('.')[0])}">${esc(h)}</option>`).join('')}</select>`; }
      else { input=`<input type="text" name="${name}" autocomplete="off" spellcheck="false" placeholder="${isAr()?'اكتب إجابتك':'Type your answer'}">`; }
      return `<div class="q en" data-q="${i}"><p><b>${esc(q.q)}</b></p>${input}<div class="exp"></div></div>`;
    }).join('');
    return heads+`<div class="stack">${items}</div>`;
  }
  function gradeForm(set, prefix, root){
    let correct=0; const results=[];
    set.questions.forEach((q,i)=>{
      const name=`${prefix}q${i}`; let val=''; const r=root.querySelector(`[name="${name}"]:checked`)||root.querySelector(`[name="${name}"]`);
      if(q.type==='mcq'||q.type==='tfng'||q.type==='ynng'){ const c=root.querySelector(`[name="${name}"]:checked`); val=c?c.value:''; }
      else val=(r&&r.value||'').trim();
      let ok=false, ans='';
      if(q.type==='mcq'){ ok=Number(val)===q.a; ans=q.opts[q.a]; }
      else if(q.type==='gap'){ const norm=s=>String(s).toLowerCase().replace(/[^a-z0-9؀-ۿ ]/g,'').replace(/^(the|a|an) /,'').trim(); ok=q.a.map(norm).includes(norm(val)); ans=q.a[0]; }
      else { ok=String(val).toLowerCase()===String(q.a).toLowerCase(); ans=q.a; }
      if(ok) correct++; results.push({ok,ans,val});
      const box=root.querySelector(`[data-q="${i}"] .exp`); if(box) box.innerHTML=`<div class="explain ${ok?'':''}"><span class="pill ${ok?'good':'bad'}">${ok?'✓':'✗'} ${esc(ans)}</span> <span class="small">${esc(q.why||'')}</span></div>`;
      root.querySelectorAll(`[name="${name}"]`).forEach(x=>x.disabled=true);
    });
    return {correct, total:set.questions.length, results};
  }
  function timerWidget(seconds, onEnd){
    const w=el(`<span class="timer mono">${fmt(seconds)}</span>`); let left=seconds;
    function fmt(s){ return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0'); }
    const iv=setInterval(()=>{ left--; w.textContent=fmt(Math.max(0,left)); if(left<=120) w.classList.add('low'); if(left<=0){ clearInterval(iv); onEnd&&onEnd(); } },1000);
    w.stop=()=>clearInterval(iv); w.left=()=>left; return w;
  }

  function plReading(v){
    const sets=READING_SETS.filter(s=>s.use==='placement');
    if(pl.r==null) pl.r={i:0, correct:0, total:0};
    const set=sets[pl.r.i];
    const card=el(`<div class="stack">
      <div class="row between"><div><span class="eyebrow">${esc(t('reading'))} · ${isAr()?'نص':'Passage'} ${pl.r.i+1}/${sets.length} · ${set.level}</span><h2>${esc(set.title)}</h2></div><div class="row"><span id="tm"></span><button class="btn ghost sm" id="skipR">${esc(t('skip'))}</button></div></div>
      <div class="two"><div class="card passage en">${set.text}</div><div class="card"><form id="rf">${questionForm(set,'r')}</form><div class="row" style="margin-top:14px"><button class="btn primary" id="checkR">${esc(t('check'))}</button><button class="btn" id="nextR" hidden>${esc(t('next'))}</button></div></div></div>
    </div>`);
    v.appendChild(card);
    const tm=timerWidget(set.minutes*60, ()=>{ toast(isAr()?'انتهى الوقت':'Time is up'); $('#checkR',card).click(); }); $('#tm',card).appendChild(tm);
    $('#checkR',card).onclick=()=>{ tm.stop(); const g=gradeForm(set,'r',card); pl.r.correct+=g.correct; pl.r.total+=g.total; $('#checkR',card).hidden=true; $('#nextR',card).hidden=false; toast(`${g.correct}/${g.total}`); };
    $('#nextR',card).onclick=()=>{ if(pl.r.i<sets.length-1){ pl.r.i++; render(); } else { const band=rawToBand(pl.r.correct,pl.r.total,state.profile.variant); state.profile.placement.reading={band, raw:pl.r.correct, total:pl.r.total, at:Date.now()}; state.profile.history.push({at:Date.now(),kind:'reading',value:band}); addXP(60); save(true); pl.step++; render(); } };
    $('#skipR',card).onclick=()=>{ tm.stop(); pl.step++; render(); };
  }

  function listeningPlayer(set, opts={}){
    // returns element with play controls; opts.once (exam mode) ; opts.onDone
    const w=el(`<div class="card stack"><div class="row between"><div><span class="eyebrow">Part ${set.part} · ${set.level}</span><h3>${esc(set.title)}</h3></div><div class="row"><button class="btn primary" id="play">▶ ${isAr()?'تشغيل':'Play'}</button><button class="btn sm" id="stop" hidden>■</button></div></div>
      <p class="small muted en">${esc(set.intro)}</p>
      <div id="now" class="small en" style="min-height:22px;color:var(--accent)"></div>
      <div class="voice-note">${state.cap.tts?(isAr()?'الصوت: أصوات Claude الطبيعية':'Audio: natural Claude voices'):(window.speechSynthesis?(isAr()?'الصوت: محرك القراءة في متصفحك (افتح الصفحة داخل Claude لأصوات أفضل)':'Audio: your browser\'s speech engine (open inside Claude for better voices)'):(isAr()?'لا يوجد محرك صوت في هذا المتصفح':'No speech engine in this browser'))}</div>
      ${opts.once?`<p class="tiny muted">${isAr()?'كما في الاختبار الحقيقي، التسجيل يُشغَّل مرة واحدة فقط.':'As in the real test, the recording plays once only.'}</p>`:''}
      ${opts.showScript?`<details><summary class="small">${isAr()?'عرض النص (بعد الاستماع)':'Show transcript (after listening)'}</summary><div class="en small" style="margin-top:8px">${set.script.map(l=>`<p><b>${esc(l.who)}:</b> ${esc(l.text)}</p>`).join('')}</div></details>`:''}
    </div>`);
    let played=false, playing=false;
    $('#play',w).onclick=async()=>{
      if(opts.once && played) { toast(isAr()?'التسجيل يُشغّل مرة واحدة':'One play only'); return; }
      played=true; playing=true; $('#play',w).disabled=true; $('#stop',w).hidden=false;
      const lines=[{text:set.intro,voice:'glassy'}].concat(set.script.map(l=>({text:l.text,voice:l.voice})));
      const ok=await speakLines(lines,{onLine:i=>{ $('#now',w).textContent = i===0?'…':(set.script[i-1].who+' is speaking'); }});
      playing=false; $('#now',w).textContent=''; $('#stop',w).hidden=true; if(!opts.once) $('#play',w).disabled=false;
      if(!ok && !state.cap.tts && !window.speechSynthesis) toast(isAr()?'لا يمكن تشغيل الصوت هنا':'Audio cannot play here');
      opts.onDone&&opts.onDone();
    };
    $('#stop',w).onclick=()=>{ stopSpeech(); };
    return w;
  }
  function plListening(v){
    const sets=LISTENING_SETS.filter(s=>s.use==='placement');
    if(pl.l==null) pl.l={i:0,correct:0,total:0};
    const set=sets[pl.l.i];
    const card=el(`<div class="stack"><div class="row between"><div><span class="eyebrow">${esc(t('listening'))} · ${pl.l.i+1}/${sets.length}</span></div><button class="btn ghost sm" id="skipL">${esc(t('skip'))}</button></div>
      <div class="two"><div id="player"></div><div class="card"><form id="lf">${questionForm(set,'l')}</form><div class="row" style="margin-top:14px"><button class="btn primary" id="checkL">${esc(t('check'))}</button><button class="btn" id="nextL" hidden>${esc(t('next'))}</button></div></div></div></div>`);
    v.appendChild(card);
    $('#player',card).appendChild(listeningPlayer(set,{once:true}));
    $('#checkL',card).onclick=()=>{ stopSpeech(); const g=gradeForm(set,'l',card); pl.l.correct+=g.correct; pl.l.total+=g.total; $('#checkL',card).hidden=true; $('#nextL',card).hidden=false; toast(`${g.correct}/${g.total}`); };
    $('#nextL',card).onclick=()=>{ if(pl.l.i<sets.length-1){ pl.l.i++; render(); } else { const band=rawToBand(pl.l.correct,pl.l.total,'academic'); state.profile.placement.listening={band, raw:pl.l.correct, total:pl.l.total, at:Date.now()}; state.profile.history.push({at:Date.now(),kind:'listening',value:band}); addXP(60); save(true); pl.step++; render(); } };
    $('#skipL',card).onclick=()=>{ stopSpeech(); pl.step++; render(); };
  }

  function writingEditor(task, opts){
    // opts: {minutes, minWords, onResult(result), placement}
    const w=el(`<div class="two"><div class="card stack sticky-side"><span class="eyebrow">${task.isTask1?'Task 1':'Task 2'} · ${task.kind==='general'?'General Training':'Academic'}</span><p class="en"><b>${esc(task.q)}</b></p>${task.table?renderTable(task.table):''}${task.chart?renderBars(task.chart):''}${task.process?`<ol class="en small">${task.process.map(p=>`<li>${esc(p)}</li>`).join('')}</ol>`:''}<div class="row between"><span id="tm"></span><span class="small muted"><span id="wc" class="mono">0</span> ${esc(t('words'))} · min ${opts.minWords}</span></div></div>
      <div class="card stack"><textarea id="essay" class="en" spellcheck="false" placeholder="${isAr()?'اكتب هنا… (بدون تدقيق إملائي، كما في الاختبار)':'Write here… (no spell-check, as in the exam)'}" style="min-height:380px"></textarea>
      <div class="row between"><div class="row">${opts.allowSkip?`<button class="btn ghost sm" id="skipW">${esc(t('skip'))}</button>`:''}</div><button class="btn primary" id="submitW">${esc(t('submit'))} ${state.cap.sample?'→ AI':''}</button></div>
      <div id="result"></div></div></div>`);
    const ta=$('#essay',w); ta.oninput=()=>{ $('#wc',w).textContent=ta.value.trim().split(/\s+/).filter(Boolean).length; };
    const tm=timerWidget(opts.minutes*60, ()=>toast(isAr()?'انتهى الوقت، يمكنك الإرسال الآن':'Time is up. Submit when ready.')); $('#tm',w).appendChild(tm);
    if(opts.allowSkip) $('#skipW',w).onclick=()=>{ tm.stop(); opts.onSkip&&opts.onSkip(); };
    $('#submitW',w).onclick=async()=>{
      const text=ta.value.trim(); const wc=text.split(/\s+/).filter(Boolean).length;
      if(wc<40){ toast(isAr()?'اكتب 40 كلمة على الأقل':'Write at least 40 words'); return; }
      tm.stop(); $('#submitW',w).disabled=true; const out=$('#result',w);
      if(state.cap.sample){
        out.innerHTML=`<div class="note"><span id="think">${esc(t('thinking'))}</span></div>`;
        try{
          const r=await evaluateWriting(task,text,({text:tx})=>{ const s=$('#think',out); if(s) s.textContent=(isAr()?'جارٍ الكتابة…':'Writing feedback…')+' '+tx.length+' chars'; });
          out.innerHTML=''; out.appendChild(feedbackView(r,'writing'));
          opts.onResult&&opts.onResult({band:r.band, criteria:r.criteria, wc:r.word_count||wc, text, ai:true, r});
        }catch(e){
          const h=heuristicWriting(text, opts.minWords);
          out.innerHTML=`<div class="note warm">${e.code==='not_granted'?esc(t('aiOff')):(isAr()?'تعذر التقييم بالذكاء الاصطناعي ('+esc(e.code||'error')+'). عرض تقدير تقريبي بدلاً منه.':'AI marking failed ('+esc(e.code||'error')+'). Showing a rough estimate instead.')}</div>`;
          out.appendChild(heuristicView(h,text,task));
          opts.onResult&&opts.onResult({band:h.band, wc:h.wc, text, ai:false});
        }
      } else {
        const h=heuristicWriting(text, opts.minWords);
        out.innerHTML=`<div class="note warm">${esc(t('aiOff'))}</div>`; out.appendChild(heuristicView(h,text,task));
        opts.onResult&&opts.onResult({band:h.band, wc:h.wc, text, ai:false});
      }
      $('#submitW',w).disabled=false;
    };
    return w;
  }
  function renderTable(tb){ return `<div class="table-wrap en"><table><thead><tr>${tb.head.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${tb.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`; }
  function renderBars(ch){
    const W=360,H=200,pad=30, n=ch.labels.length, gw=(W-pad*2)/n, bw=gw/(ch.series.length+1); const cols=['var(--accent)','var(--warm)','var(--info)'];
    let s=`<svg class="svgchart" viewBox="0 0 ${W} ${H+30}" width="100%" style="max-width:420px"><line x1="${pad}" y1="${H}" x2="${W-pad}" y2="${H}" stroke="var(--line)"/>`;
    [0,25,50,75].forEach(y=>{ const yy=H-y/60*H*0.9; s+=`<line x1="${pad}" x2="${W-pad}" y1="${yy}" y2="${yy}" stroke="var(--line)" stroke-dasharray="2 3"/><text x="${pad-4}" y="${yy+3}" text-anchor="end">${y}%</text>`; });
    ch.labels.forEach((lab,i)=>{ ch.series.forEach((se,j)=>{ const h=se.v[i]/60*H*0.9; s+=`<rect x="${pad+i*gw+bw*(j+0.5)}" y="${H-h}" width="${bw*0.9}" height="${h}" fill="${cols[j]}" rx="2"/>`; }); s+=`<text x="${pad+i*gw+gw/2}" y="${H+14}" text-anchor="middle">${esc(lab)}</text>`; });
    ch.series.forEach((se,j)=>{ s+=`<rect x="${W-pad-150+j*50}" y="2" width="10" height="10" fill="${cols[j]}"/><text x="${W-pad-150+j*50+14}" y="11">${esc(se.name)}</text>`; });
    return s+'</svg>';
  }
  function feedbackView(r, kind){
    const crit = kind==='writing' ? [['tr','Task Response'],['cc','Coherence & Cohesion'],['lr','Lexical Resource'],['gra','Grammar Range & Accuracy']] : [['fc','Fluency & Coherence'],['lr','Lexical Resource'],['gra','Grammar Range & Accuracy'],['pron','Pronunciation']];
    const c=r.criteria||{};
    const w=el(`<div class="feedback"><div class="row"><span style="font-family:var(--display);font-size:2.6rem;font-weight:700">${fmtBand(r.band)}</span><div><b>${isAr()?'الدرجة التقديرية':'Estimated band'}</b><div class="small muted">${r.word_count?r.word_count+' words · ':''}CEFR ${bandToCEFR(r.band)}</div></div></div>
      <div class="grid g2">${crit.map(([k,n])=>`<div class="crit"><span class="small">${n}</span><b>${c[k]==null?'n/a':fmtBand(c[k])}</b></div>`).join('')}</div>
      ${c.pron==null&&kind==='speaking'?`<p class="tiny muted">${isAr()?'النطق لا يمكن تقييمه من النص المكتوب؛ استخدم قسم النطق في الإنجليزية المهنية.':'Pronunciation cannot be judged from a transcript; use the pronunciation drills.'}</p>`:''}
      <p class="en">${esc(r.summary||'')}</p>
      ${r.advice_ar?`<div class="note ar">${esc(r.advice_ar)}</div>`:''}
      ${(r.strengths||[]).length?`<div><b>${isAr()?'نقاط القوة':'Strengths'}</b><ul class="en small">${r.strengths.map(s=>`<li>${esc(s)}</li>`).join('')}</ul></div>`:''}
      ${(r.fillers_and_repetition||[]).length?`<div><b>${isAr()?'حشو وتكرار':'Fillers & repetition'}</b><div>${r.fillers_and_repetition.map(s=>`<span class="chip warn">${esc(s)}</span>`).join('')}</div></div>`:''}
      ${(r.errors||[]).length?`<div><b>${isAr()?'أخطاء وتصحيحها':'Errors and corrections'}</b><div class="stack en" style="margin-top:6px">${r.errors.map(e=>`<div class="err-row"><div><span class="o">${esc(e.original)}</span><br><span class="c">${esc(e.correction)}</span></div><div class="small muted">${esc(e.rule)}</div></div>`).join('')}</div></div>`:''}
      ${(r.vocabulary_upgrades||[]).length?`<div><b>${isAr()?'ترقية المفردات':'Vocabulary upgrades'}</b><div class="en">${r.vocabulary_upgrades.map(u=>`<span class="chip">${esc(u.basic)} → <b>${esc(u.better)}</b></span>`).join('')}</div></div>`:''}
      ${r.improved_paragraph?`<div><b>${isAr()?'فقرة محسّنة (مستوى 8)':'Improved paragraph (Band 8)'}</b><p class="en small" style="margin-top:6px;white-space:pre-wrap">${esc(r.improved_paragraph)}</p></div>`:''}
      ${r.better_answer?`<div><b>${isAr()?'إجابة نموذجية (مستوى 8)':'Model answer (Band 8)'}</b><p class="en small" style="margin-top:6px;white-space:pre-wrap">${esc(r.better_answer)}</p></div>`:''}
      ${(r.next_band_steps||[]).length?`<div><b>${isAr()?'خطواتك للدرجة التالية':'Steps to the next band'}</b><ol class="en small">${r.next_band_steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></div>`:''}
    </div>`);
    return w;
  }
  function heuristicView(h,text,task){
    const prompt=`Act as an IELTS examiner. Mark this ${task.isTask1?'Task 1':'Task 2'} response on the four criteria with band scores, list my errors with corrections, and rewrite the weakest paragraph at Band 8.\n\nTask: ${task.q}\n\nMy response:\n${text}`;
    const w=el(`<div class="feedback"><div class="row"><span style="font-family:var(--display);font-size:2.4rem;font-weight:700">~${fmtBand(h.band)}</span><div><b>${isAr()?'تقدير تقريبي (بدون ذكاء اصطناعي)':'Rough estimate (no AI)'}</b><div class="small muted">${h.wc} words · ${h.linkers} linkers · ${h.complex} complex-clause markers · ${h.contractions} contractions</div></div></div>
      <p class="small">${isAr()?'هذا التقدير يعتمد على الطول والروابط وتنوع الجمل فقط، ولا يقيس المحتوى أو الدقة. انسخ الطلب التالي والصقه في Claude للحصول على تقييم كامل:':'This estimate uses only length, linkers and sentence variety; it cannot judge content or accuracy. Copy the prompt below into Claude for full marking:'}</p>
      <button class="btn sm" id="cp">${isAr()?'نسخ الطلب':'Copy prompt'}</button><textarea class="en small" style="min-height:90px" readonly>${esc(prompt)}</textarea></div>`);
    $('#cp',w).onclick=()=>{ navigator.clipboard.writeText(prompt).then(()=>toast('Copied')).catch(()=>{ $('textarea',w).select(); }); };
    return w;
  }
  function plWriting(v){
    const task=Object.assign({}, WRITING_TASKS.task2[Math.floor(Math.random()*WRITING_TASKS.task2.length)], {kind:state.profile.variant, isTask1:false});
    if(pl.wTask) Object.assign(task, pl.wTask); else pl.wTask={id:task.id,q:task.q};
    v.appendChild(el(`<div class="row between" style="margin-bottom:12px"><span class="eyebrow">${esc(t('writing'))} · Task 2 · 40 ${t('minutes')}</span></div>`));
    v.appendChild(writingEditor(task,{minutes:40,minWords:250,allowSkip:true,onSkip:()=>{pl.step++;render();},onResult:(res)=>{
      state.profile.placement.writing={band:res.band, criteria:res.criteria||null, ai:res.ai, wc:res.wc, taskId:task.id, at:Date.now()};
      state.profile.writingLog.push({at:Date.now(),taskId:task.id,band:res.band,ai:res.ai});
      state.profile.history.push({at:Date.now(),kind:'writing',value:res.band}); addXP(80); save(true);
      const b=el(`<div class="row" style="margin-top:14px"><button class="btn primary">${esc(t('continue_'))} → ${esc(t('speaking'))}</button></div>`); b.querySelector('button').onclick=()=>{pl.step++;render();}; $('#result',v).appendChild(b);
    }}));
  }

  /* speaking recorder: dictation capability with typed fallback */
  function recorder(opts){
    // opts: {label, q, prep (sec), talk (sec), onDone(text)}
    const dict=state.cap.dictation;
    const w=el(`<div class="card stack"><span class="eyebrow">${esc(opts.label)}</span><p class="en"><b>${esc(opts.q)}</b></p>${opts.bullets?`<div class="cue en"><b>You should say:</b><ul>${opts.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul></div>`:''}
      <div class="row"><button class="btn sm" id="hear">🔊 ${isAr()?'اسمع السؤال':'Hear the question'}</button>${opts.prep?`<button class="btn sm" id="prep">⏱ ${isAr()?'دقيقة تحضير':'1-minute prep'}</button>`:''}<span id="tm"></span></div>
      <div class="rec"><button class="btn primary" id="rec">${dict?'● '+(isAr()?'ابدأ التسجيل':'Start recording'):(isAr()?'اكتب إجابتك':'Type your answer')}</button><button class="btn" id="stopRec" hidden>■ ${isAr()?'إيقاف':'Stop'}</button><span id="st" class="small muted"></span></div>
      <div class="transcript en" id="tr" contenteditable="true" spellcheck="false" data-ph="${dict?(isAr()?'سيظهر النص هنا أثناء الكلام… يمكنك تعديله':'Your words appear here as you speak… you can edit them'):(isAr()?'اكتب إجابتك هنا كما ستقولها':'Type your answer here as you would say it')}"></div>
      <div class="row between"><span class="tiny muted">${dict?(isAr()?'الإملاء الصوتي متاح. تحدث بوضوح ولمدة كافية.':'Voice dictation available. Speak clearly and at length.'):(isAr()?'الميكروفون غير متاح في هذا العرض؛ افتح الصفحة في Claude على الكمبيوتر، أو اكتب إجابتك.':'Microphone not available here; open the page in Claude on desktop, or type your answer.')}</span><button class="btn primary" id="doneRec">${esc(opts.doneLabel||t('next'))}</button></div></div>`);
    const tr=$('#tr',w); const st=$('#st',w); let final='';
    $('#hear',w).onclick=()=>speakLines([{text:opts.q,voice:'glassy'}]);
    if(opts.prep) $('#prep',w).onclick=()=>{ $('#tm',w).innerHTML=''; $('#tm',w).appendChild(timerWidget(60,()=>toast(isAr()?'ابدأ الكلام الآن':'Start speaking now'))); };
    let recording=false, talkTimer=null, wired=false;
    $('#rec',w).onclick=()=>{
      if(!dict){ tr.focus(); return; }
      if(recording) return;
      try{
        final=tr.textContent.trim()?tr.textContent.trim()+' ':'';
        if(!wired){ wired=true;
          dict.onPartial(({text})=>{ if(document.body.contains(w)) tr.textContent=final+text; });
          dict.onFinal(({text})=>{ if(document.body.contains(w)){ final+=text+' '; tr.textContent=final; } });
          dict.onState(({state:s})=>{ if(!document.body.contains(w)) return; st.textContent=s; if(s==='idle'){ recording=false; $('#rec',w).disabled=false; $('#stopRec',w).hidden=true; } });
        }
        dict.start().then(()=>{ recording=true; $('#rec',w).disabled=true; $('#stopRec',w).hidden=false; if(opts.talk){ $('#tm',w).innerHTML=''; talkTimer=timerWidget(opts.talk,()=>{ toast(isAr()?'انتهى الوقت':'Time'); }); $('#tm',w).appendChild(talkTimer); } }).catch(e=>{ st.textContent = e.code==='not_granted' ? (isAr()?'لم يُسمح بالميكروفون؛ اكتب إجابتك.':'Microphone not allowed; type your answer.') : (e.code||'error'); });
      }catch(e){ st.textContent='error'; }
    };
    $('#stopRec',w).onclick=async()=>{ try{ await dict.stop(); }catch(e){} if(talkTimer) talkTimer.stop(); };
    $('#doneRec',w).onclick=async()=>{ if(recording){ try{ await dict.stop(); }catch(e){} } const text=tr.textContent.trim(); if(text.split(/\s+/).length<5){ toast(isAr()?'الإجابة قصيرة جداً':'Answer is too short'); return; } opts.onDone(text); };
    return w;
  }
  function speakingSession(v, plan, opts){
    // plan: [{label,q,bullets,prep,talk}] ; opts.onFinish(parts) ; opts.mode
    let i=0; const parts=[];
    const host=el(`<div class="stack"><div class="row between"><span class="eyebrow">${esc(opts.title||t('speaking'))} · ${i+1}/${plan.length}</span>${opts.allowSkip?`<button class="btn ghost sm" id="skipS">${esc(t('skip'))}</button>`:''}</div><div id="slot"></div><div id="res"></div></div>`);
    v.appendChild(host);
    if(opts.allowSkip) $('#skipS',host).onclick=()=>opts.onSkip&&opts.onSkip();
    function show(){ const p=plan[i]; $('#slot',host).innerHTML=''; $('.eyebrow',host).textContent=`${opts.title||t('speaking')} · ${i+1}/${plan.length}`; $('#slot',host).appendChild(recorder(Object.assign({},p,{doneLabel:i===plan.length-1?(isAr()?'إنهاء والتقييم':'Finish & evaluate'):t('next'),onDone:(text)=>{ parts.push({label:p.label,q:p.q,a:text}); i++; if(i<plan.length) show(); else finish(); }}))); }
    async function finish(){
      $('#slot',host).innerHTML=''; const out=$('#res',host);
      const wc=parts.reduce((a,p)=>a+p.a.split(/\s+/).length,0);
      if(state.cap.sample){
        out.innerHTML=`<div class="note"><span id="think">${esc(t('thinking'))}</span></div>`;
        try{ const r=await evaluateSpeaking(parts,({text})=>{const s=$('#think',out); if(s) s.textContent=(isAr()?'جارٍ الكتابة…':'Writing feedback…')+' '+text.length;}, opts.mode); out.innerHTML=''; out.appendChild(feedbackView(r,'speaking')); opts.onFinish&&opts.onFinish({band:r.band,criteria:r.criteria,ai:true,parts,r}); }
        catch(e){ out.innerHTML=`<div class="note warm">${e.code==='not_granted'?esc(t('aiOff')):(isAr()?'تعذر التقييم: ':'Evaluation failed: ')+esc(e.code||'')}</div>`; out.appendChild(selfCheckSpeaking(parts)); opts.onFinish&&opts.onFinish({band:null,ai:false,parts}); }
      } else { out.innerHTML=`<div class="note warm">${esc(t('aiOff'))}</div>`; out.appendChild(selfCheckSpeaking(parts)); opts.onFinish&&opts.onFinish({band:null,ai:false,parts}); }
    }
    show();
  }
  function selfCheckSpeaking(parts){
    const all=parts.map(p=>p.a).join(' '); const words=all.split(/\s+/).filter(Boolean); const fill=(all.match(/\b(um|uh|like|you know|actually|basically|so|yeah)\b/gi)||[]).length;
    const uniq=new Set(words.map(w=>w.toLowerCase().replace(/[^a-z']/g,''))).size;
    const prompt=`Act as an IELTS Speaking examiner. Assess this transcript on Fluency & Coherence, Lexical Resource and Grammatical Range & Accuracy, give band scores, list errors with corrections and give a Band 8 model answer.\n\n${parts.map(p=>`[${p.label}] Q: ${p.q}\nA: ${p.a}`).join('\n\n')}`;
    const w=el(`<div class="feedback"><div class="grid g3"><div class="crit"><span class="small">Words</span><b>${words.length}</b></div><div class="crit"><span class="small">Unique words</span><b>${uniq}</b></div><div class="crit"><span class="small">Fillers</span><b>${fill}</b></div></div><p class="small">${isAr()?'انسخ الطلب التالي إلى Claude لتقييم كامل:':'Copy this prompt into Claude for full marking:'}</p><button class="btn sm" id="cp">${isAr()?'نسخ':'Copy'}</button><textarea class="en small" readonly style="min-height:80px">${esc(prompt)}</textarea></div>`);
    $('#cp',w).onclick=()=>navigator.clipboard.writeText(prompt).then(()=>toast('Copied')).catch(()=>$('textarea',w).select());
    return w;
  }
  function plSpeaking(v){
    const p1=SPEAKING_BANK.part1[Math.floor(Math.random()*SPEAKING_BANK.part1.length)]; const p2=SPEAKING_BANK.part2[Math.floor(Math.random()*SPEAKING_BANK.part2.length)]; const p3=SPEAKING_BANK.part3[Math.floor(Math.random()*SPEAKING_BANK.part3.length)];
    const plan=[{label:'Part 1',q:p1.qs[0]},{label:'Part 1',q:p1.qs[1]},{label:'Part 2 (speak for 2 minutes)',q:p2.card,bullets:p2.bullets,prep:60,talk:120},{label:'Part 3',q:p3.qs[0]},{label:'Part 3',q:p3.qs[1]}];
    speakingSession(v, plan, {allowSkip:true,onSkip:()=>{pl.step++;render();},onFinish:(res)=>{
      if(res.band!=null){ state.profile.placement.speaking={band:res.band,criteria:res.criteria,ai:true,at:Date.now()}; state.profile.history.push({at:Date.now(),kind:'speaking',value:res.band}); }
      state.profile.speakingLog.push({at:Date.now(),band:res.band,ai:res.ai}); addXP(80); save(true);
      const b=el(`<div class="row" style="margin-top:14px"><button class="btn primary">${isAr()?'عرض النتائج':'See results'}</button></div>`); b.querySelector('button').onclick=()=>{pl.step++;render();}; $('#res',v).appendChild(b);
    }});
  }

  function radar(vals){ // vals: {listening,reading,writing,speaking} bands 0-9
    const keys=['listening','reading','writing','speaking']; const cx=200,cy=150,R=105;
    const pt=(i,r)=>{ const a=-Math.PI/2+i*Math.PI/2; return [cx+Math.cos(a)*r, cy+Math.sin(a)*r]; };
    let s=`<svg class="radar svgchart" viewBox="0 0 400 300" style="max-width:420px">`;
    [3,5,7,9].forEach(b=>{ const r=b/9*R; s+=`<polygon points="${keys.map((k,i)=>pt(i,r).join(',')).join(' ')}" fill="none" stroke="var(--line)"/>`; s+=`<text x="${cx+4}" y="${cy-r+10}">${b}</text>`; });
    const poly=keys.map((k,i)=>pt(i,(vals[k]||0)/9*R).join(',')).join(' ');
    s+=`<polygon points="${poly}" fill="var(--accent)" fill-opacity=".25" stroke="var(--accent)" stroke-width="2"/>`;
    keys.forEach((k,i)=>{ const [x,y]=pt(i,R+22); s+=`<text x="${x}" y="${y+4}" text-anchor="middle" style="fill:var(--fg);font-family:var(--body);font-size:12px">${t(k)} ${vals[k]!=null?fmtBand(vals[k]):''}</text>`; });
    return s+'</svg>';
  }
  function plResults(v){
    const pz=state.profile.placement, ov=overallBand(); const g=pz.grammar;
    const vals={listening:pz.listening&&pz.listening.band,reading:pz.reading&&pz.reading.band,writing:pz.writing&&pz.writing.band,speaking:pz.speaking&&pz.speaking.band};
    const gap = ov ? (state.profile.target - ov.band) : null;
    v.appendChild(el(`<div class="grid g2">
      <div class="card stack"><span class="eyebrow">${esc(t('overall'))} (${esc(t('estimated'))})</span>
        <div class="row"><span style="font-family:var(--display);font-size:3.4rem;font-weight:700;line-height:1">${ov?fmtBand(ov.band):'—'}</span><div><span class="pill accent">CEFR ${ov?bandToCEFR(ov.band):'?'}</span><div class="small muted">${ov&&!ov.complete?(isAr()?`${ov.n} من 4 مهارات؛ أكمل الباقي لنتيجة أدق`:`${ov.n} of 4 skills; finish the rest for a full picture`):''}</div></div></div>
        ${gap!=null?`<p>${gap<=0?(isAr()?'أنت عند هدفك أو فوقه حسب هذا التقدير. ثبّت المستوى بالتدريب المنتظم.':'You are at or above your target by this estimate. Consolidate with regular practice.'):(isAr()?`الفجوة إلى هدفك ${fmtBand(state.profile.target)}: <b>${gap.toFixed(1)}</b> درجة. كل نصف درجة يحتاج عادة 4-8 أسابيع من التدريب المركّز.`:`Gap to your target ${fmtBand(state.profile.target)}: <b>${gap.toFixed(1)}</b> bands. Each half band usually needs 4–8 weeks of focused practice.`)}</p>`:''}
        ${radar(vals)}
      </div>
      <div class="card stack"><span class="eyebrow">${isAr()?'التفاصيل':'Breakdown'}</span>
        <table><tbody>
          <tr><td>${esc(t('grammar'))} + ${esc(t('vocab'))}</td><td class="mono">${g?g.level+' ('+g.accuracy+'%)':'—'}</td></tr>
          <tr><td>${esc(t('listening'))}</td><td class="mono">${pz.listening?fmtBand(pz.listening.band)+' · '+pz.listening.raw+'/'+pz.listening.total:'—'}</td></tr>
          <tr><td>${esc(t('reading'))}</td><td class="mono">${pz.reading?fmtBand(pz.reading.band)+' · '+pz.reading.raw+'/'+pz.reading.total:'—'}</td></tr>
          <tr><td>${esc(t('writing'))}</td><td class="mono">${pz.writing?fmtBand(pz.writing.band)+(pz.writing.ai?'':' ~'):'—'}</td></tr>
          <tr><td>${esc(t('speaking'))}</td><td class="mono">${pz.speaking?fmtBand(pz.speaking.band):'—'}</td></tr>
        </tbody></table>
        ${g&&g.weak.length?`<div><b>${isAr()?'ركّز على':'Focus on'}</b><div>${g.weak.map(w=>`<span class="chip warn">${esc(GRAMMAR_TOPICS[w]?GRAMMAR_TOPICS[w][state.lang]:w)}</span>`).join('')}</div></div>`:''}
        <div class="row"><a class="btn primary" href="#plan">${isAr()?'أنشئ خطة الدراسة':'Build my study plan'}</a><a class="btn" href="#grammar">${esc(t('grammar'))}</a><a class="btn ghost" href="#placement-new">${isAr()?'إعادة قسم':'Redo a section'}</a></div>
      </div></div>`));
    pl=null;
  }

  function boot(){
    load();
    window.addEventListener('hashchange', render);
    render();
    initCaps();
  }
  return { boot, defaultProfile, route, go, t, isAr, esc, el, $, $$, shuffle, state, save, addXP, toast, fmtBand, bandToCEFR, rawToBand, roundBand, overallBand, LEVELS, LEVEL_BAND, speakLines, stopSpeech, timerWidget, questionForm, gradeForm, listeningPlayer, writingEditor, speakingSession, feedbackView, radar, render, today };
})();
