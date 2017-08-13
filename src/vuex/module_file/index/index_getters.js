import getters_type from "../../getters_type"

export default {
    [getters_type.INDEXGET_ADD](store) {
        return store.data
    },
    // 获取首页初始化数据
    [getters_type.INDEXGET_defaultData](store) {
        return store.index.defaultData
    },
    [getters_type.INDEXGET_defaultBanner](store) {
        return store.index.defaultData.banner
    },
    [getters_type.INDEXGET_defaultTab](store) {
        return store.index.defaultData.tab
    },
    // 获取newpeople
    [getters_type.INDEXGET_newPeople](store) {
        return store.index.defaultData.bannerList[0]

    },
    // 获取fastNEWS
    [getters_type.INDEXGET_fastNews](store) {
        return store.index.defaultData.fastNews

    },
    [getters_type.INDEXGET_searchState](store) {
        return store.indexSearchState
    },
    // 获取jdms
    [getters_type.INDEXGET_jd_kill](store) {
        return store.index.defaultData.jdms
    },
    // 获取享品质
    [getters_type.INDEXGET_jd_enjoy_life](store) {
        return store.index.defaultData.xpz
    },
    // 获取享品质
    [getters_type.INDEXGET_jd_love_life](store) {
        return store.index.defaultData.lovelife
    },
    // 为您推荐
    [getters_type.INDEXGET_jd_load_more](store) {
        return store.index.defaultData.loadmore
    },
    // 为您推荐头部
    [getters_type.INDEXGET_jd_load_moretitle](store) {
        return store.index.defaultData.loadmoretitle
    },
    // 为您推荐头部
    [getters_type.INDEXGET_jd_load_moreloadNum](store) {
        return store.index.num
    }
}