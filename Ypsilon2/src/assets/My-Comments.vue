<template>
  <table class="conteiner" style="position: absolute; left:500px; top:80px; border: 2px solid gray; border-radius: 20px; background-color: lightgray;">
    <table class="comments">
      <div style="overflow-y: scroll; height: 400px; position: relative; left: 50px; ">
      <tr v-for="comment in sortedComments" :key="comment.id">
        <td class="comment-author">{{ comment.user }}:</td>
        <td class="comment-text" >{{ comment.text }}</td>
        <td class="comment-likes-dislikes">
        
          <img src="./LikeButton.png" style="width: 20px; height: 20px; " @click="likeComment(comment)" /> {{ comment.likes }}
          <img src="./DislikeButton.png" style="width: 15px; height: 15px;" @click="dislikeComment(comment)" /> {{ comment.dislikes }}
        </td>
        <td class="comment-actions">
          <button v-if="comment.user === currentUser" @click="deleteComment(comment)">Elimina</button>
        </td>
      </tr>
    </div>
    </table>
    
    <div>
  <input v-model="newCommentText" placeholder="Scrivi il tuo commento" style="width: 400px; height: 100px; border-radius: 20px;" />
  <button @click="addComment">Invia</button>
</div>

    <div class="sort-menu">
      <button
        v-bind:class="{ active: sortBy === 'chronological' }"
        @click="sortBy = 'chronological'"
      >
        Cronologico
      </button>
      <button
        v-bind:class="{ active: sortBy === 'likes' }"
        @click="sortBy = 'likes'"
      >
        Mi piace
      </button>
    </div>
  </table>
  </template>
  <script>
  export default {
    data() {
      return {
        comments: [],
        currentUser: '',
        newCommentText: '',
        sortBy: 'Cronologico',
        sortMenuOpen: false,
      };
    },
    computed: {
    sortedComments() {
      const comments = this.comments.slice(); // Crea una copia dell'array dei commenti
      if (this.sortBy === 'chronological') {
        return comments.sort((a, b) => b.timestamp - a.timestamp); // Restituisci i commenti ordinati in base alla data di pubblicazione
      } else if (this.sortBy === 'likes') {
        return comments.sort((a, b) => b.likes - a.likes); // Restituisci i commenti ordinati in base al numero di mi piace
  } else {
  return comments; // Restituisci i commenti senza ordinarli
  }
  }
  },
    
    methods: {
      addComment() {
  if (this.newCommentText.trim() !== '') {
    this.comments.push({
      id: Date.now(),
      text: this.newCommentText,
      user: 'Leonardo_Bridi', // sostituire con il nome dell'utente corrente
      likes: 0,
      dislikes: 0,
      voted: null
    })
    this.newCommentText = ''
  }
},

      deleteComment(comment) {
        const index = this.comments.indexOf(comment)
        this.comments.splice(index, 1)
      },
      likeComment(comment) {
        if (comment.voted === 'like') {
          // L'utente sta cambiando il proprio voto da "mi piace" a "non votato"
          comment.likes--
          comment.voted = null
        } else if (comment.voted === 'dislike') {
          // L'utente sta cambiando il proprio voto da "non mi piace" a "mi piace"
          comment.dislikes--
          comment.likes++
          comment.voted = 'like'
        } else {
          // L'utente sta votando per la prima volta il commento con "mi piace"
          comment.likes++
          comment.voted = 'like'
        }
      },
      dislikeComment(comment) {
        if (comment.voted === 'dislike') {
          // L'utente sta cambiando il proprio voto da "non mi piace" a "non votato"
          comment.dislikes--
          comment.voted = null
         } else if (comment.voted === 'like') {
  // L'utente sta cambiando il proprio voto da "mi piace" a "non mi piace"
  comment.likes--
  comment.dislikes++
  comment.voted = 'dislike'
  } else {
  // L'utente sta votando per la prima volta il commento con "non mi piace"
  comment.dislikes++
  comment.voted = 'dislike'
  }
  }
  }
  }
  
  </script>
  
  <style>
  .comments {
    width: 400px;
    height: 300px;
    overflow: auto; /* permette di visualizzare solo il contenuto della tabella e di scorrere il resto */
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .comment {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  
  .comment-author {
    font-weight: bold;
    margin-right: 10px;
  }
  
  .comment-text {
    flex: 1;
  }
  
  .comment-likes-dislikes {
    margin-left: 10px;
  }
  
  .comment-actions {
    margin-left: 10px;
  }
  </style>
  
  
  