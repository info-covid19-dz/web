<template>
  <div class="mt-3 px-5">
    <h3 class="mb-5">
      Numéros relatifs à la vente, réparation et location des concentrateurs
      d'oxygène.
    </h3>
    <v-btn class="mt-3 mb-5" color="primary">
      <a
        class="dark-link"
        target="_blank"
        href="https://docs.google.com/spreadsheets/d/1a4N_yGTUOmGVFRLODbfv6NNJO7hcgdXpayRFSufj1sk/edit?usp=sharing"
      >
        Ajouter une cagnotte</a
      ></v-btn
    >
    <v-card>
      <v-card-title>
        Annuaire
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Rechercher"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        color="#470237"
        :headers="headers"
        :items="annuaires"
        :items-per-page="15"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:item.Vérifié="{ item }">
          <span>
            {{ item.Vérifié ? item.Vérifié : "non" }}
          </span>
        </template>
      </v-data-table></v-card
    >
  </div>
</template>

<script>


export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Entreprise",
          align: "start",
          sortable: false,
          value: "Nom",
        },
        { text: "Wilaya", value: "Wilaya", sortable: true },
        { text: "Addresse", value: "Addresse" },
        { text: "Numero", value: "Numero" },
        { text: "Service", value: "Service", sortable: true },
        { text: "Disponibilité", value: "Disponibilité", sortable: true },
      ],
      annuaires: [],
    };
  },
  head() {
    return {
      title: "Annuaire",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Annuaire des concentrateurs d'oxygéne disponibles en vente ou en location en Algérie",
        },
      ],
    };
  },
  mounted(){
    this.$axios.get("http://covid-info-algerie-api.herokuapp.com/api/oxygen").then(resp=>{
      this.annuaires = resp.data
    })
  }
};
</script>

<style scoped>
</style>
