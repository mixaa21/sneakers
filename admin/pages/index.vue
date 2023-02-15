<template>
  <div>
    <v-form
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="info.name"
        label="name"
      ></v-text-field>
      <v-text-field
        label="price"
        v-model="info.price"
      ></v-text-field>
      <input
        name="file"
        type="file"
        ref="input"
        multiple
        :accept="allowedFiles.join(',')"
        @change="addFile($event)"
      >
    </v-form>
    <v-btn @click="$refs.input.click()">Добавить файл</v-btn>
    <v-btn @click="send">Отправить</v-btn>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => {
    return {
      info: {
        name: null,
        price: null,
        images: []
      },
      allowedFiles: [],
    }
  },
  methods: {
    async addFile(e) {
      const formData = new FormData()
      for(let i = 0; i < e.target.files.length; i++) {
        formData.append(this.info.name, e.target.files[i])
      }
      const entity = (await this.$axios.post('http://localhost:3001/products', this.info)).data

      formData.append('fProductId', JSON.stringify(entity.productId))
      const products = (await this.$axios.post('http://localhost:3001/product-images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })).data

    },
    async send() {
      const products = (await this.$axios.post('http://localhost:3001/products', this.info.images)).data
    }
  }
}
</script>
