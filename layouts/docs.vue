<template>
  <div>
    <app-nav></app-nav>
    <div class="rkt-container-fluid">
      <div class="rkt-row rkt-is-tablet">
        <div class="rkt-col rkt-col-is-one-quarter rkt-docs-nav-sidebar">
          <docs-nav></docs-nav>
        </div>
        <div class="rkt-col">
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
