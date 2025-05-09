---
title: "Characterization of Determinants"
aliases: ["determinant characterization theorem", "uniqueness of determinant"]
tags: ["Y1_Alg", "Y1_Alg_s2_ch02_03", "concept", "determinant", "theorem"]
related_concepts: ["Determinant", "Multilinearity of Determinants", "Alternating Property of Determinants", "Product Formula for Determinants"]
date_created: 2025-05-09
---

# Characterization of Determinants

## Definition
The characterization theorem states that any function $D: M_{n,n}(\mathbb{F}) \to \mathbb{F}$ that is multilinear and alternating in the columns must be a scalar multiple of the determinant function. Formally:

If $D: M_{n,n}(\mathbb{F}) \to \mathbb{F}$ is a function that is multilinear and alternating in columns, then:
$$D(A) = D(I) \cdot \det(A)$$
where $I$ is the identity matrix.

## Key Concepts
1. **Uniqueness up to Scalar Multiple**: The determinant is unique up to a scalar multiple among all multilinear alternating functions on square matrices.

2. **Normalization**: If we additionally require $D(I) = 1$, then $D = \det$ exactly.

3. **Multilinearity Requirement**: The function must be linear in each column when all other columns are fixed.

4. **Alternating Requirement**: The function must vanish when two columns are identical.

## Proof (Outline)
The proof proceeds by showing that any multilinear alternating function can be expressed in terms of its values on the standard basis vectors:

1. Express columns of matrix $A$ as linear combinations of standard basis vectors:
   $$\mathbf{c}_j = \sum_{k=1}^{n} a_{kj} \mathbf{e}_k$$

2. Use multilinearity to expand:
   $$D(A) = D(\mathbf{c}_1, \ldots, \mathbf{c}_n) = \sum_{k_1=1}^{n} \cdots \sum_{k_n=1}^{n} a_{k_1 1} \cdots a_{k_n n} D(\mathbf{e}_{k_1}, \ldots, \mathbf{e}_{k_n})$$

3. The alternating property implies:
   $$D(\mathbf{e}_{k_1}, \ldots, \mathbf{e}_{k_n}) = 0$$
   unless $k_1, \ldots, k_n$ are all different (i.e., form a permutation of $1,\ldots,n$).

4. For permutations, the alternating property gives:
   $$D(\mathbf{e}_{\sigma(1)}, \ldots, \mathbf{e}_{\sigma(n)}) = \operatorname{sgn}(\sigma) \cdot D(\mathbf{e}_1, \ldots, \mathbf{e}_n) = \operatorname{sgn}(\sigma) \cdot D(I)$$

5. Substituting back gives:
   $$D(A) = D(I) \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma) a_{\sigma(1)1} \cdots a_{\sigma(n)n} = D(I) \cdot \det(A)$$

## Corollaries
1. **Uniqueness Corollary**: If $D$ is multilinear, alternating, and $D(I) = 1$, then $D = \det$ exactly.

2. **Determinant Characterization**: The determinant is the unique function $D: M_{n,n}(\mathbb{F}) \to \mathbb{F}$ that satisfies:
   - $D$ is multilinear in columns
   - $D$ is alternating in columns
   - $D(I) = 1$

## Applications
1. **Alternative Determinant Definitions**: The characterization theorem allows for alternative ways to define the determinant.

2. **Proving Determinant Properties**: Many properties of determinants can be proven by showing they hold for a function satisfying the characterization conditions.

3. **Generalizing Determinants**: The characterization helps extend the concept of determinants to other mathematical structures.

4. **Efficient Computation**: Understanding the essential properties of determinants leads to more efficient computational algorithms.

## Examples
### Example 1: Verification for 2×2 Case
For 2×2 matrices, we can verify that:
- The function $D(A) = a_{11}a_{22} - a_{21}a_{12}$ is multilinear and alternating
- $D(I) = 1$
- Therefore $D = \det$ by the characterization theorem

### Example 2: Constructing a Different Function
Consider the function $E(A) = 2 \cdot \det(A)$. Then:
- $E$ is multilinear and alternating
- $E(I) = 2$
- By the characterization theorem, $E(A) = E(I) \cdot \det(A) = 2 \cdot \det(A)$

## Related Concepts
- [[Determinant]]: The function being characterized
- [[Multilinearity of Determinants]]: One of the key properties in the characterization
- [[Alternating Property of Determinants]]: One of the key properties in the characterization
- [[Product Formula for Determinants]]: An important consequence derived from the characterization
