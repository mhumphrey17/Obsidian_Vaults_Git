---
title: "PS09-Q03-Solution: Orthonormal Basis for a Subspace"
aliases: ["Solution to PS9 Q3"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-09", "difficulty-homework", "gram-schmidt", "orthonormal-basis"]
related_problem: [[PS09-Q03]]
---

# PS09-Q03-Solution: Orthonormal Basis for a Subspace

## Original Problem
Find an orthonormal basis of $U := \text{span}\{(1,1,0,0), (1,1,1,2)\} \leq \mathbb{R}^4$ with respect to the dot product.

## Solution Process

### Step 1: Verify vectors form a basis
Let $v_1 = (1,1,0,0)$ and $v_2 = (1,1,1,2)$.

Check linear independence: If $c_1 v_1 + c_2 v_2 = 0$, then:
- Component 1: $c_1 + c_2 = 0$
- Component 2: $c_1 + c_2 = 0$
- Component 3: $0c_1 + c_2 = 0 \Rightarrow c_2 = 0$
- Component 4: $0c_1 + 2c_2 = 0 \Rightarrow c_2 = 0$

From component 3 or 4, we get $c_2 = 0$. Substituting into component 1 gives $c_1 = 0$.
Therefore, $v_1$ and $v_2$ are linearly independent and form a basis for $U$.

### Step 2: Apply Gram-Schmidt orthogonalization
**Finding $w_1$:**
- $w_1 = v_1 = (1,1,0,0)$

**Finding $w_2$:**
- $w_2 = v_2 - \text{proj}_{w_1}(v_2)$
- $\text{proj}_{w_1}(v_2) = \frac{v_2 \cdot w_1}{w_1 \cdot w_1} w_1$

Calculate:
- $v_2 \cdot w_1 = (1,1,1,2) \cdot (1,1,0,0) = 1 + 1 + 0 + 0 = 2$
- $w_1 \cdot w_1 = (1,1,0,0) \cdot (1,1,0,0) = 1 + 1 + 0 + 0 = 2$

Therefore:
- $\text{proj}_{w_1}(v_2) = \frac{2}{2}(1,1,0,0) = (1,1,0,0)$
- $w_2 = (1,1,1,2) - (1,1,0,0) = (0,0,1,2)$

### Step 3: Normalize the orthogonal vectors
**For $w_1 = (1,1,0,0)$:**
- $\|w_1\| = \sqrt{1^2 + 1^2 + 0^2 + 0^2} = \sqrt{2}$
- $u_1 = \frac{w_1}{\|w_1\|} = \frac{1}{\sqrt{2}}(1,1,0,0)$

**For $w_2 = (0,0,1,2)$:**
- $\|w_2\| = \sqrt{0^2 + 0^2 + 1^2 + 2^2} = \sqrt{1 + 4} = \sqrt{5}$
- $u_2 = \frac{w_2}{\|w_2\|} = \frac{1}{\sqrt{5}}(0,0,1,2)$

### Step 4: Final orthonormal basis
The orthonormal basis for $U$ is:
$$\left\{\frac{1}{\sqrt{2}}(1,1,0,0), \frac{1}{\sqrt{5}}(0,0,1,2)\right\}$$

## Verification
1. Check unit length:
   - $\|u_1\|^2 = \frac{1}{2}(1^2 + 1^2) = 1$ ✓
   - $\|u_2\|^2 = \frac{1}{5}(1^2 + 2^2) = 1$ ✓

2. Check orthogonality:
   - $u_1 \cdot u_2 = \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{5}} \cdot [(1)(0) + (1)(0) + (0)(1) + (0)(2)] = 0$ ✓

## Key Insights
- The Gram-Schmidt process transforms a basis into an orthonormal basis
- The subspace $U$ has dimension 2
- The orthonormal basis allows for easy computation of projections and distances
- Different orderings of the original vectors yield different orthonormal bases

## Alternative Approaches
1. Could start with a different linearly independent pair spanning $U$
2. Could use modified Gram-Schmidt for better numerical stability
3. Could verify the result by checking that the original vectors are in the span of the orthonormal basis

## Common Mistakes
- Computational errors in dot products
- Forgetting to check linear independence first
- Incorrect normalization calculations
- Not verifying the final result

## Notes
- The orthonormal basis depends on the order of applying Gram-Schmidt
- This method generalizes to any finite-dimensional inner product space
- The orthonormal basis can be extended to an orthonormal basis for all of $\mathbb{R}^4$
- The subspace $U$ is a 2-dimensional plane in $\mathbb{R}^4$
