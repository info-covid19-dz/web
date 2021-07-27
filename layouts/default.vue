<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
      dark
    >
      <nuxt-link class="dark-link"  to="/">{{title}}</nuxt-link>
      <v-spacer />
   
      <nuxt-link class="dark-link" to="/annuaire">Annuaire</nuxt-link>
      <nuxt-link class="dark-link" to="/cagnottes">Cagnottes</nuxt-link>
      <nuxt-link class="dark-link" to="/contact">Contact</nuxt-link>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Annuaire COVID Algerie'
    }
  }
}
</script>


<style>
  .dark-link{
    padding-inline: 0.5em;
    text-decoration: none;
    color:white !important
  }
</style>
