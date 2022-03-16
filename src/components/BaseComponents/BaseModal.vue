<template>
  <div>
    <q-dialog
      @input="updateShowModal" 
      :value="showModal"
      @hide="clearModalValue">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{title}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="">
            <q-btn-toggle
              toggle-color="primary"
              @input="updateTypeCategory"
              :value="typeCategory"
              :options="[
                {label: 'Расходы', value: 'expense'},
                {label: 'Доходы', value: 'income'},
              ]"
            />
          </div>
        </q-card-section>

        <q-card-section>
          <template v-if="transaction">
            <q-input  
              @input="updateTransactionDate"
              :value="transactionDate" 
              label="Дата"
              hint="YYYY-MM-DD"/>
            <q-select  
              @input="updateCategoryId"
              :value="categoryId" 
              :options="optionsSelect" 
              label="Категория"
              map-options
              emit-value />
            <q-input  
              @input="updateAmount"
              :value="amount"  
              label="Сумма" />
          </template>
          <template v-else>
            <q-input
            @input="updateNameCategory"
            :value="nameCategory"
            label="Категория" 
            />
          </template>
        </q-card-section>

        <q-card-actions>
          <template v-if="editCategory">
            <q-btn 
            flat 
            label="Изменить" 
            color="primary" 
            v-close-popup
            @click="editButtonEvent"
             />
            <q-btn 
            flat 
            label="Удалить" 
            color="primary" 
            v-close-popup
            @click="deleteButtonEvent"
             />
          </template>
          <template v-else>
            <q-btn 
            flat 
            :label="btnLabel" 
            color="primary" 
            v-close-popup
            v-on="$listeners"
             />
          </template>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      btnLabel: {
        type: String,
        default: ''
      },
      editCategory: {
        type: Boolean,
        default: false
      },
      transaction: {
        type: Boolean,
        default: false
      },
      showModal: {
        type: Boolean,
        default: false
      },
      typeCategory: {
        type: String,
        default: ''
      },
      nameCategory: {
        type: String,
        default: ''
      },
      transactionDate: {
        type: String,
        default: ''
      },
      amount: {
        type: String,
        default: ''
      },
      categoryId: {
        type: Number,
        default: 0
      },
      optionsSelect: {
        type: Array,
        default: null
      }
    },
    methods: {
      updateTypeCategory(value) {
        this.$emit('update:typeCategory', value)
      },
      updateNameCategory(value) {
        this.$emit('update:nameCategory', value)
      },
      updateTransactionDate(value) {
        this.$emit('update:transactionDate', value)
      },
      updateAmount(value) {
        this.$emit('update:amount', value)
      },
      updateCategoryId(value) {
        this.$emit('update:categoryId', value)
      },
      updateShowModal(value) {
        this.$emit('update:showModal', value)
      },
      editButtonEvent() {
        this.$emit('editButtonClick')
      },
      deleteButtonEvent() {
        this.$emit('deleteButtonClick')
      },
      clearModalValue() {
        this.$emit('clearModalValue')
      }
    },

  }
</script>

<style lang="scss" scoped>

</style>