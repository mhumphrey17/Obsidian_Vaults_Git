---
title: "PS04-Q06-Solution: Strict Rank Inequality Example"
aliases: ["Solution to PS04 Q06"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-04", "difficulty-homework", "rank", "matrix-product", "counterexample"]
related_problem: [[PS04-Q06]]
---

# PS04-Q06-Solution: Strict Rank Inequality Example

## Original Problem

Find $2 \times 2$ matrices $A, B$ such that $\operatorname{rank}(AB) < \min\{\operatorname{rank} A, \operatorname{rank} B\}$.

## Solution

**Example:**
Let $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$.

**Verification:**

**Step 1: Calculate the ranks of A and B**
- $\operatorname{rank} A = 1$ (the first column is non-zero, but the second is zero)
- $\operatorname{rank} B = 1$ (the first column is non-zero, but the second is zero)

**Step 2: Calculate AB**
$$AB = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = 0$$

**Step 3: Calculate rank(AB)**
$\operatorname{rank}(AB) = \operatorname{rank}(0) = 0$

**Step 4: Verify the strict inequality**
$\operatorname{rank}(AB) = 0 < 1 = \min\{1, 1\} = \min\{\operatorname{rank} A, \operatorname{rank} B\}$

Therefore, we have shown that the inequality can indeed be strict. ∎

## Geometric Interpretation

**Why this works:**
- The column space of $B$ is $\text{span}\{(0,1)^T\}$
- The column space of $A$ is $\text{span}\{(1,0)^T\}$
- When we multiply $AB$, we're applying $A$ to the columns of $B$
- $A$ maps $(0,1)^T$ to $(0,0)^T$ (the zero vector)
- So all columns of $B$ get mapped to zero, resulting in $AB = 0$

## Key Insights

1. **Image and Kernel Interaction**: The strict inequality occurs when the image of $B$ maps into the kernel of $A$
2. **Rank Properties**: Even though both matrices have rank 1, their product has rank 0
3. **General Pattern**: This example generalizes - whenever $\text{Im}(B) \subseteq \ker(A)$, we get $AB = 0$

## Alternative Examples

Many other examples work similarly:
- $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$
- Any matrices where the image of one is contained in the kernel of the other

## Connection to Linear Maps

This example demonstrates that composition of linear maps can have rank less than either individual map. In terms of linear maps:
- $\phi_A: \mathbb{R}^2 \to \mathbb{R}^2$ projects onto the first coordinate
- $\phi_B: \mathbb{R}^2 \to \mathbb{R}^2$ projects onto the second coordinate
- $\phi_A \circ \phi_B$ is the zero map

## Common Mistakes

1. Trying to find examples where both matrices have rank 2 (impossible in $2 \times 2$ case)
2. Not verifying that the rank of the product is indeed smaller
3. Miscalculating matrix products or ranks
