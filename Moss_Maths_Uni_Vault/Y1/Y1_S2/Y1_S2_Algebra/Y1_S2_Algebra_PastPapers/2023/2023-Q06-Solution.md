---
title: "2023-Q06-Solution: Rank, Nullity, and Projection Operators"
aliases: ["Solution to Past Paper 2023 Q6"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2023-exam", "section-b", "q6", "rank", "nullity", "projection"]
related_question: [[2023-Q06]]
solution_approach: "Definition recall combined with projection operator analysis"
key_techniques: ["Rank-Nullity Theorem", "Projection properties", "Eigenvalue analysis", "Diagonalizability criteria"]
common_mistakes: ["Confusing ker π with eigenspaces", "Forgetting to use the projection property", "Incorrect multiplicity calculations"]
---

# 2023-Q06-Solution: Rank, Nullity, and Projection Operators

## Original Question

### Part (a)
(i) Define the rank and nullity of a linear map and state the Rank-Nullity-Theorem.
(ii) Define what it means for a list in a vector space to be a basis.

### Part (b)
Let V = {(x, y, z) | x + y + z = 0} ⊂ R³, and let π: R³ → R³ be a linear operator
such that π∘π = π and Im π = V.

(i) Find a basis for V.
(ii) Show that 0 and 1 are eigenvalues of π, and compute their geometric and
algebraic multiplicities.
(iii) Is π diagonalisable? Justify your answer.

## Solution Process

### Part (a): Definitions

#### (i) Rank, Nullity, and Rank-Nullity Theorem

Let φ: V → W be a linear map.

- The **[[Rank|rank]]** of φ is dim Im φ
- The **[[Nullity|nullity]]** of φ is dim Ker φ

**[[Rank-Nullity Theorem]]**: dim V = rank φ + nullity φ

#### (ii) Basis Definition

A list of vectors α: v₁, ..., vₙ in V is a **[[Basis|basis]]** if:
1. α is **linearly independent**: $\sum_i c_i v_i = 0$ implies cᵢ = 0 for all i
2. α is **spanning**: any vector v ∈ V can be written as a linear combination of α

### Part (b): Projection Operator Analysis

#### (i) Basis for V

V = {(x, y, z) | x + y + z = 0} is a subspace of R³.

From the constraint x + y + z = 0, we get x = -y - z.
So a general vector in V is:
(x, y, z) = (-y - z, y, z) = y(-1, 1, 0) + z(-1, 0, 1)

Therefore, v₁ = (-1, 1, 0) and v₂ = (-1, 0, 1) form a basis for V.

#### (ii) Eigenvalues and Multiplicities

**Finding Eigenvalue 0:**

By the Rank-Nullity Theorem: dim R³ = rank π + nullity π
Since Im π = V and dim V = 2, we have rank π = 2.
Therefore: 3 = 2 + nullity π, so nullity π = 1.

Let v₃ ∈ Ker π with v₃ ≠ 0. Then π(v₃) = 0 = 0·v₃.
So 0 is an eigenvalue with eigenvector v₃.
The 0-eigenspace is E(0) = Ker π, so g.m.(0) = dim Ker π = 1.

**Finding Eigenvalue 1:**

Since Im π = V, there exist u₁, u₂ ∈ R³ such that π(u₁) = v₁ and π(u₂) = v₂.

Using the projection property π∘π = π:
- π(v₁) = π(π(u₁)) = π²(u₁) = π(u₁) = v₁
- π(v₂) = π(π(u₂)) = π²(u₂) = π(u₂) = v₂

Therefore, π(vᵢ) = vᵢ for i = 1, 2, so v₁ and v₂ are eigenvectors for eigenvalue 1.
The 1-eigenspace contains V, so E(1) = V and g.m.(1) = dim V = 2.

**Algebraic Multiplicities:**

Since 1 ≤ g.m.(λ) ≤ a.m.(λ) for any eigenvalue, and the sum of a.m. equals the degree of the characteristic polynomial (which is 3 for a 3×3 matrix):
- We have g.m.(0) = 1, so a.m.(0) ≥ 1
- We have g.m.(1) = 2, so a.m.(1) ≥ 2
- Since a.m.(0) + a.m.(1) ≤ 3, we must have a.m.(0) = 1 and a.m.(1) = 2

#### (iii) Diagonalizability

Using the given hint: v₁, v₂ (from E(1)) and v₃ (from E(0)) are linearly independent since they come from distinct eigenspaces.

Since R³ has dimension 3 and we have 3 linearly independent eigenvectors, π has an eigenbasis. Therefore, π is diagonalisable.

Alternatively: Since g.m.(0) = a.m.(0) = 1 and g.m.(1) = a.m.(1) = 2, the diagonalizability criterion is satisfied.

## Key Insights

1. **Projection Property**: The constraint π² = π is crucial for finding eigenvalues. If x is an eigenvector with eigenvalue λ, then π²(x) = λ²x = π(x) = λx, so λ² = λ, giving λ = 0 or λ = 1.

2. **Dimension Analysis**: The Rank-Nullity Theorem provides the key to determining the dimension of eigenspaces.

3. **Image as Eigenspace**: The condition Im π = V directly gives us the 1-eigenspace.

4. **Diagonalizability Criterion**: Having enough linearly independent eigenvectors (equal to the dimension of the space) ensures diagonalizability.

## Alternative Approaches

Could attempt to find a matrix representation of π first, but working directly with the operator properties is more elegant and insightful.

## Common Errors

1. **Confusing Spaces**: Mixing up Ker π with E(0) or Im π with E(1)
2. **Missing the Projection**: Not using π² = π to constrain eigenvalues
3. **Dimension Mistakes**: Errors in applying the Rank-Nullity Theorem
4. **Independence Assumption**: Trying to prove independence of eigenvectors without using the hint

## Notes

This problem demonstrates:
- The power of the Rank-Nullity Theorem for dimensional analysis
- How special operator properties (like being a projection) constrain eigenvalues
- The connection between algebraic properties (diagonalizability) and geometric properties (eigenbases)
- The importance of systematic application of definitions and theorems
