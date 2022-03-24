import api from "@/api/index.js"

export default {
  state: {
    widgets: [],
    showModalAddWidget: false
  },
  
  mutations: {
    GET_WIDGETS: (state, resp) => {
      state.widgets = resp
      console.log('виджеты, полученыые от сервера через cocтояние', state.widgets)
    },
    ADD_WIDGET: (state, data) => {
      state.widgets.splice(0, 0, data)
    },
    SHOW_ADD_WIDGET_MODAL: (state) => {
      state.showModalAddWidget = true
      // console.log('сработал мутатор для showModal')
    }
  },
  actions: {
    getWidgets: async ({commit}) => {
      try {
        const widgets = await api.getWidgets().then(r => r.data)
        commit('GET_WIDGETS', widgets)
      } catch (e) {
        console.log('Ошибка в store/widgets/getWidgets', e)
      }
    },
    addWidget: async ({commit, state, dispatch}, data) => {
      try{
        const resp = await api.addWidget(data)
        console.log('Был добавлен виджет', resp)
        commit('ADD_WIDGET', resp.data)  
        dispatch('getWidgets')
        console.log('новый список виджетов в сторе', state.widgets)
      } catch (e) {
        console.log('Ошибка добавления виджета', e)
        throw e
      }
    },
    deleteWidget: async ({state, dispatch}, data) => {
      try{
        await api.deleteWidget(data)
        console.log('Был удален виджет с id: ', data)
        dispatch('getWidgets')
        console.log('новый список виджетов в сторе', state.widgets)
      } catch (e) {
        console.log('Ошибка удаления виджета', e)
        throw e
      }
    },
  },
  getters : {
  }
}