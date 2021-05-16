<template>
<body data-uk-filter="target: .js-filter; animation: fade">
 <div>
<BaseHeader />
 <main class="main-content">
 <Nuxt />
 </main>
  <OffCanvas />
  <BaseFooter />
</div>
</body>
</template>
<script>
export default {

}
</script>

<style>
* {
box-sizing: border-box;
}
.main-content {
margin-top: 118px;

}
</style>

