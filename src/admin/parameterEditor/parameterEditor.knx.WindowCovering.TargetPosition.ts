import { ParameterEditor, IParameterEditorDelegate } from "./parameterEditor.base";
import { createAndCloneTemplateElement } from "../admin.pageLoader";
import { Utils } from "../admin.utils";

export class ParameterEditor_KNXWindowCoveringTargetPosition extends ParameterEditor {
    private templateNode: DocumentFragment;
    private txtCurrent: HTMLInputElement;
    private txtTarget: HTMLInputElement;
    private txtUp: HTMLInputElement;
    private txtDown: HTMLInputElement;
    constructor(valueChangeCallback: IParameterEditorDelegate) {
        super(valueChangeCallback);
        this.templateNode = createAndCloneTemplateElement(require('./parameterEditor.knx.WindowCovering.TargetPosition.inc.html'));
        this.txtCurrent = this.templateNode.querySelector("#current");
        this.txtCurrent.addEventListener('input', (ev) => this.valueChanged());
        this.txtTarget = this.templateNode.querySelector("#target");
        this.txtTarget.addEventListener('input', (ev) => this.valueChanged());
        this.txtUp = this.templateNode.querySelector("#Up");
        this.txtUp.addEventListener('input', (ev) => this.valueChanged());
        this.txtDown = this.templateNode.querySelector("#Down");
        this.txtDown.addEventListener('input', (ev) => this.valueChanged());
    }

    refreshAndShow(containerElement: HTMLElement, parameterValue: any) {
        this.removeChildren(containerElement);
        containerElement.appendChild(this.templateNode);
        try {
            let p: Array<string>;
            if (typeof parameterValue === 'string')
                p = [parameterValue];
            else if (parameterValue instanceof Array)
                p = parameterValue;
            else
                p = [];

            Utils.setInputValue(this.txtCurrent, (p.length >= 1) ? p[0] : "");
            Utils.setInputValue(this.txtTarget, (p.length >= 2) ? p[1] : "");
            Utils.setInputValue(this.txtUp, (p.length >= 3) ? p[2] : "");
            Utils.setInputValue(this.txtDown, (p.length >= 4) ? p[3] : "");
        }
        catch (e) {
            this.txtCurrent.value = parameterValue;
            this.txtTarget.value = "";
            this.txtUp.value = "";
            this.txtDown.value = "";
        }
    }

    protected buildNewParameterValue(): any {
        var resultArray: Array<string | number | boolean | Date> = [Utils.getInputValue(this.txtCurrent)];
        if (this.txtTarget.value)
            resultArray.push(Utils.getInputValue(this.txtTarget));
        else
            resultArray.push("")
        if (this.txtUp.value)
            resultArray.push(Utils.getInputValue(this.txtUp));
        else
            resultArray.push("")
        if (this.txtDown.value)
            resultArray.push(Utils.getInputValue(this.txtDown));
        else
            resultArray.push("")
        return resultArray;
    }
}