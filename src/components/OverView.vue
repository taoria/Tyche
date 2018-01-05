<template>
<div>
</div>
</template>
<script>
    export default {
      data() {
        return {
          value1: 0,
          pics: [
            { id: "0", pic: "blank.png" },
            { id: "1", pic: "static/hello.png" },
            { id: "2", pic: "fuck.png" },
            { id: "3", pic: "hello.png" },
            { id: "4", pic: "fuck.png" }
          ]
        };
      },
      methods: {
        testword: function() {
          console.log("hello world");
          return "hello world";
        }
      }
    };
</script>
<<style>
div{text-align:center} 
</style>
