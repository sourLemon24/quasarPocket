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
        <q-td>
          {{props.row.transaction_date}}
        </q-td>
        <q-td>
          {{props.row.category.name}}
        </q-td>
        <q-td>
          {{props.row.amount}}
        </q-td>
        <q-td>
          <q-btn 
            flat 
            style="color: #FF0080" 
            label="Edit" 
            @click="showModalEdit(props)"/>
        </q-td>
        <q-td>
          <q-btn 
            flat 
            style="color: #FF0080" 
            label="Delete" 
            @click="deleteTransaction(props)"/>
        </q-td>
      </q-tr>
    </template>
    <template v-slot:header-cell-editCategory="props">
      <q-th :props="props">
        <q-btn
          flat
          icon="data_saver_on"
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
    <q-dialog 
      v-model="showModalEditView"
      @hide="clearModalValue">
      <q-card>
        <q-card-section>
          <div class="text-h6">Редактировать транзакцию</div>
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
            label="Редактировать" 
            color="primary" 
            v-close-popup
            @click="editTransaction"
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
      showModalEditView: false,
      typeCategory: null,
      transactionDate: null,
      categoryId: null,
      amount: null,
      transactionId: null,

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
          name: 'category',
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
          name: 'editCategory',
          required: true,
          align: 'center',
          field: 'editCategory',
          format:  val => `${val || ''}`,
        },
        {
          name: 'deleteCategory',
          required: true,
          align: 'center',
          field: 'deleteCategory',
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
    async deleteTransaction(props) {
      try{
        await this.$store.dispatch("deleteTransaction", props.row.id)
      } catch (e) {
        console.log('addTransaction error', e)
      }
    },
    async editTransaction() {
      const data = {
        category: this.categoryId || undefined,
        transaction_date: this.transactionDate || undefined,
        amount: this.amount || undefined,
        transactionId: this.transactionId
      }
      

      try{
        await this.$store.dispatch("editTransaction", data)
      } catch (e) {
        console.log('editTransaction error', e)
      }
    },
    classIncome(props) {
      return {
        'text-green': props.row.category.category_type === 'income'
      }
    },
    showModalEdit(props) {
      this.showModalEditView = true,
      this.transactionDate = props.row.transaction_date
      this.amount = props.row.amount
      this.categoryId = props.row.category.id
      this.transactionId = props.row.id
    },
    clearModalValue() {
      this.transactionDate = null
      this.amount = null
      this.categoryId = null
      this.transactionId = null
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
