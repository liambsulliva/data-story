<script lang="ts">
	export let href = '';
</script>

<a {href} rel="noreferrer" target="_blank" class="relative font-bold hover:underline">
	<slot />
</a>
