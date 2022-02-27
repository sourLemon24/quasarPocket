<template>
  <div>
    <q-dialog v-model="showModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{title}}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="">
            <q-btn-toggle
              toggle-color="primary"
              :options="[
                {label: 'Расходы', value: 'expense'},
                {label: 'Доходы', value: 'income'},
              ]"
            />
          </div>
        </q-card-section>

        <q-card-section>
          <template v-if="newCategory">
            <q-input
              @input="updateInputValue"
              label="Категория" 
              />
          </template>
          <template v-else>
            <q-input  
              v-model="date" 
              label="Дата"
              hint="YYYY-MM-DD"
              :dense="dense" />
            <q-select  
              v-model="amount" 
              label="Категория" />
            <q-input  
              v-model="amount" 
              label="Сумма" />
          </template>
        </q-card-section>

        <q-card-actions>
          <q-btn 
            flat 
            label="Добавить" 
            color="primary" 
            v-close-popup
            v-on="$listeners"
             />
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
      value: {
        type: [String, Number, Boolean]
      },
      // для добавления категории передается ее название
      // в остальных случаях нужно выводить селект с 
      // value: category.id и label: category.name из store
      newCategory: {
        type: Boolean,
        default: false
      },
      showModal: {
        type: Boolean,
        default: false
      },
    },
    methods: {
      updateInputValue(newInput) {
        this.$emit('update:input', newInput)
      },
      // updateButtonValue(newType) {
      //   this.$emit('update:button', newType)
      // },
    }
  }
</script>

<style lang="scss" scoped>

</style>