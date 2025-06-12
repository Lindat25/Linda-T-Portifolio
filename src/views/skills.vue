<template>
  <div class="skills">
    <div class="page-header">
      <h1>Technical Skills</h1>
      <p>Comprehensive overview of my technical expertise and capabilities</p>
    </div>

    <div class="skills-container">
      <!-- Programming Languages -->
      <div class="skill-section">
        <div class="section-header">
          <div class="icon-wrapper">
            <i class="code-icon">{ }</i>
          </div>
          <h2>Programming Languages</h2>
        </div>
        <div class="skills-grid">
          <div class="skill-card" v-for="skill in programmingLanguages" :key="skill.name">
            <div class="skill-header">
              <h3>{{ skill.name }}</h3>
              <div class="proficiency-level" :class="skill.level">{{ skill.level }}</div>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: skill.percentage + '%' }"></div>
            </div>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <!-- Web Development -->
      <div class="skill-section">
        <div class="section-header">
          <div class="icon-wrapper">
            <i class="web-icon">🌐</i>
          </div>
          <h2>Web Development</h2>
        </div>
        <div class="skills-grid">
          <div class="skill-card" v-for="skill in webDevelopment" :key="skill.name">
            <div class="skill-header">
              <h3>{{ skill.name }}</h3>
              <div class="proficiency-level" :class="skill.level">{{ skill.level }}</div>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: skill.percentage + '%' }"></div>
            </div>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <!-- Data Analytics -->
      <div class="skill-section">
        <div class="section-header">
          <div class="icon-wrapper">
            <i class="data-icon">📊</i>
          </div>
          <h2>Data Analytics & Machine Learning</h2>
        </div>
        <div class="skills-grid">
          <div class="skill-card" v-for="skill in dataAnalytics" :key="skill.name">
            <div class="skill-header">
              <h3>{{ skill.name }}</h3>
              <div class="proficiency-level" :class="skill.level">{{ skill.level }}</div>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: skill.percentage + '%' }"></div>
            </div>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <!-- Design & Tools -->
      <div class="skill-section">
        <div class="section-header">
          <div class="icon-wrapper">
            <i class="design-icon">🎨</i>
          </div>
          <h2>Design & Development Tools</h2>
        </div>
        <div class="skills-grid">
          <div class="skill-card" v-for="skill in designTools" :key="skill.name">
            <div class="skill-header">
              <h3>{{ skill.name }}</h3>
              <div class="proficiency-level" :class="skill.level">{{ skill.level }}</div>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: skill.percentage + '%' }"></div>
            </div>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <!-- Soft Skills -->
      <div class="skill-section">
        <div class="section-header">
          <div class="icon-wrapper">
            <i class="soft-icon">🤝</i>
          </div>
          <h2>Professional & Soft Skills</h2>
        </div>
        <div class="soft-skills-grid">
          <div class="soft-skill-card" v-for="skill in softSkills" :key="skill.name">
            <div class="soft-skill-icon">{{ skill.icon }}</div>
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>

      <!-- Current Learning -->
      <div class="learning-section">
        <h2>Currently Learning</h2>
        <div class="learning-grid">
          <div class="learning-card" v-for="course in currentLearning" :key="course.name">
            <div class="learning-header">
              <h3>{{ course.name }}</h3>
              <span class="completion-date">{{ course.completion }}</span>
            </div>
            <div class="learning-progress">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: course.progress + '%' }"></div>
              </div>
              <span class="progress-text">{{ course.progress }}% Complete</span>
            </div>
            <p>{{ course.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      programmingLanguages: [
        {
          name: 'PHP',
          level: 'advanced',
          percentage: 90,
          description: 'Extensive experience in server-side development with Laravel framework and custom PHP applications.'
        },
        {
          name: 'JavaScript',
          level: 'advanced',
          percentage: 85,
          description: 'Proficient in modern JavaScript, ES6+, and front-end frameworks like Vue.js.'
        },
        {
          name: 'Python',
          level: 'intermediate',
          percentage: 70,
          description: 'Growing expertise in data analysis, machine learning, and automation scripting.'
        }
      ],
      webDevelopment: [
        {
          name: 'Laravel',
          level: 'advanced',
          percentage: 90,
          description: 'Expert in building robust web applications with Laravel framework and MVC architecture.'
        },
        {
          name: 'Vue.js',
          level: 'advanced',
          percentage: 85,
          description: 'Skilled in creating responsive, interactive user interfaces and single-page applications.'
        },
        {
          name: 'WordPress',
          level: 'advanced',
          percentage: 95,
          description: 'Extensive experience in custom theme development, plugin creation, and WooCommerce integration.'
        },
        {
          name: 'HTML/CSS',
          level: 'expert',
          percentage: 95,
          description: 'Expert in semantic HTML5, CSS3, responsive design, and modern layout techniques.'
        },
        {
          name: 'Flutter',
          level: 'intermediate',
          percentage: 65,
          description: 'Developing mobile applications with Flutter framework for cross-platform development.'
        }
      ],
      dataAnalytics: [
        {
          name: 'Python Data Analysis',
          level: 'intermediate',
          percentage: 75,
          description: 'Proficient with Pandas, NumPy for data manipulation and statistical analysis.'
        },
        {
          name: 'Machine Learning',
          level: 'intermediate',
          percentage: 70,
          description: 'Experience with Scikit-learn for predictive modeling and classification algorithms.'
        },
        {
          name: 'Data Visualization',
          level: 'intermediate',
          percentage: 75,
          description: 'Creating insightful visualizations and performing exploratory data analysis.'
        },
        {
          name: 'MySQL',
          level: 'advanced',
          percentage: 85,
          description: 'Strong database design, optimization, and complex query development skills.'
        }
      ],
      designTools: [
        {
          name: 'Adobe Illustrator',
          level: 'intermediate',
          percentage: 70,
          description: 'Creating vector graphics, logos, and illustrations for web and print projects.'
        },
        {
          name: 'Photoshop',
          level: 'intermediate',
          percentage: 75,
          description: 'Image editing, photo manipulation, and web graphics creation.'
        },
        {
          name: 'Canva',
          level: 'advanced',
          percentage: 90,
          description: 'Rapid prototyping and marketing material creation for digital campaigns.'
        },
        {
          name: 'GitHub',
          level: 'advanced',
          percentage: 85,
          description: 'Version control, collaboration, and project management using Git workflows.'
        }
      ],
      softSkills: [
        {
          name: 'Technical Writing',
          icon: '📝',
          description: 'Creating comprehensive documentation and user guides that reduced support inquiries by 30%.'
        },
        {
          name: 'Project Management',
          icon: '📋',
          description: 'Successfully led development projects that increased user engagement by 40%.'
        },
        {
          name: 'Problem Solving',
          icon: '🧩',
          description: 'Analytical approach to debugging and implementing efficient solutions.'
        },
        {
          name: 'Communication',
          icon: '💬',
          description: 'Clear and effective communication with clients, team members, and stakeholders.'
        },
        {
          name: 'Adaptability',
          icon: '🔄',
          description: 'Quick to learn new technologies and adapt to changing project requirements.'
        },
        {
          name: 'Team Collaboration',
          icon: '👥',
          description: 'Strong teamwork skills with experience in remote and on-site development teams.'
        }
      ],
      currentLearning: [
        {
          name: 'Data Analytics Course',
          completion: 'June 2025',
          progress: 75,
          description: 'Advanced SQL, Statistical Analysis, Data Visualization, and Business Intelligence.'
        },
        {
          name: 'Cybersecurity Certification',
          completion: 'Ongoing',
          progress: 45,
          description: 'Network security, threat detection, and security protocols with Makatob.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.skills {
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

.skills-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.skill-section {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.skill-section:hover {
  transform: translateY(-5px);
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
}

.code-icon, .web-icon, .data-icon, .design-icon, .soft-icon {
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
}

.section-header h2 {
  font-size: 2.2rem;
  color: #333;
  margin: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: #f8f9ff;
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid #e0e6ff;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
}

.skill-header {
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 1rem;
}

.skill-header h3 {
  font-size: 1.3rem;
  color: #333;
  margin: 0;
  flex-grow: 1;
}

.proficiency-level {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
}

.proficiency-level.expert {
  background: #4ade80;
  color: white;
}

.proficiency-level.advanced {
  background: #3b82f6;
  color: white;
}

.proficiency-level.intermediate {
  background: #f59e0b;
  color: white;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  margin-bottom: 1rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 0.8s ease;
}

.skill-card p {
  color: #666;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

.soft-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.soft-skill-card {
  background: #f8f9ff;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid #e0e6ff;
  transition: all 0.3s ease;
}

.soft-skill-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
}

.soft-skill-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.soft-skill-card h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.soft-skill-card p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.learning-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 2.5rem;
  color: white;
}

.learning-section h2 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.learning-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.learning-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.learning-header h3 {
  font-size: 1.3rem;
  margin: 0;
}

.completion-date {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.learning-progress {
  margin-bottom: 1rem;
}

.learning-progress .progress-bar {
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 0.5rem;
}

.learning-progress .progress-fill {
  background: white;
}

.progress-text {
  font-size: 0.9rem;
  font-weight: bold;
}

.learning-card p {
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .skills {
    padding: 1rem;
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .soft-skills-grid {
    grid-template-columns: 1fr;
  }

  .learning-grid {
    grid-template-columns: 1fr;
  }

  .skill-section {
    padding: 1.5rem;
  }

  .section-header {
    flex-direction: column;
    text-align: center;
  }

  .icon-wrapper {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>