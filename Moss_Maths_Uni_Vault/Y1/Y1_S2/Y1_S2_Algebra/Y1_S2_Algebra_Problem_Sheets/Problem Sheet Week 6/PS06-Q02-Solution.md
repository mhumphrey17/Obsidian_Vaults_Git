---
title: "PS06-Q02-Solution: Cramer's Rule Proof"
aliases: ["Solution to PS6 Q2"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-06", "difficulty-warmup", "cramer-rule", "determinants", "linear-systems"]
related_problem: [[PS06-Q02]]
---

# PS06-Q02-Solution: Cramer's Rule Proof

## Original Problem
(Cramer's Rule) Let $A \in M_{n, n}(\mathbb{F})$ with $\operatorname{det} A \neq 0$. Show that the unique solution to the linear system $A x=b$ is given explicitly by $x=\left(x_{1}, \ldots, x_{n}\right)$ with $x_{k}=\frac{\operatorname{det} A_{k}[b]}{\operatorname{det} A}$, where $A_{k}[b]$ is the matrix $A$ with column $k$ replaced by the vector $b$.

## Solution Process
Let's denote the columns of $A$ as $c_1, c_2, \ldots, c_n$, so $A = (c_1 \mid c_2 \mid \cdots \mid c_n)$.

Since $Ax = b$, we can write:
$$b = A x = \sum_{j=1}^{n} x_j c_j$$

The matrix $A_k[b]$ is formed by replacing the $k$-th column of $A$ with the vector $b$:
$$A_k[b] = (c_1 \mid c_2 \mid \cdots \mid c_{k-1} \mid b \mid c_{k+1} \mid \cdots \mid c_n)$$

Now we calculate $\det A_k[b]$:
$$\det A_k[b] = \det(c_1, c_2, \ldots, c_{k-1}, b, c_{k+1}, \ldots, c_n)$$

Substituting $b = \sum_{j=1}^{n} x_j c_j$:
$$\det A_k[b] = \det\left(c_1, c_2, \ldots, c_{k-1}, \sum_{j=1}^{n} x_j c_j, c_{k+1}, \ldots, c_n\right)$$

Using the multilinearity of the determinant:
$$\det A_k[b] = \sum_{j=1}^{n} x_j \det(c_1, c_2, \ldots, c_{k-1}, c_j, c_{k+1}, \ldots, c_n)$$

Now, by the alternating property of determinants:
- When $j = k$: $\det(c_1, c_2, \ldots, c_{k-1}, c_k, c_{k+1}, \ldots, c_n) = \det A$
- When $j \neq k$: the determinant has two identical columns, so it equals 0

Therefore:
$$\det A_k[b] = x_k \det A$$

Solving for $x_k$:
$$x_k = \frac{\det A_k[b]}{\det A}$$

This completes the proof of Cramer's Rule.

## Key Insights
- Cramer's Rule provides an explicit formula for the solution of a linear system
- The proof relies on the multilinearity and alternating properties of determinants
- Only the $k$-th term survives in the sum due to the alternating property
- The method requires computing $n+1$ determinants (det $A$ and det $A_k[b]$ for $k=1,\ldots,n$)

## Alternative Approaches
- Could prove using matrix inversion: $x = A^{-1}b$ and then show this leads to the same formula
- Could verify by direct substitution into the original system

## Common Mistakes
- Forgetting that only one term survives in the multilinear expansion
- Not properly applying the alternating property
- Confusing which column is replaced in the matrix $A_k[b]$
- Misunderstanding that this method only works when $\det A \neq 0$

## Practical Considerations
Cramer's Rule, while mathematically elegant, is computationally expensive for large systems. For an $n \times n$ system, it requires computing $n+1$ determinants, each taking $O(n!)$ operations using naive methods. Gaussian elimination is more efficient with $O(n^3)$ complexity.
