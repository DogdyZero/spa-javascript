export class HeaderTemplate {


    constructor() {
        
    }

    static template() {
        return `
            <header class="header">
                <div class="header__logo">
                    <a href="#">Viciados<|-|>DagoBRah</a>
                </div>
                <div >
                    <ul class="header__menu">
                        <li class="header__opcoes"><a href="#">Menu</a></li>
                        <li class="header__opcoes"><a href="#">Sobre</a></li>
    
                        <li class="header__opcoes" id="authorize_button" style="display: none;" ><a  href="#">Login</a></li>
                        <li class="header__opcoes" id="signout_button" style="display: none;"><a href="#">Logout</a></li>
                    </ul>
                </div>
            </header>
            `
    }
}