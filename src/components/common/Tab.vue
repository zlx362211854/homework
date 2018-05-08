<template>
  <div v-if="active">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      active: Boolean
    }
  }
</script>
