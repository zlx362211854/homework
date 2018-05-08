<template>
  <Page :data="helpData"></Page>
</template>
<script>
  import Page from './Page.vue'
  export default {
    components: {
      Page
    },
    data() {
      return {
        helpData: [
          {
            title: 'Help.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1.Help',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: ['ubuntu', 'firefox3'],
            deny: true
          },
          {
            title: 'Help.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: ['ubuntu', 'firefox3'],
            deny: false
          },
          {
            title: 'Help.ThoughtWorks.com',
            status: 'idle',
            host: '192.168.1.1',
            path: '/usr/local/bin',
            resourcesTitle: 'specify',
            resources: ['ubuntu', 'firefox3'],
            deny: false
          },
          {
            title: 'Help.ThoughtWorks.com',
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


