<template>
  <swiper :options="swiperOption" ref="mySwiper" class="banner">
    <!-- slides -->

    <swiper-slide v-for="i in getBanner"><img :src="i.img" alt=""></swiper-slide>
   
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
   
    
  </swiper>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex'
  // import {INDEXGET_defaultData} from '../../vuex/actions_type'
  import {INDEXGET_defaultBanner} from '../../vuex/getters_type'
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 1000,        
          pagination : '.swiper-pagination',
          paginationClickable :true,
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
        getBanner:INDEXGET_defaultBanner
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
  ul{
    font-size:0.4rem
  }
  .mint-loadmore{
    font-size:0.48rem
  }
  .banner{
    width:100%;
   
  }
   .banner img{
    width:100%;
  }
</style>
