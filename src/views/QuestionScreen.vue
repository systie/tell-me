<template>
    <v-container class="fill-height">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <div class="question-container">
            <!-- Multiple Choice Question -->
            <v-card class="neumorphic pa-6 mb-6">
              <h2 class="text-h5 mb-6">好きなプログラミング言語は？</h2>
              <v-row>
                <v-col cols="12" v-for="option in multipleChoiceOptions" :key="option.id">
                  <v-btn
                    block
                    class="neumorphic-button text-left px-4 py-6"
                    @click="selectOption(option.id)"
                    variant="flat"
                  >
                    {{ option.text }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
  
            <!-- Text Area Question -->
            <v-card class="neumorphic pa-6 mb-6">
              <h2 class="text-h5 mb-6">プログラミングを始めたきっかけを教えてください</h2>
              <v-textarea
                v-model="textAnswer"
                class="neumorphic-inset"
                variant="outlined"
                rows="4"
                hide-details
              ></v-textarea>
            </v-card>
  
            <!-- Checkbox Question -->
            <v-card class="neumorphic pa-6">
              <h2 class="text-h5 mb-6">興味のある技術分野を選択してください（複数選択可）</h2>
              <v-row>
                <v-col cols="12" v-for="option in checkboxOptions" :key="option.id">
                  <v-checkbox
                    v-model="selectedTechnologies"
                    :label="option.text"
                    :value="option.id"
                    class="neumorphic-checkbox"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const multipleChoiceOptions = ref([
    { id: 1, text: 'JavaScript' },
    { id: 2, text: 'Python' },
    { id: 3, text: 'Java' },
    { id: 4, text: 'C++' }
  ])
  
  const textAnswer = ref('')
  
  const checkboxOptions = ref([
    { id: 'web', text: 'Web開発' },
    { id: 'mobile', text: 'モバイルアプリ開発' },
    { id: 'ai', text: 'AI/機械学習' },
    { id: 'cloud', text: 'クラウドコンピューティング' }
  ])
  
  const selectedTechnologies = ref([])
  
  const selectOption = (id) => {
    console.log('Selected option:', id)
  }
  </script>
  
  <style lang="scss" scoped>
  
  .neumorphic-inset {
    background: #F0F0F0 !important;
    border-radius: 15px !important;
    box-shadow: 
      inset 4px 4px 8px rgba(0, 0, 0, 0.1),
      inset -4px -4px 8px rgba(255, 255, 255, 0.7) !important;
  }
  
  .neumorphic-button {
    background: #F0F0F0 !important;
    border-radius: 15px !important;
    box-shadow: 
      8px 8px 16px rgba(0, 0, 0, 0.1),
      -8px -8px 16px rgba(255, 255, 255, 0.7) !important;
    height: auto !important;
    transition: all 0.3s ease;
    text-transform: none !important;
    letter-spacing: normal !important;
  
    &:active {
      box-shadow: 
        inset 4px 4px 8px rgba(0, 0, 0, 0.1),
        inset -4px -4px 8px rgba(255, 255, 255, 0.7) !important;
    }
  }
  
  .neumorphic-checkbox {
    :deep(.v-selection-control) {
      min-height: 48px;
      padding: 12px;
      border-radius: 15px;
      background: #F0F0F0;
      box-shadow: 
        8px 8px 16px rgba(0, 0, 0, 0.1),
        -8px -8px 16px rgba(255, 255, 255, 0.7);
    }
  }
  </style>