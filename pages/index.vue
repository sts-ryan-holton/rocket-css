<template>
  <div>
    <section class="rkt-hero rkt-hero-extra-large rkt-marginless rkt-page-hero">
      <div class="rkt-hero-body">
        <div class="rkt-container">
          <div class="rkt-row">
            <div class="rkt-col rkt-col-is-three-quarters-desktop rkt-is-tablet">
              <h1 class="rkt-font-weight-light rkt-marginless"><strong>{{ brand }}</strong> {{ title }}</h1>
              <div class="rkt-d-flex-tablet rkt-flex-column-mobile rkt-p-y-2 rkt-home-buttons">
                <nuxt-link to="/docs" class="rkt-btn rkt-btn-primary rkt-btn-large rkt-flex-fill-tablet">{{ button.one.text }}<img src="~/assets/icons/rocket.svg" alt="Rocket CSS - Lightweight Flexbox framework" class="rkt-m-l-1 rkt-align-middle rocket-icon rkt-d-none-mobile"></nuxt-link>
                <a href="#" class="rkt-btn rkt-btn-outline-primary rkt-btn-large rkt-flex-fill-tablet rkt-m-l-1 rkt-marginless-mobile"><strong>{{ button.two.text }}</strong> {{ rocketVersion }}<i class="material-icons rkt-align-text-bottom rkt-m-l-1 rkt-d-none-mobile">save_alt</i></a>
              </div>
              <p class="rkt-marginless rkt-text-muted">
                <small>Version: {{ rocketVersion }}</small>
              </p>
            </div>
            <div class="rkt-col rkt-text-center">
              <img src="~/assets/icons/rocket-colour.svg" alt="Rocket CSS - Lightweight Flexbox framework" class="rkt-img-fluid rocket-brand">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="rkt-bg-light rkt-p-y-5 rkt-marginless rkt-home-guide">
      <div class="rkt-container">
        <div class="rkt-row rkt-is-tablet">
          <div class="rkt-col">
            <div class="rkt-p-r-2">
              <h2 class="rkt-marginless rkt-font-weight-normal">Installation</h2>
              <p class="rkt-marginless rkt-p-t-1 rkt-p-b-2 rkt-font-weight-light">
                Installing Rocket CSS is easy. Simply download the Rocket CSS framework from <a href="https://github.com/sts-ryan-holton/rocket-css/releases" target="_blank">Github</a> or NPM and include Rocket CSS in your project.
              </p>
            </div>
          </div>
          <div class="rkt-col">
            <h2 class="rkt-marginless rkt-font-weight-normal">Community</h2>
            <p class="rkt-marginless rkt-p-t-1 rkt-p-b-2 rkt-font-weight-light">
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
      rocketVersion: "v0.1.0-Alpha.1",
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
