<template>
  <div>
    <div class="tabs-header">
      <div class="tabs-header-title"
           :class="activeIndex === index && 'tabs-active'"
           v-for="(item, index) in title"
           :key="index"
           @click="tabClickCallBack(item,index)">{{item}}</div>
    </div>
    <div class="tabs-info">
      <div class="info-title">{{info.title}}</div>
      <div class="info-label"
           :class="info.activeLabelIndex === index && 'label-active'"
           v-for="(label, index) in info.labels"
           :key="index"
           @click="labelClickCallBack(label, index)"
      >{{label}}</div>
    </div>
    <div class="tabs-body">
      <slot name="tab-body"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Tabs',
    props: {
      title: {
        type: Array,
        default: () => []
      },
      activeIndex: {
        type: Number,
        default: () => 0
      },
      tabClickCallBack: {
        type: Function,
        default: () => false
      },
      info: {
        type: Object
      },
      labelClickCallBack: {
        type: Function,
        default: () => false
      }
    },
    data () {
      return {
      }
    }
  }
</script>
<style scoped>
  .tabs-header {
    width: 100%;
    height: 35px;
    text-align: right;
  }
  .tabs-header-title {
    display: inline-block;
    height: 35px;
    line-height: 35px;
    color: #333;
    font-size: 18px;
    font-weight: 600;
    padding: 0 10px;
    margin: 0 5px;
    cursor: pointer;
    border-top: 2px solid #000000;
    border-left: 2px solid #000000;
    border-right: 2px solid #000000;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .tabs-header-title:last-child {
    margin-right: 0;
  }
  .tabs-active {
    background-color: #606060;
    color: #f0f0f0;
  }
  .tabs-info {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #606060;
    color: #e6e8e5;
    text-align: left;
    padding: 0 20px;
    border: 2px solid #000000
  }
  .info-title {
    width: 100px;
    display: inline-block;
  }
  .info-label {
    display: inline-block;
    border: 2px solid #403f3f;
    width: 70px;
    padding: 0 5px;
    height: 25px;
    line-height: 25px;
    border-radius: 20px;
    background-color: #606060;
    color: #09071a;
    text-align: center;
    margin: 0 5px;
    cursor: pointer;
  }
  .label-active {
    background-color: #ddd;
  }
  .tabs-body {
    width: 100%;
    height: 415px;
    border-bottom: 2px solid #000;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    box-sizing: border-box;
  }
</style>
