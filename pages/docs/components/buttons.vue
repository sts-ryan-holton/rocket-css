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
          Creating a Rocket CSS button is easy. Simply add a few classes to get started and modify your button. The <code>.btn</code> class works on the following elements
        </p>
        <ul class="list">
          <li>
            - <code>&lt;a&gt;</code> anchor links.
          </li>
          <li>
            - <code>&lt;button&gt;</code> elements, and form buttons.
          </li>
        </ul>

        <!-- Example -->
        <figure class="highlight">
          <div class="row text-left">
            <div class="col">
              <a href="#" class="btn btn-primary m-r-1">Anchor</a>
              <button type="button" class="btn btn-primary">Button</button>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="highlight highlight-code">
<pre><code>
  &lt;a href="#" class="btn btn-primary m-r-1"&gt;Anchor&lt;/a&gt;

  &lt;button type="button" class="btn btn-primary"&gt;Button&lt;/button&gt;
</code></pre>
</figure>

      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="colours" class="font-weight-bold m-y-0 section-title">Colours<a href="#colours" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Change the colour of a button by adding one of the following classes:
        </p>
        <ul class="list">
          <li>
            - <code>.btn-primary</code>
          </li>
          <li>
            - <code>.btn-secondary</code>
          </li>
          <li>
            - <code>.btn-success</code>
          </li>
          <li>
            - <code>.btn-warning</code>
          </li>
          <li>
            - <code>.btn-danger</code>
          </li>
          <li>
            - <code>.btn-info</code>
          </li>
          <li>
            - <code>.btn-dark</code>
          </li>
          <li>
            - <code>.btn-light</code>
          </li>
          <li>
            - <code>.btn-black</code>
          </li>
          <li>
            - <code>.btn-white</code>
          </li>
        </ul>

        <!-- Example -->
        <figure class="highlight">
          <div class="row text-left">
            <div class="col">
              <button type="button" class="btn btn-primary m-r-1">Primary</button>
              <button type="button" class="btn btn-secondary m-r-1">Secondary</button>
              <button type="button" class="btn btn-success m-r-1">Success</button>
              <button type="button" class="btn btn-warning m-r-1">Warning</button>
              <button type="button" class="btn btn-danger m-r-1">Danger</button>
              <button type="button" class="btn btn-info m-r-1">Info</button>
              <button type="button" class="btn btn-dark m-r-1">Dark</button>
              <button type="button" class="btn btn-light m-r-1">Light</button>
              <button type="button" class="btn btn-black m-r-1">Black</button>
              <button type="button" class="btn btn-white m-r-1">White</button>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="highlight highlight-code">
<pre><code>
  &lt;button type="button" class="btn btn-primary"&gt;Primary&lt;/button&gt;

  &lt;button type="button" class="btn btn-secondary"&gt;Secondary&lt;/button&gt;

  &lt;button type="button" class="btn btn-success"&gt;Success&lt;/button&gt;

  &lt;button type="button" class="btn btn-warning"&gt;Warning&lt;/button&gt;

  &lt;button type="button" class="btn btn-danger"&gt;Danger&lt;/button&gt;

  &lt;button type="button" class="btn btn-info"&gt;Info&lt;/button&gt;

  &lt;button type="button" class="btn btn-dark"&gt;Dark&lt;/button&gt;

  &lt;button type="button" class="btn btn-light"&gt;Light&lt;/button&gt;

  &lt;button type="button" class="btn btn-black"&gt;Black&lt;/button&gt;

  &lt;button type="button" class="btn btn-white"&gt;White&lt;/button&gt;
</code></pre>
</figure>

      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="outline" class="font-weight-bold m-y-0 section-title">Outline<a href="#outline" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          You can create an outline button in a similar way to creating solid buttons, simply specify <code>btn-<strong>outline</strong>-primary</code> or whichever colour you'd like to add:
        </p>
        <ul class="list">
          <li>
            - <code>.btn-outline-primary</code>
          </li>
          <li>
            - <code>.btn-outline-secondary</code>
          </li>
          <li>
            - <code>.btn-outline-success</code>
          </li>
          <li>
            - <code>.btn-outline-warning</code>
          </li>
          <li>
            - <code>.btn-outline-danger</code>
          </li>
          <li>
            - <code>.btn-outline-info</code>
          </li>
          <li>
            - <code>.btn-outline-dark</code>
          </li>
          <li>
            - <code>.btn-outline-light</code>
          </li>
          <li>
            - <code>.btn-outline-black</code>
          </li>
          <li>
            - <code>.btn-outline-white</code>
          </li>
        </ul>

        <!-- Example -->
        <figure class="highlight">
          <div class="row text-left">
            <div class="col">
              <button type="button" class="btn btn-outline-primary m-r-1">Primary</button>
              <button type="button" class="btn btn-outline-secondary m-r-1">Secondary</button>
              <button type="button" class="btn btn-outline-success m-r-1">Success</button>
              <button type="button" class="btn btn-outline-warning m-r-1">Warning</button>
              <button type="button" class="btn btn-outline-danger m-r-1">Danger</button>
              <button type="button" class="btn btn-outline-info m-r-1">Info</button>
              <button type="button" class="btn btn-outline-dark m-r-1">Dark</button>
              <button type="button" class="btn btn-outline-light m-r-1">Light</button>
              <button type="button" class="btn btn-outline-black m-r-1">Black</button>
              <button type="button" class="btn btn-outline-white">White</button>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="highlight highlight-code">
<pre><code>
  &lt;button type="button" class="btn btn-outline-primary"&gt;Primary&lt;/button&gt;

  &lt;button type="button" class="btn btn-outline-secondary"&gt;Secondary&lt;/button&gt;

  &lt;button type="button" class="btn btn-outline-success"&gt;Success&lt;/button&gt;

  &lt;button type="button" class="btn btn-outline-warning"&gt;Warning&lt;/button&gt;

  &lt;button type="button" class="btn btn-outline-danger"&gt;Danger&lt;/button&gt;

  &lt;button type="button" class="btn btn-outline-info"&gt;Info&lt;/button&gt;

  &lt;button type="button" class="btn btn-outline-dark"&gt;Dark&lt;/button&gt;

  &lt;button type="button" class="btn btn-outline-light"&gt;Light&lt;/button&gt;

  &lt;button type="button" class="btn btn-outline-black"&gt;Black&lt;/button&gt;

  &lt;button type="button" class="btn btn-outline-white"&gt;White&lt;/button&gt;
</code></pre>
</figure>

      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="sizes" class="font-weight-bold m-y-0 section-title">Sizes<a href="#sizes" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          You can add a class for controlling the size of a button, simply add one of the following:
        </p>
        <ul class="list">
          <li>
            - <code>.btn-small</code>
          </li>
          <li>
            - <code>.btn-medium</code>
          </li>
          <li>
            - <code>.btn-large</code>
          </li>
        </ul>

        <!-- Example -->
        <figure class="highlight">
          <div class="row text-left">
            <div class="col">
              <button type="button" class="btn btn-primary btn-small m-r-1">Small</button>
              <button type="button" class="btn btn-primary m-r-1">Default</button>
              <button type="button" class="btn btn-primary btn-medium m-r-1">Medium</button>
              <button type="button" class="btn btn-primary btn-large">Large</button>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="highlight highlight-code">
<pre><code>
  &lt;button type="button" class="btn btn-primary btn-small"&gt;Small&lt;/button&gt;

  &lt;button type="button" class="btn btn-primary"&gt;Default&lt;/button&gt;

  &lt;button type="button" class="btn btn-primary btn-medium"&gt;Medium&lt;/button&gt;

  &lt;button type="button" class="btn btn-primary btn-large"&gt;Large&lt;/button&gt;
</code></pre>
</figure>

      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="rounded" class="font-weight-bold m-y-0 section-title">Rounded<a href="#sizes" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Rocket CSS comes with a class to make buttons rounded, simply add the followng:
        </p>
        <ul class="list">
          <li>
            - <code>.btn-rounded</code>
          </li>
        </ul>

        <!-- Example -->
        <figure class="highlight">
          <div class="row text-left">
            <div class="col">
              <button type="button" class="btn btn-primary btn-rounded">Rounded</button>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="highlight highlight-code">
<pre><code>
  &lt;button type="button" class="btn btn-primary btn-rounded"&gt;Rounded&lt;/button&gt;
</code></pre>
</figure>

      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="block-button" class="font-weight-bold m-y-0 section-title">Block Button<a href="#sizes" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          To make a button take up the full width of a page, add the <code>.btn-block</code> class:
        </p>
        <ul class="list">
          <li>
            - <code>.btn-block</code>
          </li>
        </ul>

        <!-- Example -->
        <figure class="highlight">
          <div class="row text-left">
            <div class="col">
              <button type="button" class="btn btn-primary btn-block">Block Button</button>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="highlight highlight-code">
<pre><code>
  &lt;button type="button" class="btn btn-primary btn-block"&gt;Block Button&lt;/button&gt;
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
      rocketVersion: "v1.1.0",
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
