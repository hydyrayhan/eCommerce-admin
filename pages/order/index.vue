<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-text-field :label="$t('search')" @keydown.enter="search()"></v-text-field>
      </v-col>
      <v-col cols="1" style="margin:auto 0 auto -45px"><v-icon>mdi-magnify</v-icon></v-col>
      <v-col cols="4">
        <v-select
          label="Filter"
          :items="['Uludan kica', 'Kichiden ula']"
          @change="filter($event)"
        ></v-select>
      </v-col>
      <v-col cols="1" style="margin:auto 0">
        <v-btn>Clear</v-btn>
      </v-col>
    </v-row>
    order page
  </div>
</template>

<script>
export default {
  methods:{
    filter(value){
      console.log(value)
    },
    search(){
      console.log("search work")
    }
  }
}
</script>

<style>
</style>