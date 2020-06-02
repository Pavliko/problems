watch:
	fswatch -0 $(filename) | xargs -0 -n1 -I{} node $(filename)

# make watch filename=./maximum_subarray.js
