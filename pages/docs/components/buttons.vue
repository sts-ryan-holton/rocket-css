<template>
  <div>
    <section class="rkt-hero rkt-hero rkt-hero-small rkt-marginless">
      <div class="rkt-hero-body">
        <div class="rkt-container">
          <div class="rkt-row">
            <div class="rkt-col">
              <h1 class="rkt-font-weight-bold rkt-m-y-0">{{ banner.mainTitle }}</h1>
              <p class="rkt-lead rkt-text-muted rkt-m-b-0">
                {{ banner.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'docs',
  scrollToTop: true,
  data () {
    return {
      rocketVersion: "v0.1.0-Alpha.1",
      banner: {
        mainTitle: "Buttons",
        description: "Buttons are used everywhere in applications. Use the Rocket CSS buttons component to add navigation to your site."
      }
    }
  },
  head: {
    title: 'Buttons - Rocket CSS',
    meta: [
      { hid: 'description', name: 'description', content: 'Quickly add our button component to your application using Rocket CSS.' }
    ]
  }
}
</script>