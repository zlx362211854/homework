<template>
  <div class="tag" :class="!data.deny && 'tagNoDeny'">
    <div class="tag-img">
      <div class="tag-avatar">
      </div>
    </div>
    <div class="tag-msg">
      <div class="tag-msg-top">
        <span class="tag-msg-title">{{data.title}}</span>
        <span class="tag-msg-title-info">{{data.status}}</span>
        <span class="tag-msg-title-info">{{data.host}}</span>
        <span class="tag-msg-title-info">{{data.path}}</span>
      </div>
      <div class="tag-msg-bottom">
        <div class="tag-msg-bottom-title" @click="(e) => addResources(e, index)">
          <i class="iconfont icon-jia" style="cursor: pointer"></i>
          <span>{{data.resourcesTitle}} Resources</span>
        </div>
        <div class="tag-msg-bottom-resources">
          <span>Resources:</span>
          <div class="tag-msg-bottom-resource"
                :key="index"
                v-for="(item, index) in data.resources">{{item}}<i class="iconfont icon-shanchu" style="cursor: pointer" @click="deleteResources(index)"></i>
            </div>
        </div>
        <div class="deny" v-if="data.deny">
          <i class="iconfont icon-bukexuan" style="cursor: pointer"></i>deny
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        clientX: 0,
        clientY: 0
      }
    },
    props: {
      data: {
        type: Object
      },
      addResources: {
        type: Function
      },
      index: Number
    },
    methods: {
      deleteResources(index) {
        this.data.resources.splice(index, 1)
      }
    }
  }
</script>
<style scoped>
  .tag {
    width: 100%;
    height: 80px;
    border: 1px solid #444444;
    border-radius: 5px;
    background-color: #d1e7ba;
    margin: 10px 0;
  }

  .tag-img {
    float: left;
    width: 15%;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }

  .tag-avatar {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-top: 15px;
    background-color: #929292;
    border-radius: 50%;
  }

  .tag-msg {
    float: left;
    width: 85%;
    height: 80px;
    line-height: 80px;
    text-align: left;
  }

  .tag-msg-top {
    width: 100%;
    height: 40px;
    line-height: 60px;
  }

  .tag-msg-bottom {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }

  .tag-msg-title {
    color: #000;
    font-weight: 800;
    font-size: 18px;
    padding: 0 10px;
  }

  .tag-msg-title-info {
    color: #000;
    font-weight: 600;
    font-size: 14px;
    border-left: 1px solid #96a1a3;
    padding: 0 5px;
  }

  .tag-msg-bottom-title {
    padding: 0 10px;
    width: 150px;
    float: left;
  }

  .tag-msg-bottom-title span {
    text-decoration: underline;
    cursor: pointer;
    border-right: 1px solid #96a1a3;
    padding-right: 10px;
  }

  .tag-msg-bottom-resources {
    height: 40px;
    width: 300px;
    overflow-x: scroll;
    overflow-y: hidden;
    line-height: 40px;
    white-space: nowrap;
    float: left
  }

  .tag-msg-bottom-resource {
    padding: 0 5px;
    display: inline-block;
    white-space: nowrap
  }
  .tag-msg-bottom-resource i {
    font-size: 14px;
  }
  .deny {
    display: inline-block;
    float: left;
    margin-left: 10px;
  }
  .tagNoDeny {
    background-color: #fffbc0;
  }
</style>
