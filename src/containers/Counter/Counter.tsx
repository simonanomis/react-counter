import React, { Component } from 'react';
import * as actionTypes from '../../store/actionTypes'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from "react-redux";
import {CounterProps} from "../../type";

class Counter extends Component<CounterProps> {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.results?.map(storedResult => (
                        <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}

export type FixMeLater = any;


const mapStateToProps = (state: FixMeLater) => {
    return {
        ctr: state.counter,
        results: state.results
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 15}),
        onStoreResult: () => dispatch({type: actionTypes.COUNT_RESULT}),
        onDeleteResult: (id: string) => dispatch({type: actionTypes.DELETE_RESULT, resultId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);