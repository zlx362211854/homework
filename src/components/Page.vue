<template>
  <div class="tab">
    <div class="tab-left">
      <Tag :data="item" v-for="(item, index) in data" :key="index" :index="index"
           :addResources="addResources"></Tag>
    </div>
    <div class="tab-right">
      <div class="tab-summary clear">
        <h3>summary</h3>
        <div class="summary-list">
          <div class="summary-state">building</div>
          <div class="summary-num">2</div>
        </div>
        <div class="summary-list">
          <div class="summary-state">idle</div>
          <div class="summary-num">2</div>
        </div>
      </div>
      <div class="tab-history">
        <h3>History</h3>
        <div class="history-list">
          <p>Acceptance01</p>
        </div>
        <div class="history-list">
          <p>Acceptance01</p>
        </div>
        <div class="history-list">
          <p>Acceptance01</p>
        </div>
        <div class="history-list">
          <p>Acceptance01</p>
        </div>
      </div>
    </div>
    <Dialog
      :handleClose="closeDialog"
      :handleSubmit="submitDialog"
      ref="dialog"
    ></Dialog>
  </div>
</template>
<script>
  import Tag from './common/Tag.vue'
  import Dialog from './common/Dialog.vue'

  export default {
    components: {
      Tag,
      Dialog
    },
    props: {
      data: Array
    },
    data() {
      return {
        showDialog: false,
      }
    },
    methods: {
      addResources(e, index) {
        this.clickedTagIndex = index;
        this.openDialog(e);
      },
      openDialog(e) {
        this.$refs.dialog.open(e);
      },
      closeDialog() {
        this.$refs.dialog.close();
      },
      submitDialog(val) {
        const {clickedTagIndex} = this;
        this.closeDialog();
        val = val.trim().split(',');
        if (val) {
          val.forEach(i => {
            if (i && i.trim() !== '') {
              this.data[clickedTagIndex].resources.push(i.trim());
            }
          });
        }
      }
    }
  }
</script>
<style scoped>
  .clear:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }
  .tab {
    width: 100%;
    height: 415px;
    box-sizing: content-box;
  }

  .tab-left {
    box-sizing: border-box;
    float: left;
    width: 70%;
    border-right: 1px solid #000;
    height: 415px;
    padding: 5px 10px;
  }

  .tab-right {
    float: left;
    box-sizing: border-box;
    width: 30%;
    height: 415px;
    padding: 20px;
    text-align: left;
  }
  .tab-summary>h3 {
    border-bottom: 2px solid #d0d0d0;
    padding-bottom: 10px;
  }
  .summary-list>div {
    float: left;
    width: 50%;
  }
  .tab-history {
    margin-top: 20px;
  }
  .tab-history>h3 {
    border-bottom: 2px solid #d0d0d0;
    padding-bottom: 10px;
  }
</style>
