export const saveMap = new Map();

export default {
  beforeCreate() {
    const saveKey = this.$route.fullPath;
    this.$options.saveKey = saveKey;
    if (saveMap.has(saveKey)) {
      this.$options.data = function() {
        return saveMap.get(saveKey);
      };
      this.$options.useOld = true;
    }
  },
  created() {
    if (this.$options.created || this.$options.mounted) {
      console.warn(
        "检测到您定义了路由组件内的created或mounted钩子函数，注意不要在这些钩子函数内作数据初始化操作！应当定义getData方法进行初始化操作！"
      );
    }
    if (!this.$options.useOld) {
      try {
        this.getData();
      } catch {
        throw new Error("你需要定义一个getData方法进行初始化操作！");
      }
    }
  },
  beforeDestroy() {
    saveMap.set(this.$options.saveKey, JSON.parse(JSON.stringify(this.$data)));
    console.log(saveMap);
  }
};
