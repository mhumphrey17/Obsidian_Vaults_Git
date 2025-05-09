---
title: "Determinant of a Linear Operator"
aliases: ["operator determinant", "linear transformation determinant"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-2", "concept", "determinant", "linear-operator", "matrix-representation", "similar-matrices", "eigenvalue", "linear-algebra"]
related_concepts: ["Determinant", "Linear Operator", "Matrix Representation", "Similar Matrices", "Eigenvalue", "Field"]
---

# Determinant of a Linear Operator

## Definition
For a linear operator $\phi: V \rightarrow V$ on a finite-dimensional vector space $V$, the determinant of $\phi$ is defined as:

$$\det \phi = \det A$$

where $A$ is any matrix that represents $\phi$ with respect to some basis of $V$.

## Well-Definedness
The determinant of a linear operator is well-defined (independent of the chosen basis) because:

1. If $A$ and $B$ are two matrices representing the same linear operator $\phi$ with respect to different bases, then $A$ and $B$ are similar matrices.

2. Similar matrices have the same determinant, i.e., if $B = P^{-1}AP$ for some invertible matrix $P$, then $\det(B) = \det(A)$.

Therefore, $\det \phi$ is invariant under change of basis and is a fundamental property of the linear operator itself, not of its specific matrix representation.

## Properties
1. **Multiplicativity**: For linear operators $\phi, \psi: V \rightarrow V$:
   $$\det(\phi \circ \psi) = \det(\phi) \cdot \det(\psi)$$

2. **Identity Operator**: For the identity operator $I_V: V \rightarrow V$:
   $$\det(I_V) = 1$$

3. **Invertibility**: A linear operator $\phi$ is invertible if and only if $\det(\phi) \neq 0$.

4. **Determinant of Inverse**: If $\phi$ is invertible, then:
   $$\det(\phi^{-1}) = \frac{1}{\det(\phi)}$$

5. **Eigenvalues Relation**: The determinant of $\phi$ equals the product of its eigenvalues (counted with algebraic multiplicities).

## Examples
### Example 1: Rotation in $\mathbb{R}^2$
Consider the linear operator $R_\theta: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ that rotates vectors counterclockwise by angle $\theta$.

The matrix representation with respect to the standard basis is:
$$A = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

The determinant is:
$$\det(R_\theta) = \det(A) = \cos^2\theta + \sin^2\theta = 1$$

This confirms that rotation preserves area, as the determinant equals 1.

### Example 2: Scaling Operator
Consider the linear operator $S: \mathbb{R}^n \rightarrow \mathbb{R}^n$ that scales each coordinate by a factor $\lambda_i$:
$$S(x_1, x_2, \ldots, x_n) = (\lambda_1 x_1, \lambda_2 x_2, \ldots, \lambda_n x_n)$$

The matrix representation is diagonal:
$$A = \begin{pmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{pmatrix}$$

The determinant is:
$$\det(S) = \det(A) = \lambda_1 \cdot \lambda_2 \cdot \ldots \cdot \lambda_n$$

This represents the factor by which $n$-dimensional volumes are scaled under the transformation.

## Applications
1. **Volume Transformation**: $|\det(\phi)|$ represents the factor by which the operator scales volumes.

2. **Orientation Preservation**: The sign of $\det(\phi)$ indicates whether the operator preserves orientation ($\det(\phi) > 0$) or reverses it ($\det(\phi) < 0$).

3. **Invariant Characterization**: The determinant provides an invariant that helps characterize and classify linear operators.

4. **Systems of Differential Equations**: Used in analyzing the behavior of systems of linear differential equations.

5. **Quantum Mechanics**: Important in various quantum mechanical operators and transformations.

## Related Concepts
- [[Linear Operator]]: The mathematical object whose determinant we are computing
- [[Matrix Representation]]: Used to define the determinant of a linear operator
- [[Similar Matrices]]: Matrices representing the same linear operator with respect to different bases
- [[Eigenvalues]]: Their product equals the determinant of the operator
- [[Determinant]]: The underlying concept applied to linear operators
