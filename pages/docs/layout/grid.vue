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
          Getting started with the Rocket CSS grid is easy. Follow these simple steps:
        </p>
        <ul class="list">
          <li>
            1. Add a <code>.row</code> wrapper.
          </li>
          <li>
            2. Add a <code>.col</code> column.
          </li>
        </ul>
        <p class="text-dark m-b-0">
          Each <strong>column</strong> will have an equal size regardless of the number of columns.
        </p>

        <!-- Example -->
        <figure class="highlight">
          <div class="row text-center">
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="highlight highlight-code">
<pre><code>
  &lt;div class="row"&gt;
    &lt;div class="col"&gt;
      .col
    &lt;/div&gt;
    &lt;div class="col"&gt;
      .col
    &lt;/div&gt;
    &lt;div class="col"&gt;
      .col
    &lt;/div&gt;
    &lt;div class="col"&gt;
      .col
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
</figure>

      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="sizes" class="font-weight-bold m-y-0 section-title">Sizes<a href="#sizes" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          You can change the size of a <strong>column</strong> by adding one of these classes to a <code>.col</code> column
        </p>
        <ul class="list">
          <li>
            - <code>.col-is-one-quarter</code>
          </li>
          <li>
            - <code>.col-is-half</code>
          </li>
          <li>
            - <code>.col-is-three-quarters</code>
          </li>
        </ul>

        <!-- Example -->
        <figure class="highlight">
          <div class="row text-center is-widescreen">
            <div class="col col-is-three-quarters">
              <div class="bg-primary p-2 text-white">
                .col-is-three-quarters
              </div>
            </div>
            <div class="col">
              <div class="bg-secondary p-2 text-white">
                Auto
              </div>
            </div>
            <div class="col">
              <div class="bg-secondary p-2 text-white">
                Auto
              </div>
            </div>
          </div>
          <div class="row text-center is-widescreen">
            <div class="col col-is-half">
              <div class="bg-primary p-2 text-white">
                .col-is-half
              </div>
            </div>
            <div class="col">
              <div class="bg-secondary p-2 text-white">
                Auto
              </div>
            </div>
            <div class="col">
              <div class="bg-secondary p-2 text-white">
                Auto
              </div>
            </div>
          </div>
          <div class="row text-center is-widescreen">
            <div class="col col-is-one-quarter">
              <div class="bg-primary p-2 text-white">
                .col-is-one-quarter
              </div>
            </div>
            <div class="col">
              <div class="bg-secondary p-2 text-white">
                Auto
              </div>
            </div>
            <div class="col">
              <div class="bg-secondary p-2 text-white">
                Auto
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="highlight highlight-code">
<pre><code>
  &lt;div class="row"&gt;
    &lt;div class="col <strong>col-is-three-quarters</strong>"&gt;
      .col-is-three-quarters
    &lt;/div&gt;
    &lt;div class="col"&gt;
      Auto
    &lt;/div&gt;
    &lt;div class="col"&gt;
      Auto
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="row"&gt;
    &lt;div class="col <strong>col-is-half</strong>"&gt;
      .col-is-half
    &lt;/div&gt;
    &lt;div class="col"&gt;
      Auto
    &lt;/div&gt;
    &lt;div class="col"&gt;
      Auto
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="row"&gt;
    &lt;div class="col <strong>col-is-one-quarter</strong>"&gt;
      .col-is-one-quarter
    &lt;/div&gt;
    &lt;div class="col"&gt;
      Auto
    &lt;/div&gt;
    &lt;div class="col"&gt;
      Auto
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
</figure>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="responsiveness" class="font-weight-bold m-y-0 section-title">Responsiveness<a href="#responsiveness" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          By default, <strong>columns</strong> will naturally wrap based on the viewport and content inside each column. If you'd like to make all columns <strong>stacked</strong> on different viewports, simply add one of the following classes to a <code>.row</code>
        </p>
        <ul class="list">
          <li>
            - <code>.is-widescreen</code>
          </li>
          <li>
            - <code>.is-desktop</code>
          </li>
          <li>
            - <code>.is-tablet</code>
          </li>
          <li>
            - <code>.is-mobile</code>
          </li>
        </ul>
        <p class="text-dark">
          Adding one of the above classes to a <code>.row</code> will make all child <code>.col</code> columns be stacked on that particular viewport and down.
        </p>
        <h3 id="responsiveness-widescreen" class="font-weight-bold m-y-0 section-title">Widescreen<a href="#responsiveness-widescreen" class="section-anchor">#</a></h3>
        <p class="text-dark">
          Resize your browser to see the <strong>columns</strong> stack on the <strong>widescreen</strong> class.
        </p>
        <!-- Example -->
        <figure class="highlight">
          <div class="row text-center is-widescreen">
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
        <h3 id="responsiveness-desktop" class="font-weight-bold m-y-0 section-title">Desktop<a href="#responsiveness-desktop" class="section-anchor">#</a></h3>
        <p class="text-dark">
          Resize your browser to see the <strong>columns</strong> stack on the <strong>desktop</strong> class.
        </p>
        <!-- Example -->
        <figure class="highlight">
          <div class="row text-center is-desktop">
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
        <h3 id="responsiveness-tablet" class="font-weight-bold m-y-0 section-title">Tablet<a href="#responsiveness-tablet" class="section-anchor">#</a></h3>
        <p class="text-dark">
          Resize your browser to see the <strong>columns</strong> stack on the <strong>tablet</strong> class.
        </p>
        <!-- Example -->
        <figure class="highlight">
          <div class="row text-center is-tablet">
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
        <h3 id="responsiveness-mobile" class="font-weight-bold m-y-0 section-title">Mobile<a href="#responsiveness-mobile" class="section-anchor">#</a></h3>
        <p class="text-dark">
          Resize your browser to see the <strong>columns</strong> stack on the <strong>mobile</strong> class.
        </p>
        <!-- Example -->
        <figure class="highlight">
          <div class="row text-center is-mobile">
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
            <div class="col">
              <div class="bg-primary p-2 text-white">
                .col
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="responsiveness-viewports" class="font-weight-bold m-y-0 section-title">Different column sizes per viewport<a href="#responsiveness-viewports" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          As well as using the basic classes for stacking columns, you can also change column sizes and utilise the same responsiveness classes at the same time. Simply add one of the viewport sizes, e.g: <code>desktop</code> to the end of a particular column size. Example below:
        </p>
        <ul class="list">
          <li>
            - <code>.col-is-three-quarters<strong>-widescreen</strong></code>
          </li>
          <li>
            - <code>.col-is-three-quarters<strong>-desktop</strong></code>
          </li>
          <li>
            - <code>.col-is-half<strong>-tablet</strong></code>
          </li>
          <li>
            - <code>.col-is-half<strong>-mobile</strong></code>
          </li>
        </ul>
        <p class="text-dark">

        </p>
        <h3 id="responsiveness-columns-widescreen" class="font-weight-bold m-y-0 section-title">Half Column: Widescreen<a href="#responsiveness-columns-widescreen" class="section-anchor">#</a></h3>
        <p class="text-dark">
          Resize your browser to see the <strong>columns</strong> stack on the <strong>widescreen</strong> class.
        </p>
        <!-- Example -->
        <figure class="highlight">
          <div class="row is-tablet text-center">
            <div class="col col-is-half-widescreen">
              <div class="bg-primary p-2 text-white">
                .col-is-half-widescreen
              </div>
            </div>
            <div class="col">
              <div class="bg-secondary p-2 text-white">
                .col
              </div>
            </div>
            <div class="col">
              <div class="bg-secondary p-2 text-white">
                .col
              </div>
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
      rocketVersion: "v1.1.0",
      banner: {
        mainTitle: "Grid",
        description: "Use the simple Rocket CSS grid to quickly build applications."
      }
    }
  },
  head: {
    title: 'Grid - Rocket CSS',
    meta: [
      { hid: 'description', name: 'description', content: 'Use the simple Rocket CSS grid to quickly build applications.' }
    ]
  }
}
</script>
