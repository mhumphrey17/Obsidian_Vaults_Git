---
title: "Diagonalisation"
aliases: ["Topic: Diagonalisation", "Section 3.3 Summary"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "topic", "Y1_S2_Algebra_ch-3_sec-3-3", "diagonalisation", "eigenbasis", "matrix-powers", "similarity", "eigenvalue", "eigenvector", "matrix-representation", "change-of-basis", "jordan-normal-form", "schur-decomposition", "spectral-theorem", "linear-algebra", "vector-space"]
related_concepts: ["Diagonalisable Matrix", "Diagonalisable Linear Operator", "Eigenbasis", "Matrix Powers via Diagonalisation", "Similar Matrices", "Eigenvalue", "Eigenvector", "Matrix Representation", "Change of Basis Matrix", "Jordan Normal Form", "Schur Decomposition", "Spectral Theorem", "Vector Space", "Field"]
---

# Diagonalisation

## Overview
Diagonalisation is the process of finding a basis consisting entirely of eigenvectors, which allows a linear transformation to be represented by a diagonal matrix. This simplifies many computations and reveals the fundamental structure of linear transformations.

## Key Concepts
- **[[Diagonalisable Matrix]]**: A matrix $A$ is diagonalisable if there exists invertible $P$ such that $P^{-1}AP = D$ (diagonal)
- **[[Diagonalisable Linear Operator]]**: An operator $\phi$ is diagonalisable if there exists a basis of eigenvectors
- **[[Eigenbasis]]**: A basis consisting entirely of eigenvectors
- **[[Matrix Powers via Diagonalisation]]**: Efficient computation of $A^n$ using diagonalisation

## Fundamental Results
1. **Equivalence of Definitions**: A matrix is diagonalisable if and only if it has a basis of eigenvectors (Remark 3.3.2)

2. **Operator-Matrix Connection**: An operator is diagonalisable if and only if any of its matrix representations is diagonalisable (Proposition 3.3.3)

3. **Diagonalisation Formula**: If $A = PDP^{-1}$ with $D$ diagonal, then the columns of $P$ are eigenvectors and diagonal entries of $D$ are eigenvalues

4. **Matrix Powers**: $A^k = PD^kP^{-1}$ where $D^k$ is trivial to compute

## Core Examples
### Example 1: Standard Diagonalisation
For $A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}$:
- Eigenvalues: $\lambda_1 = 4$, $\lambda_2 = -2$
- Eigenvectors: $v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$, $v_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$
- Diagonalisation: $P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, $D = \begin{pmatrix} 4 & 0 \\ 0 & -2 \end{pmatrix}$

### Example 2: Field Dependence
The rotation matrix $A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$:
- Over $\mathbb{R}$: Not diagonalisable (no real eigenvalues)
- Over $\mathbb{C}$: Diagonalisable with eigenvalues $\pm i$

### Example 3: Non-Diagonalisable Matrix
For $B = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$:
- Eigenvalue: $\lambda = 3$ (algebraic multiplicity 2)
- Eigenspace: 1-dimensional
- Cannot find 2 independent eigenvectors, hence not diagonalisable

## Diagonalisation Process
### Step-by-Step Method:
1. Find all eigenvalues by solving $\det(A - \lambda I) = 0$
2. For each eigenvalue, find a basis for its eigenspace
3. Check if total number of eigenvectors equals dimension
4. If yes, form $P$ with eigenvectors as columns
5. Verify: $P^{-1}AP = D$ where $D$ has eigenvalues on diagonal

## Applications of Diagonalisation
### 1. Fibonacci Sequence
The recurrence $F_{n+2} = F_{n+1} + F_n$ can be written as:
$$\begin{pmatrix} F_{n+1} \\ F_{n+2} \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} F_n \\ F_{n+1} \end{pmatrix}$$

Diagonalising the matrix gives the closed formula:
$$F_n = \frac{1}{\sqrt{5}}\left[\left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n\right]$$

### 2. Matrix Powers
For $A = PDP^{-1}$:
$$A^n = PD^nP^{-1} = P\begin{pmatrix} \lambda_1^n & 0 & \cdots \\ 0 & \lambda_2^n & \cdots \\ \vdots & \vdots & \ddots \end{pmatrix}P^{-1}$$

This transforms a difficult computation into a simple one.

### 3. Long-term Behavior
When $|\lambda_1| > |\lambda_2| \geq \ldots$, the long-term behavior is dominated by the largest eigenvalue:
$$A^n \approx \lambda_1^n v_1 w_1^T$$

## Geometric Interpretation
- **Natural Coordinates**: Eigenspaces provide "natural" coordinate directions
- **Scaling Directions**: Each eigenvector represents a pure scaling direction
- **Invariant Subspaces**: Eigenspaces are invariant under the transformation
- **Simplest Form**: Diagonal matrices represent the simplest possible transformations

## Theoretical Significance
1. **Structural Insight**: Reveals the fundamental structure of linear transformations
2. **Computational Power**: Simplifies otherwise difficult calculations
3. **Spectral Theory**: Foundation for more advanced eigenvalue theorems
4. **Classification**: Helps classify linear transformations up to similarity

## Conditions for Diagonalisability
A matrix/operator is diagonalisable if and only if:
1. It has a complete set of eigenvectors, or
2. The sum of geometric multiplicities equals the dimension, or
3. For each eigenvalue, geometric = algebraic multiplicity

## Limitations and Extensions
### When Diagonalisation Fails:
- **Complex Eigenvalues**: May be avoided over $\mathbb{R}$
- **Repeated Eigenvalues**: Insufficient eigenvectors
- **Defective Matrices**: Geometric < algebraic multiplicity

### Beyond Diagonalisation:
- **Jordan Normal Form**: Handles non-diagonalisable matrices
- **Schur Decomposition**: Upper triangular form
- **Spectral Theorem**: Orthogonal diagonalisation for normal matrices

## Practical Considerations
### Computational Aspects:
1. Finding eigenvalues requires solving polynomial equations
2. Computing eigenvectors involves solving linear systems
3. Numerical stability can be an issue
4. Symbolic computation may be necessary for exact results

### Applications Requiring Diagonalisation:
1. **Physical Systems**: Mode shapes and natural frequencies
2. **Data Analysis**: Principal component analysis
3. **Differential Equations**: Solution methods
4. **Markov Chains**: Steady-state analysis

## Key Insights
1. **Basis Choice**: The "right" basis makes transformations simple
2. **Structure Revelation**: Diagonalisation reveals hidden structure
3. **Computational Efficiency**: Transforms hard problems into easy ones
4. **Universality**: Applies across mathematics, physics, and engineering

## Bridge to Advanced Topics
- **Spectral Theory**: Foundation for infinite-dimensional generalizations
- **Matrix Functions**: $f(A)$ computed via $f(D)$
- **Quantum Mechanics**: Observable operators and energy states
- **Graph Theory**: Spectral graph theory

## Summary
Diagonalisation represents the culmination of eigenvalue theory, providing a method to find the "natural" coordinate system for a linear transformation. When possible, it reduces complex linear transformations to their simplest form - diagonal matrices. This simplification has profound implications for both theoretical understanding and practical computation, making diagonalisation one of the most powerful tools in linear algebra.
