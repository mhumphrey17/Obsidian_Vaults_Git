---
title: "2021-Q04-Solution: Matrix Types (Equivalent vs Similar)"
aliases: ["Solution to 2021 Q4"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2021", "difficulty-standard", "matrices"]
related_question: [[2021-Q04]]
---

# 2021-Q04-Solution: Matrix Types (Equivalent vs Similar)

## Original Question
Let $\lambda, \mu \in \mathbb{R}$,
$$
A=\begin{pmatrix}
\lambda & 0 \\
0 & \mu
\end{pmatrix}, \quad B=\begin{pmatrix}
\lambda & \mu \\
-\mu & \lambda
\end{pmatrix} \quad \text { and } \quad C=\begin{pmatrix}
\lambda & 1 \\
0 & \lambda
\end{pmatrix}
$$
(a) Suppose that $\lambda$ and $\mu$ are not zero. Are any of the three matrices equivalent?

(b) Are any of the three matrices similar over $\mathbb{R}$?

Justify your answer.

## Solution Process

### Part (a): Equivalent Matrices
**Answer: YES**, all three matrices are equivalent.

#### Justification:
1. Two matrices are equivalent if and only if they have the same rank.

2. Since $\lambda$ and $\mu$ are not zero:
   - $\det(A) = \lambda\mu \neq 0$, so $\operatorname{rank}(A) = 2$
   - $\det(B) = \lambda^2 + \mu^2$
     - Since $\lambda, \mu \in \mathbb{R}$ and both are non-zero, $\lambda^2 + \mu^2 > 0$
     - Therefore $\det(B) \neq 0$, so $\operatorname{rank}(B) = 2$
   - $\det(C) = \lambda^2 \neq 0$, so $\operatorname{rank}(C) = 2$

3. All three matrices have rank 2, therefore they are all equivalent.

### Part (b): Similar Matrices
**Answer: NO**, none of the matrices are similar to each other over $\mathbb{R}$.

#### Justification:

**Case 1: When $\mu \neq 0$**
- Matrix $B$ has characteristic polynomial: $\det(B - tI) = (t-\lambda)^2 + \mu^2$
- The roots are $t = \lambda \pm i\mu$, which are complex (not real)
- Therefore, $B$ has no real eigenvalues
- Matrices $A$ and $C$ both have real eigenvalues ($\lambda$ and $\mu$ for $A$, $\lambda$ (twice) for $C$)
- Since similar matrices must have the same eigenvalues, $B$ cannot be similar to $A$ or $C$

**Case 2: When $\mu = 0$ and $\lambda \neq 0$**
- $A = \begin{pmatrix}\lambda & 0 \\ 0 & 0\end{pmatrix}$ has eigenvalues $\lambda$ and $0$
- $B = \begin{pmatrix}\lambda & 0 \\ 0 & \lambda\end{pmatrix} = \lambda I$ has eigenvalue $\lambda$ (with multiplicity 2)
- $C = \begin{pmatrix}\lambda & 1 \\ 0 & \lambda\end{pmatrix}$ has eigenvalue $\lambda$ (with multiplicity 2)
- $A$ has distinct eigenvalues, while $B$ and $C$ have repeated eigenvalues
- Therefore, $A$ is not similar to $B$ or $C$

**Case 3: Comparing $B$ and $C$ when $\mu = 0$**
- When $\mu = 0$, $B = \lambda I$ (diagonal)
- Matrix $C$ has eigenvalue $\lambda$ with:
  - Algebraic multiplicity: 2
  - Geometric multiplicity: 1 (eigenspace dimension)
- Therefore, $C$ is not diagonalizable
- Since $B$ is diagonal (hence diagonalizable) and $C$ is not diagonalizable, they cannot be similar

**Case 4: When $\lambda = \mu = 0$**
- $A = B = \begin{pmatrix}0 & 0 \\ 0 & 0\end{pmatrix}$, so $A$ and $B$ are similar (they are the same)
- $C = \begin{pmatrix}0 & 1 \\ 0 & 0\end{pmatrix}$ is not diagonalizable (nilpotent with non-zero off-diagonal)
- Since $A = B$ is diagonalizable (it's the zero matrix) and $C$ is not, $C$ is not similar to $A$ or $B$

#### Conclusion:
In all cases, no two of the three matrices are similar over $\mathbb{R}$.

## Key Steps and Justifications
1. Understanding equivalence as same-rank condition
2. Computing determinants to establish ranks
3. Finding eigenvalues for each matrix
4. Analyzing different cases based on parameter values
5. Using properties of similar matrices (same eigenvalues, same diagonalizability)

## Alternative Approaches
- Could verify equivalence by explicitly constructing the transformations
- Could use other eigenvalue-based properties to show non-similarity

## Common Mistakes
- Confusing equivalent and similar matrices
- Not considering all parameter cases
- Errors in eigenvalue computation
- Missing the distinction between algebraic and geometric multiplicities

## Mark Scheme Breakdown
- Part (a): 1 mark for rank-equivalence principle, 1 mark for rank computations, 1 mark for conclusion
- Part (b): 1 mark for finding eigenvalues, 2 marks for case analysis, 1 mark for proper conclusions

