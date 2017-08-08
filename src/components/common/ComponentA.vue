<template>
	<div>
		this is child component
		<br><br>
		{{ hello }}: {{ name }}
		<button @click="selHello">测试</button>
		<br><br>
		<!-- 指定slot的名称，在调用组件的时候指定slot为header，则可以将内容插入到<slot name="header">中 -->
		<slot name="header">not header</slot>
		<!-- 不指定slot名称时，将默认加载调用组件中的内容到<slot>中 -->
		<slot></slot>
		<slot name="footer">not footer</slot>
	</div>
</template>
<script>
	export default {
		props: {
			name: [String]
		},
		data() {
			return {
				hello: 'hello'
			}
		},
		methods: {
			selHello(){
				// console.log('sey hello');
				this.$emit('go',this.hello); // 参数1：调用方法；参数2：传递属性
				this.$emit('go','sey hello');
			}
		}
	}
</script>
<style scoped>
	
</style>