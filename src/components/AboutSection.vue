<template>
    <div class="main">
        <div class="about-description">
            <h1 class="about-title font-gilroy-bold font-42">About Our Company</h1>

            <p class="about-subtitle font-avenir-book font-24">
                We seek to enhance health and address issues by identifying <br/>
                primary causes of illness and disease, through in-depth <br/>
                one-on-one consultations and specialized tests / diagnostics.
            </p>
        </div>

        <div class="about-details">
            <b-row>
                <div class="col-lg-5">
                    <b-img
                        fluid
                        :src="require('../assets/img/about-section.png')"
                        class="about-image"/>
                </div>

                <div class="col-lg-1"/>

                <div class="col-lg-6">
                    <div class="about-detail-item">
                        <b-row>
                            <b-img
                            fluid
                            :src="require('../assets/img/about-detail-1.png')"
                            class="about-detail-image"/>
                            <h1 
                            class="detail-title font-gilroy-bold font-24">
                                Optimize Health and Lifetyle
                            </h1>
                        </b-row>
                        <p class="detail-info font-avenir-light font-21">
                            We seek to enhance health and address issues by identifying 
                            primary causes of illness and disease, through in-depth  
                            one-on-one consultations and specialized tests.
                        </p>
                    </div>

                    <div class="about-detail-item">
                        <b-row>
                            <b-img
                            fluid
                            :src="require('../assets/img/about-detail-2.png')"
                            class="about-detail-image"/>
                            <h1 
                            class="detail-title font-gilroy-bold font-24">
                                Prevent and Halt Disease Prevention
                            </h1>
                        </b-row>
                        <p class="detail-info font-avenir-light font-21">
                            We seek to enhance health and address issues by identifying 
                            primary causes of illness and disease, through in-depth  
                            one-on-one consultations and specialized tests.
                        </p>
                    </div>
                </div>
            </b-row>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        
    },
    data() {
        return {
        settings: require("../../data/theme.json"),
        };
    },
};
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: row;
    padding: 80px 15px;
    flex-wrap: wrap;
    justify-content: center;
    background: var(--lightgreen-gradient);
}

.about-description {
    text-align: center;
}

.about-title {
    color: var(--blue-branding-dark);
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.about-subtitle {
    margin-bottom: 4rem;
}

.about-details {
    width: 90%;
}

.about-detail-item {
    margin-top: 4rem;
}

.about-detail-image {
    margin-left: 2rem;
}

.detail-items {
    margin-left: 2rem;
}

.detail-title {
    color: var(--blue-branding-dark);
    padding-top: 2rem;
    padding-left: 2rem;
}

.detail-info {
    margin-top: 2rem;
}

</style>