const accountId = 144553
let accountEmail = "abhi@googal.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 23  //not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212222121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);