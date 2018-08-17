<template>
  <div>
    <section class="rkt-hero rkt-hero rkt-hero-small rkt-marginless rkt-docs-hero">
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
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="basics" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Basics<a href="#basics" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Rocket CSS provides a few useful typography classes for quick, easy application edits.
        </p>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="text-alignment" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Text Alignment<a href="#text-alignment" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Change the <strong>text alignment</strong> with these helpers.
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-text-left</code> to set text alignment.
          </li>
          <li>
            - <code>.rkt-text-center</code> to set text alignment.
          </li>
          <li>
            - <code>.rkt-text-right</code> to set text alignment.
          </li>
        </ul>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="text-transform" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Text Transform<a href="#text-transform" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Change the <strong>text transform</strong> with these helpers.
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-text-lowercase</code> to set text transform.
          </li>
          <li>
            - <code>.rkt-text-uppercase</code> to set text transform.
          </li>
        </ul>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="font-weight" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Font Weight<a href="#font-weight" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Change the <strong>font weight</strong> with these helpers.
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-font-weight-lighter</code> to set font weight to <code>$font-weight-light</code>
          </li>
          <li>
            - <code>.rkt-font-weight-normal</code> to set font weight to <code>$font-weight-normal</code>
          </li>
          <li>
            - <code>.rkt-font-weight-bold</code> to set font weight to <code>$font-weight-bold</code>
          </li>
        </ul>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="text-positioning" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Text Positioning<a href="#text-positioning" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Change the <strong>text positioning</strong> with these helpers.
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-align-top</code> to set vertical alignment.
          </li>
          <li>
            - <code>.rkt-align-middle</code> to set vertical alignment.
          </li>
          <li>
            - <code>.rkt-align-bottom</code> to set vertical alignment.
          </li>
          <li>
            - <code>.rkt-align-baseline</code> to set vertical alignment.
          </li>
          <li>
            - <code>.rkt-align-text-top</code> to set vertical alignment.
          </li>
          <li>
            - <code>.rkt-align-text-bottom</code> to set vertical alignment.
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
      rocketVersion: "v1.0.0",
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
