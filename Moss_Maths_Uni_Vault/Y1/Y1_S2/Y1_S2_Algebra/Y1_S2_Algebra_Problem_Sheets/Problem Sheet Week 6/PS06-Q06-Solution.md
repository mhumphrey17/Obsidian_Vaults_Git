---
title: "PS06-Q06-Solution: Determinant of Sum Counterexample"
aliases: ["Solution to PS6 Q6"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-06", "difficulty-homework", "determinants", "counterexample", "matrix-addition"]
related_problem: [[PS06-Q06]]
---

# PS06-Q06-Solution: Determinant of Sum Counterexample

## Original Problem
Construct two matrices $A, B \in M_{2,2}(\mathbb{F})$ such that

$$\operatorname{det}(A+B) \neq \operatorname{det} A+\operatorname{det} B$$

## Solution Process
Let's choose two simple 2×2 matrices:

$$A = B = \left(\begin{array}{ll}
1 & 0 \\
0 & 1
\end{array}\right) = I$$

Computing the sum:
$$A + B = \left(\begin{array}{ll}
1 & 0 \\
0 & 1
\end{array}\right) + \left(\begin{array}{ll}
1 & 0 \\
0 & 1
\end{array}\right) = \left(\begin{array}{ll}
2 & 0 \\
0 & 2
\end{array}\right)$$

Calculating determinants:
- $\det(A+B) = \det\left(\begin{array}{ll}2 & 0 \\ 0 & 2\end{array}\right) = 2 \cdot 2 - 0 \cdot 0 = 4$
- $\det A = \det\left(\begin{array}{ll}1 & 0 \\ 0 & 1\end{array}\right) = 1 \cdot 1 - 0 \cdot 0 = 1$
- $\det B = \det\left(\begin{array}{ll}1 & 0 \\ 0 & 1\end{array}\right) = 1 \cdot 1 - 0 \cdot 0 = 1$

Therefore:
- $\det(A+B) = 4$
- $\det A + \det B = 1 + 1 = 2$

Since $4 \neq 2$, we have shown that $\det(A+B) \neq \det A + \det B$ ✓

## Key Insights
- The determinant function is **not linear** with respect to matrix addition
- The determinant is multilinear (linear in each row/column separately), but this doesn't make it linear with respect to matrix addition
- This contrasts with other properties like $\det(AB) = \det(A)\det(B)$ which do hold

## Alternative Examples
Many other examples work:
1. $A = \left(\begin{array}{ll}1 & 1 \\ 0 & 0\end{array}\right)$ and $B = \left(\begin{array}{ll}0 & 0 \\ 1 & 1\end{array}\right)$
   - $\det(A) = \det(B) = 0$
   - $\det(A+B) = \det\left(\begin{array}{ll}1 & 1 \\ 1 & 1\end{array}\right) = 0$
   - This gives $0 \neq 0 + 0$, which doesn't work!

2. A better alternative: $A = \left(\begin{array}{ll}1 & 0 \\ 0 & 0\end{array}\right)$ and $B = \left(\begin{array}{ll}0 & 0 \\ 0 & 1\end{array}\right)$
   - $\det(A) = \det(B) = 0$
   - $\det(A+B) = \det\left(\begin{array}{ll}1 & 0 \\ 0 & 1\end{array}\right) = 1$
   - Here $1 \neq 0 + 0$ ✓

## Why This Happens
The key insight is that matrix addition affects all entries simultaneously, and the determinant involves products of entries from different rows and columns. When we add matrices, these cross-products interact in complex ways that prevent the determinant function from being additive.

## Common Mistakes
- Trying to find matrices where the calculation accidentally works out to equality
- Not verifying the arithmetic carefully
- Choosing overly complex matrices when simple ones suffice

## Theoretical Context
This result emphasizes that while the determinant has many nice properties (multilinearity, alternating property, product formula), it is not a linear function on the vector space of matrices. This is a crucial distinction in understanding the nature of the determinant function.
