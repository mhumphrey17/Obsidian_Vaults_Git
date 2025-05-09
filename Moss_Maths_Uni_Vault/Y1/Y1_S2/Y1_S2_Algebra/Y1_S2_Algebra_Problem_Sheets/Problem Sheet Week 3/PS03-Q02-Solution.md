---
title: "PS03-Q02-Solution: Symmetric Matrices Subspace and Basis"
aliases: ["Solution to PS03 Q02"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-03", "difficulty-warmup", "symmetric-matrix", "subspace", "basis"]
related_problem: [[PS03-Q02]]
---

# PS03-Q02-Solution: Symmetric Matrices Subspace and Basis

## Original Problem

(a) Show that the set of symmetric matrices forms a linear subspace of $M_{n,n}(\mathbb{F})$.

(b) For $n = 2$ and $n = 3$, find a basis for this subspace and determine its dimension.

## Solution Process

### Part (a): Proving Subspace Property

To show that the set $S = \{A \in M_{n,n}(\mathbb{F}) : A^T = A\}$ is a subspace, we need to verify:

1. **Contains zero vector**: The zero matrix satisfies $(0)^T = 0$, so $0 \in S$.

2. **Closed under addition**: If $A, B \in S$, then $A^T = A$ and $B^T = B$.
   We need to show $(A + B)^T = A + B$.
   
   $(A + B)^T = A^T + B^T = A + B$
   
   Therefore, $A + B \in S$.

3. **Closed under scalar multiplication**: If $A \in S$ and $\lambda \in \mathbb{F}$, then:
   
   $(\lambda A)^T = \lambda A^T = \lambda A$
   
   Therefore, $\lambda A \in S$.

Since $S$ satisfies all three subspace criteria, it is a subspace of $M_{n,n}(\mathbb{F})$. ∎

### Part (b): Finding Bases for n = 2 and n = 3

**Case n = 2:**

The general 2×2 symmetric matrix has the form:
$$\begin{pmatrix} a & b \\ b & c \end{pmatrix}$$

We can decompose this as:
$$\begin{pmatrix} a & b \\ b & c \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} + c\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$$

The matrix is zero if and only if $a = b = c = 0$.

**Basis for n = 2:**
$$\left\{\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}\right\}$$

**Dimension:** 3

**Case n = 3:**

The general 3×3 symmetric matrix has the form:
$$\begin{pmatrix} a & b & c \\ b & d & e \\ c & e & f \end{pmatrix}$$

We can decompose this as a linear combination of 6 basis matrices:

$$\begin{aligned}
&= a\begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} + b\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} + c\begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix} \\
&\quad + d\begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix} + e\begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix} + f\begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}
\end{aligned}$$

**Dimension:** 6

## Key Insights

1. **Pattern Recognition**: For an n×n symmetric matrix, we have n diagonal entries and $\binom{n}{2}$ off-diagonal entries that can be chosen freely
2. **Dimension Formula**: The dimension of the space of n×n symmetric matrices is $\frac{n(n+1)}{2}$
3. **Basis Construction**: Natural basis matrices have a 1 in position (i,j) and (j,i), and 0s elsewhere
4. **Symmetry Constraint**: The constraint $A^T = A$ reduces the degrees of freedom from $n^2$ to $\frac{n(n+1)}{2}$

## Verification

For n = 2: $\frac{2(2+1)}{2} = 3$ ✓
For n = 3: $\frac{3(3+1)}{2} = 6$ ✓

## General Formula

For arbitrary n, the dimension of the space of n×n symmetric matrices is:
$$\dim = \frac{n(n+1)}{2}$$

This accounts for n diagonal entries plus $\frac{n(n-1)}{2}$ independent off-diagonal entries.

## Common Mistakes

1. Forgetting that off-diagonal entries must be equal to their transposes
2. Miscounting the number of free parameters
3. Not verifying linear independence of basis matrices
4. Confusing this with the space of all n×n matrices (which has dimension $n^2$)
