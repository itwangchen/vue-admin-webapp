<template>
  <div class="carddragger">
    <cardDragger :data="cardList" :colNum="colNum" :cardOutsideWidth="220" :cardOutsideHeight="120" :cardInsideWidth="200" :cardInsideHeight="100" ></cardDragger>
  </div>
</template>

<script>
import { cardDragger } from "carddragger";
export default {
  data() {
    return {
        colNum:2,
      cardList: [
        {
          positionNum: 1,
          name: "演示卡片" + 1,
          id: "card" + 1
        },
        {
          positionNum: 2,
          name: "演示卡片" + 2,
          id: "card" + 2
        },
        {
          positionNum: 3,
          name: "演示卡片" + 3,
          id: "card" + 3
        },
        {
          positionNum: 4,
          name: "演示卡片" + 4,
          id: "card" + 4
        },
        {
          positionNum: 5,
          name: "演示卡片" + 5,
          id: "card" + 5
        },
        {
          positionNum: 6,
          name: "演示卡片" + 6,
          id: "card" + 6
        }
      ]
    };
  },
  created() {
    this._getAllData();
  },
  components: {
    cardDragger
  },
  methods: {
    _getAllData() {}
  }
};
</script>
<style scoped lang="scss">
</style>
