<template>
  <v-app>
    <div>
      <v-app-bar
        align="baseline"
        class="col-12 appbar-style"
        height="88"
        fixed
        app
        elevation="0"
      >
        <v-row
          align="center"
          justify-lg="start"
          justify-sm="start"
          style="display: flex; flex-wrap: nowrap"
          class="mb-2"
          sm="6"
          md="4"
        >
          <img style="width: 60px" src="@/assets/img/logo-alianca.png" />
          <v-icon class="ma-3" color="white">mdi-plus</v-icon>
          <img src="@/assets/img/logo-cotaflix.png" />
        </v-row>

        <v-row
          justify="end"
          justify-sm="end"
          justify-xs="center"
          class="mb-6"
          align="center"
          style="display: flex; flex-wrap: nowrap"
        >
          <v-btn small color="#680606" class="ma-2">FALE CONOSCO</v-btn>
          <v-btn class="btn-stl" color="#680606" small>OUTRAS OPÇÕES</v-btn>
        </v-row>
      </v-app-bar>
      <v-main>
        <v-app>
          <section class="main-style">
            <v-container>
              <v-col id="personal-info">
                <h4>Informações pessoais (Titular)</h4>
                <v-row
                  class="col-12"
                  style="display: flex; flex: 1; align-items: center"
                >
                  <v-text-field
                    class="ma-2 pa-0 col-4"
                    label="Nome Completo"
                  ></v-text-field>
                  <v-text-field class="ma-2 pa-0" label="Idade"></v-text-field>
                  <v-select
                    class="ma-2 pa-0 col-4"
                    :items="estadoCivil"
                    label="Estado civil"
                  ></v-select>
                </v-row>
                <h4>Grupo Familiar</h4>
                <v-row>
                  <v-col style="display: flex; align-items: center">
                    <v-icon>mdi-user</v-icon>
                    <v-select
                      class="select-stl"
                      :items="options"
                      item-text="text"
                      item-value="item.text"
                      return-object
                      label="Parentesco"
                      persistent-hint
                      prepend-icon=""
                      dense
                    ></v-select>
                    <v-text-field
                      class="ma-2 pa-0 input-stl"
                      label="Idade"
                    ></v-text-field>
                    <v-select
                      class="ma-2 pa-0 input-stl"
                      :items="estadoCivil"
                      label="Estado civil"
                    ></v-select>
                    <!-- <v-text-field
                      class="ma-0 pa-0"
                      label="Localização"
                    ></v-text-field> -->
                    <!-- <v-text-field
                      class="ma-0 pa-0"
                      label="Profissão"
                    ></v-text-field>
                    <v-text-field
                      class="ma-0 pa-0"
                      label="Entidade de Classe"
                    ></v-text-field> -->
                  </v-col>
                </v-row>
                <v-row>
                  <v-col style="display: flex; align-items: center">
                    <v-select
                      class="select-stl"
                      :items="options"
                      item-text="text"
                      item-value="item.text"
                      return-object
                      label="Parentesco"
                      persistent-hint
                      prepend-icon=""
                      dense
                    ></v-select>
                    <v-text-field
                      class="ma-2 pa-0 input-stl"
                      label="Idade"
                    ></v-text-field>
                    <v-select
                      class="ma-2 pa-0 input-stl"
                      label="Estado civil "
                      :items="estadoCivil"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-col>

              <v-col class="t-align" id="img-container">
                <img
                  style="width: 400px"
                  src="@/assets/img/img-bg.svg"
                  alt=""
                />
              </v-col>
            </v-container>
            <v-col class="btn-container" align="center">
              <v-btn class="btn-style" color="amber">CONTRATAR</v-btn>
            </v-col>
          </section>
          <section>
            <v-container>
              <v-col>
                <ProductsTable />
              </v-col>
            </v-container>
          </section>
        </v-app>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import ProductsTable from "../components/ProductsTable";
export default {
  components: {
    ProductsTable,
  },
  data() {
    return {
      options: [
        // { text: "Titular", icon: "mdi-human-handsdown" },
        { text: "Cônjuge", icon: "mdi-heart" },
        { text: "Filho", icon: "mdi-baby-bottle-outline" },
        { text: "Irmão", icon: "mdi-human-male" },
        { text: "Filho absolutamente incapaz", icon: "mdi-human-male" },
        { text: "Enteado", icon: "mdi-human-male" },
        { text: "Curatelado", icon: "mdi-human-male" },
        { text: "Tutelado", icon: "mdi-human-male" },
        { text: "Pai", icon: "mdi-human-male" },
        { text: "Mãe", icon: "mdi-human-male" },
        { text: "Companheiro", icon: "mdi-human-male" },
        { text: "Filho inválido", icon: "mdi-human-male" },
        { text: "Cunhado", icon: "mdi-human-male" },
        { text: "Nora", icon: "mdi-human-male" },
        { text: "Genro", icon: "mdi-human-male" },
        { text: "Neto", icon: "mdi-human-male" },
        { text: "Bisneto", icon: "mdi-human-male" },
        { text: "Sobrinho", icon: "mdi-human-male" },
        { text: "Enteado inválido", icon: "mdi-human-male" },
        { text: "Sogro", icon: "mdi-human-male" },
      ],
      estadoCivil: ["Solteiro", "Casado", "Viúvo", "Separado", "Divorciado"],
    };
  },
  methods: {},
};
</script>

<style>
.select-stl {
  width: 20px;
}
.input-stl {
  width: 50px;
}
.btn-container {
  max-height: 100px;
}
.btn-style {
  width: 300px;
  border-radius: 15px;
  margin-left: 80px;
  margin-top: 10px;
}
.t-align {
  text-align: center !important;
}
.scroll-stl {
  overflow-x: hidden;
  display: flex;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;
}
.changeColor {
  background-color: #ff4848 !important;
}
.chip-style {
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-btn__content {
  color: #ffff;
}
#personal-info {
  margin: 0 auto;
  display: flex;
  /* gap: 30px; */
  min-height: 200px;
  flex-direction: column;
  justify-content: center;
}
#products-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 355px;
  align-items: center;
}
#img-container {
  max-width: 440px;
  display: flex;
  align-items: center;
  max-height: 400px;
}
.container {
  margin: 0 auto;
  display: flex;
  flex: 1;
  min-height: 400px;
  background-color: #fff;
  min-width: 100vw;
  align-items: flex-start;
}
.v-chip__content {
  font-weight: bold;
}

.main-style {
  /* height: 100vh; */
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;

  background: #10101f;
}
.appbar-style {
  background: rgb(16, 16, 31);
  background: linear-gradient(to bottom, #000000 1%, #0f0f20 100%);
}
</style>
<style lang="scss" scoped>
/* scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #a5a5a5;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a5a5a5;
}
</style>