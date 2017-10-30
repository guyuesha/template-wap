<template>
	<section>
	<header>
	 	<p class="word">text text text</p>
	</header>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</section>
</template>

<script>
</script>

<style lang="scss" scoped>
.word{
  @include fontsz(16px);
}
</style>
