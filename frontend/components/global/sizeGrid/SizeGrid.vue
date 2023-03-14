<template>
  <div class="size-grid">
    <div>
      Выберите размер
      <v-tabs
        v-model="tab"
      >
        <v-tab class="location"
               v-for="(location, index) in locations"
               :key="location"
               :value="location"
        >{{ location }}
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item v-for="i in locations.length"
                       :key="i"
                       class="d.felx"
        >
          <div class="grid-container r-container">
            <button
              :class="`grid-item ${chosenSize === grid.id ? 'chosen-size' : ''} ${!availableSizes.includes(grid.id) ? 'not-available' : ''}`"
              v-for="(grid, index) in mainGrid"
              :key="index"
              @click="isSizeAvailable(grid.id)"
            >{{grid.size}}
            </button>
          </div>

        </v-window-item>
      </v-window>
      <v-btn
        class="btn"
        :disabled="!chosenSize"
      >КУПИТЬ</v-btn>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SizeGrid',
  props: {
    sizeGrids: {
      type: [],
      default: []
    },
    availableSizes: {
      type: [],
      default: []
    }
  },
  data: () => {
    return {
      locations: ['eu', 'ru', 'us', 'cm'],
      chosenSize: null,
      tab: 0
    }
  },
  computed: {
    mainGrid: function () {
      return this.sizeGrids.map(sizeGrid => {
        return {
          size: sizeGrid[`${this.locations[this.tab]}Size`],
          id: sizeGrid.sizeId
        }
      })
    }
  },
  methods: {
    isSizeAvailable(id) {
      if (this.availableSizes.includes(id)) {
        this.chosenSize = id
      } else {
        alert("Size is not available")
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "SizeGrid";
</style>
