<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
const props = defineProps(["name", "href", "description"]);
</script>

<template>
  <div class="project">
    <a class="project-title" :href="props.href">
      <p>{{ props.name }}</p>
      <FontAwesomeIcon :icon="['fas', 'arrow-right']" class="arrow" />
    </a>
    <p>{{ props.description }}</p>
  </div>
</template>

<style>
.project {
  backdrop-filter: blur(12px);
  background-color: transparent;
  border-width: 0px;
  border-style: solid;
  border-radius: 6px;
  width: fit-content;
  padding: 6px;
  transition-duration: 500ms;
  max-width: 192px;
}

.project:hover {
  scale: 0.975;
  box-shadow: 0px 7px 10px #646cff;
  color: #646cff;

  p,
  a {
    color: #646cff;
  }
}

.project-title {
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  cursor: pointer;
}

.project p {
  margin: 0;
}

.project a {
  cursor: pointer;
  color: white;
  transition-duration: 200ms;
  display: flex;
  align-items: center;
}

.project-title .arrow {
  transform: rotateZ(-45deg);
}

.project-title:hover {
  color: #535bf2;
}

.project>p {
  margin: 0;
}
</style>
