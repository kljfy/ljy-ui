<template>
  <div class="el-form">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'LjyForm',
};
</script>

<script setup>
import { provide, ref } from 'vue';
import { formDataKey } from '../util';
import { emitter } from '../util';

const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
  rules: {
    type: Object,
  },
});
provide(formDataKey, {
  model: props.model,
  rules: props.rules,
});
const items = ref([]);

emitter.on('addFormItem', (item) => {
  items.value.push(item);
});

function validate(cb) {
  const tasks = items.value.map((item) => item.validate());
  Promise.all(tasks)
    .then(() => {
      cb(true);
    })
    .catch(() => {
      cb(false);
    });
}
defineExpose({
  validate,
});
</script>

<style lang="scss">
@import '../styles/mixin';
@include b(form) {
  margin-top:20px;
  box-sizing: border-box;
  flex-shrink: 0;
  width:300px;
}

</style>
