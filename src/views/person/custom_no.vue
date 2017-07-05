<template>
	<div>
		<div class="common-person-order-top">
            <ul>
                <li class="active"><a href="javascript:;">普通用户</a></li>
                <li><a href="javascript:;">理财师用户</a></li>
            </ul>
            <nav>
            	<a href="javascript:;">导出列表</a>
            	<input placeholder="姓名" type="text" />
            </nav>
        </div>
        <div class="person-custom-main">
    		<dl class="common-person-custom-table">
    			<dt>
    				<p>用户姓名</p>
    				<p>身份证号</p>
    				<p>手机号码</p>
    				<p>邮箱</p>
    				<p>累计成交</p>
    				<p>操作</p>
    			</dt>
    			<dd v-for="i in 20" :key="i">
    				<p>游老板</p>
    				<p>122232877654567890</p>
    				<p>18810658874</p>
    				<p>12345678@3456.com</p>
    				<p>340万</p>
    				<p><a href="javascript:;">编辑</a><a href="javascript:;">删除</a></p>
    			</dd>
    		</dl>
    		<common-page></common-page>
        </div>
        	
        </div>
	</div>
</template>

<script type="text/javascript">

	export default {
		data(){
			return {

			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../styl/base";
	
</style>