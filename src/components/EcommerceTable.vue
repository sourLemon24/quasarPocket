<template>
<div>
    <q-table
    class="eccomerce-table"
    :data="$store.state.transactions.transactions"
    :columns="columns"
    row-key="name"
    hide-bottom
    separator="horizontal"
    virtual-scroll
    :rows-per-page-options="[0]"
  >
    <template v-slot:body="props">
      <q-tr 
        :props="props"
        :class="classIncome(props)">
        <q-td
          v-for="col in props.cols"
          :key="col.id">
          {{col.value}}
        </q-td>
      </q-tr>
    </template>
    <template v-slot:header-cell-addIcon="props">
      <q-th :props="props">
        <q-btn
          flat
          icon="data_saver_on"
          label="Add item" 
          @click="showModal = true"/> 
      </q-th>
    </template>
  </q-table>

  <q-dialog v-model="showModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Добавить данные</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="">
            <q-btn-toggle
              v-model="typeCategory"
              toggle-color="primary"
              :options="[
                {label: 'Расходы', value: 'expense'},
                {label: 'Доходы', value: 'income'},
              ]"
            />
          </div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="transactionDate" label="Дата" hint="YYYY-MM-DD"/>
          <q-select 
          v-model="categoryId" 
          :options="options"
          map-options
          emit-value
          label="Категория" />
          <q-input v-model="amount" label="Сумма" />
        </q-card-section>

        <q-card-actions>
          <q-btn 
            flat 
            label="Добавить" 
            color="primary" 
            v-close-popup
            @click="addTransaction"
             />
        </q-card-actions>
      </q-card>
    </q-dialog>
</div>
</template>

<script>

export default {
  data () {
    return {
      showModal: false,
      typeCategory: null,
      transactionDate: null,
      categoryId: null,
      amount: null,

      columns: [
        {
          name: 'date',
          required: true,
          label: 'Date',
          align: 'left',
          field: row => row.transaction_date,
          format: val => `${val}`,
        },
        {          
          name: 'cathegory',
          required: true,
          label: 'Cathegory',
          align: 'left',
          field: row => row.category.name,
          format: val => `${val}`,},
        {
          name: 'total',
          required: true,
          label: 'Total',
          align: 'left',
          field: row => row.amount,
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

    }
  },
  methods: {
    async addTransaction() {
      const data = {
          category: this.categoryId,
          transaction_date: this.transactionDate,
          amount: this.amount
        }

        try{
          await this.$store.dispatch("addTransaction", data)
        } catch (e) {
          console.log('addTransaction error', e)
        }
    },
    classIncome(props) {
      return {
        'text-green': props.row.category.category_type === 'income'
      }
    }
  },
  computed: { 
    options() {
      return this.$store.state.categories.categories
      .map(item => {
        return {
          label: item.name,
          value: item.id,
          category: item.category_type
          }
      })
      .filter(item => {
        if(this.typeCategory == null) return item
        return item.category == this.typeCategory
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
