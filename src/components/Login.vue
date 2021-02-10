<template>
    <div>
      <vs-button @click="active=!active" id="loginButton">
        Logga in
      </vs-button>
      <vs-dialog v-model="active">
        <template #header>           
          <h4>
              Logga in
          </h4>
        </template>


        <div>
          <vs-input class="email-input" block v-model="email" placeholder="Email">
          </vs-input>
          <vs-input class="password-input" block type="password" v-model="password" placeholder="Lösenord">
          </vs-input>
          <div class="flex">
            <vs-checkbox v-model="remember">Kom ihåg mig</vs-checkbox>
            <a class="forgotpassword" href="#">Glömt lösenord?</a>
          </div>
        </div>

        <template #footer>
          <div class="footer-dialog">
            <vs-button block>
              Logga in
            </vs-button>

            <div class="createaccount">
              Ny här? <a href="#">Skapa ett konto</a>
            </div>
          </div>
        </template>
      </vs-dialog>
    </div>
  </template>

<script>
 export default {
    name: 'Login',
data:() => ({
        active: false,
        email: '',
        password: '',
        remember: false
      })
}
</script>

<style scoped>
    .flex{
        justify-content: space-between;
        display: flex;
        align-items: center;
    }
    .forgotpassword{
        text-decoration: none;
        font-size: .9rem;
    }
    .createaccount{
        font-size: .9rem;
    }
    .email-input{
        margin-bottom: 5%;
    }
    .password-input{
        margin-bottom: 5%;
    }
    #popup{
        background-color:#262729;
    }
    #loginButton{
      background-color: #42b983;
      color: black;
    }
</style>