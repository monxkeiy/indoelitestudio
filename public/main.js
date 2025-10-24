document.addEventListener('DOMContentLoaded', () => {
    
    // Pastikan CONFIG sudah ter-load
    if (typeof CONFIG === 'undefined') {
        console.error('ERROR: config.js tidak ditemukan atau gagal di-load.');
        return;
    }

    // --- 1. INISIALISASI SEMUA FITUR ---
    
    initDarkMode();
    initDynamicNavbar();
    initScrollReveal();
    initScrollSpy();
    
    // Memuat konten dari config.js
    loadPageContent();

    console.log("Website Indo Elite Studio v2 (dengan animasi) berhasil dirakit!");
});


/**
 * Mengaktifkan Dark Mode Toggle dengan penyimpanan localStorage
 */
function initDarkMode() {
    const toggleButton = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    const applyTheme = (theme) => {
        htmlElement.classList.toggle('dark', theme === 'dark');
    };

    let savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    toggleButton.addEventListener('click', () => {
        const newTheme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

/**
 * Mengubah UI Navbar (transparan -> frosted glass) saat di-scroll
 */
function initDynamicNavbar() {
    const header = document.getElementById('main-header');
    if (!header) return;

    // Batas scroll (dalam pixel) sebelum navbar berubah
    const scrollThreshold = 50; 

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('navbar-scrolled');
        } else {
            header.classList.remove('navbar-scrolled');
        }
    }, { passive: true }); // 'passive: true' untuk performa scroll lebih baik
}

/**
 * Mengaktifkan animasi "Reveal on Scroll"
 * Menggunakan Intersection Observer untuk efisiensi
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (revealElements.length === 0) return;

    const observerOptions = {
        root: null, // relatif ke viewport
        rootMargin: '0px',
        threshold: 0.15 // Elemen dianggap terlihat jika 15% masuk layar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Berhenti mengamati elemen ini setelah animasinya jalan
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Amati setiap elemen
    revealElements.forEach(el => {
        observer.observe(el);
    });
}

/**
 * Mengaktifkan "Scroll-Spy" untuk menyorot link navbar yang aktif
 * Menggunakan Intersection Observer
 */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.navbar-link');
    if (sections.length === 0 || navLinks.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Aktif di tengah layar
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.navbar-link[data-target="#${id}"]`);
                
                // Hapus 'active' dari semua link dulu
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Tambahkan 'active' ke link yang sesuai
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}


// ===============================================
// --- SEMUA FUNGSI PEMUATAN KONTEN (DARI V1) ---
// ===============================================

/**
 * Fungsi utama untuk memanggil semua perakit konten
 */
function loadPageContent() {
    loadBasicInfo();
    loadServices();
    loadProjects();
    loadTeam();
    loadFooter();
}

// Memuat Info Dasar
function loadBasicInfo() {
    document.title = CONFIG.studioName + " - Jasa Map Roblox";
    document.getElementById('nav-brand').textContent = CONFIG.studioName;
    document.getElementById('hero-title').textContent = CONFIG.studioName;
}

// Memuat Jasa & Harga
function loadServices() {
    const container = document.getElementById('jasa-container');
    const { services } = CONFIG;
    if (!container || !services) return;
    
    let html = `
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-3">Jasa Pembuatan Map Roblox</h2>
            <p class="text-lg font-semibold text-yellow-500">${services.title}</p>
            <p class="text-gray-600 dark:text-gray-300 mt-2">${services.note}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-10">
            ${services.packages.map(pkg => `
                <div class="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
                    <h3 class="text-3xl font-bold mb-6 text-primary-600 dark:text-primary-400">${pkg.title}</h3>
                    <ul class="space-y-4">
                        ${pkg.tiers.map(tier => `
                            <li class="border-t dark:border-gray-600 pt-4 first:border-t-0 first:pt-0">
                                <p class="font-semibold">${tier.name}</p>
                                <p class="text-lg text-green-600 dark:text-green-400 font-bold">${tier.price}</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${tier.note}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
        <div class="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 border border-primary-500/30">
            <h3 class="text-3xl font-bold mb-6 text-center">${services.features.title}</h3>
            <div class="grid md:grid-cols-3 gap-8 text-center md:text-left">
                ${services.features.categories.map(cat => `
                    <div>
                        <h4 class="text-xl font-bold mb-3 text-primary-500">${cat.name}</h4>
                        <ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                            ${cat.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// Memuat Grid Proyek
function loadProjects() {
    const grid = document.getElementById('project-grid');
    const { projects } = CONFIG;
    if (!grid || !projects) return;
    
    grid.innerHTML = projects.map(project => `
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group">
            <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300">
            <div class="p-6">
                <h3 class="text-2xl font-bold mb-2">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
                <a href="${project.gameUrl}" target="_blank" rel="noopener noreferrer" class="font-semibold text-primary-600 dark:text-primary-400 hover:underline">
                    Lihat Game &rarr;
                </a>
            </div>
        </div>
    `).join('');
}

// Memuat Grid Tim
function loadTeam() {
    const grid = document.getElementById('team-grid');
    const { team } = CONFIG;
    if (!grid || !team) return;
    
    grid.innerHTML = team.map(member => `
        <div class="text-center bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <img src="${member.imageUrl}" alt="${member.name}" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary-500">
            <h3 class="text-2xl font-bold">${member.name}</h3>
            <p class="font-semibold text-primary-500 dark:text-primary-400 mb-3">${member.role}</p>
            <div class="flex justify-center space-x-4">
                ${member.socials.map(social => `
                    <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="text-gray-500 dark:text-gray-400 hover:text-primary-500 text-2xl">
                        <ion-icon name="${social.icon}"></ion-icon>
                    </a>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Memuat Footer
function loadFooter() {
    const container = document.getElementById('footer-container');
    const { socials, studioName } = CONFIG;
    if (!container || !socials || !studioName) return;
    
    container.innerHTML = `
        <h3 class="text-3xl font-bold mb-6">Hubungi Kami</h3>
        <p class="text-lg mb-8">Siap memulai project Anda? Hubungi kami melalui sosial media.</p>
        
        <div class="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            ${socials.map(social => `
                <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="flex items-center text-lg hover:text-primary-400 transition-colors">
                    <ion-icon name="${social.icon}" class="text-2xl mr-2"></ion-icon> ${social.name}
                </a>
            `).join('')}
        </div>
        
        <div class="border-t border-gray-700 pt-8">
            <p>&copy; ${new Date().getFullYear()} ${studioName}. All rights reserved.</p>
        </div>
    `;
}
