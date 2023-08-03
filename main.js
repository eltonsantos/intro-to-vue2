Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image" alt="">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <!-- <p v-show="inStock">In stock</p> -->
        <p v-if="inStock">In stock</p>
        <!-- <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p> -->
        <p v-else :class="{ outOfStock: !inStock }">Out of stock</p>
        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div
            v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="color-box"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"
        >
          <!-- <p @mouseover="updateProduct(variant.variantImage)">{{ variant.variantColor }}</p> -->
        </div>

        <button
          v-on:click="addToCart"
          :disable="!inStock"
          :class="{ disabledButton: !inStock }"
        >
          Add to cart
        </button>

        <div class="cart"><p>Cart {{ cart }}</p></div>
      </div>
    </div>
  `,
  data() {
    return {
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
    }
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
    },
    shipping() {
      if (this.premium) {
        return "FREE"
      } else {
        return 2.99
      }
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true
  }
})