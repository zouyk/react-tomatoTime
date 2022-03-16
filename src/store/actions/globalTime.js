import * as types from "../action_types";
import dayjs from "dayjs";
import { DATE_TYPE, getClockEndTip } from "../../utils/commonMap";

let timer = null;

export const setTime = (data) => ({ type: types.GLOBAL_TIME, data });

export const startTiming = (obj) => (dispatch, getState) => {
  const { clockType, isPress } = obj;
  const { globalTime } = getState();

  const subtractTime = (time, count) => dayjs(time).subtract(count, "second");

  clearInterval(timer);
  if (isPress) {
    globalTime[clockType] = {
      time: globalTime[clockType].time,
      isPress: true,
    };
    dispatch(setTime(globalTime));
    return;
  }

  globalTime.forEach((item) => (item.isPress = true));
  timer = setInterval(() => {
    const currentTime = dayjs(globalTime[clockType].time);

    if (currentTime.format(DATE_TYPE) === "00:00") {
      clearInterval(timer);
      alert(getClockEndTip(clockType) + "时间结束了");
      return;
    }

    globalTime[clockType] = {
      time: subtractTime(currentTime, 1),
      isPress: false,
    };

    dispatch(setTime(globalTime));
  }, 1000);
};
