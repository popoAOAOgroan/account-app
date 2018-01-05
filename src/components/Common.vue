<template>
  <div class="page container">
    <div class="header">我是头</div>
    <div class="aside">我是边边</div>
    <div class="navv">我是导航</div>
    <div class="content">我是内容
    </div>
    <div class="ad">我是边边边边</div>
    <div class="footer">我是脚</div>
  </div>
</template>

<script>
export default {
  name: 'common',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >

.container{
  width: 100%;
  display: grid;
  grid-gap: 10px 10px;
  grid-template-columns: 200px auto 50px;
  grid-template-rows: 120px 80px 800px 100px;
  grid-template-areas: 
    "header header header"
    "aside nav ad"
    "aside content ad"
    "footer footer footer";
}
@media screen and (max-width: 768px) {
  .container{
    width: 100%;
    display: grid;
    grid-gap: 5px 5px;
    grid-template-columns: 1fr;
    grid-template-rows: 120px 40px 40px 500px 40px 100px;
    grid-template-areas: 
      "header"
      "aside"
      "nav"
      "content"
      "ad"
      "footer";
  }
}
.container > div{
  background: #f2f2f2;
}
.header {
  grid-area: header;
}
.navv {
  grid-area: nav;
}
.aside {
  grid-area: aside;
}
.ad{
  grid-area: ad;
}
.content {
  grid-area: content;
}
.footer {
  grid-area: footer;
}
.box{
  list-style-type: none;
  border: 1px #f1f1f1 solid;
  box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
  overflow: hidden;
}
</style>
