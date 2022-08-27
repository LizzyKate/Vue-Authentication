<template lang="">
  <ul>
    <template v-if="authenticated">
      <li>{{user.email}}</li>
      <li>
        <router-link :to="{ name: 'DashBoard' }"> Dashboard </router-link>
      </li>
      <li>
        <a href="#">Sign Out</a>
      </li>
    </template>
    <template v-else>
      <li>
        <router-link :to="{ name: 'AuthHome' }"> Home </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'SignIn' }"> Sign In </router-link>
      </li>
    </template>
  </ul>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      items: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Sign In",
          path: "/signin",
        },
        {
          name: "Dashboard",
          path: "/dashboard",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["authenticated", "user"]),
  },
  methods: {
    auth() {
      console.log(this.authenticated);
    },
  },
};
</script>
<style lang=""></style>
