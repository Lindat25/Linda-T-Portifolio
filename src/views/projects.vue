<template>
  <div class="projects">
    <div class="page-header">
      <h1>My Projects</h1>
      <p>A showcase of my development work and technical skills</p>
    </div>

    <!-- Filter Buttons -->
    <div class="filter-section">
      <button
        v-for="category in categories"
        :key="category"
        @click="filterProjects(category)"
        :class="['filter-btn', { active: activeFilter === category }]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid" v-if="activeFilter !== 'Designing'">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="project-card"
        @click="openProjectModal(project)"
      >
        <div class="project-image">
          <img :src="project.image" :alt="project.title" />
          <div class="project-overlay">
            <div class="project-links">
              <a :href="project.github" target="_blank" class="project-link" @click.stop>
                <i class="fab fa-github"></i>
              </a>
              <a :href="project.demo" target="_blank" class="project-link" @click.stop>
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-category">{{ project.category }}</div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.shortDescription }}</p>
          <div class="project-tech">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Design Grid (shown when Designing filter is active) -->
    <div class="design-grid" v-if="activeFilter === 'Designing'">
      <div
        class="design-card"
        v-for="item in designs"
        :key="item.title"
      >
        <img :src="item.image" :alt="item.title" class="design-image" />
        <div class="design-content">
          <h3 class="design-title">{{ item.title }}</h3>
          <p class="design-desc">{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeProjectModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeProjectModal">
          <i class="fas fa-times"></i>
        </button>

        <div class="modal-header">
          <h2>{{ selectedProject.title }}</h2>
          <div class="modal-links">
            <a :href="selectedProject.github" target="_blank" class="modal-btn">
              <i class="fab fa-github"></i> View Code
            </a>
            <a :href="selectedProject.demo" target="_blank" class="modal-btn primary">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
        </div>

        <div class="modal-body">
          <img :src="selectedProject.image" :alt="selectedProject.title" class="modal-image" />

          <div class="modal-details">
            <h3>About This Project</h3>
            <p>{{ selectedProject.fullDescription }}</p>

            <h3>Technologies Used</h3>
            <div class="modal-tech">
              <span
                v-for="tech in selectedProject.technologies"
                :key="tech"
                class="tech-tag large"
              >
                {{ tech }}
              </span>
            </div>

            <h3>Key Features</h3>
            <ul class="features-list">
              <li v-for="feature in selectedProject.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cableImage from '@/assets/images/cable.png'
import Od from '@/assets/images/od.svg'
import Wings from '@/assets/images/img.png'
import Africa from '@/assets/images/africa day poster.jpg'
import AfricaDay from '@/assets/images/Africa day.jpg'
export default {
  name: 'Projects',
  data() {
    return {
      activeFilter: 'All',
      selectedProject: null,
      categories: ['All', 'Web Apps', 'Mobile', 'Designing'],
      projects: [
        {
            id: 1,
            title: 'OD International Website',
            category: 'Web Apps',
            shortDescription: 'Corporate website with blog, mobile prototype, and SEO enhancements',
            fullDescription: 'A modern, fully responsive corporate website developed for OD International. Built using WordPress and Framer, the site enhances user experience and engagement with clean design, optimized SEO, and dynamic content sections. Included development of mobile app prototypes using Flutter and implementation of data-driven marketing features.',
            image: Od, // Replace with actual image path
            technologies: ['WordPress', 'Framer', 'Flutter', 'HTML', 'CSS', 'JavaScript'],
            features: [
              'Custom WordPress theme development',
              'SEO optimization resulting in 40% user engagement increase',
              'Mobile app prototype development with Flutter',
              'Web scraping scripts for market intelligence',
              'Content-rich blog and service sections',
              'Responsive design compatible across all devices',
              'Marketing materials integration for brand visibility'
            ],
            github: '',
            demo: 'https://www.odinternational.co.za/' // Replace with real demo URL if available
          },
        {
          id: 2,
          title: 'Task Management App',
          category: 'Web Apps',
          shortDescription: 'Task tracking system with user roles, built using PHP and vanilla JavaScript',
          fullDescription: 'A task management application developed during my time at OD International, designed to help teams assign, track, and manage tasks efficiently. Built using HTML, CSS, JavaScript for the front-end and PHP with a MySQL database on the backend. The app features user role management, task status updates, and a clean dashboard interface. Though not deployed publicly, it served as an internal productivity tool.',
          image: '/images/task-manager.png',
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
          features: [
            'User authentication and role-based access',
            'Task creation and deadline tracking',
            'Status updates (To Do, In Progress, Done)',
            'Dashboard UI for task overview',
            'Responsive layout for mobile and desktop',
            'Backend built in PHP with MySQL database integration'
          ],
          github: '',
          demo: ''
        },

          {
            id: 3,
            title: 'Wings of Hope Website',
            category: 'Web Apps',
            shortDescription: 'Framer-based responsive website for a non-profit organization',
            fullDescription: 'Developed a modern, fully responsive website for Wings of Hope using Framer. The project focused on clean UX/UI, smooth animations, and clear messaging to support the organizations\'s mission. The site includes dynamic content sections, contact forms, and a fully branded design tailored to their identity.',
            image: Wings,
            technologies: ['Framer', 'HTML', 'CSS', 'JavaScript'],
            features: [
              'Designed and developed using Framer\'s visual builder',
              'Custom animations and transitions for engaging UX',
              'Mobile-first responsive layout',
              'Clear navigation and structured content',
              'Contact and donation integration sections',
              'Consistent branding and modern visuals',
              'Deployed and maintained with client feedback'
            ],
            github: '', // Framer projects typically don't have public source code
            demo: 'https://wings-of-hope.co.za'
          },
        {
          id: 4,
          title: 'TaskFlow Mobile App',
          category: 'Mobile',
          shortDescription: 'Flutter-based task management app with Play Store deployment',
          fullDescription: 'A comprehensive mobile task management application built with Flutter. The app features user authentication, real-time task synchronization, offline capabilities, and push notifications. Successfully deployed to Google Play Store with proper app store optimization, including metadata management, screenshot optimization, and compliance with Play Store policies. Managed the complete app lifecycle from development to production deployment.',
          image: '/images/taskflow-mobile.png',
          technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'Google Play Console'],
          features: [
            'Cross-platform mobile app (Android & iOS ready)',
            'User authentication with Firebase Auth',
            'Real-time data synchronization',
            'Offline mode with local SQLite storage',
            'Push notifications for task reminders',
            'Material Design UI components',
            'Play Store deployment and management',
            'App store optimization (ASO) implementation',
            'Version control and release management',
            'Play Console analytics integration'
          ],
          github: 'https://github.com/yourusername/taskflow-mobile',
          demo: 'https://play.google.com/store/apps/details?id=com.yourcompany.taskflow'
        },

        {
          id: 6,
          title: 'Portfolio Website',
          category: 'Web Apps',
          shortDescription: 'Responsive portfolio built with Vue.js',
          fullDescription: 'This very portfolio website you\'re viewing! Built with Vue.js and featuring a modern dashboard design, smooth animations, and fully responsive layout. Showcases my projects, skills, and experience in an interactive format.',
          image: '/api/placeholder/400/250',
          technologies: ['Vue.js', 'Vue Router', 'CSS3', 'JavaScript'],
          features: [
            'Responsive dashboard design',
            'Smooth page transitions',
            'Interactive project showcase',
            'Contact form integration',
            'SEO optimized',
            'Fast loading performance',
            'Mobile-first approach'
          ],
          github: 'https://github.com/yourusername/portfolio',
          demo: 'https://yourportfolio.com'
        }
      ],

      designs: [
        {
          title: 'Event Flyer - Youth Conference',
          description: 'Designed using Canva and Photoshop for a youth church event.',
          image: Africa // Replace with actual image
        },
        {
          title: 'Business Logo - Nala Beauty',
          description: 'Custom minimalist logo design for a local beauty brand.',
          image: AfricaDay
        },
        {
          title: 'Product Promo Banner',
          description: 'Social media promotional banner created for an online campaign.',
          image: cableImage
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'All') {
        return this.projects;
      }
      if (this.activeFilter === 'Designing') {
        return []; // Return empty array since designs are handled separately
      }
      return this.projects.filter(project => project.category === this.activeFilter);
    }
  },
  methods: {
    filterProjects(category) {
      this.activeFilter = category;
    },
    openProjectModal(project) {
      this.selectedProject = project;
      document.body.style.overflow = 'hidden';
    },
    closeProjectModal() {
      this.selectedProject = null;
      document.body.style.overflow = 'auto';
    }
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto';
  }
}
</script>

<style scoped>
.projects {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  color: #666;
}

.filter-section {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #e0e0e0;
  background: white;
  color: #666;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-btn:hover {
  border-color: #667eea;
  color: #667eea;
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.project-image {
  position: relative;
  height: 250px; /* uniform height for all project images */
  overflow: hidden;
  background: linear-gradient(to bottom, #f7f7f7, #eaeaea);
  border-bottom: 1px solid #eee;


}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* ensures consistent aspect ratio */
  display: block;
  background: linear-gradient(to bottom, #f7f7f7, #eaeaea);

  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.project-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
}

.project-category {
  font-size: 0.8rem;
  color: #667eea;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.75rem;
}

.project-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #f0f0f0;
  color: #555;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.tech-tag.large {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

/* Design Grid Styles */
.design-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.design-card {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  width: 100%; /* or set a specific width like 650px */
  max-width: none;
}

.design-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.design-image {
  width: 630px;
  height: 900px;
  object-fit: cover;
  background: linear-gradient(to bottom, #f7f7f7, #eaeaea);
  display: block;
}


.design-content {
  padding: 1.5rem;
}

.design-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
}

.design-desc {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  border-radius: 16px;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s ease;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.2);
}

.modal-header {
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #eee;
}

.modal-header h2 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.modal-links {
  display: flex;
  gap: 1rem;
}

.modal-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.modal-btn {
  background: #f0f0f0;
  color: #333;
}

.modal-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.modal-btn:hover {
  transform: translateY(-2px);
}

.modal-body {
  padding: 2rem;
}

.modal-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.modal-details h3 {
  color: #333;
  margin: 2rem 0 1rem 0;
  font-size: 1.3rem;
}

.modal-details h3:first-child {
  margin-top: 0;
}

.modal-details p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.modal-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.features-list {
  color: #666;
  line-height: 1.8;
}

.features-list li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2.5rem;
  }

  .projects-grid, .design-grid {
    grid-template-columns: 1fr;
  }

  .filter-section {
    flex-direction: column;
    align-items: center;
  }

  .modal-overlay {
    padding: 1rem;
  }

  .modal-header,
  .modal-body {
    padding: 1.5rem;
  }

  .modal-links {
    flex-direction: column;
  }
}
</style>