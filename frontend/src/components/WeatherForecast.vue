<template>
  <div class="hello">
    <h3>Weather forecast for city</h3>

    <!-- TODO -->
    <div class="container">
      <div class="alert alert-danger" role="alert" v-if="errorMsg.error">
        {{ errorMsg.errorI18NMessage || 'Unknown error occured' }}
      </div>
      <div v-else >
        <template v-for="data, index in weatherReport.current_weather" :key="index">
          <div class="row result-row">
            <div class="col-md-3"></div>
            <div class="col-md-3 result-col">
              <span class="pull-left">{{ dataLabels[index].label }}: </span>
            </div>
            <div class="col-md-3 result-col">
              <span class="pull-right">{{ data }} {{ dataLabels[index].unit }}</span>
            </div>
            <div class="col-md-3"></div>
          </div>
        </template>
      </div>

      <!-- not moving to component due to time issue -->
      <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>

<style>

</style>
