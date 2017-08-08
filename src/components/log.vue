<template>
	<div>
		{{ name }}
		<br>
		<input type="text" name="" v-model="myVal">
		<br>
		methods方式: {{ myValueNum1() }}
		<br>
		computed方式: {{ myValueNum2 }}
		<br><br>

		<!-- 使用组件 -->
		<component-a :name="name" @go="fnGo">
			<!-- 通过slot向组件添加内容 -->
			<div slot="header">
				this is header
			</div>
			<p>this is slot</p>
		</component-a>

	</div>
</template>
<script>
	import componentA from './common/ComponentA'
	export default {
    /**
    * 注册组件
    */
    components : {
      componentA
    },
    /**
     * 存放变量属性
     */
    data () {
      return {
        name: "log watch",
        myVal: ''
      }
    },
    /**
     * 监听属性变化
     */
    watch : {
      myVal: function (newVal, oldVal) {
        console.log(newVal + '==' + oldVal)
      }
    },
    /**
     * 存放方法
     * 无缓存
     */
    methods : {
      myValueNum1(){
        return Date.now()
        return this.myVal.replace(/\d/g,'')
      },
      fnGo(msg) {
        console.log('fn go '+msg);
      }
    },
    /**
     * 计算属性
     * 有缓存，如果用一个不操作变量的方式，只会执行第一次返回的结果
     */
    computed : {
      myValueNum2 () {
        return Date.now();
        return this.myVal.replace(/\d/g, '');
      }
    }
	}
</script>
<style scoped>

</style>
