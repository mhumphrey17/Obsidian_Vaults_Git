---
title: "PS02-Q04-Solution: Linear Independence, Spanning, and Basis in R^3 (with Zero Vector)"
aliases: ["Solution to PS02 Q04"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-02", "difficulty-homework", "zero-vector", "linear-independence", "spanning", "basis"]
related_problem: [[PS02-Q04]]
---

# PS02-Q04-Solution: Linear Independence, Spanning, and Basis in R^3 (with Zero Vector)

## Original Problem

Determine which of the following lists of vectors in $\mathbb{R}^3$ are linearly independent, spanning, and/or bases:

(i) $\mathbf{0}, \mathbf{v}_2, \mathbf{v}_5$

(ii) $\mathbf{v}_1, \mathbf{v}_3, \mathbf{v}_4, \mathbf{v}_5$

(iii) $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$

## Solution Process

### Part (i): $\mathbf{0}, \mathbf{v}_2, \mathbf{v}_5$

**Linear Independence:** Any list containing the zero vector is automatically linearly dependent. 

We can explicitly write the dependence relation: $1 \cdot \mathbf{0} + 0 \cdot \mathbf{v}_2 + 0 \cdot \mathbf{v}_5 = \mathbf{0}$.

This is a non-trivial linear combination (not all coefficients are zero) that equals the zero vector.

**Spanning:** The span of this list is the same as $\text{span}\{\mathbf{v}_2, \mathbf{v}_5\}$ since adding the zero vector to any set doesn't change its span.

From Q1, we know that $\mathbf{v}_2$ and $\mathbf{v}_5$ don't span $\mathbb{R}^3$ (need at least 3 linearly independent vectors to span $\mathbb{R}^3$).

**Result:** Not linearly independent, not spanning, not a basis.

### Part (ii): $\mathbf{v}_1, \mathbf{v}_3, \mathbf{v}_4, \mathbf{v}_5$

**Linear Independence:** Since we have 4 vectors in $\mathbb{R}^3$, they cannot be linearly independent. We can use the same dependence relation from Q1: $-3\mathbf{v}_1 + \mathbf{v}_3 + \mathbf{v}_4 = \mathbf{0}$, which means $-3\mathbf{v}_1 + \mathbf{v}_3 + \mathbf{v}_4 + 0\mathbf{v}_5 = \mathbf{0}$.

**Spanning:** Let's check by Gaussian elimination:
$$\left(\begin{array}{llll}
1 & 1 & 2 & 3 \\
2 & 3 & 3 & 4 \\
3 & 5 & 4 & 5
\end{array}\right) \xrightarrow{\text{REF}} \left(\begin{array}{cccc}
1 & 1 & 2 & 3 \\
0 & 1 & -1 & -2 \\
0 & 0 & 0 & 0
\end{array}\right)$$

Since the REF has a zero row, the list does not span $\mathbb{R}^3$.

**Result:** Not linearly independent, not spanning, not a basis.

### Part (iii): $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$

From Q1(ii), the matrix with columns $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$ has REF:
$$\left(\begin{array}{lll}
1 & 1 & 1 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{array}\right)$$

**Linear Independence:** The REF has a pivot in every column, so the vectors are linearly independent.

**Spanning:** The REF has no zero rows, so the vectors span $\mathbb{R}^3$.

**Result:** Linearly independent, spanning, and therefore a basis.

## Key Insights

1. **Zero Vector Impact**: The zero vector automatically makes any list linearly dependent but doesn't change the span
2. **Dimension Constraint**: In $\mathbb{R}^n$, any set with more than $n$ vectors is linearly dependent
3. **Basis Criteria**: A basis in $\mathbb{R}^n$ must have exactly $n$ vectors that are linearly independent (or equivalently, spanning)
4. **Row Operations**: Gaussian elimination efficiently checks both properties simultaneously

## Comparison with Q1

Notice that parts (ii) and (iii) correspond to cases from Q1, but with some vectors removed. Removing vectors:
- Can't make a dependent set independent (dependence relations still hold)
- Can make a spanning set non-spanning (lose coverage of the space)
- Can make a non-spanning set spanning (if we remove redundant vectors)

## Common Mistakes

1. Forgetting that the zero vector makes any list dependent
2. Not recognizing dimension constraints on linear independence
3. Assuming that subsets of spanning sets always span
4. Confusing linear independence with spanning
