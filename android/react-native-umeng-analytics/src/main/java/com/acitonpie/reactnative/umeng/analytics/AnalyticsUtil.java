package com.acitonpie.reactnative.umeng.analytics;

import android.content.Context;

import com.umeng.analytics.MobclickAgent;
import com.umeng.commonsdk.UMConfigure;

public class AnalyticsUtil {

    /**
     * 初始化友盟统计
     * @param context
     * @param appKey 友盟key
     * @param channel 渠道
     */
    public static void init(Context context, String appKey, String channel){
        UMConfigure.init(context, appKey, channel, UMConfigure.DEVICE_TYPE_PHONE, null);
        MobclickAgent.setPageCollectionMode(MobclickAgent.PageMode.AUTO);
    }
}
