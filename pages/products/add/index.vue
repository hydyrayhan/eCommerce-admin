<template>
  <div>
      <v-col cols="5">
        {{$t('chooseImage')}}
        <v-file-input
          v-model="product.images"
          truncate-length="15"
          multiple
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
        <v-text-field dense :label="$t('turkmen')+' '+$t('name')" :rules="rules"></v-text-field>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="5">
        <v-text-field dense :label="$t('rus')+' '+$t('name')" :rules="rules"></v-text-field>
      </v-col>
    </v-row>
    <v-row style="padding:12px 24px">
      <v-col cols="5">
        {{$t('turkmen')}} {{$t('description')}}
        <div class="editorCon">
            <textarea id="image-tools"></textarea>
        </div>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="5">
        {{$t('rus')}} {{$t('description')}}
        <div class="editorCon">
            <textarea id="image-tools2"></textarea>
        </div>
      </v-col>
    </v-row>
    <v-row style="padding:12px 24px">
      <v-col cols="5"><v-text-field dense :label="$t('productCode')" :rules="rules"></v-text-field></v-col>
      <v-col cols="1"></v-col>
      <v-col cols="2"><v-text-field dense type="number" min="0" :label="$t('price')" :rules="rules"></v-text-field></v-col>
      <v-radio-group
        v-model="row"
        row
      >
        <v-radio
          label="USD"
          value="radio-1"
          color="white"
        ></v-radio>
        <v-radio
          label="TMT"
          value="radio-2"
          color="white"
        ></v-radio>
    </v-radio-group>
    </v-row>
    <!--  kategory, subkategory, banner,stocksan, discount -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      dialogDelete: false,
      rules:[
        value => !!value || "Zerur",
      ],
      editorContent: '<h2 style="color: #339966;">Hi there from TinyMCE for Vue.js.</h2> <p>&nbsp;</p> <p><span>Hey y`all.</span></p>',
      tinyOptions: { 
        'height': 400 , 
        codesample_content_css: '../css/prism.css',
      },
      myInit:{},
      index:-1,
      product: {
        name: '',
        shortDescription: {
          en: '',
          ru: '',
          tm: '',
        },
        fullDescription: {
          en: '',
          ru: '',
          tm: '',
        },
        images: [],
        sizes: [],
        categories: [],
        unit: '',
        price: '',
        gender: '',
      },
      productImageSources: [],
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
      this.productImageSources.splice(this.index, 1)
      this.product.images.splice(this.index, 1)
    },
    uploadProductImages(images) {
      if (images.length) {
        images.map((e) => {
          this.productImageSources.push({
            type: 'objectURL',
            url: URL.createObjectURL(e),
          })
          return e
        })
      }
    },

    deleteUploadedImageWithIndex(index) {
      this.dialogDelete = true;
      this.index = index;
    },
  },
}
</script>

<style>
</style>