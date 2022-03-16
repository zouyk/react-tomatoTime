import {connect} from "react-redux";
import {ClOCK_TIME_MAP} from "../../utils/commonMap";
import {startTiming} from "../../store/actions/globalTime";
import withClockWrap from '../../hooks/withClockWrap'
import ClockWrapComponent from "../../components/ClockWrapComponent";


export default connect(state => ({
    globalColor: state.globalColor,
    currentTime: state.globalTime[ClOCK_TIME_MAP.restTime]
}), {
    startTiming
})(withClockWrap(ClockWrapComponent, ClOCK_TIME_MAP.restTime));