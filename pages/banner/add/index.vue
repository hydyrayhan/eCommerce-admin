<template>
  <div class="banner">
    <v-row>
    <v-col cols="5">
      {{$t('turkmen')}} {{$t('chooseImage')}}
      <v-file-input
        v-model="banner.imageTM"
        truncate-length="15"
        @change="uploadProductImages"
      ></v-file-input>
      <div v-if="productImageSources.length" class="perfume__images__wrapper">
        <div class="perfume__images">
          <div
            v-for="(image, index) in productImageSources"
            :key="index"
            class="perfume__images__item"
            @click="deleteUploadedImageWithIndex(0)"
          >
            <img :src="image.url" alt="" />
          </div>
        </div>
      </div>
    </v-col>

    <v-col cols="1"></v-col>

    <v-col cols="5">
      {{$t('rus')}} {{$t('chooseImage')}}
      <v-file-input
        v-model="banner.imageRU"
        truncate-length="15"
        @change="uploadProductImages2"
      ></v-file-input>
      <div v-if="productImageSources2.length" class="perfume__images__wrapper">
        <div class="perfume__images">
          <div
            v-for="(image, index) in productImageSources2"
            :key="index"
            class="perfume__images__item"
            @click="deleteUploadedImageWithIndex(1)"
          >
            <img :src="image.url" alt="" />
          </div>
        </div>
      </div>
    </v-col>

    </v-row>

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

    <v-col cols="5"><v-text-field dense :label="$t('link')" :rules="rules"></v-text-field></v-col>
    <v-btn color="info" @click="sendBanner">{{$t('save')}}</v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dialogDelete: false,
      productImageSources: [],
      productImageSources2: [],
      index:'',
      rules:[
        value => !!value || "Zerur",
      ],
      banner: {
        imageTM:[],
        imageRU:[],
        link:'/'
      },
    }
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
      console.log(this.index);
      if(this.index === 0){
        this.productImageSources=[];
        this.banner.imageTM = [];
      }else if(this.index === 1){
        this.banner.imageRU = [];
        this.productImageSources2 = [];
      }
    },
    uploadProductImages(images) {
      this.productImageSources = [];
      this.productImageSources.push({
        type: 'objectURL',
        url: URL.createObjectURL(images),
      })
    },
    uploadProductImages2(images) {
      this.productImageSources2 = [];
      this.productImageSources2.push({
        type: 'objectURL',
        url: URL.createObjectURL(images),
      })
    },

    deleteUploadedImageWithIndex(index) {
      this.dialogDelete = true;
      this.index = index;
    },
    sendBanner(){
      console.log("lets go")
    }
  }
}
</script>

<style>

</style>