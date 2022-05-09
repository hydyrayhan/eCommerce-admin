<template>
  <div>
    <v-btn
      color="info"
      class="mb-5"
      @click="$redirect(`/category/subCategory/${id}/add`)"
    >
    {{$t('add')}} 
    <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-col cols="6">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        :label="$t('search')"
        single-line
        @keydown.enter="searchFunc"
      ></v-text-field>
    </v-col>

    <div class="tableContainer">
      <div v-for="(kategory , index) in kategories" :key="index" class="list">
        <v-col>
          {{kategory.kategory_name_ru}}
        </v-col>
        <v-col>
          {{kategory.kategory_name_tm}}
        </v-col>
        <div class="btns">
          <v-btn
            color="info"
            class="mb-5"
            @click="$redirect(`/category/subCategory/${kategory.id}/edit`)"
          >
            {{$t('edit')}}
          </v-btn>
          <v-btn
            color="error"
            class="mb-5"
            @click="deleteItem(kategory.id)"
          >
            {{$t('delete')}}
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: [
    'id'
  ],
  data () {
    return {
      search: '',
      dialogDelete: false,
      headers: [],
    }
  },
  computed:{
    ...mapGetters({
      kategories: 'kategory/kategory',
      lang: 'language/language',
    }),
  },
  methods:{
    deleteItem(item){
      console.log(item);
    },
    searchFunc(){
      console.log("men ishledim ahyry"+this.search)
    }
  }
}
</script>

<style>

</style>