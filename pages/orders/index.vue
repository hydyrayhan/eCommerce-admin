<template>
  <div>
    <v-card>
      <v-card-title>
        <v-select
          :label="$t('filter')"
          :items="[`${$t('waiting')}`,`${$t('accepted')}`,`${$t('delivered')}`,`${$t('canceled')}`,`${$t('seeAll')}`]"
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
        :items="desserts"
        :server-items-length="count"
        :options.sync="options"
      >
        <template v-slot:[`item.id`]="{ item }">
          {{Number(page-1)*10+Number(desserts.indexOf(item)+1)}}
        </template>

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
      page:1,
      options:{},
      deleteItemValue:{}
    }
  },
  computed:{
     ...mapGetters({
      desserts: 'orders/orders',
      lang: 'language/language',
      count: 'orders/count'
    }),
  },
  watch:{
    lang(){
      this.changeHeader()
    },
    options: {
      handler() {
        this.getDessertsFromApi();
      },
      deep: true
    }
  },
  mounted(){
    this.changeHeader()
    document.querySelector(".v-data-footer__icons-before button span").innerHTML = '<';
    document.querySelector(".v-data-footer__icons-after button span").innerHTML = '>';
  },
  methods:{
    async getDessertsFromApi(searchValue,active) {
      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      this.page = page;
      await this.$store.dispatch(`orders/fetchOrders` , {limit:itemsPerPage,offset:(page-1)*10,keyword:searchValue,status:active});
    },
    filter(e){
      console.log(e);
      if(e == 'Hemmesini görmek'){
        this.getDessertsFromApi(this.search,undefined);
      }else{
        this.getDessertsFromApi(this.search,e);
      }
    },
    deleteItem(item){
      this.dialogDelete = true;
      this.deleteItemValue = item
    },
    closeDelete(){
      this.dialogDelete = false;
    },
    async deleteItemConfirm(){
      this.dialogDelete = false;
      console.log(this.deleteItemValue)
      try {
        const res = await this.$axios.delete(`/admin/orders/${this.deleteItemValue.order_id}`);
        if(res.status == 200){
          this.getDessertsFromApi();
        }
      } catch (error) {
        console.log(error);
      }
    },
    changeHeader(){
      if(this.lang === 'RU'){
        this.headers = [
          {text: 'Идентификатор', value: 'id'},
          { text: 'Имя', value: 'user_name' },
          { text: 'Статус', value: 'status' },
          { text: 'Дата/Время', value: 'delivery_time' },
          { text: 'Действия', value: 'actions', sortable: false }
        ]
      }else{
        this.headers = [
          {text: 'ID', value: 'id'},
          { text: 'Ady', value: 'user_name' },
          { text: 'Ýagdaýy', value: 'status' },
          { text: 'Senesi/wagty', value: 'delivery_time' },
          { text: 'Actions', value: 'actions', sortable: false }
        ]
      }
    },
    searchFunc(){
      this.getDessertsFromApi(this.search)
    }
  }
}
</script>

<style>
</style>