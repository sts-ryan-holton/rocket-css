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
          Rocket CSS makes it super simple to create <strong>responsive images.</strong>
        </p>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="responsive-images" class="font-weight-bold m-y-0 section-title">Responsive Images<a href="#responsive-images" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Create responsive images by adding the following class to an <strong>image.</strong>
        </p>
        <ul class="list">
          <li>
            - <code>.img-fluid</code> to create a responsive image.
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
