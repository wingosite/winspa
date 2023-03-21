<template>
  <draggable
    v-model="list"
    class="dragArea list-group"
    :class="{ isDrag }"
    :component-data="componentData"
    :group="group"
    v-bind="{ ...dragOptions, ...$attrs }"
    :item-key="itemKey"
    @start="isDrag = true"
    @end="isDrag = false"
  >
    <template #item="item">
      <div
        :class="{ 'item-drag': item.element.draggable }"
        :data-el="item.element.draggable"
      >
        <slot name="item" v-bind="item"></slot>
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { computed } from "vue";
import draggable from "vuedraggable";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  drag: {
    type: Boolean,
    default: false,
  },
  itemKey: {
    type: String,
    default: "_vid",
  },
  group: {
    type: Object,
    default: () => ({ name: "components" }),
  },
  fallbackClass: String,
});

const emit = defineEmits(["update: modelValue", "update:drag"]);
const list = useVModel(props, "modelValue", emit);
const isDrag = useVModel(props, "drag", emit);

// drag options
const dragOptions = computed(() => ({
  animation: 200,
  disabled: false,
  scroll: true,
  ghostClass: "ghost",
}));

// component data
const componentData = computed(() => ({
  tag: "ul",
  type: "transition-group",
  name: !isDrag ? "flip-list" : null,
}));
</script>
