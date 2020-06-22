export class ButtonTemplate{

    static template(name) {
        return `
        <button class="mdc-button mdc-button--raised" style="height:40px;margin-left:5px">
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">${name}</span>
        </button>
            `
    }
}

{/* <div class="mdc-touch-target-wrapper">
<button class="mdc-button mdc-button--touch mdc-button--raised">
    <div class="mdc-button__ripple"></div>
    <span class="mdc-button__label">${name}</span>
    <div class="mdc-button__touch"></div>
</button>
</div> */}