---
title: "Diagonalisable Matrix"
aliases: ["Diagonalizable Matrix", "Diagonalisable", "Matrix Diagonalisation"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "concept", "eigenbasis", "eigenvalue", "eigenvector", "similar-matrices", "change-of-basis", "algebraic-multiplicity", "geometric-multiplicity", "matrix-powers", "linear-algebra", "matrix-theory"]
related_concepts: ["Eigenbasis", "Eigenvalue", "Eigenvector", "Similar Matrices", "Change of Basis Matrix", "Algebraic Multiplicity", "Geometric Multiplicity", "Matrix Powers via Diagonalisation", "Field"]
---

# Diagonalisable Matrix

## Definition
A matrix $A \in M_{n,n}(\mathbb{F})$ is diagonalisable over $\mathbb{F}$ if there is an invertible matrix $P \in M_{n,n}(\mathbb{F})$ such that $P^{-1}AP$ is a diagonal matrix.

When this occurs, we say that $A$ is diagonalised by $P$.

## Equivalent Characterisations
A matrix $A$ is diagonalisable if and only if:
1. There exists an invertible matrix $P$ such that $P^{-1}AP = D$ where $D$ is diagonal
2. There exists a basis of $\mathbb{F}^n$ consisting entirely of eigenvectors of $A$
3. The sum of the dimensions of all eigenspaces equals $n$
4. For each eigenvalue $\lambda$, the algebraic multiplicity equals the geometric multiplicity

## Key Result
If $A$ is diagonalisable with $P^{-1}AP = D$, then:
- The columns of $P$ are eigenvectors of $A$
- The diagonal entries of $D$ are the corresponding eigenvalues
- $AP = PD$, which means $A \cdot \text{col}_j(P) = \lambda_j \cdot \text{col}_j(P)$

## Examples
### Example 1: Simple Diagonalisable Matrix
$A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}$

Eigenvalues: $\lambda_1 = 4$, $\lambda_2 = -2$

Eigenvectors: $v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$, $v_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$

Diagonalisation: $P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, $P^{-1}AP = \begin{pmatrix} 4 & 0 \\ 0 & -2 \end{pmatrix}$

### Example 2: Non-Diagonalisable Matrix (over ℝ)
$A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ (90° rotation)

Over $\mathbb{R}$: Characteristic polynomial $t^2 + 1$ has no real roots, so no real eigenvalues.

Over $\mathbb{C}$: Eigenvalues $\pm i$, with eigenvectors, so diagonalisable over $\mathbb{C}$.

### Example 3: Non-Diagonalisable Matrix (over any field)
$A = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$

Eigenvalue: $\lambda = 3$ (with algebraic multiplicity 2)

Eigenspace: $E_A(3) = \text{span}\{\begin{pmatrix} 1 \\ 0 \end{pmatrix}\}$ (dimension 1)

Since geometric multiplicity < algebraic multiplicity, $A$ is not diagonalisable.

## Computing the Diagonalisation
To diagonalise a matrix $A$:
1. Find all eigenvalues by solving $\det(A - \lambda I) = 0$
2. For each eigenvalue $\lambda_i$, find a basis for $E_A(\lambda_i)$
3. Check if the total number of linearly independent eigenvectors equals $n$
4. If yes, form $P$ with these eigenvectors as columns
5. Then $P^{-1}AP = D$ where $D$ has the eigenvalues on the diagonal

## Properties
1. **Similarity**: If $A$ is diagonalisable, then $A \sim D$ for some diagonal matrix $D$.

2. **Field Dependence**: A matrix may be diagonalisable over one field but not another.

3. **Powers**: If $A$ is diagonalisable with $P^{-1}AP = D$, then:
   $$A^k = PD^kP^{-1}$$
   where $D^k$ is easy to compute (diagonal entries raised to power $k$).

4. **Polynomials**: If $p(t)$ is any polynomial, then:
   $$p(A) = Pp(D)P^{-1}$$

## Applications
1. **Matrix Powers**: Computing $A^n$ efficiently using diagonalisation.

2. **Linear Systems**: Solving systems of differential equations.

3. **Quadratic Forms**: Simplifying quadratic expressions.

4. **Principal Component Analysis**: Finding principal components via diagonalisation of covariance matrices.

5. **Markov Chains**: Analyzing long-term behavior.

## Fibonacci Sequence Example
The Fibonacci recurrence $x_{n+2} = x_{n+1} + x_n$ can be written as:
$$\begin{pmatrix} x_{n+1} \\ x_{n+2} \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} x_n \\ x_{n+1} \end{pmatrix}$$

Diagonalising $A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$ gives:
$$x_n = \frac{1}{\sqrt{5}}\left(\left(\frac{1+\sqrt{5}}{2}\right)^n - \left(\frac{1-\sqrt{5}}{2}\right)^n\right)$$

## Necessary and Sufficient Conditions
**Theorem 3.4.7**: A matrix $A$ is diagonalisable if and only if:
1. The characteristic polynomial factors completely into linear factors, and
2. For each eigenvalue $\lambda$, the algebraic multiplicity equals the geometric multiplicity.

## Related Concepts
- [[Eigenbasis]]: A basis consisting entirely of eigenvectors
- [[Eigenvalue]]: Entries on the diagonal of the diagonalised matrix
- [[Eigenvector]]: Columns of the diagonalising matrix
- [[Similar Matrices]]: $A$ and $D$ are similar when $A$ is diagonalisable
- [[Change of Basis]]: Diagonalisation is a special change of basis

## Notes
- Not all matrices are diagonalisable
- Diagonalisability depends on the field under consideration
- Diagonal matrices are the simplest form for many computations
- Diagonalisation is a powerful tool for understanding linear transformations
- The geometric interpretation is finding a basis where the transformation acts by simple scaling
