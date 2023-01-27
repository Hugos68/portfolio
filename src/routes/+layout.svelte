<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import { AppShell, LightSwitch, Modal, Toast } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ManagedDrawer from '$lib/components/ManagedDrawer.svelte';
	import SlotWrapper from '$lib/components/SlotWrapper.svelte';
</script>

<!-- OVERLAYS -->
<Toast />
<ManagedDrawer />
<Modal padding="p-0" width="max-w-[clamp(25rem,50vw,75rem)]"/>


<!-- MAIN STRUCTURE -->
<AppShell slotPageFooter="footer w-full bg-surface-100-800-token py-16 px-8 flex flex-wrap gap-8 justify-between items-start">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<SlotWrapper><slot /></SlotWrapper>
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>

<!-- Hidden LightSwitch in order to get system preference mode without having to implement logic myself (lazy, ik) -->
<div class="hidden">
	<LightSwitch/>
</div>
