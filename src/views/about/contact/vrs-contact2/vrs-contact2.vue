<!--
  name: 联系我们样式2
  author: LXL
  desc:
-->
<template>
  <div class="vrs-contact2 container">
    <div class="vrs-three flex between">
      <div class="vrs-three-item flex-c column">
        <img class="vrs-three-item-img" src="./img/icon-1.png" alt />
        <div class="vrs-cont1 tc">18087496660</div>
        <div class="vrs-cont2 tc">TEL</div>
      </div>
      <div class="vrs-three-item flex-c column">
        <img class="vrs-three-item-img" src="./img/icon-2.png" alt />
        <div class="vrs-cont1 tc">
          <p class="vrs-p1">云南省曲靖市</p>
          <p class="vrs-p2">麒麟区敏大金麟湾</p>
        </div>
        <div class="vrs-cont2 tc">ADD</div>
      </div>
      <div class="vrs-three-item flex-c column">
        <img class="vrs-three-item-img" src="./img/icon-3.png" alt />
        <div class="vrs-cont1 tc">chinawin_qj@163.com</div>
        <div class="vrs-cont2 tc">EMAIL</div>
      </div>
    </div>
    <div class="inner"></div>
  </div>
</template>

<script>
export default {
  name: 'vrs-contact2',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.vrs-contact2 {
  margin: 100px auto 60px;
  .vrs-three {
    .vrs-three-item {
      color: #333333;
      min-width: 250px;
      .vrs-three-item-img {
        @include wh(100px);
      }
      .vrs-cont1 {
        font-size: 20px;
        line-height: 24px;
        min-height: 48px;
        margin: 20px 0;
      }
      .vrs-cont2 {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>