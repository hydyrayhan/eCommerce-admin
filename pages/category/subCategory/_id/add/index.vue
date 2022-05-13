<template>
  <div>
    <v-text-field :rules="rules" :label="$t('turkmen') +' '+ $t('name')" v-model="data.name_tm"></v-text-field>
    <v-text-field :rules="rules" :label="$t('rus') +' '+ $t('name')" v-model="data.name_ru"></v-text-field>
    <v-btn color="info" @click="sendCategory">{{$t('save')}}</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    data:{
      name_tm:'',
      name_ru:'',
      category_id:'',
    },
    rules: [
      value => !!value || 'Required.',
    ],
  }),
  methods:{
    async sendCategory(){
      this.data.category_id = this.$route.params.id;
      console.log(this.data);
      try {
        const res = await this.$axios.post(`/admin/subcategories/add`, this.data);

        if(res.status == 201){
          await this.$store.dispatch('kategory/fetchkategory')
          this.$router.push(`/category/subCategory/${this.data.category_id}`)
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