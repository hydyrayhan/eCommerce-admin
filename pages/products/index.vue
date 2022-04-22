<template>
  <div>
      <!-- :disabled="canAddPerfume" -->
    <v-btn
      color="info"
      class="mb-5"
      @click="$redirect('/products/add')"
    >
       Add product
    </v-btn>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>