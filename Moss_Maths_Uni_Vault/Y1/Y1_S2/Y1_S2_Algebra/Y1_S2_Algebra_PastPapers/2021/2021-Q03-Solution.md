---
title: "2021-Q03-Solution: Determinant and Matrix Inverse"
aliases: ["Solution to 2021 Q3"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2021", "difficulty-challenging", "determinant", "inverse"]
related_question: [[2021-Q03]]
---

# 2021-Q03-Solution: Determinant and Matrix Inverse

## Original Question
Compute the determinant of the matrix
$$
A=\left(\begin{array}{lll}
x & 1 & 1 \\
1 & x & 1 \\
1 & 1 & x
\end{array}\right)
$$
Find the values of $x \in \mathbb{R}$ such that $A$ is invertible and compute $A^{-1}$ in this case.

## Solution Process

### Step 1: Compute the Determinant
Using cofactor expansion along the first row:
$$\operatorname{det} A=x\left|\begin{array}{ll}
x & 1 \\
1 & x
\end{array}\right|-1\left|\begin{array}{ll}
1 & 1 \\
1 & x
\end{array}\right|+1\left|\begin{array}{ll}
1 & x \\
1 & 1
\end{array}\right|$$

Calculate each 2×2 determinant:
- $\left|\begin{array}{ll}x & 1 \\ 1 & x\end{array}\right| = x^2 - 1$
- $\left|\begin{array}{ll}1 & 1 \\ 1 & x\end{array}\right| = x - 1$
- $\left|\begin{array}{ll}1 & x \\ 1 & 1\end{array}\right| = 1 - x$

Therefore:
$$\operatorname{det} A = x(x^2-1) - (x-1) + (1-x)$$
$$= x^3 - x - x + 1 + 1 - x$$
$$= x^3 - 3x + 2$$

Factor the polynomial:
$$\operatorname{det} A = x^3 - 3x + 2 = (x-1)^2(x+2)$$

### Step 2: Find Invertibility Condition
A matrix is invertible if and only if its determinant is non-zero.
$$\operatorname{det} A \neq 0 \iff (x-1)^2(x+2) \neq 0$$
$$\iff x \neq 1 \text{ and } x \neq -2$$

Therefore, $A$ is invertible when $x \in \mathbb{R} \setminus \{1, -2\}$.

### Step 3: Compute the Inverse
Using the adjugate formula: $A^{-1} = \frac{1}{\operatorname{det} A} \operatorname{adj}(A)$

First, compute the matrix of cofactors:
- $C_{11} = \left|\begin{array}{ll}x & 1 \\ 1 & x\end{array}\right| = x^2-1$
- $C_{12} = -\left|\begin{array}{ll}1 & 1 \\ 1 & x\end{array}\right| = -(x-1) = 1-x$
- $C_{13} = \left|\begin{array}{ll}1 & x \\ 1 & 1\end{array}\right| = 1-x$
- $C_{21} = -\left|\begin{array}{ll}1 & 1 \\ 1 & x\end{array}\right| = -(x-1) = 1-x$
- $C_{22} = \left|\begin{array}{ll}x & 1 \\ 1 & x\end{array}\right| = x^2-1$
- $C_{23} = -\left|\begin{array}{ll}x & 1 \\ 1 & 1\end{array}\right| = -(x-1) = 1-x$
- $C_{31} = \left|\begin{array}{ll}1 & 1 \\ x & 1\end{array}\right| = 1-x$
- $C_{32} = -\left|\begin{array}{ll}x & 1 \\ 1 & 1\end{array}\right| = -(x-1) = 1-x$
- $C_{33} = \left|\begin{array}{ll}x & 1 \\ 1 & x\end{array}\right| = x^2-1$

The adjugate is the transpose of the cofactor matrix:
$$\operatorname{adj}(A) = \begin{pmatrix}
x^2-1 & 1-x & 1-x \\
1-x & x^2-1 & 1-x \\
1-x & 1-x & x^2-1
\end{pmatrix}$$

Factor out $(1-x)$:
$$\operatorname{adj}(A) = (1-x)\begin{pmatrix}
x+1 & -1 & -1 \\
-1 & x+1 & -1 \\
-1 & -1 & x+1
\end{pmatrix}$$

Therefore:
$$A^{-1} = \frac{1}{(x-1)^2(x+2)} \cdot (1-x)\begin{pmatrix}
x+1 & -1 & -1 \\
-1 & x+1 & -1 \\
-1 & -1 & x+1
\end{pmatrix}$$

Simplify:
$$A^{-1} = \frac{1-x}{(x-1)^2(x+2)}\begin{pmatrix}
x+1 & -1 & -1 \\
-1 & x+1 & -1 \\
-1 & -1 & x+1
\end{pmatrix}$$

Since $1-x = -(x-1)$:
$$A^{-1} = \frac{-(x-1)}{(x-1)^2(x+2)}\begin{pmatrix}
x+1 & -1 & -1 \\
-1 & x+1 & -1 \\
-1 & -1 & x+1
\end{pmatrix}$$

$$A^{-1} = \frac{-1}{(x-1)(x+2)}\begin{pmatrix}
x+1 & -1 & -1 \\
-1 & x+1 & -1 \\
-1 & -1 & x+1
\end{pmatrix}$$

$$A^{-1} = \frac{1}{(x-1)(x+2)}\begin{pmatrix}
x+1 & -1 & -1 \\
-1 & x+1 & -1 \\
-1 & -1 & x+1
\end{pmatrix}$$

## Key Steps and Justifications
1. Cofactor expansion for 3×3 determinant
2. Polynomial factorization to find roots
3. Application of invertibility condition
4. Systematic computation of cofactors
5. Proper construction of adjugate matrix
6. Simplification using algebraic factoring

## Alternative Approaches
- Could use row operations to reduce to triangular form
- Could verify the inverse by multiplication

## Common Mistakes
- Sign errors in cofactor computation
- Forgetting to transpose for adjugate
- Algebraic errors in simplification
- Not properly factoring the determinant

## Mark Scheme Breakdown
- Determinant computation: 3 marks
- Correct factorization: 1 mark
- Invertibility condition: 1 mark
- Cofactor computation: 2 marks
- Adjugate and inverse: 1 mark

