<template>
	<div>
		<button
			:class="classes"
			type="button"
			@click="toggle"
		>
			{{ name }}
		</button>
	</div>
</template>

<script>
export default {
	name: `nav-item`,
	components: {},
	props: {
		name: {
			type: String,
			required: true
		}
	},
	data() {
		let data = {};
		data.selected = false;
		return data;
	},
	computed: {
		classes() {
			let classes = {};
			classes.btn = true;
			classes[`btn-solid`] = true;
			classes.active = this.selected;
			return classes;
		}
	},
	methods: {
		toggle() {
			this.selected = !this.selected;
			this.$emit(`toggle`, this.name);
		}
	}
};
</script>
