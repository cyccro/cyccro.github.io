import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import GithubProject from "./components/GithubProject.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDiscord, faGithub, faLinkedin, faRust, faReact, faNodeJs, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faLinkedin, faDiscord, faRust, faReact, faNodeJs, faVuejs, faArrowRight);

const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.component("GithubProject", GithubProject);
app.mount('#app')
