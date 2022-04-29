<template>
  <div>
    <v-col>
      <v-file-input
        v-model="product.images"
        truncate-length="15"
        multiple
        @change="uploadProductImages"
      ></v-file-input>

      <div v-if="productImageSources.length" class="perfume__images__wrapper">
        <p>Загруженные изображения:</p>
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
    </v-col>
  </div>
</template>

<script>
export default {
  data(){
    return {
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
    deleteUploadedImageWithIndex(index){
      console.log(index)
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
      this.$confirm({
        message: 'Вы уверены, что хотите удалить изображение?',
        button: {
          no: 'Нет',
          yes: 'Да',
        },

        callback: (confirm) => {
          if (confirm) {
            this.productImageSources.splice(index, 1)
            this.product.images.splice(index, 1)
          }
        },
      })
    },
  }
}
</script>

<style>

</style>