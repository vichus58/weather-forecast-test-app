<template>
  <div class="hello">
    <h3>Weather forecast for city</h3>

    <!-- TODO -->
    <div v-if="errorMsg.error">
      {{ errorMsg }}
    </div>
    <div v-else >
      <template v-for="data, index in weatherReport.current_weather" :key="index">
        <div class="row">
          <div class="col-md-2">{{ index }}: </div>
          <div class="col-md-2">{{ data }}</div>
        </div>
      </template>
    </div>
    
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>

</style>
