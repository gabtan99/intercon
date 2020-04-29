<template>
    <b-container fluid>
        <section class="timeline">
            <div class="container">

                <div class="timeline-item">
                    <div class="timeline-img"></div>
                    <div v-scroll-reveal.reset class="timeline-content">
                        <h2 class="font-gilroy-bold font-24 blue">2006</h2>
                        <p class="font-avenir-light font-18">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-img"></div>
                    <div v-scroll-reveal.reset class="timeline-content">
                        <h2 class="font-gilroy-bold font-24 blue">2010</h2>
                        <p class="font-avenir-light font-18">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                    </div>
                </div> 

                <div class="timeline-item">
                    <div class="timeline-img"></div>
                    <div v-scroll-reveal.reset class="timeline-content">
                        <h2 class="font-gilroy-bold font-24 blue">2012</h2>
                        <p class="font-avenir-light font-18">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                    </div>
                </div> 

                <div class="timeline-item">
                    <div class="timeline-img"></div>
                    <div v-scroll-reveal.reset class="timeline-content">
                        <h2 class="font-gilroy-bold font-24 blue">2016</h2>
                        <p class="font-avenir-light font-18">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                    </div>
                </div> 

                <div class="timeline-item">
                    <div class="timeline-img"></div>
                    <div v-scroll-reveal.reset class="timeline-content">
                        <h2 class="font-gilroy-bold font-24 blue">Now</h2>
                        <p class="font-avenir-light font-18">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                    </div>
                </div> 

            </div>
        </section>

    </b-container>
</template>


<script>
export default {
    mounted() {
        // sr.reveal('.js--fadeInLeft', {
        // origin: 'left',
        // distance: '300px',
        // easing: 'ease-in-out',
        // duration: 800,
        // });

        // sr.reveal('.js--fadeInRight', {
        // origin: 'right',
        // distance: '300px',
        // easing: 'ease-in-out',
        // duration: 800,
        // });
        
    },
}
</script>

<style lang="scss" scoped>

$primary: var(--green-branding);
$dark-primary: var(--green-branding-dark);
$light-primary: var(--green-branding-light);

section {
    padding: 100px 0;
}

html, body {
    overflow-x: hidden;
}

body {
    font-family: 'Roboto';
    font-size: 17px;
    font-weight: 400;
    background-color: #eee;
}

.blue {
    color: var(--blue-branding-dark);
}

.timeline {

	position: relative;

	&::before {
		content: '';
		background: $light-primary;
		width: 5px;
		height: 95%;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
}

.timeline-img {
	width: 30px;
	height: 30px;
	background: $primary;
	border-radius: 50%;
	position: absolute;
	left: 50%;
	margin-top: 25px;
	margin-left: -15px;
}

.timeline-item {
	width: 100%;
	margin-bottom: 70px;

	&:nth-child(even) {

		.timeline-content {
			float: right;
			padding: 40px 30px 40px 30px;

			&::after {
				content: '';
				position: absolute;
				border-style: solid;
				width: 0;
				height: 0;
				top: 30px;
				left: -15px;
				border-width: 10px 15px 10px 0;
				border-color: transparent #f5f5f5 transparent transparent;
			}
		}
	}

	&::after {
		content: '';
		display: block;
		clear: both;
	}
}


.timeline-content {
	position: relative;
	width: 45%;
	padding: 40px 30px;
	border-radius: 4px;
	background: #f5f5f5;
	box-shadow: 0 20px 25px -15px rgba(0, 0, 0, .3);

	&::after {
		content: '';
		position: absolute;
		border-style: solid;
		width: 0;
		height: 0;
		top: 30px;
		right: -15px;
		border-width: 10px 0 10px 15px;
		border-color: transparent transparent transparent #f5f5f5;
	}
}

.timeline-card {
	padding: 0!important;

	p {
		padding: 0 20px;
	}

	a {
		margin-left: 20px;
	}
}

.timeline-item {
    .timeline-img-header {
        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0, .4)), url('https://picsum.photos/1000/800/?random') center center no-repeat;
        background-size: cover;
    }
}

@media screen and (max-width: 768px) {

	.timeline {

		&::before {
			left: 50px;
		}

		.timeline-img {
			left: 50px;
		}

		.timeline-content {
			max-width: 100%;
			width: auto;
			margin-left: 70px;
		}

		.timeline-item {

			&:nth-child(even) {
				.timeline-content {
					float: none;
				}
			}

			&:nth-child(odd) {
				.timeline-content {
					&::after {
						content: '';
						position: absolute;
						border-style: solid;
						width: 0;
						height: 0;
						top: 30px;
						left: -15px;
						border-width: 10px 15px 10px 0;
						border-color: transparent #f5f5f5 transparent transparent;
					}
				}
			}
		}
	}
}
</style>
