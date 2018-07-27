package trupic.prototype.google.com.trupic;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

import im.delight.android.webview.AdvancedWebView;

public class MainActivity extends AppCompatActivity {

    AdvancedWebView wv_view;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        wv_view = this.findViewById(R.id.wv_main);
    }

    @Override
    protected void onResume() {
        super.onResume();

        WebSettings settings = wv_view.getSettings();
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccess(true);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);
        settings.setJavaScriptEnabled(true);
        settings.setSupportZoom(false);
        wv_view.loadUrl("http://trustedmedia2018.appspot.com/");
    }
}
