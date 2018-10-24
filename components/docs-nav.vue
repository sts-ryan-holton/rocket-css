<template>
  <div>
    <nav>
      <div class="docnav-item">
        <nuxt-link to="/docs" class="docs-item d-block p-y-1" active-class="docs-item-active" exact>Getting Started</nuxt-link>
        <ul class="marginless paddingless">
          <li>
            <nuxt-link to="/docs" class="docs-item text-secondary d-block p-y-1" active-class="docs-item-active" exact>Welcome</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="docnav-item">
        <nuxt-link to="/docs/layout/grid" class="docs-item d-block p-y-1" active-class="docs-item-active">Layout</nuxt-link>
        <ul class="marginless paddingless">
          <li>
            <nuxt-link to="/docs/layout/grid" class="docs-item text-secondary d-block p-y-1" active-class="docs-item-active" exact>Grid</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="docnav-item">
        <nuxt-link to="/docs/components/buttons" class="docs-item d-block p-y-1" active-class="docs-item-active">Components</nuxt-link>
        <ul class="marginless paddingless">
          <li>
            <nuxt-link to="/docs/components/buttons" class="docs-item text-secondary d-block p-y-1" active-class="docs-item-active" exact>Buttons</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/components/hero" class="docs-item text-secondary d-block p-y-1" active-class="docs-item-active" exact>Hero</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="docnav-item">
        <nuxt-link to="/docs/utilities/colours" class="docs-item d-block p-y-1" active-class="docs-item-active">Utilities</nuxt-link>
        <ul class="marginless paddingless">
          <li>
            <nuxt-link to="/docs/utilities/colours" class="docs-item text-secondary d-block p-y-1" active-class="docs-item-active" exact>Colours</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/utilities/flex" class="docs-item text-secondary d-block p-y-1" active-class="docs-item-active" exact>Flex</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/utilities/helpers" class="docs-item text-secondary d-block p-y-1" active-class="docs-item-active" exact>Helpers</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/utilities/images" class="docs-item text-secondary d-block p-y-1" active-class="docs-item-active" exact>Images</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/utilities/spacing" class="docs-item text-secondary d-block p-y-1" active-class="docs-item-active" exact>Spacing</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/utilities/typography" class="docs-item text-secondary d-block p-y-1" active-class="docs-item-active" exact>Typography</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/docs/utilities/visibility" class="docs-item text-secondary d-block p-y-1" active-class="docs-item-active" exact>Visibility</nuxt-link>
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
