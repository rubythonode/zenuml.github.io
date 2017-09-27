<template>
  <v-app light class="application--toolbar application--footer">
    <!--By default clipped is false, so we need this attribute and set it as true-->
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      clipped="true"
      v-model="drawer"
      enable-resize-watcher
    >
      <v-layout>
        <v-flex xs12 sm12>
          <v-card class="example">
            <img src="/public/A_method.png">
            <v-card-title>
              <div>
                <div><pre>A.method</pre></div>
              </div>
            </v-card-title>
          </v-card>
          <v-card class="example">
            <img src="/public/A_method_internalMethod.png">
            <v-card-title>
              <div>
                <div><pre>A.method() {
  internalMethod()
}</pre></div>
              </div>
            </v-card-title>
          </v-card>
          <v-card class="example">
            <img src="/public/alt.png">
            <v-card-title>
              <div>
                <div><pre>A.method() {
  if(condition) {
    B.method()
  }
}</pre></div>
              </div>
            </v-card-title>
          </v-card>
            <v-card class="example">
                <img src="/public/loop.png">
                <v-card-title>
                    <div>
                        <div><pre>A.method() {
  foreach(item) {
    B.method()
  }
}</pre></div>
                    </div>
                </v-card-title>
            </v-card>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-toolbar fixed>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>

      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container class="wrapper">
        <article class="main">
          <workspace></workspace>
        </article>
      </v-container>
    </main>
    <v-footer fixed="true">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        title: 'ZenUml - A Text to Sequence Diagram Convertor'
      }
    }
  }
</script>

<style>
  .container.wrapper {
    margin: 0;
    padding: 0;
    max-width: none;
  }
  .wrapper {
    display: flex;
    flex-flow: row wrap;
  }

  .main {
    flex: 1 0px;
  }

</style>
