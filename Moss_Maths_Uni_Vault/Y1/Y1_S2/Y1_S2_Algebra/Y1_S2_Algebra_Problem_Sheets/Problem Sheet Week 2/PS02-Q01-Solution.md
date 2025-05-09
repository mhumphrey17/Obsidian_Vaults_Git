---
title: "PS02-Q01-Solution: Linear Independence and Spanning in R^3"
aliases: ["Solution to PS02 Q01"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-02", "difficulty-warmup", "linear-independence", "spanning", "Gaussian-elimination"]
related_problem: [[PS02-Q01]]
---

# PS02-Q01-Solution: Linear Independence and Spanning in R^3

## Original Problem

Determine which of the following lists of vectors in $\mathbb{R}^{3}$ are linearly independent and which are spanning:

(i) $\mathbf{v}_{2}, \mathbf{v}_{5}$ where $\mathbf{v}_{2}=\left(\begin{array}{l}1 \\2 \\5\end{array}\right), \mathbf{v}_{5}=\left(\begin{array}{l}3 \\4 \\5\end{array}\right)$

(ii) $\mathbf{v}_{1}, \mathbf{v}_{2}, \mathbf{v}_{3}, \mathbf{v}_{4}$ 

(iii) $\mathbf{v}_{1}, \mathbf{v}_{4}, \mathbf{v}_{5}$

## Solution Process

### Part (i): $\mathbf{v}_{2}, \mathbf{v}_{5}$

**Linear Independence:** Observe that neither $\mathbf{v}_{2}$ nor $\mathbf{v}_{5}$ is a multiple of the other (no scalar $k$ satisfies $\mathbf{v}_{2} = k\mathbf{v}_{5}$), so the list is linearly independent.

Alternatively, we can form the matrix:
$$A = \left(\begin{array}{ll}
1 & 3 \\
2 & 4 \\
5 & 5
\end{array}\right)$$

After row reduction, we get a pivot in every column, confirming linear independence.

**Spanning:** Since $A$ has more rows than columns (3 > 2), the row echelon form must have at least one zero row. Therefore, the list cannot span $\mathbb{R}^{3}$. 

This makes sense because we need at least 3 vectors to span $\mathbb{R}^{3}$ (by the dimension theorem).

### Part (ii): $\mathbf{v}_{1}, \mathbf{v}_{2}, \mathbf{v}_{3}, \mathbf{v}_{4}$

**Linear Independence:** Since we have 4 vectors in $\mathbb{R}^{3}$, they cannot be linearly independent. By the Fundamental Lemma, a system of 3 equations in 4 unknowns has a non-trivial solution.

To find the dependence relation, we form the matrix:
$$\left(\begin{array}{llll}
1 & 1 & 1 & 2 \\
2 & 2 & 3 & 3 \\
3 & 5 & 5 & 4
\end{array}\right)$$

Using Gaussian elimination:
$$\xrightarrow{R_3-2R_1, R_2-2R_1}\left(\begin{array}{cccc}
1 & 1 & 1 & 2 \\
0 & 0 & 1 & -1 \\
0 & 2 & 2 & -2
\end{array}\right) \xrightarrow{R_3/2}\left(\begin{array}{cccc}
1 & 1 & 1 & 2 \\
0 & 1 & 1 & -1 \\
0 & 0 & 1 & -1
\end{array}\right)$$

The system $A\lambda = \mathbf{0}$ has solution $\lambda = (-3, 0, 1, 1)$.
This gives us the dependence relation: $-3\mathbf{v}_1 + \mathbf{v}_3 + \mathbf{v}_4 = \mathbf{0}$.

**Spanning:** The final REF matrix has no zero rows, so the list spans $\mathbb{R}^{3}$.

### Part (iii): $\mathbf{v}_{1}, \mathbf{v}_{4}, \mathbf{v}_{5}$

Form the matrix:
$$\left(\begin{array}{lll}
1 & 2 & 3 \\
2 & 3 & 4 \\
3 & 4 & 5
\end{array}\right)$$

Gaussian elimination:
$$\xrightarrow{R_2-2R_1, R_3-3R_1}\left(\begin{array}{ccc}
1 & 2 & 3 \\
0 & -1 & -2 \\
0 & -2 & -4
\end{array}\right) \xrightarrow{R_3-2R_2}\left(\begin{array}{ccc}
1 & 2 & 3 \\
0 & 1 & 2 \\
0 & 0 & 0
\end{array}\right)$$

The REF does not have a pivot in every column, so the list is **linearly dependent**.
The presence of a zero row implies the list does **not span** $\mathbb{R}^{3}$.

## Key Insights

1. In $\mathbb{R}^{3}$, any set with more than 3 vectors is automatically linearly dependent
2. Any set with fewer than 3 vectors cannot span $\mathbb{R}^{3}$
3. Gaussian elimination provides a systematic way to check both properties simultaneously
4. The rank of the matrix (number of pivots) determines both independence and spanning properties

## Alternative Approaches

For small problems, you can sometimes verify independence by checking if vectors are scalar multiples or using determinants (for square matrices).

## Common Mistakes

1. Confusing linear independence with spanning - they are separate properties
2. Not considering the dimension constraint: need exactly $n$ independent vectors to span $\mathbb{R}^n$
3. Making arithmetic errors during Gaussian elimination
4. Forgetting that more vectors than dimensions automatically means dependence
