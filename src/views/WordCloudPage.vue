<template>
    <div>
        <WordCloud :cloudData="cloudData" areaWidth="100%" areaHeight="100%" />
    </div>
  </template>
  
  <script>
  import WordCloud from '@/components/WordCloud.vue';
  
  export default {
    components: {
      WordCloud
    },
    data() {
      return {
        cloudData: [
          { text: 'Vue.js', weight: 200 },
          { text: 'JavaScript', weight: 150 },
          { text: 'Web Development', weight: 100 },
          { text: 'Frontend', weight: 52 },
          { text: 'Programming', weight: 20 }
          // その他のデータ
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Customize your styling here */
  </style>
  