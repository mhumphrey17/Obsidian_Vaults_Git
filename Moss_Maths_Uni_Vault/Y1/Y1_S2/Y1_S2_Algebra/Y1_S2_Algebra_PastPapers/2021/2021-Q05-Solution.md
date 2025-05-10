---
title: "2021-Q05-Solution: Unitary Matrix and Diagonalization"
aliases: ["Solution to 2021 Q5"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2021", "difficulty-challenging", "unitary", "diagonalization"]
related_question: [[2021-Q05]]
---

# 2021-Q05-Solution: Unitary Matrix and Diagonalization

## Original Question
(a) Define what it means for a matrix in $M_{n, n}(\mathbb{C})$ to be unitary.

(b) Find a unitary matrix $P$ such that $P^{-1} A P$ is diagonal, where
$$
A=\begin{pmatrix}
1 & 2-2 i \\
2+2 i & 3
\end{pmatrix}
$$

## Solution Process

### Part (a): Definition
A matrix $P \in M_{n, n}(\mathbb{C})$ is unitary if $P^\dagger P = I$, where $P^\dagger$ is the conjugate transpose of $P$ and $I$ is the $n \times n$ identity matrix.

Equivalently, $P$ is unitary if $P^{-1} = P^\dagger$.

### Part (b): Unitary Diagonalization

**Step 1: Verify A is Hermitian**
$$A^\dagger = \begin{pmatrix}
1 & \overline{2+2i} \\
\overline{2-2i} & 3
\end{pmatrix} = \begin{pmatrix}
1 & 2-2i \\
2+2i & 3
\end{pmatrix} = A$$

Since $A = A^\dagger$, $A$ is Hermitian and therefore diagonalizable by a unitary matrix.

**Step 2: Find Eigenvalues**
Characteristic polynomial: $\det(A - \lambda I)$
$$\det\begin{pmatrix}
1-\lambda & 2-2i \\
2+2i & 3-\lambda
\end{pmatrix} = (1-\lambda)(3-\lambda) - (2-2i)(2+2i)$$

Calculate $(2-2i)(2+2i) = 4 - (2i)^2 = 4 - (-4) = 8$

Therefore:
$$\det(A - \lambda I) = (1-\lambda)(3-\lambda) - 8$$
$$= 3 - \lambda - 3\lambda + \lambda^2 - 8$$
$$= \lambda^2 - 4\lambda - 5$$
$$= (\lambda - 5)(\lambda + 1)$$

Eigenvalues: $\lambda_1 = 5$, $\lambda_2 = -1$

**Step 3: Find Eigenvectors**

For $\lambda_1 = 5$:
$(A - 5I)v = 0$
$$\begin{pmatrix}
-4 & 2-2i \\
2+2i & -2
\end{pmatrix}\begin{pmatrix}
x \\
y
\end{pmatrix} = \begin{pmatrix}
0 \\
0
\end{pmatrix}$$

From the first equation: $-4x + (2-2i)y = 0$
Therefore: $4x = (2-2i)y$, so $x = \frac{2-2i}{4}y = \frac{1-i}{2}y$

Setting $y = 2$: $x = 1-i$, giving eigenvector $v_1 = \begin{pmatrix}1 \\ 1+i\end{pmatrix}$

For $\lambda_2 = -1$:
$(A + I)v = 0$
$$\begin{pmatrix}
2 & 2-2i \\
2+2i & 4
\end{pmatrix}\begin{pmatrix}
x \\
y
\end{pmatrix} = \begin{pmatrix}
0 \\
0
\end{pmatrix}$$

From the first equation: $2x + (2-2i)y = 0$
Therefore: $x = -\frac{2-2i}{2}y = -(1-i)y$

Setting $y = 1$: $x = 1-i$, giving eigenvector $v_2 = \begin{pmatrix}1-i \\ -1\end{pmatrix}$

**Step 4: Verify Orthogonality**
$$\langle v_1, v_2 \rangle = 1 \cdot \overline{(1-i)} + (1+i) \cdot \overline{(-1)}$$
$$= 1(1+i) + (1+i)(-1) = 1+i - 1-i = 0$$

The eigenvectors are orthogonal, as expected for a Hermitian matrix.

**Step 5: Normalize Eigenvectors**
$$\|v_1\|^2 = |1|^2 + |1+i|^2 = 1 + (1^2 + 1^2) = 1 + 2 = 3$$
$$\|v_1\| = \sqrt{3}$$

$$\|v_2\|^2 = |1-i|^2 + |-1|^2 = (1^2 + 1^2) + 1^2 = 2 + 1 = 3$$
$$\|v_2\| = \sqrt{3}$$

Normalized eigenvectors:
$$u_1 = \frac{1}{\sqrt{3}}\begin{pmatrix}1 \\ 1+i\end{pmatrix}, \quad u_2 = \frac{1}{\sqrt{3}}\begin{pmatrix}1-i \\ -1\end{pmatrix}$$

**Step 6: Construct P**
$$P = [u_1 \mid u_2] = \frac{1}{\sqrt{3}}\begin{pmatrix}
1 & 1-i \\
1+i & -1
\end{pmatrix}$$

This unitary matrix P satisfies $P^{-1}AP = \begin{pmatrix}5 & 0 \\ 0 & -1\end{pmatrix}$.

## Key Steps and Justifications
1. Defining unitary using conjugate transpose
2. Verifying Hermitian property
3. Computing characteristic polynomial
4. Finding eigenvalues via factorization
5. Solving for eigenvectors systematically
6. Verifying orthogonality
7. Normalizing to construct orthonormal basis
8. Constructing the unitary matrix P

## Alternative Approaches
- Could verify the result by computing $P^{-1}AP$ explicitly
- Could use different normalization constants (any $e^{i\theta}$ multiple works)

## Common Mistakes
- Errors in complex arithmetic
- Not properly computing conjugates
- Sign errors in eigenvector calculation
- Normalization errors
- Forgetting to verify Hermitian property

## Mark Scheme Breakdown
- Part (a): 2-3 marks for correct definition
- Part (b): 1 mark for identifying Hermitian, 1 mark for eigenvalues, 2 marks for eigenvectors, 1 mark for normalization and final answer

