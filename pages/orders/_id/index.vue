<template>
  <div>
    <v-row style="margin:20px">
      <v-col cols="3">
        <v-row class="vRow">{{$t('name')}}</v-row>
        <v-row class="vRow">{{$t('address')}}</v-row>
        <v-row class="vRow">{{$t('phoneNumber')}}</v-row>
        <v-row class="vRow">{{$t('totalCost')}}</v-row>
        <v-row class="vRow">{{$t('totalProduct')}}</v-row>
        <v-row class="vRow">{{$t('status')}}</v-row>
      </v-col>
      <v-col cols="6">
        <v-row class="vRow">Aymuhammet</v-row>
        <v-row class="vRow">Aymuhammet</v-row>
        <v-row class="vRow">Aymuhammet</v-row>
        <v-row class="vRow">Aymuhammet</v-row>
        <v-row class="vRow">Aymuhammet</v-row>
        <v-row class="vRow">
          <v-col cols="5">
            <v-select
              v-model="status"
              :items="['Garaşylýar' , 'Kabul edildi', 'Gowşuryldy']"
              @change="statusChange($event)"
              style="margin-top:-30px; margin-left:-10px"
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>


    <v-data-table
      :headers="headers"
      :items="desserts"
    >
      <template  v-slot:[`item.quantity`]="{ item }">
        <v-edit-dialog
          :return-value.sync="item.quantity"
          large
          persistent
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
          :save-text="$t('save')"
          :cancel-text="$t('cancel')"
        >
          <div>{{ item.quantity }}</div>
          <template v-slot:input>
            <div class="mt-4 text-h6">
              {{$t('updateQuantity')}}
            </div>
            <v-text-field
              v-model="item.quantity"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
    </v-data-table>

    <v-snackbar
      v-model="snack"
      :timeout="2000"
      :color="snackColor"
    >
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          v-bind="attrs"
          text
          @click="snack = false"
        >
          {{$t('close')}}
        </v-btn>
      </template>
    </v-snackbar>



  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      status:'Garaşylýar',
      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: v => v.length <= 25,
      pagination: {},
      headers: [],
      desserts: [
        {
          id:'1',
          name: 'KitKat',
          price: 518,
          quantity: 26.0,
          product_code: 65,
        },
      ],
    }
  },
  computed:{
     ...mapGetters({
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
    changeHeader(){
      if(this.lang === 'RU'){
        this.headers = [
          { text: 'Идентификатор', value: 'id'},
          { text: 'Имя', value: 'name' },
          { text: 'Цена', value: 'price' },
          { text: 'Код продукта', value: 'product_code' },
          { text: 'Количество', value: 'quantity' },
        ]
      }else{
        this.headers = [
          { text: 'ID', value: 'id'},
          { text: 'Ady', value: 'name' },
          { text: 'Bahasy', value: 'price' },
          { text: 'Hary kody', value: 'product_code' },
          { text: 'Sany', value: 'quantity' },
        ]
      }
    },
    statusChange(type){
      console.log(type)
    },
    save () {
        this.snack = true
        this.snackColor = 'success'
        this.snackText = 'Data saved'
        console.log("shu yerder quantityny db e ugratmaly")
      },
      cancel () {
        this.snack = true
        this.snackColor = 'error'
        this.snackText = 'Canceled'
      },
      open () {
        this.snack = true
        this.snackColor = 'info'
        this.snackText = 'Dialog opened'
      },
      close () {
        console.log('Dialog closed')
      },
  }
}
</script>

<style>
 .vRow{
   margin-bottom:15px;
 }
</style>

