<template>
  <div class="div2">
    <div class="home">
      <h1>welcome to homepage {{ name }} <i class="bx bxs-cat"></i></h1>
      <router-link to="/contact"
        >Create Edit and Delete Data here!
      </router-link>
      <br />
      <button class="logout btn btn-primary mt-3" @click="Logout">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase/compat/app";

export default {
  setup() {
    const name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("signed out"))
        .catch((err) => alert(err.message));
    };

    return {
      name,
      Logout,
    };
  },
};
</script>

<style>
.home {
  height: 40%;
  width: 60%;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}
.div2 {
  
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
