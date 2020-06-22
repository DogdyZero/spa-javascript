export class PesquisaTemplate{

    constructor(){

    }

    static template(){
        return `
            <form id="formularioPesquisa" >
                <div class="conteudo">
                    <div class="formulario__pesquisa">
                        <div id="combo"></div>
                        <div id="button"></div>
                    </div>
                    <div class="formulario__resultado">
                        <canvas id="chart" width="360" height="200"></canvas>
                        <div id="resultado"</div>
                    </div>
                    <div>
                </div>
            </form>
        `
    }
}