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
          Getting started with the Rocket CSS grid is easy. Follow these simple steps:
        </p>
        <ul class="rkt-list">
          <li>
            1. Add a <code>.rkt-row</code> wrapper.
          </li>
          <li>
            2. Add a <code>.rkt-col</code> column.
          </li>
        </ul>
        <p class="rkt-text-dark rkt-m-b-0">
          Each <strong>column</strong> will have an equal size regardless of the number of columns.
        </p>

        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-center">
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="rkt-highlight rkt-highlight-code">
<pre><code>
  &lt;div class="rkt-row"&gt;
    &lt;div class="rkt-col"&gt;
      .rkt-col
    &lt;/div&gt;
    &lt;div class="rkt-col"&gt;
      .rkt-col
    &lt;/div&gt;
    &lt;div class="rkt-col"&gt;
      .rkt-col
    &lt;/div&gt;
    &lt;div class="rkt-col"&gt;
      .rkt-col
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
</figure>

      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="sizes" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Sizes<a href="#sizes" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          You can change the size of a <strong>column</strong> by adding one of these classes to a <code>.rkt-col</code> column
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-col-is-one-quarter</code>
          </li>
          <li>
            - <code>.rkt-col-is-half</code>
          </li>
          <li>
            - <code>.rkt-col-is-three-quarters</code>
          </li>
        </ul>

        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-center rkt-is-widescreen">
            <div class="rkt-col rkt-col-is-three-quarters">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col-is-three-quarters
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-secondary rkt-p-2 rkt-text-white">
                Auto
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-secondary rkt-p-2 rkt-text-white">
                Auto
              </div>
            </div>
          </div>
          <div class="rkt-row rkt-text-center rkt-is-widescreen">
            <div class="rkt-col rkt-col-is-half">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col-is-half
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-secondary rkt-p-2 rkt-text-white">
                Auto
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-secondary rkt-p-2 rkt-text-white">
                Auto
              </div>
            </div>
          </div>
          <div class="rkt-row rkt-text-center rkt-is-widescreen">
            <div class="rkt-col rkt-col-is-one-quarter">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col-is-one-quarter
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-secondary rkt-p-2 rkt-text-white">
                Auto
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-secondary rkt-p-2 rkt-text-white">
                Auto
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="rkt-highlight rkt-highlight-code">
<pre><code>
  &lt;div class="rkt-row"&gt;
    &lt;div class="rkt-col <strong>rkt-col-is-three-quarters</strong>"&gt;
      .rkt-col-is-three-quarters
    &lt;/div&gt;
    &lt;div class="rkt-col"&gt;
      Auto
    &lt;/div&gt;
    &lt;div class="rkt-col"&gt;
      Auto
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="rkt-row"&gt;
    &lt;div class="rkt-col <strong>rkt-col-is-half</strong>"&gt;
      .rkt-col-is-half
    &lt;/div&gt;
    &lt;div class="rkt-col"&gt;
      Auto
    &lt;/div&gt;
    &lt;div class="rkt-col"&gt;
      Auto
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;div class="rkt-row"&gt;
    &lt;div class="rkt-col <strong>rkt-col-is-one-quarter</strong>"&gt;
      .rkt-col-is-one-quarter
    &lt;/div&gt;
    &lt;div class="rkt-col"&gt;
      Auto
    &lt;/div&gt;
    &lt;div class="rkt-col"&gt;
      Auto
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
</figure>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="responsiveness" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Responsiveness<a href="#responsiveness" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          By default, <strong>columns</strong> will naturally wrap based on the viewport and content inside each column. If you'd like to make all columns <strong>stacked</strong> on different viewports, simply add one of the following classes to a <code>.rkt-row</code>
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-is-widescreen</code>
          </li>
          <li>
            - <code>.rkt-is-desktop</code>
          </li>
          <li>
            - <code>.rkt-is-tablet</code>
          </li>
          <li>
            - <code>.rkt-is-mobile</code>
          </li>
        </ul>
        <p class="rkt-text-dark">
          Adding one of the above classes to a <code>.rkt-row</code> will make all child <code>.rkt-col</code> columns be stacked on that particular viewport and down.
        </p>
        <h3 id="responsiveness-widescreen" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Widescreen<a href="#responsiveness-widescreen" class="rkt-section-anchor">#</a></h3>
        <p class="rkt-text-dark">
          Resize your browser to see the <strong>columns</strong> stack on the <strong>widescreen</strong> class.
        </p>
        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-center rkt-is-widescreen">
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
        <h3 id="responsiveness-desktop" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Desktop<a href="#responsiveness-desktop" class="rkt-section-anchor">#</a></h3>
        <p class="rkt-text-dark">
          Resize your browser to see the <strong>columns</strong> stack on the <strong>desktop</strong> class.
        </p>
        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-center rkt-is-desktop">
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
        <h3 id="responsiveness-tablet" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Tablet<a href="#responsiveness-tablet" class="rkt-section-anchor">#</a></h3>
        <p class="rkt-text-dark">
          Resize your browser to see the <strong>columns</strong> stack on the <strong>tablet</strong> class.
        </p>
        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-center rkt-is-tablet">
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
        <h3 id="responsiveness-mobile" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Mobile<a href="#responsiveness-mobile" class="rkt-section-anchor">#</a></h3>
        <p class="rkt-text-dark">
          Resize your browser to see the <strong>columns</strong> stack on the <strong>mobile</strong> class.
        </p>
        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-center rkt-is-mobile">
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="responsiveness-viewports" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Different column sizes per viewport<a href="#responsiveness-viewports" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          As well as using the basic classes for stacking columns, you can also change column sizes and utilise the same responsiveness classes at the same time. Simply add one of the viewport sizes, e.g: <code>desktop</code> to the end of a particular column size. Example below:
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-col-is-three-quarters<strong>-widescreen</strong></code>
          </li>
          <li>
            - <code>.rkt-col-is-three-quarters<strong>-desktop</strong></code>
          </li>
          <li>
            - <code>.rkt-col-is-half<strong>-tablet</strong></code>
          </li>
          <li>
            - <code>.rkt-col-is-half<strong>-mobile</strong></code>
          </li>
        </ul>
        <p class="rkt-text-dark">

        </p>
        <h3 id="responsiveness-columns-widescreen" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Half Column: Widescreen<a href="#responsiveness-columns-widescreen" class="rkt-section-anchor">#</a></h3>
        <p class="rkt-text-dark">
          Resize your browser to see the <strong>columns</strong> stack on the <strong>widescreen</strong> class.
        </p>
        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-is-tablet rkt-text-center">
            <div class="rkt-col rkt-col-is-half-widescreen">
              <div class="rkt-bg-primary rkt-p-2 rkt-text-white">
                .rkt-col-is-half-widescreen
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-secondary rkt-p-2 rkt-text-white">
                .rkt-col
              </div>
            </div>
            <div class="rkt-col">
              <div class="rkt-bg-secondary rkt-p-2 rkt-text-white">
                .rkt-col
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
      rocketVersion: "v1.0.0",
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
