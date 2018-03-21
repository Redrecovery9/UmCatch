<template>
  <div class="copyrightbar">
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
  background-color: #068F8A;
  color: white;
}
.copyright {
  background-color: #068F8A;
  font-weight: bolder;
}
.leftcopy {
  font-size: .70em;
  color: #DC6A2D;
  margin-top: 15px;
  margin-left: 125px;
  margin-bottom: 10px;
}
.rightcopy {
  color: #DC6A2D;
  margin-top: 15px;
  margin-bottom: 20px;
}
.icons {
  border-color: #068F8A;
  background-color: #068F8A;
  color: #8F4219;
}
.icons:hover {
  background-color: #DC6A2D;
  color: #068F8A;
}
</style>
