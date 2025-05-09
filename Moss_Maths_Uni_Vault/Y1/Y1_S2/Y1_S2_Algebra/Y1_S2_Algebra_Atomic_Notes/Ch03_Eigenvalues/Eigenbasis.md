---
title: "Eigenbasis"
aliases: ["Eigen-basis", "Eigenvalue Basis", "Eigenspace Basis"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-3", "concept"]
related_concepts: ["Basis", "Eigenvector", "Diagonalisation", "Linear Independence", "Eigenspace"]
---

# Eigenbasis

## Definition
An eigenbasis of a vector space $V$ (associated to a linear operator $\phi: V \rightarrow V$) is a basis of $V$ consisting entirely of eigenvectors of $\phi$.

If such a basis exists, we say that $\phi$ is diagonalisable.

## Key Properties
1. **Completeness**: An eigenbasis spans the entire vector space $V$.

2. **Linear Independence**: All vectors in an eigenbasis are linearly independent.

3. **Eigenvalue Association**: Each vector in an eigenbasis has an associated eigenvalue.

4. **Diagonal Representation**: With respect to an eigenbasis, the linear operator is represented by a diagonal matrix.

## Existence Conditions
An eigenbasis exists if and only if:
1. The characteristic polynomial factors completely into linear factors
2. For each eigenvalue $\lambda$, the geometric multiplicity equals the algebraic multiplicity
3. The sum of dimensions of all eigenspaces equals $\dim V$

## Construction Process
To construct an eigenbasis:
1. Find all eigenvalues $\lambda_1, \lambda_2, \ldots, \lambda_k$ of $\phi$
2. For each $\lambda_i$, find a basis $B_i$ for the eigenspace $E_\phi(\lambda_i)$
3. The union $B_1 \cup B_2 \cup \cdots \cup B_k$ forms an eigenbasis if it has $\dim V$ vectors

## Examples
### Example 1: 2×2 Matrix
For $A = \begin{pmatrix} 1 & 3 \\ 3 & 1 \end{pmatrix}$:
- Eigenvalues: $\lambda_1 = 4$, $\lambda_2 = -2$
- Eigenvectors: $v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$, $v_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$
- Eigenbasis: $\{v_1, v_2\}$

### Example 2: Diagonal Matrix
For a diagonal matrix $D = \text{diag}(\lambda_1, \lambda_2, \ldots, \lambda_n)$:
- The standard basis $\{e_1, e_2, \ldots, e_n\}$ is an eigenbasis
- Each $e_i$ is an eigenvector with eigenvalue $\lambda_i$

### Example 3: Reflection Operator
For reflection across a line $L$ in $\mathbb{R}^2$:
- Eigenvectors with eigenvalue 1: all vectors in $L$
- Eigenvectors with eigenvalue -1: all vectors perpendicular to $L$
- Eigenbasis: one vector from $L$ and one perpendicular to $L$

## Matrix Representation
If $\alpha = \{v_1, v_2, \ldots, v_n\}$ is an eigenbasis with $\phi(v_i) = \lambda_i v_i$, then:

$$[\phi]_\alpha = \begin{pmatrix} 
\lambda_1 & 0 & \cdots & 0 \\
0 & \lambda_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \lambda_n
\end{pmatrix}$$

## Connection to Diagonalisation
If $P$ is the matrix whose columns are the vectors of an eigenbasis, then:
- $P^{-1}AP = D$ where $D$ is diagonal
- The eigenvalues appear on the diagonal of $D$
- $A = PDP^{-1}$

## Properties in Computation
1. **Simplification**: Many operations become trivial in an eigenbasis

2. **Matrix Powers**: $A^k = PD^kP^{-1}$ where $D^k$ is easily computed

3. **Functional Calculus**: $f(A) = Pf(D)P^{-1}$ for functions $f$

## Direct Sum Decomposition
With an eigenbasis, the vector space decomposes as:
$$V = E_\phi(\lambda_1) \oplus E_\phi(\lambda_2) \oplus \cdots \oplus E_\phi(\lambda_k)$$

Each eigenspace contributes basis vectors to the eigenbasis.

## Non-Existence
An eigenbasis may not exist when:
1. Some eigenvalues are complex (when working over $\mathbb{R}$)
2. Geometric multiplicity < algebraic multiplicity for some eigenvalue
3. The characteristic polynomial doesn't factor completely

### Example: Non-Diagonalisable Matrix
$A = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$ has:
- Eigenvalue: $\lambda = 3$ (algebraic multiplicity 2)
- Eigenspace: 1-dimensional
- No eigenbasis exists in $\mathbb{R}^2$

## Applications
1. **Simplifying Linear Systems**: Solving differential equations

2. **Principal Component Analysis**: Finding principal directions

3. **Quantum Mechanics**: Energy eigenstates form an eigenbasis

4. **Vibration Analysis**: Normal modes correspond to eigenvectors

## Related Theorems
1. **Theorem 3.4.2**: Eigenvectors with distinct eigenvalues are linearly independent

2. **Theorem 3.4.7**: Complete characterisation of when an eigenbasis exists

3. **Spectral Theorem**: For normal operators, orthonormal eigenbases exist

## Related Concepts
- [[Basis]]: General concept specialised to eigenvectors
- [[Eigenvector]]: Components of the eigenbasis
- [[Diagonalisable Linear Operator]]: Operators admitting an eigenbasis
- [[Eigenspace]]: Subspaces from which basis vectors are chosen
- [[Matrix Representation]]: Diagonal form achieved with eigenbasis

## Notes
- An eigenbasis makes the action of a linear operator transparent
- The choice of eigenbasis is not unique (any scalar multiples work)
- In infinite dimensions, the concept requires more sophisticated tools
- Eigenbases reveal the "natural coordinate system" for a linear transformation
- The existence of an eigenbasis is a special property, not all operators have one
