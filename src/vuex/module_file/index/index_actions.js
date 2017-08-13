import actions_type from "../../actions_type"


export default {
    [actions_type.INDEX_ADD.actions]({ commit }) {
        console.log("add_ACTIONS")
        commit(actions_type.INDEX_ADD.mutations)
    },
    [actions_type.INDEX_defaultData.actions]({ commit }, _this) {


        _this.$http({
            url: "/api/index",
            method: "get"
        }).then(function(data) {

            // setTimeout(function() {
            var alldata = {
                fomatData: data.data,
            }
            var _path
            if (_this.$route.params.id == undefined) {
                _path = "/index"
            } else {
                _path = _this.$route.params.id

            }
            _this.$router.push(_path)

            commit(actions_type.INDEX_defaultData.mutations, alldata)
                // }, 3000)

        })

    },
    [actions_type.INDEX_searchState.actions]({ commit }, data) {

        commit(actions_type.INDEX_searchState.mutations, data)
    },
    // 再次加载更多
    [actions_type.INDEX_loadMoreAdd.actions]({ commit }, _this) {
        console.log(234543234)
        setTimeout(function() {
            console.log(_this.num)
            var data = _this.getLaodMore
            commit(actions_type.INDEX_loadMoreAdd.mutations, data)
            _this.loading = false;
        }, 3000)



    },
    [actions_type.INDEX_loadMoreNum.actions]({ commit }, data) {

        commit(actions_type.INDEX_loadMoreNum.mutations, data)
    },
}