<template>
    <swiper :options="swiperOption" ref="mytabSwiper">

        <swiper-slide v-for="(i,index) in boxList">
          <ul>
            <li v-for="item in datalist(index)">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>

        </swiper-slide>
   
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import { mapActions, mapGetters}from 'vuex' 
    import {INDEXGET_defaultTab} from '../../vuex/getters_type'
  export default {
    name: 'carrousel',
    data(){
      return {
        swiperOption: {
          grabCursor : true,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mytabSwiper.swiper
      },
      boxList(){
        console.log(this.originData)
        console.log(Math.ceil(this.originData.length/10))
        return Math.ceil(this.originData.length/10)
      },
     
      ...mapGetters({
        originData:INDEXGET_defaultTab
      })
      
    },
    methods: {
       datalist(i){

        return this.originData.slice(i*10,(i+1)*10)
      },
    },
    mounted(){
     
    }
  }
</script>

<style scoped>
 ul{
    width:100%;
    overflow:hidden;
    font-size:0.28rem;
 }
 ul li{
    width:16%;
    padding:0.2rem 2%;
    float:left;

 }
  ul li img{
    width:60%;
 }
</style>