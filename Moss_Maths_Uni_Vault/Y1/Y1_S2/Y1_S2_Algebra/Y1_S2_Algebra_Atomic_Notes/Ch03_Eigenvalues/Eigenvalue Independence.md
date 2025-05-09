---
title: "Eigenvalue Independence"
aliases: ["Eigenvector Independence", "Distinct Eigenvalue Independence", "Eigenspace Independence"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "concept"]
related_concepts: ["Linear Independence", "Eigenvalue", "Eigenvector", "Diagonalisation"]
---

# Eigenvalue Independence

## Main Theorem
**Theorem 3.4.2**: If $v_1, v_2, \ldots, v_m$ are eigenvectors of a linear operator $\phi: V \rightarrow V$ with distinct eigenvalues $\lambda_1, \lambda_2, \ldots, \lambda_m$, then $v_1, v_2, \ldots, v_m$ are linearly independent.

This is one of the most important results in eigenvalue theory and forms the foundation for diagonalisation.

## Proof Outline
The proof uses proof by contradiction:
1. Assume there's a shortest linear dependence among eigenvectors with distinct eigenvalues
2. Apply $\phi$ to this dependence relation
3. Apply the largest eigenvalue to the dependence relation
4. Subtract the results to get a shorter dependence
5. This contradicts the assumption of a shortest dependence

The key insight is that eigenvectors with different eigenvalues respond differently to the linear operator, preventing linear dependence.

## Key Implications
1. **Maximum Count**: If $V$ has dimension $n$ and all eigenvalues are distinct, then we automatically have $n$ linearly independent eigenvectors, forming a basis.

2. **Diagonalisation Guarantee**: If an $n \times n$ matrix has $n$ distinct eigenvalues, it's automatically diagonalisable.

3. **Eigenspace Independence**: Eigenspaces corresponding to different eigenvalues are independent subspaces.

## Examples
### Example 1: Simple Case
For $A = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$:
- Eigenvalue 1: eigenvector $e_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$
- Eigenvalue 2: eigenvector $e_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$
- Since eigenvalues are distinct, $e_1$ and $e_2$ are automatically independent

### Example 2: More Complex Case
For $A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}$:
- Eigenvalue 4: eigenvector $v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$
- Eigenvalue -2: eigenvector $v_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$
- By the theorem, $v_1$ and $v_2$ are independent (which we can verify: neither is a scalar multiple of the other)

### Example 3: Three Distinct Eigenvalues
For $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$:
- Three distinct eigenvalues: 1, 2, 3
- Corresponding eigenvectors: $e_1, e_2, e_3$
- These form a linearly independent set (and a basis)

## Extended Version
The theorem extends to unions of linearly independent sets from different eigenspaces:

If $\alpha_i$ is a linearly independent set in $E_\phi(\lambda_i)$ for distinct eigenvalues $\lambda_1, \ldots, \lambda_k$, then $\alpha_1 \cup \alpha_2 \cup \cdots \cup \alpha_k$ is linearly independent.

This allows us to construct eigenbases by combining bases from different eigenspaces.

## Connection to Diagonalisation
**Corollary 3.4.3**: Let $n = \dim V$ and $\phi: V \rightarrow V$ be linear. If the characteristic polynomial factors as:
$$\Delta_\phi(t) = (\lambda_1 - t)(\lambda_2 - t) \cdots (\lambda_n - t)$$
with all $\lambda_i$ distinct, then $\phi$ is diagonalisable.

This follows directly from the independence theorem: we get $n$ independent eigenvectors in an $n$-dimensional space, forming a basis.

## Why Independence Matters
1. **Basis Construction**: Independent eigenvectors can form part of a basis

2. **Dimension Counting**: Helps verify when we have enough eigenvectors for diagonalisation

3. **Subspace Structure**: Shows that eigenspaces with different eigenvalues have trivial intersection

4. **Computational Efficiency**: Ensures uniqueness of eigenvector expansions

## Geometric Interpretation
- Eigenvectors with different eigenvalues point in "truly different" directions
- No eigenspace can "overlap" with another eigenspace
- The direct sum $E_\phi(\lambda_1) \oplus E_\phi(\lambda_2) \oplus \cdots$ is always well-defined

## Applications
1. **Diagonalisation**: Guarantees sufficient eigenvectors when all eigenvalues are distinct

2. **Numerical Stability**: Helps ensure well-conditioned eigenvector computations

3. **Theoretical Framework**: Foundation for more advanced spectral theory

4. **Physical Systems**: In quantum mechanics, observables with different eigenvalues correspond to orthogonal states

## Limitations
The theorem only applies to eigenvectors with distinct eigenvalues. When eigenvalues are repeated:
- Eigenvectors within the same eigenspace may be dependent
- We need geometric multiplicity = algebraic multiplicity for diagonalisation

## Related Results
1. **Schur's Theorem**: Every matrix is similar to an upper triangular matrix (weaker than diagonalisation)

2. **Spectral Theorem**: For normal matrices, eigenvectors can be chosen orthogonal

3. **Principal Axis Theorem**: For symmetric real matrices, eigenvectors are orthogonal

## Related Concepts
- [[Linear Independence]]: The general concept being applied
- [[Diagonalisation]]: The main application of this result
- [[Eigenspace]]: Where we find eigenvectors
- [[Algebraic Multiplicity]]: Determines when eigenvalues are distinct
- [[Change of Basis]]: Constructing the diagonalising matrix

## Notes
- This theorem is fundamental to understanding why diagonalisation works
- It shows that eigenvalue distinctness is a strong condition
- The proof technique (using operator action to create contradictions) is widely applicable
- Independence is automatic when eigenvalues are distinct - no need to check
- This result makes the connection between algebra (eigenvalues) and geometry (independence) crystal clear
