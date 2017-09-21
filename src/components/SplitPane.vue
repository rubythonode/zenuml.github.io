<template>
  <div class="split-pane"
       @mousemove="dragMove"
       @mouseup="dragEnd"
       @mouseleave="dragEnd"
       :class="{ dragging: dragging }">
    <div class="left" :style="{ width: split + '%' }">
      <slot name="left"></slot>
        <div class="dragger" @mousedown.prevent="dragStart">
        </div>
    </div>
      <div class="right" :style="{ width: (100 - split) + '%' }">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        split: 30,
        dragging: false
      }
    },
    methods: {
      dragStart (e) {
        this.dragging = true
        this.startX = e.pageX
        this.startSplit = this.split
      },
      dragMove (e) {
        if (this.dragging) {
          const dx = e.pageX - this.startX
          const totalWidth = this.$el.offsetWidth
          this.split = this.startSplit + ~~(dx / totalWidth * 100)
        }
      },
      dragEnd () {
        this.dragging = false
      }
    }
  }
</script>

<style scoped>
  .split-pane {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .split-pane.dragging {
    cursor: ew-resize;
  }

  .left,
  .right {
    position: relative;
    height: 100%;
    display: flex;
    overflow: scroll;
  }

  .left>div,
  .right>div {
    width: 100%;
  }

  .right {
    border-left: 1px solid rgba(0,0,0,0.15);
  }

  .left>.dragger {
    background: rgba(0,0,0,0.15);
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    right: -2px;
    width: 4px;
    cursor: ew-resize;
  }
</style>
