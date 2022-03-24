<template>
  <div>
    <q-table
      class="q-ml-xl summary-table q-ma-sm"
      card-class="bg-grey-1"
      :data="$store.state.categories.categories"
      :columns="columns"
      row-key="name"
      hide-bottom
      separator="vertical"
      virtual-scroll
      :rows-per-page-options="[0]"
    >
      <template v-slot:body="props">
        <q-tr
          title='Нажми для редактирования'
          :props="props"
          :class="classIncome(props)"
          @click="showCategory(props)">
          <q-td
            v-for="col in props.cols"
            :key="col.id">
            {{col.value}}
          </q-td>
        </q-tr>
      </template>
      <template v-slot:top>
        <span>Summary</span>

        <q-space />

        <q-btn
          flat
          icon="data_saver_on"
          label="Add category"
          @click="showModalAddCategory = true" />  
      </template>

    </q-table>

    <BaseModal
      :showModal.sync="showModalAddCategory"
      title="Добавить данные"
      btnLabel="Добавить"
      :typeCategory.sync="typeCategory"
      :nameCategory.sync="nameCategory"
      @clearModalValue="clearModalValue"
      @click="addCategory"
    />

    <BaseModal
      editCategory
      :showModal.sync="showModalEditCategory"
      @clearModalValue="clearModalValue"
      title="Редактировать данные"
      :typeCategory.sync="typeCategory"
      :nameCategory.sync="nameCategory"
      @editButtonClick="editCategory"
      @deleteButtonClick="deleteCategory"
    />

  </div>
</template>

<script>
import BaseModal from '@/components/BaseComponents/BaseModal.vue'

  export default {
    components: {BaseModal},
    data() {
      return {
        showModalEditCategory: false,
        showModalAddCategory: false,
        typeCategory: null,
        nameCategory: null,
        idCategory: null,

        columns: [
          {
            name: 'categories',
            required: true,
            label: 'Категории',
            align: 'left',
            field: row => row.name,
            format: val => `${val}`,
          },
          {          
            name: 'total',
            required: true,
            label: 'Сумма',
            align: 'left',
            field: row => row.transactions_sum,
            format: val => Number(val) || 0,
            sortable: true,
            sort: (a, b) => a - b
          }
        ],
      }
    },
    methods: {
      async addCategory() {
        const data = {
          name: this.nameCategory,
          category_type: this.typeCategory
        }

        try{
          await this.$store.dispatch("addCategory", data)
        } catch (e) {
          console.log('addCategory error', e)
        }
      },
      async deleteCategory() {
        try{
          await this.$store.dispatch("deleteCategory", this.idCategory)
        } catch (e) {
          console.log('deleteCategory error', e)
        }
      },
      async editCategory() {
        const data = {
          category_type: this.typeCategory || undefined,
          name: this.nameCategory || undefined,
          categoryId: this.idCategory
        }

        try{
          await this.$store.dispatch("editCategory", data)
        } catch (e) {
          console.log('editCategory error', e)
        }
      },
      classIncome(props) {
        return {
          'text-green': props.row.category_type === 'income'
        }
      },
      showCategory(props) {
        this.showModalEditCategory = true
        this.nameCategory = props.row.name
        this.typeCategory = props.row.category_type
        this.idCategory = props.row.id
        console.log('wait show category', props)
      },
      clearModalValue() {
        this.nameCategory = null
        this.typeCategory = null
        this.idCategory = null
      }
    },
}
</script>

<style lang="scss" scoped>

</style>