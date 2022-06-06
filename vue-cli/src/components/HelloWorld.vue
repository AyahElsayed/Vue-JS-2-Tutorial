<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
        return {
          title: 'Your first Vue file, wooo!'
        }
    },
    methods: {
        greeting: function(){
            return 'heeey cowboy'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
