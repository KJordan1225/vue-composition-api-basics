<template>
  <!-- <head>
    <meta http-equiv="refresh" content="5;url=http://www.google.com/" />
  </head> -->
  <div>
    <h1>About</h1>
  </div>
    
  <div class="about">

    <div>
      <!-- <button  @click=decreaseCounter class="btn">-</button>
      <span class="counter">{{ counter }}</span>
      <button  @click=increaseCounter class="btn">+</button> -->
      <div>
        Temporary Page 2
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

const increaseCounter = () => {
  counter.value++
}

const decreaseCounter = () => {
  counter.value--
}
</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
</style>