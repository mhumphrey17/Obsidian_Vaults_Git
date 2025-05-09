---
title: "Geometric Multiplicity"
aliases: ["g.m.", "Multiplicity (Geometric)", "Eigenspace Dimension"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "concept", "eigenvalue", "eigenspace", "algebraic-multiplicity", "diagonalisation", "dimension", "rank-nullity-theorem", "jordan-normal-form", "linear-algebra"]
related_concepts: ["Eigenvalue", "Eigenspace", "Algebraic Multiplicity", "Diagonalisation", "Dimension", "Rank-Nullity Theorem", "Jordan Normal Form", "Field", "Vector Space"]
---

# Geometric Multiplicity

## Definition
Let $\lambda$ be an eigenvalue of a linear operator $\phi: V \rightarrow V$. The geometric multiplicity of $\lambda$, denoted $\text{g.m.}(\lambda)$, is the dimension of the $\lambda$-eigenspace:

$$\text{g.m.}(\lambda) = \dim E_\phi(\lambda) = \dim \ker(\phi - \lambda \text{id}_V)$$

For a matrix $A$, this becomes:
$$\text{g.m.}(\lambda) = \dim E_A(\lambda) = \dim \ker(A - \lambda I)$$

## Key Properties
1. **Minimum Value**: If $\lambda$ is an eigenvalue, then $\text{g.m.}(\lambda) \geq 1$ (since there exists at least one non-zero eigenvector).

2. **Maximum Independent Eigenvectors**: $\text{g.m.}(\lambda)$ equals the maximum number of linearly independent eigenvectors with eigenvalue $\lambda$.

3. **Upper Bound**: $\text{g.m.}(\lambda) \leq \text{a.m.}(\lambda)$ for any eigenvalue $\lambda$.

4. **Basis Dimension**: $\text{g.m.}(\lambda)$ is the number of basis vectors needed for $E_\phi(\lambda)$.

## Examples
### Example 1: Simple Diagonal Matrix
For $D = \text{diag}(2, 2, 3)$:
- $E_D(2) = \text{span}\{e_1, e_2\}$, so $\text{g.m.}(2) = 2$
- $E_D(3) = \text{span}\{e_3\}$, so $\text{g.m.}(3) = 1$

### Example 2: Non-Diagonal Matrix
For $A = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$:
- Eigenvalue: $\lambda = 3$ (with $\text{a.m.}(3) = 2$)
- Eigenspace: Solve $(A - 3I)v = 0$:
  $$\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = 0 \Rightarrow y = 0$$
- $E_A(3) = \text{span}\{\begin{pmatrix} 1 \\ 0 \end{pmatrix}\}$
- Therefore: $\text{g.m.}(3) = 1 < \text{a.m.}(3) = 2$

### Example 3: Reflection Operator
For reflection across a line $L$ in $\mathbb{R}^2$:
- Eigenvalue 1: $\text{g.m.}(1) = 1$ (all vectors in $L$)
- Eigenvalue -1: $\text{g.m.}(-1) = 1$ (all vectors perpendicular to $L$)
- Total: $\text{g.m.}(1) + \text{g.m.}(-1) = 2 = \dim \mathbb{R}^2$

### Example 4: Full Matrix Analysis
For $A = \begin{pmatrix} 5 & 1 & 0 \\ 0 & 5 & 1 \\ 0 & 0 & 5 \end{pmatrix}$:
- Characteristic polynomial: $(t-5)^3$
- $\text{a.m.}(5) = 3$
- Solve $(A - 5I)v = 0$: gives 1-dimensional eigenspace
- $\text{g.m.}(5) = 1$

## Computing Geometric Multiplicity
To find $\text{g.m.}(\lambda)$:
1. Form the matrix $A - \lambda I$
2. Solve the homogeneous system $(A - \lambda I)v = 0$
3. Find a basis for the solution space (null space)
4. Count the number of basis vectors

## Relationship to Algebraic Multiplicity
**Proposition 3.4.6**: For any eigenvalue $\lambda$:
$$1 \leq \text{g.m.}(\lambda) \leq \text{a.m.}(\lambda)$$

**Proof Outline**: The proof uses a cleverly constructed basis where the first $k$ vectors span $E_\phi(\lambda)$, leading to a block-triangular matrix representation.

## Role in Diagonalisation
**Theorem 3.4.7**: An operator is diagonalisable if and only if:
1. The characteristic polynomial factors completely, and
2. $\text{g.m.}(\lambda) = \text{a.m.}(\lambda)$ for all eigenvalues $\lambda$

When $\text{g.m.}(\lambda) < \text{a.m.}(\lambda)$, there's a "deficiency" of eigenvectors that prevents diagonalisation.

## Geometric Interpretation
- Geometric multiplicity measures the actual dimension of the invariant subspace
- It represents the "real capacity" for independent directions with a given scaling factor
- The geometric multiplicity tells us how many independent directions behave identically under the transformation

## Examples of Multiplicity Analysis
### Diagonalisable Case
$A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix}$:
- $\text{g.m.}(1) = 1 = \text{a.m.}(1)$
- $\text{g.m.}(2) = 2 = \text{a.m.}(2)$
- Therefore diagonalisable

### Non-Diagonalisable Case
$B = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$:
- $\text{a.m.}(0) = 3$
- $\text{g.m.}(0) = 1$ (only $e_1$ is an eigenvector)
- Not diagonalisable due to deficiency

## Computing in Practice
For a matrix $A$ and eigenvalue $\lambda$:
```
1. Compute A - λI
2. Row reduce to find rank
3. Apply rank-nullity: dim(null space) = n - rank
4. This dimension is g.m.(λ)
```

## Applications
1. **Determining Diagonalisability**: Essential criterion alongside algebraic multiplicity

2. **Constructing Eigenbases**: Geometric multiplicity tells us how many eigenvectors to find

3. **Understanding Defective Matrices**: When g.m. < a.m., the matrix is defective

4. **Generalized Eigenvectors**: In Jordan form, g.m. determines the number of Jordan blocks

## Relationship to Invariant Subspaces
The eigenspace $E_\phi(\lambda)$ is the largest invariant subspace on which $\phi$ acts as multiplication by $\lambda$. Its dimension is the geometric multiplicity.

## Related Theorems
1. **Rank-Nullity Theorem**: Used in computing geometric multiplicity

2. **Sum of Geometric Multiplicities**: For diagonalisable operators, equals the dimension of the space

3. **Eigenspace Decomposition**: When diagonalisable, $V = \bigoplus_{\lambda} E_\phi(\lambda)$

## Related Concepts
- [[Algebraic Multiplicity]]: Upper bound for geometric multiplicity
- [[Eigenspace]]: The vector space whose dimension is geometric multiplicity
- [[Diagonalisation]]: Process requiring g.m. = a.m. for all eigenvalues
- [[Rank-Nullity Theorem]]: Tool for computing geometric multiplicity
- [[Jordan Normal Form]]: Used when geometric multiplicity falls short

## Notes
- Geometric multiplicity is a concrete, computable quantity
- It's always bounded above by algebraic multiplicity
- The equality of these multiplicities is the key to diagonalisability
- Understanding geometric multiplicity is essential for advanced topics like Jordan form
- It provides geometric insight into the structure of linear transformations
