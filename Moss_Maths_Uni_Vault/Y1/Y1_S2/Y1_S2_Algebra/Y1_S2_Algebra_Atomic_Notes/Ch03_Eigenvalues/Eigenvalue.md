---
title: "Eigenvalue"
aliases: ["Eigenvalues", "λ", "lambda", "Characteristic Value"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "concept", "eigenvector", "characteristic-polynomial", "linear-operator", "matrix", "diagonalisation", "algebraic-multiplicity", "geometric-multiplicity", "linear-algebra", "matrix-theory"]
related_concepts: ["Eigenvector", "Characteristic Polynomial", "Linear Operator", "Matrix", "Diagonalisation", "Algebraic Multiplicity", "Geometric Multiplicity", "Field"]
---

# Eigenvalue

## Definition
Let $A \in M_{n,n}(\mathbb{F})$. A scalar $\lambda \in \mathbb{F}$ is called an eigenvalue of $A$ if there is a non-zero $\mathbf{v} \in \mathbb{F}^n$ such that:

$$A\mathbf{v} = \lambda\mathbf{v}$$

In this case, $\mathbf{v}$ is called an eigenvector of $A$ with eigenvalue $\lambda$ or a $\lambda$-eigenvector.

## Key Properties
1. **Zero Product Property**: If $\mathbf{v}$ is an eigenvector with eigenvalue $\lambda$, then any nonzero scalar multiple $a\mathbf{v}$ (where $a \neq 0$) is also an eigenvector with the same eigenvalue:
   $$A(a\mathbf{v}) = aA\mathbf{v} = a(\lambda\mathbf{v}) = \lambda(a\mathbf{v})$$

2. **Finding Eigenvalues**: The eigenvalues of $A$ are precisely the roots of the characteristic polynomial $\Delta_A(t) = \det(A - tI)$ in $\mathbb{F}$.

3. **Maximum Number**: An $n \times n$ matrix has at most $n$ eigenvalues.

4. **Similarity Invariance**: Similar matrices have the same eigenvalues.

## Examples
### Example 1: Identity Matrix
For the identity matrix $I \in M_{n,n}(\mathbb{F})$, every nonzero vector in $\mathbb{F}^n$ is an eigenvector with eigenvalue 1:
$$I\mathbf{v} = \mathbf{v} = 1 \cdot \mathbf{v}, \forall \mathbf{v} \in \mathbb{F}^n$$

### Example 2: Zero Eigenvalue
If $\mathbf{v} \in \ker(A)$ (the kernel/null space of $A$), then:
$$A\mathbf{v} = 0 = 0 \cdot \mathbf{v}$$
So if $\mathbf{v} \neq 0$, then $\mathbf{v}$ is an eigenvector with eigenvalue 0.

### Example 3: Diagonal Matrix
For $A = \begin{pmatrix} \lambda & 0 \\ 0 & \mu \end{pmatrix} \in M_{2,2}(\mathbb{F})$:
- $A\mathbf{e}_1 = \lambda\mathbf{e}_1$, so $\mathbf{e}_1$ is an eigenvector with eigenvalue $\lambda$
- $A\mathbf{e}_2 = \mu\mathbf{e}_2$, so $\mathbf{e}_2$ is an eigenvector with eigenvalue $\mu$

### Example 4: Concrete Calculation
For $A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix} \in M_{2,2}(\mathbb{Q})$:

The characteristic polynomial is:
$$\Delta_A(t) = \det\begin{pmatrix} 1-t & 3 \\ 3 & 1-t \end{pmatrix} = (1-t)^2 - 9 = (t-4)(t+2)$$

Therefore, the eigenvalues are $\lambda = 4$ and $\lambda = -2$.

## Computing Eigenvalues
To find eigenvalues of a matrix $A$:
1. Compute the characteristic polynomial: $\Delta_A(t) = \det(A - tI)$
2. Find the roots of $\Delta_A(t)$ in $\mathbb{F}$
3. These roots are the eigenvalues of $A$

## Related Theorems
1. **Proposition 3.1.4**: The eigenvalues of $A \in M_{n,n}(\mathbb{F})$ in $\mathbb{F}$ are precisely the roots of $\Delta_A(t)$ in $\mathbb{F}$.

2. **Lemma 3.1.5**: If $A \in M_{n,n}(\mathbb{F})$, then $\Delta_A(t)$ is a degree $n$ polynomial with leading coefficient $(-1)^n$. In particular, $A$ has at most $n$ eigenvalues.

3. **Lemma 3.1.6**: Similar matrices have the same characteristic polynomial and thus the same eigenvalues.

## Applications
1. **Diagonalisation**: Eigenvalues appear on the diagonal when a matrix is diagonalised.
2. **Matrix Powers**: When $A$ is diagonalisable, $A^k$ has eigenvalues $\lambda^k$.
3. **Stability Analysis**: In differential equations, negative eigenvalues indicate stability.
4. **Principal Component Analysis**: Eigenvalues determine the importance of principal components.

## Related Concepts
- [[Eigenvector]]: Non-zero vectors satisfying $A\mathbf{v} = \lambda\mathbf{v}$
- [[Characteristic Polynomial]]: The polynomial $\Delta_A(t) = \det(A - tI)$
- [[Diagonalisation]]: Process of finding an eigenbasis
- [[Algebraic Multiplicity]]: Number of times $\lambda$ appears as a root
- [[Geometric Multiplicity]]: Dimension of the $\lambda$-eigenspace

## Notes
- Eigenvalues are scalars, while eigenvectors are vectors
- A matrix can have complex eigenvalues even when it has real entries
- Eigenvalues are fundamental to understanding the behavior of linear transformations
- The prefix "eigen-" comes from German meaning "characteristic" or "own"
