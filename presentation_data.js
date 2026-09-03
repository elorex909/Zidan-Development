/**
 * Zidan Developments — Central Engine
 */

const DEFAULT_PRESENTATION_DATA = {
    settings: {
        companyName: "زيدان للتطوير العقاري",
        companyTagline: "تطوٌر يحكيه الواقع",
        phone: "17534",
        facebookUrl: "https://www.facebook.com/share/1G7iKebwG8/",
        instagramUrl: "https://www.instagram.com/zidan_developments?igsi=MTI2N2ZuZjFxejJzZA==",
        cloudSyncEnabled: true,
        cloudApiEndpoint: "",
        cloudApiKey: "",
        lastUpdated: new Date().toISOString()
    },
    slides: [
        { id: "slide-1", type: "intro", title: "المقدمة", logoUrl: "images/logo-white.png", tagline: "زيدان للتطوير العقاري" },
        { id: "slide-2", type: "founder", title: "القيادة", badge: "قيادة الشركة", heading: "رؤية هندسية<br>تقود النمو والتطوير", description: "رئيس مجلس ادارة <strong>الشركة</strong> المهندس <strong>رفعت زيدان</strong>، مهندس مدني ذو خبرة ميدانية عميقة، يقود توجّه الشركة نحو تطوير مشروعات تجمع بين جودة التنفيذ وقوة الموقع.", photoUrl: "images/founder.jpg", photoCaption: "المهندس رفعت زيدان — رئيس مجلس الإدارة" },
        { id: "slide-3", type: "origin", title: "قصة البداية", badge: "قصة البداية", heading: "من قليوب… انطلقت المسيرة نحو الريادة", description: "انطلقت قصة زيدان من تطوير أبراج سكنية متميزة في مدينة <strong>قليوب</strong>، لتضع حجر الأساس لمسيرة عمرانية طموحة. حظيت المشروعات بثقة علامات تجارية بارزة، ما رسّخ مصداقية الشركة في السوق وفتح الباب أمام التوسع نحو كبرى الأسواق العقارية.", milestones: [ { num: "١", title: "الانطلاقة الأولى", desc: "أبراج سكنية متميزة وفريدة في قلب مدينة قليوب" }, { num: "٢", title: "ثقة العلامات الكبرى", desc: "رنين وبنك مصر يختاران زيدان" }, { num: "٣", title: "التوسع إلى العبور", desc: "مشروعات عمارات سكنية في الحي الرابع والحي التاسع" } ], brands: ["رنين", "بنك مصر", "الحي الرابع — العبور", "الحي التاسع — العبور"] },
        { id: "slide-4", type: "cairo", title: "القاهرة الجديدة", badge: "الانطلاقة الكبرى", heading: "القاهرة<br><span style=\"color:var(--gold-light);\">الجديدة</span>", description: "وسّعت زيدان نطاق عملياتها إلى قلب <strong style=\"color:var(--gold-light);\">القاهرة الجديدة</strong>، لتثبت قدرتها على اختيار مواقع حيوية متنوعة تلبّي أرقى تطلعات السكن والاستثمار.", statCount: 73, statPrefix: "+", statDesc: "مشروعاً عمرانياً متميزاً<br>في أرقى وأهم المواقع", regions: [{"name": "الأندلس", "sub": "القاهرة الجديدة", "description": "حي الأندلس، موقع متميز بالقاهرة الجديدة يتمتع بالكثافة الاستثمارية والسكنية العالية.", "projects": [{"name": "عمارة الأندلس 42", "targetSlide": ""}, {"name": "مشروع الأندلس جيت", "targetSlide": ""}]}, {"name": "جاردينيا هايتس", "sub": "القاهرة الجديدة", "description": "منطقة جاردينيا هايتس الهادئة والراقية، تجمع بين الخصوصية وقربها من الخدمات.", "projects": [{"name": "جاردينيا 115", "targetSlide": ""}, {"name": "جاردينيا ريزيدنس", "targetSlide": ""}]}, {"name": "المستثمرين الجنوبية", "sub": "القاهرة الجديدة", "description": "حي المستثمرين الجنوبية يضم مجموعة من أرقى المجمعات السكنية والاستثمارية.", "projects": [{"name": "فيلا المستثمرين", "targetSlide": ""}]}, {"name": "اللوتس", "sub": "القاهرة الجديدة", "description": "حي اللوتس المميز يتوسط أهم المحاور والطرق الرئيسية بالقاهرة الجديدة.", "projects": [{"name": "اللوتس الجنوبية 12", "targetSlide": ""}, {"name": "اللوتس بلازا", "targetSlide": ""}]}, {"name": "بيت الوطن", "sub": "القاهرة الجديدة", "description": "مشروع بيت الوطن من أهم مناطق التوسع العمراني والاستثماري.", "projects": [{"name": "مشروع بيت الوطن C3", "targetSlide": ""}]}, {"name": "جنوب السويس", "sub": "الحي التكميلي", "description": "منطقة جنوب السويس والحي التكميلي تمثل امتداداً عمرانياً واعداً.", "projects": [{"name": "سويس ريزيدنس", "targetSlide": ""}]}, {"name": "النرجس الجديدة", "sub": "القاهرة الجديدة", "description": "النرجس الجديدة بالقاهرة الجديدة تعتبر من أكثر المناطق طلباً للسكن الراقي.", "projects": [{"name": "مشروع النرجس 1", "targetSlide": 6}, {"name": "مشروع النرجس 2", "targetSlide": 7}]}], mapUrl: "images/projects-map.jpg", mapCaption: "خريطة مشاريع زيدان للتطوير العقاري في القاهرة الجديدة" },
        { id: "slide-5", type: "combined", title: "محفظة المشاريع", badge: "محفظة المشروعات", heading: "مشاريعنا في القاهرة الجديدة", areas: [{"name": "الأندلس", "sub": "القاهرة الجديدة", "description": "حي الأندلس، موقع متميز بالقاهرة الجديدة يتمتع بالكثافة الاستثمارية والسكنية العالية.", "projects": [{"name": "عمارة الأندلس 42", "targetSlide": ""}, {"name": "مشروع الأندلس جيت", "targetSlide": ""}]}, {"name": "جاردينيا هايتس", "sub": "القاهرة الجديدة", "description": "منطقة جاردينيا هايتس الهادئة والراقية، تجمع بين الخصوصية وقربها من الخدمات.", "projects": [{"name": "جاردينيا 115", "targetSlide": ""}, {"name": "جاردينيا ريزيدنس", "targetSlide": ""}]}, {"name": "المستثمرين الجنوبية", "sub": "القاهرة الجديدة", "description": "حي المستثمرين الجنوبية يضم مجموعة من أرقى المجمعات السكنية والاستثمارية.", "projects": [{"name": "فيلا المستثمرين", "targetSlide": ""}]}, {"name": "اللوتس", "sub": "القاهرة الجديدة", "description": "حي اللوتس المميز يتوسط أهم المحاور والطرق الرئيسية بالقاهرة الجديدة.", "projects": [{"name": "اللوتس الجنوبية 12", "targetSlide": ""}, {"name": "اللوتس بلازا", "targetSlide": ""}]}, {"name": "بيت الوطن", "sub": "القاهرة الجديدة", "description": "مشروع بيت الوطن من أهم مناطق التوسع العمراني والاستثماري.", "projects": [{"name": "مشروع بيت الوطن C3", "targetSlide": ""}]}, {"name": "جنوب السويس", "sub": "الحي التكميلي", "description": "منطقة جنوب السويس والحي التكميلي تمثل امتداداً عمرانياً واعداً.", "projects": [{"name": "سويس ريزيدنس", "targetSlide": ""}]}, {"name": "النرجس الجديدة", "sub": "القاهرة الجديدة", "description": "النرجس الجديدة بالقاهرة الجديدة تعتبر من أكثر المناطق طلباً للسكن الراقي.", "projects": [{"name": "مشروع النرجس 1", "targetSlide": 6}, {"name": "مشروع النرجس 2", "targetSlide": 7}]}] },
        { id: "slide-6", type: "project", title: "مشروع النرجس 1", badge: "معرض المشاريع — السكني", heading: "مشروع سكني — النرجس الجديدة", location: "القاهرة الجديدة — النرجس الجديدة", description: "تصميم معماري كلاسيكي راقٍ يجسد الفخامة وأعلى معايير الدقة الهندسية، مع واجهات حجرية وتشطيبات فائقة الجودة تضمن الراحة والخصوصية التامة.", specs: ["واجهات حجر هاشمي فاخرة", "مداخل رخامية فندقية", "موقع استراتيجي مميز", "تنفيذ بإشراف هندسي متكامل"], photoUrl: "images/building-1.jpeg", photoCaption: "مشروع سكني فاخر — النرجس الجديدة" },
        { id: "slide-7", type: "project", title: "مشروع النرجس 2", badge: "معرض المشاريع — السكني", heading: "مشروع سكني — النرجس الجديدة", location: "القاهرة الجديدة — النرجس الجديدة", description: "عمارة سكنية فاخرة بتوقيع زيدان للتطوير العقاري، تدمج بين التوزيع الذكي للمساحات والاستغلال الأمثل للإضاءة الطبيعية مع إطلالات مفتوحة ومباشرة.", specs: ["تصميم واجهات بانورامية", "جراجات مجهزة بالكامل", "أعلى درجات الأمان والخصوصية", "تسليم مطابق لأعلى المعايير"], photoUrl: "images/building-2.jpeg", photoCaption: "مشروع سكني راقٍ — النرجس الجديدة" },
        { id: "slide-8", type: "project", title: "OBO Mall", badge: "القطاع التجاري والاستثماري", heading: "OBO Mall", location: "مدينة العبور — أمام جامعة بنها مباشرةً", description: "وجهة تجارية وإدارية وترفيهية متكاملة تقع في موقع حيوي واستراتيجي أمام جامعة بنها، مستهدفةً الكثافة السكانية والطلابية الضخمة في قلب العبور.", specs: ["واجهات زجاجية عصرية", "وحدات تجارية وإدارية", "أعلى ترافيك يومي متوقع", "مواقف سيارات وخدمات ذكية"], photoUrl: "images/obo-mall.jpg", photoCaption: "OBO Mall — مدينة العبور" },
        { id: "slide-9", type: "project", title: "Zone Plaza", badge: "القطاع التجاري والترفيهي", heading: "Zone Plaza Mall", location: "المنطقة الترفيهية — وجهة تسوق وترفيه متكاملة", description: "مركز تجاري وترفيهي عصري يضم باقة من أشهر العلامات التجارية والمطاعم والكافيهات، ليوفر تجربة تسوق وترفيه استثنائية لكافة العائلات.", specs: ["بلازا ومطاعم مفتوحة", "محلات تجارية راقية", "خدمات ترفيهية متكاملة", "إدارة وتشغيل احترافي"], photoUrl: "images/zone-plaza.jpg", photoCaption: "Zone Plaza Mall — المنطقة الترفيهية" },
        { id: "slide-10", type: "malls", title: "المشروعات التجارية", badge: "القطاع التجاري", heading: "مشروعات تجارية اخرى", malls: [ { name: "Invest Mall", sub: "في التجمع" }, { name: "مول في الأندلس", sub: "القطاع التجاري" } ] },
        { id: "slide-11", type: "vision", title: "الرؤية المستقبلية", badge: "الرؤية المستقبلية", heading: "التوجهات القادمة:<br><span style=\"color:var(--gold-light);\">كمبوندات في أهم المواقع </span>", compounds: [ { title: "بيت الوطن", desc: "توسع استراتيجي في مجتمع سكني متكامل يتمتع بطلب قوي ونمو استثماري متواصل" }, { title: "التجمع", desc: "تطوير كمبوندات سكنية وتجارية في أرقى وأفخم مناطق التوسع بالقاهرة الجديدة" }, { title: "العبور", desc: "تعميق الحضور وترسيخ المكانة في مدينة أثبتت فيها زيدان ريادتها وثقة عملائها مبكراً" } ], quote: "«زيدان للتطوير العقاري: تحدي يصنع انجاز.»" },
        { id: "slide-12", type: "why", title: "لماذا تختار زيدان", heading: "ليه تختار زيدان؟" },
        { id: "slide-13", type: "gallery", title: "معرض الصور 1", photoUrl: "images/p1.jpeg", photoCaption: "معرض الصور 1" },
        { id: "slide-14", type: "gallery", title: "معرض الصور 2", photoUrl: "images/p2.jpeg", photoCaption: "معرض الصور 2" },
        { id: "slide-15", type: "gallery", title: "معرض الصور 3", photoUrl: "images/p3.jpeg", photoCaption: "معرض الصور 3" },
        { id: "slide-16", type: "gallery", title: "معرض الصور 4", photoUrl: "images/p4.jpeg", photoCaption: "معرض الصور 4" },
        { id: "slide-17", type: "gallery", title: "معرض الصور 5", photoUrl: "images/p5.jpeg", photoCaption: "معرض الصور 5" },
        { id: "slide-18", type: "gallery", title: "معرض الصور 6", photoUrl: "images/p6.jpeg", photoCaption: "معرض الصور 6" },
        { id: "slide-19", type: "gallery", title: "معرض الصور 7", photoUrl: "images/p7.jpeg", photoCaption: "معرض الصور 7" },
        { id: "slide-20", type: "gallery", title: "معرض الصور 8", photoUrl: "images/p8.jpeg", photoCaption: "معرض الصور 8" },
        { id: "slide-21", type: "end", title: "تواصل معنا", logoUrl: "images/logo-white.png", heading: "شكراً لثقتكم واهتمامكم", tagline: "تطوٌر يحكيه الواقع", phone: "17534", facebookUrl: "https://www.facebook.com/share/1G7iKebwG8/", instagramUrl: "https://www.instagram.com/zidan_developments?igsi=MTI2N2ZuZjFxejJzZA==" }
    ]
};

const STORAGE_KEY = 'zidan_presentation_live_data_v21';
const AUTH_KEY = 'zidan_admin_auth_v1';
const CLOUD_CONFIG_KEY = 'zidan_cloud_endpoint_config_v1';

const DEFAULT_AUTH = {
    username: "admin",
    password: "Zidan@2026#Developments"
};

let broadcastSync = null;
try {
    if (typeof BroadcastChannel !== 'undefined') {
        broadcastSync = new BroadcastChannel('zidan_sync_channel');
    }
} catch (e) {}

function getCloudConfig() {
    try {
        const stored = localStorage.getItem(CLOUD_CONFIG_KEY);
        if (stored) return JSON.parse(stored);
    } catch (e) {}
    return { endpoint: "", apiKey: "", autoSyncInterval: 8000 };
}

function saveCloudConfig(cfg) {
    try {
        localStorage.setItem(CLOUD_CONFIG_KEY, JSON.stringify(cfg));
    } catch (e) {}
}

function getPresentationData() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed && parsed.slides && Array.isArray(parsed.slides) && parsed.slides.length > 0) {
                return parsed;
            }
        }
    } catch (e) {
        console.warn('Storage read notice:', e);
    }
    const freshData = JSON.parse(JSON.stringify(DEFAULT_PRESENTATION_DATA));
    savePresentationData(freshData);
    return freshData;
}

async function savePresentationData(data) {
    if (!data) return false;
    data.settings = data.settings || {};
    data.settings.lastUpdated = new Date().toISOString();

    let localOk = true;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        if (broadcastSync) {
            broadcastSync.postMessage({ type: 'DATA_UPDATED', data: data, timestamp: Date.now() });
        }
    } catch (e) {
        console.error('Storage save error:', e);
        localOk = false;
    }

    const cloudCfg = getCloudConfig();
    if (cloudCfg && cloudCfg.endpoint && cloudCfg.endpoint.startsWith('http')) {
        try {
            const headers = { 'Content-Type': 'application/json' };
            if (cloudCfg.apiKey) {
                headers['X-Master-Key'] = cloudCfg.apiKey;
                headers['X-Access-Key'] = cloudCfg.apiKey;
                headers['Authorization'] = 'Bearer ' + cloudCfg.apiKey;
            }
            
            await fetch(cloudCfg.endpoint, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(data)
            });
        } catch (err) {
            console.warn('Cloud push notice:', err);
        }
    }

    // true only when the local save actually succeeded (e.g. false if the
    // browser's storage quota was exceeded by a large uploaded file) —
    // callers that add media items use this to detect & roll back failures.
    return localOk;
}

async function fetchFromCloud() {
    const cloudCfg = getCloudConfig();
    if (!cloudCfg || !cloudCfg.endpoint || !cloudCfg.endpoint.startsWith('http')) return null;

    try {
        const headers = {};
        if (cloudCfg.apiKey) {
            headers['X-Master-Key'] = cloudCfg.apiKey;
            headers['X-Access-Key'] = cloudCfg.apiKey;
            headers['Authorization'] = 'Bearer ' + cloudCfg.apiKey;
        }

        const res = await fetch(cloudCfg.endpoint, { method: 'GET', headers: headers });
        if (!res.ok) return null;
        
        let json = await res.json();
        if (json.record) json = json.record;
        
        if (json && json.slides && Array.isArray(json.slides) && json.slides.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(json));
            return json;
        }
    } catch (e) {
        console.warn('Cloud pull notice:', e);
    }
    return null;
}

function resetPresentationData() {
    const defaultData = JSON.parse(JSON.stringify(DEFAULT_PRESENTATION_DATA));
    savePresentationData(defaultData);
    return defaultData;
}

function getStoredAuth() {
    try {
        const stored = localStorage.getItem(AUTH_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed && parsed.username) return parsed;
        }
    } catch (e) {}
    return DEFAULT_AUTH;
}

function saveStoredAuth(authObj) {
    try {
        localStorage.setItem(AUTH_KEY, JSON.stringify(authObj));
    } catch (e) {}
}

/**
 * Applies the saved brand/accent color (set from the dashboard's
 * "الهوية البصرية" panel) to the live site by updating the
 * --brand-color CSS variable on <html>. index.html's stylesheet
 * derives --brand-glow / --brand-orb from this value automatically
 * via color-mix(), so a single property update re-themes buttons,
 * the loading bar, and ambient lighting across the page.
 * Safe to call on any page (no-op if there's nothing to apply).
 */
function applyBrandColor(sourceData) {
    try {
        const data = sourceData || (typeof getPresentationData === 'function' ? getPresentationData() : null);
        const color = data && data.settings && data.settings.themeColor;
        if (color && /^#[0-9a-fA-F]{6}$/.test(color)) {
            document.documentElement.style.setProperty('--brand-color', color);
        }
    } catch (e) {}
}

/**
 * Builds dynamic presentation HTML using 100% exact match CSS classes and structures
 */
function buildDynamicPresentationHTML(data) {
    if (!data || !data.slides || !Array.isArray(data.slides)) return '';
    let html = '';

    data.slides.forEach((s, idx) => {
        const activeClass = (idx === 0) ? ' active' : '';
        const t = s.type;

        if (t === 'intro') {
            html += `
            <div class="slide s-intro${activeClass}" data-index="${idx}" data-title="${s.title || 'المقدمة'}">
                <div class="slide-container">
                    <div class="intro-stage">
                        <div class="intro-glow-circle"></div>
                        <div class="intro-orbit o1"></div>
                        <div class="intro-orbit o2"></div>
                        <img src="${s.logoUrl || 'images/logo-white.png'}" alt="Zidan Developments" class="intro-logo-img">
                        <div class="intro-name-ar">${s.tagline || 'زيدان للتطوير العقاري'}</div>
                    </div>
                </div>
            </div>`;
        } else if (t === 'founder') {
            html += `
            <div class="slide s-founder${activeClass}" data-index="${idx}" data-title="${s.title || 'القيادة'}">
                <div class="slide-container">
                    <div class="founder-box">
                        <div>
                            <div class="pill-badge dark d1" data-anim><span class="dot"></span> ${s.badge || 'قيادة الشركة'}</div>
                            <h2 class="title-section on-light d2" data-anim>${s.heading || 'رؤية هندسية<br>تقود النمو والتطوير'}</h2>
                            <div class="gold-line d3" data-anim></div>
                            <p class="desc-text on-light d3" data-anim>${s.description || ''}</p>
                        </div>
                        <div style="text-align:center;" class="d3" data-anim>
                            <div class="founder-photo-frame" data-zoom="${s.photoUrl || 'images/founder.jpg'}" data-caption="${s.photoCaption || s.title || ''}">
                                <img src="${s.photoUrl || 'images/founder.jpg'}" alt="${s.title || ''}">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        } else if (t === 'origin') {
            let mHtml = '';
            (s.milestones || []).forEach((m, mi) => {
                mHtml += `<div class="milestone-item d${mi+4}" data-anim><div class="milestone-badge">${m.num || (mi+1)}</div><h4>${m.title || ''}</h4><p>${m.desc || ''}</p></div>`;
            });
            let bHtml = '';
            (s.brands || []).forEach(b => {
                bHtml += `<div class="brand-chip"><span class="star">★</span> ${b}</div>`;
            });
            html += `
            <div class="slide s-origin${activeClass}" data-index="${idx}" data-title="${s.title || 'قصة البداية'}">
                <div class="slide-container">
                    <div class="origin-wrap">
                        <div class="pill-badge dark d1" data-anim><span class="dot"></span> ${s.badge || 'قصة البداية'}</div>
                        <h2 class="title-section on-light d2" data-anim>${s.heading || 'من قليوب… انطلقت المسيرة نحو الريادة'}</h2>
                        <div class="gold-line center d3" data-anim></div>
                        <p class="desc-text on-light d3" data-anim style="max-width:850px;margin:0 auto;">${s.description || ''}</p>
                        <div class="milestones-grid">${mHtml}</div>
                        <div class="trust-brands-bar d7" data-anim>${bHtml}</div>
                    </div>
                </div>
            </div>`;
        } else if (t === 'cairo') {
            let rHtml = '';
            (s.regions || []).forEach((r, ri) => {
                let rName = typeof r === 'string' ? r : (r.name || '');
                rHtml += `<span class="region-tag" style="cursor:pointer;" onclick="event.stopPropagation(); window.openRegionModal(${idx}, ${ri});">${rName}</span>`;
            });
            html += `
            <div class="slide s-cairo${activeClass}" data-index="${idx}" data-title="${s.title || 'القاهرة الجديدة'}">
                <div class="slide-container">
                    <div class="cairo-layout">
                        <div>
                            <div class="pill-badge d1" data-anim><span class="dot"></span> ${s.badge || 'الانطلاقة الكبرى'}</div>
                            <h2 class="title-hero d2" data-anim>${s.heading || 'القاهرة<br><span style="color:var(--gold-light);">الجديدة</span>'}</h2>
                            <div class="gold-line d3" data-anim></div>
                            <p class="desc-text d3" data-anim>${s.description || ''}</p>
                            <div class="stat-banner d4" data-anim>
                                <div class="stat-num-big" id="counterProjects" data-target="${s.statCount || 73}">${s.statCount || 73}</div>
                                <div class="stat-desc">${s.statDesc || 'مشروعاً عمرانياً متميزاً<br>في أرقى وأهم المواقع'}</div>
                            </div>
                            <div class="regions-pills d5" data-anim>${rHtml}</div>
                        </div>
                        <div class="map-display-frame d4" data-anim data-zoom="${s.mapUrl || 'images/projects-map.jpg'}" data-caption="${s.mapCaption || 'خريطة مشاريع زيدان للتطوير العقاري في القاهرة الجديدة'}">
                            <div class="shine-sweep"></div>
                            <img src="${s.mapUrl || 'images/projects-map.jpg'}" alt="خريطة مشاريع زيدان في القاهرة الجديدة">
                        </div>
                    </div>
                </div>
            </div>`;
                } else if (t === 'combined') {
            let aHtml = '';
            (s.areas || []).forEach((a, ai) => {
                const projCount = (a.projects && a.projects.length) ? a.projects.length : 0;
                const countBadge = projCount > 0 ? `<div class="card-project-count">${projCount} مشروع</div>` : '';
                aHtml += `
                <div class="portfolio-card-7 d${Math.min(ai+4, 7)}" data-anim onclick="event.stopPropagation(); window.openAreaModal(${idx}, ${ai});" style="cursor:pointer;">
                    <div class="shine-sweep"></div>
                    <div class="card-icon-box">
                        <svg viewBox="0 0 24 24"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
                    </div>
                    <h3>${a.name}</h3>
                    <p>${a.sub}</p>
                    ${countBadge}
                </div>`;
            });
            html += `
            <div class="slide s-combined${activeClass}" data-index="${idx}" data-title="${s.title || 'محفظة المشاريع'}">
                <div class="slide-container">
                    <div class="combined-wrap">
                        <div class="pill-badge d1" data-anim><span class="dot"></span> ${s.badge || 'محفظة المشروعات'}</div>
                        <h2 class="title-section d2" data-anim>${s.heading || 'مشاريعنا في القاهرة الجديدة'}</h2>
                        <div class="gold-line center d3" data-anim></div>
                        <div class="portfolio-grid-7">${aHtml}</div>
                    </div>
                </div>
            </div>`;
        } else if (t === 'project') {
            let spHtml = '';
            (s.specs || []).forEach(sp => {
                spHtml += `<div class="spec-item"><span class="dot"></span> ${sp}</div>`;
            });
            const galleryMedia = Array.isArray(s.media) ? s.media : [];
            const coverUrl = s.photoUrl || 'images/building-1.jpeg';
            const coverCap = s.photoCaption || s.heading || s.title || '';
            // "All photos together, in order": cover photo first, then the gallery items.
            const allMedia = [{ type: 'image', url: coverUrl, caption: coverCap }].concat(galleryMedia);

            // Builds the tilted pile-layer markup (up to 3 photos: the front
            // cover photo plus the two most recent behind it). Each layer —
            // front or peeking — is individually clickable: tapping any one of
            // them zooms exactly that photo to the front (window.openPileZoom),
            // with the rest of the pile still dimly visible behind it.
            const buildPileLayers = (media) => {
                const layerClass = ['pl3', 'pl2', 'pl1'];
                const sliceLen = Math.min(3, media.length);
                const thumbs = media.slice(0, 3).reverse(); // pl3 = furthest back, pl1 = front (first photo)
                const clsOffset = layerClass.length - thumbs.length; // keeps the front slot (pl1) always filled, even with only 2 photos
                let out = '';
                thumbs.forEach((m, li) => {
                    const cls = layerClass[clsOffset + li];
                    const mediaIndex = (sliceLen - 1) - li; // this layer's position in allMedia, for openPileZoom
                    const clickAttr = `onclick="event.stopPropagation(); window.openPileZoom(${idx}, ${mediaIndex});"`;
                    if (m.type === 'video') {
                        out += `<div class="pile-layer ${cls} is-video" style="background-image:url('${m.poster || ''}')" ${clickAttr}><div class="glass-play-btn"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div></div>`;
                    } else {
                        out += `<div class="pile-layer ${cls}" style="background-image:url('${m.url}')" ${clickAttr}></div>`;
                    }
                });
                return out;
            };
            // The count badge is a separate tap target from the photos beneath
            // it: it opens the full grid ("view all"), while the photos zoom
            // themselves forward.
            const pileBadgeHtml = `<div class="pile-count-badge" onclick="event.stopPropagation(); window.openMediaStack(${idx});" title="عرض كل الصور والفيديوهات"><svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>${allMedia.length} صورة</div>`;

            let imageBoxHtml = '';
            if (allMedia.length <= 1) {
                // No extra gallery items yet — behaves exactly like a normal single photo.
                imageBoxHtml = `
                        <div class="project-frame" data-zoom="${coverUrl}" data-caption="${coverCap}">
                            <div class="shine-sweep"></div>
                            <img src="${coverUrl}" alt="${s.title || ''}">
                        </div>`;
            } else {
                imageBoxHtml = `
                        <div class="project-frame is-pile" onclick="event.stopPropagation(); window.openPileZoom(${idx}, 0);" title="عرض كل الصور والفيديوهات">
                            <div class="shine-sweep"></div>
                            <div class="photo-pile">
                                ${buildPileLayers(allMedia)}
                                ${pileBadgeHtml}
                            </div>
                        </div>`;
            }
            // Second gallery entry point, under the spec bullets: the same
            // stacked-photos pile as above, smaller, sitting under its own
            // "عرض الصور والفيديوهات" caption — in addition to the main pile.
            let specsGalleryHtml = '';
            if (allMedia.length > 1) {
                specsGalleryHtml = `
                            <div class="specs-gallery-pile">
                                <div class="project-frame is-pile" onclick="event.stopPropagation(); window.openPileZoom(${idx}, 0);" title="عرض كل الصور والفيديوهات">
                                    <div class="photo-pile">
                                        ${buildPileLayers(allMedia)}
                                        ${pileBadgeHtml}
                                    </div>
                                </div>
                            </div>
                            <div class="specs-gallery-hint" onclick="event.stopPropagation(); window.openMediaStack(${idx});">
                                <svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                                <span>عرض كل الصور والفيديوهات (${allMedia.length})</span>
                            </div>`;
            }
            html += `
            <div class="slide s-project${activeClass}" data-index="${idx}" data-title="${s.title || s.heading || 'مشروع سكني'}">
                <div class="slide-container">
                    <div class="project-showcase-grid">
                        <div class="project-info-card d2" data-anim>
                            <div class="shine-sweep"></div>
                            <div class="pill-badge"><span class="dot"></span> ${s.badge || 'معرض المشاريع — السكني'}</div>
                            <h2 class="project-heading">${s.heading || s.title || ''}</h2>
                            <div class="project-loc-tag">
                                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
                                <span>${s.location || ''}</span>
                            </div>
                            <p class="desc-text" style="font-size:16.5px;">${s.description || ''}</p>
                            <div class="project-specs-list">${spHtml}</div>
                            ${specsGalleryHtml}
                        </div>
                        <div class="project-image-box d3" data-anim>${imageBoxHtml}
                        </div>
                    </div>
                </div>
            </div>`;
        } else if (t === 'malls') {
            let mlHtml = '';
            (s.malls || []).forEach((m, mi) => {
                mlHtml += `
                <div class="mall-card d${mi+4}" data-anim>
                    <div class="shine-sweep"></div>
                    <div class="mall-icon-box">
                        <svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                    </div>
                    <h3>${m.name}</h3>
                    <p>${m.sub}</p>
                </div>`;
            });
            html += `
            <div class="slide s-malls${activeClass}" data-index="${idx}" data-title="${s.title || 'المشروعات التجارية'}">
                <div class="slide-container">
                    <div class="malls-wrap">
                        <div class="pill-badge d1" data-anim><span class="dot"></span> ${s.badge || 'القطاع التجاري'}</div>
                        <h2 class="title-section d2" data-anim>${s.heading || 'مشروعات تجارية اخرى'}</h2>
                        <div class="gold-line center d3" data-anim></div>
                        <div class="malls-grid-2">${mlHtml}</div>
                    </div>
                </div>
            </div>`;
        } else if (t === 'vision') {
            let vHtml = '';
            (s.compounds || []).forEach((v, vi) => {
                vHtml += `
                <div class="vision-card d${vi+4}" data-anim>
                    <div class="vision-icon-box">
                        <svg viewBox="0 0 24 24"><path d="M1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-7l5-3.5L13 12v7zM10 3v1.97l2 1.43V5h9v14h-4v2h6V3H10z"/></svg>
                    </div>
                    <h3>${v.title}</h3>
                    <p>${v.desc}</p>
                </div>`;
            });
            html += `
            <div class="slide s-vision${activeClass}" data-index="${idx}" data-title="${s.title || 'الرؤية المستقبلية'}">
                <div class="slide-container">
                    <div class="vision-wrap">
                        <div class="pill-badge d1" data-anim><span class="dot"></span> ${s.badge || 'الرؤية المستقبلية'}</div>
                        <h2 class="title-section d2" data-anim>${s.heading || 'التوجهات القادمة:<br><span style="color:var(--gold-light);">كمبوندات في أهم المواقع </span>'}</h2>
                        <div class="gold-line center d3" data-anim></div>
                        <div class="vision-grid">${vHtml}</div>
                        <div class="vision-quote-banner d7" data-anim><p>${s.quote || '«زيدان للتطوير العقاري: تحدي يصنع انجاز.»'}</p></div>
                    </div>
                </div>
            </div>`;
        } else if (t === 'why') {
            html += `
            <div class="slide s-why${activeClass}" data-index="${idx}" data-title="${s.title || 'لماذا تختار زيدان'}">
                <div class="slide-container">
                    <div class="why-wrap" style="display:flex;align-items:center;justify-content:center;height:100%;">
                        <h1 class="title-hero" data-anim style="font-size:72px;text-align:center;color:#ffffff;text-shadow:0 0 60px rgba(255,255,255,0.15),0 0 120px rgba(255,255,255,0.05);">${s.heading || 'ليه تختار زيدان؟'}</h1>
                    </div>
                </div>
            </div>`;
        } else if (t === 'gallery') {
            html += `
            <div class="slide s-gallery${activeClass}" data-index="${idx}" data-title="${s.title || 'معرض الصور'}">
                <div class="slide-container">
                    <div class="gallery-wrap">
                        <div class="gallery-frame" data-zoom="${s.photoUrl || 'images/p1.jpeg'}" data-caption="${s.photoCaption || s.title || ''}">
                            <div class="shine-sweep"></div>
                            <img src="${s.photoUrl || 'images/p1.jpeg'}" alt="${s.title || ''}">
                        </div>
                    </div>
                </div>
            </div>`;
        } else if (t === 'end') {
            html += `
            <div class="slide s-end${activeClass}" data-index="${idx}" data-title="${s.title || 'تواصل معنا'}">
                <div class="slide-container">
                    <div class="end-wrap">
                        <img src="${s.logoUrl || 'images/logo-white.png'}" alt="Zidan Developments" class="end-logo-img d1" data-anim>
                        <h2 class="title-section d2" data-anim style="font-size:48px;">${s.heading || 'شكراً لثقتكم واهتمامكم'}</h2>
                        <p class="desc-text d3" data-anim style="color:var(--gold-light);margin-top:8px;font-size:20px;">${s.tagline || 'تطوٌر يحكيه الواقع'}</p>
                        <div class="gold-line center d4" data-anim></div>
                        <div class="contact-pills-bar d5" data-anim>
                            <a href="tel:${s.phone || '17534'}" class="contact-pill" title="اتصل بنا">
                                <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                                <span>${s.phone || '17534'}</span>
                            </a>
                            ${s.facebookUrl ? `<a href="${s.facebookUrl}" target="_blank" rel="noopener noreferrer" class="contact-pill" title="تابعنا على فيسبوك"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg><span>Facebook</span></a>` : ''}
                            ${s.instagramUrl ? `<a href="${s.instagramUrl}" target="_blank" rel="noopener noreferrer" class="contact-pill" title="تابعنا على انستجرام"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg><span>Instagram</span></a>` : ''}
                        </div>
                    </div>
                </div>
            </div>`;
        }
    });

    return html;
}
