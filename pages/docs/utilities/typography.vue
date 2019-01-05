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
          Rocket CSS provides a few useful typography classes for quick, easy application edits.
        </p>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="text-alignment" class="font-weight-bold m-y-0 section-title">Text Alignment<a href="#text-alignment" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Change the <strong>text alignment</strong> with these helpers.
        </p>
        <ul class="list">
          <li>
            - <code>.text-left</code> to set text alignment.
          </li>
          <li>
            - <code>.text-center</code> to set text alignment.
          </li>
          <li>
            - <code>.text-right</code> to set text alignment.
          </li>
        </ul>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="text-transform" class="font-weight-bold m-y-0 section-title">Text Transform<a href="#text-transform" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Change the <strong>text transform</strong> with these helpers.
        </p>
        <ul class="list">
          <li>
            - <code>.text-lowercase</code> to set text transform.
          </li>
          <li>
            - <code>.text-uppercase</code> to set text transform.
          </li>
        </ul>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="font-weight" class="font-weight-bold m-y-0 section-title">Font Weight<a href="#font-weight" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Change the <strong>font weight</strong> with these helpers.
        </p>
        <ul class="list">
          <li>
            - <code>.font-weight-lighter</code> to set font weight to <code>$font-weight-light</code>
          </li>
          <li>
            - <code>.font-weight-normal</code> to set font weight to <code>$font-weight-normal</code>
          </li>
          <li>
            - <code>.font-weight-bold</code> to set font weight to <code>$font-weight-bold</code>
          </li>
        </ul>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="text-positioning" class="font-weight-bold m-y-0 section-title">Text Positioning<a href="#text-positioning" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Change the <strong>text positioning</strong> with these helpers.
        </p>
        <ul class="list">
          <li>
            - <code>.align-top</code> to set vertical alignment.
          </li>
          <li>
            - <code>.align-middle</code> to set vertical alignment.
          </li>
          <li>
            - <code>.align-bottom</code> to set vertical alignment.
          </li>
          <li>
            - <code>.align-baseline</code> to set vertical alignment.
          </li>
          <li>
            - <code>.align-text-top</code> to set vertical alignment.
          </li>
          <li>
            - <code>.align-text-bottom</code> to set vertical alignment.
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
        mainTitle: "Typography",
        description: "Use our quick and easy typography helpers in Rocket CSS for changing different aspects of typography."
      }
    }
  },
  head: {
    title: 'Typography - Rocket CSS',
    meta: [
      { hid: 'description', name: 'description', content: 'Use our quick and easy typography helpers in Rocket CSS for changing different aspects of typography.' }
    ]
  }
}
</script>
