console.log("Bypass Anti-Root Uncrackable1 OWASP...");

Java.perform(function() {

    //jadx was used for static analysis
    var c = Java.use("sg.vantagepoint.a.c");

    c.a.implementation = function() {
        console.log("Returning 'false' to c.a() call...");
        return false;
    }

    c.b.implementation = function() {
        console.log("Returning 'false' to c.b() call...");
        return false;
    }

    c.c.implementation = function() {
        console.log("Returning 'false' to c.c() call...");
        return false;
    }
});
