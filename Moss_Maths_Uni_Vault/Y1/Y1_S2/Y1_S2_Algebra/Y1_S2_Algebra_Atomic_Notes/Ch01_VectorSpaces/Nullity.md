---
title: "Nullity"
aliases: ["Nullity of a Linear Map", "Dimension of the Kernel"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "linear-map", "kernel", "rank", "rank-nullity-theorem", "matrix", "dimension", "injective-map", "linear-system", "vector-space", "linear-algebra"]
related_concepts: ["Linear Map", "Kernel", "Rank", "Rank-Nullity Theorem", "Matrix", "Dimension", "Injective Map", "Linear System", "Vector Space", "Field"]
---

# Nullity

## Definition
The **nullity** of a linear map $\phi: V \rightarrow W$ between vector spaces $V$ and $W$ over a field $\mathbb{F}$ is the dimension of the kernel of $\phi$:

$$\operatorname{null} \phi = \dim(\operatorname{Ker} \phi)$$

For a matrix $A \in M_{m,n}(\mathbb{F})$, the nullity of $A$, denoted $\operatorname{null} A$, is the nullity of the associated linear map $\phi_A: \mathbb{F}^n \rightarrow \mathbb{F}^m$ defined by $\phi_A(x) = Ax$. This equals the dimension of the nullspace $N_A = \{x \in \mathbb{F}^n : Ax = 0\}$.

## Properties
- The nullity of a linear map $\phi: V \rightarrow W$ is always at most $\dim V$.
- For an $n \times n$ matrix $A$, $A$ is invertible if and only if $\operatorname{null} A = 0$.
- The nullity of a linear map $\phi$ is 0 if and only if $\phi$ is injective.
- For a linear map $\phi: V \rightarrow W$ with $\dim V < \infty$, the Rank-Nullity Theorem states that $\operatorname{rank} \phi + \operatorname{null} \phi = \dim V$.
- If $\phi: V \rightarrow W$ and $\psi: W \rightarrow U$ are linear maps, then $\operatorname{null}(\psi \circ \phi) \geq \operatorname{null} \phi$.
- If $A$ is an $m \times n$ matrix, the nullity of $A$ equals the number of free parameters in the general solution to the homogeneous system $Ax = 0$.
- The nullity of $A$ equals the number of non-pivot columns in any row echelon form of $A$.
- If $A$ and $B$ are similar matrices (i.e., $B = P^{-1}AP$ for an invertible matrix $P$), then $\operatorname{null} A = \operatorname{null} B$.

## Examples
1. Consider the linear map $\phi: \mathbb{R}^3 \rightarrow \mathbb{R}^2$ given by $\phi(x, y, z) = (x + y, y + z)$. The kernel of $\phi$ consists of vectors $(t, -t, t)$ for $t \in \mathbb{R}$, which is a one-dimensional subspace. Therefore, $\operatorname{null} \phi = 1$.

2. The identity matrix $I_n$ has nullity 0 because its kernel consists only of the zero vector.

3. The zero matrix $0_{m,n}$ has nullity $n$ because its kernel is the entire domain $\mathbb{F}^n$.

4. Consider the matrix 
   $$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$$
   
   We found earlier that $\operatorname{rank} A = 2$. By the Rank-Nullity Theorem, $\operatorname{null} A = 3 - 2 = 1$.

5. For the projection matrix 
   $$P = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}$$
   onto the line $y = x$ in $\mathbb{R}^2$, the kernel consists of vectors of the form $(t, -t)$ for $t \in \mathbb{R}$, which is a one-dimensional subspace. Therefore, $\operatorname{null} P = 1$.

6. For the derivative operator $D: \mathbb{R}[X]_{\leq n} \rightarrow \mathbb{R}[X]_{\leq n-1}$, the kernel consists of constant polynomials, which is a one-dimensional subspace. Therefore, $\operatorname{null} D = 1$.

## Important Theorems/Results
- **Definition 1.9.1**: The nullity of a linear map $\phi: V \rightarrow W$ is $\operatorname{null} \phi = \dim(\operatorname{Ker} \phi)$.

- **Theorem 1.9.2 (Rank-Nullity Theorem)**: If $V$ is finite-dimensional and $\phi: V \rightarrow W$ is a linear map, then:
  $$\operatorname{rank} \phi + \operatorname{null} \phi = \dim V$$
  
- **Proposition 1.3.9**: A linear map $\phi: V \rightarrow W$ is injective if and only if $\operatorname{Ker} \phi = \{0\}$, which is equivalent to $\operatorname{null} \phi = 0$.

## Connections to Other Concepts
- The nullity of a [[Linear Map]] is the dimension of its [[Kernel]].
- The [[Rank]] of a linear map is complementary to its nullity through the [[Rank-Nullity Theorem]].
- Nullity is related to the concept of injectivity: a linear map is injective if and only if its nullity is zero.
- For systems of linear equations $Ax = b$, the nullity of $A$ equals the number of free parameters in the general solution.
- The nullspace (kernel) of a [[Matrix]] is a fundamental subspace in linear algebra.

## Related Problems
- [[PS01-Q01]] - Understanding nullity in the context of uniqueness of solutions of linear systems.
- [[PS01-Q04]] - Analyzing how nullity affects the number of solutions of a linear system.

## Notes
- The nullity provides information about the "degree of non-injectivity" of a linear map, indicating how many dimensions are collapsed to zero.
- The Rank-Nullity Theorem can be interpreted geometrically: the dimension of the domain equals the sum of the dimension of the "directions" that are "flattened" (nullity) and the dimension of the "effective image" (rank).
- In the context of linear systems, the nullity corresponds to the degrees of freedom in the solution set of the homogeneous system.
- Understanding nullity is particularly important in applications where the kernel represents a set of "balanced" or "equilibrium" states of a system.
- In data analysis, matrices with high nullity can indicate redundancy or multicollinearity in the data.
