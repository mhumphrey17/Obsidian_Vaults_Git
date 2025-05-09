---
title: "Algebraic Multiplicity"
aliases: ["a.m.", "Multiplicity (Algebraic)", "Root Multiplicity"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "concept"]
related_concepts: ["Eigenvalue", "Characteristic Polynomial", "Geometric Multiplicity", "Diagonalisation"]
---

# Algebraic Multiplicity

## Definition
Let $\lambda$ be an eigenvalue of a linear operator $\phi: V \rightarrow V$. The algebraic multiplicity of $\lambda$, denoted $\text{a.m.}(\lambda)$, is the largest integer $k$ such that $(t - \lambda)^k$ divides the characteristic polynomial $\Delta_\phi(t)$.

In other words, if $\Delta_\phi(t) = (t - \lambda)^k \cdot q(t)$ where $q(\lambda) \neq 0$, then $\text{a.m.}(\lambda) = k$.

## Key Properties
1. **Root Multiplicity**: The algebraic multiplicity is the multiplicity of $\lambda$ as a root of the characteristic polynomial.

2. **Minimum Value**: If $\lambda$ is an eigenvalue, then $\text{a.m.}(\lambda) \geq 1$.

3. **Sum Property**: For an $n \times n$ matrix, the sum of algebraic multiplicities of all eigenvalues equals $n$.

4. **Bound on Geometric Multiplicity**: $\text{a.m.}(\lambda) \geq \text{g.m.}(\lambda)$ for any eigenvalue $\lambda$.

## Examples
### Example 1: 2×2 Matrix
For $A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}$:
- Characteristic polynomial: $\Delta_A(t) = (t-4)(t+2)$
- Algebraic multiplicities: $\text{a.m.}(4) = 1$, $\text{a.m.}(-2) = 1$

### Example 2: Repeated Eigenvalue
For $A = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$:
- Characteristic polynomial: $\Delta_A(t) = (t-3)^2$
- Algebraic multiplicity: $\text{a.m.}(3) = 2$

### Example 3: Diagonal Matrix
For $D = \text{diag}(\lambda_1, \lambda_2, \ldots, \lambda_n)$:
- Characteristic polynomial: $\Delta_D(t) = \prod_{i=1}^n (t - \lambda_i)$
- Algebraic multiplicities: $\text{a.m.}(\lambda_i)$ equals the number of times $\lambda_i$ appears on the diagonal

### Example 4: Higher Multiplicity
For $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$:
- Characteristic polynomial: $\Delta_A(t) = (t-2)^3$
- Algebraic multiplicity: $\text{a.m.}(2) = 3$

## Computing Algebraic Multiplicity
1. Compute the characteristic polynomial $\Delta_\phi(t)$
2. Factor it completely: $\Delta_\phi(t) = \prod_{i=1}^k (t - \lambda_i)^{m_i}$
3. For eigenvalue $\lambda_j$, the algebraic multiplicity is $m_j$

## Relationship to Geometric Multiplicity
**Proposition 3.4.6**: For any eigenvalue $\lambda$:
$$\text{a.m.}(\lambda) \geq \text{g.m.}(\lambda)$$

This inequality is crucial for understanding diagonalisability:
- If $\text{a.m.}(\lambda) = \text{g.m.}(\lambda)$, the eigenvalue "contributes its share" to diagonalisation
- If $\text{a.m.}(\lambda) > \text{g.m.}(\lambda)$, there's a "deficiency" that prevents diagonalisation

## Role in Diagonalisation
**Theorem 3.4.7**: A linear operator $\phi: V \rightarrow V$ is diagonalisable if and only if:
1. The characteristic polynomial factors completely into linear factors, and
2. For every eigenvalue $\lambda$: $\text{a.m.}(\lambda) = \text{g.m.}(\lambda)$

This theorem provides a complete characterisation of diagonalisability in terms of multiplicities.

## Geometric Interpretation
- Algebraic multiplicity counts how many times an eigenvalue appears in the characteristic polynomial
- It represents the "theoretical capacity" for eigenvectors with that eigenvalue
- The gap between algebraic and geometric multiplicity indicates "missing" eigenvectors

## Examples of Multiplicity Analysis
### Diagonalisable Case
$A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{pmatrix}$:
- $\text{a.m.}(2) = 1 = \text{g.m.}(2)$
- $\text{a.m.}(3) = 2 = \text{g.m.}(3)$
- Since all multiplicities match, $A$ is diagonalisable

### Non-Diagonalisable Case
$B = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$:
- $\text{a.m.}(3) = 2$
- $\text{g.m.}(3) = 1$ (eigenspace is 1-dimensional)
- Since $\text{a.m.}(3) > \text{g.m.}(3)$, $B$ is not diagonalisable

## Applications
1. **Determining Diagonalisability**: Essential test for whether a matrix/operator can be diagonalised

2. **Counting Eigenvalues**: With multiplicity, helps track all eigenvalues of a transformation

3. **Jordan Normal Form**: Algebraic multiplicity determines the size of Jordan blocks

4. **Perturbation Theory**: How eigenvalues change under small perturbations

## Related Theorems
1. **Fundamental Theorem of Algebra**: Over $\mathbb{C}$, every polynomial of degree $n$ has exactly $n$ roots (counting multiplicities)

2. **Cayley-Hamilton Theorem**: Every matrix satisfies its characteristic polynomial

3. **Spectral Theorem**: For normal matrices, algebraic and geometric multiplicities always match

## Related Concepts
- [[Geometric Multiplicity]]: Dimension of the eigenspace
- [[Characteristic Polynomial]]: Source of algebraic multiplicity
- [[Eigenvalue]]: The entity whose multiplicity we're measuring
- [[Diagonalisation]]: Process that depends on multiplicity relationships
- [[Jordan Normal Form]]: Generalisation when diagonalisation fails

## Notes
- Algebraic multiplicity is always a positive integer
- It's an algebraic invariant (unchanged by similarity transformations)
- The sum of all algebraic multiplicities equals the dimension of the space
- Understanding the interplay between algebraic and geometric multiplicities is key to mastering eigenvalue theory
- Algebraic multiplicity can be viewed as the "algebraic capacity" for eigenvectors with a given eigenvalue
