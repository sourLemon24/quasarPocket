<template >
<div class="row">
  <div class="col-8">
    <EcommerceTable/>
  </div>
  <div>
  </div>
</div>
</template>

<script>
import EcommerceTable from '../components/EcommerceTable.vue'

export default {
    components: {
    EcommerceTable
  },
  data () {
    return {
      title: 'Test select',
      
    }
  },

}
</script>

<style lang="scss" scoped>

</style>