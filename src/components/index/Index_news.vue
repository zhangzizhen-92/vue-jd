<template>
  <div class="jd_news">
  <button>更多</button>
    <img src="/image/icon/jd_news.png" alt="">
    <swiper :options="swiperOption" ref="mySwiper" class="banner">
      <swiper-slide v-for="i in getFastNews">{{i.text}}</swiper-slide>
    </swiper>
    
  </div>
  
</template>
<script>
  import {mapActions,mapGetters} from 'vuex'

  import {INDEXGET_fastNews} from '../../vuex/getters_type'
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 1000,
          direction : 'vertical',
         
        }
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      
      ...mapGetters({
        getFastNews:INDEXGET_fastNews
      })
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      console.log(this.getBanner)
      // this.swiper.slideTo(0, 1000, false)
    },
    methods:{
     
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .jd_news{
   overflow:hidden;
   
    padding:0.2rem;
    height:0.4rem
 }
  .jd_news img{
   float:left;
   width:1.6rem;
   padding-top:0.02rem
 }
  .jd_news .banner{
   float:left;
   width:4rem;
   font-size:0.32rem;
   text-align:left;
   padding-left:0.2rem
 }
  .jd_news button{
   float:right;
   font-size:0.28rem;
   padding:0 0.2rem;
   border-left:1px solid #ccc;
 }
</style>
