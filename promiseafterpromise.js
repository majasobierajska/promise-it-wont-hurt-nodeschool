var firstPromise = first();
var secondPromise = firstPromise.then(function (results)
{
	return second (results);
});
secondPromise.then(console.log);