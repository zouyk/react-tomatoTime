import React, {Component} from "react";


export default function withClockWrap(WrappedComponent, clockType) {
    return class Extends extends Component {
        state = {
            clockType
        }

        change = (isPress) => {
            this.props.startTime({name: this.state.clockType, isPress})
        }

        render() {
            return <WrappedComponent change={this.change} data={this.state} {...this.props} />
        }

    }
}


