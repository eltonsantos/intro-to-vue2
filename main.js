var app = new Vue({
  el: '#app',
  data: {
    product: 'Testxxxxe',
    image: 'image.jpg',
    inventory: 11,
    inStock: true,
    details: ['80%', '20%', 'neutral'],
    variants: [
      {
        variantId: 1,
        variantColor: "green",
        variantImage: "image.jpg"
      },
      {
        variantId: 2,
        variantColor: "blue",
        variantImage: "image2.jpg"
      },
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})