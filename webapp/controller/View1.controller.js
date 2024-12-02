sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("app.miningjson0953.controller.View1", {
        onInit() {
           
        },
        onRowSelect:function(oEvt){
            var oItem = oEvt.mParameters.listItem;
            var locId = oItem.mProperties.title

            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo('RouteView2',{
                locationId:locId
            })

        }
    });
});