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
          Rocket CSS provides a few useful helper classes for quick, easy application edits.
        </p>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="margin-and-padding" class="font-weight-bold m-y-0 section-title">Margin &amp; Padding<a href="#margin-and-padding" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Remove <strong>margin</strong> and <strong>padding</strong> using these helpers in Rocket CSS.
        </p>
        <ul class="list">
          <li>
            - <code>.marginless</code> to <strong>remove margin.</strong>
          </li>
          <li>
            - <code>.paddingless</code> to <strong>remove padding.</strong>
          </li>
        </ul>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="responsiveness-margin-and-padding" class="font-weight-bold m-y-0 section-title">Responsiveness: Margin &amp; Padding<a href="#responsiveness-margin-and-padding" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          You can add one of the responsive breakpoints to either <strong>marginless</strong> or <strong>paddingless</strong>. See our example below:
        </p>
        <ul class="list">
          <li>
            - <code>.marginless<strong>-widescreen</strong></code> to <strong>remove margin on widescreen and down.</strong>
          </li>
        </ul>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="width-and-height" class="font-weight-bold m-y-0 section-title">Width &amp; Height<a href="#width-and-height" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Add these <strong>width</strong> and <strong>height</strong> helpers.
        </p>
        <ul class="list">
          <li>
            - <code>.w-100</code> to add <strong>100% width.</strong>
          </li>
          <li>
            - <code>.h-100</code> to add <strong>100% height.</strong>
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
      rocketVersion: "v1.1.0",
      banner: {
        mainTitle: "Helpers",
        description: "Use these helpers to quickly change your layout and components."
      }
    }
  },
  head: {
    title: 'Helpers - Rocket CSS',
    meta: [
      { hid: 'description', name: 'description', content: 'Use these helpers to quickly change your layout and components.' }
    ]
  }
}
</script>
