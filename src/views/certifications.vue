<!-- src/components/Certifications.vue -->
<template>
  <section class="certifications">
    <h1 class="title">📜 My Certifications</h1>

    <div class="cert-list">
      <article
        class="cert-card"
        v-for="cert in resolvedCertificates"
        :key="cert.id"
      >
        <h2 class="cert-title">{{ cert.title }}</h2>
        <p class="cert-issuer">Issued by {{ cert.issuer }}</p>

        <div class="actions">
          <button class="view-btn" @click="open(cert)" :aria-label="`View ${cert.title}`">
            👁️ View Certificate
          </button>
          <a class="download-btn" :href="cert.url" download :aria-label="`Download ${cert.title}`">
            ⬇ Download
          </a>
        </div>
      </article>
    </div>

    <!-- Modal -->
    <div
      v-if="showModal"
      class="modal-overlay"
      @click.self="close"
      role="dialog"
      aria-modal="true"
      :aria-label="current?.title || 'Certificate viewer'"
    >
      <div class="modal-content">
        <button class="close-btn" @click="close" aria-label="Close">✖</button>

        <template v-if="current">
          <!-- PDF viewer -->
          <iframe
            v-if="current.kind === 'pdf'"
            :src="current.url"
            frameborder="0"
            title="PDF viewer"
          ></iframe>

          <!-- Image viewer -->
          <img
            v-else-if="current.kind === 'image'"
            :src="current.url"
            :alt="current.title"
            class="preview-image"
          />

          <!-- Fallback -->
          <div v-else class="unsupported">
            <p>Preview not available for this file type.</p>
            <a :href="current.url" download>Download instead</a>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';

/**
 * 1) Place files in: src/assets/certificates/
 * 2) The glob below returns fully-qualified, base-aware URLs at build.
 */
const fileMap = import.meta.glob('@/assets/certificates/*.{pdf,jpg,jpeg,png,webp,gif,svg}', {
  eager: true,
  as: 'url',
});

// Your list — only filenames are needed; they’ll be resolved to URLs.
const certificates = ref([
  {
    id: 1,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    file: 'intro-to-cybersecurity.pdf',
  },
  {
    id: 2,
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    file: 'cybersecurity-essentials.jpg',
  },
  // Add more…
]);

// Resolve filenames to emitted URLs & detect type
const resolvedCertificates = computed(() =>
  certificates.value.map((c) => {
    const entry = Object.entries(fileMap).find(([path]) =>
      path.endsWith(`/certificates/${c.file}`)
    );
    const url = entry ? entry[1] : c.file; // fallback if external URL
    const ext = (c.file.split('.').pop() || '').toLowerCase();
    const kind =
      ext === 'pdf'
        ? 'pdf'
        : ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg'].includes(ext)
        ? 'image'
        : 'other';
    return { ...c, url, kind };
  })
);

const showModal = ref(false);
const current = ref(null);

const open = (cert) => {
  current.value = cert;
  showModal.value = true;
  document.body.style.overflow = 'hidden';
};

const close = () => {
  showModal.value = false;
  current.value = null;
  document.body.style.overflow = '';
};

const handleEsc = (e) => {
  if (e.key === 'Escape') close();
};

onMounted(() => window.addEventListener('keydown', handleEsc));
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEsc);
  document.body.style.overflow = '';
});
</script>

<style scoped>
/* Layout */
.certifications { padding: 2rem; }
.title { margin-bottom: 1.25rem; }

.cert-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.cert-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 6px 14px rgba(0,0,0,.08);
}

.cert-title { font-size: 1.125rem; margin: 0 0 .25rem; }
.cert-issuer { color: #5b6470; margin: 0 0 .75rem; }

/* Buttons */
.actions { display: flex; gap: .5rem; flex-wrap: wrap; }
.view-btn, .download-btn {
  appearance: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  padding: .6rem .9rem;
  border-radius: 8px;
  font-weight: 600;
  display: inline-flex; align-items: center; justify-content: center;
}
.view-btn { background: #4cafef; color: #fff; }
.view-btn:hover { filter: brightness(0.95); }
.download-btn { background: #0f766e; color: #fff; }
.download-btn:hover { filter: brightness(0.95); }

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  display: grid;
  place-items: center;
  z-index: 1000;
}

.modal-content {
  width: min(1000px, 92vw);
  height: min(85vh, 900px);
  background: #fff;
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.close-btn {
  position: absolute;
  top: .5rem; right: .5rem;
  background: transparent; border: none;
  font-size: 1.5rem; cursor: pointer; z-index: 2;
}

/* Viewers */
iframe { width: 100%; height: 100%; flex: 1 1 auto; }
.preview-image {
  width: 100%; height: 100%;
  object-fit: contain;
  background: #fafafa;
  flex: 1 1 auto;
}

.unsupported { margin: auto; text-align: center; padding: 1rem; }
</style>
