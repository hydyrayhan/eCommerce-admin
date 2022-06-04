<template>
  <div class="productAdd">
      <v-col cols="5">
        {{$t('chooseImage')}}
        <v-file-input
          v-model="images"
          truncate-length="15"
          @change="uploadProductImages"
        ></v-file-input>
      </v-col>

        <div v-if="productImageSources.length" class="perfume__images__wrapper">
          <div class="perfume__images">
            <div
              v-for="(image, index) in productImageSources"
              :key="index"
              class="perfume__images__item"
              @click="deleteUploadedImageWithIndex(index)"
            >
              <img :src="image.url" alt="" />
            </div>
          </div>
        </div>

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
    <v-row style="padding:12px 24px">
      <v-col cols="5">
        <v-text-field dense :label="$t('turkmen')+' '+$t('name')" :rules="rules" v-model="product.name_tm"></v-text-field>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="5">
        <v-text-field dense :label="$t('rus')+' '+$t('name')" :rules="rules" v-model="product.name_ru"></v-text-field>
      </v-col>
    </v-row>


    <v-row style="padding:12px 24px">
      <v-col cols="2"><v-text-field dense type="number" min="0" :label="$t('price')" :rules="rules" v-model="product.price"></v-text-field></v-col>

      <v-col cols="3">
        <v-checkbox
          v-model="product.isActive"
          :label="$t('isActive')"
        >
        </v-checkbox>
      </v-col>
    </v-row>


    <v-btn color="info" @click="sendProduct">{{$t('save')}}</v-btn>
  </div>
</template>

<script>
// import Editor from '@tinymce/tinymce-vue'
import { mapGetters } from 'vuex'
export default {
  name: 'appp',
  components: {
    //  'editor': Editor
   },
  data(){
    return {
      dialogDelete: false,
      rules:[
        value => !!value || "Zerur",
      ],
      index:-1,
      product: {
        name_tm: '',
        name_ru: '',
        isActive:false, //aksiya barmy yok
        price:'',
      },
      images:[],
      productImageSources: [],
    }
  },
  async mounted(){
    document.querySelector(".productAdd .v-input__icon button").innerHTML='<svg height="20" width="20"><path d="M10 13.271 5.708 8.979 6.958 7.729 9.125 9.896V3.333H10.875V9.896L13.042 7.729L14.292 8.979ZM5.083 16.667Q4.354 16.667 3.844 16.156Q3.333 15.646 3.333 14.917V12.5H5.083V14.917Q5.083 14.917 5.083 14.917Q5.083 14.917 5.083 14.917H14.917Q14.917 14.917 14.917 14.917Q14.917 14.917 14.917 14.917V12.5H16.667V14.917Q16.667 15.646 16.156 16.156Q15.646 16.667 14.917 16.667Z" fill="#FFFFFF"/></svg>'
    let res='';
    try {
      res = await this.$axios.get(`/admin/gifts/${this.$route.params.id}`)
    } catch (error) {
      console.log(error);
    }
    console.log(res.data);
    this.product.name_tm = res.data.name_tm
    this.product.name_ru = res.data.name_ru
    this.product.isActive = res.data.isActive
    this.product.price = res.data.price
    
    this.productImageSources = [{
      type: 'objectURL',
      url: `${this.$config.url}/${res.data.image}`,
    }];
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
      this.productImageSources=[]
      this.images=[]
    },
    uploadProductImages(images) {
      this.productImageSources = [{
        type:'objectURL',
        url: URL.createObjectURL(images),
      }]
    },
    deleteUploadedImageWithIndex(index) {
      this.dialogDelete = true;
      this.index = index;
    },
    async sendProduct(){
      // console.log(this.productImageSources)
      if(this.productImageSources.length > 0  && this.product.name_tm && this.product.name_ru && this.product.price){ //body bosh bolup barsa mesele bolarmy soramaly
        try {
          const res = await this.$axios.patch(`/admin/gifts/${this.$route.params.id}`, this.product)
          if(res.status == 200){
            if(this.images.length == 0){
              await this.$store.dispatch('gifts/fetchGifts',{offset:0,limit:10})
              this.$router.push("/gift")
            }else{
              const ress = await this.$axios.post(`/admin/gifts/upload-image/${res.data.gift_id}`,this.returnFormData())

              if(ress.status == 200){
                await this.$store.dispatch('gifts/fetchGifts',{offset:0,limit:10})
                this.$router.push('/gift');
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
      }else{
        alert('Boshluklary dolduryn')
      }

    },
    returnFormData(){
      const formData = new FormData();
      formData.append('image', this.images)
      return formData;
    }
  },
}
</script>

<style>
</style>