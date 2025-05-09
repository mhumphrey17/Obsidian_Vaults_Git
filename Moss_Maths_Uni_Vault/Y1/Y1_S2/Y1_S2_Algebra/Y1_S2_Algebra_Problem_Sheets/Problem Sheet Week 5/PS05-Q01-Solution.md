---
title: "PS05-Q01-Solution: Permutations and Determinant of Lower Triangular Matrix"
aliases: ["Solution to PS05 Q01"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-05", "difficulty-warmup", "permutations", "triangular-matrices"]
related_problem: [[PS05-Q01]]
---

# PS05-Q01-Solution: Permutations and Determinant of Lower Triangular Matrix

## Original Problem
Let $\sigma \in S_{n}$ be a permutation such that $\sigma(i) \geq i$ for all $i$. By considering the expression $\sum_{i=1}^{n}(\sigma(i)-i)$, prove that $\sigma=\mathrm{id}$, the identity permutation. Deduce that the determinant of a lower triangular matrix is the product of its diagonal entries.

## Solution Process

### Part 1: Proving σ = id

First, let's analyze the sum $\sum_{i=1}^{n}(\sigma(i)-i)$:

$$\sum_{i=1}^{n}(\sigma(i)-i) = \sum_{i=1}^{n} \sigma(i) - \sum_{i=1}^{n} i$$

Since $\sigma$ is a permutation, $\sigma(1), \sigma(2), \ldots, \sigma(n)$ are just the numbers $1, 2, \ldots, n$ in some order. Therefore:

$$\sum_{i=1}^{n} \sigma(i) = \sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

This gives us:
$$\sum_{i=1}^{n}(\sigma(i)-i) = \frac{n(n+1)}{2} - \frac{n(n+1)}{2} = 0$$

Now, from the given condition $\sigma(i) \geq i$ for all $i$, we know that each term $(\sigma(i)-i) \geq 0$. Since the sum of non-negative terms equals zero, each term must individually equal zero:

$$\sigma(i) - i = 0 \text{ for all } i$$

Therefore: $\sigma(i) = i$ for all $i$, which means $\sigma = \mathrm{id}$.

### Part 2: Determinant of Lower Triangular Matrix

Using the sum formula for determinants:
$$\operatorname{det}(A) = \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma) \cdot a_{\sigma(1)1} \cdot a_{\sigma(2)2} \cdots a_{\sigma(n)n}$$

For a lower triangular matrix, we have $a_{ij} = 0$ whenever $i < j$. This means in each product term $a_{\sigma(1)1} \cdot a_{\sigma(2)2} \cdots a_{\sigma(n)n}$, we get $a_{\sigma(i)i} = 0$ whenever $\sigma(i) < i$.

Therefore, the product is non-zero only when $\sigma(i) \geq i$ for all $i$. From Part 1, we know the only such permutation is $\sigma = \mathrm{id}$.

Since $\operatorname{sgn}(\mathrm{id}) = 1$, the determinant reduces to:
$$\operatorname{det}(A) = a_{11} \cdot a_{22} \cdots a_{nn}$$

This proves that the determinant of a lower triangular matrix is the product of its diagonal entries.

## Key Insights
1. The constraint $\sigma(i) \geq i$ combined with the permutation property severely restricts which permutations are possible
2. The sum of non-negative terms equaling zero forces each term to be zero
3. The structure of lower triangular matrices eliminates all but the identity permutation from the determinant sum
4. This result extends to upper triangular matrices by a similar argument (with $\sigma(i) \leq i$)

## Common Mistakes
1. Forgetting that $\sigma$ is a bijection, so all values $1, \ldots, n$ appear exactly once
2. Not recognizing that the sum of non-negative terms equaling zero requires each term to be zero
3. Incomplete analysis of when matrix entries are zero in the determinant formula
