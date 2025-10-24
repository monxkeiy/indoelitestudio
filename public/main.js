document.addEventListener('DOMContentLoaded', () => {
    
    // Pastikan CONFIG sudah ter-load
    if (typeof CONFIG === 'undefined') {
        console.error('ERROR: config.js tidak ditemukan atau gagal di-load.');
        return;
    }

    // --- 1. LOGIKA DARK MODE (LENGKAP & ESTETIK) ---
    const setupDarkMode = () => {
        const toggleButton = document.getElementById('darkModeToggle');
        const htmlElement = document.documentElement;

        const applyTheme = (theme) => {
            if (theme === 'dark') {
                htmlElement.classList.add('dark');
            } else {
                htmlElement.classList.remove('dark');
            }
        };

        let savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(savedTheme);

        toggleButton.addEventListener('click', () => {
            const newTheme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    };

    // --- 2. FUNGSI "PERAKIT" (BUILDERS) ---

    // Memuat Info Dasar
    const loadBasicInfo = () => {
        document.title = CONFIG.studioName + " - Jasa Map Roblox";
        document.getElementById('nav-brand').textContent = CONFIG.studioName;
        document.getElementById('hero-title').textContent = CONFIG.studioName;
    };

    // Memuat Jasa & Harga
    const loadServices = () => {
        const container = document.getElementById('jasa-container');
        const { services } = CONFIG;
        
        // Template HTML untuk Jasa
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
                                <li class="border-t dark:border-gray-600 pt-4">
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
    };

    // Memuat Grid Proyek
    const loadProjects = () => {
        const grid = document.getElementById('project-grid');
        const { projects } = CONFIG;
        
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
    };

    // Memuat Grid Tim
    const loadTeam = () => {
        const grid = document.getElementById('team-grid');
        const { team } = CONFIG;
        
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
    };

    // Memuat Footer
    const loadFooter = () => {
        const container = document.getElementById('footer-container');
        const { socials, studioName } = CONFIG;
        
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
    };

    // --- 3. EKSEKUSI SEMUA FUNGSI "PERAKIT" ---
    setupDarkMode();
    loadBasicInfo();
    loadServices();
    loadProjects();
    loadTeam();
    loadFooter();

    console.log("Website Indo Elite Studio berhasil dirakit dari config.js!");
});