<template>
    <section>
        <div>
            <!-- search  -->
            <playlist-component/>
            <!-- player -->
        </div>
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