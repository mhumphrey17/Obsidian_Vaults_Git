---
title: "2023-Q02-Solution: Skew-Symmetric Matrices - Dimension and Basis"
aliases: ["Solution to Past Paper 2023 Q2"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2023-exam", "section-a", "q2", "skew_symmetric", "basis", "dimension"]
related_question: [[2023-Q02]]
solution_approach: "Definition followed by construction of basis using constraints"
key_techniques: ["Definition recall", "Matrix constraint analysis", "Basis construction", "Dimension counting"]
common_mistakes: ["Forgetting diagonal entries must be zero", "Incorrectly counting independent entries"]
---

# 2023-Q02-Solution: Skew-Symmetric Matrices - Dimension and Basis

## Original Question
A matrix A ∈ M₃,₃(R) is skew symmetric iff Aᵀ = −A, where Aᵀ is the transpose of A.
Let V be the linear subspace of M₃,₃(R) consisting of skew-symmetric matrices.

(a) Define the dimension of a vector space.
(b) Find a basis of V and compute the dimension of V.

## Solution

### Part (a): Definition of Dimension
The [[Dimension|dimension]] of a vector space V is the number of vectors in any [[Basis|basis]] of V.

### Part (b): Basis and Dimension

**Step 1: Analyze the skew-symmetric constraint**

For A to be skew-symmetric, we need Aᵀ = −A, which means:
- aⱼᵢ = −aᵢⱼ for all i,j
- In particular, aᵢᵢ = −aᵢᵢ, which implies aᵢᵢ = 0 for all i

**Step 2: General form of a 3×3 skew-symmetric matrix**

A general 3×3 skew-symmetric matrix A has the form:
$$A = \begin{pmatrix} 
0 & a_{12} & a_{13} \\
-a_{12} & 0 & a_{23} \\
-a_{13} & -a_{23} & 0
\end{pmatrix}$$

**Step 3: Express A as a linear combination**

We can write:
$$A = a_{12}\begin{pmatrix} 
0 & 1 & 0 \\
-1 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix} + a_{13}\begin{pmatrix} 
0 & 0 & 1 \\
0 & 0 & 0 \\
-1 & 0 & 0
\end{pmatrix} + a_{23}\begin{pmatrix} 
0 & 0 & 0 \\
0 & 0 & 1 \\
0 & -1 & 0
\end{pmatrix}$$

This shows that A can be expressed as a linear combination of three specific matrices.

**Step 4: Identify the basis**

Let:
- $E_{12} - E_{21} = \begin{pmatrix} 0 & 1 & 0 \\ -1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$
- $E_{13} - E_{31} = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ -1 & 0 & 0 \end{pmatrix}$
- $E_{23} - E_{32} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & -1 & 0 \end{pmatrix}$

These three matrices form a basis for V.

**Step 5: Verify basis properties**

- **Spanning**: Every skew-symmetric matrix can be written as a linear combination of these three matrices
- **Linear Independence**: If $A = 0$, then $a_{12} = a_{13} = a_{23} = 0$

**Step 6: Compute the dimension**

Since the basis contains 3 vectors, $\dim V = 3$.

## Key Insights

1. **Pattern Recognition**: For any n×n skew-symmetric matrix, we have n(n-1)/2 independent entries
2. **Basis Construction**: Natural basis elements are differences of elementary matrices: $(E_{ij} - E_{ji})$ for $i < j$
3. **Dimension Formula**: The dimension of the space of n×n skew-symmetric matrices is $\frac{n(n-1)}{2}$
4. **Complementarity**: This is exactly $\frac{9-6}{2} = 3$, complementing the 6 dimensions of symmetric 3×3 matrices

## General Formula

For arbitrary n, the dimension of the space of n×n skew-symmetric matrices is:
$$\dim = \frac{n(n-1)}{2}$$

This accounts for the $(i,j)$ entries where $i < j$.

## Verification

For a 3×3 matrix:
- Total entries: 9
- Entries must be zero (diagonal): 3
- Independent entries remaining: 6
- But skew-symmetry constraint halves this: 3

Therefore, $\dim V = 3$ ✓
