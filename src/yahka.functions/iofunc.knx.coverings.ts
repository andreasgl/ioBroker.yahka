import { IInOutFunction, TIoBrokerInOutFunctionBase, IInOutChangeNotify } from "./iofunc.base";
import { adapter } from "@iobroker/adapter-core";

export class TIoBrokerInOutFunction_KNXCovering_TargetPosition extends TIoBrokerInOutFunctionBase {
    protected targetSetByHomeKit: Boolean = false;
    protected onTheMove: Boolean = false;

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
        let upName: string;
        let downName: string;
        if (p.length >= 2)
            targetName = p[1];
        if (p.length >= 3)
            upName = p[2];
        if (p.length >= 4)
            downName = p[3];

        return new TIoBrokerInOutFunction_KNXCovering_TargetPosition(adapter, currentName, targetName, upName, downName);
    }


    constructor(protected adapter: ioBroker.Adapter, protected currentName: string, protected targetName: string, protected upName: string, protected downName: string) {
        super(adapter);
        this.addSubscriptionRequest(currentName);
        this.addSubscriptionRequest(targetName);
        this.addSubscriptionRequest(upName);
        this.addSubscriptionRequest(downName);
        adapter.getForeignState(upName, (error, ioState) => {
            if (ioState && ioState.val == true) {
                this.valueForHomeKit = 0;
                this.onTheMove = true;
                adapter.log.debug("IoBrokerInOutFunction_KNXWindowCovering_TargetPosition.constructor, opening window")
                this.toIOBroker(this.valueForHomeKit, () => {})
            }             
            else if (ioState && ioState.val == false) {
                adapter.getForeignState(upName, (error, ioState) => {
                    if (ioState && ioState.val == true) {
                        this.valueForHomeKit = 100;
                        this.onTheMove = true;
                        adapter.log.debug("IoBrokerInOutFunction_KNXWindowCovering_TargetPosition.constructor, closing window")
                        this.toIOBroker(this.valueForHomeKit, () => {})
                    } 
                    else if (ioState && ioState.val == false) {
                        adapter.getForeignState(currentName, (error, ioState) => {
                            if (ioState) {
                                this.valueForHomeKit = ioState.val;
                                this.onTheMove = false;
                                adapter.log.debug("IoBrokerInOutFunction_KNXWindowCovering_TargetPosition.constructor, current position: " + ioState.val)
                                this.toIOBroker(this.valueForHomeKit, () => {})
                            } else {
                                this.valueForHomeKit = undefined;
                                this.onTheMove = undefined;
                            }
                        });
                    }                   
                    else {
                        this.onTheMove = undefined;
                        this.valueForHomeKit = undefined;
                    }                
                });
            }
            else {
                this.onTheMove = undefined;
                this.valueForHomeKit = undefined;
            }
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
        } else if (stateName == this.currentName && this.onTheMove == false) {
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

// case closing = 0
// case opening = 1
// case stopped = 2
export class TIoBrokerInOutFunction_KNXCovering_PositionState extends TIoBrokerInOutFunctionBase {

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

        adapter.log.debug('TIoBrokerInOutFunction_KNXWindowCovering_PositionState.Create, Parameter ' + JSON.stringify(p));

        let upName: string = p[0];
        let downName: string;
        if (p.length >= 2)
            downName = p[1];

        return new TIoBrokerInOutFunction_KNXCovering_PositionState(adapter, upName, downName);
    }

    constructor(protected adapter: ioBroker.Adapter, protected upName: string, protected downName: string) {
        super(adapter);
        this.addSubscriptionRequest(upName);
        this.addSubscriptionRequest(downName);
        adapter.getForeignState(upName, (error, ioState) => {
            if (ioState && ioState.val == true) {
                this.valueForHomeKit = 1; // case opening = 1
                adapter.log.debug("IoBrokerInOutFunction_KNXWindowCovering_PositionState.constructor, opening window")
                this.toIOBroker(this.valueForHomeKit, () => {})
            }             
            else if (ioState && ioState.val == false) {
                adapter.getForeignState(upName, (error, ioState) => {
                    if (ioState && ioState.val == true) {
                        this.valueForHomeKit = 0; // case closing = 0
                        adapter.log.debug("IoBrokerInOutFunction_KNXWindowCovering_PositionState.constructor, closing window")
                        this.toIOBroker(this.valueForHomeKit, () => {})
                    } 
                    else if (ioState && ioState.val == false) {
                        this.valueForHomeKit = 2; // case stopped = 2
                        adapter.log.debug("IoBrokerInOutFunction_KNXWindowCovering_PositionState.constructor, current position: " + ioState.val)
                        this.toIOBroker(this.valueForHomeKit, () => {})
                    }                   
                    else {
                        this.valueForHomeKit = undefined;
                    }                
                });
            }
            else {
                this.valueForHomeKit = undefined;
            }
        });
    }

    cacheChanged(stateName: string, callback: IInOutChangeNotify) {
        this.adapter.log.debug('TIoBrokerInOutFunction_KNXWindowCovering_PositionState.cacheChanged, Parameter ' + stateName + ' Value: ' + JSON.stringify(this.stateCache.get(stateName)));

        if(stateName == this.upName && this.stateCache.get(stateName).val == true) {
            this.valueForHomeKit = 1; // case opening = 1
            callback(this.valueForHomeKit);
        } else if (stateName == this.upName && this.stateCache.get(stateName).val == false) {
            this.valueForHomeKit = 2; // case stopped = 2
            callback(this.valueForHomeKit);
        } else if(stateName == this.downName && this.stateCache.get(stateName).val == true) {
            this.valueForHomeKit = 0; // case closing = 0
            callback(this.valueForHomeKit);
        } else if (stateName == this.downName && this.stateCache.get(stateName).val == false) {
            this.valueForHomeKit = 2; // case stopped = 2
            callback(this.valueForHomeKit);
        } 
    } 

    updateIOBrokerValue(plainIoValue: any, callback: () => void) {
        this.adapter.log.error('TIoBrokerInOutFunction_KNXWindowCovering_PositionState.updateIOBrokerValue, Homekit tried to set a read only value.');
        callback();
    }
}