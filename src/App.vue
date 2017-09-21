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
      <v-list>
        <v-list-tile 
          v-for="(item, i) in items"
          :key="i"
          value="true"
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
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
