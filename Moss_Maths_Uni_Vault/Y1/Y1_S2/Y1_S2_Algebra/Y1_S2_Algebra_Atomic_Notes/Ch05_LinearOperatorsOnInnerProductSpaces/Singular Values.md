---
title: "Singular Values"
aliases: ["Singular Values", "Singular Value", "SVD Values"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-5", "concept", "inner-product-space", "linear-operator", "singular-value-decomposition", "eigenvalue", "self-adjoint", "optional"]
related_concepts: ["Singular Value Decomposition", "Eigenvalue", "Adjoint", "Self-adjoint", "Normal", "Spectral Theorem", "Image", "Rank"]
---

# Singular Values

## Definition (Definition 5.2.17)
Let $V$ be a finite-dimensional inner product space and $\phi \in L(V)$. The **singular values** of $\phi$ are $\sigma_1, \ldots, \sigma_n$ where:

$$\sigma_i = \sqrt{\mu_i} \geq 0$$

and $\mu_1, \ldots, \mu_n$ are the eigenvalues of $\phi^* \circ \phi$ listed with multiplicity (each distinct eigenvalue $\mu$ appears $\dim E_{\phi^* \circ \phi}(\mu)$ times).

## Key Properties

### Always Non-negative
All singular values are non-negative because $\phi^* \circ \phi$ is self-adjoint with non-negative eigenvalues (Lemma 5.2.16).

### Relationship to $\phi^* \circ \phi$
If $\mu$ is an eigenvalue of $\phi^* \circ \phi$, then $\sqrt{\mu}$ is a singular value of $\phi$.

### For Self-adjoint Operators
If $\phi$ is self-adjoint with eigenvalues $\lambda_i$, then the singular values are $|\lambda_i|$.

### Matrix Case
For a matrix $A$, the singular values are the square roots of the eigenvalues of $A^{\dagger}A$ (or $A^TA$ for real matrices).

## Examples

### Example 1: Diagonal Matrix
For $A = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix}$:
- $A^TA = \begin{pmatrix} 9 & 0 \\ 0 & 4 \end{pmatrix}$
- Eigenvalues of $A^TA$: 9 and 4
- Singular values: $\sigma_1 = 3$, $\sigma_2 = 2$

### Example 2: Rotation Matrix
For a rotation matrix $R$:
- All eigenvalues of $R^TR = I$ are 1
- All singular values are 1

### Example 3: Projection Matrix
For an orthogonal projection $P$:
- $P^TP = P$ (since $P^2 = P$ and $P^T = P$)
- Eigenvalues are 0 and 1
- Singular values are 0 and 1

## Fundamental Properties

### Rank Characterization
- Number of non-zero singular values equals $\text{rank}(\phi)$
- $\sigma_k > 0$ if and only if $k \leq \text{rank}(\phi)$

### Norm Bounds
- Largest singular value: $\sigma_1 = \|\phi\|$ (operator norm)
- For any $v$ with $\|v\| = 1$: $\|\phi(v)\| \leq \sigma_1$

### Counting Multiplicity
If we order $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_n$, then:
- $\sigma_i > 0$ for $i \leq \text{rank}(\phi)$
- $\sigma_i = 0$ for $i > \text{rank}(\phi)$

## Geometric Interpretation
- Singular values measure how much $\phi$ stretches unit vectors in various directions
- The largest singular value gives the maximum stretching factor
- Zero singular values correspond to directions in the kernel

## Computational Aspects
- More numerically stable than computing eigenvalues directly
- Central to many matrix algorithms
- Used in pseudoinverse computation

## Applications

### Principal Component Analysis
- Singular values indicate importance of principal components
- Larger singular values correspond to directions with more variance

### Image Compression
- Keep only largest singular values and their corresponding components
- Provides low-rank approximation to original image

### Least Squares
- Pseudoinverse constructed using singular values
- Condition number relates to ratio of largest to smallest non-zero singular value

## Related Results

### Lemma 5.2.16
Let $V$ be a finite-dimensional inner product space and $\phi \in L(V)$. Then:
1. All eigenvalues of $\phi^* \circ \phi$ are non-negative real numbers
2. $\ker(\phi^* \circ \phi) = \ker \phi$

### Connection to Spectral Theorem
The computation of singular values uses the spectral theorem applied to $\phi^* \circ \phi$.

## Related Concepts
- [[Singular Value Decomposition]]: Main application of singular values
- [[Eigenvalue]]: Singular values are derived from eigenvalues of $\phi^* \circ \phi$
- [[Adjoint]]: Used in the construction $\phi^* \circ \phi$
- [[Self-adjoint]]: The operator $\phi^* \circ \phi$ is always self-adjoint
- [[Normal]]: Special case where singular values relate directly to eigenvalues
- [[Spectral Theorem]]: Used to find eigenvalues of $\phi^* \circ \phi$
- [[Image]]: Dimension equals number of non-zero singular values
- [[Rank]]: Given by number of non-zero singular values

## Notes
- This material is optional/for enthusiastic students according to the course notes
- Singular values generalize the concept of eigenvalues to non-normal operators
- They provide a measure of how "close" an operator is to being normal
- Especially important in numerical linear algebra and data science applications
- The name "singular" refers to the fact that they detect when an operator becomes degenerate (has non-trivial kernel)