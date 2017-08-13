<template>
  <div class="footer">
    <dl>
      <dt></dt>
      <dd>推荐</dd>
    </dl>
    <dl>
      <dt></dt>
      <dd>分类</dd>
    </dl>
    <dl>
      <dt></dt>
      <dd>发现</dd>
    </dl>
     <dl>
      <dt></dt>
      <dd>购物车</dd>
    </dl>
    <dl>
      <dt></dt>
      <dd>我的</dd>
    </dl>
  </div>
</template>

<script>
  import { mapActions, mapGetters}from 'vuex' 
 
  export default {
    name: 'footer',
    data(){
      return {
       
      }
    },
    computed: {
      
      
    },
    methods: {
      
    },
    mounted(){
   
     
    }
  }
</script>

<style scoped>
  .footer{
     width: 100%;
    z-index: 1000;
    height: 1rem;
    position: fixed;
    bottom: 0;
    background: #fff;
    display: flex;
  }
  .footer dl{
    flex: 1;
    text-align:center;
    padding: .2rem;
    color: #666;
  }
  .footer dl dt{
    margin: 0 auto;
    width:.4rem;
    height: .4rem;
  
  }
  .footer dl dd{
    font-size: .12rem
  }
   .footer dl:nth-child(1) dt{
    background:URL("./image/jdsprites.png") 0 0 no-repeat;
    background-size: 4rem;
  }
  .footer dl:nth-child(2) dt{
    background:URL("./image/jdsprites.png") 0 -25px no-repeat;
    background-size: 4rem;
  }
  .footer dl:nth-child(3) dt{
    background:URL("./image/jdsprites.png") 0 0 no-repeat;
    background-size: 4rem;
  }
  .footer dl:nth-child(4) dt{
    background:URL("./image/jdsprites.png") 0 0 no-repeat;
    background-size: 4rem;
  }
  .footer dl:nth-child(5) dt{
    background:URL("./image/jdsprites.png") 0 0 no-repeat;
    background-size: 4rem;
  }
</style>