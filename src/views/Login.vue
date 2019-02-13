<template>
  <div>
    <div class="logout-message" v-if="loggedIn">
      <p>
        Ya tas logeado loco
      </p>
      <button class="action-button" @click="logOut">
        Log Out
      </button>
    </div>
    <div v-else>
      <form class="general-form" @submit.prevent="registerUser">
        <label>Name</label>
        <input id="name-form" spellcheck="false" type="text" name="name" v-model="name" required>
        <label>Email</label>
        <input id="email-form" spellcheck="false" type="email" name="mail" v-model="mail" required>
        <label>Password</label>
        <input id="password-form" spellcheck="false" type="password" name="password" v-model="password" required>
        <button type="submit" class="action-button">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: null,
      name: '',
      mail: '',
      password: '',
    };
  },
  computed: {
    loggedIn(){
      let cookies = require('browser-cookies');
      if (!cookies.get('userName')) {
        return false;
      } else {
        return true;
      };
    },
  },
  methods: {
    registerUser() {
      let cookies = require('browser-cookies');
      cookies.set('userName', this.name);
      cookies.set('userMail', this.mail);
      cookies.set('userPassword', this.password);
      this.$router.push({name: 'fav'});

      console.log(cookies.all());
    },
    logOut(){
      let cookies = require('browser-cookies');
      cookies.erase('userName');
      cookies.erase('userMail');
      cookies.erase('userPassword');

      this.$router.go();

      console.log(cookies.all());
    }
  },
};
</script>
