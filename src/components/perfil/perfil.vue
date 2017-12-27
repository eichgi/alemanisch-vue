<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="column is-8 is-offset-2 has-text-centered">
                <!--<h3 class="title has-text-grey">Login</h3>
                <p class="subtitle has-text-grey">Please login to proceed.</p>-->
                <div class="box">
                    <figure class="avatar">
                        <img :src="avatar">
                    </figure>
                    <!--<form>
                        <div class="field">
                            <div class="control">
                                <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <input class="input is-large" type="password" placeholder="Your Password">
                            </div>
                        </div>
                        <div class="field">
                            <label class="checkbox">
                                <input type="checkbox">
                                Remember me
                            </label>
                        </div>
                        <a class="button is-block is-info is-large">Login</a>
                    </form>-->
                    <p class="title is-3 is-spaced">Hiram Guerrero</p>
                    <p class="subtitle is-5">hiramg90@gmail.com</p>
                </div>
                <!--<p class="has-text-grey">
                    <a href="../">Sign Up</a> &nbsp;·&nbsp;
                    <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                    <a href="../">Need Help?</a>
                </p>-->
            </div>
        </div>
    </section>
</template>
<!--<style>
    html, body {
        /*font-family: 'Open Sans', serif;
        font-size: 14px;
        font-weight: 300;*/
    }

    .hero.is-success {
        background: #F2F6FA;
    }

    .hero .nav, .hero.is-success .nav {
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .box {
        margin-top: 5rem;
    }

    .avatar {
        margin-top: -70px;
        padding-bottom: 20px;
    }

    .avatar img {
        padding: 5px;
        background: #fff;
        border-radius: 50%;
        -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
        box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
    }

    input {
        font-weight: 300;
    }

    p {
        font-weight: 700;
    }

    p.subtitle {
        padding-top: 1rem;
    }
</style>-->
<script>
    export default{
        data(){
            return {
                avatar: 'https://placeimg.com/200/200/any'
            }
        },
        components: {}
    }
</script>
