<template>
  <div>
    <v-col>
      {{$t('turkmen')}} {{$t('description')}}

      <div
        class="quill-editor"
        v-model="statik.tm"
        v-quill:fullDescriptionTm="{}"
      />
    </v-col>
    <br>
    <v-col>
      {{$t('rus')}} {{$t('description')}}

      <div
        class="quill-editor"
        v-model="statik.ru"
        v-quill:fullDescriptionRu="{}"
      />
    </v-col>
  </div>
</template>

<script>
export default {
  data(){
    return{
      statik:{
        tm:"",
        ru:""
      }
    }
  },
  mounted(){
    console.log(this.$route.params.name)
  }
}
</script>

<style>

</style>