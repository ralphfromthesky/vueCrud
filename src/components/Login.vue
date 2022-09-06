<template>
<div class="div1">
  <form @submit.prevent="Login">
    <div class="subs1">
      <div class="subs">
        <label class="form-label mt-4"><h1>LOGIN</h1></label>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="email"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
      <p>
        Need an account? <router-link to="/register">Register Here</router-link>
      </p>
      <button class="btn btn-primary" value="Login">SUBMIT</button>
    </div>
    
  </form>
  </div>
</template>

<script>
import { ref } from "vue";
import firebase from "firebase/compat/app";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => alert(err.message));
    };
    return {
      Login,
      email,
      password,
    };
  },
};
</script>

<style scoped>
.div1 {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  height: 70vh;
  width: 40vw;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  max-width: 60%;
}


</style>
