<template >
  <v-col>
    <!-- <v-row
      v-if="loadTable"
      align="center"
      justify="center"
      align-content="center"
    > -->
    <!-- <v-progress-circular
        :size="250"
        color="amber"
        indeterminate
      ></v-progress-circular> -->
    <!-- </v-row> -->
    <v-row>
      <v-data-table
        :headers="headers"
        :items="desserts"
        hide-default-footer
        hide-default-header
      >
        <template v-slot:header="{ props: { headers } }">
          <thead>
            <tr>
              <td></td>
              <th
                class="header-table justify-center align-center"
                v-for="(header, index) in headers"
                :key="index"
                :colspan="header.cols"
                :style="`border-bottom: 3px solid ${header.cor}`"
              >
                <img src="" alt="" />
                <!-- <img
                  :src="`/operadoras/${header.cnpj}__logo.png`"
                  alt
                  :id="`img${index}`"
                  @load="getColors(`img${index}`, index)"
                /> -->
              </th>
            </tr>
          </thead>
        </template>
        <template v-slot:body="{ items }" @update:group-by="getColspan(items)">
          <tbody>
            <tr v-for="(header, indexH) in headersProdutos" :key="indexH">
              <td
                style="min-width: 150px"
                class="text-center font-weight-medium"
              >
                {{ header.text }}
              </td>
              <td
                v-for="(item, index) in items"
                :key="index"
                style="min-width: 350px"
                class="table-col-width text-center"
              >
                <span style="color: #11010f"> {{ header.value }}</span>
              </td>
            </tr>
            <!-- Mês Reajuste -->
            <tr>
              <td class="pa-0 ma-0 text-center font-weight-medium flex-grow-1">
                <div
                  style="
                    border-bottom: 1px solid #ddd;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    justify-items: center;
                  "
                >
                  Mês de Reajuste
                </div>
              </td>
              <td
                v-for="(item, index) in items"
                :key="index"
                class="table-col-width text-center pa-0"
              >
                <div
                  style="
                    border-bottom: 1px solid #ddd;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    justify-items: center;
                  "
                >
                  mes reajuste
                </div>
              </td>
            </tr>
            <!-- totais -->
            <tr @click="expVidas = !expVidas">
              <td class="pa-0 ma-0 text-center font-weight-medium flex-grow-1">
                <div
                  style="
                    border-bottom: 1px solid #ddd;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    justify-items: center;
                  "
                >
                  Total
                  <v-icon :class="[expVidas ? 'rotate' : '']"
                    >mdi-chevron-down</v-icon
                  >
                </div>
              </td>
              <td
                v-for="(item, index) in items"
                :key="index"
                class="table-col-width text-center pa-0"
              >
                <div
                  style="
                    border-bottom: 1px solid #ddd;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    justify-items: center;
                  "
                >
                  valores
                  <!-- <div class="d-flex align-center justify-space-around">
                    <v-icon color="success" large>mdi-sale</v-icon>
                    <span class="green--text darken-4--text font-weight-black">
                    </span>
                  </div> -->
                </div>
              </td>
            </tr>
            <tr v-show="expVidas" style="transition: height 2s">
              <td
                class="pa-0 ma-0 text-center font-weight-medium"
                style="
                  max-width: 250px;
                  min-width: 150px;
                  align-items: center;
                  align-content: center;
                  justify-content: center;
                  justify-items: center;
                "
              >
                <div
                  style="
                    border-bottom: 1px dashed #ddd;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    justify-items: center;
                  "
                  class="pl-2 pr-2 font-weight-medium"
                  v-for="(beneficiario, index) in beneficiarios"
                  :key="index"
                >
                  <v-chip
                    class="flex-grow-1 d-flex justify-center font-weight-bold"
                    color="primary"
                    outlined
                  >
                    <v-icon left> </v-icon>
                  </v-chip>
                </div>
              </td>
              <td
                v-for="(item, index) in items"
                :key="index"
                class="table-col-width text-center pa-0"
              >
                <div
                  v-for="(beneficiario, index) in beneficiarios"
                  :key="index"
                  style="
                    border-bottom: 1px dashed #ddd;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    align-content: center;
                    justify-content: center;
                    justify-items: center;
                  "
                ></div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "ProductsTable",
  props: ["idProdutos", "beneficiarios", "allOpen", "hideMoreInfo"],
  components: {},
  data() {
    return {
      loadTable: false,
      beneficiariosValores: [],
      cores: {},
      produtos: [],
      // headersProdutos: [
      //   {
      //     value: "ans_nomePlanoAssistencial",
      //     text: "Nome do plano",
      //   },
      //   { value: "ans_segmentacaoAns", text: "Segmentação" },
      //   { value: "ans_situacaoAns", text: "Situação ANS" },
      //   { value: "ans_tipoAbrangenciaAns", text: "Abrangencia" },
      //   { value: "ans_tiposPlano", text: "Tipo do plano" },
      //   { value: "ans_acomodacao", text: "Acomodação" },
      //   { value: "ans_fatorModerador", text: "Fator moderador" },
      // ],

      //################ mock ##############//
      headersProdutos: [
        {
          value: "Nome do plano",
          text: "Nome do plano",
        },
        { value: "Segmentação", text: "Segmentação" },
        { value: "Situação ANS", text: "Situação ANS" },
        { value: "Tipo de Abrangencia", text: "Abrangencia" },
        { value: "Tipo do Plano", text: "Tipo do plano" },
        { value: "Acomodação", text: "Acomodação" },
        { value: "Fator moderador", text: "Fator moderador" },
      ],
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
        },
        {
          name: "Ice cream sandwich",
        },
        {
          name: "Eclair",
        },
        {
          name: "Cupcake",
        },
        {
          name: "Gingerbread",
        },
        {
          name: "Jelly bean",
        },
        {
          name: "Lollipop",
        },
        {
          name: "Honeycomb",
        },
        {
          name: "Donut",
        },
        {
          name: "KitKat",
        },
      ],
      //################ mock ##############//

      colspan: [],
    };
  },
  methods: {},
};
</script>

<style>
.header-table {
  text-align: center !important;
  color: #000 !important;
  font-size: 1.1em !important;
}
.table-overflow {
  overflow-x: scroll;
}
.table-col-width {
  width: 100vw;
}
.expansion-td {
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: stretch;
  align-content: stretch;
  margin: 0;
  padding: 0;
}

.v-expansion-panel-content__wrap {
  padding: 0;
}
.rotate {
  -moz-transition: all 0.5s linear;
  -webkit-transition: all 0.5 linear;
  transition: all 0.5 linear;
  transform: rotate(180deg);
}
</style>