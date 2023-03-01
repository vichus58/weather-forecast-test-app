<template>
  <div class="hello">
    <h3>Weather forecast for city</h3>

    <!-- TODO -->
    <div v-if="errorMsg.error">
      {{ errorMsg }}
    </div>
    <div v-else >
      {{ weatherReport }}
    </div>
    
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>

</style>
