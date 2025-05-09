---
title: "Singular Value Decomposition"
aliases: ["Singular Value Decomposition", "SVD", "Singular Value Factorization"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-5", "theorem", "inner-product-space", "linear-operator", "singular-values", "orthonormal-basis", "matrix-factorization", "optional", "applications"]
related_concepts: ["Singular Values", "Spectral Theorem", "Orthonormal Basis", "Adjoint", "Matrix Factorization", "Least Squares", "Image Compression", "Principal Component Analysis"]
---

# Singular Value Decomposition

## Theorem (Theorem 5.2.18)
Let $V$ be a finite-dimensional inner product space and $\phi \in L(V)$ a linear operator with singular values $\sigma_1, \ldots, \sigma_n$.

Then there exist orthonormal bases $u_1, \ldots, u_n$ and $w_1, \ldots, w_n$ of $V$ such that:

$$\phi(v) = \sum_{i=1}^{n} \sigma_i \langle u_i, v \rangle w_i$$

for all $v \in V$.

## Matrix Form
For a matrix $A \in M_{m,n}(\mathbb{F})$, there exist:
- An orthogonal matrix $U \in M_{m,m}(\mathbb{F})$
- An orthogonal matrix $V \in M_{n,n}(\mathbb{F})$  
- A diagonal matrix $\Sigma \in M_{m,n}(\mathbb{F})$ with singular values on the diagonal

such that $A = U\Sigma V^T$ (real case) or $A = U\Sigma V^{\dagger}$ (complex case).

## Proof Strategy
1. Find orthonormal eigenbasis for $\phi^* \circ \phi$
2. Order eigenvalues so $\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_n$
3. For non-zero singular values, define $w_i = \phi(u_i)/\sigma_i$
4. Show $\{w_1, \ldots, w_k\}$ is orthonormal (where $k$ is index of last non-zero singular value)
5. Extend to full orthonormal basis
6. Verify the decomposition formula

## Geometric Interpretation
- SVD expresses any linear transformation as a composition:
  1. Rotation/reflection by $V^T$
  2. Scaling by $\Sigma$
  3. Rotation/reflection by $U$
- The bases $\{u_i\}$ and $\{w_i\}$ are specially chosen to make the operator diagonal

## Key Properties

### Rank Characterization
$\text{rank}(\phi) = $ number of non-zero singular values

### Optimal Low-Rank Approximation
Truncating to the $k$ largest singular values gives the best rank-$k$ approximation in the Frobenius norm.

### Pseudoinverse
The pseudoinverse $\phi^+$ is given by:
$$\phi^+(v) = \sum_{i=1}^{r} \frac{1}{\sigma_i} \langle w_i, v \rangle u_i$$
where $r = \text{rank}(\phi)$.

## Applications

### Image Compression
- Store only the largest $k$ singular values and corresponding vectors
- Significant compression with minimal quality loss
- Saves storage: $2kn$ numbers instead of $n^2$

### Principal Component Analysis
- SVD of data matrix gives principal components
- Singular values indicate variance explained
- Dimensionality reduction for data analysis

### Least Squares Problems
- Solve $Ax = b$ when $A$ is not invertible
- Pseudoinverse provides minimum-norm solution
- Regularization techniques use SVD

### Signal Processing
- Noise reduction through truncation
- Feature extraction
- Data denoising

### Latent Semantic Analysis
- Text analysis and document retrieval
- SVD reveals hidden semantic structure
- Topic modeling applications

## Computational Aspects

### Numerical Stability
- SVD is numerically stable for finding matrix decompositions
- More stable than eigenvalue computation for non-symmetric matrices
- Central to many robust numerical algorithms

### Algorithms
- Power iteration for largest singular values
- Jacobi SVD for small dense matrices
- Divide-and-conquer algorithms for large matrices

### Complexity
- $O(mn^2)$ for $m \times n$ matrix with $m \geq n$
- Specialized algorithms for sparse or structured matrices

## Extensions

### Truncated SVD
Keep only $k$ largest singular values:
$$A_k = \sum_{i=1}^{k} \sigma_i u_i v_i^T$$

### Compact SVD
Only include non-zero singular values in the decomposition.

### Generalized SVD
Simultaneously decompose two related matrices.

## Historical Notes
- Independently discovered by several mathematicians
- Schmidt (1907), Weyl (1912)
- Named "singular" because it handles singular (non-invertible) matrices
- Became computationally feasible in 1960s

## Related Concepts
- [[Singular Values]]: The diagonal entries in the decomposition
- [[Spectral Theorem]]: SVD generalizes spectral decomposition to non-normal operators
- [[Orthonormal Basis]]: Two bases used in the decomposition
- [[Adjoint]]: The operator $\phi^* \circ \phi$ is central to the construction
- [[Matrix Factorization]]: General class of problems SVD solves
- [[Least Squares]]: Major application of SVD
- [[Image Compression]]: Practical application in computer science
- [[Principal Component Analysis]]: Statistical application of SVD

## Notes
- This material is noted as optional/for enthusiastic students
- SVD is one of the most important matrix decompositions in applied mathematics
- Unlike eigenvalue decomposition, SVD exists for all matrices (including non-square)
- Provides a "coordinate-free" understanding of linear transformations
- Essential tool in machine learning, signal processing, and numerical analysis
- The decomposition reveals the intrinsic dimensionality of the data