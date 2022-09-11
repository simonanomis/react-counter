import React, { Component } from 'react';
import * as actionTypes from '../../store/actionTypes'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from "react-redux";
import {AppState, CounterProps} from "../../type";

class Counter extends Component<CounterProps> {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
                <ul>
                    {this.props.results.map(storedResult => (
                        <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        counter: state.counter.counter,
        results: state.results.results
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, value: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 15}),
        onStoreResult: (result: number) => dispatch({type: actionTypes.COUNT_RESULT, result: result}),
        onDeleteResult: (id: string) => dispatch({type: actionTypes.DELETE_RESULT, resultId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);