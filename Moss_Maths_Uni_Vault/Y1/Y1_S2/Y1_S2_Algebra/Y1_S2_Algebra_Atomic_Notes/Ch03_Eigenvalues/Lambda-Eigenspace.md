---
title: "λ-Eigenspace"
aliases: ["Lambda-Eigenspace", "Eigenspace", "E_φ(λ)", "E_A(λ)"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "concept"]
related_concepts: ["Eigenvalue", "Eigenvector", "Kernel", "Subspace", "Geometric Multiplicity"]
---

# λ-Eigenspace

## Definition
Let $V$ be a vector space over $\mathbb{F}$, and $\phi: V \rightarrow V$ a linear operator. The $\lambda$-eigenspace of $\phi$ is:

$$E_\phi(\lambda) = \{v \in V : \phi(v) = \lambda v\} = \ker(\phi - \lambda \text{id}_V)$$

where $\text{id}_V$ is the identity operator on $V$.

For a matrix $A \in M_{n,n}(\mathbb{F})$, the $\lambda$-eigenspace is:

$$E_A(\lambda) = \{v \in \mathbb{F}^n : Av = \lambda v\} = \ker(A - \lambda I)$$

where $I$ is the identity matrix.

## Key Properties
1. **Subspace**: $E_\phi(\lambda)$ is a linear subspace of $V$.

2. **Contains All Eigenvectors**: $E_\phi(\lambda)$ consists of all $\lambda$-eigenvectors together with the zero vector.

3. **Kernel Relationship**: $E_\phi(\lambda) = \ker(\phi - \lambda \text{id}_V)$.

4. **Dimension**: The dimension of $E_\phi(\lambda)$ is the geometric multiplicity of $\lambda$.

5. **Non-emptiness**: If $\lambda$ is an eigenvalue, then $E_\phi(\lambda) \neq \{0\}$.

## Examples
### Example 1: Identity Operator
For the identity operator $\text{id}_V: V \rightarrow V$:
$$E_{\text{id}_V}(1) = V \text{ (the entire space)}$$
$$E_{\text{id}_V}(\lambda) = \{0\} \text{ for } \lambda \neq 1$$

### Example 2: Zero Operator
For the zero operator $0: V \rightarrow V$:
$$E_0(0) = V \text{ (the entire space)}$$
$$E_0(\lambda) = \{0\} \text{ for } \lambda \neq 0$$

### Example 3: Diagonal Matrix
For $A = \begin{pmatrix} 4 & 0 \\ 0 & -2 \end{pmatrix}$:
- $E_A(4) = \text{span}\{\begin{pmatrix} 1 \\ 0 \end{pmatrix}\}$
- $E_A(-2) = \text{span}\{\begin{pmatrix} 0 \\ 1 \end{pmatrix}\}$

### Example 4: Concrete Calculation
For $A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}$ with eigenvalue $\lambda = 4$:

To find $E_A(4)$, solve $(A - 4I)v = 0$:
$$\begin{pmatrix} -3 & 3 \\ 3 & -3 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

This gives us $x = y$, so:
$$E_A(4) = \text{span}\{\begin{pmatrix} 1 \\ 1 \end{pmatrix}\}$$

## Geometric Interpretation
- The $\lambda$-eigenspace consists of all vectors that are scaled by factor $\lambda$ under the transformation
- It represents all the "invariant directions" for scaling factor $\lambda$
- The dimension of the eigenspace indicates how many independent directions share this scaling behavior

## Computing Eigenspaces
To find $E_A(\lambda)$:
1. Form the matrix $A - \lambda I$
2. Solve the homogeneous system $(A - \lambda I)v = 0$
3. The solution space is $E_A(\lambda)$
4. Express the solution space as span of basis vectors

## Relationship to Multiplicities
- **Geometric Multiplicity**: $\text{g.m.}(\lambda) = \dim E_\phi(\lambda)$
- **Algebraic Multiplicity**: $\text{a.m.}(\lambda) \geq \text{g.m.}(\lambda)$
- **Diagonalisability**: $\phi$ is diagonalisable if and only if $\text{a.m.}(\lambda) = \text{g.m.}(\lambda)$ for all eigenvalues $\lambda$

## Sum of Eigenspaces
If $\lambda_1, \lambda_2, \ldots, \lambda_k$ are distinct eigenvalues, then:
$$E_\phi(\lambda_1) + E_\phi(\lambda_2) + \cdots + E_\phi(\lambda_k)$$
is a direct sum (the eigenspaces intersect only at the origin).

## Related Theorems
1. **Lemma 3.2.2**: If $\phi$ is represented by matrix $A$ with respect to some basis, then $\phi$ and $A$ have the same eigenvalues and corresponding eigenspaces are isomorphic.

2. **Theorem 3.4.2**: Eigenvectors corresponding to distinct eigenvalues are linearly independent, ensuring that eigenspaces for different eigenvalues are independent.

3. **Theorem 3.4.7**: A linear operator is diagonalisable if and only if the sum of the dimensions of all eigenspaces equals the dimension of the space.

## Applications
1. **Diagonalisation**: Eigenspaces provide the building blocks for constructing an eigenbasis.

2. **Invariant Subspaces**: Each eigenspace is an invariant subspace under the linear operator.

3. **Matrix Powers**: When computing $A^n$, eigenspaces help track how different directions evolve.

4. **Stability Analysis**: In dynamical systems, eigenspaces determine the behavior of the system along different directions.

## Related Concepts
- [[Eigenvalue]]: The scalar $\lambda$ for which the eigenspace is defined
- [[Eigenvector]]: Non-zero elements of the eigenspace
- [[Kernel]]: The eigenspace is a special case of a kernel
- [[Geometric Multiplicity]]: Dimension of the eigenspace
- [[Diagonalisation]]: Relies on the direct sum of eigenspaces

## Notes
- The eigenspace always contains the zero vector, but the zero vector is not considered an eigenvector
- Eigenspaces corresponding to different eigenvalues are orthogonal in certain contexts (e.g., symmetric matrices)
- The dimension of an eigenspace is bounded by the algebraic multiplicity of the eigenvalue
- Understanding eigenspaces is crucial for determining diagonalisability
