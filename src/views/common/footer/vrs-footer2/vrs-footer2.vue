<!--
  name: 底部导航栏2
  author: YDF
  desc: 验证massage 注意参数
-->
<template>
  <div class="vrs-footer2">
    <div class="vrs-contact container">
      <div class="vrs-line"></div>
      <div class="vrs-contant-list flex between">
        <div class="vrs-cont-info">
          <div class="vrs-nav flex">
            <div class="vrs-nav-title">快速导航：</div>
            <router-link class="link" to="/home">首页</router-link>
            <router-link class="link" to="/home">路线</router-link>
            <router-link class="link" to="/home">活动项目</router-link>
            <router-link class="link" to="/home">个性化服务</router-link>
            <router-link class="link" to="/home">关于我们</router-link>
          </div>
          <div class="vrs-nav flex">
            <div class="vrs-nav-title flex between">
              <span>地</span>
              <span>址：</span>
            </div>
            <div class="vrs-address-info">云南若水</div>
          </div>
          <div class="vrs-nav flex">
            <div class="vrs-nav-title">联系我们：</div>
            <img class="vrs-pic" src="./img/phone.png">
            <div class="vrs-address-info">54465454546</div>
          </div>
        </div>
        <div class="vrs-cont-submit">
          <input class="vrs-sub-name vrs-sub-name-w3" type="text" placeholder="姓名" v-model="name">
          <input class="vrs-sub-name vrs-sub-name-w3" type="tel" placeholder="电话" v-model="phone">
          <input class="vrs-sub-name vrs-sub-name-w5" type="text" placeholder="内容" v-model="content">
          <button class="vrs-more" @click="onSave">联系我们</button>
          <div class="vrs-fiexed_error" v-if="message">{{message}}</div>
        </div>
      </div>
    </div>
    <footer class="vrs-footer">
    <div class="vrs-foot-mian flex-c">
      <img class="vrs-logo" src="./img/logo-w.png">
      <div class="vrs-dec">
        <p>备案号：滇ICP备19003425号-1</p>
        <p>©2019  云南雪狼户外运动有限公司  版权所有</p>
        <p>技术支持：云南若水网络</p>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  data() {
    return {
      name:'',
      phone:'',
      content:'',
      message:''
    }
  },
  computed: {},
  methods: {
    showMeaasge(err) {
      this.message = err
      setTimeout(() => {
        this.message = ''
      }, 500)
    },
    onSave() {
      // if (!this.name) this.showMeaasge('请输入姓名')
      // else if (!this.phone || this.phone.length < 8) this.showMeaasge('请输入电话')
      // else if (!this.content) this.showMeaasge('请输入内容')
      // else {
      //   api_message({ name: this.name, phone: this.phone, content: this.content }).then(res => {
      //     this.showMeaasge('提交成功！')
      //     this.name = ''
      //     this.phone = ''
      //     this.content = ''
      //   }, err => {
      //     console.log(err)
      //   })
      // }
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-contact {
  .vrs-line {
    background: #cecece;
    @include wh(100%, 1px);
    margin-bottom: 55px;
  }
  .vrs-cont-info {
    .vrs-nav {
      margin-bottom: 50px;
    }
    .vrs-nav-title {
      width: 90px;
      font-size: 14px;
      color: #202020;
      padding-right: 20px;
      text-align: justify;
    }
    .link {
      font-size: 14px;
      color: #666666;
      padding-right: 40px;
      &:last-child {
        padding-right: 0px;
      }
      &:hover,
      &.active {
        color: #ff9f00;
      }
    }
    .vrs-address-info {
      font-size: 14px;
      color: #666666;
    }
    .vrs-pic {
      @include wh(16px);
      margin-right: 10px;
    }
  }
  .vrs-cont-submit {
    width: 500px;
    position: relative;
    .vrs-sub-name {
      height: 45px;
      border-bottom: solid 1px #cecece;
    }
    .vrs-sub-name-w5 {
      width: 500px;
    }
    .vrs-sub-name-w3 {
      width: 300px;
    }
    .vrs-sub-name::-moz-placeholder {
      font-size: 16px;
    }
    .vrs-more {
      cursor: pointer;
      @include wh(100px, 30px);
      background-color: #ff9f00;
      border-radius: 4px;
      color: #fff;
      line-height: 30px;
      text-align: center;
      margin: 40px 0 40px 400px;
    }
    .vrs-fiexed_error {
      position: absolute;
      color: #fff;
      top: 20%;
      left: 40%;
      transform: translate(-20%, -40%);
      background: rgba($color: #000, $alpha: 0.7);
      padding: 10px 20px;
      font-size: 14px;
    }
  }
}
.vrs-footer {
  height: 150px;
  background: $black;
  line-height: 24px;
  color: #666;
  text-align: center;
  .vrs-foot-mian {
    margin: auto;
    height: 100%;
    .vrs-logo {
      @include wh(121px);
      margin: auto 10px;
    }
    .vrs-dec {
      margin: auto 5px;
      .p {
        font-size: 12px;
        color: #bbbbbb;
        text-align: center;
        line-height: 24px;
      }
    }
  }
}
</style>