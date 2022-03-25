<template>
  <q-card 
    class="widget-card flex no-wrap q-ma-sm" 
    :style="{backgroundColor: color}"
  >
    <span class="absolute-top-left">{{currentIndex}} / {{$store.state.widgets.widgets.length}}</span>
    <q-card-section class="full-height flex justify-center">
      <q-icon
        :style="{color: deepColor}"
        name="checklist_rtl"
        size="xl"/>
      <div class="text-bold">
        {{period}}
      </div>
    </q-card-section>
    
    <div class="flex full-height items-between">
      <q-card-section class="q-pa-none flex ">
        <div class="">
          <q-card-actions class="float-right q-pa-none q">
            <q-btn 
              flat 
              icon="delete"
              @click="deleteWidget"/>
          </q-card-actions>
          <span class="block q-mt-md ">Тратить на {{category.name}} {{condition}} {{+limit}} рублей</span>

        </div>
      </q-card-section>
              <div class="text-h6 q-mt-sm">
          {{+transactions_sum}} / {{+limit}}
        </div>
    </div>
  </q-card>
</template>

<script>
  export default {
    mounted() {
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
      transactions_sum: String,
      currentIndex: Number
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
        return this.color.slice(0,1) + this.color.slice(2,3) + this.color.slice(4,5) + this.color.slice(6,7)
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