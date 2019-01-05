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
        <h2 id="npm" class="font-weight-bold m-y-0 section-title">NPM<a href="#npm" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Get up and running with Rocket CSS by installing through NPM.
        </p>
        <figure class="highlight">
          <code>
            npm install rocket-css --save
          </code>
        </figure>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="css" class="font-weight-bold m-y-0 section-title">CSS<a href="#css" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          The easiest way to get up and running with Rocket CSS is to download Rocket CSS and include either our minified, or non-minified version of Rocket CSS.
        </p>
        <p class="text-dark m-b-0">
          Download the <strong>.zip</strong> and use the compiled <strong>rocketcss.css</strong> file located in: <code>rocketcss-dist/css/rocketcss.css</code>
        </p>
        <a href="https://github.com/sts-ryan-holton/rocket-css/archive/1.2.0.zip" class="btn btn-outline-primary btn-medium m-t-1" download><strong>Download</strong> {{ rocketVersion }}</a>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 class="font-weight-bold m-y-0">Include in your project</h2>
        <p class="text-dark m-b-0">
          After you've downloaded Rocket CSS, you'll need to add it to the <code>&lt;head&gt;</code>
        </p>
        <figure class="highlight">
          <code>
            &lt;link rel="stylesheet" type="text/css" href="<strong>rocket-css.min.css</strong>"&gt;
          </code>
        </figure>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="js" class="font-weight-bold m-y-0 section-title">JS<a href="#js" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          Rocket CSS is a pure CSS only framework. We provide basic classes for adding Javascript functionality, but you'll have to build this functionality.
        </p>
      </div>
    </div>
    <div class="row m-t-2">
      <div class="col p-x-2">
        <h2 id="community" class="font-weight-bold m-y-0 section-title">Community<a href="#community" class="section-anchor">#</a></h2>
        <p class="text-dark m-b-0">
          New feature idea? Or found a bug? Rocket CSS is community focused, we rely on the community to help build this framework, so if you find something, feel free to open a <a href="https://github.com/sts-ryan-holton/rocket-css/issues/new" target="_blank">Github issue.</a>
        </p>
        <p class="text-dark m-b-0">
          Please search Github issues before opening a new one.
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
        mainTitle: "Getting Started",
        description: "Get started with Rocket CSS. Here you\'ll find everything you need to get up and running with this open source, lightweight CSS framework."
      }
    }
  },
  head: {
    title: 'Docs - Rocket CSS',
    meta: [
      { hid: 'description', name: 'description', content: 'Learn the quickest way to get started with Rocket CSS.' }
    ]
  }
}
</script>
