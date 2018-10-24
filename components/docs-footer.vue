<template>
  <div>
    <footer class="bg-primary p-y-2">
      <div class="container">
        <div class="row">
          <div class="col footer-links">
            <ul class="paddingless marginless">
              <li>
                <a href="https://github.com/sts-ryan-holton/rocket-css" target="_blank" class="text-white font-weight-normal">Github</a>
              </li>
              <li class="m-l-2">
                <nuxt-link to="/" class="text-white font-weight-normal" exact>Home</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <small>
              <p v-html="copyright" class="text-white font-weight-light marginless"></p>
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
      copyright: "Rocket CSS is built by <a href='https://github.com/sts-ryan-holton' target='_blank' class='text-white font-weight-normal'>Ryan</a> and maintained by a group of <a href='https://github.com/sts-ryan-holton/rocket-css/graphs/contributors' target='_blank' class='text-white font-weight-normal'>collaborators.</a>"
    }
  }
}
</script>
