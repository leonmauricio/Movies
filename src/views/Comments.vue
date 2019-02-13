<template>
  <div>
    <form class="comment-form" @submit.prevent="postComment">
      <label class="form-label" for="name-form">What is your name?</label>
      <input id="name-form" spellcheck="false" type="text" name="name" v-model="name" required>
      <label class="form-label" for="email-form">What is your name?</label>
      <input id="email-form" spellcheck="false" type="email" name="mail" v-model="mail" required>
      <label class="form-label" for="comment-form">What is your name?</label>
      <textarea id="comment-form" spellcheck="false" name="comment" v-model="comment" required></textarea>
      <button type="submit">Enviar</button>
    </form>

    <ul class="comment-list">
      <li v-for="item in items">
        <p>
          {{ item.name }}
        </p>
        <p>
          {{ item.comment }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: [],
      name: '',
      mail: '',
      comment: '',
    };
  },
  methods: {
    postComment() {
      const params = {
        name: this.name,
        comment: this.comment,
      };
      this.items.push(params);
    },
  },
  mounted() {
    $('input').focus(function(){
      $(this).parents('.form-group').addClass('focused');
    });

    $('input').blur(function(){
      var inputValue = $(this).val();
      if ( inputValue == "" ) {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');  
      } else {
        $(this).addClass('filled');
      }
    }); 
  },
};
</script>
