import {connect} from "react-redux";
import { startTiming } from '../../store/actions/globalTime'
import {DATE_TYPE} from "../../utils/commonMap";
import withClockWrap from '../../hooks/withClockWrap'
import ClockWrapComponent from "../../components/ClockWrapComponent";


export default connect(
    state => ({
        globalColor: state.globalColor,
        time: state.globalTime.halfTime.format(DATE_TYPE)
    }),
    {
        startTiming
    }
)(withClockWrap(ClockWrapComponent, 'halfTime'));