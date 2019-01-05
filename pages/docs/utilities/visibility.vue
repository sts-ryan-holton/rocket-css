<template>
  <div>
    <section class="hero hero hero-small marginless docs-hero">
      <div class="hero-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <h1 class="font-weight-bold m-y-0">{{ banner.mainTitle }}</h1>
              <p class="lead text-muted m-b-0">
                {{ banner.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="basics" class="font-weight-bold m-y-0 section-title">Basics<a href="#basics" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          We have a few classes for choosing what is displayed and how in Rocket CSS.
        </p>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="display" class="font-weight-bold m-y-0 section-title">Display<a href="#display" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Change the <strong>display</strong> property.
        </p>
        <ul class="list">
          <li>
            - <code>.d-none</code> to display <strong>none.</strong>
          </li>
          <li>
            - <code>.d-inline-block</code> to display <strong>inline-block.</strong>
          </li>
        </ul>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="visibility" class="font-weight-bold m-y-0 section-title">Visibility<a href="#visibility" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Change the <strong>visibility</strong> property.
        </p>
        <ul class="list">
          <li>
            - <code>.visibility-hide</code> to set visibility to <strong>hidden.</strong>
          </li>
          <li>
            - <code>.visibility-show</code> to set visibility to <strong>visible.</strong>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'docs',
  scrollToTop: true,
  data () {
    return {
      rocketVersion: "v1.2.0",
      banner: {
        mainTitle: "Visibility",
        description: "Control what content is displayed and how with Rocket CSS."
      }
    }
  },
  head: {
    title: 'Visibility - Rocket CSS',
    meta: [
      { hid: 'description', name: 'description', content: 'Control what content is displayed and how with Rocket CSS.' }
    ]
  }
}
</script>
