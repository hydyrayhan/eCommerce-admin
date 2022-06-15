<template>
  <div>
    <v-text-field :rules="rules" :label="$t('newProductDate')" v-model="time"></v-text-field>

    <v-btn color="info" @click="sendStatic">{{$t('save')}}</v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return{
      time:0,
      rules: [
        value => !!value || 'Required.',
      ],
    }
  },
  async mounted(){
    try {
      const {data} = await this.$axios.get('/admin/time')
      this.time = data.day
    } catch (error) {
      console.log(error)
    }
  },
  methods:{
    async sendStatic(){
      if(this.time){
        try {
          this.time = Number(this.time);
          const res = await this.$axios.post(`/admin/time`,{newExpirationDay : this.time});
          console.log(res);
          if(res){
            alert("Day changed")
          }

        } catch (error) {
          console.log(error);
        }
      }
    }
  }
}
</script>

<style>

</style>