sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("app.miningjson0953.controller.View1", {
        onInit() {
           
        },
        onPress:function(){
            
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo('RouteView2')

        }
    });
});