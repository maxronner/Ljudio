<template>
    <div>
      <vs-button @click="active=!active">
        Open Dialog
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
          <vs-input class="password-input" block type="password" v-model="password" placeholder="Password">
          </vs-input>
          <div class="flex">
            <vs-checkbox v-model="remember">Remember me</vs-checkbox>
            <a class="forgotpassword" href="#">Forgot Password?</a>
          </div>
        </div>

        <template #footer>
          <div class="footer-dialog">
            <vs-button block>
              Sign In
            </vs-button>

            <div class="createaccount">
              New Here? <a href="#">Create New Account</a>
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
</style>