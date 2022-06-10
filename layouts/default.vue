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
            <svg height="20" width="20"><path d="M3.333 17.5V7.521L10 2.5L16.667 7.521V17.5H11.25V11.854H8.729V17.5ZM5.083 15.75H6.979V10.104H13V15.75H14.917V8.396L10 4.688L5.083 8.396ZM10 10.208Z" fill="#FFFFFF"/></svg>
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
            <svg  height="20" width="20"><path d="M5.833 18.333Q5.125 18.333 4.625 17.833Q4.125 17.333 4.125 16.625Q4.125 15.917 4.625 15.417Q5.125 14.917 5.833 14.917Q6.542 14.917 7.042 15.417Q7.542 15.917 7.542 16.625Q7.542 17.333 7.042 17.833Q6.542 18.333 5.833 18.333ZM14.167 18.333Q13.458 18.333 12.958 17.833Q12.458 17.333 12.458 16.625Q12.458 15.917 12.958 15.417Q13.458 14.917 14.167 14.917Q14.875 14.917 15.375 15.417Q15.875 15.917 15.875 16.625Q15.875 17.333 15.375 17.833Q14.875 18.333 14.167 18.333ZM10 8.396 8.771 7.167 10.062 5.875H6.625V4.125H10.062L8.771 2.833L10 1.604L13.396 5ZM0.792 3.417V1.667H3.562L7.125 9.146H12.917Q12.917 9.146 12.917 9.146Q12.917 9.146 12.917 9.146L16.104 3.312H18.125L14.438 10Q14.208 10.417 13.812 10.656Q13.417 10.896 12.938 10.896H6.771L5.917 12.458Q5.917 12.458 5.917 12.458Q5.917 12.458 5.917 12.458H15.854V14.208H5.812Q4.875 14.208 4.375 13.365Q3.875 12.521 4.333 11.688L5.417 9.688L2.458 3.417Z" fill="#FFFFFF"/></svg>
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
            <svg height="20" width="20"><path d="M9.125 14.167H10.875V10.875H14.167V9.125H10.875V5.833H9.125V9.125H5.833V10.875H9.125ZM4.25 17.5Q3.521 17.5 3.01 16.99Q2.5 16.479 2.5 15.75V4.25Q2.5 3.521 3.01 3.01Q3.521 2.5 4.25 2.5H15.75Q16.479 2.5 16.99 3.01Q17.5 3.521 17.5 4.25V15.75Q17.5 16.479 16.99 16.99Q16.479 17.5 15.75 17.5ZM4.25 15.75H15.75Q15.75 15.75 15.75 15.75Q15.75 15.75 15.75 15.75V4.25Q15.75 4.25 15.75 4.25Q15.75 4.25 15.75 4.25H4.25Q4.25 4.25 4.25 4.25Q4.25 4.25 4.25 4.25V15.75Q4.25 15.75 4.25 15.75Q4.25 15.75 4.25 15.75ZM4.25 15.75Q4.25 15.75 4.25 15.75Q4.25 15.75 4.25 15.75V4.25Q4.25 4.25 4.25 4.25Q4.25 4.25 4.25 4.25Q4.25 4.25 4.25 4.25Q4.25 4.25 4.25 4.25V15.75Q4.25 15.75 4.25 15.75Q4.25 15.75 4.25 15.75Z" fill="#FFFFFF"/></svg>
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
            <svg height="20" width="20"><path d="M3.417 17.5Q2.688 17.5 2.177 16.99Q1.667 16.479 1.667 15.75V2.5L3.062 3.896L4.438 2.5L5.833 3.896L7.229 2.5L8.604 3.896L10 2.5L11.396 3.896L12.771 2.5L14.167 3.896L15.562 2.5L16.938 3.896L18.333 2.5V15.75Q18.333 16.479 17.823 16.99Q17.312 17.5 16.583 17.5ZM3.417 15.75H9.125V10.75H3.417V15.75Q3.417 15.75 3.417 15.75Q3.417 15.75 3.417 15.75ZM10.875 15.75H16.583Q16.583 15.75 16.583 15.75Q16.583 15.75 16.583 15.75V14.125H10.875ZM10.875 12.375H16.583V10.75H10.875ZM3.417 9H16.583V6.667H3.417Z" fill="#FFFFFF"/></svg>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('banners')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item
          to="/category"
          router
          exact
        >
          <v-list-item-action>
            <svg  height="20" width="20"><path d="M2.5 9.125V2.5H9.125V9.125ZM2.5 17.5V10.875H9.125V17.5ZM10.875 9.125V2.5H17.5V9.125ZM10.875 17.5V10.875H17.5V17.5ZM4.25 7.375H7.375V4.25H4.25ZM12.625 7.375H15.75V4.25H12.625ZM12.625 15.75H15.75V12.625H12.625ZM4.25 15.75H7.375V12.625H4.25ZM12.625 7.375ZM12.625 12.625ZM7.375 12.625ZM7.375 7.375Z" fill="#FFFFFF"/></svg>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('category')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item
          to="/brand"
          router
          exact
        >
          <v-list-item-action>
            <svg  height="20" width="20"><path d="M9.917 16.583Q9.979 16.583 10.052 16.552Q10.125 16.521 10.167 16.479L16.958 9.688Q17.188 9.458 17.302 9.156Q17.417 8.854 17.417 8.542Q17.417 8.229 17.302 7.917Q17.188 7.604 16.958 7.375L13.458 3.875Q13.229 3.646 12.917 3.531Q12.604 3.417 12.292 3.417Q11.979 3.417 11.677 3.531Q11.375 3.646 11.146 3.875L10.958 4.083L12.458 5.583Q12.771 5.896 12.927 6.281Q13.083 6.667 13.083 7.083Q13.083 7.979 12.458 8.583Q11.833 9.188 10.958 9.188Q10.542 9.188 10.146 9.031Q9.75 8.875 9.458 8.562L7.938 7.042L4.354 10.625Q4.292 10.688 4.271 10.76Q4.25 10.833 4.25 10.917Q4.25 11.083 4.365 11.188Q4.479 11.292 4.625 11.292Q4.688 11.292 4.76 11.26Q4.833 11.229 4.875 11.188L7.708 8.354L8.938 9.583L6.125 12.396Q6.062 12.458 6.042 12.531Q6.021 12.604 6.021 12.667Q6.021 12.812 6.135 12.938Q6.25 13.062 6.396 13.042Q6.458 13.042 6.542 13.01Q6.625 12.979 6.667 12.938L9.479 10.125L10.708 11.354L7.896 14.167Q7.854 14.208 7.823 14.292Q7.792 14.375 7.792 14.438Q7.792 14.583 7.906 14.698Q8.021 14.812 8.167 14.812Q8.229 14.812 8.302 14.781Q8.375 14.75 8.438 14.708L11.25 11.896L12.479 13.125L9.646 15.938Q9.604 15.979 9.573 16.062Q9.542 16.146 9.542 16.208Q9.542 16.354 9.646 16.469Q9.75 16.583 9.917 16.583ZM9.917 18.333Q9.125 18.333 8.531 17.823Q7.938 17.312 7.812 16.542Q7.104 16.438 6.625 15.958Q6.146 15.479 6.042 14.771Q5.354 14.667 4.875 14.177Q4.396 13.688 4.292 13Q3.5 12.875 3 12.281Q2.5 11.688 2.5 10.896Q2.5 10.479 2.656 10.094Q2.812 9.708 3.125 9.396L7.938 4.583L10.708 7.354Q10.75 7.396 10.833 7.427Q10.917 7.458 10.979 7.458Q11.125 7.479 11.24 7.354Q11.354 7.229 11.354 7.083Q11.354 7.021 11.312 6.948Q11.271 6.875 11.229 6.833L8.271 3.875Q8.042 3.646 7.729 3.531Q7.417 3.417 7.104 3.417Q6.792 3.417 6.49 3.531Q6.188 3.646 5.958 3.875L3.083 6.75Q2.854 6.979 2.719 7.281Q2.583 7.583 2.583 7.917Q2.583 8.104 2.625 8.26Q2.667 8.417 2.729 8.542L1.438 9.833Q1.146 9.417 0.99 8.927Q0.833 8.438 0.833 7.896Q0.833 7.229 1.115 6.615Q1.396 6 1.875 5.521L4.729 2.667Q5.229 2.167 5.844 1.917Q6.458 1.667 7.125 1.667Q7.792 1.667 8.406 1.927Q9.021 2.188 9.5 2.667L9.708 2.854L9.917 2.667Q10.417 2.167 11.031 1.917Q11.646 1.667 12.312 1.667Q12.979 1.667 13.594 1.927Q14.208 2.188 14.688 2.667L18.167 6.146Q18.667 6.646 18.917 7.26Q19.167 7.875 19.167 8.542Q19.167 9.208 18.906 9.823Q18.646 10.438 18.167 10.917L11.396 17.688Q11.104 17.979 10.729 18.156Q10.354 18.333 9.917 18.333ZM7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Q7.854 6.521 7.854 6.521Z" fill="#FFFFFF"/></svg>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('brand')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- drop downs -->
      <v-card
        class="mx-auto"
        max-width="500"
      >

        <v-list style="background-color: #363636; box-shadow: 4px 4px #363636;">
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            
            no-action
          >
            <template v-slot:activator>
              <v-list-item-action>
                <svg  height="20" width="20"><path d="M2.5 18.333V1.667L3.75 2.917L5 1.667L6.25 2.917L7.5 1.667L8.75 2.917L10 1.667L11.25 2.917L12.5 1.667L13.75 2.917L15 1.667L16.25 2.917L17.5 1.667V18.333L16.25 17.083L15 18.333L13.75 17.083L12.5 18.333L11.25 17.083L10 18.333L8.75 17.083L7.5 18.333L6.25 17.083L5 18.333L3.75 17.083ZM5.021 14.208H14.979V12.458H5.021ZM5.021 10.875H14.979V9.125H5.021ZM5.021 7.521H14.979V5.771H5.021ZM4.25 15.854H15.75V4.146H4.25ZM4.25 4.146V15.854Z" fill="#FFFFFF"/></svg>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="$t('group')"></v-list-item-title>
              </v-list-item-content>
            </template>
            <!-- 1 -->
            <v-list-item
              to="/statik/about"
              style="padding-left:30px"
            >
              <v-list-item-action>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="$t('about')" />
              </v-list-item-content>
            </v-list-item>
            <!-- 2 -->
            <v-list-item
              to="/statik/orderProduct"
              style="padding-left:30px"
            >
              <v-list-item-action>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="$t('orderProduct')" />
              </v-list-item-content>
            </v-list-item>
            <!-- 3 -->
            <v-list-item
              to="/statik/contact"
              style="padding-left:30px"
            >
              <v-list-item-action>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="$t('contact')" />
              </v-list-item-content>
            </v-list-item>
            <!-- 4 -->
            <v-list-item
              to="/statik/usage"
              style="padding-left:30px"
            >
              <v-list-item-action>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="$t('ontabi')" />
              </v-list-item-content>
            </v-list-item>
            
          </v-list-group>
        </v-list>
      </v-card>

      <v-list>
        <v-list-item
          to="/change"
          router
          exact
        >
          <v-list-item-action>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
              <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
            </svg>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('change')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item
          to="/gift"
          router
          exact
        >
        <v-list-item-action>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 2.5C3 1.11929 4.11929 0 5.5 0C6.88071 0 8 1.11929 8 2.5C8 1.11929 9.11929 0 10.5 0C11.8807 0 13 1.11929 13 2.5L13 2.50557C13 2.57543 13.0001 2.77567 12.9622 3H15C15.5523 3 16 3.44772 16 4V5C16 5.55228 15.5523 6 15 6H1C0.447716 6 0 5.55229 0 5V4C0 3.44772 0.447715 3 1 3H3.03783C2.99987 2.77567 2.99996 2.57543 3 2.50557L3 2.5ZM4.06799 3H7V2.5C7 1.67157 6.32843 1 5.5 1C4.67157 1 4 1.67157 4 2.5C4 2.58475 4.00195 2.77351 4.04488 2.93094C4.05252 2.95895 4.06044 2.98186 4.06799 3ZM9 3H11.932C11.9396 2.98186 11.9475 2.95895 11.9551 2.93094C11.9981 2.77351 12 2.58475 12 2.5C12 1.67157 11.3284 1 10.5 1C9.67157 1 9 1.67157 9 2.5V3Z" fill="white"/>
            <path d="M15 7V14.5C15 15.3284 14.3284 16 13.5 16H9V7H15Z" fill="white"/>
            <path d="M2.5 16C1.67157 16 1 15.3284 1 14.5V7H7V16H2.5Z" fill="white"/>
          </svg>

          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('gift')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item
          to="/text"
          router
          exact
        >
        <v-list-item-action>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4C2.72386 4 2.5 4.22386 2.5 4.5C2.5 4.77614 2.72386 5 3 5H9C9.27614 5 9.5 4.77614 9.5 4.5C9.5 4.22386 9.27614 4 9 4H3Z" fill="white"/>
            <path d="M2.5 6.5C2.5 6.22386 2.72386 6 3 6H9C9.27614 6 9.5 6.22386 9.5 6.5C9.5 6.77614 9.27614 7 9 7H3C2.72386 7 2.5 6.77614 2.5 6.5Z" fill="white"/>
            <path d="M3 8C2.72386 8 2.5 8.22386 2.5 8.5C2.5 8.77614 2.72386 9 3 9H9C9.27614 9 9.5 8.77614 9.5 8.5C9.5 8.22386 9.27614 8 9 8H3Z" fill="white"/>
            <path d="M3 10C2.72386 10 2.5 10.2239 2.5 10.5C2.5 10.7761 2.72386 11 3 11H6C6.27614 11 6.5 10.7761 6.5 10.5C6.5 10.2239 6.27614 10 6 10H3Z" fill="white"/>
            <path d="M0 2C0 0.89543 0.895431 0 2 0H10C11.1046 0 12 0.89543 12 2V14C12 15.1046 11.1046 16 10 16H2C0.895431 16 0 15.1046 0 14V2ZM10 1H2C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H10C10.5523 15 11 14.5523 11 14V2C11 1.44772 10.5523 1 10 1Z" fill="white"/>
          </svg>


          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('texts')" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <!-- Header -->
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn icon @click.stop="drawer = !drawer" style="cursor:pointer">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 5.01L0 5V7H18V5.01ZM0 10H12V12H0V10ZM18 0H0V2.01L18 2V0Z" fill="#FFFFFF"/>
        </svg>
      </v-btn>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <svg height="20" width="20"><path d="M6.729 18.333 5.208 16.792 12 10 5.208 3.208 6.729 1.667 15.062 10Z" fill="#FFFFFF"/></svg>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <svg height="20" width="20"><path d="M13.812 10.958 9.042 6.188 13.812 1.417 18.583 6.188ZM2.5 9.25V2.5H9.229V9.25ZM10.771 17.5V10.771H17.5V17.5ZM2.5 17.5V10.771H9.229V17.5ZM4.25 7.5H7.479V4.271H4.25ZM13.833 8.479 16.104 6.208 13.833 3.938 11.562 6.208ZM12.521 15.75H15.75V12.521H12.521ZM4.25 15.75H7.479V12.521H4.25ZM7.479 7.5ZM11.562 6.208ZM7.479 12.521ZM12.521 12.521Z" fill="#FFFFFF"/></svg>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <svg height="20" width="20"><path d="M4.167 10.833V9.083H15.833V10.833Z" fill="#FFFFFF"/></svg>
      </v-btn>
      <v-spacer />

      <v-col cols="1" style="margin-bottom:-10px">
        <v-select
          v-model="currentLanguage.name"
          :items="languages"
          @change="changeLanguage($event)"
        ></v-select>
      </v-col>

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <path d="M18 5.01L0 5V7H18V5.01ZM0 10H12V12H0V10ZM18 0H0V2.01L18 2V0Z" fill="#FFFFFF"/>
        </svg>
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
            <svg height="20" width="20"><path d="M5.875 18.333 2.5 14.958 5.792 11.667 7.042 12.917 5.875 14.083H14.083V10.833H15.833V15.833H5.875L7.125 17.083ZM4.167 9.167V4.167H14.125L12.875 2.917L14.125 1.667L17.5 5.042L14.188 8.354L12.938 7.104L14.125 5.917H5.917V9.167Z" fill="#FFFFFF"/></svg>
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
  middleware: 'admin-middleware',
  data() {
    return {
      languages:['RU','TM'],
      language:'RU',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          action: 'mdi-ticket',
          items: [{ title: 'List Item' }],
          title: 'Group',
          active: false
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  },
  created() {
    const adminToken = this.$cookies.get('admin-token')
    if (adminToken) {
      this.$store.dispatch('admin/setAdminToken', adminToken)
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
  },
}
</script>