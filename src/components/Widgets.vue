<template>
<div>
  <div class="flex widgets-wrapper column flex-center">
    <widget
      v-for="(item, index) in widgetsList"
      :key="item.id"
      :currentIndex="index + widgetsFrameCurrentFirst * 2 + 1"
      v-bind="item"/>
    <add-widget-buttons
      @next-widgets-frame="widgetsFrameCurrentFirst += 1"
      @previous-widgets-frame="widgetsFrameCurrentFirst -= 1"
      :nextDisable="nextDisableButton"
      :previousDisable="previousDisableButton" />
  </div>
      <BaseModal
        widget
        :showModal.sync="$store.state.widgets.showModalAddWidget"
        :optionsSelect="options"
        title="Добавить виджет"
        btnLabel="Добавить"
        v-bind.sync="widget"
        :categoryId.sync="widget.category"
        @click="addWidget"
        @clearModalValue="clearModalValue"
         />
</div>
</template>

<script>
import Widget from '../components/Widget.vue'
import AddWidgetButtons from '../components/AddWidgetButtons.vue'
import BaseModal from './BaseComponents/BaseModal.vue'

const initialWidget = () => ({
        category: null,
        limit: null,
        validity: null,
        criterion: null,
        color: null
})

export default {
  mounted() {
    console.log('widgetsList', this.widgetsList)
  },
  components: {
    Widget, AddWidgetButtons, BaseModal
  },
  data() {
    return {
      widget: initialWidget(),
      widgetsFrameCurrentFirst: 0,

    }
  },
  computed: {
    options() {
      return this.$store.state.categories.categories
      .map(item => ({
          label: item.name,
          value: item.id,
          category: item.category_type
      }))
      .filter(item => item.category == 'expense')
    },
    widgetsList() {
      return this.$store.state.widgets.widgets.slice(this.widgetsFrameCurrentFirst*2, this.widgetsFrameCurrentFirst*2 + 5)
    },
    widgetsFrameLast() {
      return Math.ceil(this.$store.state.widgets.widgets.length/2)
    },
    previousDisableButton() {
      return this.widgetsFrameLast < 3 || this.widgetsFrameCurrentFirst === 0
    },
    nextDisableButton() {
      return this.widgetsFrameCurrentFirst + 2 >= this.widgetsFrameLast
    }
  },
  methods:{
    async addWidget() {
      console.log('this.widget', this.widget)
      try{
        await this.$store.dispatch("addWidget", this.widget)
      } catch (e) {
        console.log('addWidget error', e)
      }
    },
    clearModalValue() {
      this.widget = initialWidget()
    }
  }  
}
</script>

<style lang="scss" scoped>

</style>