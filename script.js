const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    if(navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
    }
});

// family aside toggle
const familyAside = document.querySelector('.family-aside');
const familyToggle = document.getElementById('familyToggle');

function setFamilyCollapsed(collapsed){
    if(!familyAside || !familyToggle) return;
    if(collapsed){
        familyAside.classList.add('collapsed');
        familyToggle.setAttribute('aria-expanded','false');
    } else {
        familyAside.classList.remove('collapsed');
        familyToggle.setAttribute('aria-expanded','true');
    }
    try{ localStorage.setItem('familyCollapsed', collapsed ? '1' : '0'); }catch(e){}
}

if(familyToggle){
    familyToggle.addEventListener('click', ()=>{
        const collapsed = familyAside.classList.contains('collapsed');
        setFamilyCollapsed(!collapsed);
    });
}

// restore pref
try{
    const saved = localStorage.getItem('familyCollapsed');
    if(saved === '1') setFamilyCollapsed(true);
}catch(e){}

//ads settings
(function(){
    const ads = [
        {src: 'imgss/ads1.jpg', caption: 'Try playing Tekken 8 Now!'},
        {src: 'imgss/ads2.jpg', caption: 'Tekken on Sale!'},
        {src: 'imgss/bankpro.jpg', caption: 'Manage your bank better'},
        {src: 'imgss/airpro.jpg', caption: 'Fly cheap today'}
    ];

    // float ad element
    const floating = document.createElement('div');
    floating.className = 'floating-ad';
    floating.innerHTML = `
        <div class="inner">
            <button class="close" aria-label="Close floating ad">✕</button>
            <img src="" alt="ad image">
            <div class="caption"></div>
        </div>`;
    document.body.appendChild(floating);

    const img = floating.querySelector('img');
    const cap = floating.querySelector('.caption');
    const closeBtn = floating.querySelector('.close');
    let timer = null;
    let interval = null;

    function pick(){ return ads[Math.floor(Math.random()*ads.length)]; }

    function show(){
        const a = pick();
        img.src = a.src;
        cap.textContent = a.caption;
        floating.classList.add('show');
        // auto-hide after 5s
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{ floating.classList.remove('show'); }, 5000);
    }

    closeBtn.addEventListener('click', ()=>{ floating.classList.remove('show'); if(timer) clearTimeout(timer); });

    // start showing every 10s
    interval = setInterval(show, 10000);
    // show first after ??
    setTimeout(show, 5000);
})();

