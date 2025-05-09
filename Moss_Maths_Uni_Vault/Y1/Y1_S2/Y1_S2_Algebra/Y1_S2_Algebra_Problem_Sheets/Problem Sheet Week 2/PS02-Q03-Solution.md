---
title: "PS02-Q03-Solution: Basis and Coordinates in Polynomial Space"
aliases: ["Solution to PS02 Q03"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-02", "difficulty-warmup", "polynomial-space", "basis", "coordinate-vector"]
related_problem: [[PS02-Q03]]
---

# PS02-Q03-Solution: Basis and Coordinates in Polynomial Space

## Original Problem

Let $V \leq \mathbb{R}[X]$ be the subspace of polynomials of degree $\leq 3$ and let $\alpha$ be the following list:

$$p_0 = 1, \quad p_1 = X-1, \quad p_2 = X^2-X+1, \quad p_3 = X^3-X^2+X-1$$

(i) Show that the list $\alpha$ is a basis of $V$.

(ii) Compute the coordinate vector $v \in \mathbb{R}^4$ of $X^3-X^2$ with respect to $\alpha$.

## Solution Process

### Part (i): Proving $\alpha$ is a Basis

We need to show that $\alpha$ is both linearly independent and spanning for $V$.

**Method 1: Coefficient Comparison**

Consider the general equation:
$$p = a_3X^3 + a_2X^2 + a_1X + a_0 = \lambda_0 p_0 + \lambda_1 p_1 + \lambda_2 p_2 + \lambda_3 p_3$$

Expanding the right side:
$$\lambda_0(1) + \lambda_1(X-1) + \lambda_2(X^2-X+1) + \lambda_3(X^3-X^2+X-1)$$
$$= \lambda_3 X^3 + (\lambda_2 - \lambda_3)X^2 + (\lambda_1 - \lambda_2 + \lambda_3)X + (\lambda_0 - \lambda_1 + \lambda_2 - \lambda_3)$$

Comparing coefficients:
- Coefficient of $X^3$: $a_3 = \lambda_3$
- Coefficient of $X^2$: $a_2 = \lambda_2 - \lambda_3$
- Coefficient of $X$: $a_1 = \lambda_1 - \lambda_2 + \lambda_3$
- Constant term: $a_0 = \lambda_0 - \lambda_1 + \lambda_2 - \lambda_3$

From these equations, we can solve recursively:
1. $\lambda_3 = a_3$
2. $\lambda_2 = a_2 + \lambda_3 = a_2 + a_3$
3. $\lambda_1 = a_1 + \lambda_2 - \lambda_3 = a_1 + a_2$
4. $\lambda_0 = a_0 + \lambda_1 - \lambda_2 + \lambda_3 = a_0 + a_1$

Since every polynomial $p$ of degree $\leq 3$ can be uniquely expressed in terms of $\alpha$, the list $\alpha$ is a basis.

**Method 2: Matrix Approach**

We can set up the linear system as a matrix equation:
$$\left(\begin{array}{cccc}
1 & -1 & 1 & -1 \\
0 & 1 & -1 & 1 \\
0 & 0 & 1 & -1 \\
0 & 0 & 0 & 1
\end{array}\right)\left(\begin{array}{l}
\lambda_0 \\
\lambda_1 \\
\lambda_2 \\
\lambda_3
\end{array}\right) = \left(\begin{array}{l}
a_0 \\
a_1 \\
a_2 \\
a_3
\end{array}\right)$$

This matrix is upper triangular with non-zero diagonal entries, so it's invertible. This proves that:
- The system has a unique solution for any choice of $a_0, a_1, a_2, a_3$ (spanning)
- The only solution to the homogeneous system is the trivial solution (linear independence)

Therefore, $\alpha$ is a basis of $V$.

### Part (ii): Finding the Coordinate Vector

We want to express $X^3 - X^2$ as a linear combination of the basis vectors:
$$X^3 - X^2 = \lambda_0 p_0 + \lambda_1 p_1 + \lambda_2 p_2 + \lambda_3 p_3$$

From the coefficient equations derived in part (i), we have:
- $a_3 = 1$ (coefficient of $X^3$)
- $a_2 = -1$ (coefficient of $X^2$)
- $a_1 = 0$ (coefficient of $X$)
- $a_0 = 0$ (constant term)

Using our recursive formulas:
1. $\lambda_3 = a_3 = 1$
2. $\lambda_2 = a_2 + a_3 = -1 + 1 = 0$
3. $\lambda_1 = a_1 + a_2 = 0 + (-1) = -1$
4. $\lambda_0 = a_0 + a_1 = 0 + 0 = 0$

We can verify: $X^3 - X^2 = 0 \cdot 1 + (-1)(X-1) + 0(X^2-X+1) + 1(X^3-X^2+X-1)$
$$= -(X-1) + (X^3-X^2+X-1) = -X+1+X^3-X^2+X-1 = X^3-X^2$$

Therefore, the coordinate vector is:
$$v = (0, -1, 0, 1)$$

## Key Insights

1. **Recursive Method**: The triangular structure allows us to solve for coefficients recursively
2. **Matrix Representation**: The change-of-basis matrix is upper triangular, making it invertible
3. **Verification**: Always verify your answer by substituting back into the original equation
4. **Ordering Matters**: The coordinate vector depends on the specific ordering of the basis

## Alternative Approaches

1. Use row reduction on the augmented matrix to solve the system directly
2. Find the inverse of the change-of-basis matrix and multiply by the coordinate vector in the standard basis

## Common Mistakes

1. Mixing up the order of coefficients when setting up the system
2. Making sign errors when expanding the polynomials
3. Forgetting to verify the answer
4. Confusing the standard basis coordinates with the new basis coordinates
