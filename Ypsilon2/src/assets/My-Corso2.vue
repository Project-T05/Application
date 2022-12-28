<template>
    
    <table class="gray-table" style="border-radius: 10px; width: 1000px; height: 100px;">
      <tr>
        <td style="border-radius: 10px; text-align: center;">{{` ${item.utente_id["nome"]}  ${item.utente_id["cognome"]} `}}</td>
        <td style="border-radius: 10px; display: flex; align-items: center; justify-content: center;">
          <button style="width: 40px; height: 40px; border-radius: 60px; display: flex; align-items: center; justify-content: center;">    
            <img src="../assets/like.png" style="width: 36px; height:36px; border-radius: 60px; ">
          </button>
        </td>
      </tr>
      <tr>
        
        <td style="border-radius: 10px; text-align: center;">
            <router-link to="/corso">
            NOME CORSO
            </router-link>
        </td>
         
        <td style="font-size: large; border-radius: 10px; text-align: center;">val</td>
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

  export default {
    props: {
      item: {
        type: object,
        required: true
      }
    }
  }
  </script>
  