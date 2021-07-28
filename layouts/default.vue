<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app color="primary" dark>
      <nuxt-link class="dark-link" to="/">{{ title }}</nuxt-link>
      <v-spacer />
      <v-toolbar-items
        v-for="(item, i) in items"
        :key="i"
        class="hidden-sm-and-down justify-end"
      >
        <v-btn text >
          <nuxtLink  class="dark-link" :to="item.link">{{ item.title }}</nuxtLink></v-btn
        >
      </v-toolbar-items>

      <v-layout class="justify-end hidden-md-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn large icon color="#060606" dark v-on="on">
              <v-icon large> mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i + item.id">
              <v-list-item-title
                ><nuxt-link :to="item.link">{{
                  item.title
                }}</nuxt-link></v-list-item-title
              >
            </v-list-item>
          
          </v-list>
        </v-menu>
      </v-layout>
    </v-app-bar>
    <v-main>
  
        <Nuxt />
     
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: "Annuaire",
          link: "/annuaire",
        },
        {
          title: "Cagnottes",
          link: "/cagnottes",
        },
        {
          title: "Contact",
          link: "/contact",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Annuaire COVID Algerie",
    };
  },
};
</script>


<style>
.dark-link {
  padding-inline: 0.5em;
  text-decoration: none;
  color: white !important;
}

.text-bold{
  font-weight: bold;
}
</style>
