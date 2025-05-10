---
title: "2022-Q03-Solution: Determinant Computations"
aliases: ["Solution to Past Paper 2022 Q3"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2022-exam", "section-A", "q03"]
related_question: [[2022-Q03]]
solution_approach: "Row operations and structure recognition"
key_techniques: ["Elementary row operations", "Identical row property", "Triangular determinant", "Row swap counting"]
common_mistakes: ["Forgetting sign changes", "Miscounting swaps", "Calculation errors"]
---

# 2022-Q03-Solution: Determinant Computations

## Original Question
Compute the following determinants:

### Part (a)
$$\det\begin{pmatrix}
2 & 2 & 0 & 2 \\
2 & 2 & 1 & 3 \\
3 & 4 & 5 & 6 \\
3 & 4 & 6 & 7
\end{pmatrix}$$

### Part (b)
$$\det\begin{pmatrix}
0 & 0 & 0 & 5 \\
0 & 0 & 5 & 2023 \\
0 & 5 & 2023 & 2023 \\
5 & 2023 & 2023 & 2023
\end{pmatrix}$$

## Solution Process

### Part (a)

**Strategy**: Use row operations to find identical rows.

Step 1: Apply $R_2 \rightarrow R_2 - R_1$
$$\det\begin{pmatrix}
2 & 2 & 0 & 2 \\
0 & 0 & 1 & 1 \\
3 & 4 & 5 & 6 \\
3 & 4 & 6 & 7
\end{pmatrix}$$
(This operation doesn't change the determinant)

Step 2: Apply $R_4 \rightarrow R_4 - R_3$
$$\det\begin{pmatrix}
2 & 2 & 0 & 2 \\
0 & 0 & 1 & 1 \\
3 & 4 & 5 & 6 \\
0 & 0 & 1 & 1
\end{pmatrix}$$
(This operation doesn't change the determinant)

Step 3: Observe that $R_2 = R_4$

Since the matrix has two identical rows, the determinant is **0**.

### Part (b)

**Strategy**: Recognize the pattern as a permuted triangular matrix.

The matrix has a special structure - it's essentially upper triangular with all 5's on one diagonal and all 2023's elsewhere, but the rows/columns are permuted.

Step 1: Use row swaps to make upper triangular

Swap $R_1 \leftrightarrow R_4$: (multiply determinant by -1)
$$-\det\begin{pmatrix}
5 & 2023 & 2023 & 2023 \\
0 & 0 & 5 & 2023 \\
0 & 5 & 2023 & 2023 \\
0 & 0 & 0 & 5
\end{pmatrix}$$

Swap $R_2 \leftrightarrow R_3$: (multiply determinant by -1)
$$(-1) \times (-1) \times \det\begin{pmatrix}
5 & 2023 & 2023 & 2023 \\
0 & 5 & 2023 & 2023 \\
0 & 0 & 5 & 2023 \\
0 & 0 & 0 & 5
\end{pmatrix}$$

Step 2: Compute the determinant
Total sign change: $(-1) \times (-1) = 1$

The matrix is now upper triangular, so the determinant is the product of diagonal entries:
$$1 \times \det\begin{pmatrix}
5 & 2023 & 2023 & 2023 \\
0 & 5 & 2023 & 2023 \\
0 & 0 & 5 & 2023 \\
0 & 0 & 0 & 5
\end{pmatrix} = 5 \times 5 \times 5 \times 5 = 5^4 = 625$$

Therefore, the determinant is **625**.

## Key Insights

### Part (a)
- Row operations can reveal identical rows
- A matrix with identical rows has determinant zero
- Strategic row operations save computational effort

### Part (b)
- Recognizing special structures avoids lengthy calculations
- Permuted triangular matrices can be simplified with row swaps
- Count row swaps carefully to track sign changes

## Common Errors

1. **Part (a)**: Missing the identical rows after row operations
2. **Part (b)**: Miscounting the number of row swaps
3. Both parts: Calculation errors in row operations
4. **Part (b)**: Forgetting that diagonal product applies only to triangular matrices
