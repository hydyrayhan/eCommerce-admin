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
    const category = this.kategories.find(function(e){
      return e.id === Number(id)
    });
    this.data.name_tm = category.name_tm
    this.data.name_ru = category.name_ru
    this.id = category.category_id
  },
  methods:{
    async sendCategory(){
      try {
        const res = await this.$axios.patch(`/admin/categories/edit/${this.id}`, this.data)
        if(res.status == 200){
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