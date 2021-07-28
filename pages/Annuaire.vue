<template>
  <div class="mt-3">
    <h1 class="mb-5">
      Retrouvez tous les numéros concernant la vente et location de
      concentrateurs d'oxygène
    </h1>
    <v-btn class="mb-5" color="primary">
      <a class="dark-link"
        target="_blank"
        href="https://docs.google.com/spreadsheets/d/1a4N_yGTUOmGVFRLODbfv6NNJO7hcgdXpayRFSufj1sk/edit?usp=sharing"
      >
        Ajouter un numéro</a
      ></v-btn
    >
    <v-data-table
      color="#470237"
      :headers="headers"
      :items="annuaires"
      :items-per-page="15"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:item.Vérifié="{ item }">
        <v-chip :color="getColor(item.Vérifié)" dark>
          {{ item.Vérifié }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import annuaire from "../static/annuaire/annuaire.json";
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
        { text: "Vérifié", value: "Vérifié", sortable: true },
        { text: "Type", value: "Type" },
        { text: "Service", value: "Service" },
      ],
      annuaires: annuaire,
    };
  },
  methods: {
    getColor(verified) {
      if (verified) {
        return "green";
      } else {
        return "red";
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
</style>