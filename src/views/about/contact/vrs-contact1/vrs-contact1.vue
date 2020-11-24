<!--
  name: 联系我们样式1
  author: YDF
  desc: 宽度1200px, 居中 ，提交提示message，轮播
-->
<template>
  <div class="vrs-contact1 flex-l container">
    <div class="vrs-left">
      <div class="vrs-pic">
        <img src="./img/del-1.png" class="pich">
      </div>
      <div class="vrs-way">
        <div class="vrs-bot-box">
          <div class="vrs-txt flex">
            <div class="txt1">电话：</div>
            <div class="txt2">1241114655435</div>
          </div>

          <div class="vrs-txt flex">
            <div class="txt1">地址：</div>
            <div class="txt2">云南若水</div>
          </div>

          <div class="vrs-txt flex">
            <div class="txt1">Facebook：</div>
            <div class="txt2">Dreoma</div>
          </div>

          <div class="vrs-txt flex">
            <div class="txt1">邮箱：</div>
            <div class="txt2">141564165@163.com</div>
          </div>
        </div>
      </div>
    </div>
    <div class="vrs-right">
      <div class="vrs-link-form">
        <div class="h6">最新提交</div>
        <div class="vrs-marquee">
          <div class="swiper-container vrs-marquee-box vrs-marquee-swiper">
            <div class="swiper-wrapper vrs-marquee-list">
              <div
                class="swiper-slide vrs-marquee-single flex between"
                v-for="(item, index) in messageList"
                :key="index"
              >
                <span>{{item.phone}}</span>
                <span>{{item.create_time}}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="h6">立即预约</div>
        <div class="vrs-form">
          <input type="text" placeholder="姓名（比如：杨先生）" v-model="name" class="vrs-input">
          <input type="tel" placeholder="电话" v-model="tel" class="vrs-input">
          <select class="vrs-input" v-model="type_id">
            <option value="0">咨询</option>
            <option value="1">购房</option>
          </select>
          <button class="vrs-btn" @click="onSave">立即提交</button>
        </div>
        <div class="vrs-fiexed-error" v-if="message">{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  data() {
    return {
      message: '',
      type_id: 0,
      name: '',
      tel: '',
      messageList: {}
    }
  },
  computed: {},
  created() {
    // 模拟数据请求
    setTimeout(() => {
      this.messageList = [
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        },
        {
          phone: '15454787451',
          create_time: '2019-06-12',
        }
      ]
      this.$nextTick(() => {
        this.initproperty()
      })
    }, 500)
  },
  methods: {
    initproperty() {
      this.swiperproperty = new Swiper('.vrs-marquee-swiper', {
        direction: 'vertical',
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 500,
        }
      })
    },
    showMeaasge(err) {
      this.message = err
      setTimeout(() => {
        this.message = ''
      }, 500)
    },
    onSave() {
      if (!this.name) this.showMeaasge('请输入姓名')
      else if (!this.tel || this.tel.length < 8) this.showMeaasge('请输入电话')
      else {
        this.showMeaasge('提交成功！')
        this.name = ''
        this.tel = ''
        this.type_id = 0
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.vrs-contact1 {
  .vrs-left {
    @include wh(842px, 670px);
    margin-right: 40px;
    .vrs-pic {
      height: 440px;
    }
    .vrs-way {
      border: 1px solid #f9f9f9;
      box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.05);
      height: 230px;
      .vrs-bot-box {
        padding: 30px;
      }
      .vrs-txt {
        line-height: 40px;
        .txt1 {
          font-size: 20px;
        }
        .txt2 {
          font-size: $h3;
        }
      }
    }
  }
  .vrs-right {
    flex: 1;
    position: relative;
    .vrs-fiexed-error {
      position: absolute;
      color: #fff;
      top: 50%;
      left: 35%;
      background: rgba($color: #000, $alpha: 0.7);
      padding: 10px 20px;
      font-size: 14px;
    }
    .vrs-link-form {
      width: 318px;
      .h6 {
        font-size: 22px;
        color: #333333;
        line-height: 40px;
        margin: 0;
      }
      .vrs-marquee {
        @include wh(100%, 260px);
        overflow: hidden;
        border-bottom: 1px solid rgba($color: #5d5d5d, $alpha: 0.75);
        margin: 12px 0 30px 0;
        padding-bottom: 20px;
        .vrs-marquee-box {
          height: 240px;
          .vrs-marquee-list {
            width: 100%;
            height: 40px;
            .vrs-marquee-single {
              width: 100%;
              height: 40px;
              line-height: 40px;
              font-size: 18px;
              color: #333333;
            }
          }
        }
      }
      .vrs-form {
        margin-top: 14px;
        .vrs-name {
          font-size: 18px;
          color: #8d8d8d;
        }
        .vrs-input {
          border: 0;
          height: 40px;
          width: 100%;
          margin: 0px 0 19px 0;
          border-bottom: 1px solid rgba($color: #5d5d5d, $alpha: 0.7);
          font-size: 18px;
          padding-bottom: 10px;
        }
        .vrs-btn {
          float: right;
          margin-top: 37px;
          cursor: pointer;
          width: 140px;
          border-radius: 20px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #fff;
          background-color: #004dff;
          font-size: $h3;
        }
      }
    }
  }
}
</style>