let rev;
let query;
let fileName;

function generate() {

    // this gives only microsecond precision, because JavaScrpt doesn't have nanosecond
    const datetime = Math.round(window.performance.timing.navigationStart + window.performance.now());

    // so we add a random part to add 6 digits
    const random = Math.floor(100000 + Math.random() * 900000);

    // this way the result has the same length as the create_sql.sh script of AzerothCore
    rev = String(datetime)+String(random);

    query = `INSERT INTO \`version_db_world\` (\`sql_rev\`) VALUES ('${rev}');`
    fileName = `rev_${rev}.sql`;

    document.getElementById('file-name').innerHTML = fileName;
    document.getElementById('query').innerHTML = query;
}

