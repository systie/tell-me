<template>
  <div class="word-cloud" ref="wordCloudArea">
    <div v-for="(item, index) in cloudData" :key="index" class="word-cloud-item" :style="getStyle(item, { minX: 100, maxX: 200, minY: 50, maxY: 300 })">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordCloud',
  props: {
    cloudData: {
      type: Array,
      required: true,
      default: () => [],
    },
    areaWidth: {
      type: [Number, String]
    },
    areaHeight: {
      type: [Number, String]
    },
    padding: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.$nextTick(() => {
      this.handleResize();
    });
  },
  beforeUnmount() { // beforeDestroyをbeforeUnmountに変更
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      const element = this.$refs.wordCloudArea;
      this.$emit('update:areaWidth', element.offsetWidth);
      this.$emit('update:areaHeight', element.offsetHeight); 
    },
    getStyle(item, options = {}) {
      const { minX = 0, maxX = this.areaWidth, minY = 0, maxY = this.areaHeight } = options;
      const x = Math.random() * (maxX - minX) + minX;
      const y = Math.random() * (maxY - minY) + minY;

      return {
        fontSize: item.weight + 'px',
        position: 'absolute',
        left: x + 'px', 
        top: y + 'px',
        color: '#555',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, font-size 0.3s ease',
      };
    },
  },
};
</script>

<style scoped>
.word-cloud {
  position: relative;
}
.word-cloud-item:hover {
  transform: scale(1.2);
}
</style>