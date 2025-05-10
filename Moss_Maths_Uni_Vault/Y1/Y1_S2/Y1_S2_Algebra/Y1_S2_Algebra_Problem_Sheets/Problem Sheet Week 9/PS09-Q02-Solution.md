---
title: "PS09-Q02-Solution: QR Decomposition"
aliases: ["Solution to PS9 Q2"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-09", "difficulty-warmup", "qr-decomposition", "gram-schmidt"]
related_problem: [[PS09-Q02]]
---

# PS09-Q02-Solution: QR Decomposition

## Original Problem
Find the QR decomposition of the matrix $A$ given by

$$A = \left(\begin{array}{lll}
1 & 0 & 0 \\
1 & 1 & 1 \\
0 & 0 & 1
\end{array}\right)$$

## Solution Process

### Step 1: Apply Gram-Schmidt to columns of A
The columns of $A$ are: $a_1 = (1,1,0)$, $a_2 = (0,1,0)$, $a_3 = (0,1,1)$.

**Finding $q_1$:**
- $w_1 = a_1 = (1,1,0)$
- $\|w_1\| = \sqrt{1^2 + 1^2 + 0^2} = \sqrt{2}$
- $q_1 = \frac{w_1}{\|w_1\|} = \frac{1}{\sqrt{2}}(1,1,0)$

**Finding $q_2$:**
- $w_2 = a_2 - \langle a_2, q_1 \rangle q_1$
- $\langle a_2, q_1 \rangle = (0,1,0) \cdot \frac{1}{\sqrt{2}}(1,1,0) = \frac{1}{\sqrt{2}}$
- $w_2 = (0,1,0) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1,1,0) = (0,1,0) - \frac{1}{2}(1,1,0) = (-\frac{1}{2}, \frac{1}{2}, 0)$
- $\|w_2\| = \sqrt{(-\frac{1}{2})^2 + (\frac{1}{2})^2 + 0^2} = \sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}}$
- $q_2 = \frac{w_2}{\|w_2\|} = \frac{1}{\sqrt{2}}(-1,1,0)$

**Finding $q_3$:**
- $w_3 = a_3 - \langle a_3, q_1 \rangle q_1 - \langle a_3, q_2 \rangle q_2$
- $\langle a_3, q_1 \rangle = (0,1,1) \cdot \frac{1}{\sqrt{2}}(1,1,0) = \frac{1}{\sqrt{2}}$
- $\langle a_3, q_2 \rangle = (0,1,1) \cdot \frac{1}{\sqrt{2}}(-1,1,0) = \frac{1}{\sqrt{2}}$
- $w_3 = (0,1,1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1,1,0) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(-1,1,0)$
- $w_3 = (0,1,1) - \frac{1}{2}(1,1,0) - \frac{1}{2}(-1,1,0)$
- $w_3 = (0,1,1) - \frac{1}{2}[(1,1,0) + (-1,1,0)] = (0,1,1) - \frac{1}{2}(0,2,0) = (0,0,1)$
- $\|w_3\| = 1$
- $q_3 = (0,0,1)$

### Step 2: Form matrix Q
$$Q = \left(\begin{array}{ccc}
\frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} & 0 \\
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\
0 & 0 & 1
\end{array}\right)$$

### Step 3: Compute R = Q^T A
First, compute $Q^T$:
$$Q^T = \left(\begin{array}{ccc}
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\
-\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\
0 & 0 & 1
\end{array}\right)$$

Then:
$$R = Q^T A = \left(\begin{array}{ccc}
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\
-\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\
0 & 0 & 1
\end{array}\right) \left(\begin{array}{lll}
1 & 0 & 0 \\
1 & 1 & 1 \\
0 & 0 & 1
\end{array}\right)$$

$$R = \left(\begin{array}{lll}
\sqrt{2} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
0 & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
0 & 0 & 1
\end{array}\right)$$

### Step 4: Verify A = QR
We can check that:
$$QR = \left(\begin{array}{ccc}
\frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} & 0 \\
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\
0 & 0 & 1
\end{array}\right) \left(\begin{array}{lll}
\sqrt{2} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
0 & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
0 & 0 & 1
\end{array}\right) = A$$

## Final QR Decomposition
$$A = QR = \left(\begin{array}{ccc}
\frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} & 0 \\
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\
0 & 0 & 1
\end{array}\right) \left(\begin{array}{lll}
\sqrt{2} & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
0 & \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
0 & 0 & 1
\end{array}\right)$$

## Key Insights
- The columns of $Q$ are orthonormal (can be verified)
- $R$ is upper triangular with positive diagonal entries
- The diagonal entries of $R$ are the norms of the vectors at each Gram-Schmidt step
- The off-diagonal entries of $R$ are the projections computed during Gram-Schmidt

## Alternative Approaches
1. Could use modified Gram-Schmidt for better numerical stability
2. Could find $R$ directly using $R_{ij} = q_i^T a_j$
3. Could use Householder reflections (more efficient for large matrices)

## Common Mistakes
- Computational errors in Gram-Schmidt process
- Not properly normalizing vectors
- Incorrect matrix multiplication when computing $R$
- Forgetting that $Q^T = Q^{-1}$ for orthogonal matrices

## Notes
- QR decomposition is useful for solving least squares problems
- The orthogonal matrix $Q$ preserves lengths and angles
- This decomposition is unique if diagonal entries of $R$ are positive
- QR decomposition works for any matrix with linearly independent columns
