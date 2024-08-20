<script>
import ThemeButton from '@/components/ThemeButton.vue'

export default {
    components: {
        ThemeButton
    },
    data: () => ({
        theme: "dark",
        menu: false,
    }),
}
</script>
<template>
    <div class="text-center">
        <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon>
                    <v-icon icon="mdi-cog"></v-icon>
                </v-btn>
            </template>

            <v-card min-width="300">
                <v-list>
                    <v-list-item title="FluidT.dev"
                        subtitle="Development At The Flow of Business">
                        <template v-slot:prepend>
                            <v-avatar>
                                <v-icon color="blue" icon="mdi-water"></v-icon>
                            </v-avatar>
                        </template>
                        <template v-slot:append>
                            <ThemeButton />
                        </template>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-menu>
    </div>
</template>
  