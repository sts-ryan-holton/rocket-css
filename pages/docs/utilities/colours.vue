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
          Rocket CSS comes with a range of useful colour classes. The colour can be changed using our SCSS variables if required.
        </p>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="text-colour" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Text Colour<a href="#text-colour" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Utilise one of our <strong>text</strong> colour classes:
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-text-primary</code> to set <strong>primary</strong> text colour.
          </li>
          <li>
            - <code>.rkt-text-secondary</code> to set <strong>secondary</strong> text colour.
          </li>
          <li>
            - <code>.rkt-text-success</code> to set <strong>success</strong> text colour.
          </li>
          <li>
            - <code>.rkt-text-warning</code> to set <strong>warning</strong> text colour.
          </li>
          <li>
            - <code>.rkt-text-danger</code> to set <strong>danger</strong> text colour.
          </li>
          <li>
            - <code>.rkt-text-info</code> to set <strong>info</strong> text colour.
          </li>
          <li>
            - <code>.rkt-text-dark</code> to set <strong>dark</strong> text colour.
          </li>
          <li>
            - <code>.rkt-text-light</code> to set <strong>light</strong> text colour.
          </li>
          <li>
            - <code>.rkt-text-black</code> to set <strong>black</strong> text colour.
          </li>
          <li>
            - <code>.rkt-text-white</code> to set <strong>white</strong> text colour.
          </li>
        </ul>
        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-left">
            <div class="rkt-col">
              <p class="rkt-text-primary rkt-m-b-0">
                .rkt-text-primary
              </p>
              <p class="rkt-text-secondary rkt-m-b-0">
                .rkt-text-secondary
              </p>
              <p class="rkt-text-success rkt-m-b-0">
                .rkt-text-success
              </p>
              <p class="rkt-text-warning rkt-m-b-0">
                .rkt-text-warning
              </p>
              <p class="rkt-text-danger rkt-m-b-0">
                .rkt-text-danger
              </p>
              <p class="rkt-text-info rkt-m-b-0">
                .rkt-text-info
              </p>
              <p class="rkt-text-dark rkt-m-b-0">
                .rkt-text-dark
              </p>
              <p class="rkt-text-light rkt-bg-black rkt-m-b-0">
                .rkt-text-light
              </p>
              <p class="rkt-text-black rkt-m-b-0">
                .rkt-text-black
              </p>
              <p class="rkt-text-white rkt-bg-black rkt-m-b-0">
                .rkt-text-white
              </p>
            </div>
          </div>
        </figure>
        <!-- /Example -->
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="background-colour" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Background Colour<a href="#background-colour" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Utilise one of our <strong>background</strong> colour classes:
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-bg-primary</code> to set <strong>primary</strong> background colour.
          </li>
          <li>
            - <code>.rkt-bg-secondary</code> to set <strong>secondary</strong> background colour.
          </li>
          <li>
            - <code>.rkt-bg-success</code> to set <strong>success</strong> background colour.
          </li>
          <li>
            - <code>.rkt-bg-warning</code> to set <strong>warning</strong> background colour.
          </li>
          <li>
            - <code>.rkt-bg-danger</code> to set <strong>danger</strong> background colour.
          </li>
          <li>
            - <code>.rkt-bg-info</code> to set <strong>info</strong> background colour.
          </li>
          <li>
            - <code>.rkt-bg-dark</code> to set <strong>dark</strong> background colour.
          </li>
          <li>
            - <code>.rkt-bg-light</code> to set <strong>light</strong> background colour.
          </li>
          <li>
            - <code>.rkt-bg-black</code> to set <strong>black</strong> background colour.
          </li>
          <li>
            - <code>.rkt-bg-white</code> to set <strong>white</strong> background colour.
          </li>
        </ul>
        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-left">
            <div class="rkt-col">
              <p class="rkt-bg-primary rkt-text-white rkt-p-2 rkt-m-b-0">
                .rkt-bg-primary
              </p>
              <p class="rkt-bg-secondary rkt-text-white rkt-p-2 rkt-m-b-0">
                .rkt-bg-secondary
              </p>
              <p class="rkt-bg-success rkt-text-white rkt-p-2 rkt-m-b-0">
                .rkt-bg-success
              </p>
              <p class="rkt-bg-warning rkt-text-white rkt-p-2 rkt-m-b-0">
                .rkt-bg-warning
              </p>
              <p class="rkt-bg-danger rkt-text-white rkt-p-2 rkt-m-b-0">
                .rkt-bg-danger
              </p>
              <p class="rkt-bg-info rkt-text-white rkt-p-2 rkt-m-b-0">
                .rkt-bg-info
              </p>
              <p class="rkt-bg-dark rkt-text-white rkt-p-2 rkt-m-b-0">
                .rkt-bg-dark
              </p>
              <p class="rkt-bg-light rkt-text-black rkt-p-2 rkt-m-b-0">
                .rkt-bg-light
              </p>
              <p class="rkt-bg-black rkt-text-white rkt-p-2 rkt-m-b-0">
                .rkt-bg-black
              </p>
              <p class="rkt-bg-white rkt-text-black rkt-p-2 rkt-m-b-0">
                .rkt-bg-white
              </p>
            </div>
          </div>
        </figure>
        <!-- /Example -->
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
        mainTitle: "Colour",
        description: "Rocket CSS comes with many useful colour utility classes, use them to quickly add colour to your applications."
      }
    }
  },
  head: {
    title: 'Colour - Rocket CSS',
    meta: [
      { hid: 'description', name: 'description', content: 'Rocket CSS comes with many useful colour utility classes, use them to quickly add colour to your applications.' }
    ]
  }
}
</script>
