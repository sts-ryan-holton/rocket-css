<template>
  <div>
    <nav>
      <div class="rkt-docnav-item">
        <nuxt-link to="/docs" class="rkt-docs-item rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Getting Started</nuxt-link>
        <ul class="rkt-marginless rkt-paddingless">
          <li>
            <nuxt-link to="/docs" class="rkt-docs-item rkt-text-secondary rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Welcome</nuxt-link>
          </li>
        </ul>
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
      <div class="rkt-docnav-item">
        <nuxt-link to="/docs/utilities/colours" class="rkt-docs-item rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active">Utilities</nuxt-link>
        <ul class="rkt-marginless rkt-paddingless">
          <li>
            <nuxt-link to="/docs/utilities/colours" class="rkt-docs-item rkt-text-secondary rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Colours</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/utilities/flex" class="rkt-docs-item rkt-text-secondary rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Flex</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/utilities/helpers" class="rkt-docs-item rkt-text-secondary rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Helpers</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/utilities/images" class="rkt-docs-item rkt-text-secondary rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Images</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/utilities/spacing" class="rkt-docs-item rkt-text-secondary rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Spacing</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/utilities/typography" class="rkt-docs-item rkt-text-secondary rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Typography</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/utilities/visibility" class="rkt-docs-item rkt-text-secondary rkt-d-block rkt-p-y-1" active-class="rkt-docs-item-active" exact>Visibility</nuxt-link>
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
