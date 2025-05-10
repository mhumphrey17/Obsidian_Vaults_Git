---
title: "PS09-Q01-Solution: Orthonormal Basis for a Subspace"
aliases: ["Solution to PS9 Q1"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-09", "difficulty-warmup", "gram-schmidt", "orthonormal-basis"]
related_problem: [[PS09-Q01]]
---

# PS09-Q01-Solution: Orthonormal Basis for a Subspace

## Original Problem
Find an orthonormal basis for the subspace $U := \{(x_1, x_2, x_3) | x_1 + 2x_2 + 3x_3 = 0\}$ of $\mathbb{R}^3$ with respect to the dot product.

## Solution Process

### Step 1: Find a basis for U
The subspace $U$ is the set of all vectors perpendicular to the normal vector $(1, 2, 3)$.

To find a basis, we need two linearly independent vectors in $U$:
- Let $x_3 = 1$ and $x_2 = 0$, then $x_1 = -3$. So $v_1 = (-3, 0, 1)$ is in $U$.
- Let $x_3 = 0$ and $x_2 = 1$, then $x_1 = -2$. So $v_2 = (-2, 1, 0)$ is in $U$.

We can verify: $v_1 \cdot (1,2,3) = -3 + 0 + 3 = 0$ and $v_2 \cdot (1,2,3) = -2 + 2 + 0 = 0$.

### Step 2: Apply Gram-Schmidt orthogonalization
Starting with $\{v_1, v_2\}$:

First, set $w_1 = v_1 = (-3, 0, 1)$.

Then:
$$w_2 = v_2 - \text{proj}_{w_1}(v_2) = v_2 - \frac{v_2 \cdot w_1}{w_1 \cdot w_1} w_1$$

Compute:
- $v_2 \cdot w_1 = (-2)(-3) + (1)(0) + (0)(1) = 6$
- $w_1 \cdot w_1 = (-3)^2 + 0^2 + 1^2 = 9 + 1 = 10$

Therefore:
$$w_2 = (-2, 1, 0) - \frac{6}{10}(-3, 0, 1) = (-2, 1, 0) - (-\frac{9}{5}, 0, \frac{3}{5})$$
$$= (-2, 1, 0) + (\frac{9}{5}, 0, -\frac{3}{5}) = (-\frac{1}{5}, 1, -\frac{3}{5})$$

Multiplying by 5 to clear denominators: $w_2 = (-1, 5, -3)$

### Step 3: Normalize the orthogonal vectors
To get orthonormal vectors, we normalize:

For $w_1 = (-3, 0, 1)$:
$$\|w_1\| = \sqrt{(-3)^2 + 0^2 + 1^2} = \sqrt{9 + 1} = \sqrt{10}$$
$$u_1 = \frac{w_1}{\|w_1\|} = \frac{1}{\sqrt{10}}(-3, 0, 1)$$

For $w_2 = (-1, 5, -3)$:
$$\|w_2\| = \sqrt{(-1)^2 + 5^2 + (-3)^2} = \sqrt{1 + 25 + 9} = \sqrt{35}$$
$$u_2 = \frac{w_2}{\|w_2\|} = \frac{1}{\sqrt{35}}(-1, 5, -3)$$

### Step 4: Final orthonormal basis
The orthonormal basis for $U$ is:
$$\left\{\frac{1}{\sqrt{10}}(-3, 0, 1), \frac{1}{\sqrt{35}}(-1, 5, -3)\right\}$$

## Verification
1. Both vectors are in $U$ (satisfy the constraint equation)
2. They are orthogonal: $u_1 \cdot u_2 = 0$
3. Both have unit length: $\|u_1\| = \|u_2\| = 1$

## Key Insights
- The subspace $U$ is a plane through the origin in $\mathbb{R}^3$
- Gram-Schmidt produces an orthogonal basis from any basis
- Normalization ensures all vectors have unit length
- Different initial bases yield different orthonormal bases for the same subspace

## Alternative Approaches
1. Could start with different vectors in $U$
2. Could use the fact that $U$ is the orthogonal complement of $\text{span}\{(1,2,3)\}$
3. Could find the projection matrix onto $U$ and extract an orthonormal basis

## Common Mistakes
- Not verifying that chosen vectors are actually in the subspace
- Computational errors in Gram-Schmidt calculations
- Forgetting to normalize at the end
- Not checking orthogonality of the final vectors

## Notes
- The dimension of $U$ is 2 (codimension 1 in $\mathbb{R}^3$)
- Any orthonormal basis for $U$ can be extended to an orthonormal basis for $\mathbb{R}^3$
- The normal vector $(1,2,3)$ is orthogonal to both basis vectors
