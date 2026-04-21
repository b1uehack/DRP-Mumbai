const sectorData = [
    { id: 1, en: { title: "Sector 1 (Industrial Core)", status: "Active Survey", desc: "Biometric mapping and property assessment of the artisanal leather and pottery hubs." }, hi: { title: "सेक्टर 1 (औद्योगिक केंद्र)", status: "सक्रिय सर्वेक्षण", desc: "चमड़े और मिट्टी के बर्तनों के केंद्र का बायोमेट्रिक मानचित्रण और संपत्ति मूल्यांकन।" }, color: "#f59e0b" },
    { id: 2, en: { title: "Sector 2 (Dharavi Main)", status: "Planning Phase", desc: "Layout design for mixed-use residential and commercial towers is being finalized." }, hi: { title: "सेक्टर 2 (धारावी मुख्य)", status: "योजना चरण", desc: "मिश्रित आवासीय और वाणिज्यिक टावरों के लिए लेआउट डिजाइन को अंतिम रूप दिया जा रहा है।" }, color: "#3b82f6" },
    { id: 3, en: { title: "Sector 3 (Transit Zones)", status: "Land Preparation", desc: "Demarkation of internal roads and infrastructure corridors for heavy machinery." }, hi: { title: "सेक्टर 3 (ट्रांजिट जोन)", status: "भूमि तैयारी", desc: "आंतरिक सड़कों और बुनियादी ढांचे के गलियारों का सीमांकन।" }, color: "#6366f1" },
    { id: 4, en: { title: "Sector 4 (Residential Blocks)", status: "Consensus Building", desc: "Town hall meetings with resident associations regarding rehousing preferences." }, hi: { title: "सेक्टर 4 (आवासीय ब्लॉक)", status: "सहमति निर्माण", desc: "पुनर्वास प्राथमिकताओं के संबंध में निवासी संघों के साथ टाउन हॉल बैठकें।" }, color: "#a855f7" },
    { id: 5, en: { title: "Sector 5 (Infrastructure)", status: "Utility Mapping", desc: "Finalizing the 24/7 water and power grid layout for the first phase of apartments." }, hi: { title: "सेक्टर 5 (बुनियादी ढांचा)", status: "उपयोगिता मानचित्रण", desc: "अपार्टमेंट के पहले चरण के लिए जल और बिजली ग्रिड लेआउट को अंतिम रूप देना।" }, color: "#ec4899" },
    { id: 6, en: { title: "Sector 6 (Railway Land)", status: "Construction Active", desc: "Foundations for 11,000 units are currently being laid on the Matunga site." }, hi: { title: "सेक्टर 6 (रेलवे भूमि)", status: "निर्माण सक्रिय", desc: "माटुंगा साइट पर 11,000 इकाइयों के लिए वर्तमान में नींव रखी जा रही है।" }, color: "#10b981" }
];

const fallbackNews = [
    {
        id: 1, source: "Official/PTI", date: "Apr 21, 2026", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
        en: { 
            title: "Sector 6 Foundations: Structural Phase for 11,000 Homes", 
            desc: "The Matunga railway land site enters its most critical engineering phase to date.", 
            full: `Dharavi Redevelopment Project (DRP) engineers have successfully completed the massive piling and foundational work for the first cluster of buildings in Sector 6. This sector, situated on the 35-acre Railway land in Matunga, is the flagship starting point for the master plan. <br><br>The first phase consists of 11 residential blocks, each rising to 24 stories. By utilizing state-of-the-art pre-cast structural elements manufactured off-site, the project aims to reduce construction noise and pollution in the densely populated neighborhood. These units are designed as 350 sq. ft. carpet area homes, featuring high-speed elevators, secondary power backups, and specialized fire safety systems that exceed standard municipal requirements. DRPPL officials stated that the first 1,000 families are expected to receive their keys by mid-2027, marking the beginning of the world's most complex urban transformation.`
        },
        hi: { 
            title: "सेक्टर 6 फाउंडेशन: 11,000 घरों के लिए संरचनात्मक चरण", 
            desc: "माटुंगा रेलवे भूमि स्थल अपने सबसे महत्वपूर्ण इंजीनियरिंग चरण में प्रवेश कर गया है।", 
            full: `धारावी पुनर्विकास परियोजना (DRP) के इंजीनियरों ने सेक्टर 6 में इमारतों के पहले क्लस्टर के लिए बड़े पैमाने पर पाइलिंग और बुनियादी काम सफलतापूर्वक पूरा कर लिया है। यह क्षेत्र, माटुंगा में 35 एकड़ रेलवे भूमि पर स्थित है। <br><br>पहले चरण में 11 आवासीय ब्लॉक शामिल हैं, जिनमें से प्रत्येक 24 मंजिला होगा। इस परियोजना का लक्ष्य निर्माण शोर और प्रदूषण को कम करना है। इन इकाइयों को 350 वर्ग फुट के कार्पेट एरिया वाले घरों के रूप में डिजाइन किया गया है, जिसमें हाई-स्पीड लिफ्ट और विशेष अग्नि सुरक्षा प्रणालियां शामिल हैं। अधिकारियों ने कहा कि पहले 1,000 परिवारों को 2027 के मध्य तक अपनी चाबियां मिलने की उम्मीद है।`
        }
    },
    {
        id: 2, source: "Bombay HC", date: "Apr 18, 2026", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
        en: { 
            title: "Legal Landmark: HC Upholds Unified Dharavi Planning Boundary", 
            desc: "Court dismisses exclusion petitions, clearing path for holistic infrastructure delivery.", 
            full: `A division bench of the Bombay High Court has cleared the final legal hurdle for the Dharavi Redevelopment Project by dismissing a series of petitions from historical land-owner trusts. The petitioners had requested the court to exclude specific pockets, including parts of Koliwada and specific industrial estates, from the project's 'Notified Area' status. <br><br>The Court observed that fragmented development would fatally undermine the goal of creating a modern urban ecosystem. By upholding the unified boundary, the project can now proceed with a single, integrated network for sewage, non-stop water supply, and broad transit corridors that would have been impossible if individual plots were carved out. Legal experts suggest this ruling provides the necessary 'sovereign clarity' for international financiers and development partners to commit long-term resources to the project.`
        },
        hi: { 
            title: "कानूनी लैंडमार्क: हाई कोर्ट ने एकीकृत धारावी योजना सीमा को बरकरार रखा", 
            desc: "अदालत ने बहिष्कार याचिकाओं को खारिज कर दिया, जिससे समग्र बुनियादी ढांचे का रास्ता साफ हो गया।", 
            full: `बॉम्बे हाई कोर्ट की एक खंडपीठ ने ऐतिहासिक भूमि-मालिक ट्रस्टों की याचिकाओं की एक श्रृंखला को खारिज करके धारावी पुनर्विकास परियोजना के लिए अंतिम कानूनी बाधा को दूर कर दिया है। <br><br>अदालत ने कहा कि खंडित विकास एक आधुनिक शहरी पारिस्थितिकी तंत्र बनाने के लक्ष्य को घातक रूप से कमजोर करेगा। एकीकृत सीमा को बरकरार रखकर, परियोजना अब सीवेज, बिना रुके पानी की आपूर्ति और व्यापक पारगमन गलियारों के लिए एक एकल, एकीकृत नेटवर्क के साथ आगे बढ़ सकती है।`
        }
    },
    {
        id: 3, source: "DRPPL News", date: "Apr 15, 2026", img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800",
        en: { 
            title: "Digital Survey Update: Biometric Data Analysis Reaches 85%", 
            desc: "Over 85,000 households now mapped in the world's most precise GIS-based resident registry.", 
            full: `The Special Purpose Vehicle (DRPPL) has announced that its on-ground survey teams have successfully mapped and verified 85% of the households in Sectors 1 through 5. This survey utilizes advanced GIS (Geographic Information System) mapping combined with biometric verification to ensure that every eligible resident is accounted for in the master registry. <br><br>Each structure is assigned a unique Digital ID, which is linked to the resident's Aadhaar and historical documents. This high-precision data is being stored in a secure, decentralized vault to prevent data tampering. To assist residents who were unavailable during the first three rounds, DRPPL has established 'Help Desks' at five strategic locations across Dharavi. Residents are encouraged to visit these centers with their original documents to complete their 'Incentive Allotment' status before the registry closes next month.`
        },
        hi: { 
            title: "डिजिटल सर्वे अपडेट: बायोमेट्रिक डेटा विश्लेषण 85% तक पहुंचा", 
            desc: "विश्व के सबसे सटीक GIS-आधारित निवासी रजिस्ट्री में अब 85,000 से अधिक घर मैप किए गए हैं।", 
            full: `DRPPL ने घोषणा की है कि उसकी ऑन-ग्राउंड सर्वेक्षण टीमों ने सेक्टर 1 से 5 तक के 85% घरों का सफलतापूर्वक मानचित्रण और सत्यापन किया है। यह सर्वेक्षण प्रत्येक पात्र निवासी का मास्टर रजिस्ट्री में हिसाब सुनिश्चित करने के लिए उन्नत GIS मानचित्रण और बायोमेट्रिक सत्यापन का उपयोग करता है। <br><br>प्रत्येक संरचना को एक अद्वितीय डिजिटल आईडी दी गई है, जो निवासी के आधार और ऐतिहासिक दस्तावेजों से जुड़ी है। निवासियों की सहायता के लिए जो पहले तीन दौर के दौरान अनुपलब्ध थे, DRPPL ने धारावी में पांच रणनीतिक स्थानों पर 'हेल्प डेस्क' स्थापित किए हैं।`
        }
    },
    {
        id: 4, source: "Govt Portal", date: "Apr 12, 2026", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
        en: { 
            title: "Housing Policy: Hire-Purchase Breakdown for Upper-Floor Residents", 
            desc: "Official guidelines empower residents present after the 2000 cutoff with long-term ownership.", 
            full: `The Government of Maharashtra has officially gazetted the 'Hire-Purchase' rules for residents occupied on upper floors of Dharavi structures prior to November 15, 2022. While these residents do not qualify for the 'Free In-Situ' housing reserved for ground-floor pre-2000 structures, the project ensures they are not displaced. <br><br>Key features of the plan: <br>1. Provision of a modern 300 sq. ft. self-contained home. <br>2. A nominal monthly maintenance fee for a 25-year tenure. <br>3. Full title-deed and legal ownership transfer after the 25-year period is complete. <br>4. Option to settle the 'Hire-Purchase' value upfront for early ownership. <br>This policy solves one of the project's most complex challenges, providing a dignified housing solution for nearly 100,000 families who were previously considered 'ineligible' under older SRA rules.`
        },
        hi: { 
            title: "आवास नीति: ऊपरी मंजिल के निवासियों के लिए किराया-खरीद ब्रेकडाउन", 
            desc: "आधिकारिक दिशानिर्देश 2000 के कटऑफ के बाद मौजूद निवासियों को दीर्घकालिक स्वामित्व के साथ सशक्त बनाते हैं।", 
            full: `महाराष्ट्र सरकार ने 15 नवंबर, 2022 से पहले धारावी संरचनाओं की ऊपरी मंजिलों पर रहने वाले निवासियों के लिए 'किराया-खरीद' नियमों को आधिकारिक रूप से अधिसूचित कर दिया है। <br><br>योजना की मुख्य विशेषताएं: <br>1. आधुनिक 300 वर्ग फुट के घर का प्रावधान। <br>2. 25 साल की अवधि के लिए मामूली मासिक रखरखाव शुल्क। <br>3. 25 साल पूरे होने के बाद पूर्ण स्वामित्व हस्तांतरण। <br>यह नीति लगभग 1,00,000 परिवारों के लिए एक गरिमापूर्ण आवास समाधान प्रदान करती है।`
        }
    },
    {
        id: 5, source: "Skill Mission", date: "Apr 10, 2026", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800",
        en: { 
            title: "Future Skills: Vocational Centers Training 5,000 Local Youth", 
            desc: "Dharavi Social Mission launches training programs in Tech, Logistics, and Smart Construction.", 
            full: `In a move to make Dharavi residents active partners in the redevelopment, the Social Mission branch has successfully launched its third vocational training center. The initiative focuses on high-demand sectors such as Cloud Computing, Hospitality Management, and Modern Safety Engineering. <br><br>Over 5,000 local youth have enrolled in the current batch. The training is provided free of cost and includes a monthly stipend for regular attendees. Crucially, the mission has partnered with Adani Group's wider infrastructure ecosystem to guarantee job placements for top performers. By equipping the local workforce with 'Smart Construction' skills, the project ensures that a significant portion of the redevelopment's technical work is carried out by the original residents themselves, fostering a sense of community ownership.`
        },
        hi: { 
            title: "भविष्य के कौशल: व्यावसायिक केंद्र 5,000 स्थानीय युवाओं को प्रशिक्षित कर रहे हैं", 
            desc: "धारावी सोशल मिशन ने टेक, लॉजिस्टिक्स और स्मार्ट कंस्ट्रक्शन में प्रशिक्षण कार्यक्रम शुरू किए।", 
            full: `धारावी निवासियों को पुनर्विकास में सक्रिय भागीदार बनाने के लिए, सोशल मिशन शाखा ने अपना तीसरा व्यावसायिक प्रशिक्षण केंद्र सफलतापूर्वक शुरू किया है। पहल क्लाउड कंप्यूटिंग, हॉस्पिटैलिटी मैनेजमेंट और आधुनिक सुरक्षा इंजीनियरिंग जैसे क्षेत्रों पर केंद्रित है। <br><br>मौजूदा बैच में 5,000 से अधिक स्थानीय युवाओं ने नामांकन किया है। मिशन ने शीर्ष प्रदर्शन करने वालों के लिए नौकरी प्लेसमेंट की गारंटी देने के लिए अडानी समूह के व्यापक बुनियादी ढांचे के साथ साझेदारी की है।`
        }
    }
];

let newsData = [];
let currentLang = 'en';
let currentTheme = 'light';

const translations = {
    en: {
        btn: "हिन्दी", news: "Latest Updates", sectors: "Sectors Progress", guide: "Citizen Eligibility",
        docsTitle: "Mandatory Document Checklist", verified: "VERIFIED SOURCE", readMore: "Read Full Report →",
        eligTitle: "Verified Eligibility Tiers",
        eligContent: `
            <div style="margin-bottom: 1rem; border-left: 4px solid var(--primary); padding-left: 1rem;">
                <h4 style="color: var(--primary);">Tier 1: Pre-2000 Families</h4>
                <p style="font-size: 0.9rem;">Free 350 sq. ft. carpet area homes in-situ. Proof of residence prior to Jan 1, 2000 is mandatory.</p>
            </div>
            <div style="margin-bottom: 1rem; border-left: 4px solid var(--primary); padding-left: 1rem;">
                <h4 style="color: var(--primary);">Tier 2: 2000-2011 Families</h4>
                <p style="font-size: 0.9rem;">Eligible for homes at subsidized cost outside notified area. Requires residency proof between 2000-2011.</p>
            </div>
            <div style="border-left: 4px solid var(--primary); padding-left: 1rem;">
                <h4 style="color: var(--primary);">Tier 3: Post-2011 / Upper Floor</h4>
                <p style="font-size: 0.9rem;">Qualify for Hire-Purchase scheme. Possession with ownership after 25 years of nominal rent.</p>
            </div>
        `,
        docs: ["Aadhaar Card", "Voter ID", "Ration Card", "Electricity Bill (Pre-cutoff)", "Property Tax Receipt", "Gumasta License", "School LC", "Bank Passbook"]
    },
    hi: {
        btn: "English", news: "ताज़ा अपडेट", sectors: "सेक्टर की प्रगति", guide: "नागरिक पात्रता",
        docsTitle: "अनिवार्य दस्तावेज़ सूची", verified: "सत्यापित स्रोत", readMore: "पूरी रिपोर्ट →",
        eligTitle: "सत्यापित पात्रता स्तर",
        eligContent: `
            <div style="margin-bottom: 1rem; border-left: 4px solid var(--primary); padding-left: 1rem;">
                <h4 style="color: var(--primary);">स्तर 1: 2000 से पहले के परिवार</h4>
                <p style="font-size: 0.9rem;">350 वर्ग फुट का मुफ्त घर। 1 जनवरी 2000 से पहले का निवास प्रमाण अनिवार्य है।</p>
            </div>
            <div style="margin-bottom: 1rem; border-left: 4px solid var(--primary); padding-left: 1rem;">
                <h4 style="color: var(--primary);">स्तर 2: 2000-2011 परिवार</h4>
                <p style="font-size: 0.9rem;">रियायती लागत पर घर के लिए पात्र। 2000-2011 के बीच निवास प्रमाण आवश्यक है।</p>
            </div>
            <div style="border-left: 4px solid var(--primary); padding-left: 1rem;">
                <h4 style="color: var(--primary);">स्तर 3: 2011 के बाद / ऊपरी मंजिल</h4>
                <p style="font-size: 0.9rem;">किराया-खरीद योजना के लिए पात्र। 25 साल बाद स्वामित्व के साथ कब्जा।</p>
            </div>
        `,
        docs: ["आधार कार्ड", "वोटर आईडी", "राशन कार्ड", "बिजली बिल", "संपत्ति कर रसीद", "गुमास्ता लाइसेंस", "स्कूल एलसी", "बैंक पासबुक"]
    }
};

async function init() {
    setupTabs();
    loadTheme();
    await fetchNews();
    renderContent();
}

function loadTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        currentTheme = 'dark';
        updateThemeIcon();
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    document.querySelector('#theme-btn i').className = currentTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

async function fetchNews() {
    try {
        const res = await fetch('news.json');
        newsData = await res.json();
        if(!newsData || newsData.length === 0) throw new Error();
    } catch (e) {
        newsData = fallbackNews;
    }
}

function setupTabs() {
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach(btn => {
        btn.onclick = () => {
            btns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            const target = document.getElementById(btn.dataset.tab);
            if (target) target.classList.add('active');
            renderContent();
        };
    });
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    renderContent();
    document.getElementById('lang-btn').innerText = translations[currentLang].btn;
}

function renderContent() {
    const lang = translations[currentLang];
    
    document.getElementById('tab-news').innerText = lang.news;
    document.getElementById('tab-sectors').innerText = lang.sectors;
    document.getElementById('tab-info').innerText = lang.guide;

    const newsContainer = document.getElementById('news-container');
    if(newsContainer) {
        newsContainer.innerHTML = newsData.slice(0, 5).map(item => `
            <div class="news-row" onclick="openNews(${item.id})">
                <div class="news-img" style="background: url('${item.img}') center/cover no-repeat;"></div>
                <div class="news-content">
                    <div class="verified-badge"><i class="fa-solid fa-circle-check"></i> ${lang.verified} - ${item.source}</div>
                    <h3>${item[currentLang].title}</h3>
                    <p style="color: var(--text-dim); font-size: 0.9rem; margin-bottom: 1rem;">${item[currentLang].desc}</p>
                    <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700;">
                        <span style="color: var(--text-dim);">${item.date}</span>
                        <span style="color: var(--primary);">${lang.readMore}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    const sectorGrid = document.getElementById('sector-grid');
    if(sectorGrid) {
        sectorGrid.innerHTML = sectorData.map(s => `
            <div class="sub-card" style="border-left: 6px solid ${s.color};">
                <span style="font-size: 0.7rem; font-weight: 800; color: ${s.color}; text-transform: uppercase;">${s[currentLang].status}</span>
                <h3 style="margin: 0.5rem 0;">${s[currentLang].title}</h3>
                <p style="font-size: 0.85rem; color: var(--text-dim);">${s[currentLang].desc}</p>
            </div>
        `).join('');
    }

    const eligCard = document.getElementById('elig-card');
    if(eligCard) {
        eligCard.innerHTML = `
            <h3 style="margin-bottom: 1.5rem; font-size: 1.4rem;">${lang.eligTitle}</h3>
            <div>${lang.eligContent}</div>
        `;
    }

    const docsContent = document.getElementById('docs-content');
    if(docsContent) {
        const docsTitle = document.getElementById('docs-title');
        if(docsTitle) docsTitle.innerText = lang.docsTitle;
        docsContent.innerHTML = lang.docs.map(doc => `
            <div class="doc-tag"><i class="fa-solid fa-file-shield"></i> ${doc}</div>
        `).join('');
    }
}

function openNews(id) {
    const item = newsData.find(n => n.id === id);
    if (!item) return;
    const modal = document.getElementById('news-modal');
    const body = document.getElementById('modal-body');
    
    // IMAGE REMOVED FROM BODY (requested by user)
    // ONLY INFORMATION PROVIDED
    body.innerHTML = `
        <div class="verified-badge" style="margin-bottom: 1rem;"><i class="fa-solid fa-circle-check"></i> VERIFIED OFFICIAL REPORT</div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem; color: var(--primary); line-height: 1.3;">${item[currentLang].title}</h2>
        <div style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 2rem; font-weight: 700; border-bottom: 1px solid var(--border); padding-bottom: 1rem;">
            PUBLISHED: ${item.date} | SOURCE: ${item.source}
        </div>
        <div style="font-size: 1.1rem; line-height: 1.9; color: var(--text-main); text-align: justify;">
            ${item[currentLang].full}
        </div>
        <button onclick="closeModal()" style="width: 100%; margin-top: 2rem; padding: 1.25rem; background: var(--primary); color: white; border: none; border-radius: 16px; font-weight: 800; cursor: pointer; font-size: 1rem; box-shadow: 0 10px 20px -5px var(--primary-glow);">Close Report</button>
    `;
    modal.style.display = 'flex';
}

function closeModal() { document.getElementById('news-modal').style.display = 'none'; }
window.onclick = (e) => { if(e.target === document.getElementById('news-modal')) closeModal(); }

document.addEventListener('DOMContentLoaded', init);
