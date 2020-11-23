console.log("Bypassando o Anti-Root do Uncrackable1 do OWASP...");

Java.perform(function() {

    var c = Java.use("sg.vantagepoint.a.c");

    c.a.implementation = function() {
        console.log("Returning 'false' to C0002c.m2a() call...");
        return false;
    }

    c.b.implementation = function() {
        console.log("Returning 'false' to C0002c.m2b() call...");
        return false;
    }

    c.c.implementation = function() {
        console.log("Returning 'false' to C0002c.m4c() call...");
        return false;
    }
});
