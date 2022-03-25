<template>
  <div class="bg-grey-1 flex content-start column items-start global">
    <h6 class="text-grey-8 q-ma-sm">Global</h6>
    <div class="bg-white flex column q-ma-md date">
      <h4 class="text-grey-8 q-ma-sm">{{date}}</h4>
      <div class="flex full-width">
        <q-btn
        flat
        color="positive">Доходы: {{incomeCurrent}}</q-btn>
      <q-btn
        flat
        color="negative">Расходы: {{expenseCurrent}}</q-btn>
      </div>
      <q-separator />
      <h6 class="text-center text-grey-8 q-ma-sm">Хорошего дня ;)</h6>

    </div>
  </div>
</template>

<script>
import { date as quasarDate } from 'quasar'

  export default {
    data() {
      return {
      }
    },
    computed: {
      date () {
        return quasarDate.formatDate(Date.now(), 'MMMM YYYY')
      },
      monthDate () {
        return quasarDate.formatDate(this.date,'YYYY-MM')
      },
      filterDateTransactions () {
        return this.$store.state.transactions.transactions
          .filter(item => item.transaction_date.slice(0,7) === this.monthDate)
      },
      incomeCurrent () {
        return this.filterDateTransactions
          .filter(item => item.category.category_type === 'income')
          .map(item => +item.amount).reduce((sum, current) => sum + current, 0)
      },
      expenseCurrent () {
        return this.filterDateTransactions
        .filter(item => item.category.category_type === 'expense')
        .map(item => +item.amount).reduce((sum, current) => sum + current, 0)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>