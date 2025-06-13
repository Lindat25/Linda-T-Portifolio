<template>
  <div class="sidebar">
    <!-- Profile Section -->
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

    <!-- Navigation -->
    <nav class="navigation">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="nav-item"
        :class="{ active: route.path === item.path }"
      >
        <div class="nav-icon">
          <i :class="item.icon"></i>
        </div>
        <span class="nav-text">{{ item.name }}</span>
        <div class="nav-indicator"></div>
      </router-link>
    </nav>

    <!-- Social Links -->
    <div class="social-section">
      <h4 class="social-title">Connect</h4>
      <div class="social-links">
        <a href="https://github.com/Lindat25" target="_blank" class="social-link github">
          <i class="fab fa-github"></i>
          <span class="social-tooltip">GitHub</span>
        </a>
        <a href="https://linkedin.com/in/linda-takuva-87b6442a9" target="_blank" class="social-link linkedin">
          <i class="fab fa-linkedin"></i>
          <span class="social-tooltip">LinkedIn</span>
        </a>
      </div>
    </div>

    <!-- Download CV Button -->
    <button class="download-cv" @click="downloadCV">
      <i class="fas fa-download"></i>
      <span>Download CV</span>
      <div class="button-glow"></div>
    </button>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import profileImage from '@/assets/images/profile.jpg'

export default {
  name: 'Sidebar',
  setup() {
    const route = useRoute()
    return { route }
  },
  data() {
    return {
      profileImage,
      navItems: [
        { name: 'Home', path: '/', icon: 'fas fa-home' },
        { name: 'About', path: '/about', icon: 'fas fa-user-circle' },
        { name: 'Projects', path: '/projects', icon: 'fas fa-laptop-code' },
        { name: 'Skills', path: '/skills', icon: 'fas fa-tools' },
        { name: 'Experience', path: '/experience', icon: 'fas fa-briefcase' },
        { name: 'Contact', path: '/contact', icon: 'fas fa-paper-plane' }
      ]
    }
  },
  methods: {
    downloadCV() {
      const link = document.createElement('a');
      link.href = '/Linda_Takuva_CV.pdf';       // must match the filename you put in public/
      link.download = 'Linda_Takuva_CV.pdf'; // desired filename
      link.click();
    }

  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 6px;
}


/* Profile Section */
.profile-section {
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
}

.profile-image {
  width: 110px;
  height: 110px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.6);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-ring {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), transparent);
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.profile-name {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.profile-title {
  opacity: 0.9;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);
}

.profile-status {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  opacity: 0.8;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  margin-right: 0.5rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Navigation */
.navigation {
  flex: 1;
  margin-bottom: 2rem;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 1rem 1.2rem;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  margin-bottom: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.nav-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.nav-item:hover::before {
  left: 100%;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(8px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.nav-item.active {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.nav-item.active .nav-indicator {
  opacity: 1;
  transform: scaleY(1);
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  margin-right: 1rem;
  font-size: 1.1rem;
}

.nav-text {
  font-weight: 500;
  font-size: 0.95rem;
}

.nav-indicator {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) scaleY(0);
  width: 4px;
  height: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  opacity: 0;
  transition: all 0.3s ease;
}

/* Social Section */
.social-section {
  margin-bottom: 2rem;
}

.social-title {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  opacity: 0.7;
  font-weight: 600;
}

.social-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  font-size: 1.1rem;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.social-link.github:hover { background: #333; }
.social-link.linkedin:hover { background: #0077b5; }
.social-link.email:hover { background: #ea4335; }
.social-link.twitter:hover { background: #1da1f2; }

.social-tooltip {
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.7rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  white-space: nowrap;
}

.social-link:hover .social-tooltip {
  opacity: 1;
}

/* Download CV Button */
.download-cv {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.download-cv:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.button-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s;
}

.download-cv:hover .button-glow {
  left: 100%;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    width: 100%;
    height: 70px;
    bottom: 0;
    top: auto;
    left: 0;
    padding: 0.5rem 1rem;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    backdrop-filter: blur(20px);
  }

  .profile-section,
  .social-section,
  .download-cv {
    display: none;
  }

  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex: 1;
    margin: 0;
  }

  .nav-item {
    padding: 0.8rem 0.5rem;
    margin: 0;
    flex-direction: column;
    font-size: 0.7rem;
    min-width: 50px;
    border-radius: 8px;
  }

  .nav-item:hover {
    transform: translateY(-3px);
  }

  .nav-icon {
    margin-right: 0;
    margin-bottom: 0.2rem;
    font-size: 1.2rem;
  }

  .nav-text {
    font-size: 0.65rem;
    font-weight: 500;
  }

  .nav-indicator {
    display: none;
  }
}

@media (max-width: 480px) {
  .nav-text {
    display: none;
  }
  
  .nav-item {
    padding: 1rem 0.3rem;
  }
}
</style>