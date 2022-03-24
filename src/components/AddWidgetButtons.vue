<template>
  <div>
    <div class=" row q-ma-sm flex add-widget-buttons justify-center">
      <q-btn
        class="col-6 q-py-md"
        icon="arrow_back"
        :disable="previousDisable"
        @click="$emit('previous-widgets-frame')" />
      <q-btn
        class="col-6 q-py-md"
        icon="arrow_forward"
        :disable="nextDisable"
        @click="$emit('next-widgets-frame')" />
      <q-btn
        @click="showModal"
        class="col-12 full-width q-py-md q-ma-xs"
        label="Add widget" />
    </div>
  </div>
</template>

<script>
  import store from "@/store/"

  export default {
    props: {
      nextDisable: Boolean,
      previousDisable: Boolean
    },
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