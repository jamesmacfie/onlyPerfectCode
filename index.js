var disallowedProperties = ['assert', 'expect'];
var visited = [];

function hasVisited(item) {
	for (var i = 0, len = visited.length; i < len; i++) {
		if (visited[i] === item) {
			return true;
		}
	}
}

function removeUndefined(obj) {
	if (!obj) {
		return;
	}

	Object.keys(obj).forEach(function(key) {
		if (disallowedProperties.indexOf(key) !== -1) {
			obj[key] = undefined;
			return;
		}

		var currentProperty = obj[key];

		if (typeof currentProperty === 'object' && !hasVisited(currentProperty)) {
			visited.push(currentProperty);
			removeUndefined(currentProperty);
		}
	});
}

removeUndefined(global);
