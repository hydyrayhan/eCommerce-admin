<template>
  <div>
    <v-col>
      {{$t('turkmen')}} {{$t('description')}}

      <div
        class="quill-editor"
        v-model="statik.body_tm"
        v-quill:fullDescriptionTm="{}"
      />
    </v-col>
    <br>
    <v-col>
      {{$t('rus')}} {{$t('description')}}

      <div
        class="quill-editor"
        v-model="statik.body_ru"
        v-quill:fullDescriptionRu="{}"
      />
    </v-col>
    <v-btn color="info" @click="sendStatic">{{$t('save')}}</v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return{
      statik:{
        body_tm:"",
        body_ru:""
      }
    }
  },
  async mounted(){
    console.log(this.$route.params.name)
    const rout = this.$route.params.name;
    let id = 0;
    if(rout === 'about'){
      id = 1;
    }else if(rout === 'orderProduct'){
      id = 3
    }else if(rout === 'contact'){
      id = 2
    }else if(rout === 'usage'){
      id = 4
    }
    try {
      const res = await this.$axios.get(`/admin/static/${id}`);
      this.statik.body_tm = res.data.body_tm;
      this.statik.body_ru = res.data.body_ru;
    } catch (error) {
      console.log(error);
    }
  },
  methods:{
    async sendStatic(){
      const rout = this.$route.params.name;
      let id = 0;
      if(rout === 'about'){
        id = 1;
      }else if(rout === 'orderProduct'){
        id = 3;
      }else if(rout === 'contact'){
        id = 2
      }else if(rout === 'usage'){
        id = 4
      }
      try {
        const res = await this.$axios.patch(`/admin/static/${id}`,this.statik);
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