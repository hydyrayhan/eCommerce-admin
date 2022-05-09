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
      name_tm:'lfjdsljfdf',
      name_ru:'fdsfdsfd',
    },
    rules: [
      value => !!value || 'Required.',
      value => (value || '').length <= 20 || 'Max 20 characters',
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    ],
  }),
  methods:{
    sendCategory(){
      console.log(this.data.name_tm)
      console.log(this.data.name_ru)
    }
  }
}
</script>

<style>

</style>