<template>
  <table>
    <tr>
      <td colspan="5" style="text-align: center; font-weight: bold;">Valuta il corso</td>
    </tr>
    <tr>
      <!-- Sostituisci il metodo setRating con un bottone che faccia la stessa cosa -->
      <td v-for="n in 5" v-bind:key="n">
        <button @click="ratings[courseId] = n" :style="{ 'border': n <= ratings[courseId] ? '5px solid #ffc107' : '5px solid #ddd' }">
          {{ n }}
        </button>
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
  