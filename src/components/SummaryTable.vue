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
          label="Add category"
          @click="showModalCategory = true" />  
      </template>

    </q-table>

        <q-dialog v-model="showModalCategory">
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
          <q-input v-model="nameCategory" label="Категория" />
        </q-card-section>

        <q-card-actions>
          <q-btn 
            flat 
            label="Добавить" 
            color="primary" 
            v-close-popup
            @click="addCategory"
             />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import store from "@/store/"

  export default {
    data() {
      return {
        showModalCategory: false,
        typeCategory: null,
        nameCategory: null,
        columns: [
          {
            name: 'categories',
            required: true,
            label: 'Категории',
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
            format: val => `${val}`,}
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
    methods: {
    async addCategory() {
      const data = {
        name: this.nameCategory,
        category_type: this.typeCategory
      }

      try{
        await store.dispatch("addCategory", data)
      } catch (e) {
        console.log('addCategory error', e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>