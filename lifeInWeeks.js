function lifeInWeeks (age) {
    let yearsLeft = 90 - age ;
    let days = yearsLeft * 365 ;
    let weeks = yearsLeft * 52 ;
    let months = yearsLeft * 12 ;
    console.log( "your reamining life in months, " +months+ " \nin weeks, " +weeks+ " \nin days, " +days );
}
// return lifeInWeeks;