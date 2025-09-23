<template>
  <div id="app">
    <Sidebar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default { name: 'App', components: { Sidebar } }
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

html, body, #app { height: 100%; }

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
}

:root {
  /* keep in sync with .sidebar width in Sidebar.vue */
  --sidebar-width: 300px;
}

#app {
  display: flex;
  min-height: 100vh;
}

/* Use the variable so it always matches the sidebar width */
.main-content {
  flex: 1;
  margin-left: var(--sidebar-width);
  padding: 2rem;
  transition: margin-left 0.3s ease;
}

/* Mobile: sidebar becomes a bottom bar → no left margin */
@media (max-width: 768px) {
  :root { --sidebar-width: 0px; }
  .main-content {
    margin-left: var(--sidebar-width);
    padding: 1rem;
  }
}
</style>
