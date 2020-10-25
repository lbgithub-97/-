<template>
  <div>
    <div class="header">欢迎登陆！</div>
    <!-- 表单区域开始 -->
    <div class="d">
        <mt-field 
          type="text" 
          label="用户名"
          placeholder="请输入用户名"
          :attr="{maxlength:15}"
          v-model="username"
          :state="usernameState"
          @blur.native.capture="checkUsername">
        </mt-field>   
     
        <mt-field 
          type="password" 
          label="密码"
          placeholder="请输入密码"
          :attr="{maxlength:20,autocomplete:'off'}"
          v-model="password"
          :state="passwordState"
          @blur.native.capture="checkPassword">
        </mt-field>   
        <hr>
       <div class="d1"></div>
        <mt-button type="primary" size="large" @click="handle">快速登录</mt-button>    
        <div class="d2">
            <span>验证码登陆</span>
            <span>忘记密码</span>
        </div>
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<style scoped>
.shortcut{
  text-decoration: none;  
}
.header{font-size: 30px;margin: 50px 30px 100px 30px;}
.d{padding: 20px;}
.d1{margin: 50px}
.d2{margin: 20px;font-size: 10px;}
.d2>span{margin: 0px 15%;}
</style>
<script>
export default {
  data(){
    return {
      // 用户名
      username:'',
      // 密码
      password:'',
      // 确认密码
      conpassword:'',
      // 用户名的状态
      usernameState:'',
      // 密码的状态
      passwordState:''
    }
  },
  methods:{
    //校验用户名
    checkUsername(){  
      let usernameRegExp = /^[0-9a-zA-Z_]{6,20}$/;
      if(usernameRegExp.test(this.username)){
        this.usernameState = 'success';
        return true;
      } else {
        this.usernameState = 'error';
        this.$toast({
          message:"用户名为必填项",
          position:"top",
          duration:"2000"
        });
        return false;
      }
    },
    //校验密码
    checkPassword(){
      //密码的正则表达式
      let passwordRegExp = /^[0-9A-Za-z]{8,20}$/;
      if(passwordRegExp.test(this.password)){
        return true;
      } else {
        this.$toast({
          message:"密码必须为字母、数字的组合体",
          position:"top",
          duration:"2000"
        });
        return false;
      }
    },   
    handle(){
      if(this.checkUsername() && this.checkPassword()){
        //该将获取到的信息提交到WEB服务器
        let obj = {
          username:this.username,
          password:this.password
        }
        this.axios.post('/login',this.qs.stringify(obj)).then(res=>{
            //用户登录成功
            if(res.data.code == 1){
              //提交Mutations
              this.$store.commit('logined');
              //为什么还要往webstorage中存储呢?因为用户刷新后数据依然要保持
              localStorage.setItem('isLogined','1');
              this.$router.push('/');
            } else {
              this.$messagebox("登录提示","用户名或密码错误");
            }
        })
      }
    }
  }
}
</script>