sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller,Filter,FilterOperator) => {
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
        },
        onFilterSearch: function (oEvent) {
            var sQuery = oEvent.getParameter("newValue");
            var oList = this.byId("idList");  
            var oBinding = oList.getBinding("items");  

            if (sQuery && sQuery.length > 0) {
              
                var oFilterId = new Filter("id", FilterOperator.Contains, sQuery);  
                var oFilterName = new Filter("name", FilterOperator.Contains, sQuery);  
                var oFilterCountry = new Filter("country", FilterOperator.Contains, sQuery); 
                var oCombinedFilter = new Filter({
                    filters: [oFilterId, oFilterName, oFilterCountry],
                    and: false 
                });
                oBinding.filter(oCombinedFilter);
            } else {
                oBinding.filter([]);
            }
        },
    });
});