<template>
  <div>
    <nav class="navbar navbar-primary">
      <nuxt-link to="/" class="navbar-brand text-white" exact>Rocket CSS</nuxt-link>
      <button class="navbar-toggle ml-auto" type="button">
        <span class="navbar-toggle-bar"></span>
        <span class="navbar-toggle-bar"></span>
        <span class="navbar-toggle-bar"></span>
      </button>
      <div class="navbar-collapse">
        <ul class="navbar-nav">
          <li class="d-none-mobile">
            <nuxt-link to="/" class="nav-link text-white" active-class="font-weight-bold nav-link-active" exact>Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs" class="nav-link text-white" active-class="font-weight-bold nav-link-active">Documentation</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" class="nav-link text-white" active-class="font-weight-bold nav-link-active" exact>About</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="ml-auto d-none-mobile">
        <a href="https://github.com/sts-ryan-holton/rocket-css" class="btn btn-outline-white nav-icon-btn m-r-1" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://github.com/sts-ryan-holton/rocket-css/archive/1.2.0.zip" class="btn btn-outline-white" download>Download</a>
      </div>
    </nav>
  </div>
</template>
