<template>
  <div>
    <v-text-field :rules="rules" :label="$t('username')" v-model="data.username"></v-text-field>

    <v-text-field :rules="rules" :label="$t('password')" v-model="data.password"></v-text-field>

    <v-text-field :rules="rules" :label="$t('newPassword')" v-model="data.newPassword"></v-text-field>
    
    <v-text-field :rules="rules" :label="$t('newPasswordConfirm')" v-model="data.newPasswordConfirm"></v-text-field>

    <v-btn color="info" @click="sendStatic">{{$t('save')}}</v-btn>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return{
      change:'',
      data:{
        username:'',
        password:'',
        newPassword:'',
        newPasswordConfirm:''
      },
      rules: [
        value => !!value || 'Required.',
      ],
    }
  },
  async mounted(){
    try {
      const {data} = await this.$axios.get('/admin/get-me')
      this.data.username = data.username
    } catch (error) {
      console.log(error)
    }
  },
  methods:{
    ...mapActions({
      setAdminToken : 'admin/setAdminToken',
    }),
    async sendStatic(){
      if(this.data.username && this.data.password && this.data.newPassword && this.data.newPasswordConfirm){
        try {
          this.change = Number(this.change);
          const res = await this.$axios.post(`/admin/edit`,this.data);
          if(res){
            this.setAdminToken(res.data.token)
            alert("Password changed")
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