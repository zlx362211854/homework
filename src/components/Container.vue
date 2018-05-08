<template>
  <div class="container">
    <div class="tabs">
      <Tabs :title="title"
            :activeIndex="activeIndex"
            :tabClickCallBack="changeTab"
            :labelClickCallBack="handleClickLabel"
            :info="info">
        <template slot="tab-body">
          <Tab :active="activeIndex === 0">
            <Dashboard></Dashboard>
          </Tab>
          <Tab :active="activeIndex === 1">
            <Cruise></Cruise>
          </Tab>
          <Tab :active="activeIndex === 2">
            <Agents></Agents>
          </Tab>
          <Tab :active="activeIndex === 3">
            <Help></Help>
          </Tab>
        </template>
      </Tabs>
    </div>
    <h3>By：赵林肖 2018年5月8日</h3>
    <h3>zlx2018@aliyun.com</h3>
    <h3>13678152017</h3>
    <h3><a href="https://github.com/zlx362211854/homework/" target="_blank">view on github</a></h3>
  </div>
</template>
<script>
  // common components
  import Tabs from './common/Tabs.vue'
  import Tab from './common/Tab.vue'
  // pages
  import Agents from './Agents.vue'
  import Dashboard from './Dashboard.vue'
  import Cruise from './Cruise.vue'
  import Help from './Help.vue'

  export default {
    name: 'Container',
    components: {
      // common components
      Tabs,
      Tab,
      // pages
      Dashboard,
      Cruise,
      Agents,
      Help
    },
    data() {
      return {
        title: ['DASHBOARD', 'MY CRUISE', 'AGENTS', 'HELP'],
        activeIndex: 2,
        info: {
          title: 'Agent',
          labels: ['All', 'Physical', 'Virtual'],
          activeLabelIndex: 1
        }
      }
    },
    methods: {
      changeTab(item, index) {
        this.activeIndex = index;
        this.info.title = item;

      },
      handleClickLabel(label, index) {
        this.info.activeLabelIndex = index;
      }
    }
  }
</script>

<style scoped>
  .container {
    min-width: 950px;
    height: 500px;
    width: 70%;
    margin: 0 auto;
  }
</style>
