<!-- src/components/Sidebar.vue -->
<template>
  <div class="sidebar">
    <!-- Profile -->
    <div class="profile-section">
      <div class="profile-image">
        <img :src="profileImage" alt="Profile" />
        <div class="profile-ring"></div>
      </div>
      <h2 class="profile-name">Linda Takuva</h2>
      <p class="profile-title">Web Developer / IT Support</p>
      <div class="profile-status">
        <span class="status-dot"></span>
        Available for work
      </div>
    </div>

    <!-- Navigation (kept, with icons) -->
    <nav class="navigation">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="nav-item"
        :class="{ active: route.path === item.path }"
        :aria-label="item.name"
      >
        <div class="nav-icon">
          <i :class="item.icon"></i>
          <span class="nav-flare" aria-hidden="true"></span>
        </div>
        <span class="nav-text">{{ item.name }}</span>
        <i class="nav-trailing fas fa-angle-right" aria-hidden="true"></i>
        <div class="nav-indicator"></div>
      </router-link>
    </nav>

    <!-- Social -->
    <div class="social-section">
      <h4 class="social-title">Connect</h4>
      <div class="social-links">
        <a href="https://github.com/Lindat25" target="_blank" class="social-link github" aria-label="GitHub">
          <i class="fab fa-github"></i><span class="social-tooltip">GitHub</span>
        </a>
        <a href="https://linkedin.com/in/linda-takuva-87b6442a9" target="_blank" class="social-link linkedin" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i><span class="social-tooltip">LinkedIn</span>
        </a>
      </div>
    </div>

    <!-- CV: View (modal over dashboard) + Download -->
    <div class="cv-actions">
      <button class="btn ghost" @click="openCV" aria-label="View CV">
        <i class="fas fa-eye"></i><span>View CV</span>
      </button>
      <a class="btn solid" :href="cvUrl" download="Linda_Takuva_CV.pdf" aria-label="Download CV">
        <i class="fas fa-download"></i><span>Download CV</span>
      </a>
    </div>

    <!-- CV Modal: covers ONLY the dashboard (right side), not the sidebar -->
    <div
      v-if="showCvModal"
      class="cv-overlay"
      @click.self="closeCV"
      role="dialog"
      aria-modal="true"
      aria-label="CV Viewer"
    >
      <div class="cv-modal">
        <button class="cv-close" @click="closeCV" aria-label="Close">✖</button>
        <!-- Native PDF viewer UI (toolbar/zoom/print) -->
        <iframe :src="cvUrl" title="CV Viewer" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import profileImage from '@/assets/images/profile.jpg'

// base-path safe asset URL (works on subfolder deploys like GitHub Pages)
const cvUrl = new URL('@/assets/cv/Linda_Takuva_CV.pdf', import.meta.url).href

export default {
  name: 'Sidebar',
  setup() {
    const route = useRoute()
    return { route }
  },
  data() {
    return {
      profileImage,
      cvUrl,
      showCvModal: false,
      navItems: [
        { name: 'Home', path: '/', icon: 'fas fa-home' },
        { name: 'About', path: '/about', icon: 'fas fa-user-circle' },
        { name: 'Projects', path: '/projects', icon: 'fas fa-laptop-code' },
        { name: 'Skills', path: '/skills', icon: 'fas fa-tools' },
        { name: 'Experience', path: '/experience', icon: 'fas fa-briefcase' },
        { name: 'Certifications', path: '/certifications', icon: 'fa-solid fa-certificate' },
        { name: 'Contact', path: '/contact', icon: 'fas fa-paper-plane' }
      ]
    }
  },
  methods: {
    openCV() {
      this.showCvModal = true
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', this.handleEsc)
    },
    closeCV() {
      this.showCvModal = false
      document.body.style.overflow = ''
      window.removeEventListener('keydown', this.handleEsc)
    },
    handleEsc(e) {
      if (e.key === 'Escape') this.closeCV()
    }
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleEsc)
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
/* ===== Sidebar container ===== */
.sidebar{
  position:fixed; left:0; top:0;
  width:300px; height:100vh; overflow-y:auto;
  color:#fff; padding:1.6rem 1.2rem; display:flex; flex-direction:column;
  z-index:1000;
  background:
    linear-gradient(135deg, rgba(102,126,234,.95) 0%, rgba(118,75,162,.96) 100%),
    radial-gradient(1200px 600px at -10% -20%, rgba(255,255,255,.12), transparent 60%);
  box-shadow:2px 0 28px rgba(20,14,40,.25);
  backdrop-filter:blur(12px);
  border-right:1px solid rgba(255,255,255,.08);
}
.sidebar::-webkit-scrollbar{ width:6px; }
.sidebar::-webkit-scrollbar-thumb{ background:rgba(255,255,255,.28); border-radius:6px; }

/* ===== Profile ===== */
.profile-section{ text-align:center; margin-bottom:1.6rem; }
.profile-image{
  width:112px; height:112px; margin:0 auto 1rem; border-radius:50%; overflow:hidden; position:relative;
  border:3px solid rgba(255,255,255,.35); transition:transform .25s, border-color .25s;
}
.profile-image:hover{ transform:translateY(-2px); border-color:rgba(255,255,255,.6); }
.profile-image img{ width:100%; height:100%; object-fit:cover; }
.profile-ring{
  position:absolute; inset:-6px; border-radius:50%;
  background: conic-gradient(from 0deg, rgba(255,255,255,.35), transparent 40%, rgba(255,255,255,.35));
  animation: spin 6s linear infinite;
}
@keyframes spin{ to{ transform:rotate(360deg); } }
.profile-name{
  font-size:1.35rem; font-weight:700; margin:.25rem 0 .2rem; letter-spacing:.3px;
  background:linear-gradient(45deg,#fff,#f3f3f3); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
}
.profile-title{ opacity:.9; font-size:.92rem; margin-bottom:.6rem; color:rgba(255,255,255,.9); }
.profile-status{ display:inline-flex; align-items:center; gap:.5rem; font-size:.82rem; opacity:.9; }
.status-dot{ width:8px; height:8px; background:#4ade80; border-radius:50%; box-shadow:0 0 0 3px rgba(74,222,128,.25); }

/* ===== Navigation ===== */
.navigation{ flex:1; margin:.6rem 0 1.4rem; }
.nav-item{
  display:grid; grid-template-columns:28px 1fr 18px; align-items:center;
  padding:.9rem 1rem; color:#fff; text-decoration:none;
  border-radius:12px; margin-bottom:.45rem; position:relative; overflow:hidden;
  transition: transform .18s, background .2s, box-shadow .2s, border-color .2s;
  background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.08);
}
.nav-item::before{
  content:""; position:absolute; inset:0;
  background: radial-gradient(600px 60px at -20% 50%, rgba(255,255,255,.12), transparent 60%);
  transform: translateX(-80%); transition: transform .45s;
}
.nav-item:hover::before{ transform: translateX(0); }
.nav-item:hover{ transform: translateX(6px); box-shadow: 0 6px 18px rgba(0,0,0,.18); border-color: rgba(255,255,255,.18); }
.nav-item.active{ background: rgba(255,255,255,.14); border-color: rgba(255,255,255,.28); box-shadow: 0 8px 24px rgba(0,0,0,.22); }

.nav-icon{ position:relative; width:28px; height:28px; display:grid; place-items:center; font-size:1.05rem; }
.nav-icon i{ z-index:1; }
.nav-flare{
  position:absolute; inset:0; border-radius:50%;
  background: radial-gradient(circle at 50% 50%, rgba(255,255,255,.25), transparent 55%);
  transform: scale(0); opacity:0; transition: transform .25s, opacity .25s;
}
.nav-item:hover .nav-flare, .nav-item.active .nav-flare{ transform: scale(1.2); opacity:1; }

.nav-text{ font-weight:600; font-size:.95rem; letter-spacing:.2px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.nav-trailing{ justify-self:end; opacity:0; transform:translateX(-6px); transition: opacity .2s, transform .2s; font-size:.95rem; }
.nav-item:hover .nav-trailing, .nav-item.active .nav-trailing{ opacity:.9; transform:translateX(0); }

.nav-indicator{
  position:absolute; right:6px; top:50%; transform:translateY(-50%) scaleY(0);
  width:4px; height:20px; border-radius:2px; background:rgba(255,255,255,.9);
  opacity:0; transition: transform .2s, opacity .2s;
}
.nav-item.active .nav-indicator{ opacity:1; transform: scaleY(1); }

/* ===== Social ===== */
.social-section{ margin:.8rem 0 1.3rem; }
.social-title{ font-size:.78rem; text-transform:uppercase; letter-spacing:1.2px; margin-bottom:.7rem; opacity:.75; font-weight:700; }
.social-links{ display:grid; grid-template-columns:repeat(2,1fr); gap:.75rem; }
.social-link{
  display:grid; place-items:center; height:44px; border-radius:12px; color:#fff; text-decoration:none;
  background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12);
  transition: transform .18s, box-shadow .2s, background .2s;
  position:relative; font-size:1.1rem;
}
.social-link:hover{ transform:translateY(-3px); box-shadow:0 8px 22px rgba(0,0,0,.28); }
.social-link.github:hover{ background:#333; }
.social-link.linkedin:hover{ background:#0a66c2; }
.social-tooltip{
  position:absolute; bottom:-30px; left:50%; transform:translateX(-50%);
  background:rgba(0,0,0,.8); color:#fff; padding:.28rem .5rem; border-radius:6px; font-size:.7rem;
  opacity:0; pointer-events:none; transition:opacity .2s;
}
.social-link:hover .social-tooltip{ opacity:1; }

/* ===== CV buttons ===== */
.cv-actions{ display:grid; grid-template-columns:1fr 1fr; gap:.6rem; }
.btn{
  display:inline-flex; align-items:center; justify-content:center; gap:.5rem;
  border-radius:12px; padding:.85rem .9rem; font-weight:700; cursor:pointer; letter-spacing:.2px;
  text-decoration:none; position:relative; overflow:hidden;
  transition: transform .18s, box-shadow .2s, background .2s, border-color .2s;
}
.btn i{ font-size:.95rem; }
.btn.ghost{ background: rgba(255,255,255,.10); color:#fff; border:1px solid rgba(255,255,255,.24); }
.btn.ghost:hover{ background: rgba(255,255,255,.18); transform: translateY(-1px); }
.btn.solid{
  background:#0f766e; color:#fff; border:1px solid rgba(255,255,255,.12); box-shadow:0 10px 22px rgba(15,118,110,.35);
}
.btn.solid:hover{ filter:brightness(.98); transform: translateY(-1px); }

/* ===== CV Modal — ONLY over dashboard (right of sidebar) ===== */
.cv-overlay{
  position:fixed;
  top:0;
  left: var(--sidebar-width, 300px);          /* start AFTER the sidebar */
  width: calc(100% - var(--sidebar-width, 300px));
  height:100%;
  z-index:1100;
  background:rgba(0,0,0,.6);
  display:grid; place-items:center;
}
@media (max-width:768px){
  .cv-overlay{ left:0; width:100%; }          /* full width on mobile */
}
.cv-modal{
  width:min(980px, 92vw);
  height:min(85vh, 900px);
  background:#fff; border-radius:14px; overflow:hidden; position:relative;
  display:flex; flex-direction:column; box-shadow:0 20px 50px rgba(0,0,0,.35);
}
.cv-close{
  position:absolute; top:.6rem; right:.6rem; z-index:2;
  background:rgba(0,0,0,.06); border:none; border-radius:10px;
  width:36px; height:36px; cursor:pointer; font-size:1rem;
}
.cv-modal iframe{ flex:1 1 auto; width:100%; height:100%; border:0; }

/* ===== Mobile bottom bar ===== */
@media (max-width:768px){
  .sidebar{
    width:100%; height:72px; left:0; top:auto; bottom:0; padding:0 .6rem;
    flex-direction:row; align-items:center; backdrop-filter:blur(16px);
  }
  .profile-section, .social-section{ display:none; }
  .navigation{ flex:1; margin:0; display:flex; flex-direction:row; justify-content:space-around; }
  .nav-item{ grid-template-columns:28px 1fr; padding:.55rem .4rem; margin:0; border-radius:10px; }
  .nav-text{ font-size:.64rem; }
  .nav-trailing, .nav-indicator{ display:none; }
  .cv-actions{ display:none; } /* keep bottom bar clean */
}
</style>
