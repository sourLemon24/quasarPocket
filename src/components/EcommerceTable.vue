<template>
<q-layout>
    <q-page-container>
    <q-page class="col">
      <q-table
        class="col-3"
        :data="data"
        :columns="columns"
        row-key="name"
        @row-click="rowClick"
      >
        <template v-slot:header-cell-addIcon="props">
          <q-th :props="props">
            <q-icon 
              name="data_saver_on"
              size="1.5em"
              @click="addData"
              style="cursor: pointer">
            </q-icon>
          </q-th>
        </template>
      </q-table>
      <q-icon
        name="api"
      ></q-icon>
    </q-page>
  </q-page-container>
</q-layout>
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
          headerStyle: 'background-color: pink'
        },        
        {
          name: 'add-item',
          required: true,
          label: 'add-item',
          align: 'center',
          field: 'add-item',
          format: val => `${val  || ''}`,
        },
      ],
      data: [
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
