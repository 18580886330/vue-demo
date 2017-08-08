<template>
    <div>
      <div class="row">
        <div class="col-md-3 col-sm-3">
          <ul class="list-group">
            <router-link to="/about" tag="li" exact="" class="list-group-item">
              <i></i><span>study</span>
            </router-link>
            <router-link to="/about/work" tag="li" class="list-group-item">
              <i></i><span>work</span>
            </router-link>
            <router-link to="/about/hobby" tag="li" class="list-group-item">
              <i></i><span>hobby</span>
            </router-link>
          </ul>
        </div>
        <div class="col-md-9 col-sm-9">
          关于我
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
</template>
<script>
    /* eslint-disable indent */
    export default{
        data () {
            return {}
        }
    }
</script>
