<template>
  <div>
    <app-nav></app-nav>
    <div class="container-fluid">
      <div class="row is-tablet">
        <div class="col col-is-one-quarter docs-nav-sidebar">
          <docs-nav></docs-nav>
        </div>
        <div class="col">
          <nuxt/>
        </div>
      </div>
    </div>
    <docs-footer></docs-footer>
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue';
import Footer from '~/components/docs-footer.vue';
import DocsNav from '~/components/docs-nav.vue';
export default {
  components: {
    'app-nav': Navbar,
    'docs-footer': Footer,
    'docs-nav': DocsNav
  },
  scrollToTop: true,
  data () {
    return {

    }
  }
}
</script>
