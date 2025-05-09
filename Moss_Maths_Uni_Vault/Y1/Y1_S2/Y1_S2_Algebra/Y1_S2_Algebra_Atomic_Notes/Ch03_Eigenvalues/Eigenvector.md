---
title: "Eigenvector"
aliases: ["Eigenvectors", "λ-eigenvector", "Characteristic Vector"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "concept", "eigenvalue", "eigenspace", "linear-independence", "diagonalisation", "eigenbasis", "geometric-multiplicity", "linear-algebra", "matrix-theory"]
related_concepts: ["Eigenvalue", "Eigenspace", "Linear Independence", "Diagonalisation", "Eigenbasis", "Geometric Multiplicity", "Field"]
---

# Eigenvector

## Definition
Let $A \in M_{n,n}(\mathbb{F})$. A non-zero vector $\mathbf{v} \in \mathbb{F}^n$ is called an eigenvector of $A$ with eigenvalue $\lambda$ if:

$$A\mathbf{v} = \lambda\mathbf{v}$$

In this case, $\mathbf{v}$ is also called a $\lambda$-eigenvector.

## Key Properties
1. **Non-zero**: Eigenvectors are always non-zero by definition.

2. **Scalar Multiples**: If $\mathbf{v}$ is an eigenvector with eigenvalue $\lambda$, then any nonzero scalar multiple $a\mathbf{v}$ (where $a \neq 0$) is also an eigenvector with the same eigenvalue:
   $$A(a\mathbf{v}) = aA\mathbf{v} = a(\lambda\mathbf{v}) = \lambda(a\mathbf{v})$$

3. **Kernel Relationship**: The set of all $\lambda$-eigenvectors, together with the zero vector, forms the $\lambda$-eigenspace:
   $$E_A(\lambda) = \{v \in \mathbb{F}^n : A\mathbf{v} = \lambda\mathbf{v}\} = \ker(A - \lambda I)$$

4. **Finding Eigenvectors**: To find $\lambda$-eigenvectors, solve the homogeneous system $(A - \lambda I)\mathbf{v} = 0$.

## Examples
### Example 1: Identity Matrix
For the identity matrix $I \in M_{n,n}(\mathbb{F})$, every nonzero vector in $\mathbb{F}^n$ is an eigenvector with eigenvalue 1:
$$I\mathbf{v} = \mathbf{v} = 1 \cdot \mathbf{v}$$

### Example 2: Diagonal Matrix
For $A = \begin{pmatrix} \lambda & 0 \\ 0 & \mu \end{pmatrix} \in M_{2,2}(\mathbb{F})$:
- $\mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ is an eigenvector with eigenvalue $\lambda$
- $\mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ is an eigenvector with eigenvalue $\mu$

### Example 3: Concrete Calculation
For $A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}$ with eigenvalue $\lambda = 4$:

To find eigenvectors:
$$(A - 4I)\mathbf{v} = \begin{pmatrix} -3 & 3 \\ 3 & -3 \end{pmatrix}\mathbf{v} = 0$$

This gives us $\mathbf{v} = c\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ for any nonzero scalar $c$.

For eigenvalue $\lambda = -2$:
$$(A + 2I)\mathbf{v} = \begin{pmatrix} 3 & 3 \\ 3 & 3 \end{pmatrix}\mathbf{v} = 0$$

This gives us $\mathbf{v} = c\begin{pmatrix} 1 \\ -1 \end{pmatrix}$ for any nonzero scalar $c$.

## Linear Independence of Eigenvectors
**Theorem 3.4.2**: If $v_1, \ldots, v_m$ are eigenvectors of $\phi: V \rightarrow V$ with distinct eigenvalues $\lambda_1, \ldots, \lambda_m$, then $v_1, \ldots, v_m$ are linearly independent.

This theorem is crucial for diagonalisation: if a linear operator has enough eigenvectors with distinct eigenvalues, it can be diagonalised.

## Computing Eigenvectors
To find eigenvectors corresponding to eigenvalue $\lambda$:
1. Form the matrix $A - \lambda I$
2. Solve the homogeneous system $(A - \lambda I)\mathbf{v} = 0$
3. The non-zero solutions form the eigenspace $E_A(\lambda)$
4. Any non-zero vector in this eigenspace is an eigenvector

## Geometric Interpretation
Eigenvectors represent "special directions" for a linear transformation:
- When a matrix acts on an eigenvector, it only scales the vector by the eigenvalue
- The direction of the eigenvector remains unchanged
- Eigenvectors are invariant under the transformation up to scaling

## Related Theorems
1. **Proposition 3.1.4**: $\lambda$ is an eigenvalue of $A$ if and only if there exists a non-zero $\mathbf{v}$ such that $(A - \lambda I)\mathbf{v} = 0$.

2. **Theorem 3.4.2**: Eigenvectors corresponding to distinct eigenvalues are linearly independent.

3. **Theorem 3.4.7**: A linear operator is diagonalisable if and only if there exists a basis consisting entirely of eigenvectors.

## Applications
1. **Diagonalisation**: Eigenvectors form the columns of the change-of-basis matrix that diagonalises a matrix.

2. **Principal Component Analysis**: Eigenvectors of the covariance matrix represent principal components.

3. **Mechanical Vibrations**: Eigenvectors represent mode shapes in structural analysis.

4. **Quantum Mechanics**: Physical observables are represented by eigenvectors of operators.

## Related Concepts
- [[Eigenvalue]]: The scalar $\lambda$ such that $A\mathbf{v} = \lambda\mathbf{v}$
- [[Eigenspace]]: The subspace of all vectors satisfying $A\mathbf{v} = \lambda\mathbf{v}$
- [[Eigenbasis]]: A basis consisting entirely of eigenvectors
- [[Linear Independence]]: Property that allows diagonalisation
- [[Geometric Multiplicity]]: Dimension of the eigenspace

## Notes
- The zero vector is never considered an eigenvector, even though $A\mathbf{0} = \lambda\mathbf{0}$ for any $\lambda$
- Eigenvectors are not unique - any non-zero scalar multiple is also an eigenvector
- The set of all eigenvectors with eigenvalue $\lambda$, together with zero, forms a subspace
- For real matrices, eigenvectors can be complex even if we're working over $\mathbb{R}$
