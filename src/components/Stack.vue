<script setup lang="ts">
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps(['stackname']);
const is_rust = ref(true);
const is_vue = ref(true);
const is_blurred = ref(false);
setInterval(() => {
  is_rust.value = !is_rust.value;
  is_vue.value = !is_vue.value;
}, 2000);
setInterval(() => {
  is_blurred.value = !is_blurred.value;
}, 1000);
</script>
<template>
  <div class="icons">
    <div class="stack">
      <FontAwesomeIcon :icon="['fab', is_rust ? 'rust' : 'node-js']" size="3x"
        :class="{ 'blur-effect': is_blurred, 'rust': is_rust, 'node': !is_rust }" class="icon" />
    </div>
    <div class="stack">
      <FontAwesomeIcon :icon="['fab', is_vue ? 'vuejs' : 'react']" size="3x"
        :class="{ 'blur-effect': is_blurred, vue: is_vue, react: !is_vue }" class="icon" />

    </div>
  </div>
</template>

<style lang="css" scoped>
.icons {
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  justify-content: center;
}

.rust {
  color: #e0793b;
}

.node {
  color: #14b50f;
}

.vue {
  color: #01c080;
}

.react {
  color: #01d9ff;
}

.icon {
  transition: 0.5s ease-in-out;
}


.stack {
  display: flex;
  align-items: center;
  justify-content: center;
}

.blur-effect {
  filter: blur(12px);
  opacity: 0;
}
</style>
