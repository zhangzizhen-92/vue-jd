<template>
  <mt-loadmore class="topPadding" :top-method="loadTop" ref="loadmore">
  
    <index-banner></index-banner>
    <index-tab></index-tab>
    <div class="pre"><img :src="newPeole.banner1" alt=""></div>
    <index-news></index-news>
    <index-jd-kill></index-jd-kill>
    <index-every-main :everyMainData="getEnjoyLife"></index-every-main>
    <index-every-main :everyMainData="getLoveLife"></index-every-main>
    <index-more-load></index-more-load>
    <div class="pre"></div>
    <div class="pre"></div>
    
   
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'toploading'">Loading...</span>
    </div>
    <div slot="bottom" class="mint-loadmore-bottom">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'bottomloading'">Loading...</span>
    </div>
  </mt-loadmore>
</template>

<script>
  import {
    INDEX_searchState,
    INDEX_defaultData
  } from '../vuex/actions_type'
  import {
    INDEXGET_ADD,
    INDEXGET_defaultData,
    INDEXGET_newPeople,
    INDEXGET_jd_enjoy_life,
    INDEXGET_jd_love_life,
   
  } from '../vuex/getters_type'
  import {
    mapActions,
    mapGetters
  } from "vuex";
  import {
    Loadmore
  } from 'mint-ui';
  
  // 组件的引入
  import indexBanner from "./index/Index_banner.vue"
  import indexTab from "./index/Index_tab.vue"
  import indexNews from "./index/Index_news.vue"
  import indexJdKill from "./index/Index_jd_kill.vue"
  import indexEveryMain from "./index/Index_everymain.vue"
  import indexMoreLoad from "./index/Index_moreload.vue"
 
  
  export default {
    name: 'index',
    data() {
      return {
        allLoaded: false,
        loadmore: "one",
        topStatus: "top"
      }
    },
  
    computed: {
      getList() {
        return this[INDEXGET_ADD]
      },
      ...mapGetters({
        defaultData: INDEXGET_defaultData,
        newPeole: INDEXGET_newPeople,
        getEnjoyLife: INDEXGET_jd_enjoy_life,
        getLoveLife: INDEXGET_jd_love_life,

      })
    },
    components: {
      Loadmore: Loadmore,
      indexBanner: indexBanner,
      indexTab: indexTab,
      indexNews: indexNews,
      indexJdKill: indexJdKill,
      indexEveryMain: indexEveryMain,
      indexMoreLoad:indexMoreLoad
     
    },
    mounted() {
      this.searchStateFn(true)
    },
    destroyed() {
      this.searchStateFn(false)
    },
    methods: {
      loadTop() {
        // 加载更多数据
        var _this = this
        _this.topStatus = "toploading"
        this.searchStateFn(false)
        setTimeout(function() {
  
          _this.topStatus = "topload"
          _this.searchStateFn(true)
          _this.$refs.loadmore.onTopLoaded();
        }, 1000)
      },
      loadBottom() {
        console.log(234)
        var _this = this
        _this.topStatus = "bottomloading"
        setTimeout(function() {
          _this.topStatus = "bottomload"
          // _this.allLoaded = true;// 若数据已全部获取完毕
          _this.$refs.loadmore.onBottomLoaded();
        }, 1000)
      },
  
      ...mapActions({
        searchStateFn: INDEX_searchState.actions,
        indexDefaultFn: INDEX_defaultData.actions
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topPadding {}
  
  .pre {
    width: 100%;
  }
  
  .pre img {
    width: 100%;
  }
  
  ul {
    font-size: 0.4rem
  }
  
  .mint-loadmore {
    font-size: 0.48rem
  }
</style>
