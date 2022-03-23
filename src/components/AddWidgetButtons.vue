<template>
  <div>
    <div class="add-widget-buttons q-ma-sm flex column ">
      <q-btn
        class="full-width q-py-md q-ma-xs"
        icon="arrow_forward" />
      <q-btn
        @click="showModal"
        class="full-width q-py-md q-ma-xs"
        label="Add widget" />
    </div>
  </div>
</template>

<script>
  import store from "@/store/"

  export default {
    data() {
      return {
      }
    },
    methods: {
      showModal () {
        store.commit('SHOW_ADD_WIDGET_MODAL')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>