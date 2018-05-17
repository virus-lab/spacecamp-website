<template>
  <div class="main">

    <b-jumbotron class="fullpage" id="fullpage-main">
      <p>For more information visit website</p>
      <b-btn variant="primary" href="#">More Info</b-btn>
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
