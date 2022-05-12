var fs = require("fs");
var stringify = require("csv-stringify");

//JSON de datos.
var data =[
    {"Country": "El Salvador", "Official Languages(s)": "Spanish"},
    {"Country": "India ", "Official Languages(s)": "Hindi, English"}
];

stringify.stringify(data, {
    header: true
}, function (err, output) {
    fs.writeFileSync(__dirname+"/data.csv", output);
});
