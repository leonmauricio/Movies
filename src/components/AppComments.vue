<template>
  <div>
    <form class="general-form" @submit.prevent="postComment">
      <label class="form-label" for="name-form">Name</label>
      <input id="name-form" spellcheck="false" type="text" name="name" v-model="name" required>
      <label class="form-label" for="email-form">Email</label>
      <input id="email-form" spellcheck="false" type="email" name="mail" v-model="mail" required>
      <label class="form-label" for="comment-form">Comment</label>
      <textarea id="comment-form" spellcheck="false" name="comment" v-model="comment" required></textarea>
      <button type="submit" class="action-button">Enviar</button>
    </form>

    <ul class="comment-list">
      <li v-for="(item,index) in comments" :key="index">
        <p>
          <strong>
            {{ item.name }} dijo:
          </strong>
        </p>
        <p>
          {{ item.comment }}
        </p>
        <hr>
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
  computed: {
    comments() {
      return [...this.items].reverse();
    },
  },
  methods: {
    postComment() {
      const params = {
        name: this.name,
        mail: this.mail,
        comment: this.comment,
      };
      this.items.push(params);

      this.name = '';
      this.mail = '';
      this.comment = '';
    },
  },
  mounted() {

  },
};
</script>
