---
title: "PS03-Q03-Solution: Linear Independence and Basis Extension in M2x2"
aliases: ["Solution to PS03 Q03"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-03", "difficulty-warmup", "linear-independence", "basis-extension", "matrix-space"]
related_problem: [[PS03-Q03]]
---

# PS03-Q03-Solution: Linear Independence and Basis Extension in M2x2

## Original Problem

Show that the two matrices $\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ and $\begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$ are linearly independent in the space of matrices $M_{2,2}(\mathbb{F})$ and extend them to a basis of $M_{2,2}(\mathbb{F})$.

## Solution Process

### Step 1: Proving Linear Independence

Let $A_1 = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$ and $A_2 = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$.

To test linear independence, assume:
$$\lambda A_1 + \mu A_2 = 0$$

Substituting the matrices:
$$\lambda \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} + \mu \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

This gives us:
$$\begin{pmatrix} \lambda + \mu & \lambda \\ \mu & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

Comparing entries:
- Position (1,1): $\lambda + \mu = 0$
- Position (1,2): $\lambda = 0$
- Position (2,1): $\mu = 0$
- Position (2,2): $0 = 0$ (automatically satisfied)

From the equations, we get $\lambda = 0$ and $\mu = 0$.

Therefore, $A_1$ and $A_2$ are linearly independent. ✓

### Step 2: Extending to a Basis

Since $M_{2,2}(\mathbb{F})$ has dimension 4, we need to add 2 more matrices to form a basis.

Let's consider the standard basis matrices:
- $E_{11} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$
- $E_{12} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$
- $E_{21} = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$
- $E_{22} = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$

We can extend our independent set by adding $E_{11}$ and $E_{22}$.

**Proposed basis:**
$$\left\{\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}, \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}, \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}\right\}$$

### Step 3: Verifying Linear Independence

To verify the extended set is linearly independent, we set up:
$$\alpha \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} + \beta \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix} + \gamma \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + \delta \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

This gives us:
$$\begin{pmatrix} \alpha + \beta + \gamma & \alpha \\ \beta & \delta \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

Comparing entries:
- Position (1,1): $\alpha + \beta + \gamma = 0$
- Position (1,2): $\alpha = 0$
- Position (2,1): $\beta = 0$
- Position (2,2): $\delta = 0$

From these equations: $\alpha = \beta = \delta = 0$, which means $\gamma = 0$.

Therefore, the extended set is linearly independent and forms a basis for $M_{2,2}(\mathbb{F})$. ✓

## Key Insights

1. **Entry-by-Entry Comparison**: Matrix equations are equivalent to systems of scalar equations
2. **Span Check**: The four matrices span $M_{2,2}(\mathbb{F})$ because we can express any 2×2 matrix in terms of them
3. **Dimension Match**: We have 4 linearly independent vectors in a 4-dimensional space

## Alternative Approach

We could also express any 2×2 matrix as a linear combination:
$$\begin{pmatrix} a & b \\ c & d \end{pmatrix} = (a-b-c) A_1 + c A_2 + b \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + d \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$$

This directly shows the spanning property.

## Common Mistakes

1. Not checking all matrix entries when verifying independence
2. Choosing extensions that are linearly dependent on the original vectors
3. Forgetting to verify that the extended set is actually a basis
4. Making arithmetic errors in the linear dependence calculations
