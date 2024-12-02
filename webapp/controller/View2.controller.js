sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("app.miningjson0953.controller.View2", {
        onInit() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.onMatch, this);
        },
        onMatch: function (oEvt) {
            var locationId = oEvt.mParameters.arguments.locationId;
            var oDetailModel = this.getOwnerComponent().getModel('detailModel');
            var oLocationsModel = this.getOwnerComponent().getModel('locationsModel');
            var aLocations = oLocationsModel.getProperty("/locations");
            var oLocation = aLocations.find(function(location) {
                return location.id === locationId;
            });
            oDetailModel.setData(oLocation)


        }


    });
});