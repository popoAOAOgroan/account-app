<template>
  <div class="page">
    <ul class="container">
      <li class="box" :class="{unmounted: !isMounted}" v-for="img in imgList" :style="checkSize(img)">
        <img v-show="isMounted" :src="img.url"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      imgList: [
        {url: "http://img.hb.aicdn.com/28d887ea8c7819bf499ef97d0e7962ba1e216ec5aa65-yW7ABv_fw658",
        w: 440, h: 440},
        {url: "http://img.hb.aicdn.com/7ef8f057145d7994c5b7925f3ebbf5952dbccd5615af30-9mhJYZ_fw658",
        w: 658, h: 1537},
        {url:"http://img.hb.aicdn.com/8093114b95dd5868a619020dfa313b5c551e013c1e07f8-tRxcXX_fw658",
        w: 658, h: 5849},
        {url:"http://img.hb.aicdn.com/349e302d6dededaf59e582ce26091483961ca3b9d7fa-3YDKYV_fw658",
        w: 541, h: 960},
        {url:"http://img.hb.aicdn.com/e1ccdeecbf6465bde10418481128dd8d7fa4e0038f68-OLQKZE_fw658",
        w: 260, h: 462},
        {url:"http://img.hb.aicdn.com/b57a1858195bd5874f145f80bb8d23e8cdf09cbda3ff8-t3UTN0_fw658",
        w: 658, h: 658},
        
      ],
      isMounted: false,
      imgDynWidth: 0,
    }
  },
  methods: {
    checkSize(img) {
      if(!this.isMounted) return {};
      const x = this.imgDynWidth / img.w;
      console.log('this.imgDynWidth',this.imgDynWidth, img.w, this.imgDynWidth/ img.w, x);
      // 注： 30 = gap + row
      const spanNum = parseInt(Math.ceil(img.h * x / 30), 10);
      const styleObj = {'grid-row': `span ${spanNum}`};
      console.log('styleObj', x, img.h* x, spanNum);
      return styleObj;
    }
  },
  mounted() {
    this.imgDynWidth = document.getElementsByClassName('box')[0].offsetWidth;
    console.log('imgDynWidth', this.imgDynWidth);
    this.isMounted = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.container{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px 10px;
  grid-auto-flow: row dense;
  grid-auto-rows: 20px;
}
.box{
  list-style-type: none;
  // border: 1px #f1f1f1 solid;
  box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}
.box:hover {
  transform: scale(1.05);
}
img{
  width: 100%;
}
.unmounted{
  background: #f1f1f1;
}
</style>
