<template>
  <div id="app">
    <nav class="navbar navbar-default nav">
      <div class="container">
        <a class="navbar-brand">LOGO</a>
        <router-link to="/" exact="" tag="li">
          <i class="glyphicon glyphicon-home"></i>
          <span>Home</span>
        </router-link>
        <router-link to="/document" tag="li">
          <i></i>
          <span>Document</span>
        </router-link>
        <router-link to="/about" tag="li">
          <i></i>
          <span>About</span>
        </router-link>
        <li class="navbar-right">
          <i class="glyphicon glyphicon-user"></i>
          <span>登录</span>
        </li>
      </div>
    </nav>
    <div class="container">
      <router-view name="slider"></router-view>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'app'
  data () {
    return {}
  }
}
</script>

