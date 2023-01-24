<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, LightSwitch, Modal, Toast } from '@skeletonlabs/skeleton';
	import SlotWrapper from '$lib/components/SlotWrapper.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Modal padding="p-8"/>
<Toast />

<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<SlotWrapper><slot /></SlotWrapper>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>

<div class="hidden">
	<LightSwitch/>
</div>
