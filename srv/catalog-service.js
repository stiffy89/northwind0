const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() { 
    const { Products } = this.entities;
	const northwindservice = await cds.connect.to('Northwind');

    this.on('READ', Products, async (req) => {
		const {Products} = northwindservice.entities;
		let results = await northwindservice.run(SELECT.from(Products));

		/* for (var i in results){
			let aDateDisp = results[i].ReleaseDate.split("T")[0].split("-");
			let sDateDisp = aDateDisp[2] + "/" + aDateDisp[1] + "/" + aDateDisp[0]
			results[i].DateDisp = sDateDisp;

			results[i].RatingCriticality = 2;
			if (results.Rating > 3){
				results[i].RatingCriticality = 3;
			} else {
				results[i].RatingCriticality = 1;
			}

			let oTodayDate = new Date();
			let oReleaseDate = new Date(results[i].ReleaseDate);
			let iYearsDiff = Math.floor((oTodayDate - oReleaseDate) / (1000 * 3600 * 24 * 365));
			let iDayDiff = Math.ceil((oTodayDate - oReleaseDate) / (1000 * 3600 * 24)) % 365;

			results[i].ReleaseDays = iYearsDiff.toString() + " years " + iDayDiff.toString() + " days";
		} */

		results.$count = results.length;
		return results;
	});
});