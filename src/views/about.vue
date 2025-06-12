<template>
  <div class="about">
    <div class="page-header">
      <h1>About Me</h1>
      <p>A glimpse into my values, skills, and personal journey in tech</p>
    </div>

    <div class="about-content">
      <div class="about-text">
        <h2>Who I Am</h2>
        <p>
          I’m Linda Takuva, a 24-year-old Computer Science graduate from the University of Zimbabwe, driven by a deep curiosity for technology and a strong desire to build meaningful digital experiences.
          With a passion for clean code, intuitive design, and data-driven solutions, I combine creativity with analytical thinking in everything I do.
        </p>
        <p>
          My strengths lie in full-stack web development using tools like Vue.js, WordPress, Laravel, and Flutter — supported by growing expertise in data analysis using Python (Pandas, NumPy, Scikit-learn).
          I’m constantly evolving as a developer and currently enhancing my knowledge in data analytics and cybersecurity through ongoing professional development.
        </p>
        <p>
          I value adaptability, clear communication, and collaborative problem-solving. Whether it’s building user-friendly applications or analyzing trends from data, I thrive on challenges that help me grow.
        </p>
      </div>

      <div class="timeline">
        <h2>Milestones That Shaped Me</h2>
        <div class="timeline-item" v-for="item in timeline" :key="item.year">
          <div class="timeline-date">{{ item.year }}</div>
          <div class="timeline-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      timeline: [
        {
          year: '2025',
          title: 'Ongoing Learning',
          description:
            'Currently completing a Data Analytics course and pursuing cybersecurity certification to deepen my technical expertise.'
        },
        {
          year: '2023',
          title: 'Graduated in Computer Science',
          description:
            'Completed my BSc (Hons) in Computer Science with Upper Second Class from the University of Zimbabwe.'
        },
        {
          year: '2020',
          title: 'Exploring Front-End Development',
          description:
            'Built my first projects in HTML and CSS and began developing full websites with Vue.js and WordPress.'
        },
        {
          year: '2017',
          title: 'Fell in Love with Programming',
          description:
            'Started learning programming in high school, beginning with Python and gradually expanding to full web stacks.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2d3748;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 3rem;
  color: #2c5282;
  margin-bottom: 0.5rem;
}

.page-header p {
  font-size: 1.1rem;
  color: #718096;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.about-text h2,
.timeline h2 {
  font-size: 2rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
  padding-left: 1rem;
}

.about-text p {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.timeline {
  background-color: #f7fafc;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2.5rem;
  border-left: 2px solid #667eea;
}

.timeline-date {
  position: absolute;
  left: -60px;
  top: 0;
  font-weight: bold;
  color: #667eea;
  font-size: 0.95rem;
}

.timeline-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.timeline-content p {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .timeline {
    padding: 1.5rem;
  }

  .timeline-date {
    left: -50px;
  }
}
</style>

