<template>
  <div>
    <v-btn
      color="info"
      class="mb-5"
      @click="$redirect('/brand/add')"
    >
      {{$t('add')}} 
    </v-btn>

    <v-card>
      <v-card-title>
        <v-select
          :label="$t('filter')"
          :items="['Uludan kica', 'Kichiden ula']"
          @change="filter($event)"
          single-line
        ></v-select>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          :label="$t('search')"
          single-line
          @keydown.enter="searchFunc"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="brands"
        @pagination="paginationFunc"
      >
        <template v-slot:[`item.product_image`]="{ item }">
          <img 
            :src="item.product_image[0]" 
            :alt="item.name"
          />
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="info" style="margin-right:10px" @click="$redirect(`/products/edit/${item.product_id}`)">
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
  data(){
    return{
      search: '',
      dialogDelete: false,
      headers: [],
    }
  },
  computed:{
     ...mapGetters({
      lang: 'language/language',
      brands: 'brand/brand',
    }),
  },
  watch:{
    lang(){
      this.changeHeader()
    }
  },
  mounted(){
    this.changeHeader()
    document.querySelector(".v-data-footer__icons-before button span").innerHTML = '<';
    document.querySelector(".v-data-footer__icons-after button span").innerHTML = '>';
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
          {text: 'Идентификатор', value: 'product_id'},
          { text: 'Имя', value: 'name' },
          { text: 'Изображение', value: 'product_image' },
          { text: 'Действия', value: 'actions', sortable: false }
        ]
      }else{
        this.headers = [
          {text: 'ID', value: 'product_id'},
          { text: 'Ady', value: 'name' },
          { text: 'Suraty', value: 'product_image' },
          { text: 'Actions', value: 'actions', sortable: false }
        ]
      }
    },
    paginationFunc(values){
      console.log(values)
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