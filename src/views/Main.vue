<template >
<div class="row wrap q-ml-xl flex justify-center">
    <div class="col-sm-8">
      <h3 class="text-grey-8">Pockets</h3>
    </div>
    <div class=" col-sm-4 flex justify-start items-center q-pl-xl">
      <q-avatar color="orange" text-color="white" font-size="40px" icon="account_circle" />
      <h6 class="text-grey-8 q-ml-sm">Hi, {{$store.state.auth.username}}</h6>
    </div>
    <div class="col-sm-8 flex justify-around">
      <EcommerceTable/>
      <SummaryTable/>
    </div>
    <div class="col-sm-4 q-pl-xl">
      <date-picker></date-picker>
    </div>
    <div class="col-sm-8">
      <widgets/>
    </div>
    <div class="col-sm-4 q-pl-xl">
      <global></global>
    </div>
  </div>
</template>

<script>
import EcommerceTable from '../components/EcommerceTable.vue'
import SummaryTable from '../components/SummaryTable.vue'
import store from "@/store/"
import Widgets from '../components/Widgets.vue'
import DatePicker from '../components/DatePicker.vue'
import Global from '../components/Global.vue'

export default {
  
  async beforeRouteEnter(to, from, next) { 
    try {
      store.dispatch('getInitialData')
      // store.dispatch('getCategoty')
      next()
    } catch (e) {
      console.log('Ошибка предварительной загрузки данных на страницу', e)
    }
    
  },

  components: {
    EcommerceTable,
        SummaryTable,
        Widgets,
    DatePicker,
    Global
  },
  data () {
    return {
      model: { from: '2020/07/08', to: '2020/07/17' },
      user: null
      
    }
  },

}
</script>

<style lang="scss" scoped>

</style>