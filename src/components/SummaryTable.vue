<template>
  <div>
    <q-table
      class="summary-table"
      :data="data"
      :columns="columns"
      row-key="name"
      hide-bottom
      separator="vertical"
    >
      <template v-slot:top>
        <span>Summary</span>

        <q-space />

        <q-btn
          flat
          icon="data_saver_on"
          label="Add category" />  
      </template>

    </q-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
      {
        name: 'expenses',
        required: true,
        label: 'Расходы',
        align: 'left',
        field: 'expenses',
        format: val => `${val}`,
      },
      {          
        name: 'total',
        required: true,
        label: 'Сумма',
        align: 'left',
        field: 'total',
        format: val => `${val}`,},
    ],
    data: [
        {
          expenses: 'Technology',
          total: '999999K',
        },
        {
          expenses: 'Games',
          total: '999999K',
        }
      ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>