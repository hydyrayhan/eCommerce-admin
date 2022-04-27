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
          <v-col cols="4">
            <v-select
              v-model="status"
              :items="['Garaşylýar' , 'Kabul edildi', 'Gowşuryldy']"
              @change="statusChange($event)"
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      status:'Garaşylýar'
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
    },
    statusChange(type){
      console.log(type)
    }
  }
}
</script>

<style>
 .vRow{
   margin-bottom:15px;
 }
</style>