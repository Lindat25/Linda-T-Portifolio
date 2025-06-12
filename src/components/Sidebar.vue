<template>
  <div class="sidebar">
    <div class="profile-section">
      <div class="profile-image">
        <img :src="profileImage" alt="Profile" />
      </div>
      <h2 class="profile-name">Your Name</h2>
      <p class="profile-title">Computer Science Graduate</p>
    </div>

    <nav class="navigation">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="nav-item"
        :class="{ active: route.path === item.path }"

      >
        <i :class="item.icon"></i>
        <span>{{ item.name }}</span>
      </router-link>
    </nav>

    <div class="social-links">
      <a href="https://github.com/yourusername" target="_blank" class="social-link">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:your.email@example.com" class="social-link">
        <i class="fas fa-envelope"></i>
      </a>
    </div>

    <button class="download-cv" @click="downloadCV">
      <i class="fas fa-download"></i>
      Download CV
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
        { name: 'About', path: '/about', icon: 'fas fa-user' },
        { name: 'Projects', path: '/projects', icon: 'fas fa-code' },
        { name: 'Skills', path: '/skills', icon: 'fas fa-cogs' },
        { name: 'Experience', path: '/experience', icon: 'fas fa-briefcase' },
        { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
      ]
    }
  },
  methods: {
    downloadCV() {
      // Add your CV download logic here
      window.open('/cv.pdf', '_blank');
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 280px;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  z-index: 1000;
}

.profile-section {
  text-align: center;
  margin-bottom: 3rem;
}

.profile-image {
  width: 120px;
  height: 120px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0.3);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-name {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.profile-title {
  opacity: 0.9;
  font-size: 0.9rem;
}

.navigation {
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.nav-item.active {
  background: rgba(255, 255, 255, 0.2);
}

.nav-item i {
  margin-right: 0.75rem;
  width: 20px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.download-cv {
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.download-cv:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.download-cv i {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    width: 100%;
    height: auto;
    bottom: 0;
    top: auto;
    left: 0;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
  }

  .profile-section {
    display: none;
  }

  .navigation {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex: unset;
  }

  .nav-item {
    padding: 0.5rem;
    margin-bottom: 0;
    flex-direction: column;
    font-size: 0.8rem;
  }

  .social-links,
  .download-cv {
    display: none;
  }
}

</style>