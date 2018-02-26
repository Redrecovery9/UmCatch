<template>
  <div class="copyrightbar">
    <b-row class='footer'>
        <b-col class='left'>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </b-col>
        <b-col class='mid'>
          Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </b-col>
        <b-col class='right'>
          Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </b-col>
    </b-row>
    <b-row class='copyright'>
      <b-col cols="8" class='leftcopy'>
        <span>
          Copyright &copy 2018 UM Catch
        </span>
      </b-col>
      <b-col class='rightcopy'>
        <b-button class='icons' disabled href="#"><icon name="facebook"></icon></b-button>
        <b-button class='icons' disabled href="#"><icon name="twitter"></icon></b-button>
        <b-button class='icons' disabled href="#"><icon name="google-plus"></icon></b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.footer {
  margin-top: 20px;
  background-color: #34D175;
  color: white;
}
.left {
  font-size: .85em;
  margin-left: 100px;
  margin-top: 30px;
}
.mid {
  font-size: .85em;
  margin-top: 30px;
}
.right {
  font-size: .85em;
  margin-right: 100px;
  margin-top: 30px;
}
.copyright {
  background-color: #34D175;
  font-weight: bolder;
}
.leftcopy {
  font-size: .70em;
  color: #CB2B00;
  margin-top: 50px;
  margin-left: 125px;
  margin-bottom: 10px;
}
.rightcopy {
  color: #7F1B00;
  margin-top: 50px;
  margin-bottom: 20px;
}
.icons {
  border-color: #34D175;
  background-color: #34D175;
  color: #CB2B00;
}
.icons:hover {
  background-color: #7F1B00;
  color: #34D175;
}
</style>
