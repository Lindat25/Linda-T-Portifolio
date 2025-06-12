<template>
  <div class="contact">
    <div class="page-header">
      <h1>Get In Touch</h1>
      <p>Let's connect and discuss opportunities in web development and data analytics</p>
    </div>

    <div class="contact-content">
      <!-- Contact Information -->
      <div class="contact-info">
        <h2>Contact Information</h2>
        <div class="contact-methods">
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
              <h3>Email</h3>
              <p>lindatakuva250301@gmail.com</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
              <h3>Phone</h3>
              <p>+263 78 296 9940</p>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
              <h3>Location</h3>
              <p>568 Campbell Road, Borrowdale<br>Harare, Zimbabwe</p>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="social-links">
          <h3>Connect With Me</h3>
          <div class="social-buttons">
            <a href="https://github.com/Lindat25" target="_blank" class="social-btn github">
              <i class="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/linda-takuva-87b6442a9" target="_blank" class="social-btn linkedin">
              <i class="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <!-- Availability Status -->
        <div class="availability">
          <div class="status-indicator">
            <div class="status-dot available"></div>
            <span>Available for new opportunities</span>
          </div>
          <p>Currently open to freelance projects and full-time positions in web development and data analytics.</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form-container">
        <h2>Send Me a Message</h2>
        <form @submit.prevent="sendMessage" class="contact-form">
          <div class="form-group">
            <label for="name">Full Name *</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              required
              :class="{ 'error': errors.name }"
            >
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>

          <div class="form-group">
            <label for="email">Email Address *</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              required
              :class="{ 'error': errors.email }"
            >
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              v-model="form.phone"
            >
          </div>

          <div class="form-group">
            <label for="subject">Subject *</label>
            <select
              id="subject"
              v-model="form.subject"
              required
              :class="{ 'error': errors.subject }"
            >
              <option value="">Select a subject</option>
              <option value="web-development">Web Development Project</option>
              <option value="data-analytics">Data Analytics Consultation</option>
              <option value="freelance">Freelance Opportunity</option>
              <option value="full-time">Full-time Position</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Other</option>
            </select>
            <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
          </div>

          <div class="form-group">
            <label for="message">Message *</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              required
              :class="{ 'error': errors.message }"
              placeholder="Tell me about your project or opportunity..."
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>

          <div class="form-group">
            <label class="checkbox-label">
              <input
                type="checkbox"
                v-model="form.newsletter"
              >
              <span class="checkmark"></span>
              Subscribe to my newsletter for updates on projects and insights
            </label>
          </div>

          <button
            type="submit"
            class="submit-btn"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">
              <i class="fas fa-paper-plane"></i>
              Send Message
            </span>
            <span v-else>
              <i class="fas fa-spinner fa-spin"></i>
              Sending...
            </span>
          </button>
        </form>

        <!-- Success/Error Messages -->
        <div v-if="submitMessage" :class="['submit-message', submitStatus]">
          <i :class="submitStatus === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
          {{ submitMessage }}
        </div>
      </div>
    </div>

    <!-- Services Overview -->
    <div class="services-overview">
      <h2>How I Can Help You</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-code"></i>
          </div>
          <h3>Web Development</h3>
          <p>Custom websites using PHP, Laravel, Vue.js, and WordPress. Responsive design with SEO optimization.</p>
          <ul>
            <li>E-commerce platforms</li>
            <li>Corporate websites</li>
            <li>Web applications</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3>Data Analytics</h3>
          <p>Data-driven insights using Python, machine learning, and statistical analysis to drive business decisions.</p>
          <ul>
            <li>Data visualization</li>
            <li>Predictive modeling</li>
            <li>Business intelligence</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <h3>Mobile Development</h3>
          <p>Cross-platform mobile applications using Flutter framework for iOS and Android platforms.</p>
          <ul>
            <li>Native performance</li>
            <li>Custom UI/UX</li>
            <li>App store deployment</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-icon">
            <i class="fas fa-tasks"></i>
          </div>
          <h3>Project Management</h3>
          <p>Complete project lifecycle management with technical documentation and client communication.</p>
          <ul>
            <li>Technical documentation</li>
            <li>Digital marketing</li>
            <li>Client consultation</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        newsletter: false
      },
      errors: {},
      isSubmitting: false,
      submitMessage: '',
      submitStatus: ''
    }
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required';
      }

      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
        this.errors.email = 'Please enter a valid email address';
      }

      if (!this.form.subject) {
        this.errors.subject = 'Please select a subject';
      }

      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required';
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = 'Message must be at least 10 characters long';
      }

      return Object.keys(this.errors).length === 0;
    },

    async sendMessage() {
      if (!this.validateForm()) {
        return;
      }

      this.isSubmitting = true;
      this.submitMessage = '';

      try {
        // Simulate API call - replace with actual implementation
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Here you would typically send the form data to your backend
        console.log('Form submitted:', this.form);

        this.submitMessage = 'Thank you for your message! I\'ll get back to you within 24 hours.';
        this.submitStatus = 'success';

        // Reset form
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          newsletter: false
        };

      } catch (error) {
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly.';
        this.submitStatus = 'error';
      } finally {
        this.isSubmitting = false;

        // Clear message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }
    }
  }
}
</script>

<style scoped>
.contact {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-header p {
  font-size: 1.2rem;
  color: #666;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.contact-info h2,
.contact-form-container h2 {
  color: #333;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.contact-methods {
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.2s ease;
}

.contact-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.contact-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  color: white;
  font-size: 1.2rem;
}

.contact-details h3 {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.contact-details p {
  color: #666;
  line-height: 1.5;
}

.social-links {
  margin-bottom: 3rem;
}

.social-links h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.social-buttons {
  display: flex;
  gap: 1rem;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: transform 0.2s ease;
}

.social-btn:hover {
  transform: translateY(-2px);
}

.social-btn.github {
  background: #333;
}

.social-btn.linkedin {
  background: #0077b5;
}

.availability {
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 12px;
  border-left: 4px solid #667eea;
}

.status-indicator {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #333;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.8rem;
}

.status-dot.available {
  background: #10b981;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.availability p {
  color: #666;
  margin: 0;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #e53e3e;
}

.error-message {
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

.checkbox-label {
  display: flex !important;
  align-items: flex-start;
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1.4;
}

.checkbox-label input[type="checkbox"] {
  width: auto !important;
  margin-right: 0.5rem;
  margin-top: 0.1rem;
}

.submit-btn {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.submit-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.submit-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.services-overview {
  padding-top: 3rem;
  border-top: 1px solid #eee;
}

.services-overview h2 {
  color: #333;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  text-align: center;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
}

.service-card h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.service-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-card ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

.service-card li {
  color: #666;
  padding: 0.3rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.service-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 1rem;
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .social-buttons {
    flex-direction: column;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>