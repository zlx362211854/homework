<template>
  <Page :data="cruiseData"></Page>
</template>
<script>
  import Page from './Page.vue'
  export default {
    components: {
      Page
    },
    data() {
      return {
        cruiseData: [
          {
            title: 'cruise.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: ['ubuntu', 'firefox3'],
            deny: false
          },
          {
            title: 'cruise.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: ['ubuntu', 'firefox3'],
            deny: false
          },
          {
            title: 'cruise.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: ['ubuntu', 'firefox3'],
            deny: false
          },
          {
            title: 'cruise.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: [],
            deny: true
          }
        ]
      }
    }
  }
</script>


