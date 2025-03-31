<script setup>
import Nav from "./components/Nav.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { UseDraggable } from "@vueuse/components";
import Stack from "./components/Stack.vue";
import Projects from "./components/Projects.vue";
import GithubProject from "./components/GithubProject.vue";
import { ref, onMounted } from "vue";
const mounted = ref(false);
onMounted(() => {
  setTimeout(() => {
    mounted.value = true;
  }, 500);
});
</script>

<template>
  <Nav />
  <div class="container">
    <div class="title">
      <Transition appear>
        <h1>Cainã Melo</h1>
      </Transition>
      <Transition appear name="desc">
        <h5>Actually cursing computer science and focusing on the learning of scalable
          backend
          applications and low
          level
        </h5>
      </Transition>
    </div>
    <Stack />
    <Projects />
  </div>
</template>

<style scoped>
.desc-enter-active {
  animation-delay: 1s;
  animation: slide-in 1.5s ease-out;
}

.v-enter-active {
  animation: slide-in 1.5s ease-out;
}

@keyframes slide-in {
  0% {
    filter: blur(4px);
    mask-image: linear-gradient(to left, transparent 0%, black 100%);
    -webkit-mask-image: linear-gradient(to left, transparent 0%, black 100%);
    clip-path: inset(0 100% 0 0);
  }

  100% {
    opacity: 1;
    mask-image: linear-gradient(to left, black 100%, black 100%);
    -webkit-mask-image: linear-gradient(to left black 100%, black 100%);
    clip-path: inset(0 0 0 0);
    filter: blur(0px);
  }
}

h1,
h2,
h3,
h4 {
  margin: 0;
}

h5 {
  margin-top: 12px;
  margin-bottom: 0px;
}

h2 {
  font-size: 32px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 48px;
}

.title {
  max-width: 480px;
}
</style>
