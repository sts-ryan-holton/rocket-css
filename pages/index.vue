<template>
  <div>
    <section class="rkt-hero rkt-hero-extra-large">
      <div class="rkt-hero-body">
        <div class="rkt-container">
          <div class="rkt-row">
            <div class="rkt-col rkt-col-half">
              <div class="rkt-row">
                <div class="rkt-col">
                  <h1 class="rkt-font-weight-light rkt-marginless"><strong>{{ brand }}</strong> {{ title }}</h1>
                </div>
              </div>
              <div class="rkt-row">
                <div class="rkt-col">
                  <nuxt-link to="/docs/getting-started/" class="rkt-btn rkt-btn-primary rkt-btn-large">{{ button.one.text }}<img src="~/assets/icons/rocket.svg" class="rkt-m-l-1 rkt-align-middle rocket-icon"></nuxt-link>
                  <a href="#" class="rkt-btn rkt-btn-outline-primary rkt-btn-large rkt-m-l-1"><strong>{{ button.two.text }}</strong> {{ rocketVersion }}<i class="material-icons rkt-align-text-bottom rkt-m-l-1">save_alt</i></a>
                </div>
              </div>
              <div class="rkt-row">
                <div class="rkt-col">
                  <p class="rkt-marginless">
                    <small>Version: {{ rocketVersion }}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rocketVersion: "v0.1.0",
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
