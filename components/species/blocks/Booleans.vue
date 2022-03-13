<template>
    <ul class="booleans-list">
        <h4>Booleans:</h4>
        <li v-if="meta.frost_tender">is frost tender: {{ meta.frost_tender }}</li>
        <li v-if="meta.well_drained">is well_drained</li>
        <li v-if="meta.nitrogen_fixer">is nitrogen_fixer</li>
        <li v-if="meta.acid">needs acid soil</li>
        <li v-if="meta.alkaline">needs alkaline soil</li>
        <li v-if="meta.saline">needs saline soil</li>
        <li v-if="meta.poor_soil">can handle poor_soil</li>
        <li v-if="meta.drought">can handle drought</li>
        <li v-if="meta.wildlife">attracts wildlife</li>
        <li v-if="meta.woodland">prevelant in woodland</li>
        <li v-if="meta.meadow">prevelant in meadow</li>
        <li v-if="meta.wall">functions as wall</li>
        <li v-if="meta.self_fertile">is self_fertile</li>
        <li v-if="meta.cultivars">has cultivars</li>
        <li v-if="meta.heavy_clay">can handle heavy_clay soil</li>
        <li v-if="meta.pull_out">pull_out??</li>
        <li v-if="meta.scented">is scented</li>
    </ul>
</template>

<script>
export default {
    props: ['meta']
}
</script>

<style>

</style>