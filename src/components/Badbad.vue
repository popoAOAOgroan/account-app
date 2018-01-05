<template>
  <div class="page container">
    <div class="left">我是左</div>
    <div class="right">我是右</div>
  </div>
</template>

<script>
export default {
  name: 'badbad',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >

.container{
  background: red;
}
.left{
  float: left;
  width: 300px;
  background: green;
}
.right{
  float: right;
  width: 200px;
  background: yellow;
}

</style>
