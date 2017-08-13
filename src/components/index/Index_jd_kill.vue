<style scoped>
  .title{
    font-size:0.34rem;
    overflow:hidden;
  }
  .title li{
    float:left;
    height:0.7rem;
    line-height:0.7rem
  }
   .title li img{
    width:1.5rem;
  }
   .title li:last-child{
    float:right;
    font-size:0.28rem;
    margin-right:0.1rem;
    color:red;
  }
   .title li:nth-child(2){
    margin:0 0.1rem;
    font-weight:bold
  }
  .bottom{
    width:100%;
    overflow:hidden;
    font-size:0.24rem;
    margin-top:0.1rem;
  }
  .bottom li{
    overflow:hidden;
    width:1.64rem;
    float:left;
    height:2rem;
    padding:0.1rem;
    border-right:0.01rem solid lightgray;
    border-top:0.01rem solid lightgray;
  }
  .bottom aside{
    float:left;
    text-align:left;
  }
  .bottom aside p:nth-child(1){
    font-size:0.28rem;
    font-weight:bolder;
  }
  .bottom img{
    width:100%;
  }
  .bottom li:first-child{
    width:3.54rem;
  }
  .bottom li:first-child aside{
    width:50%;
  }
  .bottom li:last-child{
    border-right:none
  }
  .banner img{
    width:80%;
  }
  .banner .swiper-wrapper{
    
  }
  .everyBanner{
      width:2.1rem;
      font-size:0.24rem
  }
  .everyBanner .onep{
      color:red;
      font-size:0.28rem;
      margin:0.1rem 0;
      font-weight:bolder;
          
  }
</style>


<template>
<div>
  <ul class="title">
    <li><img :src="getJdKill.img" alt=""></li>
    <li>{{endTime}}点场</li>
    <li>{{richTime}}</li>
    <li>{{getJdKill.route.text}}</li>
  </ul>
  <swiper :options="swiperOption" ref="mykill" class="banner">
    <!-- slides -->
    <swiper-slide v-for="(i,index) in getJdKill.srollData" class="everyBanner">
      <img :src="i.img" alt="">
      <p class="onep">{{i.currentPrice}}</p>
      <p>{{i.originPrice}}</p>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  <ul class="bottom">
    <li v-for="(i,index) in getJdKill.otherData" :v-if="index<2">
      <aside><p>{{i.name}}</p><span>{{i.text}}</span></aside>
      <aside><img :src="i.img" alt=""></aside>
    </li>
    
  </ul>
</div>
  
</template>
<script>
  import {mapActions,mapGetters} from 'vuex'
  // import {INDEXGET_defaultData} from '../../vuex/actions_type'
  import {INDEXGET_jd_kill} from '../../vuex/getters_type'
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          // autoplay: 1000,        
          // pagination : '.swiper-pagination',
          // paginationClickable :true,
          slidesPerView:"auto"
        },
        richTime:null
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      endTime(){
        return new Date(this.getJdKill.endTime).getHours()
      },
     
      ...mapGetters({
        getJdKill:INDEXGET_jd_kill
      })
    },
    mounted() {
        this.fagTime()
        // this.refs.mykill.slideTo(0, false)
    },
    methods:{
       fagTime(){
         var _this=this
        var alltime=new Date(this.getJdKill.endTime)*1-new Date(this.getJdKill.currentTime)*1
          console.log(this)
        setInterval(function(){
            alltime=alltime-1000
             var hour=Math.floor(alltime/3600/1000)
              var mint=Math.floor(alltime%(3600*1000)/(1000*60))
              var sec=Math.floor(alltime%(3600*1000)%(1000*60)/1000)

              _this.richTime=hour+":"+mint+":"+sec
        },1000)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
