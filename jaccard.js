/*
 * jaccard
 * <cam@onswipe.com>
 */

/*
 * Return mutual elements in the input sets
 */
var intersection = function (a, b, c) {
  var x = [];

  a.forEach(function (e) {
    if (e in b) x.push(e);
  });

  return x;
}

/*
 * Return distinct elements from both input sets
 */
var union = function (a, b) {
  var x = [];

  var check = function (e) {
    if (!~x.indexOf(e)) x.push(e);
  }

  a.forEach(check);
  b.forEach(check);

  return x;
}

/*
 * Similarity
 */
var index = function (a, b, c) {
  if (c) {
    c(intersection(a, b).length / union(a, b).length);
  } else {
    return intersection(a, b).length / union(a, b).length;
  }
}

/*
 * Dissimilarity
 */
var distance = function (a, b, c) {
  if (c) {
    c(1 - index(a, b));
  } else {
    return 1 - index(a, b);
  }
}

/*
 * Say cheese
 */
module.exports = {
  index: index,
  distance: distance
}
