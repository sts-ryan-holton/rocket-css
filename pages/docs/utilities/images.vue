<template>
  <div>
    <section class="rkt-hero rkt-hero rkt-hero-small rkt-marginless rkt-docs-hero">
      <div class="rkt-hero-body">
        <div class="rkt-container-fluid">
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
          Rocket CSS makes it super simple to create <strong>responsive images.</strong>
        </p>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="responsive-images" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Responsive Images<a href="#responsive-images" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Create responsive images by adding the following class to an <strong>image.</strong>
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-img-fluid</code> to create a responsive image.
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
      rocketVersion: "v1.0.1",
      banner: {
        mainTitle: "Images",
        description: "Create responsive images with Rocket CSS."
      }
    }
  },
  head: {
    title: 'Images - Rocket CSS',
    meta: [
      { hid: 'description', name: 'description', content: 'Create responsive images with Rocket CSS.' }
    ]
  }
}
</script>
