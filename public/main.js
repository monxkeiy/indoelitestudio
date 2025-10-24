/*
 * SCRIPT PERAKIT HALAMAN (MAIN LOGIC) - V4 (CYBER-GRID THEME)
 * Fungsionalitas inti (Scroll-Spy, Reveal, etc.) tidak berubah.
 * HANYA template HTML di dalam fungsi load...() yang di-update.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    if (typeof CONFIG === 'undefined') {
        console.error('ERROR: config.js tidak ditemukan atau gagal di-load.');
        return;
    }

    // --- INISIALISASI SEMUA FITUR ---
    initDarkMode();
    initDynamicNavbar();
    initScrollReveal();
    initScrollSpy();
    loadPageContent();

    console.log("Website Indo Elite Studio v4 (Cyber-Grid) berhasil dirakit!");
});


/**
 * (FIXED) Mengaktifkan Dark Mode Toggle
 * Logika klik sederhana. FOUC fix ada di <head>.
 */
function initDarkMode() {
    const toggleButton = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    if (!toggleButton) return;

    toggleButton.addEventListener('click', () => {
        const isDark = htmlElement.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';
        htmlElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    });
}

/**
 * Mengubah UI Navbar (transparan -> frosted glass) saat di-scroll
 */
function initDynamicNavbar() {
    const header = document.getElementById('main-header');
    if (!header) return;
    const scrollThreshold = 50; 
    window.addEventListener('scroll', () => {
        header.classList.toggle('navbar-scrolled', window.scrollY > scrollThreshold);
    }, { passive: true });
}

/**
 * Mengaktifkan animasi "Reveal on Scroll"
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (revealElements.length === 0) return;
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    revealElements.forEach(el => observer.observe(el));
}

/**
 * Mengaktifkan "Scroll-Spy" untuk menyorot link navbar yang aktif
 */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.navbar-link');
    if (sections.length === 0 || navLinks.length === 0) return;
    const observerOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.navbar-link[data-target="#${id}"]`);
                navLinks.forEach(link => link.classList.remove('active'));
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, observerOptions);
    sections.forEach(section => observer.observe(section));
}


// ===============================================
// --- FUNGSI PEMUATAN KONTEN (TEMPLATE DI-UPDATE) ---
// ===============================================

function loadPageContent() {
    loadBasicInfo();
    loadServices();
    loadProjects();
    loadTeam();
    loadFooter();
}

function loadBasicInfo() {
    document.title = CONFIG.studioName + " - Jasa Map Roblox";
    document.getElementById('nav-brand').textContent = CONFIG.studioName;
    document.getElementById('hero-title').textContent = CONFIG.studioName;
}

// Memuat Jasa & Harga (TEMPLATE DI-UPDATE)
function loadServices() {
    const container = document.getElementById('jasa-container');
    const { services } = CONFIG;
    if (!container || !services) return;
    
    let html = `
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-3 text-neon-teal">${services.title}</h2>
            <p class="text-lg text-dark-text mt-2">${services.note}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-10">
            ${services.packages.map(pkg => `
                <div class="cyber-card">
                    <h3 class="cyber-card-title">${pkg.title}</h3>
                    <ul class="space-y-4">
                        ${pkg.tiers.map(tier => `
                            <li class="border-t border-border-color pt-4 first:border-t-0 first:pt-0">
                                <p class="font-semibold text-light-text">${tier.name}</p>
                                <p class="cyber-card-price">${tier.price}</p>
                                <p class="text-sm text-dark-text mt-1">${tier.note}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
        <div class="mt-16 cyber-card">
            <h3 class="cyber-card-title text-center">${services.features.title}</h3>
            <div class="grid md:grid-cols-3 gap-8 text-center md:text-left">
                ${services.features.categories.map(cat => `
                    <div>
                        <h4 class="text-xl font-bold mb-3 text-neon-pink">${cat.name}</h4>
                        <ul class="list-disc list-inside space-y-1 text-dark-text">
                            ${cat.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// Memuat Grid Proyek (TEMPLATE DI-UPDATE)
function loadProjects() {
    const grid = document.getElementById('project-grid');
    const { projects } = CONFIG;
    if (!grid || !projects) return;
    
    grid.innerHTML = projects.map(project => `
        <div class="cyber-card group !p-0 overflow-hidden">
            <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="p-6">
                <h3 class="cyber-card-title">${project.title}</h3>
                <p class="cyber-card-desc mb-4">${project.description}</p>
                <a href="${project.gameUrl}" target="_blank" rel="noopener noreferrer" 
                   class="font-semibold font-mono text-neon-teal hover:text-neon-pink transition-colors">
                    Lihat Game &rarr;
                </a>
            </div>
        </div>
    `).join('');
}

// Memuat Grid Tim (TEMPLATE DI-UPDATE)
function loadTeam() {
    const grid = document.getElementById('team-grid');
    const { team } = CONFIG;
    if (!grid || !team) return;
    
    grid.innerHTML = team.map(member => `
        <div class="cyber-card text-center">
            <img src="${member.imageUrl}" alt="${member.name}" class="cyber-team-img">
            <h3 class="text-2xl font-bold text-light-text">${member.name}</h3>
            <p class="font-semibold text-neon-pink mb-3 font-mono">${member.role}</p>
            <div class="flex justify-center space-x-4">
                ${member.socials.map(social => `
                    <a href="${social.url}" target="_blank" rel="noopener noreferrer" 
                       class="text-dark-text hover:text-neon-teal text-2xl transition-colors">
                        <ion-icon name="${social.icon}"></ion-icon>
                    </a>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Memuat Footer (TEMPLATE DI-UPDATE)
function loadFooter() {
    const container = document.getElementById('footer-container');
    const { socials, studioName } = CONFIG;
    if (!container || !socials || !studioName) return;
    
    container.innerHTML = `
        <h3 class="text-3xl font-bold mb-6 text-neon-teal">Hubungi Kami</h3>
        <p class="text-lg mb-8 text-dark-text">Siap memulai project Anda? Hubungi kami melalui sosial media.</p>
        
        <div class="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            ${socials.map(social => `
                <a href="${social.url}" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center text-lg text-dark-text hover:text-neon-teal transition-colors font-mono">
                    <ion-icon name="${social.icon}" class="text-2xl mr-2"></ion-icon> ${social.name}
                </a>
            `).join('')}
        </div>
        
        <div class="border-t border-border-color pt-8">
            <p class="text-dark-text font-mono">&copy; ${new Date().getFullYear()} ${studioName}. All rights reserved.</p>
        </div>
    `;
}
