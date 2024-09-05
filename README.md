```
import System;
import System.Windows.Forms;
import Fiddler;
import System.Text.RegularExpressions;

class Handlers
{
    static function OnBeforeRequest(oS: Session) {
        if (oS.host.EndsWith(".limbuscompanyapi.com") || 
        oS.host.EndsWith(".limbuscompanyapi-2.com")) {
            oS.oRequest.headers.UriScheme = "http";
            oS.host = "127.0.0.1";
            oS.port = 8000;
        }
        if (oS.host == "127.0.0.1" && oS.port == 8000) {
            FiddlerApplication.Log.LogString("Captured request to 127.0.0.1:8080: " + oS.fullUrl);
        }
    }
};
```