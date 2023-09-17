export default {
  namespaced: true,
  state() {
    return {
      searchList: [{
          "searchWord": "向云端",
          "score": 7433,
          "content": "",
          "source": 0,
          "iconType": 0,
          "iconUrl": null,
          "url": "",
          "alg": "alg_search_rec_hotquery_base_hotquery"
        },
        {
          "searchWord": "伍佰",
          "score": 7051,
          "content": "他看似粗犷，却比谁都温柔～",
          "source": 0,
          "iconType": 0,
          "iconUrl": null,
          "url": "",
          "alg": "alg_search_rec_hotquery_base_hotquery"
        },
        {
          "searchWord": "谁",
          "score": 6915,
          "content": "等那个谁，一起将爱情进行到底",
          "source": 0,
          "iconType": 0,
          "iconUrl": null,
          "url": "",
          "alg": "alg_search_rec_hotquery_base_hotquery"
        },
        {
          "searchWord": "当那一天来临",
          "score": 6197,
          "content": "放心吧祖国，为了胜利我要勇敢前进！",
          "source": 0,
          "iconType": 0,
          "iconUrl": null,
          "url": "",
          "alg": "alg_search_rec_hotquery_base_hotquery"
        },
        {
          "searchWord": "五月天",
          "score": 5934,
          "content": "深情最是 阿信词 怪兽曲♡",
          "source": 0,
          "iconType": 0,
          "iconUrl": null,
          "url": "",
          "alg": "alg_search_rec_hotquery_base_hotquery"
        },
      ],
      name: '13333'
    }

  },
  mutations: {
    setSearchList(state, searchList) {
      state.searchList = searchList
    }
  },
  actions: {
    changeSetSearchList({
      commit
    }, data) {
      commit('setSearchList', data)
    }
  }
}