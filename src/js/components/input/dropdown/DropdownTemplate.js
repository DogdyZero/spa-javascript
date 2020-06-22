export class DropdownTemplate{
    
    static template(name, params) {
        return `
        <div class="mdc-select" data-mdc-auto-init="MDCSelect" >
        <div class="mdc-select__anchor demo-width-class">
          <span class="mdc-select__ripple"></span>
          <input type="text" disabled readonly class="mdc-select__selected-text">
          <i class="mdc-select__dropdown-icon"></i>
          <span class="mdc-floating-label">${name}</span>
          <span class="mdc-line-ripple"></span>
        </div>
      
        <div class="mdc-select__menu mdc-menu mdc-menu-surface demo-width-class">
          <ul class="mdc-list">
            <li class="mdc-list-item mdc-list-item--selected" data-value="" aria-selected="true"></li>
            
                ${params.reduce((acc, ad) => {
                    return acc +
                    `
                    <li class="mdc-list-item" data-value="${ad}">
                        <span class="mdc-list-item__text">
                        ${ad}
                        </span>
                    </li>
                    `
                }, [])}
          </ul>
        </div>
      </div>
        `
    }
}