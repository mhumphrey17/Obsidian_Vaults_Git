---
title: "PS05-Q06-Solution: Determinant of Permutation Matrix"
aliases: ["Solution to PS05 Q06"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-05", "difficulty-homework", "permutation-matrix", "sum-formula"]
related_problem: [[PS05-Q06]]
---

# PS05-Q06-Solution: Determinant of Permutation Matrix

## Original Problem
Given a permutation $\tau \in S_n$, let $P(\tau) \in M_{n,n}(\mathbb{F})$ be the matrix with entries

$$P(\tau)_{ij} = \begin{cases}
1 & \text{if } \tau(j) = i \\
0 & \text{otherwise}
\end{cases}$$

Show that $\operatorname{det}(P) = \operatorname{sgn}(\tau)$, using the sum formula.

## Solution Process

### Understanding the permutation matrix structure

First, let's understand what $P(\tau)$ looks like. The entry $P(\tau)_{ij} = 1$ exactly when $\tau(j) = i$, meaning column $j$ has its 1 in row $i$. This means:
- Each column has exactly one 1 (since $\tau$ is a function)
- Each row has exactly one 1 (since $\tau$ is a permutation/bijection)
- All other entries are 0

### Applying the sum formula

The sum formula for determinants states:
$$\operatorname{det}(P(\tau)) = \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma) \cdot P(\tau)_{\sigma(1),1} \cdot P(\tau)_{\sigma(2),2} \cdots P(\tau)_{\sigma(n),n}$$

For this product to be non-zero, we need each factor $P(\tau)_{\sigma(i),i}$ to be non-zero, which means:
$$P(\tau)_{\sigma(i),i} = 1 \text{ for all } i$$

By the definition of $P(\tau)$, this happens if and only if:
$$\tau(i) = \sigma(i) \text{ for all } i$$

This means $\sigma = \tau$.

### Concluding the proof

Since only the term corresponding to $\sigma = \tau$ contributes to the sum:
$$\operatorname{det}(P(\tau)) = \operatorname{sgn}(\tau) \cdot P(\tau)_{\tau(1),1} \cdot P(\tau)_{\tau(2),2} \cdots P(\tau)_{\tau(n),n}$$

By the definition of $P(\tau)$, each $P(\tau)_{\tau(i),i} = 1$ (since $\tau(i) = \tau(i)$), so:
$$\operatorname{det}(P(\tau)) = \operatorname{sgn}(\tau) \cdot 1 \cdot 1 \cdots 1 = \operatorname{sgn}(\tau)$$

## Alternative Interpretation

We can think of this result as saying:
- Permutation matrices are orthogonal (their determinant is ±1)
- The sign of the determinant matches the sign of the permutation
- Permutation matrices provide a concrete realization of abstract permutations

## Key Insights
1. Permutation matrices have a very sparse structure with exactly one 1 in each row and column
2. In the sum formula, only the term corresponding to the original permutation contributes
3. This provides a direct link between the algebraic structure of permutations and their matrix representations
4. The result shows that permutation matrices preserve the sign of permutations

## Common Mistakes
1. Not recognizing that $\sigma = \tau$ is the only permutation that yields a non-zero product
2. Incorrectly interpreting the definition of $P(\tau)_{ij}$
3. Forgetting that each factor in the product must be 1 for the term to be non-zero
4. Mixing up the roles of rows and columns in the permutation matrix

## Extensions
1. This result is central to understanding how permutations act on vector spaces
2. Permutation matrices form a group under multiplication
3. The determinant gives a group homomorphism from $S_n$ to $\{\pm 1\}$
4. This connects to the study of group representations
