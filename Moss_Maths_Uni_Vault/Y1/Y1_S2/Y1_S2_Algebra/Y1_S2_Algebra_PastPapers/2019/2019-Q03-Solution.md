---
title: "2019-Q03-Solution: Matrix Inverses Solutions"
aliases: ["Solution to 2019 Q3"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2019", "difficulty-standard", "matrix-inverse", "invertibility", "gaussian-elimination"]
related_question: [[2019-Q03]]
---

# 2019-Q03-Solution: Matrix Inverses Solutions

## Original Question
For each matrix, explain why it's not invertible or write down its inverse:

(a) $\begin{pmatrix} 5 & 3 \\ 1 & 1 \end{pmatrix}$

(b) $\begin{pmatrix} 3 & 7 & -4 & 2 \\ 9 & -8 & 2 & -1 \\ -1 & 3 & 7 & 2 \end{pmatrix}$

(c) $\begin{pmatrix} 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ -1 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 \end{pmatrix}$

## Solution Process

### Part (a)
**Method:** Use the 2×2 inverse formula $A^{-1} = \frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$

For $A = \begin{pmatrix} 5 & 3 \\ 1 & 1 \end{pmatrix}$:
- Calculate determinant: $\det(A) = 5(1) - 3(1) = 5 - 3 = 2$
- Since $\det(A) \neq 0$, the matrix is invertible

**Inverse:**
$$A^{-1} = \frac{1}{2}\begin{pmatrix} 1 & -3 \\ -1 & 5 \end{pmatrix} = \begin{pmatrix} 1/2 & -3/2 \\ -1/2 & 5/2 \end{pmatrix}$$

### Part (b)
**Matrix:** $\begin{pmatrix} 3 & 7 & -4 & 2 \\ 9 & -8 & 2 & -1 \\ -1 & 3 & 7 & 2 \end{pmatrix}$

**Analysis:** This is a 3×4 matrix.

**Conclusion:** This matrix is **not invertible** because it is not square. Only square matrices can be invertible.

### Part (c)
**Matrix:** $\begin{pmatrix} 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & -1 & 0 \\ 0 & 0 & 0 & 0 & 1 \\ -1 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 & 0 \end{pmatrix}$

**Method:** Use Gaussian elimination on the augmented matrix $[A|I_5]$

Setting up:
$$\begin{pmatrix}
0 & 0 & 1 & 0 & 0 & | & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & 0 & | & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & | & 0 & 0 & 1 & 0 & 0 \\
-1 & 0 & 0 & 0 & 0 & | & 0 & 0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 & 0 & | & 0 & 0 & 0 & 0 & 1
\end{pmatrix}$$

**Row operations:**
1. Swap R1 and R4:
$$\begin{pmatrix}
-1 & 0 & 0 & 0 & 0 & | & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & -1 & 0 & | & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & | & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & | & 1 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & | & 0 & 0 & 0 & 0 & 1
\end{pmatrix}$$

2. Multiply R1 by -1:
$$\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & | & 0 & 0 & 0 & -1 & 0 \\
0 & 0 & 0 & -1 & 0 & | & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & | & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & | & 1 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & | & 0 & 0 & 0 & 0 & 1
\end{pmatrix}$$

3. Multiply R2 by -1:
$$\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & | & 0 & 0 & 0 & -1 & 0 \\
0 & 0 & 0 & 1 & 0 & | & 0 & -1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & | & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & | & 1 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & | & 0 & 0 & 0 & 0 & 1
\end{pmatrix}$$

4. Swap R2 and R5:
$$\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & | & 0 & 0 & 0 & -1 & 0 \\
0 & 1 & 0 & 0 & 0 & | & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 & 1 & | & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & | & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & | & 0 & -1 & 0 & 0 & 0
\end{pmatrix}$$

5. Swap R3 and R4:
$$\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & | & 0 & 0 & 0 & -1 & 0 \\
0 & 1 & 0 & 0 & 0 & | & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 & 0 & | & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & | & 0 & -1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & | & 0 & 0 & 1 & 0 & 0
\end{pmatrix}$$

**Inverse:**
$$A^{-1} = \begin{pmatrix}
0 & 0 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 & 1 \\
1 & 0 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0
\end{pmatrix}$$

## Key Steps and Justifications
1. **Part (a)**: Applied 2×2 inverse formula after checking determinant
2. **Part (b)**: Recognized dimension mismatch (not square)
3. **Part (c)**: Used systematic Gaussian elimination to find inverse

## Alternative Approaches
- Part (c) could potentially recognize this as a permutation matrix with signs
- Determinant method could be used for Part (c) but would be more complex

## Common Mistakes
- Arithmetic errors in 2×2 inverse calculation
- Forgetting that non-square matrices cannot be invertible
- Errors in row operations for larger matrices

## Mark Scheme Breakdown
- Part (a): 1-2 marks for correct inverse calculation
- Part (b): 1-2 marks for correct explanation
- Part (c): 2-3 marks for systematic calculation of inverse