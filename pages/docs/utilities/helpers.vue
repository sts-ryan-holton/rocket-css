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
          Rocket CSS provides a few useful helper classes for quick, easy application edits.
        </p>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="margin-and-padding" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Margin &amp; Padding<a href="#margin-and-padding" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Remove <strong>margin</strong> and <strong>padding</strong> using these helpers in Rocket CSS.
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-marginless</code> to <strong>remove margin.</strong>
          </li>
          <li>
            - <code>.rkt-paddingless</code> to <strong>remove padding.</strong>
          </li>
        </ul>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="responsiveness-margin-and-padding" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Responsiveness: Margin &amp; Padding<a href="#responsiveness-margin-and-padding" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          You can add one of the responsive breakpoints to either <strong>marginless</strong> or <strong>paddingless</strong>. See our example below:
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-marginless<strong>-widescreen</strong></code> to <strong>remove margin on widescreen and down.</strong>
          </li>
        </ul>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="width-and-height" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Width &amp; Height<a href="#width-and-height" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Add these <strong>width</strong> and <strong>height</strong> helpers.
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-w-100</code> to add <strong>100% width.</strong>
          </li>
          <li>
            - <code>.rkt-h-100</code> to add <strong>100% height.</strong>
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
