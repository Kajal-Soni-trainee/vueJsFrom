<template>
  <div class="div_main">
    <h2>Login</h2>
    <div class="main">
      <div class="comp">
        <div class="label"><label for="uname">User Name</label></div>
        <input
          class="input"
          type="text"
          id="uname"
          name="uname"
          v-model="uname"
        />
        <p class="err text-danger"></p>
      </div>
      <div class="comp">
        <div class="label"><label>Password</label></div>
        <input
          class="input"
          type="password"
          id="pass"
          name="pass"
          v-model="password"
        />
        <p class="err text-danger"></p>
      </div>
      <div><button @click="login()">Login</button></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
};
</script>
<script setup>
import { ref } from "vue";
const uname = ref("");
const password = ref("");
function login() {
  if (validateLogin()) {
    alert("user logged in successfully");
  }
}
function validateLogin() {
  let isError = 0;
  let u_name = document.getElementById("uname");
  let u_pass = document.getElementById("pass");
  if (uname.value == "") {
    isError++;
    let div = u_name.parentElement;
    console.log(div);
    console.log(div.getElementsByTagName("p"));
    div.getElementsByTagName("p")[0].innerHTML = "Please enter your User Name";
  }
  if (password.value == "") {
    isError++;
    let div = u_pass.parentElement;
    div.getElementsByTagName("p")[0].innerHTML = "Please enter your Password";
  }
}
</script>
<style scoped>
.div_main {
  height: 500px;
  width: 1100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  margin-top: 200px;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
}
.label {
  font-weight: bold;
  width: 150px;
}
.input {
  width: 200px;
  padding: 5px;
  border-radius: 5px;
  border: 2px solid black;
}
.btn {
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: rgb(17, 70, 131);
  color: white;
  font-weight: bold;
}

.err {
  color: red;
}
</style>
