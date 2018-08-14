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
          Creating a Rocket CSS button is easy. Simply add a few classes to get started and modify your button. The <code>.rkt-btn</code> class works on the following elements
        </p>
        <ul class="rkt-list">
          <li>
            - <code>&lt;a&gt;</code> anchor links.
          </li>
          <li>
            - <code>&lt;button&gt;</code> elements, and form buttons.
          </li>
        </ul>

        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-left">
            <div class="rkt-col">
              <div class="rkt-p-2">
                <a href="#" class="rkt-btn rkt-btn-primary rkt-m-r-1">Anchor</a>
                <button type="button" class="rkt-btn rkt-btn-primary">Button</button>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="rkt-highlight rkt-highlight-code">
<pre><code>
  &lt;a href="#" class="rkt-btn rkt-btn-primary rkt-m-r-1"&gt;Anchor&lt;/a&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-primary"&gt;Button&lt;/button&gt;
</code></pre>
</figure>

      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="colours" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Colours<a href="#colours" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Change the colour of a button by adding one of the following classes:
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-btn-primary</code>
          </li>
          <li>
            - <code>.rkt-btn-secondary</code>
          </li>
          <li>
            - <code>.rkt-btn-success</code>
          </li>
          <li>
            - <code>.rkt-btn-warning</code>
          </li>
          <li>
            - <code>.rkt-btn-danger</code>
          </li>
          <li>
            - <code>.rkt-btn-info</code>
          </li>
          <li>
            - <code>.rkt-btn-dark</code>
          </li>
          <li>
            - <code>.rkt-btn-light</code>
          </li>
          <li>
            - <code>.rkt-btn-black</code>
          </li>
          <li>
            - <code>.rkt-btn-white</code>
          </li>
        </ul>

        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-left">
            <div class="rkt-col">
              <div class="rkt-p-2">
                <button type="button" class="rkt-btn rkt-btn-primary rkt-m-r-1">Primary</button>
                <button type="button" class="rkt-btn rkt-btn-secondary rkt-m-r-1">Secondary</button>
                <button type="button" class="rkt-btn rkt-btn-success rkt-m-r-1">Success</button>
                <button type="button" class="rkt-btn rkt-btn-warning rkt-m-r-1">Warning</button>
                <button type="button" class="rkt-btn rkt-btn-danger rkt-m-r-1">Danger</button>
                <button type="button" class="rkt-btn rkt-btn-info rkt-m-r-1">Info</button>
                <button type="button" class="rkt-btn rkt-btn-dark rkt-m-r-1">Dark</button>
                <button type="button" class="rkt-btn rkt-btn-light rkt-m-r-1">Light</button>
                <button type="button" class="rkt-btn rkt-btn-black rkt-m-r-1">Black</button>
                <button type="button" class="rkt-btn rkt-btn-white rkt-m-r-1">White</button>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="rkt-highlight rkt-highlight-code">
<pre><code>
  &lt;button type="button" class="rkt-btn rkt-btn-primary"&gt;Primary&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-secondary"&gt;Secondary&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-success"&gt;Success&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-warning"&gt;Warning&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-danger"&gt;Danger&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-info"&gt;Info&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-dark"&gt;Dark&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-light"&gt;Light&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-black"&gt;Black&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-white"&gt;White&lt;/button&gt;
</code></pre>
</figure>

      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="outline" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Outline<a href="#outline" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          You can create an outline button in a similar way to creating solid buttons, simply specify <code>rkt-btn-<strong>outline</strong>-primary</code> or whichever colour you'd like to add:
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-btn-outline-primary</code>
          </li>
          <li>
            - <code>.rkt-btn-outline-secondary</code>
          </li>
          <li>
            - <code>.rkt-btn-outline-success</code>
          </li>
          <li>
            - <code>.rkt-btn-outline-warning</code>
          </li>
          <li>
            - <code>.rkt-btn-outline-danger</code>
          </li>
          <li>
            - <code>.rkt-btn-outline-info</code>
          </li>
          <li>
            - <code>.rkt-btn-outline-dark</code>
          </li>
          <li>
            - <code>.rkt-btn-outline-light</code>
          </li>
          <li>
            - <code>.rkt-btn-outline-black</code>
          </li>
          <li>
            - <code>.rkt-btn-outline-white</code>
          </li>
        </ul>

        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-left">
            <div class="rkt-col">
              <div class="rkt-p-2">
                <button type="button" class="rkt-btn rkt-btn-outline-primary rkt-m-r-1">Primary</button>
                <button type="button" class="rkt-btn rkt-btn-outline-secondary rkt-m-r-1">Secondary</button>
                <button type="button" class="rkt-btn rkt-btn-outline-success rkt-m-r-1">Success</button>
                <button type="button" class="rkt-btn rkt-btn-outline-warning rkt-m-r-1">Warning</button>
                <button type="button" class="rkt-btn rkt-btn-outline-danger rkt-m-r-1">Danger</button>
                <button type="button" class="rkt-btn rkt-btn-outline-info rkt-m-r-1">Info</button>
                <button type="button" class="rkt-btn rkt-btn-outline-dark rkt-m-r-1">Dark</button>
                <button type="button" class="rkt-btn rkt-btn-outline-light rkt-m-r-1">Light</button>
                <button type="button" class="rkt-btn rkt-btn-outline-black rkt-m-r-1">Black</button>
                <button type="button" class="rkt-btn rkt-btn-outline-white">White</button>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="rkt-highlight rkt-highlight-code">
<pre><code>
  &lt;button type="button" class="rkt-btn rkt-btn-outline-primary"&gt;Primary&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-outline-secondary"&gt;Secondary&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-outline-success"&gt;Success&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-outline-warning"&gt;Warning&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-outline-danger"&gt;Danger&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-outline-info"&gt;Info&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-outline-dark"&gt;Dark&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-outline-light"&gt;Light&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-outline-black"&gt;Black&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-outline-white"&gt;White&lt;/button&gt;
</code></pre>
</figure>

      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="sizes" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Sizes<a href="#sizes" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          You can add a class for controlling the size of a button, simply add one of the following:
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-btn-small</code>
          </li>
          <li>
            - <code>.rkt-btn-medium</code>
          </li>
          <li>
            - <code>.rkt-btn-large</code>
          </li>
        </ul>

        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-left">
            <div class="rkt-col">
              <div class="rkt-p-2">
                <button type="button" class="rkt-btn rkt-btn-primary rkt-btn-small rkt-m-r-1">Small</button>
                <button type="button" class="rkt-btn rkt-btn-primary rkt-m-r-1">Default</button>
                <button type="button" class="rkt-btn rkt-btn-primary rkt-btn-medium rkt-m-r-1">Medium</button>
                <button type="button" class="rkt-btn rkt-btn-primary rkt-btn-large">Large</button>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="rkt-highlight rkt-highlight-code">
<pre><code>
  &lt;button type="button" class="rkt-btn rkt-btn-primary rkt-btn-small"&gt;Small&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-primary"&gt;Default&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-primary rkt-btn-medium"&gt;Medium&lt;/button&gt;

  &lt;button type="button" class="rkt-btn rkt-btn-primary rkt-btn-large"&gt;Large&lt;/button&gt;
</code></pre>
</figure>

      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="rounded" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Rounded<a href="#sizes" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Rocket CSS comes with a class to make buttons rounded, simply add the followng:
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-btn-rounded</code>
          </li>
        </ul>

        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-left">
            <div class="rkt-col">
              <div class="rkt-p-2">
                <button type="button" class="rkt-btn rkt-btn-primary rkt-btn-rounded">Rounded</button>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="rkt-highlight rkt-highlight-code">
<pre><code>
  &lt;button type="button" class="rkt-btn rkt-btn-primary rkt-btn-rounded"&gt;Rounded&lt;/button&gt;
</code></pre>
</figure>

      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 id="block-button" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Block Button<a href="#sizes" class="rkt-section-anchor">#</a></h2>
        <p class="rkt-text-dark rkt-m-b-0">
          To make a button take up the full width of a page, add the <code>.rkt-btn-block</code> class:
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-btn-block</code>
          </li>
        </ul>

        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-left">
            <div class="rkt-col">
              <div class="rkt-p-2">
                <button type="button" class="rkt-btn rkt-btn-primary rkt-btn-block">Block Button</button>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="rkt-highlight rkt-highlight-code">
<pre><code>
  &lt;button type="button" class="rkt-btn rkt-btn-primary rkt-btn-block"&gt;Block Button&lt;/button&gt;
</code></pre>
</figure>

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
      rocketVersion: "v0.1.0-Alpha.1",
      banner: {
        mainTitle: "Buttons",
        description: "Buttons are used everywhere in applications. Use the Rocket CSS buttons component to add navigation to your site."
      }
    }
  },
  head: {
    title: 'Buttons - Rocket CSS',
    meta: [
      { hid: 'description', name: 'description', content: 'Quickly add our button component to your application using Rocket CSS.' }
    ]
  }
}
</script>
