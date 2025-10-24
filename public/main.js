/* Main logic Indo Elite Studio premium */
(function(){
  const C = window.IES_CONFIG || { brand: "Indo Elite Studio", socials: {} };

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  function setBranding(){
    $("#brand").textContent = C.brand;
    $("#year").textContent = new Date().getFullYear();
    const d = C.socials?.discord || "#";
    const r = C.socials?.robloxGroup || "#";
    $("#discord-link")?.setAttribute("href", d);
    $("#cta-discord")?.setAttribute("href", d);
    $("#about-discord")?.setAttribute("href", d);
    $("#footer-discord")?.setAttribute("href", d);
    $("#footer-roblox")?.setAttribute("href", r);

    // Stats
    $("#stat-projects").textContent = C.stats?.projects ?? C.projects?.length ?? "--";
    $("#stat-events").textContent = C.stats?.events ?? "--";
    $("#stat-community").textContent = C.stats?.members ?? "--";
  }

  function projectCard(p){
    const tags = (p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join("");
    return `<article class="project reveal-on" data-type="${(p.type||[]).join(",")}">
      <div class="cover" style="background-image:url('${p.cover}')"></div>
      <div class="body">
        <div class="title">${p.name}</div>
        <p class="desc">${p.description||""}</p>
        <div class="tags">${tags}</div>
        <div class="actions">
          <a class="btn-primary" href="${p.robloxUrl||"#"}" target="_blank" rel="noopener">Play</a>
          <a class="btn-ghost" href="${p.discordUrl||C.socials?.discord||"#"}" target="_blank" rel="noopener">Discord</a>
        </div>
      </div>
    </article>`;
  }

  function renderProjects(){
    const grid = $("#projects-grid");
    if(!grid) return;
    grid.innerHTML = (C.projects||[]).map(projectCard).join("");

    // Hover glow tracking
    $$(".project").forEach(card => {
      card.addEventListener("pointermove", (e)=>{
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(2) + "%";
        const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(2) + "%";
        card.style.setProperty("--mx", x);
        card.style.setProperty("--my", y);
      });
    });

    // Filtering
    $$(".chip").forEach(chip=>{
      chip.addEventListener("click", ()=>{
        const f = chip.dataset.filter;
        $$(".chip").forEach(c=>c.classList.remove("ring-brand-500","text-white"));
        chip.classList.add("ring-brand-500","text-white");
        $$(".project").forEach(card=>{
          const type = card.getAttribute("data-type")||"";
          if(f==="all" || type.includes(f)) card.style.display = "";
          else card.style.display = "none";
        });
      });
    });
  }

  function revealOnScroll(){
    const items = $$(".reveal-on, .project.reveal-on");
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
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
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(2) + "%";
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(2) + "%";
      card.style.setProperty("--mx", x);
      card.style.setProperty("--my", y);
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
    if(!btn) return;
    let open = false;
    btn.addEventListener("click", ()=>{
      open = !open;
      // Simple demo: scroll to projects when opened
      if(open){
        document.location.hash = "#projects";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    setBranding();
    renderProjects();
    revealOnScroll();
    heroPointerGlow();
    preloader();
    mobileMenu();
  });
})();
