<template>
  <div class="main">

    <b-jumbotron class="fullpage" id="fullpage-main">

      <div id="main-typo">
        <h1 lang="ko" class="font-color_1 font-bold">우주기술</h1>
        <h1 lang="ko" class="font-color_1 font-bold">대학생</h1>
        <h1 lang="ko" class="font-color_1 font-bold">창업아카데미</h1>
        <h1 lang="en" class="font-color_2 font-bold">STAR-EXPLORATION</h1>
      </div>

      <a id="btn-more" lang="ko" class="font-color_1 font-bold" href="#">더 알아보기</a>

    </b-jumbotron>

    <affix id="menu" relative-element-selector="#main-contents" style="width: 100%" :offset="{ top: 56, bottom: 56 }" :scroll-affix="true" v-on:affix="navAttach" v-on:affixtop="navDetach">
      <b-navbar toggleable="md" type="dark" variant="info" id="nav" class="stickyed">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item href="#1">Link</b-nav-item>
            <b-nav-item href="#2">Link</b-nav-item>
            <b-nav-item href="#3">Link</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </affix>

    <div id="main-contents">

      <div v-bind:class="[{ active: isNavTouch }]" class="noactive">
      </div>

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
    return {
      isNavTouch: false
    }
  },
  methods: {
    navAttach: function (event) {
      this.isNavTouch = true
    },
    navDetach: function (event) {
      this.isNavTouch = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  margin: 0px;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#fullpage-main {
  background-image: url("./../assets/bg_space.jpg");
}

#btn-more {
  position: absolute;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  text-align: center;
  top: 50%;
  vertical-align: center;
  padding: 10px;
  border: 8px solid white;
  font-size: 36px;
}
#btn-more:hover {
  border: 8px solid #00fcff;
  color: #00fcff;
}

/* end fullpage-main */

/* start nav */

.noactive {
  background-color: white;
  height: 500px;
}

.active {
  height: 556px;
}

/* end nav */

#main-contents {
  padding-top: 50px;
}

</style>
