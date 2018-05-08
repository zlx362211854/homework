<template>
  <Page :data="dashboardData"></Page>
</template>
<script>
  import Page from './Page.vue'
  export default {
    components: {
      Page
    },
    data() {
      return {
        dashboardData: [
          {
            title: 'dashboard.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: ['ubuntu', 'firefox3'],
            deny: true
          },
          {
            title: 'dashboard.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: ['ubuntu', 'firefox3'],
            deny: true
          },
          {
            title: 'dashboard.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: ['ubuntu', 'firefox3'],
            deny: false
          },
          {
            title: 'dashboard.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: [],
            deny: false
          }
        ]
      }
    }
  }
</script>

