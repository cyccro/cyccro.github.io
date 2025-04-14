<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
<template>
  <div class="nav">
    <a href="https://github.com/cyccro/">
      <FontAwesomeIcon :icon="['fab', 'github']" size="xl" />
    </a>
    <a href="https://">
      <FontAwesomeIcon :icon="['fab', 'linkedin']" size="xl" />
    </a>
    <a href="https://discord.gg/A8DhffpgS4">
      <FontAwesomeIcon :icon="['fab', 'discord']" size="xl" />
    </a>
  </div>
</template>
<style>
.nav {
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-color: white;
  border-radius: 8px;
  border-width: 1.5px;
  border-style: solid;
  position: absolute;
  top: 50%;
  backdrop-filter: blur(6px);
  height: 40%;
  transform: translateY(-50%);
  width: 32px;
}

.nav a {
  transition-duration: 300ms;
}

.nav a:hover {
  scale: 0.9
}
</style>
