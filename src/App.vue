<template>
  <div id="app">
    <common-header></common-header>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
// Components
import CommonHeader from './components/CommonHeader';
import CommonFooter from './components/CommonFooter';

export default {
  name: 'App',

  components: {
    CommonHeader,
    CommonFooter
  }
};
</script>

<style lang="scss">
@import './assets/styles/variables/index.scss';

#app {
  font-family: $test-font, $avenir, $helvetica, $arial, $sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
