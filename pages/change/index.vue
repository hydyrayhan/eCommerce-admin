<template>
  <div>
    <v-text-field :rules="rules" :label="$t('change')" v-model="change"></v-text-field>
    <v-btn color="info" @click="sendStatic">{{$t('save')}}</v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return{
      change:'',
      rules: [
        value => !!value || 'Required.',
      ],
    }
  },
  async mounted(){
    try {
      const res = await this.$axios.get(`/admin/currency`);
      this.change = res.data.value
    } catch (error) {
      console.log(error);
    }
  },
  methods:{
    async sendStatic(){
      try {
        this.change = Number(this.change);
        const res = await this.$axios.patch(`/admin/currency`,{value : this.change});
        if(res.status === 200){
          alert("Saved");
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