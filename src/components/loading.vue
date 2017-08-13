<template>
  <div>加载中</div>
 
</template>
<script>
  import {INDEX_searchState,INDEX_defaultData} from '../vuex/actions_type'
  import {INDEXGET_ADD,INDEXGET_defaultData,INDEXGET_newPeople} from '../vuex/getters_type'
  import {mapActions,mapGetters} from "vuex";


  
export default {
  name: 'index',
  data(){
    return {
    }
  },
 
  computed:{
    
  },
  
  mounted(){
   console.log()
  
 
     this.indexDefaultFn(this)
    
  },
  methods:{
      ...mapActions({
            indexDefaultFn:INDEX_defaultData.actions
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topPadding{
  
}
  ul{
    font-size:0.4rem
  }
  .mint-loadmore{
    font-size:0.48rem
  }
</style>
