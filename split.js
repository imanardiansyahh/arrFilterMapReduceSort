var str = "This is Javascript String Function Example"
var parts = str.split(" ")
var clean = []

for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part === "This" && part === "is")
    clean.push(part)
    
}
