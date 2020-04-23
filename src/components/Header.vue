<template>
	<b-navbar
		toggleable="md"
		type="light"
	>
		<div class="container">
			<b-navbar-brand>
				<img
					src="@/assets/img/irc-logo-brand.png"
					alt="Intercon Regenrative Center"
				>
			</b-navbar-brand>

			<b-navbar-toggle
				target="nav-collapse"
			>
			</b-navbar-toggle>

			<b-collapse
				id="nav-collapse"
				is-nav
			>
				<b-navbar-nav
					class="ml-auto"
				>
					<b-nav-item
						v-for="item in routes"
						:key="item.name"
						:to="item.to"
						exact
						class="font-18 font-gilroy-bold mx-4"
						active-class="header-nav-item--active"
					>
						{{item.name}}
					</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</div>

	</b-navbar>
</template>

<script>
	export default {
		data() {
			return{
				routes: [
					{
						name: 'Home',
						to: '/'
					},
					{
						name: 'Services',
						to: '/services'
					},
					{
						name: 'Targets',
						to: '/targets'
					},
					{
						name: 'About Us',
						to: '/about'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.nav-link {
		color: var(--black-text) !important;
		transition: all ease-in 0.15s;
	}
	.nav-link:hover {
		transform: translateY(-0.3rem);
		color: var(--blue-branding) !important;
	}
	.header-nav-item--active {
		border-bottom: 0.3rem solid;
		border-bottom-color:  var(--bluegreen-link);
	}
</style>
