import dayjs from "dayjs";

const clockEndTipMap = {
  tomatoTime: "番茄时间",
  restTime: "休息片刻",
  halfTime: "小憩一会",
};
const defaultKey = "tomatoTime";
const defaultTip = "闹钟结束";
const colorMap = {
  tomatoTime: "#f05b56",
  restTime: "#4ca6a9",
  halfTime: "#498fc1",
};

export const ClOCK_TIME_MAP={
    tomatoTime:0,
    restTime:1,
    halfTime:2
}


export const DATE_TYPE = "mm:ss";

export const getColorMap = (key) => colorMap[key] || colorMap[defaultKey];

export const getClockEndTip = (key) => clockEndTipMap[key] || defaultTip;

export const tomatoTime = {
  time: dayjs(dayjs().minute(20).startOf("minute")),
  isPress: true,
};
export const restTime = {
  time: dayjs(dayjs().minute(5).startOf("minute")),
  isPress: true,
};
export const halfTime = {
  time: dayjs(dayjs().minute(15).startOf("minute")),
  isPress: true,
};
