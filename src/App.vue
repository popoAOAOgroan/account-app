<template>
  <div id="app">
    <div class="nav">
      <ul class="nav__ul">
        <li class="nav__li"><router-link to="/huaban">花瓣</router-link></li>
        <li class="nav__li"><router-link to="/common">常规布局</router-link></li>
        <li class="nav__li"><router-link to="/badbad">反面教材</router-link></li>
      </ul> 
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Arvo');
*, body{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Arvo', monospace;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav{
  width: 100%;
  padding: 0 100px;
  border-bottom: 10px solid #f6f6f6;
}
.nav__ul{
  display: flex;
  max-width: 300px;
}
.nav__li{
  flex: 1;
  list-style-type: none;
  color: #333;
}
.page{
  padding: 5px;
}
a{
  color: #333;
  text-decoration: none;
  line-height: 30px;
}
</style>
