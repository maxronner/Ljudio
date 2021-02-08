<template>
    <section>
        <vs-sidebar
        absolute
        open
        >
        <template #logo>
          <!-- ...img logo -->
        </template>
        <vs-sidebar-item id="home">
            <playlist-component/>
        </vs-sidebar-item>
      </vs-sidebar>
    </section>
</template>

<script>
import PlaylistComponent from '../PlaylistComponent'

export default {
    name: 'Sidebar',
    components: {
        PlaylistComponent
    }
}
</script>

<style>

</style>