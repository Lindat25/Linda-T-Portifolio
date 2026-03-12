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
        <div class="project-visual" :class="project.visualClass">
          <div class="project-icon">
            <i :class="project.icon"></i>
          </div>
          <div class="project-overlay">
            <div class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" class="project-link" @click.stop>
                <i class="fab fa-github"></i>
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" class="project-link" @click.stop>
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-category">{{ project.category }}</div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.shortDescription }}</p>
          <div class="project-tech">
            <span
              v-for="tech in project.technologies.slice(0, 4)"
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
            <span v-if="project.technologies.length > 4" class="tech-more">
              +{{ project.technologies.length - 4 }} more
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Design Grid (shown when Designing filter is active) -->
    <div class="design-grid" v-if="activeFilter === 'Designing'">
      <div
        class="design-card"
        v-for="(item, index) in designs"
        :key="item.title"
        :class="`design-${index + 1}`"
      >
        <div class="design-visual">
          <div class="design-icon">
            <i :class="item.icon"></i>
          </div>
          <div class="design-pattern"></div>
        </div>
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
          <div class="modal-project-visual" :class="selectedProject.visualClass">
            <div class="modal-project-icon">
              <i :class="selectedProject.icon"></i>
            </div>
          </div>
          <div class="modal-header-content">
            <h2>{{ selectedProject.title }}</h2>
            <div class="modal-links">
              <a v-if="selectedProject.github" :href="selectedProject.github" target="_blank" class="modal-btn">
                <i class="fab fa-github"></i> View Code
              </a>
              <a v-if="selectedProject.demo" :href="selectedProject.demo" target="_blank" class="modal-btn primary">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div class="modal-body">
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
export default {
  name: 'Projects',
  data() {
    return {
      activeFilter: 'All',
      selectedProject: null,
      categories: ['All', 'Web Apps', 'Mobile','Wordpress' ],
      projects: [
        {
          id: 1,
          title: 'OD International Website',
          category: 'Wordpress',
          shortDescription: 'Corporate website with blog, mobile prototype, and SEO enhancements',
          fullDescription: 'A modern, fully responsive corporate website developed for OD International. Built using WordPress and Framer, the site enhances user experience and engagement with clean design, optimized SEO, and dynamic content sections. Included development of mobile app prototypes using Flutter and implementation of data-driven marketing features.',
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
          demo: 'https://www.odinternational.co.za/',
          icon: 'fas fa-globe',
          visualClass: 'visual-corporate'
        },

        {
          id: 1,
          title: 'Pia Built Homes',
          category: 'Wordpress',
          shortDescription: 'Premium custom home builder in Sydney specialising in custom designs, knock‑down rebuilds and duplex homes',
          fullDescription: 'Pia Built Homes is a family‑owned custom home builder based in Gregory Hills (Sydney), with over 15 years’ experience in luxury residential construction. Specializing in custom homes, duplex builds and knock‑down rebuilds, they provide end‑to‑end service: from architectural design, approvals and drafting through to construction and interior detailing. Pia Built Homes creates bespoke residences tailored to clients’ lifestyle and block constraints, ensuring compliance with statutory requirements and delivering energy‑efficient, beautifully crafted homes across Greater Sydney.',
          technologies: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
          features: [
          "Responsive custom WordPress site highlighting design consultation, approvals & project gallery",
          "Detailed services pages for Custom Homes, Knock‑Down Rebuilds & Duplexes",
          "Team‑focused messaging showcasing 15+ years of experience",
          "Interactive contact forms for consultations (phone, email enquiries)",
          "Locations and service areas clearly mapped (Greater Sydney including Sutherland Shire, Cronulla, Caringbah)",
          "SEO optimized content to target custom home building keywords in Sydney",
          "Mobile‑friendly and easy to navigate project gallery and enquiry flow"
          ],
          demo: 'https://www.piabuilthomes.com.au/',
          icon: 'fas fa-home',
          visualClass: 'visual-corporate'
        },






        {
          id: 1,
          title: 'E-Sports',
          category: 'Wordpress',
          shortDescription: ' A gaming blog and informational hub built with WordPress and Elementor, offering esports guides, competitive gaming insights, and industry tips, along with betting and casino strategy content.',
          fullDescription: 'EsportsLeagueTips.com is a content-driven gaming website built with WordPress and Elementor, designed to deliver competitive gaming insights, esports news, and strategy articles. I developed and styled the site using Elementor’s visual builder, organizing content into intuitive sections and categories to improve user engagement and navigation. The site features dynamic blog layouts, custom category pages, responsive design for different screen sizes, and clear UI blocks to showcase featured articles.',
          technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
          features: [
          "Multi-Category Content Architecture",
          "Dynamic Archive & Posts Layout",
          "Customizable Headers & Navigation Menus",
          "Responsive Grids for Blog Articles",
          "Built on WordPress CMS",
          "Elementor Page Builder",
          "SEO-Friendly Structure"
          ],
          demo: 'https://esportsleaguetips.com/',
          icon: 'fas fa-home',
          visualClass: 'visual-corporate'
        },


         {
          id: 1,
          title: 'Cleanserv',
          category: 'Wordpress',
          shortDescription: ' CleanServ.co.za is a professional cleaning services website built on WordPress with Elementor, offering residential, commercial, and industrial cleaning solutions across Johannesburg and surrounding areas in South Africa.',
          fullDescription: 'CleanServ.co.za is a fully developed WordPress website built with Elementor for a professional cleaning services company in South Africa. I designed and structured the site to showcase a wide range of cleaning solutions — including residential, commercial, and industrial services — using organized service pages, testimonials, pricing packages, and clear booking forms. The homepage features modular content blocks for intuitive browsing and conversion-focused calls to action, while service detail pages provide in-depth information tailored to user needs.',
          technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
          features: [
          "Conversion-Focused Service Architecture",
          "Lead Generation & Inquiry System",
          "Local SEO Structure",
          "Responsive Grids for Blog Articles",
          "Built on WordPress CMS",
          "Elementor Page Builder",
          "SEO-Friendly Content Organization",
          "Trust & Authority Elements",
          "Responsive & Mobile Optimization"
          ],
          demo: 'https://cleanserv.co.za/',
          icon: 'fas fa-home',
          visualClass: 'visual-corporate'
        },

        {
          id: 1,
          title: 'Mazvita Travel and Tours',
          category: 'Wordpress',
          shortDescription: 'A WordPress travel and boat hire website built with Elementor, offering Lake Kariba boat rides, cruises, fishing adventures, and guided tours in Zimbabwe',
          fullDescription: 'I developed a high-performance, conversion-focused service platform for a premier Lake Kariba tour operator specializing in boat hire and event charters. Built with WordPress and Elementor, the site utilizes a modular design pattern to ensure intuitive navigation across a diverse service catalog, including sunset cruises, guided fishing tours, and event charters. To drive business growth, I engineered a dedicated lead-generation funnel supported by trust-building UI components, such as vibrant visual galleries and strategic customer testimonials. Furthermore, I implemented a robust local SEO structure and fully responsive layouts to maximize search visibility and user engagement across all devices, effectively bridging the gap between digital discovery and confirmed bookings.',
          technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
          features: [
          "Experience-Driven Design Strategy",
          "Service Package Structuring",
          "Performance & Responsiveness",
          "Responsive Grids for Blog Articles",
          "Scalable CMS Setup",
          "Elementor Page Builder",
          "SEO-Friendly Content Organization"
          ],
          demo: 'mazvitatravelandtours.co.zw',
          icon: 'fas fa-home',
          visualClass: 'visual-corporate'
        },


        {
          id: 2,
          title: 'Task Management App',
          category: 'Web Apps',
          shortDescription: 'Task tracking system with user roles, built using PHP and vanilla JavaScript',
          fullDescription: 'A task management application developed during my time at OD International, designed to help teams assign, track, and manage tasks efficiently. Built using HTML, CSS, JavaScript for the front-end and PHP with a MySQL database on the backend. The app features user role management, task status updates, and a clean dashboard interface. Though not deployed publicly, it served as an internal productivity tool.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
          features: [
            'User authentication and role-based access',
            'Task creation and deadline tracking',
            'Status updates (To Do, In Progress, Done)',
            'Dashboard UI for task overview',
            'Responsive layout for mobile and desktop',
            'Backend built in PHP with MySQL database integration'
          ],
          github: 'https://github.com/Lindat25/project-management',
          demo: '',
          icon: 'fas fa-tasks',
          visualClass: 'visual-productivity'
        },
        {
          id: 3,
          title: 'Wings of Hope Website',
          category: 'Wordpress',
          shortDescription: 'Framer-based responsive website for a non-profit organization',
          fullDescription: 'Designed and developed a responsive website for Wings of Hope, a South African non-profit supporting vulnerable individuals through cancer assistance, meal programs, and community outreach. The project involved creating a clean, user-friendly layout with clear navigation to highlight their services and encourage donations. I implemented SEO strategies and optimized for mobile devices, improving accessibility and visibility. This platform now serves as a vital digital presence for the organization, helping them connect with donors and expand their outreach.',
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
          github: '',
          demo: 'https://wings-of-hope.co.za',
          icon: 'fas fa-heart',
          visualClass: 'visual-nonprofit'
        },

        
        {
          id: 3,
          title: 'TheAdCo Cedar Demo ',
          category: 'Wordpress',
          shortDescription: 'Premium home builder website with elegant design, service showcase, and high-end residential portfolio',
          fullDescription: 'Cedar is a bespoke home construction company whose site showcases refined residential design and quality craftsmanship. Built using WordPress and Elementor, the site presents Cedar’s custom home services, detailed project pages, and luxury-focused visual design. It features a clean hero banner, interactive service sections, and an elegant portfolio layout tailored for clients seeking modern, high-end living spaces.',
          technologies: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
          features: [
            "Hero section with high-resolution visuals and CTA",
            "Service showcase blocks with modern iconography",
            "Portfolio/project gallery with filtering options",
            "About and values sections emphasizing craftsmanship",
            "Fully responsive and performance-optimized layout",
            "Integrated contact form and inquiry functionality",
            "SEO-optimized pages targeting the home construction niche"
          ],
          demo: 'https://demo4.theadco.com.au/',
          icon: 'fas fa-house-user',
          visualClass: 'visual-nonprofit'
        },





        {
          id: 6,
          title: 'Living Blessings Christian Pre-School',
          category: 'Web Apps',
          shortDescription: 'Educational website for a pre-school and early grades institution with program info, admissions, and parent resources',
          fullDescription: 'Living Blessings School is a responsive multi-page website developed to serve a faith-based early childhood education institution, covering pre-school through Grade 3. Built using HTML, CSS, and JavaScript, the site includes program overviews, admissions info, gallery, parent communication resources, and contact functionality. Designed with accessibility and clarity in mind, it reflects a calm and nurturing visual identity. The site serves both prospective and enrolled families, with clear navigation and mobile-friendly layouts.',
          technologies: ["HTML", "CSS", "JavaScript"],
          features: [
             "Multi-page structure: Home, About, Programs, Admissions, Events, Contact",
            "Mobile-optimized responsive design for parents on the go",
            "Admissions section with requirements and enrollment process",
            "Image gallery to showcase classrooms and activities",
            "Contact form with location map integration",
            "Faith-aligned design elements and color scheme",
            "Fast-loading and hosted via Vercel"
          ],
          github: 'https://github.com/Lindat25/LivingBlessings.git',
          demo: 'https://living-blessings-p9re.vercel.app/',
          icon: 'fas fa-user',
          visualClass: 'visual-portfolio'
        },

        {
          id: 4,
          title: 'TaskFlow Mobile App',
          category: 'Mobile',
          shortDescription: 'Flutter-based task management app with Play Store deployment',
          fullDescription: 'A comprehensive mobile task management application built with Flutter. The app features user authentication, real-time task synchronization, offline capabilities, and push notifications. Successfully deployed to Google Play Store with proper app store optimization, including metadata management, screenshot optimization, and compliance with Play Store policies. Managed the complete app lifecycle from development to production deployment.',
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
          github: '',
          demo: '',
          icon: 'fas fa-mobile-alt',
          visualClass: 'visual-mobile'
        },
        {
          id: 6,
          title: 'Portfolio Website',
          category: 'Web Apps',
          shortDescription: 'Responsive portfolio built with Vue.js',
          fullDescription: 'This very portfolio website you\'re viewing! Built with Vue.js and featuring a modern dashboard design, smooth animations, and fully responsive layout. Showcases my projects, skills, and experience in an interactive format.',
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
          github: 'https://github.com/Lindat25/Linda-T-Portifolio',
          demo: 'https://yourportfolio.com',
          icon: 'fas fa-user',
          visualClass: 'visual-portfolio'
        }
      ],

      designs: [
        {
          title: 'Event Flyer - Youth Conference',
          description: 'Designed using Canva and Photoshop for a youth church event.',
          icon: 'fas fa-calendar-alt'
        },
        {
          title: 'Business Logo - Nala Beauty',
          description: 'Custom minimalist logo design for a local beauty brand.',
          icon: 'fas fa-palette'
        },
        {
          title: 'Product Promo Banner',
          description: 'Social media promotional banner created for an online campaign.',
          icon: 'fas fa-bullhorn'
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
        return [];
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
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
}

.project-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

/* Visual Design Styles */
.project-visual {
  position: relative;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-corporate {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.visual-productivity {
  background: linear-gradient(135deg, #8b7cf8 0%, #667eea 100%);
}

.visual-nonprofit {
  background: linear-gradient(135deg, #a8a4f5 0%, #8b7cf8 100%);
}

.visual-mobile {
  background: linear-gradient(135deg, #9c88ff 0%, #764ba2 100%);
}

.visual-portfolio {
  background: linear-gradient(135deg, #b794f6 0%, #9c88ff 100%);
}


.project-icon {
  font-size: 3rem;
  color: white;
  z-index: 2;
  position: relative;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.project-card:hover .project-icon {
  transform: scale(1.1);
  opacity: 1;
}

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 60px;
  height: 60px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 40px;
  height: 40px;
  bottom: 20%;
  left: 70%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
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
  backdrop-filter: blur(5px);
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
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  border-radius: 50%;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
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
  font-weight: 600;
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
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #495057;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid #dee2e6;
}

.tech-tag.large {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.tech-more {
  color: #667eea;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
}

/* Design Grid Styles */
.design-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.design-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

.design-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.design-visual {
  height: 150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.design-1 .design-visual {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
}

.design-2 .design-visual {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.design-3 .design-visual {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.design-icon {
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  z-index: 2;
}

.design-pattern {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.design-content {
  padding: 1.5rem;
}

.design-title {
  font-size: 1.2rem;
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
  border-radius: 20px;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: modalSlideIn 0.4s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
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
  padding: 2rem;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.modal-project-visual {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.modal-project-icon {
  font-size: 2rem;
  color: white;
}

.modal-header-content {
  flex: 1;
}

.modal-header h2 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.modal-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.modal-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.modal-btn {
  background: #f8f9fa;
  color: #495057;
  border: 1px solid #dee2e6;
}

.modal-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.modal-btn:hover {
  transform: translateY(-2px);
}

.modal-body {
  padding: 2rem;
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

  .modal-header {
    padding: 1.5rem;
    flex-direction: column;
    text-align: center;
  }

  .modal-body {
    padding: 1.5rem;
  }

  .modal-links {
    justify-content: center;
  }
}
</style>