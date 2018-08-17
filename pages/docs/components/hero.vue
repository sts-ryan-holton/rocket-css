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
          The Rocket CSS hero component is used to create useful introductory page banners used for highlighting important information. You can extend the hero component if required and utilise the Rocket CSS grid system as well. To get started, simply add a <code>.rkt-hero</code> wrapper and a <code>.rkt-hero-body</code> child element.
        </p>
        <p class="rkt-text-dark rkt-m-b-0">
          By default our hero component doesn't come with much styling to child content. This makes it great for styling with your own classes.
        </p>
        <p class="rkt-text-dark rkt-m-b-0">
          You can utilise our <strong>colour</strong> classes and <strong>spacing</strong> classes for child elements.
        </p>

        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-left">
            <div class="rkt-col">
              <div class="rkt-p-2">
                <div class="rkt-hero rkt-bg-secondary">
                  <div class="rkt-hero-body rkt-p-x-4">
                    <h2 class="rkt-text-white rkt-m-y-0">Hero component title</h2>
                    <p class="rkt-text-white rkt-m-b-0">
                      Hero component subtitle/text
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="rkt-highlight rkt-highlight-code">
<pre><code>
  &lt;div class="rkt-hero"&gt;
    &lt;div class="rkt-hero-body"&gt;
      ...
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
          Rocket CSS comes with a few powerful helper classes for changing the size of your hero component. Simply add one of the following Rocket CSS classes to a <code>.rkt-hero</code> component:
        </p>
        <ul class="rkt-list">
          <li>
            - <code>.rkt-hero-small</code> for a <strong>small</strong> hero component.
          </li>
          <li>
            - <code>.rkt-hero-large</code> for a <strong>large</strong> hero component.
          </li>
          <li>
            - <code>.rkt-hero-extra-large</code> for a <strong>extra</strong> hero component.
          </li>
        </ul>

        <h3 id="small-hero" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Small<a href="#small-hero" class="rkt-section-anchor">#</a></h3>
        <p class="rkt-text-dark">
          Here's a <strong>small</strong> hero
        </p>
        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-left">
            <div class="rkt-col">
              <div class="rkt-p-2">
                <div class="rkt-hero rkt-hero-small rkt-bg-secondary">
                  <div class="rkt-hero-body rkt-p-x-4">
                    <h2 class="rkt-text-white rkt-m-y-0">Small Hero</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="rkt-highlight rkt-highlight-code">
<pre><code>
  &lt;div class="rkt-hero rkt-hero-small"&gt;
    &lt;div class="rkt-hero-body"&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
</figure>

        <h3 id="large-hero" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Large<a href="#large-hero" class="rkt-section-anchor">#</a></h3>
        <p class="rkt-text-dark">
          Here's a <strong>large</strong> hero
        </p>
        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-left">
            <div class="rkt-col">
              <div class="rkt-p-2">
                <div class="rkt-hero rkt-hero-large rkt-bg-secondary">
                  <div class="rkt-hero-body rkt-p-x-4">
                    <h2 class="rkt-text-white rkt-m-y-0">Large Hero</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="rkt-highlight rkt-highlight-code">
<pre><code>
  &lt;div class="rkt-hero rkt-hero-large"&gt;
    &lt;div class="rkt-hero-body"&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
</code></pre>
</figure>

        <h3 id="extra-large-hero" class="rkt-font-weight-bold rkt-m-y-0 rkt-section-title">Extra Large<a href="#extra-large-hero" class="rkt-section-anchor">#</a></h3>
        <p class="rkt-text-dark">
          Here's a <strong>extra large</strong> hero
        </p>
        <!-- Example -->
        <figure class="rkt-highlight">
          <div class="rkt-row rkt-text-left">
            <div class="rkt-col">
              <div class="rkt-p-2">
                <div class="rkt-hero rkt-hero-extra-large rkt-bg-secondary">
                  <div class="rkt-hero-body rkt-p-x-4">
                    <h2 class="rkt-text-white rkt-m-y-0">Extra Large Hero</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
        <!-- /Example -->
<figure class="rkt-highlight rkt-highlight-code">
<pre><code>
  &lt;div class="rkt-hero rkt-hero-extra-large"&gt;
    &lt;div class="rkt-hero-body"&gt;
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
      rocketVersion: "v0.1.0-Alpha.1",
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
