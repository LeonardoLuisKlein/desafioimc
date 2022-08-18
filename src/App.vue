<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

html,
body,
#app {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(116.82deg, rgba(247, 183, 24, 0.7) 0%, rgba(245, 197, 78, 0.6) 100%);
}
.disable-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
button {
  cursor: pointer;
}
</style>
