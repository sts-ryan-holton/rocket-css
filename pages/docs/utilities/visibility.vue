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
          We have a few classes for choosing what is displayed and how in Rocket CSS.
        </p>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="display" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Display<a href="#display" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Change the <strong>display</strong> property.
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-d-none</code> to display <strong>none.</strong>
          </li>
          <li>
            - <code>.rkt-d-inline-block</code> to display <strong>inline-block.</strong>
          </li>
        </ul>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="visibility" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Visibility<a href="#visibility" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Change the <strong>visibility</strong> property.
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-visibility-hide</code> to set visibility to <strong>hidden.</strong>
          </li>
          <li>
            - <code>.rkt-visibility-show</code> to set visibility to <strong>visible.</strong>
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
