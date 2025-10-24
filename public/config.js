// ========= KONFIGURASI WEBSITE ANDA =========
// Ganti path gambar di 'assets/...' sesuai nama file Anda di folder 'public/assets/'.
// ==========================================

const CONFIG = {
    // Info Umum
    studioName: "Indo Elite Studio",
    
    // Tautan Sosial Media Utama
    socials: [
        { name: "Instagram", icon: "logo-instagram", url: "https://instagram.com/indoelitestidio" },
        { name: "TikTok", icon: "logo-tiktok", url: "https://tiktok.com/@indoelitestidio" },
        { name: "Discord", icon: "logo-discord", url: "https://discord.gg/4sxwEPx8NB" },
    ],
    
    // Anggota Tim
    team: [
        {
            name: "Kokoh Hong",
            role: "Owner",
            imageUrl: "assets/team-hong.png", // Ganti ke: 'assets/nama-foto-anda.png'
            socials: [
                { icon: "logo-instagram", url: "https://instagram.com/kokohhong_ganteng" }, // Ganti URL
            ],
        },
        {
            name: "Monx",
            role: "Developer",
            imageUrl: "assets/team-monx.png", // Ganti ke: 'assets/nama-foto-anda.png'
            socials: [
                { icon: "logo-github", url: "#" }, // Ganti URL
            ],
        },
        {
            name: "David",
            role: "Developer",
            imageUrl: "assets/team-david.png", // Ganti ke: 'assets/nama-foto-anda.png'
            socials: [
                { icon: "logo-github", url: "#" }, // Ganti URL
            ],
        },
    ],
    
    // Portofolio Proyek
    projects: [
        {
            title: "Mount Elite",
            description: "Project map gunung dengan fitur climbing dan sistem kustom yang lengkap.",
            imageUrl: "assets/project-mount-elite.png", // Ganti ke: 'assets/nama-gambar-proyek.png'
            gameUrl: "#", // Ganti dengan link game Roblox
        },
        {
            title: "Goa Batu BGTT",
            description: "Map dengan desain goa yang kompleks dan menantang, fokus pada eksplorasi.",
            imageUrl: "assets/project-goa-batu.png", // Ganti ke: 'assets/nama-gambar-proyek.png'
            gameUrl: "#", // Ganti dengan link game Roblox
        },
    ],
    
    // Jasa & Harga
    services: {
        title: "💰 DAFTAR HARGA JASA MAP ROBLOX 🛠️",
        note: "Semua harga dalam Rupiah (IDR). Harga Desain Map Dasar tergantung kompleksitas request.",
        
        packages: [
            {
                title: "🏔️ 1. PAKET MAP GUNUNG/CLIMB",
                tiers: [
                    { name: "Desain Map Dasar", price: "Mulai Rp500.000", note: "(Harga menyesuaikan request)" },
                    { name: "PAKET MEDIUM", price: "TOTAL: Rp700.000", note: "(+Rp200.000) -> Terima Jadi. Termasuk: Checkpoint, Summit, Carry, Aura, Title, Hide Aura & Title." },
                    { name: "PAKET LENGKAP", price: "TOTAL: Rp1.000.000", note: "(+Rp500.000) -> Terima Jadi. Termasuk: Semua Fitur Script Gunung." },
                ],
            },
            {
                title: "💥 2. PAKET MAP RELAPSE/TYCOON",
                tiers: [
                    { name: "Desain Map Dasar", price: "Mulai Rp300.000", note: "(Harga menyesuaikan request)" },
                    { name: "PAKET SCRIPT", price: "TOTAL: Rp700.000", note: "(+Rp400.000) -> Terima Jadi. Termasuk: Donation, Title, AFK System, Setting Graphic, Music System, Emote, Siang/Malam, Leaderboard." },
                ],
            },
        ],
        
        features: {
            title: "📝 FITUR SCRIPT GUNUNG (Rp500K)",
            categories: [
                {
                    name: "Keamanan & Admin (Integrasi Discord)",
                    items: ["Report System: Laporan masuk ke Channel Bot Discord.", "Log Server: Pantau statistik server lewat Discord."],
                },
                {
                    name: "Sistem Inti & Kustom",
                    items: ["Checkpoint + Summit System", "Carry System, Emote System", "Title Kustom (Owner/Admin/Streamer, dll.)", "Hide Aura & Title System"],
                },
                {
                    name: "Vip & Gamepass",
                    items: ["Sistem Gamepass", "Music System", "Vip Benefit"],
                },
            ],
        },
    },
};
