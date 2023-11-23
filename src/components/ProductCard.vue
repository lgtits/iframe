<template>
  <div class="issue-card">
    <div class="issue-info">
      <a href="/" target="_blank" class="issue-title cursor-pointer">{{ product.name }}</a>
      <a href="/" target="_blank" class="product__image"></a>
      <!-- <span class="keyword">輸入的關鍵字</span>用粗體 -->
      <div class="issue-content">
        <span class="date">{{ product.description }}</span>
        <!-- — 摘要<span class="keyword__em">輸入的關鍵字</span>用粗體然後擷取到這一欄裡面，這邊放一些資訊，這邊放一些資訊。這邊放一些資訊這邊放一些資訊，這邊放一些資訊，這邊放一些資訊。這邊放一些資訊這邊放一些資訊，這邊放一些資訊，這邊放一些... -->
      </div>
      <div class="tags">
        <div class="component-tags">
          <div class="tags-wrapper" :class="{ 'fixedHeight': !isShowAllComponents }" ref="components">
            <div class="tag" v-for="tag in product.tags" :key="tag.name" @click="setKeyword(tag)">{{ tag }}</div>
          </div>
          <div class="tag tag__more" @click="showAlltags" v-if="!isShowAllComponents">...</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  watch,
  ref,
} from 'vue';


export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  emits: ['onsetKeyword'],
  setup(props, { emit }) {

    const components = ref();

    const isShowAllComponents = ref(true);

    const showAlltags = () => {
      isShowAllComponents.value = true;
    }

    const checkWrapperHeight = () => {
      if (components.value.clientHeight > 60) {
        isShowAllComponents.value = false;
      } else {
      }
    }

    const setKeyword = (tag: string) => {
      emit('onsetKeyword', tag)
    }

    onMounted(() => {
      checkWrapperHeight();
    });


    watch(() => props.product.tags, () => {
      Promise.resolve().then(() => {
        showAlltags();
      }).then(() => {
        checkWrapperHeight();
      });
    });

    return {
      isShowAllComponents,
      components,
      showAlltags,
      setKeyword,
    };
  },
});
</script>



<style lang="scss" scoped>
.issue-card {
  width: 30%;
  // height: 122px;
  border-bottom: 1px solid $secondary-100;
  display: flex;
  padding-bottom: 16px;
  margin-bottom: 16px;

  .product__image {
    width: 100%;
    padding-top: 50%;
    background-color: $secondary-100;
  }

  .issue-info {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    font-size: 12px;

    .issue-title {
      color: $primary-600;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 4px;
    }

    .issue-content {
      color: $secondary-600;
      margin-bottom: 8px;

      .keyword__em {
        font-weight: 700;
      }
    }

    .tags {
      display: flex;

      .component-tags {

        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 8px;

        .tags-wrapper {

          display: flex;
          flex-direction: row;
          column-gap: 8px;
          row-gap: 8px;
          flex-wrap: wrap;

        }

        .fixedHeight {
          height: 60px;
          overflow: hidden;
        }

        .tag {
          background-color: $secondary-100;
          color: $secondary-600;
          padding: 4px 6px;
          border-radius: 4px;
          cursor: pointer;
          width: fit-content;

          &:hover {
            background-color: $secondary-400;
            color: $secondary-900;
          }
        }

        .tag {
          background-color: $primary-100;
          color: $primary-500;
          padding: 4px 6px;
          border-radius: 4px;
          cursor: pointer;
          width: fit-content;

          &:hover {
            background-color: $secondary-400;
            color: $secondary-900;
          }
        }

      }

    }
  }
}</style>