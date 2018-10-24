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
          Rocket CSS provides a few Flexbox classes to use in your project.
        </p>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="flex-classes" class="font-weight-bold m-y-0 section-title">Flex Classes<a href="#flex-classes" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Add these useful Flexbox classes to your project to change your layout.
        </p>
        <ul class="list">
          <li>
            - <code>.d-flex</code> to set <strong>display</strong> to flex.
          </li>
          <li>
            - <code>.flex-row</code> to set <strong>flex-direction</strong> to row.
          </li>
          <li>
            - <code>.flex-column</code> to set <strong>flex-direction</strong> to column.
          </li>
          <li>
            - <code>.flex-fill</code> to set equal width columns or elements.
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
        mainTitle: "Flex",
        description: "Rocket CSS comes with some basic flexbox classes to use in your project."
      }
    }
  },
  head: {
    title: 'Flex - Rocket CSS',
    meta: [
      { hid: 'description', name: 'description', content: 'Rocket CSS comes with some basic flexbox classes to use in your project.' }
    ]
  }
}
</script>
