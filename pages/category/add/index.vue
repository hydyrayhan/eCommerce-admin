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
    },
    rules: [
      value => !!value || 'Required.',
    ],
  }),
  methods:{
    async sendCategory(){
      try {
        const res = await this.$axios.post('/admin/categories/add', this.data)
        if(res.status == 201){
          this.$router.push('/category')
          await this.$store.dispatch('kategory/fetchkategory')
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