---
title: "2023-Q07-Solution: Inner Products, Linear Systems, and Adjoints"
aliases: ["Solution to Past Paper 2023 Q7"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2023-exam", "section-b", "q7", "inner_products", "linear_systems", "adjoints"]
related_question: [[2023-Q07]]
solution_approach: "Definition recall, proof by contradiction, and dimensional analysis"
key_techniques: ["Inner product properties", "Orthogonality arguments", "Adjoint definition", "Rank-Nullity Theorem"]
common_mistakes: ["Incorrect inner product properties", "Missing contradiction in part (b)", "Confusing adjoint definition"]
---

# 2023-Q07-Solution: Inner Products, Linear Systems, and Adjoints

## Original Question

### Part (a)
Let V be a vector space over C. Define what it means for a map
V × V → C, (v, w) → ⟨v, w⟩
to be an inner product on V.

### Part (b)
Let A = (aᵢⱼ) be a 3 × 3 matrix over C with column vectors c₁, c₂, c₃ and let b = (bᵢ)
be a non-zero vector in C³ such that the dot product $\bar{b} \cdot c_j = 0$ for all j. Show that linear system Ax = b does not have a solution.

### Part (c)
Let V be an inner product space over C and φ: V → V a linear operator.
(i) Define what it means for a linear operator φ* to be an adjoint of φ.
(ii) Let U be a linear subspace of V. Define the orthogonal complement U⊥ of U.
(iii) Show that Ker φ = (Im φ*)⊥ and deduce that rank φ = rank φ*.

## Solution Process

### Part (a): Inner Product Definition

A map V × V → C: (v, w) → ⟨v, w⟩ is an **[[Inner Product|inner product]]** if it satisfies:

1. **Conjugate symmetric**: ⟨w, v⟩ = ⟨v, w⟩̄ for all v, w ∈ V
2. **Linear in the second slot**:
   - ⟨u, v + w⟩ = ⟨u, v⟩ + ⟨u, w⟩
   - ⟨u, λv⟩ = λ⟨u, v⟩
   for all u, v, w ∈ V and λ ∈ C
3. **Positive definite**: ⟨v, v⟩ ≥ 0 with equality if and only if v = 0

### Part (b): Linear System Unsolvability

**Proof by Contradiction:**

Assume (for contradiction) that a solution x exists for the linear system Ax = b.

Then:
$$b = x_1 c_1 + x_2 c_2 + x_3 c_3$$

Computing $\bar{b} \cdot b$:
$$\bar{b} \cdot b = \bar{b} \cdot (x_1 c_1 + x_2 c_2 + x_3 c_3)$$

Using linearity of the dot product in the second argument:
$$= \sum_{j=1}^3 x_j (\bar{b} \cdot c_j)$$

Using the given condition $\bar{b} \cdot c_j = 0$ for all j:
$$= \sum_{j=1}^3 x_j (0) = 0$$

But since b ≠ 0, we must have:
$$\bar{b} \cdot b = \sum_{i=1}^3 \bar{b}_i b_i = \sum_{i=1}^3 |b_i|^2 > 0$$

This is a contradiction! Therefore, the linear system has no solution.

### Part (c): Adjoint Operators and Rank

#### (i) Adjoint Definition
The linear operator φ* is an **[[Adjoint|adjoint]]** of φ if:
$$⟨v, φ(w)⟩ = ⟨φ^*(v), w⟩$$
for all v, w ∈ V.

#### (ii) Orthogonal Complement Definition
The **[[Orthogonal Complement|orthogonal complement]]** of U is:
$$U^⊥ = \{v ∈ V : ⟨u, v⟩ = 0 \text{ for all } u ∈ U\}$$

#### (iii) Ker φ = (Im φ*)⊥ and rank φ = rank φ*

**Proof of Equality:**

$$v ∈ (Im φ^*)^⊥ \iff ⟨φ^*(w), v⟩ = 0 \text{ for all } w ∈ V$$

Using the adjoint definition:
$$\iff ⟨w, φ(v)⟩ = 0 \text{ for all } w ∈ V$$

By non-degeneracy of the inner product:
$$\iff φ(v) = 0$$
$$\iff v ∈ Ker φ$$

Therefore: $Ker φ = (Im φ^*)^⊥$

**Deduction of Rank Equality:**

By the Rank-Nullity Theorem:
$$dim V = dim Im φ + dim Ker φ$$

Using the property of orthogonal complements:
$$dim V = dim Im φ^* + dim (Im φ^*)^⊥$$

Substituting Ker φ = (Im φ*)⊥:
$$dim V = dim Im φ^* + dim Ker φ$$

Comparing the two equations:
$$dim Im φ + dim Ker φ = dim Im φ^* + dim Ker φ$$

Therefore:
$$dim Im φ = dim Im φ^*$$

Hence: $rank φ = rank φ^*$

## Key Insights

1. **Inner Product Properties**: The three axioms completely characterize inner products on complex vector spaces

2. **Orthogonality and Solvability**: Part (b) shows that if b is orthogonal to the column space of A, then Ax = b has no solution - a fundamental result connecting geometry and linear algebra

3. **Adjoint Symmetry**: The relationship Ker φ = (Im φ*)⊥ is a beautiful duality result

4. **Rank Preservation**: The equality of ranks for an operator and its adjoint is a deep result with many applications

## Alternative Approaches

For part (c)(iii):
- Could use the theorem that V = Im φ ⊕ Ker φ* directly
- Could work with matrix representations, but the abstract approach is more general

## Common Errors

1. **Conjugate Placement**: In the inner product definition, placing the conjugate incorrectly
2. **Linearity Slot**: Confusing which argument is linear (second slot) vs conjugate-linear (first slot)
3. **Contradiction Setup**: In part (b), not properly using the linearity of the dot product
4. **Adjoint Definition**: Mixing up the arguments in the adjoint definition

## Notes

This problem elegantly connects:
- Abstract definitions (inner products)
- Practical linear algebra (system solvability)
- Advanced operator theory (adjoints and rank)

The progression from basic definitions to sophisticated results exemplifies the depth of modern linear algebra.
