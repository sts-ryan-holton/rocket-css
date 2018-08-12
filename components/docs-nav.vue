<template>
  <div>
    <nav>
      <div class="rkt-docnav-item">
        <nuxt-link to="/docs" class="rkt-docs-item rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Getting Started</nuxt-link>
      </div>
      <div class="rkt-docnav-item">
        <nuxt-link to="/docs/layout/grid" class="rkt-docs-item rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active">Layout</nuxt-link>
        <ul class="rkt-marginless rkt-paddingless">
          <li>
            <nuxt-link to="/docs/layout/grid" class="rkt-docs-item rkt-text-secondary rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Grid</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="rkt-docnav-item">
        <nuxt-link to="/docs/components/buttons" class="rkt-docs-item rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active">Components</nuxt-link>
        <ul class="rkt-marginless rkt-paddingless">
          <li>
            <nuxt-link to="/docs/components/buttons" class="rkt-docs-item rkt-text-secondary rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Buttons</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/components/hero" class="rkt-docs-item rkt-text-secondary rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Hero</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
