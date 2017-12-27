<template>
    <div></div>
</template>
<script>
    import swal from 'sweetalert2';
    import router from './../../router';

    export default{
        created(){
            swal({
                title: 'Cerrando sesión',
                text: 'Redirigiendo...',
                timer: 1000,
                onOpen: () => {
                    swal.showLoading()
                }
            }).then((result) => {
                if (result.dismiss === 'timer') {
                    this.$store.dispatch('logout');
                    router.push({path: '/'});
                }
            });
        },
        data(){
            return {}
        },
    }
</script>
