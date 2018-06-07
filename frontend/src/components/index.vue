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
        <img class="main-btn-arrow" id="main-btn-arrow_1" src="./../assets/main_btn_arrow.png" />
        <hr class="hr-blank" />
        <a v-on:mouseover="btnHover" v-on:mouseleave="btnLeave" id="btn-more" lang="ko" class="font-color_1 font-bold" href="#main-contents" v-smooth-scroll="{ duration: 1000, offset: -50 }">참가신청하기</a>
        <hr class="hr-blank" />
        <img class="main-btn-arrow" id="main-btn-arrow_2" src="./../assets/main_btn_arrow.png" />
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
              <a href="#main-contents" v-smooth-scroll="{ duration: 1000, offset: -50 }">ABOUT</a>
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
          <b-tab id="main-intro-tab1" title="캠프소개" active>
            <img id="main-intro-symbol" src="./../assets/symbol_black.png" />
            <h1 class="font-bold" lang="ko">
              “2018 우주기술 창업 아카데미란?"
            </h1>
            <p class="font-normal" lang="ko">
최근  “NewSpace”라는 이름으로 항공우주산업이 폭발적으로 주목받고 있습니다. 4차 산업혁명과 우주 기술 발전을 통해, 전세계적으로 다양한 우주 스타트업들이 등장하며 새로운 뉴 스페이스 생태계가 구축되고 있습니다.
            </p>
            <p class="font-normal" lang="ko">
뉴 스페이스 시대에 직면하여 한국항공우주연구원에서는 우주기술지식을 기반으로 창업 교육을 실시하고, 사업 모델을 수립해 볼 수 있는 캠프를 개최합니다. 본 캠프에서는  우주/창업 산업의 강연과 실습을 통해 기업가 정신을 확립하고, 구체적인 우주 비즈니스 계획을 수립합니다. 총 2회의 기본-심화 캠프를 통해 심도 있는 창업의 전 과정을 경험하며, 시제품을 제작 및 사후 관리까지 진행하여 실제 우주기반 사업화 기회 또한 제공합니다.
            </p>
            <a href="https://www.kari.re.kr/">
              <img href="" class="main-intro-logo" id="main-intro-logo-1" src="./../assets/logo_space_color.png" />
            </a>
            <a href="http://virus.network">
              <img class="main-intro-logo" id="main-intro-logo-2" src="./../assets/logo_virus_color.png" />
            </a>
          </b-tab>
          <b-tab title="브랜딩">
            <img class="main-branding" src="./../assets/branding_3.jpg" />
            <a class="font-bold" lang="ko" href="./../download/STAR-EXPLORATION-branding_VIRUS.pdf" download>브랜딩 전체 다운로드(pdf)</a>
          </b-tab>
        </b-tabs>
      </b-container>

      <b-container class="container-margin">
        <template>
          <vue-event-calendar :events="demoEvents"></vue-event-calendar>
        </template>
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

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
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
      hoverShow: false,
      demoEvents: [{
        date: '2018/07/18',
        title: '집결 및 이동',
        desc: '08:00 - 11:00',
        customClass: ''
      }, {
        date: '2018/07/18',
        title: '오리엔테이션',
        desc: '11:00 - 12:00',
        customClass: ''
      }, {
        date: '2018/07/18',
        title: '점심식사',
        desc: '12:00 - 13:00',
        customClass: ''
      }, {
        date: '2018/07/18',
        title: '아이스브레이킹',
        desc: '13:00 - 14:00',
        customClass: ''
      }, {
        date: '2018/07/18',
        title: '벤처캐피털 특강',
        desc: '14:00 - 16:00',
        customClass: ''
      }, {
        date: '2018/07/18',
        title: '우주 기술의 역사와 최신 동향',
        desc: '16:00 - 17:00',
        customClass: ''
      }, {
        date: '2018/07/18',
        title: '항공우주기술 경영 특강',
        desc: '17:00 - 18:00',
        customClass: ''
      }, {
        date: '2018/07/18',
        title: '저녁식사',
        desc: '18:00 - 19:00',
        customClass: ''
      }, {
        date: '2018/07/18',
        title: '네트워킹 파티',
        desc: '19:00 - 22:00',
        customClass: ''
      }, {
        date: '2018/07/19',
        title: '아침식사',
        desc: '08:00 - 09:00',
        customClass: ''
      }, {
        date: '2018/07/19',
        title: '창업 브레인스토밍 & 씽킹',
        desc: '09:00 - 10:00',
        customClass: ''
      }, {
        date: '2018/07/19',
        title: '프로젝트 타당성 분석',
        desc: '10:00 - 12:00',
        customClass: ''
      }, {
        date: '2018/07/19',
        title: '점심식사',
        desc: '12:00 - 13:00',
        customClass: ''
      }, {
        date: '2018/07/19',
        title: '팀별 아이디어 구상',
        desc: '13:00 - 15:00',
        customClass: ''
      }, {
        date: '2018/07/19',
        title: '프로젝트 실습',
        desc: '15:00 - 18:00',
        customClass: ''
      }, {
        date: '2018/07/19',
        title: '저녁식사',
        desc: '18:00 - 19:00',
        customClass: ''
      }, {
        date: '2018/07/19',
        title: '프로젝트 중간발표 A그룹',
        desc: '19:00 - 20:00',
        customClass: ''
      }, {
        date: '2018/07/19',
        title: '프로젝트 중간발표 B그룹',
        desc: '20:00 - 21:00',
        customClass: ''
      }, {
        date: '2018/07/19',
        title: '팀별 아이디어 점검',
        desc: '21:00 - 22:00',
        customClass: ''
      }
    ]
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
  },
  created: function () {
    this.$EventCalendar.toDate('2018/07/18')
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
.font-normal:lang(ko) {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
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
  animation: anim_arrow-btn 0.5s infinite alternate;
  -webkit-animation: anim_arrow-btn 0.5s infinite alternate;
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
  color: white;
}

.main-btn-arrow {
  width: 50px;
  margin-left: 130px;
}

#main-btn-arrow_1 {
  animation: anim_arrow-1 0.5s infinite alternate;
  -webkit-animation: anim_arrow-1 0.5s infinite alternate;
}
#main-btn-arrow_2 {
  animation: anim_arrow-2 0.5s infinite alternate;
  -webkit-animation: anim_arrow-2 0.5s infinite alternate;
}

@keyframes anim_arrow-btn {
  0% { margin-top: -60px;}
  100% { margin-top: -70px;}
}
@keyframes anim_arrow-1 {
  0% { margin-bottom: 0px;}
  100% { margin-bottom: 10px;}
}
@keyframes anim_arrow-2 {
  0% { margin-top: 10px;}
  100% { margin-top: 0px;}
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
  animation: hr-deco-1 0.5s;
  -webkit-animation: hr-deco-1 0.5s;
}
.hr-deco hr:nth-child(2) {
  top: 50%;
  margin-top: 50px;
  width: 30%;
  left: 5%;
  animation: hr-deco-2 0.5s;
  -webkit-animation: hr-deco-2 0.5s;
}
.hr-deco hr:nth-child(3) {
  top: 50%;
  margin-top: 50px;
  width: 30%;
  right: 5%;
  animation: hr-deco-3 0.5s;
  -webkit-animation: hr-deco-3 0.5s;
}
.hr-deco hr:nth-child(4) {
  top: 50%;
  margin-top: 70px;
  width: 30%;
  right: 0%;
  animation: hr-deco-4 0.5s;
  -webkit-animation: hr-deco-4 0.5s;
}

@keyframes hr-deco-1 {
  0% { width: 0%;}
  100% { width: 30%;}
}
@keyframes hr-deco-2 {
  0% { width: 0%;}
  100% { width: 30%;}
}
@keyframes hr-deco-3 {
  0% { width: 0%;}
  100% { width: 30%;}
}
@keyframes hr-deco-4 {
  0% { width: 0%;}
  100% { width: 30%;}
}

/* for responsive */
/* for phone */
@media screen and (max-width: 768px) {
  #btn-more {
    font-size: 36px;
  }
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

/* for responsive */
/* for phone */
@media screen and (max-width: 768px) {
  #main-typo h1:lang(ko) {
    font-size: 36px;
  }
  #main-typo h1:lang(en) {
    font-size: 36px;
  }
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

/* for responsive */
/* for phone */
@media screen and (max-width: 768px) {
  #main-spacelogo img {
    width: 50px;
  }
  #main-logos img {
    width: 50px;
  }
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

/* for responsive */
/* for phone */
@media screen and (max-width: 768px) {
  #main-day {
    bottom: 5px;
  }
  #main-day h1:lang(en) {
    font-size: 36px;
  }
  #main-countdown {
    width: 240px;
  }
  #main-target {
    width: 240px;
  }
  .countdown-sub {
    width: 40px;
    margin-right: 12px;
  }
  .countdown-sub:last-child {
    margin-right: 0px;
  }
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
  height: 800px;
  margin-bottom: 200px;
}

#main-intro ul li {
  width: 50%;
  height: 50px;
  text-align: center;
}
#main-intro ul li a {
  border: none;
  height: auto;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 800;
  color: black;
}
#main-intro ul li a.active {
  height: auto;
  border-bottom: 3px solid #00fcff;
}

.nav-tabs {
  border: none;
}

#main-intro-symbol {
  width: 350px;
  float: left;
  margin-left: 50px;
  margin-right: 100px;
}

#main-intro .tab-content {
}

mark {
  background-color: #00fcff;
  padding: 0;
}

#main-intro .main-intro-logo {
  float: right;
  margin-top: 50px;
}

#main-intro #main-intro-logo-1 {
  /* KARI */
  height: 60px;
  margin-right: 10px;
}

#main-intro #main-intro-logo-2 {
  /* VIRUS */
  height: 30px;
  margin-right: 50px;
  margin-top: 80px;
}

#main-intro .main-branding {
  width: 100%;
  padding: none;
}

#main-intro-tab1 {
  margin-top: 120px;
}
#main-intro-tab1 h1 {
  margin-bottom: 30px;
}
#main-intro-tab1 p {
  line-height: 1.8em;
  margin-bottom: 10px;
}

#main-intro button {
  float: right;
  width: 200px;
  height: 50px;
  border: 5px solid #00fcff;
  text-align: center;
  padding-bottom: 1px;
}
#main-intro button:hover {
  background-color: #00fcff;
}
/* end main-intro */

</style>
