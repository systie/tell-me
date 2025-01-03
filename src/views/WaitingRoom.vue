<template>
  <div class="container-center">
    <div class="area neumorphic">
      <h2 class="text-h5">
        Please stand by <span class="dots"><span>.</span><span>.</span><span>.</span></span>
      </h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.text-h5 {
  color: #4A4A4A;
  font-weight: 500;
}

.dots {
  display: inline-block;
  font-size: 2.5rem;
  span {
    animation: dots 3.5s infinite;
    opacity: 0;
    
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.5s; }
    &:nth-child(3) { animation-delay: 1s; }
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

@keyframes dots {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
</style>