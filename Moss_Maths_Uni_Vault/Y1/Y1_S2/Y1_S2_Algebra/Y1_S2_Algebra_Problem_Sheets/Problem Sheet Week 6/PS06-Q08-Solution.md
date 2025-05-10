---
title: "PS06-Q08-Solution: Rank, Submatrices, and Adjugate"
aliases: ["Solution to PS6 Q8"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-06", "difficulty-advanced", "rank", "adjugate", "submatrix"]
related_problem: [[PS06-Q08]]
---

# PS06-Q08-Solution: Rank, Submatrices, and Adjugate

## Original Problem
Show that $\operatorname{rank} A=\max \{k \mid$ there exists a $k \times k$ submatrix of $A$ with nonzero determinant \}$. Consequently, $\operatorname{adj} A=0$ if $\operatorname{rank} A<n-1$ and $\operatorname{adj} A \neq 0$ if $\operatorname{rank} A \geq n-1$.

## Solution Process

### Part 1: Rank as Maximum Submatrix Determinant

First, recall these key facts:
- A square matrix is invertible ⟺ it has maximal rank ⟺ its determinant is nonzero
- $\operatorname{rank}(A) = \operatorname{col rank}(A) = \operatorname{row rank}(A)$

Let $r = \operatorname{rank}(A)$. We'll prove both directions:

**Direction 1: Maximum submatrix size ≤ $r$**

For any submatrix $X$ of $A$, we have $\operatorname{rank}(X) \leq \operatorname{rank}(A)$. This is because:
- If columns of $X$ are linearly independent, the corresponding columns of $A$ are also linearly independent
- Similarly for rows

Therefore, if $X$ is a $k \times k$ submatrix with $k > r$, then $\operatorname{rank}(X) \leq r < k$, so $X$ cannot have full rank. This means $\det(X) = 0$.

**Direction 2: There exists an $r \times r$ submatrix with nonzero determinant**

Since $\operatorname{rank}(A) = r$, there exist $r$ linearly independent columns of $A$. Let $B$ be the submatrix consisting of these $r$ linearly independent columns.

Since $\operatorname{rank}(B) = r$ and the column rank equals the row rank, $B$ has $r$ linearly independent rows. Let $C$ be the submatrix of $B$ (and hence of $A$) consisting of these $r$ linearly independent rows.

Then $C$ is an $r \times r$ submatrix of $A$ with rank $r$, so $C$ is invertible and $\det(C) \neq 0$.

Therefore: $\operatorname{rank}(A) = \max\{k \mid \text{there exists a } k \times k \text{ submatrix of } A \text{ with nonzero determinant}\}$

### Part 2: Adjugate Matrix Properties

The adjugate matrix $\operatorname{adj}(A)$ is constructed from the $(n-1) \times (n-1)$ minors of $A$.

**Case 1: $\operatorname{rank}(A) < n-1$**

If $\operatorname{rank}(A) < n-1$, then by our result above, all $(n-1) \times (n-1)$ submatrices of $A$ have determinant zero. Since the adjugate is constructed entirely from these minors, we have $\operatorname{adj}(A) = 0$.

**Case 2: $\operatorname{rank}(A) \geq n-1$**

If $\operatorname{rank}(A) = n-1$, then by our result, there exists at least one $(n-1) \times (n-1)$ submatrix with nonzero determinant. This means at least one minor is nonzero, so $\operatorname{adj}(A) \neq 0$.

If $\operatorname{rank}(A) = n$, then $A$ is invertible, and we know $\operatorname{adj}(A) = \det(A) \cdot A^{-1}$. Since $\det(A) \neq 0$ and $A^{-1} \neq 0$, we have $\operatorname{adj}(A) \neq 0$.

## Key Insights
- Rank is characterized by the largest invertible square submatrix
- The adjugate matrix depends on $(n-1) \times (n-1)$ minors
- There's a critical threshold at rank $n-1$ for the adjugate's nullity
- This connects linear independence (rank) with determinants (invertibility)

## Alternative Approaches
- Could use the relationship $A \cdot \operatorname{adj}(A) = \det(A) \cdot I$ to derive the adjugate properties
- Could approach through the geometric interpretation of determinants as volumes

## Common Mistakes
- Confusing rank with determinant (only square matrices have determinants)
- Not carefully distinguishing between submatrices and minors
- Forgetting that adjugate depends on $(n-1) \times (n-1)$ submatrices, not $n \times n$

## Theoretical Significance
This result:
- Characterizes rank in terms of determinants
- Explains when the adjugate method for finding inverses works
- Connects algebraic properties (rank) with deterministic properties (determinant)
- Generalizes to infinite-dimensional spaces in functional analysis

## Applications
- Determining when systems of linear equations have solutions
- Understanding when matrix approximations preserve rank
- Numerical methods that detect rank deficiency
