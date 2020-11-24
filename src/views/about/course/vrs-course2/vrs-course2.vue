<!--
  name: 发展历程2
  author: YDF
  desc: 根据index更改标识颜色
-->
<template>
  <div class="vrs-course2 container">
    <div class="vrs-list flex between" v-for="(value, index) in aboutDev" :key="index">
      <span>{{value.title}}</span>
      <div class="vrs-line">
        <span class="vrs-yuan"></span> 
        <span class="vrs-xian"></span>
      </div>
      <p class="vrs-text">{{value.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      aboutDev: [
        { title: '2016年', description: '国家主席习近平18日应约同美国总统特朗普通电话' },
        { title: '2017年', description: '特朗普表示，我期待着同习近平主席在二十国集团领导人大阪峰会期间再次会晤，就双边关系和我们共同关心的问题进行深入沟通。美方重视美中经贸合作，希望双方工作团队能展开沟通，尽早找到解决当前分歧的办法。相信全世界都希望看到美中达成协议。' },
        { title: '2018年', description: '习近平指出，近一段时间来，中美关系遇到一些困难，这不符合双方利益。中美合则两利、斗则俱伤。双方应该按照我们达成的共识，在相互尊重、互惠互利基础上，推进以协调、合作、稳定为基调的中美关系。' },
        { title: '2019年', description: '中美作为全球最大的两个经济体，要共同发挥引领作用，推动二十国集团大阪峰会达成积极成果，为全球市场注入信心和活力。我愿意同总统先生在二十国集团领导人大阪峰会期间举行会晤，就事关中美关系发展的根本性问题交换意见。' },
      ]
    }
  },
  created() {
  }
}
</script>

<style lang='scss' scoped>
.vrs-course2 {
  margin-bottom: 145px;
  .vrs-list {
    @include wh(100%, auto);
    span {
      font-size: 18px;
      color: #111111;
      width: 83px;
    }
    .vrs-line {
      position: relative;
      margin-right: 50px;
      span {
        position: absolute;
        &.vrs-yuan {
          @include wh(20px, 20px);
          background: #004dff;
          border-radius: 100%;
          left: 0;
          top: 0;
        }
        &.vrs-xian {
          background: #bea67c;
          @include wh(4px, 100%);
          top: 20px;
          left: 8px;
        }
      }
    }
    &:nth-child(2n) {
      .vrs-line {
        span {
          &.vrs-yuan {
            background: #ff9f00;
          }
        }
      }
    }
    .vrs-text {
      font-size: 16px;
      color: #111111;
      line-height: 30px;
      margin-bottom: 35px;
      flex: 1;
    }
  }
}
</style>