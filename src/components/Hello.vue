<template>
  <q-layout
    ref="layout"
    :view="layoutStore.view"
    :left-breakpoint="layoutStore.leftBreakpoint"
    :right-breakpoint="layoutStore.rightBreakpoint"
    :reveal="layoutStore.reveal"
  >
    <q-toolbar slot="header">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
       Q-LINKS
        <span slot="subtitle">Guarde links úteis</span>
      </q-toolbar-title>
      <q-btn class="within-iframe-hide" flat @click="$router.replace('/showcase')" style="margin-right: 15px">
        <q-icon name="keyboard_arrow_left" />
        Voltar
      </q-btn>
      <q-btn flat @click="$refs.layout.toggleRight()">
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>

    <q-tabs slot="navigation" v-if="!layoutStore.hideTabs">
      <q-route-tab slot="title" icon="home" to="/home" replace label="Home" />
      <q-route-tab slot="title" icon="sd_storage" to="/index" replace label="Guardar" />
      <q-route-tab slot="title" icon="find_in_page" to="/index" replace label="Pesquisar Link" />
    </q-tabs>

    <q-scroll-area slot="left" style="width: 100%; height: 100%">
      <q-list-header>Menu</q-list-header>
      <q-side-link item to="/home">
        <q-item-side icon="home" />
        <q-item-main label="Home" sublabel="" />
        <q-item-side right icon="thumb_up" />
      </q-side-link>
      <q-side-link item to="/index">
        <q-item-side icon="sd_storage" />
        <q-item-main label="Salvar Link" sublabel="" />
      </q-side-link>
      <q-side-link item to="/home">
        <q-item-side icon="find_in_page" />
        <q-item-main label="Pesquisar" sublabel="" />
      </q-side-link>

      <div v-if="layoutStore.leftScroll" style="padding: 25px 16px 16px;">
        <p class="caption" v-for="n in 5">
          <em>Left Panel has intended scroll{{ n }}</em>
        </p>
      </div>
    </q-scroll-area>

    <q-scroll-area slot="right" style="width: 100%; height: 100%">
      <q-list-header>Right Panel</q-list-header>
      <div v-if="layoutStore.rightScroll" style="padding: 25px 16px 16px;">
        <p class="caption" v-for="n in 5">
          <em>Right Panel has intended scroll {{ n }}</em>
        </p>
      </div>
    </q-scroll-area>

    <router-view />

    <!-- <q-toolbar slot="footer">
      <q-toolbar-title>
        Footer
      </q-toolbar-title>
    </q-toolbar> -->
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea
} from 'quasar'
import layoutStore from './layout-store'
export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea
  },
  data () {
    return {
      layoutStore
    }
  }
}
</script>