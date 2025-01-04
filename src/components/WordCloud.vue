<template>
  <div class="word-cloud" ref="wordCloudArea">
    <div 
      v-for="(item, index) in processedData" 
      :key="index" 
      class="word-cloud-item" 
      :style="item.style"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted, watch } from 'vue';
import { findValidPosition } from '../utils/wordCloudLayout.js';

export default defineComponent({
  name: 'WordCloud',
  props: {
    cloudData: {
      type: Array,
      required: true
    },
    padding: {
      type: Number,
      default: 5
    }
  },
  setup(props) {
    const wordCloudArea = ref(null);
    const processedData = ref([]);

    const layoutWords = () => {
      if (!wordCloudArea.value) return;

      const containerWidth = wordCloudArea.value.offsetWidth;
      const containerHeight = wordCloudArea.value.offsetHeight;
      const placedItems = [];

      const sortedData = [...props.cloudData].sort((a, b) => b.weight - a.weight);
      const processed = sortedData.map(item => {
        const result = findValidPosition(
          item.text, 
          item.weight, 
          containerWidth, 
          containerHeight, 
          placedItems,
          props.padding
        );

        if (result) {
          const { pos, rect } = result;
          placedItems.push({ text: item.text, rect });

          return {
            text: item.text,
            style: {
              fontSize: `${item.weight}px`,
              position: 'absolute',
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              transform: 'translate(-50%, -50%)',
              color: '#555',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, font-size 0.3s ease'
            }
          };
        }
        return null;
      }).filter(item => item !== null);

      processedData.value = processed;
    };

    const handleResize = () => {
      layoutWords();
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
      layoutWords();
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    watch(() => props.cloudData, () => {
      layoutWords();
    }, { deep: true });

    return {
      wordCloudArea,
      processedData
    };
  }
});
</script>

<style scoped>
.word-cloud {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;
  background-color: #ffffff;
}

.word-cloud-item {
  white-space: nowrap;
  user-select: none;
}

.word-cloud-item:hover {
  transform: translate(-50%, -50%) scale(1.2) !important;
  color:darkred;
}
</style>
