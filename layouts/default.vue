<template>
  <v-app dark>
    <!-- right navbar -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
          <!-- v-for="(item, i) in items"
          :key="i"
          :to="item.to" -->
      <v-list>
        <v-list-item
          to="/"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('welcome')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item
          to="/orders"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('orders')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item
          to="/products"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-cart-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('products')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item
          to="/banner"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-image-area</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('banners')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <!-- Header -->
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-spacer />

      <v-col cols="1">
        <v-select
          v-model="currentLanguage.name"
          :items="languages"
          @change="changeLanguage($event)"
        ></v-select>
      </v-col>

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- main -->
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Footer -->
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters , mapActions} from 'vuex'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      languages:['RU','TM'],
      language:'RU',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-format-list-bulleted',
          title: 'Zakaz',
          to:'/order',
        },
        {
          icon: 'mdi-cart-plus',
          title: 'Products',
          to: '/products',
        },
        {
          icon: 'mdi-image-area',
          title: 'Banners',
          to: '/banner',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
  computed:{
    currentLanguage() {
      return this.$i18n.locales.find(
        (locale) => locale.code === this.$i18n.locale
      )
    },
  },
  
  methods:{
    changeLanguage(language){
      this.$i18n.setLocale(language);
      this.languageFunc(language);
    },
    ...mapActions({
      languageFunc : 'language/fetchLanguage'
    })
  }
}
</script>