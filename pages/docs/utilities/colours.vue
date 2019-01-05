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
          Rocket CSS comes with a range of useful colour classes. The colour can be changed using our SCSS variables if required.
        </p>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="text-colour" class="font-weight-bold m-y-0 section-title">Text Colour<a href="#text-colour" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Utilise one of our <strong>text</strong> colour classes:
        </p>
        <ul class="list">
          <li>
            - <code>.text-primary</code> to set <strong>primary</strong> text colour.
          </li>
          <li>
            - <code>.text-secondary</code> to set <strong>secondary</strong> text colour.
          </li>
          <li>
            - <code>.text-success</code> to set <strong>success</strong> text colour.
          </li>
          <li>
            - <code>.text-warning</code> to set <strong>warning</strong> text colour.
          </li>
          <li>
            - <code>.text-danger</code> to set <strong>danger</strong> text colour.
          </li>
          <li>
            - <code>.text-info</code> to set <strong>info</strong> text colour.
          </li>
          <li>
            - <code>.text-dark</code> to set <strong>dark</strong> text colour.
          </li>
          <li>
            - <code>.text-light</code> to set <strong>light</strong> text colour.
          </li>
          <li>
            - <code>.text-black</code> to set <strong>black</strong> text colour.
          </li>
          <li>
            - <code>.text-white</code> to set <strong>white</strong> text colour.
          </li>
        </ul>
        <!-- Example -->
        <figure class="highlight">
          <div class="row text-left">
            <div class="col">
              <p class="text-primary m-b-0">
                .text-primary
              </p>
              <p class="text-secondary m-b-0">
                .text-secondary
              </p>
              <p class="text-success m-b-0">
                .text-success
              </p>
              <p class="text-warning m-b-0">
                .text-warning
              </p>
              <p class="text-danger m-b-0">
                .text-danger
              </p>
              <p class="text-info m-b-0">
                .text-info
              </p>
              <p class="text-dark m-b-0">
                .text-dark
              </p>
              <p class="text-light bg-black m-b-0">
                .text-light
              </p>
              <p class="text-black m-b-0">
                .text-black
              </p>
              <p class="text-white bg-black m-b-0">
                .text-white
              </p>
            </div>
          </div>
        </figure>
        <!-- /Example -->
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="background-colour" class="font-weight-bold m-y-0 section-title">Background Colour<a href="#background-colour" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Utilise one of our <strong>background</strong> colour classes:
        </p>
        <ul class="list">
          <li>
            - <code>.bg-primary</code> to set <strong>primary</strong> background colour.
          </li>
          <li>
            - <code>.bg-secondary</code> to set <strong>secondary</strong> background colour.
          </li>
          <li>
            - <code>.bg-success</code> to set <strong>success</strong> background colour.
          </li>
          <li>
            - <code>.bg-warning</code> to set <strong>warning</strong> background colour.
          </li>
          <li>
            - <code>.bg-danger</code> to set <strong>danger</strong> background colour.
          </li>
          <li>
            - <code>.bg-info</code> to set <strong>info</strong> background colour.
          </li>
          <li>
            - <code>.bg-dark</code> to set <strong>dark</strong> background colour.
          </li>
          <li>
            - <code>.bg-light</code> to set <strong>light</strong> background colour.
          </li>
          <li>
            - <code>.bg-black</code> to set <strong>black</strong> background colour.
          </li>
          <li>
            - <code>.bg-white</code> to set <strong>white</strong> background colour.
          </li>
        </ul>
        <!-- Example -->
        <figure class="highlight">
          <div class="row text-left">
            <div class="col">
              <p class="bg-primary text-white p-2 m-b-0">
                .bg-primary
              </p>
              <p class="bg-secondary text-white p-2 m-b-0">
                .bg-secondary
              </p>
              <p class="bg-success text-white p-2 m-b-0">
                .bg-success
              </p>
              <p class="bg-warning text-white p-2 m-b-0">
                .bg-warning
              </p>
              <p class="bg-danger text-white p-2 m-b-0">
                .bg-danger
              </p>
              <p class="bg-info text-white p-2 m-b-0">
                .bg-info
              </p>
              <p class="bg-dark text-white p-2 m-b-0">
                .bg-dark
              </p>
              <p class="bg-light text-black p-2 m-b-0">
                .bg-light
              </p>
              <p class="bg-black text-white p-2 m-b-0">
                .bg-black
              </p>
              <p class="bg-white text-black p-2 m-b-0">
                .bg-white
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
      rocketVersion: "v1.2.0",
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
