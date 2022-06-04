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

    <v-col cols="5"><v-text-field dense :label="$t('link')" :rules="rules" v-model="banner.link"></v-text-field></v-col>
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
        link:''
      },
    }
  },
  async mounted(){
    let res;
    try {
      res = await this.$axios.get(`/admin/banners/${this.$route.params.id}`)
    } catch (error) {
      console.log(error);
    }
    console.log(res.data);
    this.banner.link = res.data.banner.link
    this.productImageSources=[{
      type: 'objectURL',
      url: `${this.$config.url}/${res.data.banner.image_tm}`
    }];
    this.productImageSources2=[{
      type: 'objectURL',
      url: `${this.$config.url}/${res.data.banner.image_ru}`
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
      this.productImageSources=[{
        type: 'objectURL',
        url: URL.createObjectURL(images),
      }]
    },
    uploadProductImages2(images) {
      this.productImageSources2 = [];
      this.productImageSources2=[{
        type: 'objectURL',
        url: URL.createObjectURL(images),
      }]
    },

    deleteUploadedImageWithIndex(index) {
      this.dialogDelete = true;
      this.index = index;
    },
    async sendBanner(){
      console.log(this.banner.imageTM.length)
      if(this.productImageSources.length!=0 && this.productImageSources2.length!=0 && this.banner.link){
        try {
          const res = await this.$axios.patch(`/admin/banners/${this.$route.params.id}`,{link: this.banner.link});
          if(res.status == 200){
            if(this.banner.imageTM.length == undefined){
              const ress = await this.$axios.post(`/admin/banners/upload-image-tm/${res.data.banner_id}`,this.returnFormData())
              console.log(ress);
              if(ress.status == 201){
                if(this.banner.imageRU.length == undefined){
                  const resss = await this.$axios.post(`/admin/banners/upload-image-ru/${res.data.banner_id}`,this.returnFormData2())
                  console.log(resss);
                  if(resss.status == 201){
                    await this.$store.dispatch('banner/fetchBanners',{offset:0,limit:10})
                    await this.$router.push('/banner');
                    // const element = document.createElement("a");
                    // element.setAttribute('href','/banner');
                    // element.click();
                  }
                }else{
                  // const element = document.createElement("a");
                  // element.setAttribute('href','/banner');
                  // element.click();
                  await this.$store.dispatch('banner/fetchBanners',{offset:0,limit:10})
                  await this.$router.push('/banner');
                }
              }
            }else{
              if(this.banner.imageRU.length == undefined){
                const resss = await this.$axios.post(`/admin/banners/upload-image-ru/${res.data.banner_id}`,this.returnFormData2())
                console.log(resss);
                if(resss.status == 201){
                  // const element = document.createElement("a");
                  await this.$store.dispatch('banner/fetchBanners',{offset:0,limit:10})
                  await this.$router.push('/banner');
                  // element.setAttribute('href','/banner');
                  // element.click();
                }
              }else{
                this.$router.push('/banner');
              }
            }
          //   if(ress.status === 201){
          //     if(resss.status === 201){
          //       this.$router.push('/banner')
          //     }
          //   }
          }
        } catch (error) {
          console.log(error);
        }
      }else{
        alert("Boshluklary dolduryn")
      }
    },
    returnFormData(){
      const formData = new FormData();
      formData.append('image', this.banner.imageTM)
      return formData;
    },
    returnFormData2(){
      const formData = new FormData();
      formData.append('image', this.banner.imageRU)
      return formData;
    }
  }
}
</script>

<style>

</style>