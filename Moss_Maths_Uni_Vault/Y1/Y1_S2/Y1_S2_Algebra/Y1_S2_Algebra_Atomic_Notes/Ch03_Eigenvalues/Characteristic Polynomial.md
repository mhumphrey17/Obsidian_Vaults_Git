---
title: "Characteristic Polynomial"
aliases: ["Characteristic Polynomials", "Δ_A(t)", "det(A-tI)"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "concept"]
related_concepts: ["Eigenvalue", "Determinant", "Polynomial", "Similar Matrices"]
---

# Characteristic Polynomial

## Definition
The characteristic polynomial of a square matrix $A \in M_{n,n}(\mathbb{F})$ is:

$$\Delta_A(t) = \det(A - tI)$$

where $I$ is the identity $n \times n$ matrix and $t$ is a variable.

## Key Properties
1. **Degree**: $\Delta_A(t)$ is a polynomial of degree $n$ with leading coefficient $(-1)^n$.

2. **Eigenvalue Connection**: The eigenvalues of $A$ in $\mathbb{F}$ are precisely the roots of $\Delta_A(t)$ in $\mathbb{F}$.

3. **Similarity Invariance**: Similar matrices have the same characteristic polynomial.

4. **Maximum Eigenvalues**: Since $\Delta_A(t)$ has degree $n$, $A$ has at most $n$ eigenvalues (counting multiplicities).

## Examples
### Example 1: 2×2 Matrix
For $A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}$:

$$\Delta_A(t) = \det\begin{pmatrix} 1-t & 3 \\ 3 & 1-t \end{pmatrix} = (1-t)^2 - 9 = t^2 - 2t - 8 = (t-4)(t+2)$$

The eigenvalues are the roots: $\lambda = 4$ and $\lambda = -2$.

### Example 2: Diagonal Matrix
For $A = \begin{pmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{pmatrix}$:

$$\Delta_A(t) = \prod_{i=1}^n (\lambda_i - t)$$

The eigenvalues are simply the diagonal entries $\lambda_1, \lambda_2, \ldots, \lambda_n$.

### Example 3: Upper Triangular Matrix
For an upper triangular matrix with diagonal entries $a_{11}, a_{22}, \ldots, a_{nn}$:

$$\Delta_A(t) = \prod_{i=1}^n (a_{ii} - t)$$

The eigenvalues are the diagonal entries.

## Computing the Characteristic Polynomial
For a general $n \times n$ matrix:

$$\Delta_A(t) = \det\begin{pmatrix} 
a_{11}-t & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22}-t & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}-t
\end{pmatrix}$$

The highest power term comes from the diagonal:
$$(-t)^n + \text{lower order terms}$$

## Relationship to Eigenvalues
**Proposition 3.1.4**: $\lambda$ is an eigenvalue of $A$ if and only if $\lambda$ is a root of $\Delta_A(t)$.

**Proof**: 
$$\lambda \text{ is an eigenvalue} \Leftrightarrow \exists \mathbf{v} \neq 0 \text{ such that } (A-\lambda I)\mathbf{v} = 0$$
$$\Leftrightarrow \ker(A-\lambda I) \neq \{0\}$$
$$\Leftrightarrow A-\lambda I \text{ is not invertible}$$
$$\Leftrightarrow \det(A-\lambda I) = 0$$
$$\Leftrightarrow \Delta_A(\lambda) = 0$$

## Properties of the Characteristic Polynomial
1. **Leading Coefficient**: The leading coefficient is always $(-1)^n$.

2. **Constant Term**: The constant term $\Delta_A(0) = \det(A)$.

3. **Linear Term**: The coefficient of $t^{n-1}$ is $(-1)^{n-1} \cdot \text{tr}(A)$, where $\text{tr}(A)$ is the trace (sum of diagonal entries).

4. **Similarity Invariance**: If $B = P^{-1}AP$ for some invertible $P$, then $\Delta_B(t) = \Delta_A(t)$.

## Factorization
If $A$ has eigenvalues $\lambda_1, \lambda_2, \ldots, \lambda_n$ (counting multiplicities), then:

$$\Delta_A(t) = (-1)^n \prod_{i=1}^n (t - \lambda_i)$$

## Related Theorems
1. **Lemma 3.1.5**: $\Delta_A(t)$ is a degree $n$ polynomial with leading coefficient $(-1)^n$.

2. **Lemma 3.1.6**: Similar matrices have the same characteristic polynomial.

3. **Product Formula**: If $B = P^{-1}AP$, then $\Delta_B(t) = \Delta_A(t)$.

## Applications
1. **Finding Eigenvalues**: Compute $\Delta_A(t)$ and find its roots.

2. **Determining Diagonalisability**: Check if $\Delta_A(t)$ factors completely and verify multiplicities.

3. **Matrix Classification**: Matrices with the same characteristic polynomial share certain properties.

4. **Minimal Polynomial**: The characteristic polynomial is related to (but generally different from) the minimal polynomial.

## Related Concepts
- [[Eigenvalue]]: Roots of the characteristic polynomial
- [[Determinant]]: Used in the definition $\det(A - tI)$
- [[Similar Matrices]]: Share the same characteristic polynomial
- [[Algebraic Multiplicity]]: Multiplicity of eigenvalue as a root
- [[Minimal Polynomial]]: Divides the characteristic polynomial

## Notes
- The characteristic polynomial provides a bridge between linear algebra and polynomial algebra
- Finding eigenvalues reduces to finding polynomial roots
- The characteristic polynomial encodes important information about the matrix
- For large matrices, computing the characteristic polynomial directly can be computationally expensive
- The characteristic polynomial is independent of the choice of basis
