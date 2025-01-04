<template>
  <div class="word-cloud-page">
    <h1 class="title">ワードクラウド</h1>
    <div class="word-cloud-container">
      <WordCloud :cloudData="cloudData" :padding="10" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import WordCloud from '../components/WordCloud.vue';

export default defineComponent({
  name: 'WordCloudPage',
  components: {
    WordCloud
  },
  data() {
    return {
      cloudData: [
        { text: 'Vue.js', weight: 12 },
        { text: 'JavaScript', weight: 22 },
        { text: 'Web Development', weight: 32 },
        { text: 'Frontend', weight: 42 },
        { text: 'Programming', weight: 52 },
        { text: 'TypeScript', weight: 62 },
        { text: 'HTML', weight: 72 },
        { text: 'CSS', weight: 82 },
        { text: 'Vite', weight: 92 },
        { text: 'Components', weight: 30 }
      ]
    };
  }
});
</script>

<style scoped>
.word-cloud-page {
  width: 100%;
  min-height: 100vh;
}

.title {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.word-cloud-container {
  width: 100%;
  height: 80vh;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}
</style>
