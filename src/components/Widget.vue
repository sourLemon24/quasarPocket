<template>
  <q-card class="widget-card flex no-wrap q-ma-sm" :style="{backgroundColor: color}">
    <q-card-section class="full-height flex justify-center items-center">
      <q-icon
        :style="{color: deepColor}"
        name="checklist_rtl"
        size="xl"/>
      <div class="text-bold">
        {{period}}
      </div>
    </q-card-section>
    
    <div>
      <q-card-section class="q-pa-none flex items-center">
      <div class="">
        <q-card-actions class="float-right q-pa-none q">
          <q-btn 
            flat 
            icon="delete"
            @click="deleteWidget"/>
        </q-card-actions>
        <span class="block q-mt-md ">Тратить на {{category.name}} {{condition}} {{+limit}} рублей</span>

      </div>
      <div class="text-h6 q-mt-sm">
        {{+transaction_sum || 0}} / {{+limit}}
      </div>
    </q-card-section>
    </div>
  </q-card>
</template>

<script>
  export default {
    mounted() {
      console.log('deepColor', this.deepColor)
    },
    props: {
      validity: {
        type: String,
        default: ''
      },
      id: {
        type: Number,
        default: null
      },
      color: {
        type: String,
        default: ''        
      },
      criterion: {
        type: String,
        default: ''
      },
      category: Object,
      limit: String,
      transaction_sum: String,
    },
    computed: {
      period() { // как лучше переписать?
        return this.validity === 'day' ? 'день' :
          this.validity === 'week' ? 'неделя' :
          this.validity === 'month' ? 'месяц' :
          'ошибка';
      },
      condition() {
        return this.criterion === 'more' ? 'больше' :
          this.criterion === 'less' ? 'меньше' :
          'ошибка';
      },
      deepColor() {
        return 'grey' 
      }

    },
    methods: {
      async deleteWidget() {
        try{
          await this.$store.dispatch("deleteWidget", this.id)
        } catch (e) {
          console.log('deleteWidget', e)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>