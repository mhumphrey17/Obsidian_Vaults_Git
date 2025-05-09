---
title: "Diagonalisable Linear Operator"
aliases: ["Diagonalizable Linear Operator", "Diagonalisable Operator"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "concept", "linear-operator", "eigenbasis", "matrix-representation", "diagonalisation", "eigenvalue", "eigenspace", "algebraic-multiplicity", "geometric-multiplicity", "linear-algebra"]
related_concepts: ["Linear Operator", "Eigenbasis", "Matrix Representation", "Diagonalisation", "Eigenvalue", "Eigenspace", "Algebraic Multiplicity", "Geometric Multiplicity", "Field", "Vector Space"]
---

# Diagonalisable Linear Operator

## Definition
A linear operator $\phi: V \rightarrow V$ is diagonalisable if there is a basis $\alpha$ of $V$ consisting of eigenvectors of $\phi$.

Such a basis $\alpha$ is called an eigenbasis of $V$ (associated to $\phi$).

## Equivalent Formulations
A linear operator $\phi: V \rightarrow V$ is diagonalisable if and only if:
1. There exists a basis $\alpha$ such that $\phi$ is represented by a diagonal matrix with respect to $\alpha$
2. $V$ has a basis consisting entirely of eigenvectors of $\phi$
3. The sum of the dimensions of all eigenspaces equals $\dim V$

## Connection to Matrix Diagonalisation
**Proposition 3.3.3**: Suppose that $A$ represents $\phi$ with respect to some basis $\beta$ of $V$. Then $\phi$ is diagonalisable if and only if $A$ is diagonalisable.

This means the concept of diagonalisation is consistent between operators and their matrix representations.

## Key Properties
1. **Diagonal Representation**: If $\phi$ is diagonalisable with eigenbasis $v_1, \ldots, v_n$ and corresponding eigenvalues $\lambda_1, \ldots, \lambda_n$, then:
   $$[\phi]_\alpha = \begin{pmatrix} \lambda_1 & & 0 \\ & \ddots & \\ 0 & & \lambda_n \end{pmatrix}$$

2. **Basis Independence**: The property of being diagonalisable is intrinsic to the operator, not dependent on any particular representation.

3. **Eigenspace Decomposition**: If diagonalisable:
   $$V = E_\phi(\lambda_1) \oplus E_\phi(\lambda_2) \oplus \cdots \oplus E_\phi(\lambda_k)$$
   where $\lambda_1, \ldots, \lambda_k$ are the distinct eigenvalues.

## Examples
### Example 1: Linear Transformation on ℝ²
Consider the linear operator $\phi: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ represented by:
$$A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}$$

With eigenvectors $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$, the operator is diagonalisable.

### Example 2: Differential Operator
The differentiation operator $D: C^{\infty}(\mathbb{R}) \rightarrow C^{\infty}(\mathbb{R})$ defined by $D(f) = f'$ has:
- Eigenfunctions: $e^{\lambda x}$ for any $\lambda \in \mathbb{C}$
- Eigenvalues: $\lambda$ (since $D(e^{\lambda x}) = \lambda e^{\lambda x}$)

While this operator has infinitely many eigenvectors, the concept of diagonalisation extends to certain infinite-dimensional settings.

### Example 3: Reflection Operator
The reflection in a line through the origin in $\mathbb{R}^2$:
- Eigenvalue 1: Vectors along the line of reflection
- Eigenvalue -1: Vectors perpendicular to the line
- Eigenbasis: Any basis with one vector along the line and one perpendicular

## Diagonalisation Process
To determine if $\phi: V \rightarrow V$ is diagonalisable:
1. Find all eigenvalues of $\phi$
2. For each eigenvalue $\lambda_i$, find a basis for $E_\phi(\lambda_i)$
3. Check if the union of these bases has $\dim V$ vectors
4. If yes, this union forms an eigenbasis, and $\phi$ is diagonalisable

## Applications
1. **Simplifying Computations**: Powers and polynomials of $\phi$ are easier to compute

2. **Understanding Dynamics**: In discrete dynamical systems, diagonalisation reveals the behavior along different directions

3. **Spectral Theory**: Foundation for more advanced topics in functional analysis

4. **Quantum Mechanics**: Observables are represented by diagonalisable operators (in appropriate settings)

## Necessary and Sufficient Conditions
**Theorem 3.4.7**: A linear operator $\phi: V \rightarrow V$ is diagonalisable if and only if:
1. The characteristic polynomial $\Delta_\phi(t)$ is a product of linear factors, and
2. For each eigenvalue $\lambda$, the algebraic multiplicity equals the geometric multiplicity

## Relationship Between Operators and Matrices
**Key Result**: If $\phi$ is diagonalisable and $A$ is any matrix representation of $\phi$, then $A$ is diagonalisable. Conversely, if $A$ is diagonalisable and represents $\phi$, then $\phi$ is diagonalisable.

This establishes a perfect correspondence between diagonalisable operators and diagonalisable matrices.

## Related Theorems
1. **Proposition 3.3.3**: Diagonalisability is preserved under change of representation.

2. **Theorem 3.4.2**: Eigenvectors corresponding to distinct eigenvalues are linearly independent.

3. **Theorem 3.4.7**: Complete characterisation in terms of multiplicities.

## Related Concepts
- [[Eigenbasis]]: The basis consisting of eigenvectors
- [[Linear Operator]]: The function being diagonalised
- [[Matrix Representation]]: How we computationally work with operators
- [[Eigenvalue]]: Entries in the diagonal representation
- [[Eigenspace]]: Building blocks for the eigenspace decomposition

## Notes
- Diagonalisability is a highly desirable property that simplifies many calculations
- Not all operators are diagonalisable (those that aren't are sometimes called "defective")
- Over algebraically closed fields like $\mathbb{C}$, more operators are diagonalisable
- The concept extends to normal operators in inner product spaces
- Diagonalisation reveals the "natural directions" of a linear transformation
