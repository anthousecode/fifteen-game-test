export { default as BonesRow } from '../..\\components\\BonesRow.vue'
export { default as GameBlock } from '../..\\components\\GameBlock.vue'

export const LazyBonesRow = import('../..\\components\\BonesRow.vue' /* webpackChunkName: "components_BonesRow" */).then(c => c.default || c)
export const LazyGameBlock = import('../..\\components\\GameBlock.vue' /* webpackChunkName: "components_GameBlock" */).then(c => c.default || c)
