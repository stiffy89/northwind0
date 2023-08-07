sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/northwind0/test/integration/FirstJourney',
		'ns/northwind0/test/integration/pages/ProductsList',
		'ns/northwind0/test/integration/pages/ProductsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/northwind0') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage
                }
            },
            opaJourney.run
        );
    }
);