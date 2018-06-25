<template>
  <div class="form" @keydown="$emit('clearValidationErrors', $event.target.name)">
    <slot></slot>
  </div>
</template>
