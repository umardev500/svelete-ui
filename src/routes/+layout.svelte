<script>
	import Footer from '@components/organisms/footer/Footer.svelte';
	import Header from '@components/organisms/header/Header.svelte';
	import Sidebar from '@components/organisms/sidebar/Sidebar.svelte';
	import '../styles/app.scss';
</script>

<Sidebar />
<Header />
<main class="ml-[250px]">
	<slot></slot>
</main>
<Footer />
