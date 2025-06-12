<template>
  <div class="experience">
    <div class="page-header">
      <h1>Professional Experience</h1>
      <p>My journey through various roles in web development and technology</p>
    </div>

    <div class="experience-container">
      <!-- Experience Timeline -->
      <div class="timeline">
        <div class="timeline-item" v-for="(job, index) in experiences" :key="index" :class="{ 'timeline-item-left': index % 2 === 0, 'timeline-item-right': index % 2 === 1 }">
          <div class="timeline-content">
            <div class="job-header">
              <div class="company-logo">
                <span class="company-initial">{{ job.company.charAt(0) }}</span>
              </div>
              <div class="job-info">
                <h3 class="job-title">{{ job.title }}</h3>
                <h4 class="company-name">{{ job.company }}</h4>
                <div class="job-meta">
                  <span class="location">{{ job.location }}</span>
                  <span class="duration">{{ job.duration }}</span>
                  <span class="employment-type" :class="job.type">{{ job.type }}</span>
                </div>
              </div>
            </div>

            <div class="job-description">
              <p class="job-summary">{{ job.summary }}</p>

              <div class="achievements">
                <h5>Key Achievements:</h5>
                <ul>
                  <li v-for="achievement in job.achievements" :key="achievement" class="achievement-item">
                    {{ achievement }}
                  </li>
                </ul>
              </div>

              <div class="technologies">
                <h5>Technologies Used:</h5>
                <div class="tech-tags">
                  <span v-for="tech in job.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline-marker">
            <div class="timeline-date">{{ job.year }}</div>
          </div>
        </div>
      </div>

      <!-- Skills Gained Section -->
      <div class="skills-gained">
        <h2>Skills & Expertise Developed</h2>
        <div class="skills-overview">
          <div class="skill-category" v-for="category in skillsGained" :key="category.name">
            <div class="skill-icon">{{ category.icon }}</div>
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
            <div class="skill-metrics">
              <div class="metric" v-for="metric in category.metrics" :key="metric.label">
                <span class="metric-value">{{ metric.value }}</span>
                <span class="metric-label">{{ metric.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Education Section -->
      <div class="education-section">
        <h2>Educational Background</h2>
        <div class="education-grid">
          <div class="education-card" v-for="edu in education" :key="edu.institution">
            <div class="education-header">
              <div class="education-icon">🎓</div>
              <div class="education-info">
                <h3>{{ edu.degree }}</h3>
                <h4>{{ edu.institution }}</h4>
                <div class="education-meta">
                  <span class="education-duration">{{ edu.duration }}</span>
                  <span class="education-grade" v-if="edu.grade">{{ edu.grade }}</span>
                </div>
              </div>
            </div>
            <p class="education-description">{{ edu.description }}</p>
            <div class="education-subjects" v-if="edu.subjects">
              <h5>Key Subjects:</h5>
              <div class="subject-tags">
                <span v-for="subject in edu.subjects" :key="subject" class="subject-tag">{{ subject }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Professional Development -->
      <div class="professional-development">
        <h2>Continuous Learning & Development</h2>
        <div class="development-cards">
          <div class="development-card" v-for="course in professionalDevelopment" :key="course.name">
            <div class="development-status" :class="course.status">{{ course.status }}</div>
            <h3>{{ course.name }}</h3>
            <p>{{ course.description }}</p>
            <div class="development-progress" v-if="course.progress">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: course.progress + '%' }"></div>
              </div>
              <span class="progress-text">{{ course.progress }}% Complete</span>
            </div>
            <div class="development-completion" v-if="course.completion">
              <span class="completion-date">Expected: {{ course.completion }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experiences: [
        {
          title: 'Web Developer',
          company: 'OD International',
          location: 'Umhlanga, Durban',
          duration: 'September 2024 – December 2024',
          year: '2024',
          type: 'Full-time',
          summary: 'Led development of custom client websites and pioneered mobile application development while implementing innovative solutions for market intelligence.',
          achievements: [
            'Increased user engagement by 40% through custom WordPress and Framer development',
            'Implemented web scraping solutions for market intelligence and competitor data analysis',
            'Successfully developed and submitted mobile application prototypes to Google Play Store',
            'Enhanced brand visibility by 45% across digital platforms through strategic marketing materials'
          ],
          technologies: ['WordPress', 'Framer', 'Flutter', 'Web Scraping', 'Mobile Development', 'Digital Marketing']
        },
        {
          title: 'WordPress Developer & Virtual Administrative Assistant',
          company: 'Great Systems',
          location: 'Harare, Zimbabwe (Remote)',
          duration: 'November 2023 – August 2024',
          year: '2023-2024',
          type: 'Remote',
          summary: 'Specialized in e-commerce development and digital marketing while providing comprehensive administrative support and technical documentation.',
          achievements: [
            'Developed 5 comprehensive websites including advanced e-commerce platforms',
            'Achieved 20% traffic increase through strategic SEO optimization techniques',
            'Generated 35% growth in qualified leads through multi-platform digital marketing campaigns',
            'Reduced support inquiries by 30% through comprehensive technical documentation'
          ],
          technologies: ['WordPress', 'WooCommerce', 'SEO', 'Digital Marketing', 'E-commerce', 'Technical Writing']
        },
        {
          title: 'Front-end Developer & Programming Tutor',
          company: 'Omni-Learning',
          location: 'Harare, Zimbabwe',
          duration: 'January 2021 – July 2024',
          year: '2021-2024',
          type: 'Part-time',
          summary: 'Engineered responsive e-learning interfaces while developing comprehensive coding curriculum for students at various skill levels.',
          achievements: [
            'Improved student engagement rates by 40% through responsive interface design',
            'Developed comprehensive HTML and Scratch programming curriculum',
            'Created cross-platform educational resources for diverse learning styles',
            'Measurably improved student comprehension and technical proficiency'
          ],
          technologies: ['Vue.js', 'PHP', 'HTML', 'CSS', 'Scratch Programming', 'Educational Technology']
        }
      ],
      skillsGained: [
        {
          name: 'Web Development Excellence',
          icon: '🌐',
          description: 'Mastered full-stack development with focus on user experience and performance optimization.',
          metrics: [
            { value: '40%', label: 'User Engagement Increase' },
            { value: '20%', label: 'Traffic Growth' },
            { value: '10+', label: 'Websites Developed' }
          ]
        },
        {
          name: 'Digital Marketing & SEO',
          icon: '📈',
          description: 'Developed expertise in digital marketing strategies and search engine optimization.',
          metrics: [
            { value: '35%', label: 'Lead Generation Growth' },
            { value: '45%', label: 'Brand Visibility Increase' },
            { value: '30%', label: 'Support Reduction' }
          ]
        },
        {
          name: 'Technical Leadership',
          icon: '👨‍💻',
          description: 'Led development projects and mentored students in programming fundamentals.',
          metrics: [
            { value: '4', label: 'Years Teaching Experience' },
            { value: '100+', label: 'Students Mentored' },
            { value: '5', label: 'Major Projects Led' }
          ]
        }
      ],
      education: [
        {
          degree: 'BSc (Hons) in Computer Science',
          institution: 'University of Zimbabwe',
          duration: 'August 2019 – July 2023',
          grade: 'Upper Second Class (2.1)',
          description: 'Comprehensive computer science education covering software development, algorithms, data structures, and system design.',
          subjects: ['Software Engineering', 'Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'Computer Networks']
        },
        {
          degree: 'Advanced Level',
          institution: 'Mufakose High School',
          duration: 'January 2017 – December 2018',
          grade: '3 A-level passes',
          description: 'Excelled in Mathematics, Accounting, and Business Studies, building strong analytical and business foundation.',
          subjects: ['Mathematics', 'Accounting', 'Business Studies']
        }
      ],
      professionalDevelopment: [
        {
          name: 'Comprehensive Data Analytics Course',
          description: 'Advanced course covering SQL, Statistical Analysis, Data Visualization, and Business Intelligence tools and techniques.',
          status: 'In Progress',
          progress: 75,
          completion: 'June 2025'
        },
        {
          name: 'Cybersecurity Certification with Makatob',
          description: 'Developing expertise in network security, threat detection, and security protocols for modern applications.',
          status: 'In Progress',
          progress: 45,
          completion: 'Ongoing'
        }
      ]
    }
  }
}
</script>

<style scoped>
.experience {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-header h1 {
  font-size: 3.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.3rem;
  color: #666;
}

.experience-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* Timeline Styles */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  width: 50%;
  margin-bottom: 3rem;
}

.timeline-item-left {
  left: 0;
  padding-right: 3rem;
}

.timeline-item-right {
  left: 50%;
  padding-left: 3rem;
}

.timeline-content {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
}

.timeline-item-left .timeline-content::after {
  content: '';
  position: absolute;
  right: -15px;
  top: 30px;
  border: 15px solid transparent;
  border-left-color: white;
}

.timeline-item-right .timeline-content::after {
  content: '';
  position: absolute;
  left: -15px;
  top: 30px;
  border: 15px solid transparent;
  border-right-color: white;
}

.timeline-marker {
  position: absolute;
  top: 20px;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 8px white, 0 0 0 12px #667eea;
}

.timeline-item-left .timeline-marker {
  right: -40px;
}

.timeline-item-right .timeline-marker {
  left: -40px;
}

.timeline-date {
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
}

.job-header {
  display: flex;
  margin-bottom: 1.5rem;
}

.company-logo {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
}

.company-initial {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.job-info {
  flex: 1;
}

.job-title {
  font-size: 1.4rem;
  color: #333;
  margin: 0 0 0.5rem 0;
}

.company-name {
  font-size: 1.1rem;
  color: #667eea;
  margin: 0 0 0.5rem 0;
}

.job-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.location, .duration {
  color: #666;
  font-size: 0.9rem;
}

.employment-type {
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
}

.employment-type.Full-time {
  background: #10b981;
  color: white;
}

.employment-type.Remote {
  background: #3b82f6;
  color: white;
}

.employment-type.Part-time {
  background: #f59e0b;
  color: white;
}

.job-summary {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.achievements h5, .technologies h5 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.achievement-item {
  color: #666;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.achievement-item::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tech-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Skills Gained Section */
.skills-gained {
  background: #f8f9ff;
  border-radius: 20px;
  padding: 3rem;
}

.skills-gained h2 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2.2rem;
}

.skills-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.skill-category h3 {
  color: #333;
  margin-bottom: 1rem;
}

.skill-category p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.skill-metrics {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
}

.metric {
  text-align: center;
}

.metric-value {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
}

.metric-label {
  font-size: 0.8rem;
  color: #666;
}

/* Education Section */
.education-section {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.education-section h2 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2.2rem;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.education-card {
  background: #f8f9ff;
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid #e0e6ff;
}

.education-header {
  display: flex;
  margin-bottom: 1.5rem;
}

.education-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.education-info h3 {
  color: #333;
  margin: 0 0 0.5rem 0;
}

.education-info h4 {
  color: #667eea;
  margin: 0 0 0.5rem 0;
}

.education-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.education-grade {
  background: #10b981;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
  font-weight: bold;
}

.subject-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.subject-tag {
  background: #667eea;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
}

/* Professional Development */
.professional-development {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 3rem;
  color: white;
}

.professional-development h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
}

.development-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.development-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.development-status {
  display: inline-block;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.development-status.In.Progress {
  background: #f59e0b;
  color: white;
}

.development-card h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.development-card p {
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.development-progress {
  margin-bottom: 1rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: white;
  border-radius: 4px;
  transition: width 0.8s ease;
}

.progress-text, .completion-date {
  font-size: 0.9rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .experience {
    padding: 1rem;
  }

  .timeline::before {
    left: 30px;
  }

  .timeline-item {
    width: 100%;
    left: 0 !important;
    padding-left: 4rem !important;
    padding-right: 0 !important;
  }

  .timeline-marker {
    left: 0 !important;
    right: auto !important;
  }

  .timeline-content::after {
    left: -15px !important;
    right: auto !important;
    border-right-color: white !important;
    border-left-color: transparent !important;
  }

  .skills-overview {
    grid-template-columns: 1fr;
  }

  .education-grid {
    grid-template-columns: 1fr;
  }

  .development-cards {
    grid-template-columns: 1fr;
  }

  .job-header {
    flex-direction: column;
  }

  .company-logo {
    margin-bottom: 1rem;
    margin-right: 0;
    align-self: flex-start;
  }
}
</style>