---
title: "PS06-Q03-Solution: Properties of Adjugate Matrix"
aliases: ["Solution to PS6 Q3"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-06", "difficulty-warmup", "adjugate", "identity-matrix", "scaling"]
related_problem: [[PS06-Q03]]
---

# PS06-Q03-Solution: Properties of Adjugate Matrix

## Original Problem
(i) Let $I$ be the $3 \times 3$ identity matrix matrix. Compute $\operatorname{adj} I$.
(ii) Let $A \in M_{n, n}(\mathbb{F})$ a matrix and $\lambda \in \mathbb{F}$. Show that $\operatorname{adj} \lambda A=\lambda^{n-1} \operatorname{adj} A$.

## Solution Process

### Part (i): Adjugate of Identity Matrix

For any $n \times n$ identity matrix $I$, we need to compute the adjugate matrix.

Recall that for any $(i, j)$, the submatrix $m_{ij}(A)$ is the $(n-1) \times (n-1)$ matrix obtained from $A$ by deleting row $i$ and column $j$, and the $(i, j)$-minor is $\mu_{ij}(A) = \det m_{ij}(A)$.

For the $3 \times 3$ identity matrix:
- When $i = j$: $m_{ii}(I)$ is the $(n-1) \times (n-1)$ identity matrix (after deleting row $i$ and column $i$, all remaining diagonal entries are 1)
- Therefore: $\mu_{ii}(I) = \det(I_{n-1}) = 1$

- When $i \neq j$: $m_{ij}(I)$ has a zero column (column $j$ after deleting row $i$) and a zero row (row $i$ after deleting column $j$)
- Therefore: $\mu_{ij}(I) = 0$

The adjugate matrix is constructed by transposing the cofactor matrix:
- $(\operatorname{adj} I)_{ji} = (-1)^{i+j} \mu_{ij}(I)$

For the identity matrix:
- When $i = j$: $(\operatorname{adj} I)_{ii} = (-1)^{2i} \mu_{ii}(I) = 1 \cdot 1 = 1$
- When $i \neq j$: $(\operatorname{adj} I)_{ji} = (-1)^{i+j} \mu_{ij}(I) = (\pm 1) \cdot 0 = 0$

Therefore: $\operatorname{adj} I = I$ (the adjugate of the identity matrix is itself)

### Part (ii): Adjugate of Scalar Multiple

We need to show that $\operatorname{adj}(\lambda A) = \lambda^{n-1} \operatorname{adj} A$.

First, observe the relationship between minors:
$$m_{ij}(\lambda A) = \lambda m_{ij}(A)$$

This is because scaling a matrix by $\lambda$ scales each entry by $\lambda$, so the submatrix also scales by $\lambda$.

For the minors (determinants of submatrices):
$$\mu_{ij}(\lambda A) = \det(m_{ij}(\lambda A)) = \det(\lambda m_{ij}(A))$$

Using the property that $\det(\lambda B) = \lambda^k \det(B)$ for a $k \times k$ matrix $B$:
$$\mu_{ij}(\lambda A) = \lambda^{n-1} \det(m_{ij}(A)) = \lambda^{n-1} \mu_{ij}(A)$$

Now, comparing the $(j,i)$-entries of the adjugate matrices:
$$(\operatorname{adj}(\lambda A))_{ji} = (-1)^{i+j} \mu_{ij}(\lambda A) = (-1)^{i+j} \lambda^{n-1} \mu_{ij}(A) = \lambda^{n-1}(-1)^{i+j} \mu_{ij}(A)$$

Since $(-1)^{i+j} \mu_{ij}(A) = (\operatorname{adj} A)_{ji}$:
$$(\operatorname{adj}(\lambda A))_{ji} = \lambda^{n-1}(\operatorname{adj} A)_{ji}$$

Therefore: $\operatorname{adj}(\lambda A) = \lambda^{n-1} \operatorname{adj} A$ ✓

## Key Insights
- The identity matrix has a simple adjugate: $\operatorname{adj} I = I$
- Scalar multiplication has a predictable effect on the adjugate: scaling by $\lambda$ results in scaling the adjugate by $\lambda^{n-1}$
- The power $(n-1)$ comes from the fact that minors are $(n-1) \times (n-1)$ determinants

## Alternative Approaches
- Could verify part (i) by direct computation for specific values of $n$
- Could use the identity $A \cdot \operatorname{adj} A = \det(A) \cdot I$ to verify results

## Common Mistakes
- Forgetting that minors are $(n-1) \times (n-1)$ matrices, not $n \times n$
- Incorrectly calculating how scalar multiplication affects submatrices
- Mixing up the sign pattern in the cofactor calculation
- Assuming the adjugate scales by the same power as the determinant (which scales by $\lambda^n$)

## General Pattern
This result generalizes to any $n \times n$ identity matrix: $\operatorname{adj} I_n = I_n$ for all $n$.
