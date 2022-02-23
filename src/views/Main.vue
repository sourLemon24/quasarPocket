<template >
<div>
  <div class="row q-ml-xl">
    <div class="col-8">
      <h3 class="text-grey-8 q-ml-xl">Pockets</h3>
    </div>
    <div class="col flex justify-center items-center">
      <q-avatar color="orange" text-color="white" font-size="40px" icon="account_circle" />
      <h6 class="text-grey-8 q-ml-sm">Hi, {{this.$store.state.auth.username}}</h6>
    </div>
  </div>
  <div class="row q-ml-xl">
    <div class="col-8 flex justify-between no-wrap">
      <EcommerceTable/>
      <SummaryTable/>
    </div>
    <div class="col q-ml-xl">
      <q-date v-model="model" range />
    </div>
  </div>
</div>
</template>

<script>
import EcommerceTable from '../components/EcommerceTable.vue'
import SummaryTable from '../components/SummaryTable.vue'
import store from "@/store/"

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
        SummaryTable
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