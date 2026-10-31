@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');

:root{
  --bg:#080e0d;
  --panel:#101a17;
  --panel2:#15221d;
  --green:#b5ff39;
  --gold:#e8c36a;
  --blue:#62b8ff;
  --text:#f5f7f4;
  --muted:#89978f;
  --border:rgba(255,255,255,.09);
}

*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}

body{
  background:var(--bg);
  color:var(--text);
  font-family:Inter,Arial,sans-serif;
  overflow-x:hidden;
}

button,input,select{
  font:inherit;
}

button{
  cursor:pointer;
}

.holo-app{
  min-height:100vh;
  background:
    radial-gradient(circle at 70% 0%,#17302225,transparent 35%),
    var(--bg);
}

/* HEADER */

.top-header{
  height:76px;
  position:sticky;
  top:0;
  z-index:100;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:25px;
  padding:0 28px;
  background:rgba(7,14,12,.96);
  border-bottom:1px solid var(--border);
  backdrop-filter:blur(20px);
}

.holo-logo{
  display:flex;
  align-items:center;
  gap:11px;
  min-width:210px;
  cursor:pointer;
}

.logo-symbol{
  width:43px;
  height:43px;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,var(--green),#559b16);
  color:#08120b;
  font-size:29px;
  font-weight:900;
  clip-path:polygon(0 0,100% 0,100% 75%,50% 100%,0 75%);
}

.holo-logo h2{
  font-family:'Barlow Condensed',sans-serif;
  font-size:23px;
  letter-spacing:1px;
}

.holo-logo h2 span{
  color:var(--green);
}

.holo-logo small{
  display:block;
  color:var(--muted);
  font-size:9px;
  letter-spacing:3px;
  margin-top:2px;
}

.header-search{
  height:42px;
  max-width:430px;
  flex:1;
  display:flex;
  align-items:center;
  gap:10px;
  padding:0 15px;
  background:#131e19;
  border:1px solid var(--border);
  border-radius:7px;
  color:var(--muted);
}

.header-search input{
  width:100%;
  background:none;
  border:none;
  outline:none;
  color:white;
  font-size:12px;
}

.header-right{
  display:flex;
  align-items:center;
  gap:17px;
}

.icon-button{
  position:relative;
  background:none;
  color:white;
  border:none;
}

.icon-button i{
  position:absolute;
  top:0;
  right:0;
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--green);
}

.header-coins{
  display:flex;
  align-items:center;
  gap:6px;
  color:var(--gold);
  font-size:12px;
  font-weight:700;
}

.profile-button{
  display:flex;
  align-items:center;
  gap:8px;
  padding:10px 13px;
  border:1px solid var(--border);
  background:#17231d;
  color:white;
  border-radius:6px;
  font-size:11px;
  font-weight:700;
}

.mobile-menu-button{
  display:none;
  background:none;
  border:0;
  color:white;
}

/* LAYOUT */

.app-layout{
  display:flex;
  min-height:calc(100vh - 76px);
}

.sidebar{
  width:235px;
  flex-shrink:0;
  padding:25px 15px;
  background:#0b1410;
  border-right:1px solid var(--border);
  display:flex;
  flex-direction:column;
  position:sticky;
  top:76px;
  height:calc(100vh - 76px);
  overflow-y:auto;
}

.sidebar-label{
  padding:8px 13px 13px;
  color:#65736b;
  font-size:9px;
  font-weight:800;
  letter-spacing:2px;
}

.sidebar-link{
  height:46px;
  width:100%;
  display:flex;
  align-items:center;
  gap:13px;
  padding:0 13px;
  border:0;
  border-radius:6px;
  margin-bottom:5px;
  color:#9aa79e;
  background:transparent;
  text-align:left;
  font-size:12px;
  font-weight:600;
  transition:.2s;
}

.sidebar-link:hover{
  background:#17251c;
  color:white;
}

.sidebar-link.active{
  background:linear-gradient(90deg,#b5ff3924,#b5ff3906);
  color:var(--green);
  border-left:3px solid var(--green);
}

.live-dot{
  width:7px;
  height:7px;
  border-radius:50%;
  background:#ff4646;
  margin-left:auto;
  box-shadow:0 0 10px #ff4646;
}

.sidebar-divider{
  height:1px;
  background:var(--border);
  margin:17px 5px;
}

.sidebar-bottom{
  margin-top:auto;
  padding-top:25px;
}

.club-mini{
  display:flex;
  align-items:center;
  gap:11px;
  padding:13px;
  border-radius:8px;
  background:#15231b;
}

.club-emblem{
  width:35px;
  height:35px;
  display:grid;
  place-items:center;
  background:var(--green);
  color:#07130b;
  font-weight:900;
  clip-path:polygon(50% 0,100% 20%,90% 80%,50% 100%,10% 80%,0 20%);
}

.club-mini strong{
  display:block;
  font-size:11px;
}

.club-mini small{
  display:block;
  color:var(--muted);
  font-size:8px;
  margin-top:4px;
}

.online-status{
  margin-top:15px;
  color:#7b9182;
  font-size:9px;
  letter-spacing:1px;
}

.online-status span,.green-indicator{
  display:inline-block;
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--green);
  margin-right:7px;
  box-shadow:0 0 9px var(--green);
}

/* MAIN */

.main-content{
  min-width:0;
  flex:1;
  padding:25px 30px 55px;
  overflow:hidden;
}

.welcome-strip{
  display:flex;
  justify-content:space-between;
  align-items:center;
  color:#819188;
  font-size:10px;
  letter-spacing:1px;
  margin-bottom:19px;
}

.welcome-strip b{
  color:var(--green);
}

/* HERO */

.hero-banner{
  position:relative;
  min-height:440px;
  display:flex;
  align-items:center;
  overflow:hidden;
  border-radius:13px;
  border:1px solid #ffffff16;
  background:
    linear-gradient(90deg,#07120cf7 0%,#07120cce 48%,#07120c18 100%),
    url("https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1800&q=90");
  background-size:cover;
  background-position:center;
}

.hero-overlay{
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 80% 50%,#b5ff391c,transparent 40%),
    linear-gradient(0deg,#07120c9c,transparent 50%);
}

.hero-content{
  position:relative;
  z-index:2;
  padding:50px;
  max-width:620px;
}

.competition-tag{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:9px 12px;
  border:1px solid #e8c36a55;
  background:#e8c36a12;
  color:var(--gold);
  font-size:9px;
  font-weight:800;
  letter-spacing:1.5px;
}

.hero-content h1{
  margin-top:25px;
  font-family:'Barlow Condensed',sans-serif;
  font-size:clamp(55px,7vw,92px);
  line-height:.88;
  font-weight:900;
  letter-spacing:1px;
}

.hero-content h1 span{
  color:var(--green);
}

.hero-content p{
  max-width:410px;
  margin-top:20px;
  color:#c3cec5;
  font-size:13px;
  line-height:1.9;
}

.hero-buttons{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  margin-top:26px;
}

.gold-button,.outline-button{
  min-height:46px;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding:0 19px;
  font-size:10px;
  font-weight:900;
  letter-spacing:.8px;
  border-radius:5px;
  transition:.2s;
}

.gold-button{
  border:1px solid var(--green);
  background:var(--green);
  color:#07120a;
}

.gold-button:hover{
  background:#d2ff85;
  transform:translateY(-2px);
}

.outline-button{
  border:1px solid #ffffff55;
  background:#ffffff0c;
  color:white;
}

.outline-button:hover{
  border-color:var(--green);
  color:var(--green);
}

.hero-bottom{
  display:flex;
  gap:23px;
  margin-top:40px;
  color:#a5b2a8;
  font-size:9px;
  letter-spacing:1px;
}

.hero-trophy{
  position:absolute;
  right:10%;
  top:50%;
  transform:translateY(-50%);
  display:flex;
  flex-direction:column;
  align-items:center;
  color:var(--gold);
  filter:drop-shadow(0 0 28px #e8c36a55);
}

.trophy-glow{
  position:absolute;
  width:190px;
  height:190px;
  background:#e8c36a22;
  filter:blur(55px);
  border-radius:50%;
}

.hero-trophy svg{
  position:relative;
  z-index:1;
}

.trophy-caption{
  margin-top:12px;
  font-size:9px;
  letter-spacing:4px;
}

/* QUICK ACCESS */

.quick-access{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:12px;
  margin-top:18px;
}

.quick-card{
  min-width:0;
  display:flex;
  align-items:center;
  gap:12px;
  padding:17px 13px;
  border:1px solid var(--border);
  border-radius:8px;
  background:linear-gradient(145deg,#17231d,#0f1813);
  color:white;
  text-align:left;
  transition:.2s;
}

.quick-card:hover{
  border-color:#b5ff3966;
  transform:translateY(-3px);
}

.quick-icon{
  width:39px;
  height:39px;
  flex-shrink:0;
  display:grid;
  place-items:center;
  border-radius:7px;
  background:#b5ff3916;
  color:var(--green);
}

.quick-icon svg{
  width:20px;
}

.quick-card strong{
  display:block;
  font-size:10px;
}

.quick-card small{
  display:block;
  margin-top:5px;
  color:var(--muted);
  font-size:9px;
}

.quick-arrow{
  margin-left:auto;
  width:15px;
  color:#718078;
}

/* SECTIONS */

.home-section{
  margin-top:48px;
}

.section-title{
  display:flex;
  justify-content:space-between;
  align-items:end;
  gap:15px;
  margin-bottom:20px;
}

.section-title small,.page-heading small{
  color:var(--green);
  font-size:9px;
  font-weight:800;
  letter-spacing:2px;
}

.section-title h2{
  margin-top:6px;
  font-family:'Barlow Condensed',sans-serif;
  font-size:30px;
  letter-spacing:.5px;
}

.section-title button{
  display:flex;
  align-items:center;
  gap:5px;
  background:none;
  border:0;
  color:var(--green);
  font-size:9px;
  font-weight:800;
  letter-spacing:1px;
}

/* MOMENTS */

.moments-grid{
  display:grid;
  grid-template-columns:1.5fr 1fr 1fr;
  gap:13px;
}

.moment-card{
  position:relative;
  min-height:225px;
  overflow:hidden;
  border-radius:9px;
  background:#16231c;
  border:1px solid var(--border);
}

.moment-image{
  position:absolute;
  inset:0;
  background-size:cover;
  background-position:center;
  transition:.4s;
}

.moment-card:hover .moment-image{
  transform:scale(1.07);
}

.moment-one{
  background-image:
    linear-gradient(0deg,#050d08,transparent 100%),
    url("https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?auto=format&fit=crop&w=900&q=80");
}

.moment-two{
  background-image:
    linear-gradient(0deg,#050d08,transparent 100%),
    url("https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=80");
}

.moment-three{
  background-image:
    linear-gradient(0deg,#050d08,transparent 100%),
    url("https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=80");
}

.moment-info{
  position:absolute;
  bottom:17px;
  left:18px;
  right:12px;
}

.moment-info span{
  color:var(--green);
  font-size:8px;
  font-weight:800;
  letter-spacing:1.5px;
}

.moment-info h3{
  margin-top:8px;
  font-family:'Barlow Condensed',sans-serif;
  font-size:28px;
  line-height:1;
}

.moment-info button{
  display:flex;
  align-items:center;
  gap:4px;
  margin-top:12px;
  border:0;
  background:none;
  color:white;
  font-size:8px;
  font-weight:800;
}

/* SUPERSTAR CARDS */

.superstar-grid{
  display:grid;
  grid-template-columns:repeat(4,minmax(0,1fr));
  gap:14px;
}

.superstar-card{
  min-width:0;
  height:285px;
  position:relative;
  overflow:hidden;
  border:1px solid var(--border);
  border-radius:9px;
  background:linear-gradient(145deg,#1c3023,#0b1510);
  transition:.25s;
}

.superstar-card:hover{
  transform:translateY(-5px);
  border-color:var(--green);
}

.superstar-card>img{
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:top center;
  opacity:.86;
  transition:.4s;
}

.superstar-card:hover>img{
  transform:scale(1.05);
}

.player-placeholder{
  width:100%;
  height:100%;
  display:grid;
  place-items:center;
  color:#526c59;
  background:linear-gradient(135deg,#203c29,#101c15);
}

.player-number{
  position:absolute;
  top:12px;
  left:12px;
  z-index:2;
  font-family:'Barlow Condensed',sans-serif;
  font-size:22px;
  font-weight:800;
  color:#ffffff66;
}

.player-rating{
  position:absolute;
  top:12px;
  right:12px;
  display:flex;
  align-items:center;
  gap:4px;
  padding:6px 8px;
  background:#07120ddd;
  color:var(--gold);
  border-radius:4px;
  font-size:12px;
  font-weight:900;
}

.superstar-info{
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  padding:37px 14px 14px;
  background:linear-gradient(transparent,#050b07 45%);
}

.superstar-info small{
  color:var(--green);
  font-size:8px;
  letter-spacing:1px;
  font-weight:800;
}

.superstar-info h3{
  font-family:'Barlow Condensed',sans-serif;
  font-size:23px;
  margin-top:4px;
}

.superstar-info p{
  margin-top:3px;
  color:#b3c0b7;
  font-size:9px;
}

.superstar-info button{
  display:flex;
  align-items:center;
  gap:5px;
  margin-top:10px;
  border:0;
  background:none;
  color:var(--green);
  font-size:8px;
  font-weight:900;
}

/* CAREER */

.career-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:14px;
}

.career-card{
  position:relative;
  overflow:hidden;
  padding:23px;
  min-height:195px;
  border:1px solid var(--border);
  border-radius:9px;
  background:linear-gradient(145deg,#1a2b20,#101913);
  color:white;
  text-align:left;
  transition:.25s;
}

.career-card:hover{
  border-color:var(--green);
  transform:translateY(-4px);
}

.career-number{
  position:absolute;
  top:12px;
  right:17px;
  color:#ffffff12;
  font-family:'Barlow Condensed',sans-serif;
  font-size:60px;
  font-weight:900;
}

.career-icon{
  color:var(--green);
  margin-bottom:18px;
}

.career-icon svg{
  width:30px;
  height:30px;
}

.career-card h3{
  font-family:'Barlow Condensed',sans-serif;
  font-size:22px;
}

.career-card p{
  max-width:260px;
  margin-top:8px;
  color:var(--muted);
  font-size:10px;
  line-height:1.7;
}

.career-card>span{
  display:flex;
  align-items:center;
  gap:5px;
  margin-top:16px;
  color:var(--green);
  font-size:8px;
  font-weight:900;
}

/* COMPETITIONS */

.competition-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:13px;
}

.competition-card{
  display:flex;
  align-items:center;
  gap:14px;
  min-height:110px;
  padding:18px;
  text-align:left;
  border:1px solid var(--border);
  border-radius:8px;
  background:#121e17;
  color:white;
  transition:.2s;
}

.competition-card:hover{
  transform:translateY(-3px);
  border-color:var(--green);
}

.competition-icon{
  width:47px;
  height:47px;
  flex-shrink:0;
  display:grid;
  place-items:center;
  border-radius:8px;
}

.competition-icon svg{
  width:27px;
  height:27px;
}

.competition-card.gold .competition-icon{
  color:var(--gold);
  background:#e8c36a17;
}

.competition-card.blue .competition-icon{
  color:var(--blue);
  background:#62b8ff17;
}

.competition-card.green .competition-icon{
  color:var(--green);
  background:#b5ff3917;
}

.competition-card small{
  color:var(--muted);
  font-size:8px;
  letter-spacing:.7px;
}

.competition-card h3{
  margin-top:6px;
  font-family:'Barlow Condensed',sans-serif;
  font-size:20px;
}

.competition-card>svg{
  margin-left:auto;
  width:17px;
  color:#718078;
}

/* FINAL BANNER */

.final-banner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
  padding:30px;
  margin-top:48px;
  border:1px solid #b5ff3933;
  border-radius:10px;
  background:linear-gradient(110deg,#18311e,#101b14);
}

.final-banner small{
  color:var(--green);
  font-size:9px;
  letter-spacing:2px;
  font-weight:800;
}

.final-banner h2{
  margin-top:8px;
  font-family:'Barlow Condensed',sans-serif;
  font-size:30px;
}

.final-banner p{
  margin-top:7px;
  color:var(--muted);
  font-size:10px;
}

/* CONTENT PAGES */

.content-page{
  min-height:75vh;
  padding-top:20px;
}

.page-heading{
  padding:25px 0 30px;
}

.page-heading h1{
  margin-top:9px;
  font-family:'Barlow Condensed',sans-serif;
  font-size:52px;
}

.page-heading p{
  margin-top:10px;
  color:var(--muted);
  font-size:12px;
  line-height:1.8;
}

.coming-soon{
  min-height:320px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:25px;
  text-align:center;
  border:1px solid var(--border);
  border-radius:10px;
  background:linear-gradient(145deg,#17251c,#0e1712);
}

.coming-soon>div{
  color:var(--green);
  margin-bottom:20px;
}

.coming-soon h2{
  font-family:'Barlow Condensed',sans-serif;
  font-size:30px;
}

.coming-soon p{
  margin-top:10px;
  color:var(--muted);
  font-size:11px;
}

.coming-soon span{
  margin-top:20px;
  color:var(--green);
  font-size:9px;
  letter-spacing:2px;
}

/* COACH */

.coach-hero{
  display:flex;
  align-items:center;
  gap:25px;
  padding:35px;
  border-radius:10px;
  border:1px solid #b5ff3933;
  background:linear-gradient(110deg,#1b3521,#111c15);
  color:var(--green);
}

.coach-hero h2{
  margin-top:7px;
  font-family:'Barlow Condensed',sans-serif;
  font-size:35px;
  color:white;
}

.coach-hero p{
  margin-top:8px;
  color:var(--muted);
  font-size:11px;
}

.coach-hero span{
  font-size:9px;
  letter-spacing:2px;
}

.coach-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:14px;
  margin-top:22px;
}

.coach-card{
  padding:24px;
  text-align:left;
  border:1px solid var(--border);
  border-radius:9px;
  background:#121e17;
  color:white;
}

.coach-card>svg{
  color:var(--green);
  width:30px;
  height:30px;
}

.coach-card h3{
  margin-top:17px;
  font-family:'Barlow Condensed',sans-serif;
  font-size:23px;
}

.coach-card p{
  margin-top:8px;
  color:var(--muted);
  font-size:10px;
  line-height:1.7;
}

.coach-card span{
  display:flex;
  align-items:center;
  gap:5px;
  margin-top:17px;
  color:var(--green);
  font-size:8px;
  font-weight:900;
}

/* PROFILE */

.profile-panel{
  max-width:430px;
  padding:35px;
  border:1px solid var(--border);
  border-radius:10px;
  background:var(--panel);
}

.profile-avatar{
  width:80px;
  height:80px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:#b5ff3920;
  color:var(--green);
}

.profile-panel h2{
  margin-top:20px;
}

.profile-panel p{
  margin-top:9px;
  color:var(--muted);
  font-size:11px;
}

.profile-panel button{
  margin-top:20px;
}

/* MODAL */

.modal-overlay{
  position:fixed;
  inset:0;
  z-index:300;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:15px;
  background:#000d;
  backdrop-filter:blur(10px);
}

.register-modal{
  position:relative;
  width:100%;
  max-width:440px;
  max-height:90vh;
  overflow-y:auto;
  padding:32px;
  border:1px solid #b5ff3944;
  border-radius:12px;
  background:#101b15;
}

.modal-close{
  position:absolute;
  top:17px;
  right:17px;
  background:none;
  border:0;
  color:white;
}

.modal-brand{
  font-family:'Barlow Condensed',sans-serif;
  font-size:25px;
  font-weight:900;
  margin-bottom:23px;
}

.modal-brand span{
  color:var(--green);
}

.register-modal>small{
  color:var(--green);
  font-size:9px;
  letter-spacing:2px;
}

.register-modal h2{
  margin-top:10px;
  font-family:'Barlow Condensed',sans-serif;
  font-size:31px;
}

.register-modal form{
  margin-top:24px;
}

.register-modal label{
  display:block;
  margin:15px 0 7px;
  color:#aab9ae;
  font-size:9px;
  font-weight:800;
  letter-spacing:1px;
}

.register-modal input,.register-modal select{
  width:100%;
  height:45px;
  padding:0 12px;
  outline:none;
  border:1px solid var(--border);
  border-radius:5px;
  background:#08120d;
  color:white;
  font-size:12px;
}

.register-modal input:focus,.register-modal select:focus{
  border-color:var(--green);
}

.full-width{
  width:100%;
  margin-top:24px;
}

.modal-note{
  margin-top:18px;
  color:var(--muted);
  font-size:9px;
  line-height:1.7;
}

/* FOOTER */

.holo-footer{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 30px;
  border-top:1px solid var(--border);
  background:#070d09;
}

.holo-footer strong{
  font-family:'Barlow Condensed',sans-serif;
  letter-spacing:1px;
  font-size:15px;
}

.holo-footer span{
  color:var(--muted);
  font-size:8px;
  letter-spacing:2px;
}

/* RESPONSIVE */

@media(max-width:1100px){

  .sidebar{
    width:205px;
  }

  .main-content{
    padding:22px;
  }

  .hero-trophy{
    right:5%;
  }

  .superstar-grid{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

}

@media(max-width:760px){

  .top-header{
    height:66px;
    padding:0 13px;
    gap:10px;
  }

  .mobile-menu-button{
    display:block;
    flex-shrink:0;
  }

  .holo-logo{
    min-width:0;
    flex:1;
    gap:7px;
  }

  .logo-symbol{
    width:35px;
    height:35px;
    font-size:23px;
  }

  .holo-logo h2{
    font-size:18px;
  }

  .holo-logo small{
    font-size:7px;
  }

  .header-search{
    display:none;
  }

  .header-right{
    gap:9px;
  }

  .header-coins{
    font-size:10px;
  }

  .profile-button{
    padding:8px;
  }

  .profile-button span{
    display:none;
  }

  .sidebar{
    position:fixed;
    z-index:150;
    left:-260px;
    top:66px;
    width:250px;
    height:calc(100vh - 66px);
    transition:.25s;
    box-shadow:20px 0 50px #0008;
  }

  .sidebar.sidebar-open{
    left:0;
  }

  .app-layout{
    display:block;
  }

  .main-content{
    padding:16px 13px 35px;
  }

  .hero-banner{
    min-height:410px;
    background-position:58% center;
  }

  .hero-content{
    padding:27px 21px;
  }

  .hero-content h1{
    font-size:65px;
  }

  .hero-content p{
    font-size:11px;
    max-width:290px;
  }

  .hero-trophy{
    right:5%;
    top:20%;
    opacity:.2;
  }

  .hero-trophy svg{
    width:95px;
  }

  .hero-bottom{
    flex-direction:column;
    gap:9px;
    margin-top:30px;
  }

  .quick-access{
    grid-template-columns:repeat(2,1fr);
    gap:9px;
  }

  .quick-card{
    padding:13px 9px;
  }

  .quick-card strong{
    font-size:9px;
  }

  .quick-card small{
    font-size:8px;
  }

  .quick-icon{
    width:33px;
    height:33px;
  }

  .moments-grid{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .moment-large{
    grid-column:span 2;
  }

  .moment-card{
    min-height:190px;
  }

  .superstar-grid{
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:9px;
  }

  .superstar-card{
    height:250px;
  }

  .superstar-info h3{
    font-size:20px;
  }

  .career-grid{
    grid-template-columns:1fr;
  }

  .career-card{
    min-height:165px;
  }

  .competition-grid{
    grid-template-columns:1fr;
  }

  .final-banner{
    flex-direction:column;
    align-items:flex-start;
    padding:23px;
  }

  .final-banner h2{
    font-size:26px;
  }

  .section-title h2{
    font-size:26px;
  }

  .coach-hero{
    padding:23px;
    gap:14px;
  }

  .coach-hero>svg{
    width:43px;
    flex-shrink:0;
  }

  .coach-hero h2{
    font-size:25px;
  }

  .coach-grid{
    grid-template-columns:1fr;
  }

  .page-heading h1{
    font-size:43px;
  }

  .holo-footer{
    padding:18px 13px;
    gap:10px;
  }

  .holo-footer strong{
    font-size:12px;
  }

  .holo-footer span{
    font-size:7px;
    text-align:right;
  }

}

@media(max-width:380px){

  .header-coins{
    display:none;
  }

  .hero-content h1{
    font-size:55px;
  }

  .superstar-card{
    height:220px;
  }

  .section-title h2{
    font-size:23px;
  }

}
