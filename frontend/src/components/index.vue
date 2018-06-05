<template>
  <div class="main">

    <b-jumbotron class="fullpage" id="fullpage-main">

      <div id="main-typo">
        <h1 lang="ko" class="font-color_1 font-bold">우주기술</h1>
        <h1 lang="ko" class="font-color_1 font-bold">대학생</h1>
        <h1 lang="ko" class="font-color_1 font-bold">창업아카데미</h1>
        <h1 lang="en" class="font-color_2 font-bold">STAR-EXPLORATION</h1>
      </div>

      <div id="main-btn">
        <img class="main-btn-img" src="./../assets/main_btn_arrow.png" />
        <hr class="hr-blank" />
        <a v-on:mouseover="btnHover" v-on:mouseleave="btnLeave" id="btn-more" lang="ko" class="font-color_1 font-bold" href="#">참가신청하기</a>
        <hr class="hr-blank" />
        <img class="main-btn-img" src="./../assets/main_btn_arrow.png" />
      </div>
      <div class="hr-deco">
        <hr v-show="hoverShow" />
        <hr v-show="hoverShow" />
        <hr v-show="hoverShow" />
        <hr v-show="hoverShow" />
      </div>

      <div id="main-day" class="main-font">
        <h1 id="main-target" lang="en" class="font-color_2 font-bold">2018. 07. 16</h1>
        <h1 id="main-countdown" lang="en" class="font-color_1 font-bold">
          <countdown :time="time" :interval="100">
            <template slot-scope="props">{{ props.days }}:{{ props.hours }}:{{ props.minutes }}:{{ props.seconds.split('.')[0] }}</template>
          </countdown>
          <div>
            <p lang="en" class="countdown-sub">day</p>
            <p lang="en" class="countdown-sub">hour</p>
            <p lang="en" class="countdown-sub">minute</p>
            <p lang="en" class="countdown-sub">second</p>
          </div>
        </h1>
      </div>

      <div id="main-spacelogo">
        <img src="./../assets/logo_camp.png" />
      </div>

      <div id="main-logos">
        <img src="./../assets/logo_space.png" />
        <img src="./../assets/logo_virus.png" />
      </div>

    </b-jumbotron>

    <affix id="menu" relative-element-selector="#main-contents" style="width: 100%" :offset="{ top: 80, bottom: 80 }" :scroll-affix="true" v-on:affix="navAttach" v-on:affixtop="navDetach">
      <b-container>
        <b-navbar toggleable="md" id="nav" class="stickyed font-bold" lang="en">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand href="#">
            <img src="./../assets/symbol_neon.png" />
          </b-navbar-brand>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <b-nav-item href="#1">ABOUT</b-nav-item>
              <b-nav-item href="#1">SCHEDULE</b-nav-item>
              <b-nav-item href="#1">LOCATION</b-nav-item>
              <b-nav-item href="#1">APPLICATION</b-nav-item>
              <b-nav-item href="#1">CONTACTS</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
          <b-nav-form>
            <b-button lang="ko" class="my-2 my-sm-0 font-bold" href="#">바로 참가신청하기</b-button>
          </b-nav-form>
        </b-navbar>
      </b-container>
    </affix>

    <div id="main-contents">

      <div v-bind:class="[{ active: isNavTouch }]" class="noactive">
      </div>

      <b-container id="main-intro" class="container-margin">
        <b-tabs>
          <b-tab title="캠프소개" active>
            <br>I'm the first fading tab
          </b-tab>
          <b-tab title="브랜딩">
            <br>I'm the second tab content
          </b-tab>
        </b-tabs>
      </b-container>

      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>
      <b-jumbotron class="fullpage">
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>
      </b-jumbotron>

    </div>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    var now = new Date()
    var newYear = new Date(2018, 7, 26)

    return {
      isNavTouch: false,
      counting: false,
      time: newYear - now,
      hoverShow: false
    }
  },
  methods: {
    navAttach: function (event) {
      this.isNavTouch = true
    },
    navDetach: function (event) {
      this.isNavTouch = false
    },
    btnHover: function (event) {
      this.hoverShow = true
    },
    btnLeave: function (event) {
      this.hoverShow = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

/* start default */

.main {
  height: 100%;
}

/* end default */

/* start font */

@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

@font-face {
  font-family: 'campton-bolddemo';
  src: url('./../assets/campton-bolddemo-webfont.woff2') format('woff2'),
  url('./../assets/campton-bolddemo-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'campton-lightdemo';
  src: url('./../assets/campton-lightdemo-webfont.woff2') format('woff2'),
  url('./../assets/campton-lightdemo-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.font-bold:lang(ko) {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
}
.font-bold:lang(en) {
  font-family: 'campton-bolddemo', sans-serif;
}

.font-color_1 {
  color: white;
}
.font-color_2 {
  color: #00fcff;
}

/* end font */

/* start fullpage-main */

.fullpage {
  margin: 0;
  padding: 0;
  border: none;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0;
}
#fullpage-main {
  background-image: url("./../assets/bg_space.jpg");
}

/* end fullpage-main */

/* start main-btn */

#main-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -60px;
}
#main-btn .hr-blank {
  border: none;
}

#btn-more {
  vertical-align: center;
  text-align: center;
  font-size: 60px;
}
#btn-more:hover {
  text-decoration: none;
}
.main-btn-img {
  width: 50px;
  margin-left: 130px;
}

.hr-deco hr {
  border: 1px solid #00fcff;
  position: absolute;
  width: 100%;
}
.hr-deco hr:nth-child(1) {
  top: 50%;
  margin-top: 30px;
  width: 30%;
  left: 0%;
}
.hr-deco hr:nth-child(2) {
  top: 50%;
  margin-top: 50px;
  width: 30%;
  left: 5%;
}
.hr-deco hr:nth-child(3) {
  top: 50%;
  margin-top: 50px;
  width: 30%;
  right: 5%;
}
.hr-deco hr:nth-child(4) {
  top: 50%;
  margin-top: 70px;
  width: 30%;
  right: 0%;
}

/* end main-btn */

/* start main-typo */

#main-typo {
  position: absolute;
  top: 50px;
  left: 50px;
}
#main-typo h1:lang(ko) {
  font-size: 60px;
  line-height: 1em;
}
#main-typo h1:lang(en) {
  font-size: 60px;
}

/* end main-typo */

/* start main-logos */

#main-spacelogo {
  position: absolute;
  right: 50px;
  top: 50px;
}
#main-spacelogo img {
  width: 200px;
}

#main-logos {
  position: absolute;
  bottom: 50px;
  left: 50px;
}
#main-logos img {
  width: 100px;
  margin-right: 30px;
}

/* end main-logos */

/* start main-day */

#main-day {
  position: absolute;
  bottom: 20px;
  right: 0px;
}
#main-day h1:lang(en) {
  font-size: 60px;
}

#main-countdown {
  width: 400px;
  text-align: justify;
}
.countdown-sub {
  font-size: 12px;
  border-top: 1.5px solid #00fcff;
  width: 70px;
  text-align: center;
  height: 30px;
  line-height: 2.4em;
  float: left;
  margin-right: 20px;
  visibility: hidden;
  font-family: 'campton-lightdemo', sans-serif;
}
#main-countdown:hover .countdown-sub {
  visibility: visible;
}
#main-target {
  width: 400px;
  text-align: justify;
}

/* end main-day */

/* start nav */

.noactive {
  background-color: white;
  height: 100px;
}
.active {
  height: 180px;
}

#nav {
  background-color: #282828;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 50px;
  height: 80px;
}
#nav img {
  width: 50px;
}
#nav ul li {
  margin-left: 30px;
}
#nav ul li a {
  font-size: 20px;
  color: white;
}
#nav ul li a:hover {
  color: #00fcff;
}
#nav form a {
  margin-right: 50px;
  border: 3px solid #00fcff;
  background: none;
  color: #00fcff;
  border-radius: 0px;
}

#menu {
  background-color: #282828;
}

/* end nav */

/* start main-intro */
#main-intro {
  margin-top: 50px;
  margin-bottom: 150px;
}

#main-intro ul li {
  width: 50%;
  height: 50px;
}

#main-intro ul li a {
  border: none;
}

.nav-tabs {
  border: none;
}

#main-intro ul li a {
  height: auto;
  border-bottom: 1px solid blue;
}

#main-intro ul li a.active {
  height: auto;
  border-bottom: 1px solid red;
}

/* end main-intro */

</style>
