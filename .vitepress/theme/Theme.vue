<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
const { page, frontmatter } = useData();
import VPNav from "vitepress/dist/client/theme-default/components/VPNav.vue";
import VPFeatures from "vitepress/dist/client/theme-default/components/VPFeatures.vue";
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue";
import Background from "./Background.vue";

const { Layout } = DefaultTheme;

</script>

<template>
	<Layout v-if='frontmatter.layout !== "home"'>
	</Layout>
	<div v-else class="flex flex-col min-h-screen">
		<VPNav></VPNav>
		<div class="w-full max-w-full">
			<div class="relative">
				<Background />
				<div class="vp-960:pt-16 pt-0 px-4 md:px-8 xl:px-8 absolute top-0">
					<div class="xl:p-16 2xl:pt-32 md:p-8 p-4">
						<h1
							class="md:text-5xl text-2xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-br
							from-primary-500 via-primary-500 to-primary-700 dark:to-primary-300"
						>{{ frontmatter.hero.name }}</h1>
						<p class="xl:text-5xl md:text-2xl text-lg font-bold md:mt-4 pt-2">{{ frontmatter.hero.text }}</p>
						<div class="md:mt-8 mt-4 md:flex hidden gap-4">
							<div v-for="action in frontmatter.hero.actions" :key="action.link" class="action">
								<VPButton
								tag="a"
								size="medium"
								:theme="action.theme"
								:text="action.text"
								:href="action.link"
								:target="action.target"
								:rel="action.rel"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="md:mt-8 mt-4 md:hidden flex gap-4 w-full justify-center">
				<div v-for="action in frontmatter.hero.actions" :key="action.link" class="action">
					<VPButton
					tag="a"
					size="medium"
					:theme="action.theme"
					:text="action.text"
					:href="action.link"
					:target="action.target"
					:rel="action.rel"
					/>
				</div>
			</div>
			<div class="mt-8">
				<VPFeatures :features="frontmatter.features"></VPFeatures>
			</div>
		</div>
	</div>
</template>