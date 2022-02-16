<template >
<div>
  <h3 class="text-grey-8 q-ml-xl">Pockets</h3>
  <div class="row q-ml-xl">
    <div class="col-8 flex justify-around">
      <EcommerceTable/>
      <SummaryTable/>
    </div>
    <div class="col row q-ml-xl">
        <q-date v-model="model" range />
        <div>
        </div>
    </div>
</div>

</div>
</template>

<script>
import EcommerceTable from '../components/EcommerceTable.vue'
import SummaryTable from '../components/SummaryTable.vue'

export default {
    components: {
    EcommerceTable,
        SummaryTable
  },
  data () {
    return {
      model: { from: '2020/07/08', to: '2020/07/17' },
      
    }
  },

}
</script>

<style lang="scss" scoped>

</style>