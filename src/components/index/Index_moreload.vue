<style scoped>
  .loadmore{
    width:7.5rem;
    font-size:0.24rem;
    background:#f0f2f5;
    overflow:hidden;
  }
  .loadmore dl{
    width:3.72rem;
    float:left;
    background:white;
    margin:0.05rem 0;
  }
  .loadmore dl:nth-child(even){
    float:right;
  }
   .loadmore dl dt{
    width:100%
  }
   .loadmore dl dt img{
    width:100%;
  }
   .loadmore dl dd {
    width:100%;
    padding:0.1rem;
    box-sizing:border-box;
  }
   .loadmore dl dd p:nth-child(2){
    color:#f23030;
    text-align:left;
    margin:0.1rem 0
  }
  .loadmore dl dd p:nth-child(1){
    
    display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;
  }
   .loadmore dl dd p:nth-child(3){
   overflow:hidden;
  }
  .loadmore dl dd p:nth-child(3) span{
   float:left
  }
   .loadmore dl dd p:nth-child(3) span:nth-child(2){
   float:right;
  }
   h2{
   height:0.77rem;
  }
  h2 img{
     width:1.2rem;
  }
</style>


<template>
  <div class="loadmore" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="20">
    <h2 :style="{background:'url('+getLaodMoreTitle.bgimg+') no-repeat',backgroundSize:'7.5rem 0.77rem'}">
      <img :src="getLaodMoreTitle.classImg" alt="">
    </h2>
    <dl v-for="i in getLaodMore" >
      <router-link :to="{name:'ProjectDetail',params:{detail:i}}">
        <dt><img :src="i.img" alt=""></dt>
        <dd>
          <p>{{i.text}}</p>
          <p>￥{{i.price}}</p>
          <p>
            <span>好评率{{i.discuss}}%</span>
            <span>找相似</span>
          </p>
          <p>{{i.content}}</p>
        </dd>
      </router-link> 

      
    </dl>
    <section><button @click="clickMore">点击更多</button></section>
  </div>
</template>
<script>
// import { InfiniteScroll } from 'mint-ui';
  import {mapActions,mapGetters,mapState} from 'vuex'
  import {INDEXGET_jd_load_more,INDEXGET_jd_load_moretitle,INDEXGET_jd_load_moreloadNum} from '../../vuex/getters_type'
  import {INDEX_loadMoreAdd,INDEX_loadMoreNum} from '../../vuex/actions_type'
  export default {
    name: 'carrousel',
    props:["everyMainData"],
    data() {
      return {
        swiperOption: {
          autoplay: 1000,        
          pagination : '.swiper-pagination',
          paginationClickable :true
        },
         loading:false,
      }
    },
    computed: {
      swiper() {
        return this.$refs.mymain.swiper
      },
      ...mapGetters({
        getLaodMore:INDEXGET_jd_load_more,
        getLaodMoreTitle:INDEXGET_jd_load_moretitle,
        num:INDEXGET_jd_load_moreloadNum
      })
    },
    mounted() {
        console.log(this.num)
    },
    methods:{
       loadMore(){
        //  console.log("moreload12345678")
         if(this.num<3){
           this.loading=true;
           this.getmore(this)
           this.numHandle()
         }
       },
       clickMore(){
         this.getmore(this)
          this.numHandle()
       },
       ...mapActions({
         getmore:INDEX_loadMoreAdd.actions,
         numHandle:INDEX_loadMoreNum.actions
       })
    }
  }
</script>
<style>
  a{
    text-decoration:none;
    color: #333
  }
</style>
