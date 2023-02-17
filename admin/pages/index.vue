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
      <v-text-field
        label="price"
        v-model="info.brand"
        required
        :rules="nameRule"
      ></v-text-field>
      <v-file-input
        :accept="allowedFiles.join(',')"
        placeholder="Добавьте фото товара"
        prepend-icon="mdi-camera"
        label="file"
        ref="input"
        multiple
        @change="images = $event"
        required
        :rules="filesRule"
      />
      <v-select
        v-model="info.brand"
        :items="brands.map(brand => brand.brandName)"
        @change="getSizes"
      ></v-select>
      <div>{{brands}}</div>
      <div>{{sizes}}</div>
      <v-btn @click="$refs.input.click()">Добавить файл</v-btn>
      <v-btn @click="send">Отправить</v-btn>
    </v-form>

  </div>
</template>

<script lang="ts">

type Info = {
  name: string
  price: number
  brand: string
}

type BrandType = {
  brandId: number,
  brandName: string
}

type BrandsType = Array<BrandType>

interface RuleType {
  (value: string): boolean
}

interface RulesType {
  [index: number]: RuleType
}

import Vue from 'vue'

export default Vue.extend( {
  name: 'IndexPage',
  async asyncData({$axios}) {
    const brands =  (await $axios.get('http://localhost:3001/brands')).data
    const sizes =  (await $axios.post('http://localhost:3001/sizes', {
      sizeId: 1
    })).data
    return {
      brands,
      sizes
    }
  },
  data: () => {
    return {
      info: {
        name: '',
        price: 0,
        brand: 'sdf'
      } as Info,
      brands: [] as BrandsType,
      images: [],
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
        const formData = new FormData()
        for(let i = 0; i < this.images.length; i++) {
          formData.append(this.info.name, this.images[i])
        }
        formData.append('info', JSON.stringify(this.info))
        const createdProduct = (await this.$axios.post('http://localhost:3001/common/createProduct', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })).data
      }
    },
    async getSizes() {
      const brandId = (this.brands.find(brand => brand.brandName === this.info.brand))?.brandId
      console.log(brandId)
    }
  }
})
</script>
