<!--
  name: 首页底部栏1
  author: LXL
  desc: 包含验证信息提示，提示.showMessage
-->
<template>
  <div class="vrs-footer1">
    <div class="container flex between">
      <div class="vrs-footer-left flex column">
        <ul class="vrs-item1 flex between">
          <li>
            <router-link to>首页</router-link>
          </li>
          <li>
            <router-link to>关于我们</router-link>
          </li>
          <li>
            <router-link to>游戏介绍</router-link>
          </li>
          <li>
            <router-link to>招商加盟</router-link>
          </li>
          <li>
            <router-link to>联系我们</router-link>
          </li>
        </ul>
        <div class="vrs-item2">
          <p>地址：云南省昆明市西山区万达北塔49楼4902</p>
          <p>联系电话：0871-63385758</p>
          <p>手机：18288265205</p>
        </div>
        <div class="vrs-item2 vrs-item3">
          <p>©云南若水网络科技有限公司 版权所有</p>
          <p>滇ICP备6181652389-1号</p>
        </div>
      </div>
      <div class="vrs-footer-right">
        <div class="flex between">
          <div class="flex column">
            <input type="text" placeholder="姓名" v-model="name" />
            <input type="email" placeholder="邮箱" v-model="email" />
            <input type="tel" placeholder="联系号码" v-model="tel" />
          </div>
          <div>
            <textarea name id placeholder="请输入内容..." v-model="content"></textarea>
          </div>
        </div>
        <button @click="submit">提交</button>
      </div>
    </div>
    <div class="vrs-showMessage" v-if="message">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      name: '',
      email: '',
      tel: '',
      content: '',
      message: ''
    }
  },
  computed: {},
  methods: {
    submit() {
      let regexE = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ //匹配邮箱
      let regexT = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/ //匹配电话号码
      if (!this.name) {
        this.showMsg('请输入姓名！')
      } else if (!this.email) {
        this.showMsg('请输入邮箱！')
      } else if (!regexE.test(this.email)) {
        this.showMsg('邮箱格式有误！')
      } else if (!this.tel) {
        this.showMsg('请输入电话！')
      } else if (!regexT.test(this.tel)) {
        this.showMsg('电话格式有误！')
      } else if (!this.content) {
        this.showMsg('请输入内容！')
      } else {
        console.log('提交!')
      }
    },
    showMsg(msg) {
      this.message = msg
      setTimeout(() => {
        this.message = ''
      }, 1000)
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-footer1 {
  position: relative;
  padding: 60px 0;
  background: #2a344e;
  .vrs-footer-left {
    width: 440px;
    .vrs-item1 {
      margin-bottom: 34px;
      li {
        font-size: 20px;
        list-style: none;
        a {
          color: #ffffff;
        }
      }
    }
    .vrs-item2 {
      font-size: 14px;
      color: #969696;
      text-align: justify;
      line-height: 22px;
    }
    .vrs-item3 {
      margin: 22px 0 0;
    }
  }
  .vrs-footer-right {
    input,
    textarea {
      color: #ffffff;
      border: 1px solid #969696;
      &::-webkit-input-placeholder {
        color: #ffffff;
      }
      &:-moz-placeholder {
        color: #ffffff;
      }
      &::-moz-placeholder {
        color: #ffffff;
      }
      &:-ms-input-placeholder {
        color: #ffffff;
      }
    }
    input {
      width: 280px;
      height: 40px;
      font-size: 16px;
      margin: 0px 10px 10px 0;
      padding: 0px 10px;
    }
    textarea {
      width: 390px;
      height: 125px;
      padding: 10px;
    }
    button {
      cursor: pointer;
      color: #ffffff;
      width: 100%;
      height: 40px;
      font-size: 18px;
      color: #ffffff;
      background: #50b9ce;
    }
  }
  //显示提示信息
  .vrs-showMessage {
    position: absolute;
    color: #fff;
    top: 10%;
    left: 40%;
    transform: translate(-20%, -40%);
    background: rgba(0, 0, 0, 0.7);
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 5px;
  }
}
</style>