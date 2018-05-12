<template>
  <div class="hello">
    <div id="main-typo">
      <h1 lang="ko">우주기술</h1>
      <h1 lang="ko">대학생</h1>
      <h1 lang="ko">창업 아카데미</h1>
      <h1 lang="en" class="font-color_1">STAR-EXPLORATION</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* for fonts */
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

@font-face {
  font-family: 'campton-bolddemo';
  src: url('./../assets/campton-bolddemo-webfont.woff2') format('woff2'),
  url('./../assets/campton-bolddemo-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

:lang(ko) {
  font-family: 'Noto Sans KR', sans-serif;
}

:lang(en) {
  font-family: 'campton-bolddemo', sans-serif;
}

/* for font-color */
.font-color_1 {
  color: #00fcff;
}

/* for fullscreen */
.hello {
  background-image: url("./../assets/bg_space.jpg");

  height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* for main-typo */
#main-typo {
  font-size: 48px;
  font-weight: 800;
  color: white;
  padding-left: 50px;
  padding-top: 50px;
  line-height: 1.3em;
}

</style>
