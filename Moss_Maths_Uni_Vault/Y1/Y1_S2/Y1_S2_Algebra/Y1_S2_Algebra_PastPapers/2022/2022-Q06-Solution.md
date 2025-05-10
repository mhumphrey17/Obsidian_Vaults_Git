---
title: "2022-Q06-Solution: Rank, Nullity, and Matrix Representation"
aliases: ["Solution to Past Paper 2022 Q6"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2022-exam", "section-B", "q06"]
related_question: [[2022-Q06]]
solution_approach: "Definitions, theorem statements, and change of basis calculations"
key_techniques: ["Definition recall", "Matrix representation", "Change of basis", "Gaussian elimination", "Determinant calculation"]
common_mistakes: ["Incomplete definitions", "Matrix order errors", "Calculation mistakes", "Misunderstanding invertibility"]
---

# 2022-Q06-Solution: Rank, Nullity, and Matrix Representation

## Original Question

### Part (a) [8 marks]
Let $\phi : V \to W$ be a linear map.

#### (i) [4 marks]
Define the rank of $\phi$ and the nullity of $\phi$, and state the Rank-Nullity Theorem.

#### (ii) [4 marks]
State conditions, in terms of rank $\phi$, for $\phi$ to be injective and for $\phi$ to be surjective. Give brief justifications for each.

### Part (b) [7 marks]
Let $e_1, e_2, e_3$ be the standard basis of $\mathbb{R}^3$ and let $\psi : \mathbb{R}^3 \to \mathbb{R}^3$ be the linear operator defined by:
$$\psi(e_1) = e_1 + e_2 + e_3, \quad \psi(e_2) = e_1 + e_2 - e_3, \quad \psi(e_3) = -e_1 - e_2 + e_3$$

#### (i)
Compute the matrix representing $\psi$ with respect to the basis $e_1 + e_2, e_1 + e_2 + e_3, e_2 + e_3$.

#### (ii)
Is $\psi$ invertible? Briefly justify your answer.

## Solution Process

### Part (a)

#### (i) Definitions

**Rank**: The rank of $\phi$, denoted $\text{rank}(\phi)$, is $\dim(\text{Im}(\phi))$.

**Nullity**: The nullity of $\phi$, denoted $\text{null}(\phi)$, is $\dim(\text{Ker}(\phi))$.

**Rank-Nullity Theorem**: For any linear map $\phi : V \to W$,
$$\dim V = \text{rank}(\phi) + \text{null}(\phi)$$

#### (ii) Conditions

**Injectivity**: $\phi$ is injective if and only if $\text{rank}(\phi) = \dim V$.

**Justification**: $\phi$ is injective iff $\text{Ker}(\phi) = \{0\}$ iff $\text{null}(\phi) = 0$. By RNT, $\text{null}(\phi) = 0$ iff $\text{rank}(\phi) = \dim V$.

**Surjectivity**: $\phi$ is surjective if and only if $\text{rank}(\phi) = \dim W$.

**Justification**: $\phi$ is surjective iff $\text{Im}(\phi) = W$ iff $\dim(\text{Im}(\phi)) = \dim W$ iff $\text{rank}(\phi) = \dim W$.

### Part (b)

First, find the matrix representing $\psi$ with respect to the standard basis:
$$A = \begin{pmatrix}
1 & 1 & -1 \\
1 & 1 & -1 \\
1 & -1 & 1
\end{pmatrix}$$

#### (i) Matrix Representation

Let $\beta = (e_1 + e_2, e_1 + e_2 + e_3, e_2 + e_3)$ be the new basis.

**Step 1**: Find the change of basis matrix $P$ from standard basis to $\beta$.
$$P = \begin{pmatrix}
1 & 1 & 0 \\
1 & 1 & 1 \\
0 & 1 & 1
\end{pmatrix}$$
(Columns are the new basis vectors expressed in standard coordinates)

**Step 2**: Compute $P^{-1}$ using Gaussian elimination.

Augment matrix: $[P | I]$
$$\left[\begin{array}{ccc|ccc}
1 & 1 & 0 & 1 & 0 & 0 \\
1 & 1 & 1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 & 0 & 1
\end{array}\right]$$

After row operations:
$$\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & 0 & 1 & -1 \\
0 & 1 & 0 & 1 & -1 & 1 \\
0 & 0 & 1 & -1 & 1 & 0
\end{array}\right]$$

Therefore:
$$P^{-1} = \begin{pmatrix}
0 & 1 & -1 \\
1 & -1 & 1 \\
-1 & 1 & 0
\end{pmatrix}$$

**Step 3**: Compute $B = P^{-1}AP$.

First, compute $AP$:
$$AP = \begin{pmatrix}
1 & 1 & -1 \\
1 & 1 & -1 \\
1 & -1 & 1
\end{pmatrix}\begin{pmatrix}
1 & 1 & 0 \\
1 & 1 & 1 \\
0 & 1 & 1
\end{pmatrix} = \begin{pmatrix}
2 & 1 & 0 \\
2 & 1 & 0 \\
0 & 1 & 0
\end{pmatrix}$$

Then compute $B = P^{-1}(AP)$:
$$B = \begin{pmatrix}
0 & 1 & -1 \\
1 & -1 & 1 \\
-1 & 1 & 0
\end{pmatrix}\begin{pmatrix}
2 & 1 & 0 \\
2 & 1 & 0 \\
0 & 1 & 0
\end{pmatrix} = \begin{pmatrix}
2 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}$$

Therefore, the matrix representing $\psi$ with respect to the new basis is:
$$B = \begin{pmatrix}
2 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}$$

#### (ii) Invertibility

$\psi$ is **not invertible**.

**Justification**: The determinant of matrix $A$ (or equivalently $B$) is zero. We can see this because:
- Matrix $A$ has its first two rows identical
- Matrix $B$ has rank 1 (only one non-zero row)

Either observation shows that $\psi$ is not invertible.

Alternatively, $\text{rank}(\psi) = 1 < 3 = \dim(\mathbb{R}^3)$, so $\psi$ is not injective and hence not invertible.

## Key Insights

1. **Definition precision**: Include dimension notation in definitions
2. **RNT application**: Both injectivity and surjectivity conditions follow from RNT
3. **Change of basis formula**: $B = P^{-1}AP$ where $P$ is change of basis matrix
4. **Invertibility tests**: Can use determinant, rank, or observation of matrix structure

## Common Errors

1. Missing dimension notation in definitions
2. Incorrect construction of change of basis matrix
3. Calculation errors in matrix multiplication or inversion
4. Not properly justifying invertibility/non-invertibility
