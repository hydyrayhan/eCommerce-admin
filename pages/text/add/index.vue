<template>
  <div class="textAdd">
    <v-row style="padding:12px 24px">
      <v-col cols="5">
        <v-text-field dense :label="$t('turkmen')+' '+$t('name')" :rules="rules" v-model="text.name_tm"></v-text-field>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="5">
        <v-text-field  dense :label="$t('rus')+' '+$t('name')" :rules="rules" v-model="text.name_ru"></v-text-field>
      </v-col>
    </v-row>
    <v-col>
      {{$t('turkmen')}} {{$t('description')}}

      <div
        class="quill-editor"
        v-model="text.body_tm"
        v-quill:fullDescriptionTm="{}"
      />
    </v-col>

    <v-col>
      {{$t('rus')}} {{$t('description')}}

      <div
        class="quill-editor"
        v-model="text.body_ru"
        v-quill:fullDescriptionRU="{}"
      />
    </v-col>
    <v-btn color="info" style="margin-top:50px" @click="send">{{$t('save')}}</v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return{
      text:{
        body_tm:'',
        body_ru:'',
        name_tm:'',
        name_ru:'',
      },
      rules:[
        value => !!value || "Zerur",
      ],
    }
  },
  methods:{
    async send(){
      if(this.text.body_tm && this.text.body_ru && this.text.name_tm && this.text.name_ru){
        try {
          const {status} = await this.$axios.post('/admin/texts/add',this.text)
          if(status === 201){
            this.$router.push('/text')
          }
        } catch (error) {
          console.log(error)
        }
      }else{
        alert("Boshluklary dolduryn");
      }
    }
  }
}
</script>

<style>

</style>