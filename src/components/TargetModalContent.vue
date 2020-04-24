<template>
  <div class="target-content">
    <div style="display: flex; margin-bottom: 15px;">
      <font-awesome class="icon-style" :icon="targetIcon" />
      <h1 class="font-gilroy-bold">{{ targetName }}</h1>
    </div>

    <p class="font-avenir-light font-18" style="margin-bottom: 15px;">
      In this world, everything can be happy. This is where you take out all
      your hostilities and frustrations. It's better than kicking the puppy dog
      around and all that so. With practice comes confidence. Everything is
      happy if you choose to make it that way. Don't fight it, use what happens.
      God gave you this gift of imagination. Use it.
    </p>

    <div class="service-style">
      <TargetModalCard />
      <TargetModalCard />
      <TargetModalCard />
      <TargetModalCard />
    </div>
  </div>
</template>

<script>
import TargetModalCard from '@/components/TargetModalCard'

export default {
  props: ['targetName', 'targetIcon'],
  components: {
    TargetModalCard,
  },
}
</script>

<style scoped>
.target-content {
  padding: 18px;
}

.icon-style {
  font-size: 15pt;
  color: var(--blue-icon);
  margin-right: 10px;
}

.service-style {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media only screen and (max-width: 767px) {
  .service-style {
    display: flex;
    flex-direction: column;
  }

  .icon-style {
    font-size: 20pt;
    color: var(--blue-icon);
    margin-right: 10px;
  }
}
</style>
