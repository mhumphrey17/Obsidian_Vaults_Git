---
title: "PS06-Q04-Solution: Invertibility Condition and Inverse"
aliases: ["Solution to PS6 Q4"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-06", "difficulty-warmup", "determinants", "matrix-inversion", "parametric-matrices"]
related_problem: [[PS06-Q04]]
---

# PS06-Q04-Solution: Invertibility Condition and Inverse

## Original Problem
What condition on $x$ makes the following matrix invertible?

$$A=\left(\begin{array}{ccc}
2 & 3 & 1 \\
-4 & x & 0 \\
1 & 5 & 2
\end{array}\right)$$

When the condition is satisfied, find $A^{-1}$.

## Solution Process
### Part 1: Finding the Invertibility Condition

A matrix is invertible if and only if its determinant is non-zero. Let's calculate $\det A$.

Using row operations to simplify the calculation. First, let's replace $R_3$ by $R_3 - 2R_1$:

$$\det A = \left|\begin{array}{ccc}
2 & 3 & 1 \\
-4 & x & 0 \\
1 & 5 & 2
\end{array}\right| = \left|\begin{array}{ccc}
2 & 3 & 1 \\
-4 & x & 0 \\
-3 & -1 & 0
\end{array}\right|$$

Now expanding along the third column (which has only one non-zero entry):

$$\det A = 1 \cdot \left|\begin{array}{cc}
-4 & x \\
-3 & -1
\end{array}\right| = (-4)(-1) - (x)(-3) = 4 + 3x = 3x + 4$$

Therefore, $A$ is invertible if and only if $\det A \neq 0$, which means:
$$3x + 4 \neq 0$$
$$x \neq -\frac{4}{3}$$

### Part 2: Finding the Inverse

For $x \neq -\frac{4}{3}$, we can find $A^{-1}$ using the formula $A^{-1} = \frac{1}{\det A}\operatorname{adj}(A)$.

We need to compute the adjugate matrix. Let's find all the cofactors:

$$\operatorname{cof}(A) = \left(\begin{array}{ccc}
2x & 8 & -20-x \\
-1 & 3 & -7 \\
-x & -4 & 2x+12
\end{array}\right)$$

The adjugate is the transpose of the cofactor matrix:

$$\operatorname{adj}(A) = \left(\begin{array}{ccc}
2x & -1 & -x \\
8 & 3 & -4 \\
-20-x & -7 & 2x+12
\end{array}\right)$$

Therefore:
$$A^{-1} = \frac{1}{3x+4}\left(\begin{array}{ccc}
2x & -1 & -x \\
8 & 3 & -4 \\
-20-x & -7 & 2x+12
\end{array}\right)$$

## Key Insights
- The condition for invertibility is determined by setting the determinant equal to zero and finding when this occurs
- Row operations can significantly simplify determinant calculations
- The inverse depends on the parameter $x$ in a complex way, with each entry being a rational function in $x$

## Alternative Approaches
- Could use Gaussian elimination to find the inverse directly
- Could verify our result by checking that $A \cdot A^{-1} = I$

## Common Mistakes
- Forgetting that the matrix is only invertible when the determinant is non-zero
- Making arithmetic errors in the determinant calculation
- Not properly computing the cofactor matrix
- Forgetting to transpose the cofactor matrix to get the adjugate

## Verification
We can verify our determinant calculation by expanding along a different row or column, or by substituting a specific value of $x$ and checking.
