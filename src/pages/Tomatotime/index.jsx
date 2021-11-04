import {connect} from "react-redux";
import {DATE_TYPE} from "../../utils/commonMap";
import {startTime} from '../../store/actions/globalTime'
import withClockWrap from "../../mixins/withClockWrap";
import ClockWrapComponent from "../../components/ClockWrapComponent";


export default connect(
    state => ({
        globalColor: state.globalColor,
        time: state.globalTime.tomatoTime.format(DATE_TYPE)
    }),
    {
        startTime
    }
)(withClockWrap(ClockWrapComponent, 'tomatoTime'));