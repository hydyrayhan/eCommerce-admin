<template>
  <div>
    <v-text-field :rules="rules" :label="$t('turkmen') +' '+ $t('name')" v-model="data.name_tm"></v-text-field>
    <v-text-field :rules="rules" :label="$t('rus') +' '+ $t('name')" v-model="data.name_ru"></v-text-field>
    <v-btn color="info" @click="sendCategory">{{$t('save')}}</v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    data:{
      name_tm:'',
      name_ru:'',
    },
    id:0,
    categoryId:'',
    rules: [
      value => !!value || 'Required.',
    ],
  }),
  computed:{
    ...mapGetters({
      kategories: 'kategory/kategory',
    }),
  },
  mounted(){
    const id = this.$route.params.id;
    this.id = id;
    const categoryId = this.$route.query.categoryId;
    this.categoryId = categoryId;
    const category = this.kategories.find(function(e){
      return e.category_id === categoryId
    });
    const subCategory = category.subcategories.find(function(e){
      return e.subcategory_id === id;
    })
    
    this.data.name_tm = subCategory.name_tm
    this.data.name_ru = subCategory.name_ru
  },
  methods:{
    async sendCategory(){
      try {
        const res = await this.$axios.patch(`/admin/subcategories/edit/${this.id}`, this.data);
        if(res.status == 200){
          await this.$store.dispatch('kategory/fetchkategory')
          this.$router.push(`/category/subCategory/${this.categoryId}`)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>

</style>