// this problem can be thought of as a tree

// If this isn't a pattern, then I have no clue how someone would randomly come up with the answer on an interview.  We are going to use recursion to to help us build out all of our combinations.
// The recursion here is basically a depth first search but that doesn't matter.  It first makes sure that the open count is less than 3 and then add another ( into our stack and then make a recursive call
// with the open + 1.  After the recursive call we are going to remove the ) from our stack.  This seems counter intuitive but the way the call stack works will make it so that we actually do check
// every combination. I wrote it out to see what would happen and we do go through each one.  Now we repeat the same type of logic but for the ).  The base case is once both left and right counters are at
// n.  Key things here is we need a stack so that we can get lifo and I think it's specific to this problem with recursion.

var generateParenthesis = function (n) {
  const stack = [];
  const res = [];

  function helper(openN, closedN) {
    // console.log(stack);
    if (openN == closedN && closedN == n) {
      res.push(stack.join(""));
      return;
    }

    if (openN < n) {
      stack.push("(");
      helper(openN + 1, closedN);
      stack.pop();
    }
    if (closedN < openN) {
      stack.push(")");
      helper(openN, closedN + 1);
      stack.pop();
    }
  }
  helper(0, 0);
  return res;
};

console.log(generateParenthesis2(3));

// here's another concise solution where the same concept applies and we don't have to think about using a stack.  Seems like value itself is a local variable so we can just keep passing it in.
// once value gets to n*2 then we are going to push it into our results array.  At that point, the recursive call will resolve so we just move on.  For adding a parenthesis we can just use a string .

// this is a much easier solution to understand versus having to use a stack

function generateParenthesis2(n) {
  const res = [];

  function helper(l, r, value) {
    console.log(res);
    if (value.length >= n * 2) {
      res.push(value);
      return;
    }

    if (l < n) {
      helper(l + 1, r, value + "(");
    }

    if (r < l) {
      helper(l, r + 1, value + ")");
    }
  }
  helper(0, 0, "");
  return res;
}
