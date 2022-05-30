<template>
  <div class="productAdd">
      <v-col cols="5">
        {{$t('chooseImage')}}
        <v-file-input
          v-model="images"
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
        <v-text-field dense :label="$t('turkmen')+' '+$t('name')" :rules="rules" v-model="product.name_tm"></v-text-field>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col cols="5">
        <v-text-field dense :label="$t('rus')+' '+$t('name')" :rules="rules" v-model="product.name_ru"></v-text-field>
      </v-col>
    </v-row>

    <v-col>
      {{$t('turkmen')}} {{$t('description')}}

      <div
        class="quill-editor"
        v-model="product.body_tm"
        v-quill:fullDescriptionTm="{}"
      />
    </v-col>
    <br>
    <v-col>
      {{$t('rus')}} {{$t('description')}}

      <div
        class="quill-editor"
        v-model="product.body_ru"
        v-quill:fullDescriptionRu="{}"
      />
    </v-col>


    <!-- <v-row style="padding:12px 24px">
      <v-col cols="5"> -->
        <!-- {{$t('turkmen')}} {{$t('description')}}

        <div
          class="quill-editor"
          v-model="perfume.fullDescription.en"
          v-quill:fullDescriptionEn="{}"
        /> -->
        <!-- <div class="editorCon">
            <textarea id="image-tools"></textarea>
        </div> -->
        <!-- <editor
          api-key="no-api-key"
          :init="{
          height: 500,
          cleanup_on_startup: false,
          trim_span_elements: false,
          verify_html: false,
          cleanup: false,
  
          valid_elements: '*[*]',
          height: `480`,
          relative_urls: false,
          remove_script_host: true,
          convert_urls: true,
          image_advtab: true,
          plugins: 'print preview code searchreplace autolink directionality visualblocks visualchars image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount  imagetools  contextmenu colorpicker textpattern help',
          toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
          file_browser_callback_types: 'file image media',
          toolbar: `forecolor backcolor toc charmap`,
          templates: [
              { title: 'Standart content', content: '<div class=`container`><div class=`row`></div></div>' }
          ],
          file_picker_types: 'file image media',
          file_picker_callback: function (cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
  
  
            input.onchange = function () {
              var file = this.files[0];
  
              var reader = new FileReader();
              reader.onload = function () {
                var id = 'blobid' + (new Date()).getTime();
                var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
  
                cb(blobInfo.blobUri(), { title: file.name });
              };
              reader.readAsDataURL(file);
            };
  
            input.click();
          }
          }"
        /> -->
      <!-- </v-col> -->
      <!-- <v-col cols="1"></v-col> -->
      <!-- <v-col cols="5"> -->
        <!-- {{$t('rus')}} {{$t('description')}} -->
        <!-- <div class="editorCon">
            <textarea id="image-tools2"></textarea>
        </div> -->
        <!-- <editor
          api-key="no-api-key"
          :init="{
            height: 500,
            cleanup_on_startup: false,
            trim_span_elements: false,
            verify_html: false,
            cleanup: false,
    
            valid_elements: '*[*]',
            height: `480`,
            relative_urls: false,
            remove_script_host: true,
            convert_urls: true,
            image_advtab: true,
            plugins: 'print preview code searchreplace autolink directionality visualblocks visualchars image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount  imagetools  contextmenu colorpicker textpattern help',
            toolbar1: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
            file_browser_callback_types: 'file image media',
            toolbar: `forecolor backcolor toc charmap`,
            templates: [
                { title: 'Standart content', content: '<div class=`container`><div class=`row`></div></div>' }
            ],
            file_picker_types: 'file image media',
            file_picker_callback: function (cb, value, meta) {
              var input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
    
    
              input.onchange = function () {
                var file = this.files[0];
    
                var reader = new FileReader();
                reader.onload = function () {
                  var id = 'blobid' + (new Date()).getTime();
                  var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                  var base64 = reader.result.split(',')[1];
                  var blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);
    
                  cb(blobInfo.blobUri(), { title: file.name });
                };
                reader.readAsDataURL(file);
              };
    
              input.click();
            }
          }"
        /> -->
      <!-- </v-col>
    </v-row> -->
    <v-row style="padding:12px 24px">
      <v-col cols="3"><v-text-field dense :label="$t('productCode')" :rules="rules" v-model="product.product_code"></v-text-field></v-col>
      <v-col cols="2"><v-text-field dense :label="$t('stock')" :rules="rules" type="number" min="0" v-model="product.stock"></v-text-field></v-col>
      <v-col cols="1"></v-col>
      <v-col cols="2"><v-text-field dense type="number" min="0" :label="$t('price')" :rules="rules" v-model="data.price"></v-text-field></v-col>
      <!-- <v-col cols="2" style="margin-top:10px">
        <label>
          <input type="radio" name="unit" value="TMT">
          <span>TMT</span>
        </label>
        <v-spacer></v-spacer>
        <label>
          <input type="radio" name="unit" value="USD">
          <span>USD</span>
        </label>
      </v-col> -->
      <v-radio-group v-model="data.priceUnit" row>
        <v-radio
          label="USD"
          value="USD"
          color="white"
        ></v-radio>
        <v-radio
          label="TMT"
          value="TMT"
          color="white"
        ></v-radio>
      </v-radio-group>
      <v-col cols="2">
        <v-text-field dense type="number" :label="$t('discount')" v-model="product.discount"></v-text-field>
      </v-col>
    </v-row>

    <v-row style="padding:12px 24px">
      <v-col cols="3">
          <!-- v-model="brand" -->
        <v-select
          :label="$t('brand')"
          :items="brands"
          @change="brandChange($event)"
          style="margin-top:-30px;"
        ></v-select>
      </v-col>
      <v-col cols="3">
        <v-select
          :label="$t('category')"
          :items="kategories.name"
          @change="kategoryChange($event)"
          style="margin-top:-30px;"
        ></v-select>
      </v-col>
      <v-col cols="3">
        <v-select
          v-if="openSub"
          :label="$t('subCategory')"
          :items="takeSubNames()"
          @change="subkategoryChange($event)"
          style="margin-top:-30px;"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-checkbox
          
          :label="$t('save')"
          value="check box 1"
        >
        </v-checkbox>
      </v-col>
      <v-col cols="2">
        <v-checkbox
          :label="$t('save')"
          value="check box 2"
        >
        </v-checkbox>
      </v-col>
    </v-row>

    <v-btn color="info" @click="sendProduct">{{$t('save')}}</v-btn>

    <!--  kategory, subkategory, banner -->
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
      data:{
        price:'',
        priceUnit:0,
        subCategories:[],
      },
      brands:[],
      fullBrands:[],
      tinyInit:{},
      dialogDelete: false,
      rules:[
        value => !!value || "Zerur",
      ],
      index:-1,
      product: {
        name_tm: '',
        name_ru: '',
        body_tm: '',
        body_ru: '',
        price_tm:null,
        price_usd:null,
        isAction:false, //aksiya barmy yok
        isGift:false,
        category_id:'',
        subcategory_id:'',
        brand_id:'',
        product_code:'',
        stock:'',
        discount:''
      },
      images:[],
      productImageSources: [],
      openSub:false,
    }
  },
  async mounted(){
    document.querySelector(".productAdd .v-input__icon button").innerHTML='<svg height="20" width="20"><path d="M10 13.271 5.708 8.979 6.958 7.729 9.125 9.896V3.333H10.875V9.896L13.042 7.729L14.292 8.979ZM5.083 16.667Q4.354 16.667 3.844 16.156Q3.333 15.646 3.333 14.917V12.5H5.083V14.917Q5.083 14.917 5.083 14.917Q5.083 14.917 5.083 14.917H14.917Q14.917 14.917 14.917 14.917Q14.917 14.917 14.917 14.917V12.5H16.667V14.917Q16.667 15.646 16.156 16.156Q15.646 16.667 14.917 16.667Z" fill="#FFFFFF"/></svg>'
    this.fullBrands = await this.getBrands();
  },
  computed:{
    ...mapGetters({
      kategories: 'kategory/kategoryNames',
      allCategory: 'kategory/kategory',
    }),
  },
  methods:{
    async getBrands(){
      const { data } = await this.$axios.get(`/admin/brands/all`);
      const obj = {
        name:[],
        id:[]
      }
      for(let i = 0; i<data.rows.length; i++){
        this.brands.push(data.rows[i].name)
      }
      return data.rows
    },
    takeSubNames(){
      const newArr = []
      for(let i = 0; i<this.data.subCategories.length; i++){
        newArr.push(this.data.subCategories[i].name_tm)
      } 
      return newArr;
    },
    deleteItem(item){
      this.dialogDelete = true;
    },
    closeDelete(){
      this.dialogDelete = false;
    },
    deleteItemConfirm(){
      this.dialogDelete = false;
      this.productImageSources.splice(this.index, 1)
      this.images.splice(this.index, 1)
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
    brandChange(value){
      for(let i = 0; i<this.fullBrands.length; i++){
        if(this.fullBrands[i].name == value){
          this.product.brand_id = this.fullBrands[i].brand_id;
          break
        }
      }
    },
    kategoryChange(value){
      const newCategory = this.allCategory.find(function(category){
        if(category.name_tm == value){
          return category
        }
      })
      this.product.category_id=newCategory.category_id
      if(newCategory.subcategories.length>0){
        this.data.subCategories = newCategory.subcategories
        this.openSub = true;
      }else{
        this.openSub = false;
      }
    },
    subkategoryChange(value){
      for(let i = 0; i<this.data.subCategories.length; i++){
        if(this.data.subCategories[i].name_tm == value){
          this.product.subcategory_id = this.data.subCategories[i].subcategory_id;
          break
        }
      }
    },
    sendProduct(){
      const valid = false;
      if(this.data.priceUnit === 'USD'){
        this.product.price_usd = this.data.price+' '+this.data.priceUnit;
      }else if(this.data.priceUnit === 'TMT'){
        this.product.price_tm = this.data.price+' '+this.data.priceUnit;
      }

      console.log(this.product.body_tm)
      if(this.images.length>0 && this.product.name_tm && this.product.name_ru && this.product.product_code && this.product.stock && this.data.price && this.data.priceUnit && this.product.discount && this.product.brand_id && this.product.category_id){ //body bosh bolup barsa mesele bolarmy soramaly
        console.log('valid')
      }else{
        console.log('Boshluklary dolduryn')
      }

      console.log(this.product);
    }
  },
}
</script>

<style>
</style>