<template>
    <section class="hero is-dark is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">
                    ¡Auf Wiedersehen!
                </h1>
            </div>
        </div>
    </section>
</template>
<script>
    import swal from 'sweetalert2';
    import router from './../../router';

    export default {
        created() {
            swal({
                title: '¡Auf Wiedersehen!',
                timer: 1200,
                onOpen: () => {
                    swal.showLoading();
                }
            }).then((result) => {
                if (result.dismiss === 'timer') {
                    this.$store.dispatch('logout');
                    router.push({path: '/'});
                }
            });
        },
    }
</script>
