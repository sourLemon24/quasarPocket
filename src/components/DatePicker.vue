<template>
  <div class="flex column content-start">
    <q-date
      title="Календарь"
      mask="YYYY-MM-DD" 
      v-model="dateRange"
      @input="updateDataWithPeriod"
      range
    />
    <q-btn
      flat
      color="primary"
      label="Показать все транзакции"
      @click="clearFilter"></q-btn>
  </div>
</template>

<script>
import { date as quasarDate } from 'quasar'

  export default {
    data() {
      return {
        dateRange: quasarDate.formatDate(Date.now(), 'YYYY-MM-DD')
      }
    },
    methods: {
      async updateDataWithPeriod () {
        const periodData = {
          start_date: this.dateRange?.from,
          end_date: this.dateRange?.to
        }
        try{
        await this.$store.dispatch("getTransactions", periodData)
        await this.$store.dispatch("getCategories", periodData)
        } catch (e) {
          console.log('updateDataWithPeriod error', e)
        }
      },
      async clearFilter () {
        try{
        await this.$store.dispatch("getTransactions", {})
        await this.$store.dispatch("getCategories", {})
        } catch (e) {
          console.log('clearFilter error', e)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>