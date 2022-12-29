<template>
    
    <table class="gray-table" style="border-radius: 10px; width: 1000px; height: 100px;">
      <tr>
        <td style="border-radius: 10px; text-align: center;">{{` ${item.utente_id["nome"]}  ${item.utente_id["cognome"]} `}}</td>
        <td style="border-radius: 10px; display: flex; align-items: center; justify-content: center;">
          <button style="width: 40px; height: 40px; border-radius: 60px; display: flex; align-items: center; justify-content: center;" @click="handleClick">    
            <img v-if="item.is_favourite" src="../assets/like.png" style="width: 36px; height:36px; border-radius: 60px; ">
            <img v-else src="../assets/likeoff.png" style="width: 36px; height:36px; border-radius: 60px; ">
          </button>
        </td>
      </tr>
      <tr>
        
        <td style="border-radius: 10px; text-align: center;">
          <router-link :to="{ path: '/corso/' + item.id }">
            {{ item.nome }}
          </router-link>
        </td>
         
        <td style="font-size: large; border-radius: 10px; text-align: center; ">{{ item.valutazione_corso }}</td>
      </tr>
    </table>

  </template>
  
  <style>
  .gray-table {
    background-color: #D9D9D9;
    border: 2px solid gray;
  }
  
  .gray-table td {
    border: 2px solid white;
  }
  </style>
  
  <script>
import { object } from 'webidl-conversions';
import axios from 'axios'

  export default {
    props: {
      item: {
        type: object,
        required: true
      }
    },
    methods:{
      handleClick() {
    
    let base_api = 'http://localhost:8080/api/';

    const data={
      corso_id: this.item.id,
      utente_id:'63a5c5989075ad6f17d16b99'
    }
      
  if (!this.item.is_favourite) {
    axios.post(base_api+'favourite_courses/', data);//lista users
  } else {
    axios.delete(base_api+'favourite_courses/63a5c5989075ad6f17d16b99/'+this.item.id);//lista corsi
  }
  location.reload();
}
    }
  }
  </script>
  