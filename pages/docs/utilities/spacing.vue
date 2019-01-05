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
        <h2 id="notation" class="font-weight-bold m-y-0 section-title">Notation<a href="#notation" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Using the spacing classes in Rocket CSS is easy. Our spacing classes are similar to other frameworks such as Twitter Bootstrap. Spacing classes follow this format: <code>.{property}-{sides}-{size}</code>
        </p>
        <p class="text-dark m-b-0">
          There is one exception to the above format. This is with the <strong>auto</strong> spacing. For this, use the following format: <code>.{property}{sides}-{size}</code>
        </p>
        <p class="text-dark">
          Take a look at spacing notation below:
        </p>
        <h4 id="spacing-property" class="font-weight-bold m-y-0 section-title">Property<a href="#spacing-property" class="section-anchor">#</a></h4>
        <ul class="list">
          <li>
            <code>m</code> - for classes that set <strong>margin.</strong>
          </li>
          <li>
            <code>p</code> - for classes that set <strong>padding.</strong>
          </li>
        </ul>
        <h4 id="spacing-sides" class="font-weight-bold m-y-0 section-title">Sides<a href="#spacing-sides" class="section-anchor">#</a></h4>
        <ul class="list">
          <li>
            <code>t</code> - for classes that set <strong>top.</strong>
          </li>
          <li>
            <code>r</code> - for classes that set <strong>right.</strong>
          </li>
          <li>
            <code>b</code> - for classes that set <strong>bottom.</strong>
          </li>
          <li>
            <code>l</code> - for classes that set <strong>left.</strong>
          </li>
          <li>
            <code>y</code> - for classes that set <strong>top and bottom.</strong>
          </li>
          <li>
            <code>x</code> - for classes that set <strong>left and right.</strong>
          </li>
        </ul>
        <h4 id="spacing-sizes" class="font-weight-bold m-y-0 section-title">Sizes<a href="#spacing-sizes" class="section-anchor">#</a></h4>
        <ul class="list">
          <li>
            <code>0</code> - for classes that remove <strong>margin or padding.</strong>
          </li>
          <li>
            <code>1</code> - for classes that set to <code>$default-spacing</code>
          </li>
          <li>
            <code>2</code> - for classes that set <code>$default-spacing + 1</code>
          </li>
          <li>
            <code>3</code> - for classes that set <code>$default-spacing + 2</code>
          </li>
          <li>
            <code>4</code> - for classes that set <code>$default-spacing + 3</code>
          </li>
          <li>
            <code>5</code> - for classes that set <code>$default-spacing + 4</code>
          </li>
          <li class="p-b-0 m-b-0">
            <code>auto</code> - for classes that set <strong>auto </strong> <i>(see spacing notation above on using auto)</i>
          </li>
        </ul>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="spacing-auto" class="font-weight-bold m-y-0 section-title">Auto Spacing<a href="#spacing-auto" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          As discussed above, you can use <strong>auto</strong> instead of a value if required. To so so, use this format: <code>.{property}{sides}-{size}</code>
        </p>
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
        mainTitle: "Spacing",
        description: "Take a look at how to quickly add Margin or Padding to your application to space content apart."
      }
    }
  },
  head: {
    title: 'Spacing - Rocket CSS',
    meta: [
      { hid: 'description', name: 'description', content: 'Take a look at how to quickly add Margin or Padding to your application to space content apart.' }
    ]
  }
}
</script>
