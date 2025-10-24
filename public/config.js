const CONFIG = {
    // Info Umum
    studioName: "Indo Elite Studio",
    
    // Tautan Sosial Media Utama
    socials: [
        { name: "Instagram", icon: "logo-instagram", url: "https://instagram.com/indoelitestudio" },
        { name: "TikTok", icon: "logo-tiktok", url: "https://tiktok.com/@indoelitestudio" },
        { name: "Discord", icon: "logo-discord", url: "https://discord.gg/4sxwEPx8NB" },
    ],
    
    // Anggota Tim
    team: [
        {
            name: "HongX",
            role: "Owner",
            imageUrl: "assets/hong.png", // Ganti dengan path foto Anda
            socials: [
                // Tambahkan sosmed Owner di sini
                { icon: "logo-instagram", url: "https://www.instagram.com/hong9x9?igsh=MWNidDk0Mjl5emNsZQ==" } // Contoh
            ]
        },
        {
            name: "Monx",
            role: "Proggramer",
            imageUrl: "assets/monx.png", // Ganti dengan path foto Anda
            socials: [
                { icon: "logo-instagram", url: "https://www.instagram.com/xmonz._?igsh=MTFmMW1iOTVqMTYyNg==" } // Ganti URL
            ]
        },
        {
            name: "David",
            role: "Desainer",
            imageUrl: "assets/david.png", // Ganti dengan path foto Anda
            socials: [
                { icon: "logo-instagram", url: "https://www.instagram.com/vyddd_prnma?igsh=MXZnY3Z1ZTdxYjgwbA==" } // Ganti URL
            ]
        }
    ],
    
    // Portofolio Proyek
    projects: [
        {
            title: "Mount Elite",
            description: "Project map gunung dengan fitur climbing dan sistem kustom yang lengkap.",
            imageUrl: "assets/project-mount-elite.png", // Ganti dengan path gambar
            gameUrl: "https://www.roblox.com/id/games/88335800030716/FREE-COIL-SUMMIT-X25-MOUNT-ELIT" // Ganti dengan link game Roblox
        },
        {
            title: "Goa Batu BGTT",
            description: "Map dengan desain goa yang kompleks dan menantang, fokus pada eksplorasi.",
            imageUrl: "assets/project-goa-batu.png", // Ganti dengan path gambar
            gameUrl: "https://www.roblox.com/share?code=fef4e95962d47446b3579d9b2c3b1e36&type=ExperienceDetails&stamp=1761282602662" // Ganti dengan link game Roblox
        }
    ],
    
    // Jasa & Harga
    services: {
        title: "💰 DAFTAR HARGA JASA MAP ROBLOX - Harga Oktober 🛠️",
        note: "Semua harga dalam Rupiah (IDR). Harga Desain Map Dasar tergantung kompleksitas request.",
        
        // Daftar Paket Harga
        packages: [
            {
                title: "🏔️ 1. PAKET MAP GUNUNG/CLIMB",
                tiers: [
                    { name: "Desain Map Dasar", price: "Mulai Rp500.000", note: "(Harga menyesuaikan request)" },
                    { name: "PAKET MEDIUM", price: "TOTAL: Rp700.000", note: "(+Rp200.000) -> Terima Jadi. Termasuk: Checkpoint, Summit, Carry, Aura, Title, Hide Aura & Title." },
                    { name: "PAKET LENGKAP", price: "TOTAL: Rp1.000.000", note: "(+Rp500.000) -> Terima Jadi. Termasuk: Semua Fitur Script Gunung." }
                ]
            },
            {
                title: "💥 2. PAKET MAP RELAPSE/TYCOON",
                tiers: [
                    { name: "Desain Map Dasar", price: "Mulai Rp300.000", note: "(Harga menyesuaikan request)" },
                    { name: "PAKET SCRIPT", price: "TOTAL: Rp700.000", note: "(+Rp400.000) -> Terima Jadi. Termasuk: Donation, Title, AFK System, Setting Graphic, Music System, Emote, Siang/Malam, Leaderboard." }
                ]
            }
        ],
        
        // Daftar Fitur Tambahan
        features: {
            title: "📝 FITUR SCRIPT GUNUNG (Rp500K)",
            categories: [
                {
                    name: "Keamanan & Admin (Integrasi Discord)",
                    items: ["Report System: Laporan masuk ke Channel Bot Discord.", "Log Server: Pantau statistik server lewat Discord."]
                },
                {
                    name: "Sistem Inti & Kustom",
                    items: ["Checkpoint + Summit System", "Carry System, Emote System", "Title Kustom (Owner/Admin/Streamer, dll.)", "Hide Aura & Title System"]
                },
                {
                    name: "Vip & Gamepass",
                    items: ["Sistem Gamepass", "Music System", "Vip Benefit"]
                }
            ]
        }
    }
};