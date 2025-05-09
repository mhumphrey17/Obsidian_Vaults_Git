---
title: Sign Map
aliases:
  - sign of permutation
  - sgn
  - parity function
tags:
  - Y1_Alg_s2_ch02_01
  - concept
  - permutation
  - determinant
related_concepts:
  - Permutation
  - Determinant
  - Transposition
date_created: 2025-05-09
---

# Sign Map

## Definition
The sign map (also called the parity function) is a function that assigns either +1 or -1 to each permutation, defined as:

$$\operatorname{sgn}: S_{n} \rightarrow\{1,-1\}, \quad \operatorname{sgn} \sigma=(-1)^{\left(l_{1}-1\right)+\ldots\left(l_{t}-1\right)}$$

where:
- $S_n$ is the symmetric group of permutations on $n$ elements
- $\sigma$ is a permutation in $S_n$
- $l_1, \ldots, l_t$ are the cycle lengths of the disjoint cycles in $\sigma$

## Properties
1. **Effect of Transpositions**: $\operatorname{sgn}((i j) \sigma) = -\operatorname{sgn} \sigma$
   This means multiplying a permutation by a transposition changes its sign.

2. **Inverse Permutation**: $\operatorname{sgn} \sigma^{-1} = \operatorname{sgn} \sigma$
   The sign of a permutation equals the sign of its inverse.

3. **Composition**: If $\sigma, \tau \in S_n$, then $\operatorname{sgn}(\sigma \circ \tau) = \operatorname{sgn}(\sigma) \cdot \operatorname{sgn}(\tau)$
   The sign map is a homomorphism from $S_n$ to the multiplicative group $\{1, -1\}$.

4. **Even and Odd Permutations**: 
   - If $\operatorname{sgn}(\sigma) = 1$, $\sigma$ is called an even permutation.
   - If $\operatorname{sgn}(\sigma) = -1$, $\sigma$ is called an odd permutation.

## Examples
### Example 1: Identity Permutation
The identity permutation $\sigma = (1)(2)\ldots(n)$ consists of $n$ cycles of length 1.
$\operatorname{sgn}(\sigma) = (-1)^{(1-1) + (1-1) + \ldots + (1-1)} = (-1)^0 = 1$

Thus, the identity permutation is even.

### Example 2: Transposition
For a single transposition $\sigma = (i~j)$, there is one cycle of length 2 and $n-2$ cycles of length 1.
$\operatorname{sgn}(\sigma) = (-1)^{(2-1) + (n-2)(1-1)} = (-1)^1 = -1$

Thus, all transpositions are odd permutations.

## Related Theorems
1. **Decomposition Invariance**: The parity of the number of transpositions in any decomposition of a permutation into transpositions is invariant.

2. **Alternating Group**: The set of all even permutations forms a subgroup of $S_n$ called the alternating group $A_n$.

## Applications
1. **Determinants**: The sign map is used in the definition of determinants to assign the correct sign to each term.

2. **Even and Odd Permutations**: The classification of permutations as even or odd is important in group theory and combinatorics.

3. **Signature of Permutation Matrix**: For a permutation matrix $P(\sigma)$, $\operatorname{det}(P(\sigma)) = \operatorname{sgn}(\sigma)$.

## Related Concepts
- [[Permutation]]: The sign map assigns a parity to each permutation
- [[Determinant]]: Uses the sign map in its definition
- [[Transposition]]: A swap of two elements that changes the sign of a permutation
