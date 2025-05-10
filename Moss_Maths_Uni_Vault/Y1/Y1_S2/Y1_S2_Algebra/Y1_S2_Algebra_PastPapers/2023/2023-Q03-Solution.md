---
title: "2023-Q03-Solution: Linear Operator Matrix Representation and Determinant"
aliases: ["Solution to Past Paper 2023 Q3"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2023-exam", "section-a", "q3", "linear_operator", "matrix_representation", "determinant"]
related_question: [[2023-Q03]]
solution_approach: "Step-by-step application of definition for matrix representation, then triangular determinant"
key_techniques: ["Coordinate vector calculation", "Triangular matrix determinant", "Invertibility criterion"]
common_mistakes: ["Row/column confusion in matrix construction", "Calculation errors in determinant", "Misunderstanding operator-matrix relationship"]
---

# 2023-Q03-Solution: Linear Operator Matrix Representation and Determinant

## Original Question
Let V be a 4-dimensional vector space with a basis α: v₁, ..., v₄, and let φ: V → V be
the linear operator defined by φ(v₁) = v₁ and φ(vⱼ) = jvⱼ + vⱼ₋₁ for j ≥ 2.

(a) Find the matrix representing the linear operator φ with respect to the basis α.
(b) Compute the determinant of φ and determine whether φ is invertible.

## Solution

### Part (a): Matrix Representation

The [[Matrix Representation|matrix representation]] A of φ with respect to basis α has as its j-th column the coordinate vector of φ(vⱼ).

**Step 1: Find φ(vⱼ) for each j**
- φ(v₁) = v₁
- φ(v₂) = 2v₂ + v₁
- φ(v₃) = 3v₃ + v₂
- φ(v₄) = 4v₄ + v₃

**Step 2: Write coordinate vectors**
- φ(v₁) = 1·v₁ + 0·v₂ + 0·v₃ + 0·v₄   → Column 1: (1, 0, 0, 0)ᵀ
- φ(v₂) = 1·v₁ + 2·v₂ + 0·v₃ + 0·v₄   → Column 2: (1, 2, 0, 0)ᵀ
- φ(v₃) = 0·v₁ + 1·v₂ + 3·v₃ + 0·v₄   → Column 3: (0, 1, 3, 0)ᵀ
- φ(v₄) = 0·v₁ + 0·v₂ + 1·v₃ + 4·v₄   → Column 4: (0, 0, 1, 4)ᵀ

**Step 3: Construct the matrix**

$$A = \begin{pmatrix}
1 & 1 & 0 & 0 \\
0 & 2 & 1 & 0 \\
0 & 0 & 3 & 1 \\
0 & 0 & 0 & 4
\end{pmatrix}$$

### Part (b): Determinant and Invertibility

**Step 1: Identify matrix type**
The matrix A is [[Triangular Matrix|upper triangular]].

**Step 2: Calculate determinant**
For a triangular matrix, the determinant equals the product of diagonal entries:

$$\det(A) = 1 \times 2 \times 3 \times 4 = 24$$

**Step 3: Determine invertibility**
Since det(A) = 24 ≠ 0, the matrix A is [[Invertible Matrix|invertible]].

Therefore, the linear operator φ is invertible.

## Key Insights

1. **Pattern Recognition**: The operator φ follows the pattern φ(vⱼ) = jvⱼ + vⱼ₋₁, which naturally creates an upper triangular matrix.

2. **Matrix Structure**: The resulting matrix has:
   - Diagonal entries: 1, 2, 3, 4
   - Super-diagonal entries: all 1
   - All other entries: 0

3. **Determinant Calculation**: For upper triangular matrices, the determinant is simply the product of diagonal entries.

4. **Invertibility**: A linear operator is invertible if and only if its matrix representation (with respect to any basis) is invertible.

## Connection Between Operator and Matrix
The relationship between φ and its matrix representation A is:
$$\phi = \Phi^{-1}A\Phi$$
where Φ is the coordinate map. Since A is invertible, φ is invertible.

## Alternative Verification
We could verify that φ is invertible by finding its inverse:
- φ⁻¹(v₁) = v₁
- φ⁻¹(v₂) = ½v₂ - ½v₁
- φ⁻¹(v₃) = ⅓v₃ - ⅓v₂
- φ⁻¹(v₄) = ¼v₄ - ¼v₃

This shows that φ has an inverse, confirming it's invertible.
