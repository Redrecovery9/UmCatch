<template>
 <div class="login">
   <div class="loginCardBody">
     <b-card>
       <b-container>
        <b-row class="my-1" v-for="type in types" :key="type">
          <b-col sm="3"><label :for="`type-${type}`">{{ type }}:</label></b-col>
          <b-col sm="9"><b-form-input :id="`type-${type}`" :type="type"></b-form-input></b-col>
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

</style>
