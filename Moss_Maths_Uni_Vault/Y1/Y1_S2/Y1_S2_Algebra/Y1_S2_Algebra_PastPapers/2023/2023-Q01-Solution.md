---
title: "2023-Q01-Solution: True/False Statements - Vector Spaces and Matrices"
aliases: ["Solution to Past Paper 2023 Q1"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2023-exam", "section-a", "q1", "subspaces", "determinants"]
related_question: [[2023-Q01]]
solution_approach: "Direct recall of fundamental definitions and theorems"
key_techniques: ["Definition checking", "Property recall"]
common_mistakes: ["Confusing dimension formula for sums", "Forgetting exponent in scalar determinant"]
---

# 2023-Q01-Solution: True/False Statements - Vector Spaces and Matrices

## Original Question
Let U and W be subspaces of a vector space V over C, and let A, B be n×n matrices over C. Are the following true or false?

(a) The intersection of U and W is again a subspace of V.
(b) dim(U+ W) = dim U + dim W.
(c) Any linear map f: V → V can be represented by a square matrix.
(d) det(AB) = det A det B.
(e) det AB = Adet B, where λ∈ C.
(f) A self-adjoint operator is normal.

## Solution

**Answer: TFTTFT**

## Detailed Explanation

### Part (a): TRUE
The intersection of any collection of subspaces is always a [[Subspace|subspace]]. This is because:
- It contains the zero vector (as both U and W contain it)
- It is closed under addition (if u, v ∈ U ∩ W, then u + v ∈ U and u + v ∈ W)
- It is closed under scalar multiplication (if u ∈ U ∩ W and λ ∈ C, then λu ∈ U and λu ∈ W)

### Part (b): FALSE
The correct [[Sum of Subspaces|dimension formula]] is:
$$\dim(U + W) + \dim(U \cap W) = \dim U + \dim W$$

The statement would only be true if $\dim(U \cap W) = 0$, which is not necessarily the case.

### Part (c): TRUE
Since V is finite-dimensional (stated in problem), any [[Linear Map|linear map]] f: V → V can be represented by a square matrix once a basis is chosen for V. The matrix is square because the domain and codomain have the same dimension.

### Part (d): TRUE
This is the classic [[Product Formula for Determinants]]:
$$\det(AB) = \det(A) \cdot \det(B)$$

This is a fundamental property of determinants.

### Part (e): FALSE
The correct formula for scalar multiplication and determinants uses the [[Multilinearity of Determinants]]:
$$\det(\lambda A) = \lambda^n \det(A)$$

for an n×n matrix A. The statement would only be true if n = 1.

### Part (f): TRUE
Every [[Self-adjoint|self-adjoint operator]] is [[Normal|normal]]. 

If T is self-adjoint, then T* = T.
A normal operator satisfies T*T = TT*.
For a self-adjoint operator: T*T = TT = TT* ✓

## Key Insights
- Questions (a) and (b) test fundamental properties of subspaces
- Questions (c), (d), and (e) test matrix/linear map theory
- Question (f) tests knowledge of operator theory in inner product spaces
- The pattern of answers (T-F-T-T-F-T) suggests careful consideration of each statement

## Common Errors
1. In (b), forgetting the intersection term in the dimension formula
2. In (e), incorrectly assuming the determinant of a scalar multiple is just the scalar times the determinant
3. In (f), confusing the direction of implication (normal does not imply self-adjoint)
