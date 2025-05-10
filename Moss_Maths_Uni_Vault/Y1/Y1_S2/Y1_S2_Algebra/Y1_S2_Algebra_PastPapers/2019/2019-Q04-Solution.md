---
title: "2019-Q04-Solution: Determinant Computations"
aliases: ["Solution to 2019 Q4"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2019", "difficulty-standard", "determinant", "row-operations", "cofactor-expansion"]
related_question: [[2019-Q04]]
---

# 2019-Q04-Solution: Determinant Computations

## Original Question
Evaluate the following determinants:

(a) $\begin{vmatrix} 1 & 0 & 3 & -4 \\ 0 & 1 & 1 & 7 \\ 2 & -1 & 1 & 0 \\ 3 & 5 & 0 & 1 \end{vmatrix}$

(b) $\begin{vmatrix} 54 & 4 & -6 & 54 & -23 & 8 \\ -37 & -5 & 11 & -37 & 2 & 5 \\ -17 & 18 & -3 & -17 & 13 & -1 \\ 44 & 8 & -3 & 44 & 9 & -9 \\ 212 & 0 & -3 & 212 & -3 & 22 \\ 1 & -7 & 6 & 1 & 4 & -7 \end{vmatrix}$

## Solution Process

### Part (a)
**Method:** Use row operations followed by cofactor expansion

Starting matrix:
$$\begin{vmatrix} 1 & 0 & 3 & -4 \\ 0 & 1 & 1 & 7 \\ 2 & -1 & 1 & 0 \\ 3 & 5 & 0 & 1 \end{vmatrix}$$

**Step 1:** Eliminate elements below the first pivot
- $R_3 \rightarrow R_3 - 2R_1$
- $R_4 \rightarrow R_4 - 3R_1$

$$= \begin{vmatrix} 1 & 0 & 3 & -4 \\ 0 & 1 & 1 & 7 \\ 0 & -1 & -5 & 8 \\ 0 & 5 & -9 & 13 \end{vmatrix}$$

**Step 2:** Expand along the first column (only one non-zero entry)
$$= 1 \cdot \begin{vmatrix} 1 & 1 & 7 \\ -1 & -5 & 8 \\ 5 & -9 & 13 \end{vmatrix}$$

**Step 3:** Simplify the 3×3 determinant
- $R_2 \rightarrow R_2 + R_1$
- $R_3 \rightarrow R_3 - 5R_1$

$$= \begin{vmatrix} 1 & 1 & 7 \\ 0 & -4 & 15 \\ 0 & -14 & -22 \end{vmatrix}$$

**Step 4:** Expand along the first column
$$= 1 \cdot \begin{vmatrix} -4 & 15 \\ -14 & -22 \end{vmatrix}$$

**Step 5:** Calculate the 2×2 determinant
$$= (-4)(-22) - (15)(-14) = 88 - (-210) = 88 + 210 = 298$$

**Answer for part (a): 298**

### Part (b)
**Method:** Recognize special structure

Looking at the 6×6 matrix:
$$\begin{vmatrix} 54 & 4 & -6 & 54 & -23 & 8 \\ -37 & -5 & 11 & -37 & 2 & 5 \\ -17 & 18 & -3 & -17 & 13 & -1 \\ 44 & 8 & -3 & 44 & 9 & -9 \\ 212 & 0 & -3 & 212 & -3 & 22 \\ 1 & -7 & 6 & 1 & 4 & -7 \end{vmatrix}$$

**Observation:** Notice that columns 1 and 4 are identical!
- Column 1: $(54, -37, -17, 44, 212, 1)^T$
- Column 4: $(54, -37, -17, 44, 212, 1)^T$

**Property:** If a matrix has two identical columns (or rows), its determinant is zero.

**Answer for part (b): 0**

## Key Steps and Justifications
1. **Part (a)**: Used systematic row operations to create zeros, then applied cofactor expansion
2. **Part (b)**: Recognized identical columns, applying the fundamental property of determinants

## Alternative Approaches
- Part (a) could use direct cofactor expansion, but would be more tedious
- Part (b) could be computed directly, but would be unnecessarily complex

## Common Mistakes
- Arithmetic errors during row operations
- Missing the identical columns in part (b)
- Sign errors in cofactor expansion

## Mark Scheme Breakdown
- Part (a): 3-4 marks for systematic calculation to correct answer (298)
- Part (b): 1-2 marks for recognizing identical columns and concluding determinant is 0