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
        <h2 class="rkt-font-weight-bold rkt-m-y-0">NPM</h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Get up and running with Rocket CSS by installing through NPM.
        </p>
        <figure class="rkt-highlight">
          <code>
            npm install rocket-css --save
          </code>
        </figure>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 class="rkt-font-weight-bold rkt-m-y-0">CSS</h2>
        <p class="rkt-text-dark rkt-m-b-0">
          The easiest way to get up and running with Rocket CSS is to download Rocket CSS and include either our minified, or non-minified version of Rocket CSS.
        </p>
        <p class="rkt-text-dark rkt-m-b-0">
          Download the <strong>.zip</strong> and use the compiled <strong>rocketcss.css</strong> file located in: <code>rocketcss-dist/css/rocketcss.css</code>
        </p>
        <a href="https://github.com/sts-ryan-holton/rocket-css/archive/1.1.0.zip" class="rkt-btn rkt-btn-outline-primary rkt-btn-medium rkt-m-t-1" download><strong>Download</strong> {{ rocketVersion }}</a>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 class="rkt-font-weight-bold rkt-m-y-0">Include in your project</h2>
        <p class="rkt-text-dark rkt-m-b-0">
          After you've downloaded Rocket CSS, you'll need to add it to the <code>&lt;head&gt;</code>
        </p>
        <figure class="rkt-highlight">
          <code>
            &lt;link rel="stylesheet" type="text/css" href="<strong>rocket-css.min.css</strong>"&gt;
          </code>
        </figure>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 class="rkt-font-weight-bold rkt-m-y-0">JS</h2>
        <p class="rkt-text-dark rkt-m-b-0">
          Rocket CSS is a pure CSS only framework. We provide basic classes for adding Javascript functionality, but you'll have to build this functionality.
        </p>
      </div>
    </div>
    <div class="rkt-row rkt-m-t-2">
      <div class="rkt-col rkt-p-x-2">
        <h2 class="rkt-font-weight-bold rkt-m-y-0">Community</h2>
        <p class="rkt-text-dark rkt-m-b-0">
          New feature idea? Or found a bug? Rocket CSS is community focused, we rely on the community to help build this framework, so if you find something, feel free to open a <a href="https://github.com/sts-ryan-holton/rocket-css/issues/new" target="_blank">Github issue.</a>
        </p>
        <p class="rkt-text-dark rkt-m-b-0">
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
      rocketVersion: "v1.1.0",
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
