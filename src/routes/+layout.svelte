<script>
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import SlotWrapper from '$lib/components/SlotWrapper.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<SlotWrapper><slot /></SlotWrapper>
</AppShell>