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
      <a class="on-github" href="https://github.com/ZenUml/zenuml.github.io" target="_blank">
          <svg viewBox="0 0 16 16" style="width:32px;height:32px;fill:#666;">
              <path d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"></path>
          </svg>
      </a>
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

  .on-github {
    position: absolute;
    right: 0;
  }

</style>
