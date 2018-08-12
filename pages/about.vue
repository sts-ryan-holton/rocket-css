<template>
  <div>
    <section class="rkt-hero rkt-hero-extra-large rkt-marginless">
      <div class="rkt-hero-body">
        <div class="rkt-container">
          <div class="rkt-row">
            <div class="rkt-col">
              about
            </div>
            <div class="rkt-col rkt-text-center">
              <img src="~/assets/icons/rocket-colour.svg" alt="Rocket CSS - Lightweight Flexbox framework" class="rkt-img-fluid rocket-brand">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="rkt-bg-light rkt-p-y-5 rkt-marginless">
      <div class="rkt-container">
        <div class="rkt-row">
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
