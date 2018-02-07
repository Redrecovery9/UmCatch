<template>
  <div class="toolbar">
    <div>
      <b-navbar class='navbar' toggleable>
        <b-nav-toggle target="nav_dropdown_collapse"></b-nav-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
          <b-nav is-nav-bar>
            <b-navbar-brand href="#">
            </b-navbar-brand>
            <b-nav-item href="#"><b-nav-text class='nav-links'>About</b-nav-text></b-nav-item>
            <b-nav-item href="#"><b-nav-text class='nav-links'>Contact Us</b-nav-text></b-nav-item>
            <b-nav-item href="#"><b-nav-text class='nav-links'>Resources</b-nav-text></b-nav-item>
          </b-nav>
          <!-- <b-nav is-nav-bar class="ml-auto nav-links login">
            <b-nav-item href="#"><b-nav-text class='nav-links'>Login</b-nav-text></b-nav-item>
          </b-nav> -->
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  display: flex;
}
.nav-links{
  font-weight: 600;
  color: #CB2B00;
}
.nav-links:hover {
  color: #7F1B00;
}
.dropdown-links {
  font-weight: bolder;
  margin-top: 8px;
}
.dropdown-links a span:hover{
  color: #7F1B00;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #7F1B00;
}
.dropdown-items {
  font-weight: bolder;
}
.dropdown-items:hover {
  color: #7F1B00;
}
.login {
  margin-right: 30px
}
</style>
