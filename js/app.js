
var items = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, 'uioo'];

var groups = {};

for (let item of items) {
    var type = typeof item;
    if (!groups[type]) {
        groups[type] = [];
    }
    groups[type].push(item);
}

var sortedGroups = Object.values(groups).sort((a, b) => b.length - a.length);

console.log(sortedGroups);