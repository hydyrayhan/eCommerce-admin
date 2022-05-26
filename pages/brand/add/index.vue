<template>
  <div class="brand_add">
    <v-col cols="5">
        {{$t('chooseImage')}}
          <!-- truncate-length="15" -->
        <v-file-input
          v-model="brand.images"
          @change="uploadProductImages"
        ></v-file-input>
      </v-col>
      <v-col cols="1"></v-col>
      <!-- <v-col cols="5"></v-col> -->
      <v-col cols="12">
        <v-text-field :label="$t('name')" v-model="brand.name"></v-text-field>
      </v-col>
      <v-btn color="info" @click="sendBrand">{{$t('save')}}</v-btn>
      {{kategories}}
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
      productImageSources: [],
    }
  },
  computed:{
    ...mapGetters({
      kategories: 'kategory/kategory',
    }),
  },
  mounted(){
    document.querySelector(".brand_add .v-input__icon button").innerHTML='<svg height="20" width="20"><path d="M10 13.271 5.708 8.979 6.958 7.729 9.125 9.896V3.333H10.875V9.896L13.042 7.729L14.292 8.979ZM5.083 16.667Q4.354 16.667 3.844 16.156Q3.333 15.646 3.333 14.917V12.5H5.083V14.917Q5.083 14.917 5.083 14.917Q5.083 14.917 5.083 14.917H14.917Q14.917 14.917 14.917 14.917Q14.917 14.917 14.917 14.917V12.5H16.667V14.917Q16.667 15.646 16.156 16.156Q15.646 16.667 14.917 16.667Z" fill="#FFFFFF"/></svg>'
  },
  methods:{
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
    async sendBrand(){
      try {
        console.log(this.brand.name)
        const res = await this.$axios.post(`/admin/brands/add`,{name: this.brand.name})
        console.log(res.data.brand_id);
        if(res.status == 201){
          const ress = await this.$axios.post(`/admin/brands/upload-image/${res.data.brand_id}`,this.returnBrandFormData())
          if(ress.status === 201){
            await this.$store.dispatch('brand/fetchbrand',{limit:20,offset:0})
            this.$router.push('/brand')
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
    }
    // returnPerfumeFormData() {
    //   const formData = new FormData()

    //   formData.append('name', this.perfume.name)
    //   for (const key in this.perfume.shortDescription) {
    //     formData.append(
    //       `shortDescription[${key}]`,
    //       this.perfume.shortDescription[key]
    //     )
    //     formData.append(
    //       `fullDescription[${key}]`,
    //       this.perfume.fullDescription[key]
    //     )
    //   }

    //   for (const image of this.perfume.images) {
    //     formData.append('image', image)
    //   }
    //   formData.append('sizeIds[]', this.returnSizeIDs())
    //   formData.append('categoryIds[]', this.returnCategoryIds())
    //   formData.append('unit', this.perfume.unit)
    //   formData.append('price', this.perfume.price)
    //   formData.append('gender', this.perfume.gender)

    //   return formData
    // },
  }
}
</script>

<style>

</style>