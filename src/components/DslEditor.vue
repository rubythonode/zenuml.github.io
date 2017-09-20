<template>
  <div class="code">
    <codemirror v-model='code' :options='editorOptions' v-on:change="onEditorCodeChange"></codemirror>
  </div>
</template>

<script>
/* eslint-disable */
import { codemirror, CodeMirror } from 'vue-codemirror'
import 'codemirror/keymap/sublime'; // Must import, otherwise editor gets no height

export default {
  name: 'dsl-editor',
  data () {
    return {
      code: '//*********************** GET STARTED ***********************\r\n' +
            '// 1. Change `course` to `Course` (line 17)\r\n' +
            '// 2. Change line #17 to Course.isEligible(aStudent)\r\n' +
            '// 3. Rename `EventBus` to `EnrollingEventBus` (line 22 & 24)\r\n' +
            '// 4. Remove all the code and put yours in\r\n' +
            '// 5. Have fun!\r\n' +
            '//***********************************************************\r\n' +
      '\r\n' +
      '// Student is the initial participant\r\n' +
      'Student.enroll(Seminar) {\r\n' +
      '  // Call a method of another participant\r\n' +
      '  Seminar.enroll(aStudent) {\r\n' +
      '    // Call an internal method\r\n' +
      '    getCourses()\r\n' +
      '    // Loop fragment\r\n' +
      '    while(moreCourse) {\r\n' +
      '      course.isStudentEligible() {\r\n' +
      '        Student.getSeminarHistory()\r\n' +
      '      }\r\n' +
      '      // Alternation fragment\r\n' +
      '      if (eligible) {\r\n' +
      '        EventBus.enroll()\r\n' +
      '      } else {\r\n' +
      '        EventBus.reject()\r\n' +
      '      }\r\n' +
      '    }\r\n' +
      '  }\r\n' +
      '}',
      editorOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/javascript',
        lineNumbers: true,
        // sublime、emacs、vim三种键位模式，支持你的不同操作习惯
        keyMap: 'sublime',
        // 按键映射，比如Ctrl键映射autocomplete，autocomplete是hint代码提示事件
        extraKeys: { 'Ctrl': 'autocomplete' },
        // 代码折叠
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        // 选中文本自动高亮，及高亮方式
        styleSelectedText: true,
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true }
      }
    }
  },
  methods: {
    onEditorCodeChange (newCode) {
      this.$store.commit('code', newCode)
    }
  },
  mounted () {
    this.$store.commit('code', this.code)
  },
  components: {
    codemirror
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
  .code .CodeMirror {
    height: 100%;
    z-index: 0;
  }
</style>
