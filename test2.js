let circle = {}
circle.a = 10;
circle.b = circle;

// circle = {a:10,b:{a:10,}}

circle.b.b.b.b.b.b.b.b.a = 8;
console.log("a:" + JSON.stringify(circle));
