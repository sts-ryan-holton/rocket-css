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
          The Rocket CSS hero component is used to create useful introductory page banners used for highlighting important information. You can extend the hero component if required and utilise the Rocket CSS grid system as well. To get started, simply add a <code>.hero</code> wrapper and a <code>.hero-body</code> child element.
        </p>
        <p class="text-dark m-b-0">
          By default our hero component doesn't come with much styling to child content. This makes it great for styling with your own classes.
        </p>
        <p class="text-dark m-b-0">
          You can utilise our <strong>colour</strong> classes and <strong>spacing</strong> classes for child elements.
        </p>

        <!-- Example -->
        <figure class="highlight">
          <div class="row text-left">
            <div class="col">
              <div class="p-2">
                <div class="hero bg-secondary">
                  <div class="hero-body p-x-4">
                    <h2 class="text-white m-y-0">Hero component title</h2>
                    <p class="text-white m-b-0">
                      Hero component subtitle/text
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="highlight highlight-code">
<pre><code>
  &lt;div class="hero"&gt;
    &lt;div class="hero-body"&gt;
      ...
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
          Rocket CSS comes with a few powerful helper classes for changing the size of your hero component. Simply add one of the following Rocket CSS classes to a <code>.hero</code> component:
        </p>
        <ul class="list">
          <li>
            - <code>.hero-small</code> for a <strong>small</strong> hero component.
          </li>
          <li>
            - <code>.hero-large</code> for a <strong>large</strong> hero component.
          </li>
          <li>
            - <code>.hero-extra-large</code> for a <strong>extra</strong> hero component.
          </li>
        </ul>

        <h3 id="small-hero" class="font-weight-bold m-y-0 section-title">Small<a href="#small-hero" class="section-anchor">#</a></h3>
        <p class="text-dark">
          Here's a <strong>small</strong> hero
        </p>
        <!-- Example -->
        <figure class="highlight">
          <div class="row text-left">
            <div class="col">
              <div class="p-2">
                <div class="hero hero-small bg-secondary">
                  <div class="hero-body p-x-4">
                    <h2 class="text-white m-y-0">Small Hero</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="highlight highlight-code">
<pre><code>
  &lt;div class="hero hero-small"&gt;
    &lt;div class="hero-body"&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
</figure>

        <h3 id="large-hero" class="font-weight-bold m-y-0 section-title">Large<a href="#large-hero" class="section-anchor">#</a></h3>
        <p class="text-dark">
          Here's a <strong>large</strong> hero
        </p>
        <!-- Example -->
        <figure class="highlight">
          <div class="row text-left">
            <div class="col">
              <div class="p-2">
                <div class="hero hero-large bg-secondary">
                  <div class="hero-body p-x-4">
                    <h2 class="text-white m-y-0">Large Hero</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="highlight highlight-code">
<pre><code>
  &lt;div class="hero hero-large"&gt;
    &lt;div class="hero-body"&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
</figure>

        <h3 id="extra-large-hero" class="font-weight-bold m-y-0 section-title">Extra Large<a href="#extra-large-hero" class="section-anchor">#</a></h3>
        <p class="text-dark">
          Here's a <strong>extra large</strong> hero
        </p>
        <!-- Example -->
        <figure class="highlight">
          <div class="row text-left">
            <div class="col">
              <div class="p-2">
                <div class="hero hero-extra-large bg-secondary">
                  <div class="hero-body p-x-4">
                    <h2 class="text-white m-y-0">Extra Large Hero</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="highlight highlight-code">
<pre><code>
  &lt;div class="hero hero-extra-large"&gt;
    &lt;div class="hero-body"&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
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
      rocketVersion: "v1.2.0",
      banner: {
        mainTitle: "Hero",
        description: "Use our Hero component in Rocket CSS to add page banners to your website."
      }
    }
  },
  head: {
    title: 'Hero - Rocket CSS',
    meta: [
      { hid: 'description', name: 'description', content: 'Use our Hero component in Rocket CSS to add page banners to your website.' }
    ]
  }
}
</script>
