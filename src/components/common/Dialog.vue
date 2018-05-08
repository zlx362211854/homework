<template>
  <div class="dialog" :style="{left: layerX+'px', top: layerY+ 20 + 'px'}" v-if="show">
    <div class="dialog-triangle"></div>
    <div class="dialog-body">
      <div class="dialog-msg">
        <span>(separate multiple resources name with commas)</span>
      </div>
      <div class="dialog-input">
        <input type="text" v-model="inputValue">
      </div>
      <div class="dialog-buttons">
        <button @click="handleSubmit(inputValue)">Add Resources</button>
        <button @click="handleClose">close</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      handleClose: Function,
      handleSubmit: Function
    },
    data() {
      return {
        inputValue: '',
        show: false
      }
    },
    methods: {
      open(e) {
        if (e) {
          const top = e.target.getBoundingClientRect().top + document.documentElement.scrollTop;
          const left = e.target.getBoundingClientRect().left + document.documentElement.scrollLeft;
          this.layerX = left;
          this.layerY = top;
          this.show = true;
        }
      },
      cleanState() {
        this.inputValue = '';
      },
      close() {
        this.cleanState();
        this.show = false;
      }
    }
  }
</script>
<style scoped>
  .dialog {
    width: 500px;
    z-index: 1000;
    position: fixed;
    text-align: left;
  }
  .dialog-triangle {
    width: 0;
    height: 0;
    position: relative;
    left: 30px;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 30px solid #5c4b1c;
  }
  .dialog-triangle:after {
    content: '';
    position: absolute;
    top: 3px;
    left: -30px;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 30px solid #e4ecd8;
  }
  .dialog-body {
    width: 500px;
    height: 100px;
    border: 2px solid #5c4b1c;
    border-radius: 10px;
    background-color: #e2ecd6;
    padding: 10px;
  }
  .dialog-body>div {
    margin: 10px 0;
  }
  .dialog-input input{
    width: 100%;
  }
</style>
