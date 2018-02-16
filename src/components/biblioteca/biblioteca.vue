<template>
    <div class="container">
        <div class="columns" style="margin-top: 1em">
            <div class="column is-3">
                <aside class="menu">
                    <p class="menu-label">Categorias</p>
                    <ul class="menu-list">
                        <li><a class="is-active">Pronombres</a></li>
                        <li><a>Verbos</a></li>
                        <li><a>Sustantivos</a></li>
                        <li>
                            <a>Conjugador</a>
                            <ul>
                                <li><a>Presente</a></li>
                                <li><a>Pasado</a></li>
                                <li><a>Futuro</a></li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </div>
            <div class="column is-9" style="margin-bottom: 2em">
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-12">
                        <div class="tile">
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-info">
                                    Bienvenido a la Biblioteca, aquí podrás encontrar material de apoya para realizar y
                                    entender de mejor forma los ejercicios disponibles en esta tu plataforma!
                                </article>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">¿Qué puedo encontrar aquí?</p>
                                <div class="content">
                                    <p>Como te habrás dado cuenta, al momento de realizar un ejercicio hay un pequeño
                                        bloque de información que corresponde a la actividad por realizar. En esta
                                        sección podrás encontrar más información sobre el idioma, de manera que te pueda
                                        ayudar a entender mejor las reglas del alemán.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "biblioteca"
    }
</script>

<style scoped>

    .columns {
        width: 100%;
    }

    .menu-label {
        color: #8F99A3;
        letter-spacing: 1.3;
        font-weight: 700;
    }

    .menu-list a {
        color: #0F1D38;
        font-size: 14px;
        font-weight: 700;
    }

    .menu-list a:hover {
        background-color: transparent;
        color: #276cda;
    }

    .menu-list a.is-active {
        background-color: transparent;
        color: #276cda;
        font-weight: 700;
    }

    .card {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
        margin-bottom: 2rem;
    }

    .card-header-title {
        color: #8F99A3;
        font-weight: 400;
    }

    .info-tiles {
        margin: 1rem 0;
    }

    .info-tiles .subtitle {
        font-weight: 300;
        color: #8F99A3;
    }

    .hero.welcome.is-info {
        background: #36D1DC;
        background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
        background: linear-gradient(to right, #5B86E5, #36D1DC);
    }

    .hero.welcome .title, .hero.welcome .subtitle {
        color: hsl(192, 17%, 99%);
    }

    .card .content {
        font-size: 14px;
    }

    .card-footer-item {
        font-size: 14px;
        font-weight: 700;
        color: #8F99A3;
    }

    .card-footer-item:hover {
    }

    .card-table .table {
        margin-bottom: 0;
    }

    .events-card .card-table {
        max-height: 250px;
        overflow-y: scroll;
    }
</style>