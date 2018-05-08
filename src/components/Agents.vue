<template>
  <Page :data="agentsData"></Page>
</template>
<script>
  import Page from './Page.vue'
  export default {
    components: {
      Page
    },
    data() {
      return {
        agentsData: [
          {
            title: 'title01.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: ['ubuntu', 'firefox3'],
            deny: true
          },
          {
            title: 'title02.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: ['ubuntu', 'firefox3'],
            deny: false
          },
          {
            title: 'title03.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: ['ubuntu', 'firefox3'],
            deny: false
          },
          {
            title: 'title04.ThoughtWorks.com',
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
