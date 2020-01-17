/**
 * Created by wangfei on 17/8/30.
 */
var { NativeModules } = require('react-native');
const AnalyticsUtil = NativeModules.UMAnalyticsModule;


const onPageStart = (pageName:string) => {
    AnalyticsUtil.onPageStart(pageName)
}

const onPageEnd = (pageName:string) => {
    AnalyticsUtil.onPageEnd(pageName)
}

const onEvent = (eventId:string) => {
    AnalyticsUtil.onEvent(eventId)
}

export default {
    onPageStart,
    onPageEnd,
    onEvent
}