/*function addnum(a,b){
return a+b;
}*/
add = require('./addition.js');
function greeting(req, res) {
    var fn = req.query.firstname;
    res.send("Greetings, " + fn);
}
function additon(req, res) {
    var n1 = req.body.num1,
        n2 = req.body.num2,
        sum = add.addnum(parseInt(n1,10),parseInt(n2,10));
    res.send(n1 + ' + ' + n2 + ' is equal to ' + sum);
}
var attachService = function (app) {
    app.get('/svc/greeting', greeting);
    app.post('/svc/add', additon);
};
exports.attachService = attachService;
