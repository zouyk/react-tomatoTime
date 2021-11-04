import React from "react";

export default function withClockWrap(WrappedComponent, clockType) {
    return function Extends(props) {
        const state = {clockType}
        const change = (isPress) =>  props.startTiming({clockType, isPress})
        return <WrappedComponent change={change} data={state} {...props} />
    }
}


