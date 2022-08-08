<template>
    <b-container>
        <b-form>
            <b-form-group>
                <b-form-select
                    v-model="selected"
                    :options="garden_layers"
                ></b-form-select>
            </b-form-group>
        </b-form>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            selected: null,
            garden_layers: [
                { value: null, text: 'Please select a garden layer'},
                { value: 'CANOPY', text: 'Canopy'},
                { value: 'SUB_CANOPY', text: 'Subcanopy'},
                { value: 'HERBACEOUS', text: 'Herbaceous'},
                { value: 'CLIMBER', text: 'Climber'},
                { value: 'HERBACEOUS', text: 'Herbaceous'},
                { value: 'GROUND_COVER', text: 'Ground cover'},
            ]
        }
    }
}
</script>

<style>

</style>