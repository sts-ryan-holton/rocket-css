<template>
  <div>
    <app-nav></app-nav>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue';
import Footer from '~/components/footer.vue';
export default {
  components: {
    'app-nav': Navbar,
    'app-footer': Footer
  },
  data () {
    return {

    }
  }
}
</script>
