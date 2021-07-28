<template>
  <v-data-table
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