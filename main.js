var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'Vue Mastery',
    selectedVariant: 0,
    inventory: 11,
    details: ['80%', '20%', 'neutral'],
    variants: [
      {
        variantId: 1,
        variantColor: "green",
        variantImage: "image.jpg",
        variantQuantity: 10
      },
      {
        variantId: 2,
        variantColor: "blue",
        variantImage: "image2.jpg",
        variantQuantity: 0
      },
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(index) {
      this.selectedVariant = index
      console.log(index)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
})