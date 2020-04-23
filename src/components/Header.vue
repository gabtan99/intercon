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
						to="/"
						exact
						class="mx-4 font-18 font-gilroy-bold header-nav-item "
						exact-active-class="header-nav-item--active"
					>
						Home
					</b-nav-item>
					<b-nav-item
						to="/services"
						class="mx-4 font-18 font-gilroy-bold header-nav-item "
						active-class="header-nav-item--active"
					>
						Services
					</b-nav-item>
					<b-nav-item
						to="/targets"
						exact
						class="mx-4 font-18 font-gilroy-bold header-nav-item "
						exact-active-class="header-nav-item--active"
					>
						Targets
					</b-nav-item>
					<b-nav-item
						to="/about"
						exact
						class="mx-4 font-18 font-gilroy-bold header-nav-item "
						exact-active-class="header-nav-item--active"
					>
						About Us
					</b-nav-item>
					<b-button
						pill
						to="/contact"
						exact
						class="px-5 py-3 green-button font-18 font-gilroy-bold"
						exact-active-class="green-button--active"
					>
						Contact Us
					</b-button>
				</b-navbar-nav>
			</b-collapse>
		</div>

	</b-navbar>
</template>

<script>
	import GreenButton from "@/components/GreenButton";

	export default {
		components: {
			GreenButton
		},
		data() {
			return{
			}
		},
		methods: {
			goToContact() {
				if (this.$route.fullPath !== "/contact"){
					this.$router.push("/contact");
				}
			}
		}
	}
</script>

<style scoped>
	.header-nav-item .nav-link {
		color: var(--black-text) !important;
		transition: all ease-in 0.15s;
		border-bottom: 0.3rem solid transparent;
	}
	.header-nav-item .nav-link:hover {
		transform: translateY(-0.3rem);
		color: var(--blue-branding) !important;
	}
	.header-nav-item .nav-link.header-nav-item--active {
		border-bottom: 0.3rem solid;
		border-bottom-color:  var(--bluegreen-link);
	}
	.nav-item {
		display: flex;
		align-items: center;
	}

	.green-button{
    background-color: var(--green-branding);
    border: none;
    box-shadow: 0px 3px 6px var(--button-shadow);
    color: var(--white-text);
		transition: all ease-in 0.15s;
  }
  .green-button:hover {
    transform: translateY(-0.3rem);
    background-color: var(--green-branding);
  }
  .green-button:active, .green-button:focus {
    background-color: var(--green-branding) !important;
	}
		.green-button--active, .green-button--active:hover {
			text-decoration: underline;
		}
</style>
