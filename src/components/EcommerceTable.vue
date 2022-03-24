<template>
<div>
    <q-table
    class="eccomerce-table q-ma-sm"
    card-class="bg-grey-1"
    :data="$store.state.transactions.transactions"
    :columns="columns"
    row-key="name"
    hide-bottom
    separator="horizontal"
    virtual-scroll
    :rows-per-page-options="[0]"
    :table-colspan="2"
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
            style="color: green" 
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
      <q-th 
        :props="props"
        class="add-transaction-button"
        colspan="100%">
        <q-btn
          flat
          icon="data_saver_on"
          label="Add transaction"
          @click="showModalAddTransaction = true"/> 
      </q-th>
    </template>
  </q-table>

    <base-modal
      transaction
      :showModal.sync="showModalAddTransaction"
      title="Добавить данные"
      btn-label="Добавить"
      :typeCategory.sync="typeCategory"
      :transactionDate.sync="transactionDate"
      :amount.sync="amount"
      :categoryId.sync="categoryId"
      :optionsSelect="options"
      @clearModalValue="clearModalValue"
      @click="addTransaction"
    />

    <base-modal
      transaction
      :showModal.sync="showModalEditTransaction"
      title="Редактировать транзакцию"
      btnLabel="Изменить"
      :typeCategory.sync="typeCategory"
      :transactionDate.sync="transactionDate"
      :amount.sync="amount"
      :categoryId.sync="categoryId"
      :optionsSelect="options"
      @clearModalValue="clearModalValue"
      @click="editTransaction"
    />
</div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import BaseModal from './BaseComponents/BaseModal.vue'

export default {
  components: {BaseModal},
  data () {
    return {
      showModalAddTransaction: false,
      showModalEditTransaction: false,
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
      console.log('props', props)
      this.showModalEditTransaction = true,
      this.typeCategory = props.row.category.category_type
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
      .map(item => ({
          label: item.name,
          value: item.id,
          category: item.category_type
      }))
      .filter(item => {
        if(this.typeCategory == null) return item
        return item.category == this.typeCategory
      })
    }
  },
  validations: {
    date: { required }
  }, 
}
</script>

<style lang="scss" scoped>

</style>
