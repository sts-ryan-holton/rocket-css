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
          Rocket CSS provides a few Flexbox classes to use in your project.
        </p>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="flex-classes" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Flex Classes<a href="#flex-classes" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Add these useful Flexbox classes to your project to change your layout.
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-d-flex</code> to set <strong>display</strong> to flex.
          </li>
          <li>
            - <code>.rkt-flex-row</code> to set <strong>flex-direction</strong> to row.
          </li>
          <li>
            - <code>.rkt-flex-column</code> to set <strong>flex-direction</strong> to column.
          </li>
          <li>
            - <code>.rkt-flex-fill</code> to set equal width columns or elements.
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
