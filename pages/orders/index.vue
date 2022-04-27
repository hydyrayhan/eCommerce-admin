<template>
  <div>
    <v-card>
      <v-card-title>
        <v-select
          :label="$t('filter')"
          :items="['Uludan kica', 'Kichiden ula']"
          @change="filter($event)"
          style="margin-bottom:-20px"
        ></v-select>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          :label="$t('search')"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn color="info" style="margin-right:10px" @click="$redirect(`/orders/${item.order_id}`)">
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
      desserts: 'orders/orders',
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
    filter(value){
      console.log(value)
    },
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
          {text: 'Идентификатор', value: 'order_id'},
          { text: 'Имя', value: 'name' },
          { text: 'Статус', value: 'status' },
          { text: 'Дата/Время', value: 'date' },
          { text: 'Действия', value: 'actions', sortable: false }
        ]
      }else{
        this.headers = [
          {text: 'ID', value: 'order_id'},
          { text: 'Ady', value: 'name' },
          { text: 'Ýagdaýy', value: 'status' },
          { text: 'Senesi/wagty', value: 'date' },
          { text: 'Actions', value: 'actions', sortable: false }
        ]
      }
    }
  }
}
</script>

<style>
</style>