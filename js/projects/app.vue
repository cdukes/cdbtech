<template>
	<section class="projects-app">
		<div
			v-if="loading"
			class="spinner"
		>
			<div class="bounce1" />
			<div class="bounce2" />
			<div class="bounce3" />
		</div>

		<div v-else>
			<nav class="projects-nav">
				<div class="projects-nav-type">
					<span>By Company Type</span>
					<nav-item
						:name="'SME'"
						@toggle="toggle"
					/>
					<nav-item
						:name="'Startup'"
						@toggle="toggle"
					/>
					<nav-item
						:name="'Corporation'"
						@toggle="toggle"
					/>
					<nav-item
						:name="'Nonprofit'"
						@toggle="toggle"
					/>
				</div>

				<div class="projects-nav-type">
					<span>By Tech</span>
					<nav-item
						:name="'Golang'"
						@toggle="toggle"
					/>
					<nav-item
						:name="'WordPress'"
						@toggle="toggle"
					/>
					<nav-item
						:name="'eCommerce'"
						@toggle="toggle"
					/>
				</div>

				<div class="projects-nav-type">
					<span>By Type</span>
					<nav-item
						:name="'API'"
						@toggle="toggle"
					/>
					<nav-item
						:name="'Publication'"
						@toggle="toggle"
					/>
					<nav-item
						:name="'Membership'"
						@toggle="toggle"
					/>
					<nav-item
						:name="'Multi-language'"
						@toggle="toggle"
					/>
					<nav-item
						:name="'Multi-site'"
						@toggle="toggle"
					/>
				</div>

				<div class="projects-nav-type">
					<span>By Region</span>
					<nav-item
						:name="'North America'"
						@toggle="toggle"
					/>
					<nav-item
						:name="'Asia'"
						@toggle="toggle"
					/>
					<nav-item
						:name="'Europe'"
						@toggle="toggle"
					/>
					<nav-item
						:name="'Middle East'"
						@toggle="toggle"
					/>
				</div>
			</nav>
		</div>

		<div class="projects-list">
			<article
				v-for="project in get_filtered_projects"
				:key="project.slug"
				class="project"
			>
				<a
					:href="project.website"
					target="_blank"
					rel="nofollow"
				>
					<img
						v-if="project.image"
						:src="get_src(project, 227, 170)"
						:alt="project.title"
						width="227"
						height="170"
					>

					<h3 v-html="project.title" />
				</a>
			</article>
		</div>
	</section>
</template>

<script>
import NavItem from './_nav-item.vue';

export default {
	name: `projects-app`,
	components: {
		NavItem
	},
	data() {
		const data = {};
		data.loading = true;
		data.projects = [];
		data.selected = [];
		return data;
	},
	computed: {
		get_filtered_projects() {
			const projects = [],
				categories = this.selected.length === 0 ? [`Featured`] : this.selected;

			for( let i = 0; i < this.projects.length; i++ ) {
				if( !this.intersects( this.projects[i].categories, categories ) ) {
					continue;
				}

				projects.push( this.projects[i] );
			}

			return projects;
		}
	},
	mounted() {
		this.get_projects();
	},
	methods: {
		intersects( a1, a2 ) {
			for( let i = 0; i < a1.length; i++ ) {
				if( a2.indexOf( a1[i] ) === -1 ) {
					continue;
				}

				return true;
			}

			return false;
		},
		get_projects() {
			const self = this;

			fetch( `project/index.json` )
				.then( response => response.json() )
				.then( response => {
					response.items = response.items.reverse();

					for( let i = 0; i < response.items.length; i++ ) {
						let slug = response.items[i].title;

						slug = slug.toLowerCase();
						slug = slug.replace( / /g, `-` );
						response.items[i].slug = slug;

						self.projects.push( response.items[i] );
					}

					self.loading = false;
				} );
		},
		toggle( category ) {
			const idx = this.selected.indexOf( category );

			if( idx === -1 ) {
				this.selected.push( category );
			} else {
				this.selected.splice( idx, 1 );
			}
		},
		get_src( project, width, height ) {
			return `https://res.cloudinary.com/cdbtech/image/fetch/w_${width},h_${height},dpr_2.0,c_lfill,g_north/https://cdbtech.com/sites/${project.image}`;
		}
	}
};
</script>
