
<template>

    <div class="center">

      <vs-button @click="active=!active" id="registerButton" style="width:113px;">
        Registrera dig
      </vs-button>

      <vs-dialog v-model="active">
        <template #header>
          <h4>
            Fyll i uppgifterna nedan för registrering:
          </h4>
        </template>


        <div class="con-form">

          <vs-input block id="emailInput" v-model="first_name" placeholder="Förnamn">
            <template #icon>
              
            </template>
          </vs-input>

          <vs-input block id="emailInput" v-model="last_name" placeholder="Efternamn">
            <template #icon>
              
            </template>
          </vs-input>

          <vs-input block id="emailInput" v-model="email" placeholder="Email">
            <template #icon>
              @
            </template>
          </vs-input>

          <vs-input block id="passwordInput" type="password" v-model="password" placeholder="Lösenord">
            <template #icon>
              <i class='bx bxs-lock'></i>
            </template>
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

    </div>

</template>


<script>
    export default {
      data:() => ({
        active: false,
        email: '',
        password: '',
        first_name: '',
        last_name: '',
      }),
      methods:{
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
        }
      }
      }
</script>

<style scoped>
    .con-form{
      width: 100%;
    }

    #emailInput{
      margin-bottom: 5%;
    }

    #passwordInput{
      margin-bottom: 5%;
    }

    #passwordInput{
      margin-bottom: 5%;
    }
    .footer-dialog{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: calc (100%);
    }

    .vs-input-content{
      width: calc (100%);
    }

    #popup{
        background-color:#262729;
    }

    #registerButton{
      background-color: #42b983;
      color: black;
    }
</style>
        