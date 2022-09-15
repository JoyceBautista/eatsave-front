<template>
  <v-card>
    <v-container v-if="hasToken" class="grey lighten-5">
      <v-row>
        <v-col cols="12">
          <h1>Welcome back! {{ user.firstName }}</h1>
          <h2>Ventas en los ultimos 6 meses</h2>
          <Bar
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="width"
            :height="height"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="grey lighten-5" v-else>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <v-img src="https://i.imgur.com/ir1wUSW.jpg" width="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-2">
                    <div class="outline-mod">EatSave</div>
                    <v-spacer></v-spacer>
                    <p align="center" justify="center">
                      <v-btn color="#ffffff" @click="navigateToLogin">
                        Iniciar sesión
                      </v-btn>
                    </p>
                  </div>
                </v-row>
              </v-img>
            </v-col>
            <v-col cols="1"></v-col>
          </v-row>
        </v-col>
        <v-col cols="7">
          <v-card class="pa-2" outlined tile>
            <v-card-title> Presentación </v-card-title>
            <v-card-text>
              “EatSave” facilita la comunicación y crea un vínculo entre los
              dueños de los restaurantes y los asesores de negocios
              especializados en este rubro de manera más rápida y sencilla
              mediante la aplicación web EatSave.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-img
            src="https://www.perforce.com/sites/default/files/image/2020-01/image-blog-future-software-development.png"
            height="100%"
            width="100%"
          ></v-img>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-2" outlined tile>
            <v-card-title> Visión </v-card-title>
            <v-card-text>
              Ser el mejor sistema de punto de venta que permite la realización
              de consultorías de manera rápida y sencilla para los negocios de
              comida y restaurantes en toda Latinoamérica.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-2" outlined tile>
            <v-card-title> Misión </v-card-title>
            <v-card-text>
              Impulsar el uso de soluciones tecnológicas en las Micro y Pequeñas
              Empresas del sector gastronómico, a fin de que logren expandir su
              mercado y generar mayor rentabilidad.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card-title class="justify-center">
            Aumenta tus ingresos. Te ofrecemos una conexión directa con todo lo
            que necesitas
          </v-card-title>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <v-img
                  src="https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  width="100%"
                  class="rounded-img"
                ></v-img>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-card-title class="justify-center">
              MYPES del sector gastronómico
            </v-card-title>
            <v-card-text class="text-center">
              ¿Eres el dueño de un restaurante y necesitas un método confiable
              de poder administrar tu pequeña o mediana empresa? Nuestra
              plataforma te ofrece múltiples opciones para gestionar tu flujo de
              negocio de una forma práctica y sencilla. Asimismo, podrás tener
              la posibilidad de contactar con un consultor de negocio
              especializado en el rubro de tu empresa que podrá brindarte
              asesorías para sacarle el máximo provecho a la administración de
              tu negocio.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6 custom-height">
          <v-card>
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <v-img
                  src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  width="100%"
                  class="rounded-img"
                ></v-img>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
            <v-card-title class="justify-center">
              Consultores especializadas en el sector gastronómico
            </v-card-title>
            <v-card-text class="text-center">
              ¿No obtienes la cantidad de clientes que en realidad quieres? ¿No
              conoces métodos para promocionar tu trabajo?¿Quieres ayudar en el
              crecimiento de las MYPES del sector gastonómico? EatSave te trae
              la solución. Gracias a este innovador proyecto conseguirás
              clientes de manera rápida y fácil.Debido a que te ofrecemos un
              espacio para publicar tu información profesional, asimismo, te
              conectamos con restaurantes que desean recibir una consultoria.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card-title class="justify-center">
            ¡Nuestros clientes nos respaldan!
          </v-card-title>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6">
              <v-card>
                <v-row>
                  <v-col cols="2"></v-col>
                  <v-col cols="8">
                    <v-img
                      src="https://images.unsplash.com/photo-1642791676937-d8b30cf8216d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1956&q=80"
                      width="100%"
                      class="rounded-img"
                    ></v-img>
                  </v-col>
                  <v-col cols="2"></v-col>
                </v-row>
                <v-card-text class="text-center">
                  Gracias a EatSave ahora tengo una manera rápida y fácil de
                  contactar con mi servicio de consultoría preferido. No hace
                  falta decir que el negocio va viento en popa desde que hallé
                  nuevas y eficaces maneras de administrarlo.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import SessionService from "@/services/session-service";
import { Bar } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  name: "home",
  components: { Bar },
  data() {
    return {
      hasToken: false,
      user: {},
      chartData: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [
          {
            data: [60, 45, 35, 40, 24, 30],
            backgroundColor: "#FF6384",
            label: "Ventas (Miles de S/.)",
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  async beforeMount() {
    const token = this.$cookie.get("token");
    await SessionService.profile(token)
      .then(({ data }) => {
        delete data.password;
        this.$cookie.set("user", JSON.stringify(data));
        this.user = data;
        this.hasToken = true;
      })
      .catch(() => {
        this.hasToken = false;
        this.$cookie.delete("token");
      });
  },
  methods: {
    navigateToHomeOwner() {
      this.$router.push({ name: "home-owner" });
    },
    navigateToLogin() {
      this.$router.push({ name: "sign-in" });
    },
  },
};
</script>

<style scoped>
.rounded-img {
  border-radius: 100%;
}
.outline-mod {
  -webkit-text-stroke: 1px;
  -webkit-text-stroke-color: #ffffff;
}

.custom-height {
  display: flex;
  flex-direction: column;
}
</style>