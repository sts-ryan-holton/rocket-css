<template>
  <div>
    <section class="hero hero-extra-large marginless page-hero">
      <div class="hero-body">
        <div class="container">
          <div class="row">
            <div class="col col-is-three-quarters-desktop is-tablet">
              <h1 class="font-weight-light marginless"><strong>{{ brand }}</strong> {{ title }}</h1>
              <div class="d-flex-tablet flex-column-mobile p-y-2 home-buttons">
                <nuxt-link to="/docs" class="btn btn-primary btn-large flex-fill-tablet">{{ button.one.text }}<img src="~assets/icons/rocket.svg" alt="Rocket CSS - Lightweight Flexbox framework" class="m-l-1 align-middle rocket-icon d-none-mobile"></nuxt-link>
                <a href="https://github.com/sts-ryan-holton/rocket-css/archive/1.1.0.zip" class="btn btn-outline-primary btn-large flex-fill-tablet m-l-1 marginless-mobile" download><strong>{{ button.two.text }}</strong> {{ rocketVersion }}<i class="material-icons align-text-bottom m-l-1 d-none-mobile">save_alt</i></a>
              </div>
              <p class="marginless text-muted">
                <small>Version: {{ rocketVersion }}</small>
              </p>
            </div>
            <div class="col text-center">
              <img src="~assets/icons/rocket-colour.svg" alt="Rocket CSS - Lightweight Flexbox framework" class="img-fluid rocket-brand">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light p-y-5 marginless home-guide">
      <div class="container">
        <div class="row is-tablet">
          <div class="col">
            <div class="p-r-2">
              <h2 class="marginless font-weight-normal">Installation</h2>
              <p class="marginless p-t-1 p-b-2 font-weight-light">
                Installing Rocket CSS is easy. Simply download the Rocket CSS framework from <a href="https://github.com/sts-ryan-holton/rocket-css/releases" target="_blank">Github</a> and include Rocket CSS in your project.
              </p>
            </div>
          </div>
          <div class="col">
            <h2 class="marginless font-weight-normal">Community</h2>
            <p class="marginless p-t-1 p-b-2 font-weight-light">
              <strong>Rocket CSS</strong> is managed by the community. If you'd like to see a particular feature implemented into this framework, feel free to open a Github issue.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data () {
    return {
      rocketVersion: "v1.1.0",
      brand: "Rocket CSS",
      title: "is an open source, lightweight CSS framework built using Flexbox.",
      button: {
        one: {
          text: "Get Started"
        },
        two: {
          text: "Download"
        }
      }
    }
  },
  head: {
    title: 'Rocket CSS - simple, lightweight CSS framework built using Flexbox',
    meta: [
      { hid: 'description', name: 'description', content: 'Rocket CSS is an open source, lightweight CSS framework built using Flexbox. Download for FREE today.' }
    ]
  }
}
</script>
