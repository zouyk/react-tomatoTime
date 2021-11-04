import {connect} from "react-redux";
import {startTime} from '../../store/actions/globalTime'
import {DATE_TYPE} from "../../utils/commonMap";
import withClockWrap from '../../mixins/withClockWrap'
import ClockWrapComponent from "../../components/ClockWrapComponent";


export default connect(
    state => ({
        globalColor: state.globalColor,
        time: state.globalTime.halfTime.format(DATE_TYPE)
    }),
    {
        startTime
    }
)(withClockWrap(ClockWrapComponent, 'halfTime'));