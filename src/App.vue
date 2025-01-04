<template>
  <!-- <v-btn-toggle v-model="isDarkTheme">
    <v-btn :value="false">
      <v-icon start>mdi-white-balance-sunny</v-icon>
      <span class="hidden-sm-and-down">ライトモード</span>
    </v-btn>
    <v-btn :value="true">
      <v-icon start>mdi-brightness-3</v-icon>
      <span class="hidden-sm-and-down">ダークモード</span>
    </v-btn>
  </v-btn-toggle> -->
  <div id="theme-area">
    <v-icon start :class="`light-${isDarkTheme}`">mdi-white-balance-sunny</v-icon>
    <v-icon start :class="`dark-${isDarkTheme}`">mdi-brightness-3</v-icon>
    <v-switch class="theme-switch" v-model="isDarkTheme" inset color="orange"></v-switch>
  </div>
  <v-app>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-app>
</template>

<script>
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'


export default {
  setup() {
    const theme = useTheme()
    const isDarkTheme = ref(theme.global.name.value === 'dark')

    watch(isDarkTheme, (newValue) => {
      theme.global.name.value = newValue ? 'dark' : 'light'
    })
    return { isDarkTheme }
  },
}
</script>

<style lang="scss" scoped>
#theme-area {
  position: fixed;
  width: 55px;
  right: 5px;
  top: 5px;
  z-index: 10000;
  
  .light-true {
    position: absolute;
    left: 5px;
    top: 15px;
    color: #fff;
  }
  .dark-false {
    position: absolute;
    left: 25px;
    top: 15px;
  }
  .light-false, .dark-true {
    display: none;
  }
  .theme-switch {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>