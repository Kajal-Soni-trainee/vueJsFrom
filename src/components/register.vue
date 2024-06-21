<template>
  <div class="outer_div">
    <H1>Registration Form</H1>
    <form>
      <div class="main_div">
        <div class="inner_div">
          <div class="comp">
            <div>
              <div class="label"><label for="fname">First Name</label></div>
              <input
                class="input"
                id="fname"
                type="text"
                v-model.trim="fname"
              />
            </div>
            <p class="err"></p>
          </div>
          <div class="comp">
            <div>
              <div class="label"><label for="lname">Last Name</label></div>

              <input
                class="input"
                id="lname"
                type="text"
                v-model.trim="lname"
              />
            </div>
            <p class="err"></p>
          </div>
        </div>
        <div class="inner_div">
          <div class="comp">
            <div>
              <div class="label">
                <label for="email">Email</label>
              </div>

              <input
                class="input"
                id="email"
                type="text"
                v-model.trim="email"
              />
            </div>
            <p class="err"></p>
          </div>
          <div class="comp">
            <div>
              <div class="label"><label for="phone">Phone</label></div>

              <input
                class="input"
                id="phone"
                type="text"
                v-model.trim="phone"
              />
            </div>
            <p class="err"></p>
          </div>
        </div>
        <div class="inner_div">
          <div class="comp">
            <div>
              <div class="label">
                <label class="label" for="state">State</label>
              </div>
              <select id="state" v-model="state" name="state">
                <option id="state0" value="state0">Gujarat</option>
                <option id="state1" value="state1">Uttar Pradesh</option>
                <option id="state2" value="state2">Maharashtra</option>
              </select>
            </div>
            <p class="err"></p>
          </div>
          <div class="comp">
            <div>
              <div class="label"><label for="city">City</label></div>
              <select
                ref="refCity"
                id="city"
                name="city"
                v-model="city"
              ></select>
            </div>
            <p class="err"></p>
          </div>
        </div>
        <div class="inner_div">
          <div class="comp">
            <div>
              <div class="label"><label>Gender</label></div>
              <input
                type="radio"
                v-model="gender"
                value="male"
                id="male"
                name="gender"
              /><label for="male">Male</label>
              <input
                type="radio"
                v-model="gender"
                value="female"
                id="female"
                name="gender"
              /><label for="female">Female</label>
              <input
                type="radio"
                v-model="gender"
                value="others"
                id="others"
                name="gender"
              /><label for="others">Others</label>
            </div>
            <p class="err"></p>
          </div>
          <div class="comp">
            <div>
              <div class="label"><label>Marital Status</label></div>

              <select
                id="marital_status"
                name="marital_status"
                v-model="marital_status"
              >
                <option selected id="married" value="married">Married</option>
                <option id="unmarried" value="unmarried">Un Married</option>
              </select>
            </div>
            <p class="err"></p>
          </div>
        </div>
        <div class="inner_div">
          <div class="comp">
            <div>
              <div class="label"><label>Hobbies</label></div>
              <input
                type="checkbox"
                v-model="hobbies"
                value="dancing"
                id="dancing"
                name="hobbies"
              /><label for="dancing">Dancing</label>
              <input
                type="checkbox"
                v-model="hobbies"
                value="singing"
                id="singing"
                name="hobbies"
              /><label for="singing">Singing</label>
              <input
                type="checkbox"
                v-model="hobbies"
                value="reading"
                id="reading"
                name="hobbies"
              /><label for="reading">Reading</label>
              <input
                type="checkbox"
                v-model="hobbies"
                value="swimming"
                id="swimming"
                name="hobbies"
              /><label for="swimming">Swimming</label>
            </div>
            <p class="err"></p>
          </div>
          <div class="comp">
            <div>
              <div class="label"><label>Skills</label></div>
              <input
                type="checkbox"
                v-model="skills"
                name="skill"
                value="php"
                id="php"
              /><label for="php">PHP</label>
              <input
                type="checkbox"
                v-model="skills"
                name="skill"
                value="java"
                id="java"
              /><label for="java">JAVA</label>
              <input
                type="checkbox"
                v-model="skills"
                name="skill"
                value="oops"
                id="oops"
              /><label for="oops">OOPs</label>
              <input
                type="checkbox"
                v-model="skills"
                name="skill"
                value="node"
                id="node"
              /><label for="node">NODE</label>
            </div>
            <p class="err"></p>
          </div>
        </div>
        <div class="btn_div">
          <p class="btn" @click="submit()">Submit</p>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Register",
};
</script>
<script setup>
import { ref, shallowReactive, watchPostEffect } from "vue";
import {useRouter} from 'vue-router';
const fname = ref("");
const lname = ref("");
const state = ref("state0");
const citys = shallowReactive({
  state0: ["Ahmedabad", "Vapi", "Valasd", "Rajkot", "Surat"],
  state1: ["Gorakhpur", "Lakhnow", "Jaipur", "Varanasi", "Kanpur"],
  state2: ["Borivali", "Mumbai", "Boisar", "Malhad", "Thane"],
});
const gender = ref("");
const phone = ref("");
const email = ref("");
const marital_status = ref("married");
const hobbies = ref([]);
const skills = ref([]);
const city = ref("");
let refCity = ref(null);
const router = useRouter();
watchPostEffect(() => {
  console.log("state value " + state.value);
  let cities = [];
  for (let [key] of Object.entries(citys)) {
    console.log(key);
    if (key == state.value) {
      cities = citys[key];
      console.log(citys[key]);
    }
  }
  console.log(cities);
  let txt = "";
  for (let item in cities) {
    txt += `<option id="${cities[item]}" value="${cities[item]}">${cities[item]}</option>`;
  }

  console.log(txt);
  city.value = cities[0];
  refCity.value.innerHTML = txt;
});

function validate() {
  let Fname = document.getElementById("fname");
  let Lname = document.getElementById("lname");
  let Email = document.getElementById("email");
  let Phone = document.getElementById("phone");
  let State = document.getElementById("state");
  let Marital_status = document.getElementById("marital_status");
  let Skill = document.getElementsByName("skill")[0];
  let Hobbies = document.getElementsByName("hobbies")[0];
  let Gender = document.getElementsByName("gender")[0];
  let isError = 0;
  if (fname.value == "") {
    console.log("fname :" + fname.value);
    let div = Fname.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "please enter your first name";
    isError++;
  }

  if (fname.value.length > 20) {
    let div = Fname.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "your first name should contain less than 20 charaters";
    isError++;
  }

  if (!/^[a-zA-Z]+$/.test(fname.value) && fname.value != "") {
    let div = Fname.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "your first name should only contain characters digits or numbers are not allowed";
    isError++;
  }
  if (lname.value == "") {
    let div = Lname.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "please enter your last name";
    isError++;
  }
  if (lname.value.length > 20) {
    let div = Lname.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "your last name should contain less than 20 charaters";
    isError++;
  }
  if (!/^[a-zA-Z]+$/.test(lname.value) && lname.value != "") {
    let div = Lname.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "your last name should only contain characters digits or numbers are not allowed";
    isError++;
  }
  if (email.value == "") {
    let div = Email.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML = "please enter your email";
    isError++;
  }
  if (
    !/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value) &&
    email.value != ""
  ) {
    let div = Email.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "please enter corrent email";
    isError++;
  }

  if (phone.value == "") {
    let div = Phone.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "please enter your phone number";
    isError++;
  }
  if (!/^[0-9]{10}$/.test(phone.value)) {
    let div = Phone.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "phone number should be of 10 digits";
    isError++;
  }

  if (state.value == "") {
    let div = State.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "please select your state";
    isError++;
  }

  if (hobbies.value.length == 0) {
    let div = Hobbies.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "please select your hobbies";
    isError++;
  }
  if (skills.value.length == 0) {
    let div = Skill.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "please select your skill";
    isError++;
  }
  if (marital_status.value == "") {
    let div = Marital_status.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "please select your marital status";
    isError++;
  }
  if (gender.value == "") {
    let div = Gender.parentElement;
    let innerDiv = div.parentElement;
    innerDiv.getElementsByTagName("p")[0].innerHTML =
      "please select your gender";
    isError++;
  }

  if (isError == 0) {
    return true;
  } else {
    return false;
  }
}
function submit() {
  if (validate()) {
    fname.value = "";
    lname.value = "";
    gender.value = "";
    phone.value = "";
    email.value = "";
    skills.value = [];
    hobbies.value = [];
    marital_status.value = "";
    alert("data submitted successfully");
    router.push({name:'login'});
  }
}
</script>
<style scoped>
.outer_div {
  width: 1120px;
  height: 700px;
  border: 2px solid black;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
}
.main_div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.inner_div {
  display: flex;
  flex-direction: row;
}

.comp {
  width: 450px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  padding-left: 50px;
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
.btn_div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
