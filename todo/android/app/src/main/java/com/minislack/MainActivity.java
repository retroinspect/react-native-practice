package com.minislack;

import android.os.Bundle; // modified due to app loading
import org.devio.rn.splashscreen.SplashScreen; // modified due to app loading


import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // modified due to app loading
      super.onCreate(savedInstanceState);
  }

  @Override
  protected String getMainComponentName() {
    return "miniSlack";
  }

  public void onCreate() {
    SplashScreen.show(this);
  }
}
