<script setup>
const props = defineProps({
  fill: {
    type: String,
    default: "black",
  },
});
</script>

<template>
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.39 11.19L9.695 13.15L8.68 11.715L7.175 8.39L5.635 11.75L4.62 13.15L1.925 11.19L2.94 9.79L5.67 7.34L1.995 6.92L0.315 6.36L1.365 3.21L3.01 3.735L6.195 5.555L5.46 1.95V0.2H8.785V1.95L8.05 5.52L11.235 3.7L12.915 3.175L13.93 6.325L12.285 6.885L8.61 7.305L11.375 9.755L12.39 11.19Z"
      :fill="fill" />
  </svg>
</template>
