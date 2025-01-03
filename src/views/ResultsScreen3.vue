<template>
    <v-container class="fill-height">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8">
          <v-card class="neumorphic pa-6">
            <h2 class="text-h4 mb-6">Results</h2>
            <v-card class="neumorphic-inset pa-4" height="400">
              <Pie :data="data" :options="options" />
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)
const data = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}


  </script>
  
  <style lang="scss" scoped>
  .neumorphic {
    background: #F0F0F0 !important;
    border-radius: 15px !important;
    box-shadow: 
      8px 8px 16px rgba(0, 0, 0, 0.1),
      -8px -8px 16px rgba(255, 255, 255, 0.7) !important;
  }
  
  .neumorphic-inset {
    background: #F0F0F0 !important;
    border-radius: 15px !important;
    box-shadow: 
      inset 4px 4px 8px rgba(0, 0, 0, 0.1),
      inset -4px -4px 8px rgba(255, 255, 255, 0.7) !important;
  }
  </style>