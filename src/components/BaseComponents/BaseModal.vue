<template>
  <div>
    <q-dialog
      @input="updateShowModal" 
      :value="showModal"
      @hide="clearModalValue">
      <q-card>
        <q-card-section class="flex">
          <div class="text-h6">{{title}}</div>
          <div v-if="widget">
            <q-btn 
              flat 
              icon="brush"
              size="10px">
              <q-menu
                anchor="top right"
                self="top left">
                <q-color
                  @input="updateColor"
                  :value="color"
                  flat
                  dark
                  bordered
                  no-header
                  no-footer
                  default-view="palette"
                  :palette="['#E5F5FF', '#E4F6E8', '#FFF0E9', '#F7F4FF',
                    '#FFE5E5', '#E4E8F6', '#FCE9FF', '#EDEDED']"
                />
              </q-menu>
            </q-btn>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div v-if="widget">
            <q-btn-toggle
              toggle-color="primary"
              @input="updateCriterion"
              :value="criterion"
              :options="[
                {label: 'Больше', value: 'more'},
                {label: 'Меньше', value: 'less'},
              ]"
            />
          </div>
          <div v-else>
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
          <template v-else-if="widget">
            <q-select  
              @input="updateCategoryId"
              :value="categoryId" 
              :options="optionsSelect" 
              label="Категория"
              map-options
              emit-value />
            <q-input  
              @input="updateLimit"
              :value="limit"  
              label="Лимит" />
            <q-select  
              @input="updateValidity"
              :value="validity" 
              :options="[
                {label: 'День', value: 'day'},
                {label: 'Неделя', value: 'week'},
                {label: 'Месяц', value: 'month'},
              ]" 
              label="Срок"
              map-options
              emit-value />
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
      widget: {
        type: Boolean,
        default: false
      },
      criterion: {
        type: String,
        default: ''
      },
      limit: {
        type: String,
        default: ''
      },
      validity: {
        type: String,
        default: ''
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
        default: null
      },
      optionsSelect: {
        type: Array,
        default: null
      },
      color: {
        type: String,
        default: ''
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
      updateColor(value) {
        this.$emit('update:color', value)
      },
      updateCriterion(value) {
        this.$emit('update:criterion', value)
      },
      updateLimit(value) {
        this.$emit('update:limit', value)
      },
      updateValidity(value) {
        this.$emit('update:validity', value)
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