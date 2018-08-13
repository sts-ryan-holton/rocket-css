<template>
  <div>
    <footer class="rkt-bg-primary rkt-p-y-2">
      <div class="rkt-container">
        <div class="rkt-row">
          <div class="rkt-col rkt-footer-links">
            <ul class="rkt-paddingless rkt-marginless">
              <li>
                <a href="https://github.com/sts-ryan-holton/rocket-css" target="_blank" class="rkt-text-white rkt-font-weight-normal">Github</a>
              </li>
              <li class="rkt-m-l-2">
                <nuxt-link to="/docs" class="rkt-text-white rkt-font-weight-normal" exact>Documentation</nuxt-link>
              </li>
              <li class="rkt-m-l-2">
                <nuxt-link to="/about" class="rkt-text-white rkt-font-weight-normal" exact>About</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="rkt-row">
          <div class="rkt-col">
            <small>
              <p v-html="copyright" class="rkt-text-white rkt-font-weight-light rkt-marginless"></p>
            </small>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      copyright: "Rocket CSS is built by <a href='https://github.com/sts-ryan-holton' target='_blank' class='rkt-text-white rkt-font-weight-normal'>Ryan</a> and maintained by a group of <a href='https://github.com/sts-ryan-holton/rocket-css/graphs/contributors' target='_blank' class='rkt-text-white rkt-font-weight-normal'>collaborators.</a>"
    }
  }
}
</script>
