<template>
  <div class="mt-3 px-5">
    <h3 class="mb-5">
      Numéros relatifs à la vente, réparation et location des concentrateurs
      d'oxygène.
    </h3>

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