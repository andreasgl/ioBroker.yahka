import { ParameterEditor, IParameterEditorDelegate } from "./parameterEditor.base";
import { createAndCloneTemplateElement } from "../admin.pageLoader";
import { Utils } from "../admin.utils";

export class ParameterEditor_KNXWindowCoveringPositionState extends ParameterEditor {
    private templateNode: DocumentFragment;
    private txtUp: HTMLInputElement;
    private txtDown: HTMLInputElement;
    constructor(valueChangeCallback: IParameterEditorDelegate) {
        super(valueChangeCallback);
        this.templateNode = createAndCloneTemplateElement(require('./parameterEditor.knx.WindowCovering.PositionState.inc.html'));
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

            Utils.setInputValue(this.txtUp, (p.length >= 1) ? p[0] : "");
            Utils.setInputValue(this.txtDown, (p.length >= 2) ? p[1] : "");
        }
        catch (e) {
            this.txtUp.value = "";
            this.txtDown.value = "";
        }
    }

    protected buildNewParameterValue(): any {
        var resultArray: Array<string | number | boolean | Date> = [Utils.getInputValue(this.txtUp)];
        if (this.txtDown.value)
            resultArray.push(Utils.getInputValue(this.txtDown));
        else
            resultArray.push("")
        return resultArray;
    }
}