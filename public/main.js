/* Elite Aurora main using CONFIG */
(function(){
  const ICONS = {
    "logo-instagram": '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10z"/><circle cx="12" cy="12" r="3.2"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
    "logo-discord": '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.369A16.318 16.318 0 0016.886 3a10.66 10.66 0 00-1.966 3.09A13.239 13.239 0 0012 6a13.243 13.243 0 00-2.92.09A10.66 10.66 0 007.114 3 16.318 16.318 0 003.683 4.37C2.254 6.808 1.77 9.148 1.934 11.449c1.516 1.09 3.234 1.912 5.108 2.426a9.06 9.06 0 001.03-1.715c-.58-.214-1.135-.472-1.665-.77.14-.104.274-.211.405-.322 3.161 1.477 6.448 1.477 9.61 0 .132.111.266.218.405.322-.53.298-1.085.556-1.665.77.284.603.629 1.175 1.03 1.715 1.874-.514 3.592-1.336 5.108-2.426.224-3.099-.523-5.996-1.991-8.08zM9.25 12.5c-.69 0-1.25-.67-1.25-1.5s.56-1.5 1.25-1.5S10.5 10.17 10.5 11s-.56 1.5-1.25 1.5zm5.5 0c-.69 0-1.25-.67-1.25-1.5s.56-1.5 1.25-1.5S16 10.17 16 11s-.56 1.5-1.25 1.5z"/></svg>',
    "logo-tiktok": '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8.039a6.962 6.962 0 004 1.287V6.27a8.84 8.84 0 01-4-1.101V14.5c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5c.344 0 .68.036 1 .104V6.09A7.99 7.99 0 008 5c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8V8.039z"/></svg>',
    "crown": '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 7l4 3 5-6 5 6 4-3v10H3z"/></svg>',
    "code": '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5 1.41 1.41L5.83 12l3.58 3.59zM16 7l5 5-5 5-1.41-1.41L18.17 12l-3.58-3.59z"/></svg>',
    "pen": '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 000-1.42l-2.34-2.34a1.003 1.003 0 00-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"/></svg>',
    "link": '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12a5 5 0 015-5h3v2h-3a3 3 0 000 6h3v2h-3a5 5 0 01-5-5zm7-1h3a3 3 0 010 6h-3v2h3a5 5 0 000-10h-3v2z"/><path d="M8 11h8v2H8z"/></svg>'
  };

  const $ = (sel, root=document)=>root.querySelector(sel);
  const $$ = (sel, root=document)=>Array.from(root.querySelectorAll(sel));
  const text = (el, val)=>{ if(el) el.textContent = val ?? ""; };

  function setBranding(){
    text($("#brand"), CONFIG.studioName);
    text($("#brand-foot"), CONFIG.studioName);
    text($("#year"), new Date().getFullYear());
    const discord = (CONFIG.socials||[]).find(s=>/discord/i.test(s.name))?.url || "#";
    $("#nav-discord")?.setAttribute("href", discord);
    $("#cta-discord")?.setAttribute("href", discord);
    $("#footer-discord")?.setAttribute("href", discord);
    $("#footer-roblox")?.setAttribute("href", "#");
    text($("#hero-brand"), CONFIG.studioName);
  }

  function makeSocialIcon(icon, url){
    const svg = ICONS[icon] || ICONS["link"];
    return `<a href="${url}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10">${svg}<span class="text-sm hidden sm:inline">` + (icon.split("-")[1]||"link") + `</span></a>`;
  }

  function renderFooterSocials(){
    const wrap = $("#footer-socials");
    if(!wrap) return;
    wrap.innerHTML = (CONFIG.socials||[]).map(s=>makeSocialIcon(s.icon, s.url)).join("");
  }

  function projectCard(p){
    const cover = p.imageUrl || "assets/logo.png";
    const tags = (p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join("");
    return `<article class="project reveal">
      <div class="cover" style="background-image:url('${cover}'), radial-gradient(400px 180px at 30% 20%, rgba(91,141,255,.18), transparent 60%);" role="img" aria-label="${p.title||'Project'}"></div>
      <div class="body">
        <div class="title">${p.title||""}</div>
        <p class="desc">${p.description||""}</p>
        <div class="tags">${tags}</div>
        <div class="actions" style="margin-top:.75rem; display:flex; gap:.6rem">
          <a class="btn-primary" href="${p.gameUrl||'#'}" target="_blank" rel="noopener">Play</a>
        </div>
      </div>
    </article>`;
  }

  function renderProjects(){
    const grid = $("#projects-grid");
    if(!grid) return;
    grid.innerHTML = (CONFIG.projects||[]).map(projectCard).join("");
    $$(".project").forEach(card => {
      card.addEventListener("pointermove", (e)=>{
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100).toFixed(2) + "%");
        card.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100).toFixed(2) + "%");
      });
    });
    text($("#stat-projects"), (CONFIG.projects||[]).length);
  }

  // Normalize role -> badge class + icon
  function roleMeta(roleRaw){
    const r = (roleRaw||"").toLowerCase();
    if (r.includes("owner")) return { cls:"role-owner", icon:ICONS.crown, label:"Owner" };
    if (r.includes("programmer") || r.includes("prog")) return { cls:"role-programmer", icon:ICONS.code, label:"Programmer" };
    if (r.includes("designer") || r.includes("desain")) return { cls:"role-designer", icon:ICONS.pen, label:"Designer" };
    if (r.includes("developer") || r.includes("dev")) return { cls:"role-developer", icon:ICONS.code, label:"Developer" };
    if (r.includes("admin")) return { cls:"role-admin", icon:ICONS.crown, label:"Admin" };
    if (r.includes("mod")) return { cls:"role-moderator", icon:ICONS.crown, label:"Moderator" };
    return { cls:"", icon:"", label:roleRaw||"Member" };
  }

  function teamCard(m){
    const img = m.imageUrl || "assets/logo.png";
    const socials = (m.socials||[]).map(s=>`<a href="${s.url}" target="_blank" rel="noopener" class="inline-flex p-2 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10">${ICONS[s.icon]||ICONS.link}</a>`).join("");
    const meta = roleMeta(m.role);
    return `<article class="team-card reveal">
      <div class="flex items-center gap-4">
        <img src="${img}" onerror="this.src='assets/logo.png'" class="team-ava" alt="${m.name||'member'}" loading="lazy"/>
        <div>
          <div class="font-display font-bold text-lg flex items-center gap-2">${m.name||""}
            ${meta.cls?`<span class="role-badge ${meta.cls}">${meta.icon}${meta.label}</span>`:""}
          </div>
          <div class="text-white/60 text-sm">${m.role||""}</div>
        </div>
      </div>
      <div class="flex gap-2 mt-4">${socials}</div>
    </article>`;
  }

  function renderTeam(){
    const grid = $("#team-grid");
    if(!grid) return;
    const team = CONFIG.team || [];
    grid.innerHTML = team.map(teamCard).join("");
    text($("#stat-team"), team.length);
  }

  function renderServices(){
    const wrapPacks = $("#packages");
    const wrapFeat = $("#features");
    const s = CONFIG.services || {};
    const packages = s.packages || [];
    const features = s.features || { categories: [] };
    const tiersView = (tiers)=> tiers.map(t=>`<div class="rounded-xl p-4 bg-white/[.04] ring-1 ring-white/10">
      <div class="font-semibold">${t.name}</div>
      <div class="text-brand-500 font-bold mt-1">${t.price||""}</div>
      ${t.note?`<div class="text-white/60 text-sm mt-1">${t.note}</div>`:""}
    </div>`).join("");

    wrapPacks.innerHTML = packages.map(p=>`<div class="rounded-2xl p-6 bg-white/[.03] ring-1 ring-white/[.08] backdrop-blur-md reveal">
      <div class="font-display text-xl font-bold">${p.title}</div>
      <div class="grid gap-3 mt-4">${tiersView(p.tiers||[])}</div>
    </div>`).join("");

    $("#services-note").textContent = s.note || "";
    text($("#stat-services"), packages.length);

    wrapFeat.innerHTML = (features.categories||[]).map(cat=>`<div class="rounded-2xl p-6 bg-white/[.03] ring-1 ring-white/[.08] backdrop-blur-md reveal">
      <div class="font-display font-semibold">${cat.name}</div>
      <ul class="mt-3 space-y-2 text-white/70 text-sm">
        ${(cat.items||[]).map(i=>`<li>• ${i}</li>`).join("")}
      </ul>
    </div>`).join("");
  }

  function revealOnScroll(){
    const items = $$(".reveal");
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.style.visibility = "visible";
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    items.forEach(el=> io.observe(el));
  }

  function heroPointerGlow(){
    const card = $(".hero-card");
    if(!card) return;
    card.addEventListener("pointermove", (e)=>{
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100).toFixed(2) + "%");
      card.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100).toFixed(2) + "%");
    });
  }

  function preloader(){
    const el = $("#preloader");
    if(!el) return;
    window.addEventListener("load", ()=>{
      el.style.opacity = "0";
      setTimeout(()=> el.remove(), 300);
    });
  }

  function mobileMenu(){
    const btn = $("#mobile-menu");
    const drawer = $("#mobile-drawer");
    const closeBtn = $("#drawer-close");

    // set link discord di drawer
    const discord = (CONFIG.socials||[]).find(s=>/discord/i.test(s.name))?.url || "#";
    $("#drawer-discord")?.setAttribute("href", discord);

    if(!btn || !drawer) return;
    const open = ()=>{
      drawer.classList.remove("hidden");
      requestAnimationFrame(()=>drawer.classList.add("is-open"));
    };
    const close = ()=>{
      drawer.classList.remove("is-open");
      setTimeout(()=>drawer.classList.add("hidden"), 200);
    };

    btn.addEventListener("click", open);
    closeBtn?.addEventListener("click", close);
    drawer.querySelector(".drawer-backdrop")?.addEventListener("click", close);
    drawer.querySelectorAll("a").forEach(a=> a.addEventListener("click", close));
    document.addEventListener("keydown", (e)=>{ if(e.key==="Escape") close(); });
  }

  function init(){
    setBranding();
    renderFooterSocials();
    renderProjects();
    renderTeam();
    renderServices();
    revealOnScroll();
    heroPointerGlow();
    preloader();
    mobileMenu();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
