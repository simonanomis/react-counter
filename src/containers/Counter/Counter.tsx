import React, { Component } from 'react';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actionCreators from '../../store/actions/actionCreators'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from "react-redux";
import {AppState, CounterProps} from "../../type";
import './Counter.scss';

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
                <ul className="gradient-list">
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
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(actionTypes.ADD_VALUE)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(actionTypes.SUBTRACT_VALUE)),
        onStoreResult: (result: number) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id: string) => dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);