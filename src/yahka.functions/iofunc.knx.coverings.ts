import { IInOutFunction, TIoBrokerInOutFunctionBase, IInOutChangeNotify } from "./iofunc.base";
import { adapter } from "@iobroker/adapter-core";

export class TIoBrokerInOutFunction_KNXCovering_TargetPosition extends TIoBrokerInOutFunctionBase {
    protected targetSetByHomeKit: Boolean = false;

    static create(adapter: ioBroker.Adapter, parameters: any): IInOutFunction {
        let p: Array<string>;

        if (typeof parameters === 'string')
            p = [parameters];
        else if (parameters instanceof Array)
            p = parameters;
        else
            p = [];

        if (p.length == 0)
            return undefined;

        adapter.log.debug('TIoBrokerInOutFunction_KNXWindowCovering_TargetPosition.Create, Parameter ' + JSON.stringify(p));

        let currentName: string = p[0];
        let targetName: string;
        let stopName: string;
        let upDowName: string;
        let upName: string;
        let downName: string;
        if (p.length >= 2)
            targetName = p[1];
        if (p.length >= 3)
            stopName = p[2];
        if (p.length >= 4)
            upDowName = p[3];
        if (p.length >= 5)
            upName = p[4];
        if (p.length >= 6)
            downName = p[5];

        return new TIoBrokerInOutFunction_KNXCovering_TargetPosition(adapter, currentName, targetName, stopName, upDowName, upName, downName);
    }


    constructor(protected adapter: ioBroker.Adapter, protected currentName: string, protected targetName: string, protected stopName: string, protected upDowName: string, protected upName: string, protected downName: string) {
        super(adapter);
        this.addSubscriptionRequest(currentName);
        this.addSubscriptionRequest(targetName);
        this.addSubscriptionRequest(stopName);
        this.addSubscriptionRequest(upDowName);
        this.addSubscriptionRequest(upName);
        this.addSubscriptionRequest(downName);
        adapter.getForeignState(upName, (error, ioState) => {
            if (ioState && ioState.val == true) {
                this.valueForHomeKit = 0;
                adapter.log.debug("IoBrokerInOutFunction_KNXWindowCovering_TargetPosition.constructor, opening window")
            }             
            else if (ioState && ioState.val == false) {
                adapter.getForeignState(upName, (error, ioState) => {
                    if (ioState && ioState.val == true) {
                        this.valueForHomeKit = 100;
                        adapter.log.debug("IoBrokerInOutFunction_KNXWindowCovering_TargetPosition.constructor, closing window")
                    } 
                    else if (ioState && ioState.val == false) {
                        adapter.getForeignState(currentName, (error, ioState) => {
                            if (ioState) {
                                this.valueForHomeKit = ioState.val;
                                adapter.log.debug("IoBrokerInOutFunction_KNXWindowCovering_TargetPosition.constructor, current position: " + ioState.val)
                            } else {
                                this.valueForHomeKit = undefined;
                            }
                        });
                    }                   
                    else
                        this.valueForHomeKit = undefined;
                });
            }
            else
            this.valueForHomeKit = undefined;
        });
    }

    cacheChanged(stateName: string, callback: IInOutChangeNotify) {
        this.adapter.log.debug('TIoBrokerInOutFunction_KNXWindowCovering_TargetPosition.cacheChanged, Parameter ' + stateName + ' Value: ' + JSON.stringify(this.stateCache.get(stateName)));

        if(stateName == this.upName && this.stateCache.get(stateName).val == true && this.targetSetByHomeKit == false) {
            this.valueForHomeKit = 0;
            callback(this.valueForHomeKit);
        } else if (stateName == this.upName && this.stateCache.get(stateName).val == false) {
            this.targetSetByHomeKit = false;
            this.valueForHomeKit = this.stateCache.get(this.currentName).val;
            callback(this.valueForHomeKit);
        } else if(stateName == this.downName && this.stateCache.get(stateName).val == true && this.targetSetByHomeKit == false) {
            this.valueForHomeKit = 100;
            callback(this.valueForHomeKit);
        } else if (stateName == this.downName && this.stateCache.get(stateName).val == false) {
            this.targetSetByHomeKit = false;
            this.valueForHomeKit = this.stateCache.get(this.currentName).val;
            callback(this.valueForHomeKit);
        }
    } 

    updateIOBrokerValue(plainIoValue: any, callback: () => void) {
        this.targetSetByHomeKit = true;
        this.adapter.setForeignState(this.targetName, plainIoValue)
        callback();
    }
}

