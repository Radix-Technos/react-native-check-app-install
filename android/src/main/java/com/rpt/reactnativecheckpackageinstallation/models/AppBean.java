package com.rpt.reactnativecheckpackageinstallation.models;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class AppBean {

    public String appName;
    public String pkgName;
    public String srcIcon;
    public Drawable icon;

    public String saveAppIcon(Drawable icon, String pkgName, Context context) {
        Bitmap bitmap;
        if (icon instanceof BitmapDrawable) {
            bitmap = ((BitmapDrawable) icon).getBitmap();
        } else {
            bitmap = Bitmap.createBitmap(icon.getIntrinsicWidth(), icon.getIntrinsicHeight(), Bitmap.Config.ARGB_8888);
            Canvas canvas = new Canvas(bitmap);
            icon.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
            icon.draw(canvas);
        }

        String fileName = pkgName + "_icon.png";

        File file = new File(context.getFilesDir(), fileName);
        try (FileOutputStream out = new FileOutputStream(file)) {
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, out);
            out.flush();
            return file.getAbsolutePath();
        } catch (IOException e) {
            return null;
        }
    }

}
