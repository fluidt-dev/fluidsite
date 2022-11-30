<script>
export default {
    name: "SnowStorm",
    data() {
        return {
            snowEnable: true,
            snowStick: true,
            flakesMax: 128,
            flakesMaxActive: 64,
        }
    },
    watch:{
        snowEnable(){
            snowStorm.toggleSnow();
        },
        snowStick(val){
            snowStorm.snowStick = val;
        },
        flakesMax(val){
            snowStorm.flakesMax = val;
        },
        flakesMaxActive(val){
            snowStorm.flakesMaxActive = val;
        }
    }
}  
</script>
<template>
    <v-card>
        <v-toolbar title="Snow Storm Config" color="blue">
        </v-toolbar>
        <v-container>
            <v-row>
                <v-col>
                    <v-switch color="info" label="Snow Enabled" v-model="snowEnable"></v-switch>
                    <v-switch color="info" label="Snow Stick" v-model="snowStick"></v-switch>
                    <v-text-field label="Max Flakes on Screen" v-model="flakesMax"></v-text-field>
                    <v-text-field label="Max Active Flakes" v-model="flakesMaxActive"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>