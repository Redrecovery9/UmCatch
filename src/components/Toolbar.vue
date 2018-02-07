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
            <b-nav-item href="#"><b-nav-text class='nav-links'>Calendar</b-nav-text></b-nav-item>
            <b-nav-item-dropdown class='dropdown-links' text="Members" right>
              <b-dropdown-item class='dropdown-items' href="#">Founding Members</b-dropdown-item>
              <b-dropdown-item class='dropdown-items' href="#">Entrepreneurial-Small Companies</b-dropdown-item>
              <b-dropdown-item class='dropdown-items' href="#">Chamber/Foundation</b-dropdown-item>
              <b-dropdown-item class='dropdown-items' href="#">Members</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class='dropdown-links' text="Newsletter/Contact" right>
              <b-dropdown-item class='dropdown-items' href="#">Signup for Newsletter</b-dropdown-item>
              <b-dropdown-item class='dropdown-items' href="#">Contact Us</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#"><b-nav-text class='nav-links'>Resources</b-nav-text></b-nav-item>
          </b-nav>
          <b-nav is-nav-bar class="ml-auto nav-links login">
            <b-nav-item href="#"><b-nav-text class='nav-links'>Login</b-nav-text></b-nav-item>
          </b-nav>
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
  font-weight: bolder;
}
.nav-links:hover {
  color: #004286;
}
.dropdown-links {
  font-weight: bolder;
  margin-top: 8px;
}
.dropdown-links a span:hover{
  color: #004286;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #004286;
}
.dropdown-items {
  font-weight: bolder;
}
.dropdown-items:hover {
  color: #004286;
}
.login {
  margin-right: 30px
}
</style>
