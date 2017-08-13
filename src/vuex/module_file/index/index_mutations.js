import actions_type from "../../actions_type"

export default {
    [actions_type.INDEX_ADD.mutations](store) {
        console.log("add_MUTATIONS")

    },
    [actions_type.INDEX_defaultData.mutations](store, data, _this) {

        store.index.defaultData = data.fomatData

        // data._this.$router.push("/index")
        console.log("add_MUTATIONS")

    },
    [actions_type.INDEX_searchState.mutations](store, data) {
        // console.log(data)
        store.indexSearchState = data

    },
    [actions_type.INDEX_loadMoreAdd.mutations](store, data) {
        store.index.defaultData.loadmore.push(...data)
    },
    [actions_type.INDEX_loadMoreNum.mutations](store, data) {
        store.index.num++
    }
}