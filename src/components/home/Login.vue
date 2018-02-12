<template>
 <div class="login">
   <div class="loginCardBody">
     <b-container>
       <b-row>
         <b-col sm='2' class='labels'>
           <p>Username:</p>
         </b-col>
         <b-col sm='8'>
           <b-form-input class='UsernameCol'
                  type="Username"
                  placeholder="Username">
            </b-form-input>
          </b-col>
       </b-row>
       <b-row>
         <b-col sm='2' class='labels'>
           <p>Password:</p>
         </b-col>
         <b-col sm='8'>
           <b-form-input class='passwordCol'
                  type="password"
                  placeholder="Password">
            </b-form-input>
          </b-col>
       </b-row>
      <b-row>
        <b-col sm='1' class='loginCol'><b-button class='loginButton'>Login</b-button></b-col>
        <b-col sm='3' class='signupCol'><b-button class='signupButton'>Sign Up</b-button></b-col>
      </b-row>
     </b-container>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
.labels {
  margin-left: 10%;
}
.loginCol {
  margin-left: 35%;
}
.loginButton {
  background-color: #CB2B00;
  border: none;
}
.loginButton:hover {
  background-color: #007F58;
  border: none;
}
.signupButton {
  background-color: #CB2B00;
  border: none;
}
.signupButton:hover {
  background-color: #007F58;
  border: none;
}

</style>
