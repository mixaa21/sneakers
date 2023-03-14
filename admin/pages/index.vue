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
      <v-select
        label="gender"
        v-model="info.gender"
        :items="gender"
        @change="getSizes"
      ></v-select>
      <v-select
        label="brand"
        v-model="info.fBrand"
        :items="brands"
        item-text="brandName"
        item-value="brandId"
        @change="getSizes"
      ></v-select>
      <div v-for="size in sizes">
        <v-checkbox
          :key="size.sizeId"
          :label="size.usSize"
          :value="size.sizeId"
          v-model="info.selectedSizes"
        />
      </div>
      <div>{{info.selectedSizes}}</div>
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
      <v-btn @click="send">Отправить</v-btn>
    </v-form>

  </div>
</template>

<script lang="ts">

type Info = {
  name: string
  price: number
  fBrand: number | null
  gender: string
  selectedSizes: Array<number>
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
    return {
      brands,
    }
  },
  data: () => {
    return {
      info: {
        name: '',
        price: 0,
        fBrand: null,
        gender: '',
        selectedSizes: []
      } as Info,
      sizes: [],
      brands: [] as BrandsType,
      gender: ['man','woman'] as Array<string>,
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
      if (this.info.gender && this.info.fBrand) {

        this.sizes = (await this.$axios.get(`http://localhost:3001/sizes/${this.info.fBrand}/${this.info.gender[0]}`)).data
      }
    }
  }
})
</script>
