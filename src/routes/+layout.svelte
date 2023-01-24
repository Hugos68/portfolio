<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, Drawer, LightSwitch, Modal, Toast } from '@skeletonlabs/skeleton';
	import SlotWrapper from '$lib/components/SlotWrapper.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<!-- OVERLAYS -->
<Toast />
<Drawer />
<Modal padding="p-8"/>


<!-- MAIN STRUCTURE -->
<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<SlotWrapper><slot /></SlotWrapper>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>

<!-- Hidden LightSwitch in order to get system preference mode without -->
<div class="hidden">
	<LightSwitch/>
</div>
