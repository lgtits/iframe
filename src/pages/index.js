import ListZh from 'assets/JSONs/ListZh.json';
import ListJa from 'assets/JSONs/ListJa.json';
import ListKo from 'assets/JSONs/ListKo.json';
import ListEn from 'assets/JSONs/ListEn.json';
import ProductCard from '../components/ProductCard.vue';
import MetaBlock from 'components/MetaBlock.vue';

export default {
  name: 'PageProducts',
  components: { ProductCard, MetaBlock },
  data() {
    return {
      keyword: '',
      isShowLangPanel: false,
      data: null,
      filterData: null,
      tabs: [],
      nowLang: '',
      langs: [
        { name: '中文', value: 'zh' },
        { name: 'EN', value: 'en' },
        { name: '日本語', value: 'ja' },
        { name: '한국어', value: 'ko' },
      ],
    };
  },
  computed: {},
  async mounted() {
    if (process.env.DEV) {
      this.isShowLangPanel = true;
      console.log('show lang panel: ', process.env.DEV);
    }
    if (this.$route.query.search) {
      this.keyword = this.$route.query.search;
    }
    let lang = this.$route.query.lang || 'zh';
    this.setLang(lang);
  },
  methods: {
    setData() {
      let tempData = null;
      this.tabs = [];
      switch (this.nowLang) {
        case 'ja':
          tempData = ListJa;
          break;
        case 'ko':
          tempData = ListKo;
          break;
        case 'en':
          tempData = ListEn;
          break;
        case 'zh':
          tempData = ListZh;
          break;
        default:
          this.$router.replace({
            path: '',
            query: { lang: 'zh' },
          });
          tempData = ListZh;
          break;
      }
      // html 轉純文字 以做搜尋用
      tempData.products.forEach((product) => {
        product.tags.forEach((tag) => {
          if (!this.tabs.includes(tag)) {
            this.tabs.push(tag);
          }
        });
      });

      this.data = tempData.products;
      this.filter();
    },
    setLang(lang) {
      this.nowLang = lang;

      this.$router.push({
        path: '',
        query: { lang: this.nowLang },
      });

      this.setData();
    },
    filter() {
      const tempData = JSON.parse(JSON.stringify(this.data));
      const keyword = this.keyword.trim().toLowerCase();
      tempData.forEach((product) => {
        product.isShow = true;
      });
      if (keyword) {
        tempData.forEach((product) => {
          product.content =
            product.name + product.description + product.tags.join();
          product.content.toLowerCase().includes(keyword)
            ? (product.isShow = true)
            : (product.isShow = false);
        });
      }
      this.filterData = tempData.filter((product) => product.isShow);
    },
    setKeyword(tag) {
      this.keyword = tag;
      this.$router.push({
        path: '',
        query: { lang: this.nowLang, search: this.keyword },
      });
      this.filter();
    },
  },
  watch: {
    keyword: 'setKeyword',
    nowLang: 'setData',
    // '$route.params.lang': {
    //   handler: function (lang) {
    //     this.nowLang = lang;
    //     // this.setData();
    //   },
    //   deep: true,
    //   immediate: true,
    // },
  },
};
