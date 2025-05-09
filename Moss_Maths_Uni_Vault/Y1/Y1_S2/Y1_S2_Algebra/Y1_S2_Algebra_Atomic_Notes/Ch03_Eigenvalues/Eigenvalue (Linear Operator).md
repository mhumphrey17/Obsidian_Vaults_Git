---
title: "Eigenvalue (Linear Operator)"
aliases: ["Eigenvalues of Linear Operators", "Operator Eigenvalue"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "concept", "linear-operator", "eigenvalue", "eigenvector", "matrix-representation", "characteristic-polynomial", "lambda-eigenspace", "diagonalisation", "linear-algebra"]
related_concepts: ["Linear Operator", "Eigenvalue", "Eigenvector", "Matrix Representation", "Characteristic Polynomial", "λ-Eigenspace", "Diagonalisation", "Field", "Vector Space"]
---

# Eigenvalue (Linear Operator)

## Definition
Let $V$ be a vector space over $\mathbb{F}$, and $\phi: V \rightarrow V$ a linear operator.

A scalar $\lambda \in \mathbb{F}$ is an eigenvalue of $\phi$ if there is a non-zero $v \in V$ such that:

$$\phi(v) = \lambda v$$

In this case, $v$ is called an eigenvector of $\phi$ with eigenvalue $\lambda$ or a $\lambda$-eigenvector.

## Key Properties
1. **Matrix Connection**: If $\phi$ is represented by matrix $A$ with respect to some basis, then $\phi$ and $A$ have the same eigenvalues.

2. **Basis Independence**: The eigenvalues of a linear operator are independent of the choice of basis.

3. **Characteristic Polynomial**: The characteristic polynomial of $\phi$ is defined as:
   $$\Delta_\phi(t) = \det(\phi - t \text{id}_V)$$
   where the determinant is computed using any matrix representation of $\phi$.

4. **Well-defined**: The characteristic polynomial is well-defined because similar matrices have the same determinant.

## Examples
### Example 1: Reflection in a Line
Let $\phi: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ be reflection in a line $L$ through the origin:
- For $\mathbf{w} \in L$: $\phi(\mathbf{w}) = \mathbf{w}$, so $\mathbf{w}$ is an eigenvector with eigenvalue 1
- For $\mathbf{v} \perp L$: $\phi(\mathbf{v}) = -\mathbf{v}$, so $\mathbf{v}$ is an eigenvector with eigenvalue -1

### Example 2: Rotation in ℝ²
Let $\phi: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ be rotation by angle $\theta \neq k\pi$:
- Over $\mathbb{R}$: No eigenvalues (no real vectors maintain their direction under rotation)
- Over $\mathbb{C}$: Eigenvalues are $e^{i\theta}$ and $e^{-i\theta}$

### Example 3: Differential Operator
Consider the differentiation operator $\frac{d}{dx}: C^{\infty}(\mathbb{R}) \rightarrow C^{\infty}(\mathbb{R})$:
- $f(x) = e^{\lambda x}$ satisfies $\frac{d}{dx}(e^{\lambda x}) = \lambda e^{\lambda x}$
- Therefore, $e^{\lambda x}$ is an eigenfunction (eigenvector) with eigenvalue $\lambda$

### Example 4: Second Derivative Operator
For $\frac{d^2}{dx^2}: C^{\infty}(\mathbb{R}) \rightarrow C^{\infty}(\mathbb{R})$:
- $f(x) = \sin(\omega x)$ and $g(x) = \cos(\omega x)$ satisfy:
  $$\frac{d^2}{dx^2}(\sin(\omega x)) = -\omega^2 \sin(\omega x)$$
  $$\frac{d^2}{dx^2}(\cos(\omega x)) = -\omega^2 \cos(\omega x)$$
- So $\sin(\omega x)$ and $\cos(\omega x)$ are eigenfunctions with eigenvalue $-\omega^2$

## Relationship to Matrix Eigenvalues
**Lemma 3.2.2**: Let $A \in M_{n,n}(\mathbb{F})$, $V$ a vector space over $\mathbb{F}$, and let $\phi: V \rightarrow V$ be linear. Suppose that $\phi$ is represented by $A$ with respect to a basis $\alpha$. Then $\phi$ and $A$ have the same eigenvalues.

**Proof**: Since $\phi$ is represented by $A$ with respect to basis $\alpha$:
$$\phi = \phi_\alpha \circ \phi_A \circ \phi_\alpha^{-1}$$

Therefore:
$$\phi(v) = \lambda v \Leftrightarrow \phi_A(\phi_\alpha^{-1}(v)) = \lambda \phi_\alpha^{-1}(v)$$

Since $\phi_\alpha^{-1}$ is an isomorphism, $v \neq 0$ if and only if $\phi_\alpha^{-1}(v) \neq 0$.

## Computing Eigenvalues of Operators
1. Choose any basis for $V$
2. Find the matrix representation $A$ of $\phi$ with respect to this basis
3. Compute the characteristic polynomial $\Delta_A(t) = \det(A - tI)$
4. Find the roots of $\Delta_A(t)$ - these are the eigenvalues of $\phi$

## Characteristic Polynomial of an Operator
**Definition 3.2.4**: The characteristic polynomial of a linear operator $\phi: V \rightarrow V$ on a finite-dimensional vector space $V$ is:

$$\Delta_\phi(t) = \det(\phi - t \text{id}_V)$$

where the determinant is computed using any matrix representation of $\phi$.

**Remark 3.2.5**: This is well-defined because matrices representing the same linear operator are similar, and similar matrices have the same characteristic polynomial.

## Applications
1. **Diagonalisation**: Determining when an operator can be diagonalised using its eigenvalues and eigenvectors.

2. **Dynamical Systems**: Understanding long-term behavior through eigenvalues of the evolution operator.

3. **Quantum Mechanics**: Observable quantities correspond to eigenvalues of Hermitian operators.

4. **Differential Equations**: Solutions often expressed in terms of eigenfunctions.

5. **Principal Component Analysis**: Finding principal directions using eigenvalues of covariance operators.

## Related Theorems
1. **Existence**: Over algebraically closed fields (like $\mathbb{C}$), every linear operator has at least one eigenvalue.

2. **Multiplicity Bounds**: The sum of algebraic multiplicities equals the dimension of the space.

3. **Diagonalisability**: An operator is diagonalisable if and only if the sum of geometric multiplicities equals the dimension of the space.

## Related Concepts
- [[Linear Operator]]: The function $\phi: V \rightarrow V$ we're analyzing
- [[Matrix Representation]]: How we compute eigenvalues in practice
- [[Characteristic Polynomial]]: The polynomial whose roots are eigenvalues
- [[λ-Eigenspace]]: The subspace of vectors with eigenvalue λ
- [[Diagonalisation]]: Process of finding an eigenbasis

## Notes
- Eigenvalues of operators provide insight into the fundamental directions and scaling factors of linear transformations
- The concept extends naturally from matrices to abstract linear operators on any finite-dimensional vector space
- For infinite-dimensional spaces, the theory becomes more complex and may require functional analysis tools
- The eigenvalues are intrinsic to the operator and don't depend on how we represent it with matrices
