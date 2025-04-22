package com.rpt.reactnativecheckpackageinstallation;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.rpt.reactnativecheckpackageinstallation.models.AppBean;

import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.Context;
import android.util.Log;

import java.util.Collections;
import java.util.List;

public class CheckPackageInstallationModule extends ReactContextBaseJavaModule {
    Context ctx;
    public CheckPackageInstallationModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.ctx = reactContext.getApplicationContext();
    }

    @Override
    public String getName() {
        return "CheckPackageInstallation";
    }

    @ReactMethod
    public void isPackageInstalled(String packageName, Callback cb) {
        PackageManager pm = this.ctx.getPackageManager();
        try {
            pm.getPackageInfo(packageName, PackageManager.GET_ACTIVITIES);
            cb.invoke(true);
        } catch (Exception e) {
            cb.invoke(false);
        }
    }

    @ReactMethod
    public void getInstalledApps(Callback cb) {
        PackageManager pm = this.ctx.getPackageManager();
        List<ApplicationInfo> appList = pm.getInstalledApplications(0);
        appList.sort(new ApplicationInfo.DisplayNameComparator(pm));

        WritableArray response = Arguments.createArray();

        for (ApplicationInfo app : appList) {
            if ((app.flags & ApplicationInfo.FLAG_SYSTEM) == 0
                    && (app.flags & ApplicationInfo.FLAG_UPDATED_SYSTEM_APP) == 0) {
                WritableMap appInfo = Arguments.createMap();
                AppBean bean = getAppInfo(app, pm);
                appInfo.putString("appName", bean.appName);
                appInfo.putString("pkgName", bean.pkgName);
                appInfo.putString("srcIcon", bean.srcIcon);
                response.pushMap(appInfo);
            }
        }
        cb.invoke(response);
    }

    private AppBean getAppInfo(ApplicationInfo app, PackageManager pm) {
        AppBean appInfo = new AppBean();
        try {
            appInfo.appName = pm.getApplicationLabel(app).toString();
        } catch (Exception e) {
            e.printStackTrace();
        }
        try {
            appInfo.icon = app.loadIcon(pm);
        } catch (Exception e) {
            e.printStackTrace();
        }
        appInfo.pkgName = app.packageName;
        appInfo.srcIcon = appInfo.saveAppIcon(appInfo.icon, appInfo.pkgName, ctx);
        return appInfo;
    }
}