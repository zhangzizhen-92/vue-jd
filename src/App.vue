<template>
  <div id="app">
    <index-search v-if="indexSearchState"></index-search>
    <index-footer></index-footer>
    <router-view></router-view>
  </div>
</template>

<script>
import indexSearch from "./components/index/Index_search.vue"
import indexFooter from "./components/index/Index_footer.vue"
import {INDEXGET_searchState} from "./vuex/getters_type"
import {mapGetters} from "vuex"
export default {
  name: 'app',
  components:{
    indexSearch:indexSearch,
    indexFooter:indexFooter
  },
  created(){
    console.log(this)
    console.log(this.$route)
    
    this.$router.push({name:'Loadding',params:{id:this.$route.path}})
  },
  computed:{
    ...mapGetters({
      indexSearchState:INDEXGET_searchState
    })
  },
  mounted(){
  }
}
</script>

<style>
html,body{
  height:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
