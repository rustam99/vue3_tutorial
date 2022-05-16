<template>
	<div class="catalog">
		<h1 class="catalog__title h1">Каталог</h1>
		<ul class="catalog__list">
			<li class="catalog__item" v-for="item in catalog" :key="item.id">
				<router-link :to="{ name: 'catalog_element', params: { id: item.id } }" v-slot="{ navigate, href }" custom>
					<a class="catalog__link" :href="href" @click="navigate">
						<span class="catalog__photo">
							<img :src="item.photo" :alt="item.name">
						</span>
						<span class="catalog__name">{{ item.name }}</span>
					</a>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	created() {
		this.getCatalog();
	},
	computed: {
		...mapGetters('catalog', {
			catalog: 'get',
		})
	},
	methods: {
		...mapActions('catalog', {
			getCatalog: 'all',
		})
	}
}
</script>

<style lang="scss">
	@import '@/assets/css/modules/vars';
	@import '@/assets/css/modules/mixin';

	.catalog {
		&__title {
			text-align: center;
		}

		&__list {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			margin: 0 -10px;
			list-style: none;
		}

		&__item {
			margin: 20px 10px;
			flex-basis: calc(25% - 20px);
			padding: 30px 35px;
			box-sizing: border-box;
			background-color: #fff;
			box-shadow: 0 0 10px rgba($black, .5);
		}

		&__link {
			display: flex;
			flex-direction: column;

			&:hover {
				.catalog__photo {
					transform: scale(1.05);
				}

				.catalog__name {
					opacity: .8;
				}
			}
		}

		&__photo {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1 0 auto;
			transition: transform .2s;
		}

		&__name {
			margin-top: 20px;
			text-align: center;
			font-size: rem(21);
			color: $blue;
		}
	}
</style>
