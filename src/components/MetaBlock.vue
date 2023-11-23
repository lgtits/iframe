
<script lang="ts">
import { useMeta } from 'quasar'
import { defineComponent } from 'vue'
import Variables from 'assets/JSONs/Variables.json';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'MetaBlock',
  props: {
    keyword: {
      type: String,
      default: 'default'
    },
  },

  setup() {

    const route = useRoute()

    console.log(route.query)

    
    const metaData = {
      // sets document title
      title: Variables.title,
      // optional; sets final title as "Index Page - My Website", useful for multiple level meta
      titleTemplate: (title: string) => route.query.search ? `${title}: ${route.query.search} ` : `${title}`,

      // meta tags
      meta: {
        description: { name: 'description', content: route.query.search ? `${Variables.description}: ${route.query.search}` : `${Variables.description}` },
      },
    }

    useMeta(metaData)

  },
})
</script>
