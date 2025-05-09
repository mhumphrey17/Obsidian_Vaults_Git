---
title: "PS04-Q01-Solution: Rank and Factorization of a Matrix"
aliases: ["Solution to PS04 Q01"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-04", "difficulty-warmup", "rank", "matrix-factorization"]
related_problem: [[PS04-Q01]]
---

# PS04-Q01-Solution: Rank and Factorization of a Matrix

## Original Problem

Find the column and row ranks of $A = \begin{pmatrix}
1 & 2 & 3 \\
1 & 2 & -1 \\
2 & 4 & 2
\end{pmatrix}$ and write $A = BC$ in two different ways, with $B$ and $C$ of maximal rank.

## Solution Process

### Finding Column Rank

The columns of $A$ are:
- $c_1 = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}$
- $c_2 = \begin{pmatrix} 2 \\ 2 \\ 4 \end{pmatrix}$
- $c_3 = \begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix}$

Observe that $c_2 = 2c_1$, so $c_2$ is linearly dependent on $c_1$.

Now check if $c_3$ is linearly dependent on $\{c_1, c_2\}$:
If $c_3 = \lambda c_1 + \mu c_2 = \lambda c_1 + 2\mu c_1 = (\lambda + 2\mu) c_1$

This would require:
- $3 = \lambda + 2\mu$
- $-1 = \lambda + 2\mu$
- $2 = 2(\lambda + 2\mu)$

The first two equations give $3 = -1$, which is impossible. Therefore, $c_3$ is not a linear combination of $c_1$ and $c_2$.

**Column basis:** $\{c_1, c_3\}$
**Column rank:** 2

### Finding Row Rank

The rows of $A$ are:
- $r_1 = (1, 2, 3)$
- $r_2 = (1, 2, -1)$
- $r_3 = (2, 4, 2)$

$r_2$ is not a multiple of $r_1$ (different third components).

Check if $r_3$ is a linear combination of $r_1$ and $r_2$:
If $r_3 = \lambda r_1 + \mu r_2$, then:
- $2 = \lambda + \mu$
- $4 = 2\lambda + 2\mu = 2(\lambda + \mu)$
- $2 = 3\lambda - \mu$

From the first equation: $\mu = 2 - \lambda$
Substituting into the third: $2 = 3\lambda - (2 - \lambda) = 4\lambda - 2$
Therefore: $4\lambda = 4$, so $\lambda = 1$ and $\mu = 1$

Verification: $r_3 = 1 \cdot r_1 + 1 \cdot r_2 = (1,2,3) + (1,2,-1) = (2,4,2)$ ✓

**Row basis:** $\{r_1, r_2\}$
**Row rank:** 2

### Verification

**Column rank = Row rank = 2** ✓

### Factorization Method 1: Using Column Basis

Using columns of $B$ as the column basis:
$$B = \begin{pmatrix}
1 & 3 \\
1 & -1 \\
2 & 2
\end{pmatrix}$$

For each column of $A$, find coordinates in the column basis:
- $c_1 = 1 \cdot c_1 + 0 \cdot c_3$
- $c_2 = 2 \cdot c_1 + 0 \cdot c_3$
- $c_3 = 0 \cdot c_1 + 1 \cdot c_3$

Therefore:
$$C = \begin{pmatrix}
1 & 2 & 0 \\
0 & 0 & 1
\end{pmatrix}$$

### Factorization Method 2: Using Row Basis

Using rows of $C$ as the row basis:
$$C = \begin{pmatrix}
1 & 2 & 3 \\
1 & 2 & -1
\end{pmatrix}$$

For each row of $A$, find coordinates in the row basis:
- $r_1 = 1 \cdot r_1 + 0 \cdot r_2$
- $r_2 = 0 \cdot r_1 + 1 \cdot r_2$
- $r_3 = 1 \cdot r_1 + 1 \cdot r_2$

Therefore:
$$B = \begin{pmatrix}
1 & 0 \\
0 & 1 \\
1 & 1
\end{pmatrix}$$

## Final Results

**Method 1:**
$$A = \begin{pmatrix}
1 & 3 \\
1 & -1 \\
2 & 2
\end{pmatrix}\begin{pmatrix}
1 & 2 & 0 \\
0 & 0 & 1
\end{pmatrix}$$

**Method 2:**
$$A = \begin{pmatrix}
1 & 0 \\
0 & 1 \\
1 & 1
\end{pmatrix}\begin{pmatrix}
1 & 2 & 3 \\
1 & 2 & -1
\end{pmatrix}$$

## Key Insights

1. **Rank Equality:** Column rank equals row rank for any matrix
2. **Basis Selection:** Different choices of bases lead to different factorizations
3. **Maximal Rank:** In both factorizations, $B$ has rank 2 and $C$ has rank 2
4. **Dimension Check:** $B$ is 3×2 and $C$ is 2×3, giving $A$ as 3×3

## Verification

Both factorizations can be verified by matrix multiplication to ensure they produce the original matrix $A$.
