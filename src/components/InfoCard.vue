<script>
export default {
    name: "InfoCard",
    props: ['title', 'subTitle', 'image', 'content']
}
</script>
<template>
    <v-card>
        <v-img class="align-end text-white" height="200" :src="image" cover>
            <v-card-title>{{title}}</v-card-title>
        </v-img>

        <v-card-subtitle class="pt-4">
            {{subTitle}}
        </v-card-subtitle>

        <v-card-text>
            <div v-html="content"></div>
        </v-card-text>
    </v-card>
</template>