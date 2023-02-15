<template>
  <div>
    <v-form
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="info.name"
        label="name"
        required
        :rules="nameRule"
      ></v-text-field>
      <v-text-field
        label="price"
        v-model="info.price"
        required
        :rules="priceRule"
      ></v-text-field>
      <v-file-input
        :accept="allowedFiles.join(',')"
        placeholder="Добавьте фото товара"
        prepend-icon="mdi-camera"
        label="file"
        ref="input"
        multiple
        @change="info.images = $event"
        required
        :rules="filesRule"
      />
      <v-btn @click="$refs.input.click()">Добавить файл</v-btn>
      <v-btn @click="send">Отправить</v-btn>
    </v-form>

  </div>
</template>

<script lang="ts">

type Info = {
  name: string
  price: number
  images: Array<string>
}

interface RuleType {
  (value: string): boolean
}

interface RulesType {
  [index: number]: RuleType
}

import Vue from 'vue'

export default Vue.extend( {
  name: 'IndexPage',
  data: () => {
    return {
      info: {
        name: '',
        price: 0,
        images: []
      } as Info,
      allowedFiles: ['.jpg','.png','.avif'],
      nameRule: [v => !!v || 'Введите имя'] as RulesType,
      priceRule: [v => !!v || 'Введите цену'] as RulesType,
      filesRule: [v => v?.length > 32 && v?.length < 34 || 'Добавьте 34 изображения',] as Array<(value: any)=>boolean>
    }
  },
  methods: {
    async send() {
      const valid = (this?.$refs.form as Vue & { validate: () => boolean }).validate()
      if (valid) {
        const createdProduct = (await this.$axios.post('http://localhost:3001/products', this.info)).data
        console.log(createdProduct);
        const formData = new FormData()
        for(let i = 0; i < this.info.images.length; i++) {
          formData.append(this.info.name, this.info.images[i])
        }
        formData.append('fProductId', JSON.stringify(createdProduct.productId))
        const products = (await this.$axios.post('http://localhost:3001/product-images', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })).data
      }
    }
  }
})
</script>
