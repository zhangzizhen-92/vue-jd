<style scoped>
  .section1{
    width:100%;
    overflow:hidden;
    font-size:0.24rem;
    box-sizing: border-box
   
  }
  .section1 li{
    overflow:hidden;
    width:3.53rem;
    float:left;
    height:2rem;
    padding:0.1rem;
    border-right:0.01rem solid lightgray;
    border-top:0.01rem solid lightgray;
  }
   .section1 li:nth-child(even){
      border-right:none;
   }
  .section1 aside{
    width:50%;
    float:left;
    text-align:left;
  }
  .section1 aside p:nth-child(1){
    font-size:0.28rem;
    font-weight:bolder;
  }
  .section1 img{
    width:100%;
  }
  .section2{
    width:100%;
    overflow:hidden;
    font-size:0.24rem;
  }
  .section2 li{
    overflow:hidden;
    width:1.65rem;
    float:left;
    height:2rem;
    padding:0.1rem;
    border-right:0.01rem solid lightgray;
    border-top:0.01rem solid lightgray;
  }
   .section2 li:last-child{
      border-right:none;
   }
  .section2 aside{
    width:100%;
    float:left;
    text-align:left;
  }
  .section2 aside p:nth-child(1){
    font-size:0.28rem;
    font-weight:bolder;
  }
  .section2 img{
    width:100%;
  }


  h2{
   height:0.77rem;
  }
  h2 img{
     width:1.2rem;
  }
  .banner{
    width:7.3rem;
    margin:0.1rem;
    border-radius:0.1rem;
    overflow:hidden;
    margin-bottom: 0;
  }
  .banner img{
    width:100%;
    border-radius:0.1rem;
  }
</style>


<template>
<div>
  <h2 :style="{background:'url('+everyMainData.bgimg+') no-repeat',backgroundSize:'7.5rem 0.77rem'}"><img :src="everyMainData.classImg" alt=""></h2>
  <ul class="section1">
    <li v-for="(i,index) in everyMainData.firstData">
      <aside><p>{{i.name}}</p><span>{{i.text}}</span></aside>
      <aside><img :src="i.img" alt=""></aside>
    </li>
  </ul>
  <ul class="section2">
   <li v-for="(i,index) in everyMainData.secData">
      <aside><p>{{i.name}}</p><span>{{i.text}}</span></aside>
      <aside><img :src="i.img" alt=""></aside>
    </li>
  </ul>
   <swiper :options="swiperOption" ref="mymain" class="banner">
    <swiper-slide v-for="i in everyMainData.banner"><img :src="i.img" alt=""></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
  
</template>
<script>
  import {mapActions,mapGetters} from 'vuex'

  export default {
    name: 'carrousel',
    props:["everyMainData"],
    data() {
      return {
        swiperOption: {
          autoplay: 1000,        
          pagination : '.swiper-pagination',
          paginationClickable :true,
        }
      }
    },
    
    computed: {
      swiper() {
        return this.$refs.mymain.swiper
      },
     
   
    },
    mounted() {
        
    },
    methods:{
       
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
