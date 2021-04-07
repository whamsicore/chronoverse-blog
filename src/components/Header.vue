<template>
    <header :click="clickEvent" class="header" :class="{sticky: $route.path === '/' || $route.path.includes('/projects/')}">

        <ClientOnly>
            <!-- Global site tag (gtag.js) - Google Analytics
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-P64N7PKXLL"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-P64N7PKXLL');
            </script> -->
        </ClientOnly>
        <div class="container">
            <div class="left">
                <g-link :to="{ name: 'home' }" class="home-link">
                    <img 
                        src="../../static/logo.jpg"
                        :alt="settings.site_name" 
                        class="logo"
                    />
                </g-link>
            </div>
            <nav class="nav right">
                <g-link class="nav__link" to="/journal">Blog</g-link>
                <g-link class="nav__link" to="/contact">Contact</g-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
        logo: require("../../static/logo.svg"),
        settings: require("../../data/theme.json")
    }
  }, 
  methods: {
    clickEvent: function () {
      this.$gtag.event('clicked', { method: 'Google' })
    },

  }, // methods
  mounted() {
    this.$gtag.event('page_load', { method: 'Google' }) // tag event

  }
} // default
</script>

<style scoped>
.header {
    position: relative;
    height: 6rem;
    z-index: 10;
    background-color: #fff;
    border-bottom: 2px solid black;
}
.header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.header > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}
.home-link {
    text-decoration: none;
}
.logo {
    height: 5.5rem;
}
.site-name {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;   
}
.nav > * {
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 3rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border 0.15s;
}
.nav > *:last-of-type {
    margin: 0;
}
.nav > *:hover {
    border-color: inherit;
}
.nav > .active {
    border-color: inherit;
}
</style>
