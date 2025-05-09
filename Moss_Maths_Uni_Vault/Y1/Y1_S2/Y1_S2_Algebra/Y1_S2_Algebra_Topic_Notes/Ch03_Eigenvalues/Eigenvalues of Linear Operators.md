---
title: "Eigenvalues of Linear Operators"
aliases: ["Topic: Linear Operator Eigenvalues", "Section 3.2 Summary"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "topic", "Y1_S2_Algebra_ch-3_sec-3-2", "linear-operator", "eigenvalue", "lambda-eigenspace", "characteristic-polynomial", "basis-independence", "eigenvector", "matrix-representation", "similar-matrices", "kernel", "subspace", "geometric-multiplicity", "diagonalisation", "vector-space", "linear-algebra"]
related_concepts: ["Linear Operator", "Eigenvalue", "Lambda-Eigenspace", "Characteristic Polynomial", "Basis Independence", "Eigenvector", "Matrix Representation", "Similar Matrices", "Kernel", "Subspace", "Geometric Multiplicity", "Diagonalisation", "Vector Space", "Field"]
---

# Eigenvalues of Linear Operators

## Overview
This section extends the concept of eigenvalues from matrices to abstract linear operators on vector spaces. It demonstrates that eigenvalues are intrinsic properties of linear transformations, independent of any particular matrix representation, and introduces the crucial concept of eigenspaces.

## Key Concepts
- **[[Eigenvalue (Linear Operator)]]**: A scalar $\lambda \in \mathbb{F}$ such that there exists non-zero $v \in V$ with $\phi(v) = \lambda v$
- **[[Lambda-Eigenspace]]**: $E_\phi(\lambda) = \{v \in V : \phi(v) = \lambda v\} = \ker(\phi - \lambda \text{id}_V)$
- **Characteristic Polynomial of an Operator**: $\Delta_\phi(t) = \det(\phi - t \text{id}_V)$ (computed using any matrix representation)
- **Basis Independence**: Eigenvalues and their multiplicities are independent of the choice of basis

## Fundamental Results
1. **Basis Independence (Lemma 3.2.2)**: If matrix $A$ represents operator $\phi$ with respect to some basis, then $\phi$ and $A$ have the same eigenvalues.

2. **Well-definedness**: The characteristic polynomial of an operator is well-defined because similar matrices have the same characteristic polynomial.

3. **Eigenspace Structure**: Each $\lambda$-eigenspace is a subspace of $V$, consisting of all $\lambda$-eigenvectors plus the zero vector.

## Illustrative Examples
### Example 1: Reflection Operator
For reflection in a line $L$ through the origin in $\mathbb{R}^2$:
- **Eigenvalue 1**: All vectors in $L$ (they remain unchanged)
- **Eigenvalue -1**: All vectors perpendicular to $L$ (they reverse direction)
- The operator has a simple eigenspace structure

### Example 2: Differential Operators
The differentiation operator $D = \frac{d}{dx}$ on $C^{\infty}(\mathbb{R})$:
- **Eigenfunctions**: $f(x) = e^{\lambda x}$ for any $\lambda \in \mathbb{C}$
- **Eigenvalues**: All complex numbers $\lambda$
- Each eigenspace is 1-dimensional, spanned by $e^{\lambda x}$

### Example 3: Second Derivative Operator
For $D^2 = \frac{d^2}{dx^2}$:
- **Eigenfunctions**: $\sin(\omega x)$ and $\cos(\omega x)$
- **Eigenvalue**: $-\omega^2$ for each $\omega$
- Each eigenspace (for $\omega \neq 0$) is 2-dimensional

## Abstract vs. Concrete Perspectives
### Advantages of the Operator Viewpoint:
1. **Geometric Insight**: Focuses on the transformation rather than its representation
2. **Basis Independence**: Eigenvalues are intrinsic properties
3. **Generality**: Applies to infinite-dimensional spaces
4. **Conceptual Clarity**: Separates the transformation from its coordinate description

### Connection to Matrix Representation:
- Any finite-dimensional operator can be represented by a matrix
- Eigenvalues are preserved under change of basis
- Computational methods still rely on matrix representations

## Computing Eigenvalues of Operators
1. Choose any basis for $V$
2. Find the matrix representation $A$ of $\phi$
3. Compute $\Delta_A(t) = \det(A - tI)$
4. Find roots of the characteristic polynomial
5. The eigenvalues are independent of the chosen basis

## Eigenspace Properties
### Key Properties:
1. **Subspace Structure**: $E_\phi(\lambda)$ is always a subspace
2. **Kernel Relationship**: $E_\phi(\lambda) = \ker(\phi - \lambda \text{id}_V)$
3. **Dimension**: $\dim E_\phi(\lambda)$ is the geometric multiplicity
4. **Basis Construction**: Any basis for $E_\phi(\lambda)$ consists of eigenvectors

### Examples with Different Dimensions:
- **1-dimensional**: Most common for "generic" operators
- **Multi-dimensional**: When eigenvalues have higher multiplicity
- **Full-dimensional**: When $\phi$ acts as scalar multiplication

## Applications
### 1. Physical Systems
- **Quantum Mechanics**: Energy eigenstates and eigenvalues
- **Vibration Analysis**: Normal modes and natural frequencies
- **Stability Theory**: Equilibrium analysis in dynamical systems

### 2. Mathematical Applications
- **Spectral Theory**: Foundation for advanced functional analysis
- **Differential Equations**: Solution techniques via eigenfunction expansion
- **Approximation Theory**: Basis functions in various function spaces

### 3. Data Analysis
- **Principal Component Analysis**: Finding principal directions
- **Signal Processing**: Frequency domain analysis
- **Network Analysis**: PageRank algorithm

## Bridge to Matrix Theory
The operator perspective provides:
- **Conceptual Foundation**: Understanding why certain properties hold
- **Unifying Framework**: Connects finite and infinite-dimensional cases
- **Geometric Intuition**: Visualizing transformations beyond coordinates

While matrix calculations provide:
- **Computational Methods**: Practical algorithms
- **Explicit Calculations**: Concrete numerical results
- **Implementation**: Computer-friendly representations

## Key Insights
1. **Intrinsic Nature**: Eigenvalues are properties of the transformation itself
2. **Basis Freedom**: Choice of coordinates doesn't affect eigenvalues
3. **Geometric Meaning**: Eigenspaces represent invariant directions
4. **Unifying Concept**: Bridges abstract algebra and concrete computation

## Theoretical Significance
- Establishes eigenvalues as basis-independent invariants
- Provides foundation for infinite-dimensional generalizations
- Shows connection between algebraic and geometric properties
- Enables abstract treatment of spectral theory

## Practice Problems
1. Find eigenvalues of rotation operators at various angles
2. Determine eigenspaces for projection operators
3. Analyze eigenstructure of differentiation operators on different function spaces
4. Verify basis independence for specific examples

## Summary
The extension from matrices to operators reveals that eigenvalues are fundamental properties of linear transformations, independent of coordinate choices. The eigenspace concept provides a natural way to organize eigenvectors and understand the geometric structure of linear operators. This abstract viewpoint, while maintaining computational connection through matrix representations, opens doors to more advanced spectral theory and infinite-dimensional applications.
