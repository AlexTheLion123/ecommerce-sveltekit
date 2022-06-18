<script>
	import { page } from '$app/stores';

	const navList = [
		{ heading: 'Cannabis', items: ['greenhouse', 'indoor','outdoor',  'edibles'] },
		{ heading: 'Vaping', items: ['vapes', 'concentrates'] },
		{ heading: 'Merch', items: ['grinders', 'clothing'] }
	];

</script>

<nav>
	<ul>
		<section class="home">
			<a href="/" class:selected={$page.url.pathname === '/'} id="home-link">
				<div class="inner-nav-link">
					<i class="fab fa-instagram-square" class:selected-icon={$page.url.pathname === '/'} />Home
				</div>
			</a>
		</section>
		{#each navList as section}
			<section class={section.heading}>
				<div class="nav-heading">{section.heading}</div>
				<div class="section-container" class:selected-section={$page.url.pathname.includes('/' + section.heading)}>
					{#each section.items as item}
						<a
							href={'/' + section.heading.toLowerCase() + '/' + item}
							class:selected={$page.url.pathname.includes(item)}
							
						>
							<div class="inner-nav-link">
								<i
									class="fab fa-instagram-square"
									class:selected-icon={$page.url.pathname.includes(item)}
								/>{item}
							</div>
						</a>
					{/each}
				</div>
			</section>
		{/each}
	</ul>
</nav>

<style lang="scss">
	$border: 0.5px solid rgba(128, 128, 128, 0.3);
	$selected-background: rgba(142, 159, 161, 0.329);
	$nav-background: rgb(50, 53, 58);
	
	$selected-color: rgb(245, 244, 237);
	$icon-color-selected: rgb(245, 244, 237);
	$heading-color: rgb(245, 244, 237);
	
	$icon-color: rgb(185, 182, 182);
	$normal-color: rgb(185, 182, 182);
	

	#home-link {
		border-radius: 0;
		height: 3rem;
		
		display: grid;
		align-items: center;
	}

	.selected {
		background: $selected-background;
		color: $selected-color;
		font-weight: 800;
	}

	.selected-icon {
		color: $icon-color-selected;
	}

	.nav-heading {
		margin-bottom: 1rem;
		padding-left: 1rem;
		color: $heading-color;
	}

	nav {
		height: 100%;
		border-right: $border;
		background: $nav-background;
		width: 13rem;

		ul {
			list-style: none;

			section {
				margin-bottom: 1rem;
			}

			.inner-nav-link {
				padding-left: 1rem;
			}

			a {
				display: block;
				padding: 0.6rem;
				font-size: 0.9rem;
				text-decoration: none;
				color: $normal-color;

				i {
					margin-right: 1rem;
					color: $icon-color;
				}
			}
		}
	}
</style>
