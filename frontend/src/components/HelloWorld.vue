<template>
  <div class="hello">
    <div id="main-typo" class="main-font">
      <h1 lang="ko">우주기술</h1>
      <h1 lang="ko">대학생</h1>
      <h1 lang="ko">창업 아카데미</h1>
      <h1 lang="en" class="font-color_1">STAR-EXPLORATION</h1>
    </div>
    <div id="main-day" class="main-font">
      <h2 id="main-target" class="font-color_1" lang="en">2018. 07. 16</h2>
      <h2 id="main-countdown" lang="en">
        <countdown :time="time" :interval="100">
          <template slot-scope="props">{{ props.days }}:{{ props.hours }}:{{ props.minutes }}:{{ props.seconds.split('.')[0] }}</template>
        </countdown>
      </h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    var now = new Date()
    var newYear = new Date(2018, 7, 16)

    return {
      counting: false,
      time: newYear - now
    }
  },
  mounted () {
    // this.$refs.countdown.start()
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
.main-font {
  font-size: 60px;
  font-weight: 800;
  color: white;
  line-height: 1.3em;
}

#main-typo {
  padding-left: 50px;
  padding-top: 50px;
}

#main-day {
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding-right: 0px;
  padding-bottom: 50px;
}

#main-target {
  width: 400px;
  text-align: justify;
}

#main-countdown {
  width: 400px;
  text-align: justify;
}
</style>
