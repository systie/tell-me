<template>
    <v-container class="fill-height">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="8">
          <v-card class="neumorphic pa-6">
            <h2 class="text-h4 mb-6">Results</h2>
            <v-card class="neumorphic-inset pa-4" height="400">
              <Bar
                :data="chartData"
                :options="chartOptions"
              />
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Bar } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )
  
  const chartData = ref({
    labels: ['JavaScript', 'Python', 'Java', 'C++'],
    datasets: [{
      label: 'Votes',
      data: [12, 19, 8, 5],
      backgroundColor: '#0984E3'
    }]
  })
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
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