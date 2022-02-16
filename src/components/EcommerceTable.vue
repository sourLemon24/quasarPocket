<template>
  <q-table
    class="eccomerce-table"
    :data="data"
    :columns="columns"
    row-key="name"
    @row-click="rowClick"
    hide-bottom
    separator="horizontal"
  >
    <template v-slot:header-cell-addIcon="props">
      <q-th :props="props">
        <q-btn
          flat
          icon="data_saver_on"
          label="Add item" /> 
      </q-th>
    </template>
  </q-table>
</template>

<script>

export default {
  data () {
    return {
      columns: [
        {
          name: 'date',
          required: true,
          label: 'Date',
          align: 'left',
          field: 'date',
          format: val => `${val}`,
        },
        {          
          name: 'cathegory',
          required: true,
          label: 'Cathegory',
          align: 'left',
          field: 'cathegory',
          format: val => `${val}`,},
        {
          name: 'total',
          required: true,
          label: 'Total',
          align: 'left',
          field: 'total',
          format: val => `${val}`,
        },
                {
          name: 'addIcon',
          required: true,
          align: 'center',
          field: 'addIcon',
          format:  val => `${val || ''}`,
        },        
      ],
      data: [
        {
          date: '29.01.2022',
          cathegory: 'Tehnology',
          total: '11.4k',
        },
               {
          date: '29.01.2022',
          cathegory: 'Tehnology',
          total: '11.4k',
        }
      ],

    }
  },
  methods: {
  addData () {
    console.log("addData")
  },
  rowClick(evt, row) {
    console.log('row click', evt, row)
  }
}
}
</script>

<style lang="scss" scoped>

</style>
