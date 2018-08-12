<template>
  <div>
    <nav class="rkt-navbar rkt-navbar-primary">
      <nuxt-link to="/" class="rkt-navbar-brand rkt-text-white" exact>Rocket CSS</nuxt-link>
      <button class="rkt-navbar-toggle rkt-ml-auto" type="button">
        <span class="rkt-navbar-toggle-bar"></span>
        <span class="rkt-navbar-toggle-bar"></span>
        <span class="rkt-navbar-toggle-bar"></span>
      </button>
      <div class="rkt-navbar-collapse">
        <ul class="rkt-navbar-nav">
          <li>
            <nuxt-link to="/" class="rkt-nav-link rkt-text-white" active-class="rkt-font-weight-bold rkt-nav-link-active" exact>Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/getting-started/" class="rkt-nav-link rkt-text-white" active-class="rkt-font-weight-bold rkt-nav-link-active" exact>Documentation</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="rkt-ml-auto">
        <a href="#" class="rkt-btn rkt-btn-outline-white" download>Download</a>
      </div>
    </nav>
  </div>
</template>
