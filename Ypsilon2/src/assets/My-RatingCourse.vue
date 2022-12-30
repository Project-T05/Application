<template>
  <table>
    <tr >
      <td colspan="5" style="text-align: center; font-weight: bold;">Valuta il corso</td>
    </tr>
    <tr>
      <td v-for="n in 5" v-bind:key="n">
        <label @click="ratings = n" :style=" { 'border': n <= ratings ? '5px solid #ffc107' : '5px solid #ddd' }" >
          {{ n }}
        </label>
      </td>
    </tr>
    
    <tr>
      <!-- Aggiungi il bottone di conferma del voto -->
      <td colspan="5">
        <button @click="confirmRating(ratings)">Conferma voto</button>
      </td>
    </tr>
  </table>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      ratings: {}
    }
  },
  methods: {
  confirmRating(value) {

      let base_api = 'http://localhost:8080/api/';

      const data={
        valutazione: value
      }
        if (value !=null)
        {
          axios.post(base_api+'rating_courses/63a5c5989075ad6f17d16b99/'+this.$route.params.id, data);//lista users
          location.reload();
        }
        else
          alert()
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
