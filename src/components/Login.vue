<template>
  <div>
    <vs-button @click="active = !active" v-if="!active4" id="loginButton" style="width: 113px">
      Logga in
    </vs-button>
    <vs-dialog v-model="active">
      <template #header>
        <h4>Logga in</h4>
      </template>
      <div>
        <vs-input class="email-input" block v-model="email" placeholder="Email">
        </vs-input>
        <vs-input class="password-input"
          block
          type="password"
          v-model="password"
          placeholder="Lösenord"
        >
        </vs-input>
        <!-- <div class="flex">
          <vs-checkbox v-model="remember">Kom ihåg mig</vs-checkbox>
          <a class="forgotpassword" href="#">Glömt lösenord?</a>
        </div> -->
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button @click="Login()" block> Logga in </vs-button>

          <div class="createaccount">
            Ny här?
            <a href="#" @click="ToggleRegister">Skapa ett konto</a>
          </div>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog v-model="active2">
        <template #header>
          <h4>
            Fyll i uppgifterna nedan för registrering:
          </h4>
        </template>


        <div class="con-form">

          <vs-input block class="emailInput" v-model="first_name" placeholder="Förnamn">
            <template #icon>
              
            </template>
          </vs-input>

          <vs-input block class="emailInput" v-model="last_name" placeholder="Efternamn">
            <template #icon>
              
            </template>
          </vs-input>

          <vs-input block class="emailInput" v-model="email" placeholder="Email">
          </vs-input>

          <vs-input block id="passwordInput" type="password" v-model="password" placeholder="Lösenord">
          </vs-input>
        </div>

        <template #footer>
          <div class="footer-dialog">

            <vs-button @click="Register()" block>
              Skapa ditt konto
            </vs-button>

          </div>
        </template>

      </vs-dialog>
      <!-- LOGGA UT -->

       <vs-button v-if="active4" @click="active3 = !active3" id="logoutButton" style="width: 113px">
      Logga ut
    </vs-button>
    <vs-dialog v-model="active3">
      <template #header>
        <h4>Logga ut</h4>
      </template>
      <template #footer>
        <div class="footer-dialog">
          <vs-button @click="Logout()" block> Logga ut </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>


<script>
export default {
  name: "Login",
  data: () => ({
    active: false,
    active2: false,
    active3: false,
    active4: sessionStorage.loggedIn,
    email: "",
    password: "",
    remember: false,
    first_name: '',
    last_name: '',
  }),
  methods: {
    async Login() {
      const data = { email: this.email, password: this.password };
      await fetch("http://localhost:3000/api/login/", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          sessionStorage.loggedIn = true;
          console.log("Success:", data, data.user.first_name);
          this.first_name = data.user.first_name;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
        Register(){
          const data = { email: this.email, password: this.password, first_name: this.first_name, last_name: this.last_name };
          fetch('http://localhost:3000/api/users/', {
          method: 'POST', // or 'PUT'
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
        },
    ToggleRegister(){
      this.active2 = true;
      this.active = false;
    },
    Logout(){
      const data = { email: this.email, password: this.password};
          fetch('http://localhost:3000/api/login/', {
          method: 'DELETE', // or 'PUT'
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => {
            sessionStorage.loggedIn = false;
          console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }
  },
};
</script>

<style scoped>
.flex {
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.forgotpassword {
  text-decoration: none;
  font-size: 0.9rem;
}
.createaccount {
  font-size: 0.9rem;
}
.email-input {
  margin-bottom: 5%;
}
.password-input {
  margin-bottom: 5%;
}
#popup {
  background-color: #262729;
}
#loginButton {
  background-color: #42b983;
  color: black;
}
.con-form{
  width:100%;
}
.emailInput{
  margin-bottom: 5%
}
</style>