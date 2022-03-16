import {connect} from "react-redux";
import { startTiming } from '../../store/actions/globalTime'
import {ClOCK_TIME_MAP} from "../../utils/commonMap";
import withClockWrap from '../../hooks/withClockWrap'
import ClockWrapComponent from "../../components/ClockWrapComponent";


export default connect(
    state => ({
        globalColor: state.globalColor,
        currentTime: state.globalTime[ClOCK_TIME_MAP.halfTime]
    }),
    {
        startTiming
    }
)(withClockWrap(ClockWrapComponent, ClOCK_TIME_MAP.halfTime));