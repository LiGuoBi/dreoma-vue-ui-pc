<!--
  name: 卡组2
  author: YDF
  desc: 整体宽度1200px，三列，显示描述
-->
<template>
  <div class="vrs-list2 flex-wrap container">
    <div class="vrs-project-item" v-for="(item,index) in projectList " :key="index">
      <div class="vrs-item-pt">
        <div class="vrs-introduction-pic">
          <img class="pich" :src="item.cover">
        </div>
        <div class="vrs-intro-txt-box">
          <div class="vrs-introduction-txt multiline-txt">{{item.description}}</div>
        </div>
      </div>
      <div class="vrs-item-title flex-v">
        <div class="vrs-dec flex-item">{{item.title}}</div>
        <div class="vrs-mark">
          <img class="pich" src="./img/icon-4.png">
        </div>
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
      banner: '',
      projectList: [
        { title: '若水网络', description: '中共中央总书记、国家主席、中央军委主席习近平18日在京接见空军第十三次党代表大会全体代表，代表党中央和中央军委，对空军第十三次党代会的召开表示热烈的祝贺，向各位代表和空军全体官兵致以诚挚的问候。', cover: require('./img/profile-1.png') },
        { title: '若水网络', description: '中共中央总书记、国家主席、中央军委主席习近平18日在京接见空军第十三次党代表大会全体代表，代表党中央和中央军委，对空军第十三次党代会的召开表示热烈的祝贺，向各位代表和空军全体官兵致以诚挚的问候。', cover: require('./img/profile-3.png') },
        { title: '若水网络', description: '中共中央总书记、国家主席、中央军委主席习近平18日在京接见空军第十三次党代表大会全体代表，代表党中央和中央军委，对空军第十三次党代会的召开表示热烈的祝贺，向各位代表和空军全体官兵致以诚挚的问候。', cover: require('./img/profile-2.png') },
        { title: '若水网络', description: '中共中央总书记、国家主席、中央军委主席习近平18日在京接见空军第十三次党代表大会全体代表，代表党中央和中央军委，对空军第十三次党代会的召开表示热烈的祝贺，向各位代表和空军全体官兵致以诚挚的问候。', cover: require('./img/profile-3.png') },
        { title: '若水网络', description: '中共中央总书记、国家主席、中央军委主席习近平18日在京接见空军第十三次党代表大会全体代表，代表党中央和中央军委，对空军第十三次党代会的召开表示热烈的祝贺，向各位代表和空军全体官兵致以诚挚的问候。', cover: require('./img/profile-1.png') },
        { title: '若水网络', description: '中共中央总书记、国家主席、中央军委主席习近平18日在京接见空军第十三次党代表大会全体代表，代表党中央和中央军委，对空军第十三次党代会的召开表示热烈的祝贺，向各位代表和空军全体官兵致以诚挚的问候。', cover: require('./img/profile-2.png') },
      ]
    }
  },
  computed: {},
  methods: {},
  created() { }
}
</script>

<style lang='scss' scoped>
.vrs-list2 {
  .vrs-project-item {
    @include wh(380px, 350px);
    margin-right: 30px;
    border-bottom: solid 1px #e5e5e5;
    margin-bottom: 60px;
    &:nth-child(3n) {
      margin-right: 0px;
    }
  }
  .vrs-item-pt {
    position: relative;
    @include wh(380px, 260px);
    overflow: hidden;
    .vrs-introduction-pic {
      position: absolute;
      @include wh(380px, 260px);
      border-radius: 5px;
    }
    .vrs-intro-txt-box {
      @include wh(380px, 260px);
      color: #fff;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 5px;
      padding: 20px;
      transition: all 0.5s;
      position: absolute;
      top: 260px !important;
      left: 0px !important;
    }
    .vrs-introduction-txt {
      max-height: 231px;
      font-size: 16px;
      line-height: 33px;
      -webkit-line-clamp: 7;
    }
    &:hover .vrs-intro-txt-box {
      top: 0 !important;
    }
  }
  .vrs-item-title {
    cursor: pointer;
    height: 89px;
    padding: 5px;
    .vrs-dec {
      line-height: 79px;
      font-size: 20px;
    }
    .vrs-mark {
      @include wh(32px);
    }
  }
}
</style>