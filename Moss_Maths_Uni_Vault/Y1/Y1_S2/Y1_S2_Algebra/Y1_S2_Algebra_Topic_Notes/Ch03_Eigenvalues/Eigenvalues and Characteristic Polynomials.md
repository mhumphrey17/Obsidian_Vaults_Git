---
title: "Eigenvalues and Characteristic Polynomials"
aliases: ["Topic: Eigenvalues", "Section 3.1 Summary"]
tags: ["topic", "algebra-s2", "ch-3", "sec-3-1"]
concepts: ["Eigenvalue", "Eigenvector", "Characteristic Polynomial", "Similar Matrices"]
---

# Eigenvalues and Characteristic Polynomials

## Overview
Eigenvalues and eigenvectors are fundamental concepts in linear algebra that reveal the intrinsic properties of linear transformations. This section introduces these concepts for square matrices and establishes the crucial connection between eigenvalues and the roots of the characteristic polynomial.

## Key Concepts
- **[[Eigenvalue]]**: A scalar $\lambda \in \mathbb{F}$ such that there exists a non-zero vector $\mathbf{v}$ with $A\mathbf{v} = \lambda\mathbf{v}$
- **[[Eigenvector]]**: A non-zero vector $\mathbf{v}$ satisfying $A\mathbf{v} = \lambda\mathbf{v}$ for some scalar $\lambda$
- **[[Characteristic Polynomial]]**: $\Delta_A(t) = \det(A - tI)$, whose roots are precisely the eigenvalues of $A$

## Fundamental Results
1. **Eigenvalue-Root Connection (Proposition 3.1.4)**: The eigenvalues of $A \in M_{n,n}(\mathbb{F})$ are exactly the roots of its characteristic polynomial in $\mathbb{F}$.

2. **Scalar Multiple Property**: If $\mathbf{v}$ is an eigenvector with eigenvalue $\lambda$, then $a\mathbf{v}$ (for $a \neq 0$) is also an eigenvector with the same eigenvalue.

3. **Characteristic Polynomial Properties (Lemma 3.1.5)**:
   - Degree: $n$ (for an $n \times n$ matrix)
   - Leading coefficient: $(-1)^n$
   - Maximum eigenvalues: $n$ (counting multiplicities)

4. **Similarity Invariance (Lemma 3.1.6)**: Similar matrices have identical characteristic polynomials and therefore the same eigenvalues.

## Core Examples
### Example 1: Identity Matrix
The identity matrix $I$ has:
- All vectors as eigenvectors
- Eigenvalue 1 (with algebraic multiplicity $n$)
- Characteristic polynomial: $(1-t)^n$

### Example 2: Null Space Connection
If $\mathbf{v} \in \ker(A)$ and $\mathbf{v} \neq 0$, then:
- $\mathbf{v}$ is an eigenvector with eigenvalue 0
- 0 is an eigenvalue if and only if $A$ is not invertible

### Example 3: Diagonal Matrices
For $A = \text{diag}(\lambda_1, \lambda_2, \ldots, \lambda_n)$:
- Standard basis vectors are eigenvectors
- Eigenvalues are the diagonal entries
- Characteristic polynomial: $\prod_{i=1}^n (\lambda_i - t)$

### Example 4: Computational Illustration
For $A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}$:

1. **Characteristic polynomial**: 
   $\Delta_A(t) = \det\begin{pmatrix} 1-t & 3 \\ 3 & 1-t \end{pmatrix} = (1-t)^2 - 9 = t^2 - 2t - 8 = (t-4)(t+2)$

2. **Eigenvalues**: $\lambda_1 = 4$, $\lambda_2 = -2$

3. **Finding eigenvectors**:
   - For $\lambda = 4$: Solve $(A-4I)\mathbf{v} = 0$ to get $\mathbf{v} = c\begin{pmatrix} 1 \\ 1 \end{pmatrix}$
   - For $\lambda = -2$: Solve $(A+2I)\mathbf{v} = 0$ to get $\mathbf{v} = c\begin{pmatrix} 1 \\ -1 \end{pmatrix}$

## Computational Methods
### Finding Eigenvalues:
1. Compute $\Delta_A(t) = \det(A - tI)$
2. Factor the polynomial
3. Find roots in the field $\mathbb{F}$

### Finding Eigenvectors:
1. For each eigenvalue $\lambda$
2. Solve $(A - \lambda I)\mathbf{v} = 0$
3. Find a basis for the null space

## Theoretical Significance
- **Matrix Invertibility**: $A$ is invertible if and only if 0 is not an eigenvalue
- **Similarity Invariance**: Eigenvalues are preserved under similarity transformations
- **Field Dependence**: The set of eigenvalues depends on the underlying field
- **Polynomial Connection**: Eigenvalue theory links linear algebra to polynomial algebra

## Applications
1. **Stability Analysis**: In dynamical systems, eigenvalues determine stability
2. **Quantum Mechanics**: Observable quantities correspond to eigenvalues
3. **Principal Component Analysis**: Finding principal directions
4. **Differential Equations**: Solutions often expressed in terms of eigenvectors

## Bridge to Further Topics
This section lays the groundwork for:
1. **Section 3.2**: Extension to abstract linear operators
2. **Section 3.3**: Diagonalisation of matrices
3. **Section 3.4**: Multiplicities and complete diagonalisation criteria
4. **Advanced Linear Algebra**: Spectral theory and Jordan normal form

## Key Insights
- Eigenvalues reveal the "natural scaling factors" of a linear transformation
- The characteristic polynomial encodes essential information about a matrix
- Eigenvectors represent directions that remain invariant (up to scaling)
- Similarity preserves eigenvalues, making them fundamental invariants
- The connection between eigenvalues and polynomial roots is both elegant and computationally useful

## Practice Problems
- Compute eigenvalues and eigenvectors for various $2 \times 2$ matrices
- Verify the characteristic polynomial formula for specific examples
- Explore how changing the field affects the eigenvalue set
- Investigate the relationship between eigenvalues and determinant/trace

## Notes
- The characteristic polynomial provides an algebraic approach to finding eigenvalues
- Computing eigenvalues reduces to polynomial root-finding
- For large matrices, numerical methods are essential
- The concept extends naturally to linear operators on abstract vector spaces
- Understanding eigenvalues is crucial for many advanced topics in mathematics and applications
