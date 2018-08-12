<template>
  <div>
    <section class="rkt-hero rkt-hero-large rkt-bg-light rkt-marginless">
      <div class="rkt-hero-body">
        <div class="rkt-container">
          <div class="rkt-row">
            <div class="rkt-col">
              <h1 class="rkt-marginless">{{ pageTitle }}</h1>
              <p class="rkt-lead">
                {{ description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="rkt-p-t-3">
      <div class="rkt-container">
        <div class="rkt-row">
          <div class="rkt-col rkt-col-is-three-quarters rkt-ml-auto rkt-mr-auto rkt-is-tablet">
            <h2 v-html="section.one.title" class="rkt-font-weight-normal rkt-m-y-0"></h2>
            <p v-html="section.one.text" class="rkt-text-dark rkt-font-weight-light"></p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="rkt-container">
        <div class="rkt-row">
          <div class="rkt-col rkt-col-is-three-quarters rkt-ml-auto rkt-mr-auto rkt-is-tablet">
            <h2 v-html="section.two.title" class="rkt-font-weight-normal rkt-m-y-0"></h2>
          </div>
        </div>
        <div class="rkt-row">
          <div class="rkt-col rkt-col-is-three-quarters rkt-ml-auto rkt-mr-auto rkt-is-tablet">
            <div class="rkt-row rkt-text-center rkt-is-mobile">
              <div class="rkt-col">
                <h4 class="rkt-marginless">Lightweight</h4>
                <p class="rkt-font-weight-light">
                  <small>All our components are lightweight.</small>
                </p>
                <img src="~/assets/icons/lightweight.svg" alt="Rocket CSS - Lightweight components" class="rkt-img-fluid feature-icon">
              </div>
              <div class="rkt-col">
                <h4 class="rkt-marginless">Pure CSS / No JS</h4>
                <p class="rkt-font-weight-light">
                  <small>A CSS only framework.</small>
                </p>
                <img src="~/assets/icons/css.svg" alt="Rocket CSS - CSS only, no JS" class="rkt-img-fluid feature-icon">
              </div>
              <div class="rkt-col">
                <h4 class="rkt-marginless">Built with Flexbox</h4>
                <p class="rkt-font-weight-light">
                  <small>No more static layouts.</small>
                </p>
                <img src="~/assets/icons/flexbox.svg" alt="Rocket CSS - Flexbox CSS framework" class="rkt-img-fluid feature-icon">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="rkt-p-b-3">
      <div class="rkt-container">
        <div class="rkt-row">
          <div class="rkt-col rkt-col-is-three-quarters rkt-ml-auto rkt-mr-auto rkt-is-tablet">
            <h2 v-html="section.three.title" class="rkt-font-weight-normal rkt-m-y-0"></h2>
            <p v-html="section.three.text" class="rkt-text-dark rkt-font-weight-light"></p>
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
      pageTitle: "About Rocket CSS",
      description: "Learn more about Rocket CSS, how it started and how it aims to be different from other mainstream CSS frameworks.",
      section: {
        one: {
          title: "How <strong>Rocket CSS</strong> is different",
          text: "Rocket CSS is a small, lightweight CSS-only framework that allows you to quickly build web applications without the hassle of remembering 1,000s of classes. Unlike other CSS frameworks like Twitter Bootstrap, Rocket CSS comes with a handful of simple components which are all prefixed with the class <code>.rkt-</code> which makes it easier to integrate Rocket CSS into an existing site."
        },
        two: {
          title: "<strong>Rocket CSS</strong> features"
        },
        three: {
          title: "The <strong>fastest</strong> CSS framework documentation",
          text: "Unlike other CSS frameworks, our documentation is super fast thanks to <a href='https://vuejs.org/' target='_blank'>Vue JS.</a> We utilise <a href='https://nuxtjs.org/' target='_blank'>Nuxt JS</a> which extends and provides a boilerplate for building SPAs, great for building out documentation for Rocket CSS."
        }
      }
    }
  },
  head: {
    title: 'About Rocket CSS - Lightweight, modern CSS framework.',
    meta: [
      { hid: 'description', name: 'description', content: 'Learn more about Rocket CSS, how it started and how it aims to be different from other mainstream CSS frameworks.' }
    ]
  }
}
</script>
