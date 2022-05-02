<template>
  <div>
    <v-btn
      color="info"
      class="mb-5"
      @click="$redirect('/category/add')"
    >
    {{$t('add')}} 
    <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-card>
      <v-card-title>
        <v-col cols="6">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            :label="$t('search')"
            single-line
            @keydown.enter="searchFunc"
          ></v-text-field>
        </v-col>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="kategories"
        @pagination="paginationFunc"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="info" style="margin-right:10px" @click="$redirect(`/category/edit/${item.id}`)">
            {{$t('open')}}
          </v-btn>
          <v-btn color="error" @click="deleteItem(item)">
            {{$t('delete')}}
          </v-btn>
        </template>
        <template v-slot:top>
          <v-dialog v-model="dialogDelete" max-width="500px" light>
            <v-card>
              <v-card-title class="text-h5">{{$t('deleteDialog')}}</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">{{$t('cancel')}}</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">{{$t('ok')}}</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
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
  watch:{
    lang(){
      this.changeHeader()
    }
  },
  mounted(){
    this.changeHeader()
  },
  methods:{
    deleteItem(item){
      this.dialogDelete = true;
    },
    closeDelete(){
      this.dialogDelete = false;
    },
    deleteItemConfirm(){
      this.dialogDelete = false;
      console.log("men bolsa confirm functino");
    },
    changeHeader(){
      if(this.lang === 'RU'){
        this.headers = [
          {text: 'Идентификатор', value: 'id'},
          { text: 'Pусское имя', value: 'kategory_name_ru' },
          { text: 'Туркменское имя', value: 'kategory_name_tm' },
          { text: 'Действия', value: 'actions', sortable: false }
        ]
      }else{
        this.headers = [
          {text: 'ID', value: 'id'},
          { text: 'Rusça ady', value: 'kategory_name_ru' },
          { text: 'Türkmençe ady', value: 'kategory_name_tm' },
          { text: 'Actions', value: 'actions', sortable: false }
        ]
      }
    },
    paginationFunc(values){
      // off set hemde limit shu yerden alaymaly edip goydym
    },
    searchFunc(){
      console.log("men ishledim ahyry"+this.search)
    }
  }
}
</script>

<style>

</style>