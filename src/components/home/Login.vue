<template>
 <div class="login">
   <div class="loginCardBody">
     <b-card>
       <b-container>
        <b-row class="my-1" v-for="type in types" :key="type">
          <b-col sm="3" class='labels'><label :for="`type-${type}`">{{ type }}:</label></b-col>
          <b-col sm="6"><b-form-input :id="`type-${type}`" :type="type"></b-form-input></b-col>
        </b-row>
        <b-row>
          <b-col sm='1' class='loginButton'><b-button>Login</b-button></b-col>
          <b-col sm='3' class='signupButton'><b-button>Sign Up</b-button></b-col>
        </b-row>
       </b-container>
     </b-card>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      types: [
        'Email', 'Username', 'Password',
      ]
    }
  },
  methods: {

  }
}
</script>

<style>
.labels {
  margin-left: 15%;
}
.loginButton {
  margin-left: 35%;
}

</style>
