
<template>
    <table>
      <tr>
        <td colspan="5" style="text-align: center; font-weight: bold;">Valuta il corso</td>
      </tr>
      <tr>
        <!-- Passa l'ID del corso come argomento al metodo setRating -->
        <td v-for="n in 5" v-bind:key="n" @click="setRating(courseId, n)" :style="{ 'border': n <= ratings[courseId] ? '5px solid #ffc107' : '5px solid #ddd' }">
          {{ n }}
        </td>
      </tr>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      courseId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        ratings: {}
      }
    },
    methods: {
      setRating(courseId, newRating) {
        // Imposta la nuova valutazione del corso utilizzando l'ID del corso come chiave per l'oggetto di dati
        this.ratings[courseId] = newRating;
      }
    }
  }
  </script>
  
  <style>
  .rating {
    display: flex;
    flex-direction: row;
  }
  
  .rating button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.5em;
    color: #ddd;
  }
  
  .rating button.active {
    color: #ffc107;
  }
  </style>
  