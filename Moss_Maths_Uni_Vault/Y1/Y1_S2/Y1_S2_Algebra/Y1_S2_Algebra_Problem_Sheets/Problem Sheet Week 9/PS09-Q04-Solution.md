---
title: "PS09-Q04-Solution: QR Decomposition"
aliases: ["Solution to PS9 Q4"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-09", "difficulty-homework", "qr-decomposition", "gram-schmidt"]
related_problem: [[PS09-Q04]]
---

# PS09-Q04-Solution: QR Decomposition

## Original Problem
Find the QR decomposition of the matrix $A$ given by

$$A = \left(\begin{array}{ccc}
0 & 1 & 1 \\
0 & 0 & -1 \\
-2 & -1 & 0
\end{array}\right)$$

## Solution Process

### Step 1: Apply Gram-Schmidt to columns of A
The columns of $A$ are: $a_1 = (0,0,-2)$, $a_2 = (1,0,-1)$, $a_3 = (1,-1,0)$.

**Finding $q_1$:**
- $w_1 = a_1 = (0,0,-2)$
- $\|w_1\| = \sqrt{0^2 + 0^2 + (-2)^2} = 2$
- $q_1 = \frac{w_1}{\|w_1\|} = \frac{1}{2}(0,0,-2) = (0,0,-1)$

**Finding $q_2$:**
- $w_2 = a_2 - \langle a_2, q_1 \rangle q_1$
- $\langle a_2, q_1 \rangle = (1,0,-1) \cdot (0,0,-1) = 0 + 0 + 1 = 1$
- $w_2 = (1,0,-1) - 1 \cdot (0,0,-1) = (1,0,-1) - (0,0,-1) = (1,0,0)$
- $\|w_2\| = \sqrt{1^2 + 0^2 + 0^2} = 1$
- $q_2 = \frac{w_2}{\|w_2\|} = (1,0,0)$

**Finding $q_3$:**
- $w_3 = a_3 - \langle a_3, q_1 \rangle q_1 - \langle a_3, q_2 \rangle q_2$
- $\langle a_3, q_1 \rangle = (1,-1,0) \cdot (0,0,-1) = 0$
- $\langle a_3, q_2 \rangle = (1,-1,0) \cdot (1,0,0) = 1$
- $w_3 = (1,-1,0) - 0 \cdot (0,0,-1) - 1 \cdot (1,0,0)$
- $w_3 = (1,-1,0) - (1,0,0) = (0,-1,0)$
- $\|w_3\| = \sqrt{0^2 + (-1)^2 + 0^2} = 1$
- $q_3 = \frac{w_3}{\|w_3\|} = (0,-1,0)$

### Step 2: Form matrix Q
$$Q = \left(\begin{array}{ccc}
0 & 1 & 0 \\
0 & 0 & -1 \\
-1 & 0 & 0
\end{array}\right)$$

### Step 3: Compute R = Q^T A
First, compute $Q^T$:
$$Q^T = \left(\begin{array}{ccc}
0 & 0 & -1 \\
1 & 0 & 0 \\
0 & -1 & 0
\end{array}\right)$$

Then:
$$R = Q^T A = \left(\begin{array}{ccc}
0 & 0 & -1 \\
1 & 0 & 0 \\
0 & -1 & 0
\end{array}\right) \left(\begin{array}{ccc}
0 & 1 & 1 \\
0 & 0 & -1 \\
-2 & -1 & 0
\end{array}\right)$$

Computing entry by entry:
- $R_{11} = (0,0,-1) \cdot (0,0,-2) = 2$
- $R_{12} = (0,0,-1) \cdot (1,0,-1) = 1$
- $R_{13} = (0,0,-1) \cdot (1,-1,0) = 0$
- $R_{21} = (1,0,0) \cdot (0,0,-2) = 0$
- $R_{22} = (1,0,0) \cdot (1,0,-1) = 1$
- $R_{23} = (1,0,0) \cdot (1,-1,0) = 1$
- $R_{31} = (0,-1,0) \cdot (0,0,-2) = 0$
- $R_{32} = (0,-1,0) \cdot (1,0,-1) = 0$
- $R_{33} = (0,-1,0) \cdot (1,-1,0) = 1$

Therefore:
$$R = \left(\begin{array}{lll}
2 & 1 & 0 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{array}\right)$$

### Step 4: Verify A = QR
We can verify:
$$QR = \left(\begin{array}{ccc}
0 & 1 & 0 \\
0 & 0 & -1 \\
-1 & 0 & 0
\end{array}\right) \left(\begin{array}{lll}
2 & 1 & 0 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{array}\right) = \left(\begin{array}{ccc}
0 & 1 & 1 \\
0 & 0 & -1 \\
-2 & -1 & 0
\end{array}\right) = A$$

## Final QR Decomposition
$$A = QR = \left(\begin{array}{ccc}
0 & 1 & 0 \\
0 & 0 & -1 \\
-1 & 0 & 0
\end{array}\right) \left(\begin{array}{lll}
2 & 1 & 0 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{array}\right)$$

## Key Insights
- The columns of $Q$ form an orthonormal basis for $\mathbb{R}^3$
- $R$ is upper triangular with positive diagonal entries
- The QR decomposition rapidly obtained due to simple structure of the columns
- The orthogonalization process was particularly efficient here

## Alternative Approaches
1. Could use modified Gram-Schmidt for improved numerical stability
2. Could compute $R$ entries directly using $R_{ij} = \langle a_j, q_i \rangle$
3. Could use Householder reflections or Givens rotations

## Common Mistakes
- Arithmetic errors in dot products
- Sign errors during orthogonalization
- Forgetting to normalize vectors
- Incorrect matrix multiplication when forming $R$

## Notes
- This matrix has a special structure where the Gram-Schmidt process is particularly simple
- The resulting $Q$ is a permutation matrix multiplied by sign changes
- QR decomposition is unique when diagonal entries of $R$ are positive
- The result can be used for solving linear systems efficiently
