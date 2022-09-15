<template>
  <section class="container">
    <div v-for="(restaurant) in restaurants" :key="restaurant.id">
      <v-card
          class="mx-3 my-3"
          max-width="344"
          outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              {{ restaurant.address }},{{ restaurant.district.name}}
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ restaurant.internalId }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ restaurant.description }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
              tile
              size="80"
              color="grey"
          ></v-list-item-avatar>
        </v-list-item>
        <v-card-actions>
          <v-btn
              outlined
              rounded
              text
              color="primary"
          >
            Details
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </section>
</template>

<script>
import RestaurantService from '../services/restaurants-service';
export default {
  name: "restaurants",
  data() {
    return {
      dialog: false,
      defaultItem: {},
      restaurants: []
    }
  },
  beforeMount() {
    this.getRestaurants();
  },
  computed: { },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  methods: {
    async getRestaurants() {
      await RestaurantService.getAll().then(r => {
        this.restaurants = r.data
      })
    },
    navigateToEditRestaurant(id) {
      this.$router.push({name: 'edit-restaurant', params: { id: id}});
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
