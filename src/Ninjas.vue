<template>
    <ul>
        <li v-for="item in ninjas">
            {{ item }}
        </li>
    </ul>
  </template>
  
  <script>
  export default {
    data () {
      return {
        ninjas: ['Adi','Somu', 'Laddu', 'Kumar']
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  