<template>
  <v-container>
    <v-row justify="center" align="center" class="my-6">
      <v-col cols="12" justify="center" align="center">
        <h2>Contribuer à la mission</h2></v-col
      >

      <v-col cols="12" md="6">
        <nuxt-link class="dark-link" to="/annuaire">
          <v-card min-height="350">
            <v-img height="250" src="/contribute/oxy.jpeg"></v-img>
            <v-card-title>
              Ajouter un contact pour concentrateurs d'oxygène
            </v-card-title>
            <v-card-text>
              <p class="text-bold">
                Il est urgent de vérifier et de valider les différents numéros
                de téléphone actuellement partagés. Nous vous invitons à entrer
                dans les listes les numéros que vous avez testés et dont vous
                garantissez la validité.
              </p></v-card-text
            >
          </v-card></nuxt-link
        >
      </v-col>
      <v-col cols="12" md="6">
        <nuxt-link target="_blank" to="/cagnottes">
          <v-card min-height="350">
            <v-img height="250" src="/contribute/fundraising.jpeg"></v-img>
            <v-card-title> Ajouter un lien vers une cagnotte </v-card-title>
          </v-card></nuxt-link
        >
      </v-col>
      <v-col cols="12" md="10">
        <v-card min-height="350">
          <a href="mailto:mission.covid19.algerie@gmail.com">
            <v-img height="250" src="/contribute/github.jpg"></v-img>
            <v-card-title> Contribuer au project</v-card-title>
            <v-card-text>
              <ul>
                <li>Gestion et validation des fichiers Excel.</li>
                <li>
                  Actuellement, la base de données consiste en un fichier Excel,
                  converti en JSON. Une API respectable serait la bienvenue. 🚀
                </li>
              </ul>
              <span class="pt-3">
                <strong>NB 👩‍💻👨‍💻: </strong> le lien du Github sera mis en ligne
                au plus tôt.</span
              >
            </v-card-text>
          </a>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style  scoped>
a {
  text-decoration: none;
  color: black !important;
}

p {
  color: black !important;
}
</style>