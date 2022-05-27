<template>
  <div class="brand_add">
    <v-row>
      <v-col cols="5">
        {{$t('chooseImage')}}
          <!-- truncate-length="15" -->
        <v-file-input
          v-model="brand.images"
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
      <v-col cols="1"></v-col>
    </v-row>
    <v-col cols="5">
      <v-select
        :items="kategories.name"
        @change="chooseCategory($event)"
        style="margin-top:-30px;"
        :label="$t('chooseCategory')"
        v-model="oldKategory"
      ></v-select>
    </v-col>
    <v-col cols="12">
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
    <v-text-field :label="$t('name')" v-model="brand.name"></v-text-field>
    </v-col>
    <v-btn color="info" @click="sendBrand">{{$t('save')}}</v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return {
      brand:{
        name:'',
        images:[]
      },
      oldKategory:"",
      dialogDelete: false,
      productImageSources: [],
      choosenKategoryId:'',
      imageUpdate:false,
    }
  },
  computed:{
    ...mapGetters({
      kategories: 'kategory/kategoryNames',
    }),
  },
  async mounted(){
    document.querySelector(".brand_add .v-input__icon button").innerHTML='<svg height="20" width="20"><path d="M10 13.271 5.708 8.979 6.958 7.729 9.125 9.896V3.333H10.875V9.896L13.042 7.729L14.292 8.979ZM5.083 16.667Q4.354 16.667 3.844 16.156Q3.333 15.646 3.333 14.917V12.5H5.083V14.917Q5.083 14.917 5.083 14.917Q5.083 14.917 5.083 14.917H14.917Q14.917 14.917 14.917 14.917Q14.917 14.917 14.917 14.917V12.5H16.667V14.917Q16.667 15.646 16.156 16.156Q15.646 16.667 14.917 16.667Z" fill="#FFFFFF"/></svg>'
    let res;
    try {
      res = await this.$axios.get(`/admin/brands/${this.$route.params.id}`)
    } catch (error) {
      console.log(error);
    }
    this.productImageSources.push({
      type: 'objectURL',
      url: `${this.$config.url}/${res.data.image}`
    });
    this.oldKategory = res.data.brand_categories[0].name_tm
    this.brand.name = res.data.name
  },
  methods:{
    uploadProductImages(images) {
      this.productImageSources=[{
        type: 'objectURL',
        url: URL.createObjectURL(images),
      }]
      this.imageUpdate = true;
    },
    deleteUploadedImageWithIndex(index) {
      this.dialogDelete = true;
      this.index = index;
    },
    deleteItem(item){
      this.dialogDelete = true;
    },
    closeDelete(){
      this.dialogDelete = false;
    },
    deleteItemConfirm(){
      this.dialogDelete = false;
      this.productImageSources=[]
      this.brand.images=[]
    },
    async sendBrand(){
      try {
        const res = await this.$axios.patch(`/admin/brands/${this.$route.params.id}`,{name: this.brand.name})
        if(res.status == 200){
          let status = 0;
          if(this.imageUpdate){
            const ress = await this.$axios.post(`/admin/brands/upload-image/${this.$route.params.id}`,this.returnBrandFormData())
            status = ress.status;
          }else{
            status = 201
          }
          if(status === 201){
            console.log(this.choosenKategoryId)
            let sta;
            if(this.choosenKategoryId){
              const resss = await this.$axios.post(`/admin/brands/add-category/${this.$route.params.id}`,{category_id : this.choosenKategoryId})
              sta = ress.status;
            }else{
              sta = 201
            }
            if(sta == 201){
              const element = document.createElement("a");
              element.setAttribute('href','/brand');
              element.click();
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    returnBrandFormData(){
      const formData = new FormData();
      formData.append('image', this.brand.images)
      return formData;
    },
    chooseCategory(e){
      for(let i = 0; i<this.kategories.name.length; i++){
        if(this.kategories.name[i] == e){
          this.choosenKategoryId = this.kategories.id[i];
        }
      }
    }
  }
}
</script>

<style>

</style>