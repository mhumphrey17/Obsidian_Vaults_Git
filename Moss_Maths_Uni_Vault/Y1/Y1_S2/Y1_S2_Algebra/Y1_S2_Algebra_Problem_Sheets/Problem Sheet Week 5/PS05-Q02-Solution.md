---
title: "PS05-Q02-Solution: Determinant Product Formula for Lower Triangular Matrices"
aliases: ["Solution to PS05 Q02"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-05", "difficulty-warmup", "triangular-matrices", "product-formula"]
related_problem: [[PS05-Q02]]
---

# PS05-Q02-Solution: Determinant Product Formula for Lower Triangular Matrices

## Original Problem
Let $A$ and $B$ be lower triangular matrices. Prove directly that the product formula $\operatorname{det}(AB) = \operatorname{det}(A) \cdot \operatorname{det}(B)$ holds in this case.

## Solution Process

Let $A$ and $B$ be $n \times n$ lower triangular matrices:

$$A = \begin{pmatrix}
a_{11} & 0 & \cdots & 0 \\
a_{21} & a_{22} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{pmatrix}, \quad B = \begin{pmatrix}
b_{11} & 0 & \cdots & 0 \\
b_{21} & b_{22} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
b_{n1} & b_{n2} & \cdots & b_{nn}
\end{pmatrix}$$

### Step 1: Product of lower triangular matrices is lower triangular

When we multiply two lower triangular matrices, the result $AB$ is also lower triangular. This is because:

For $i < j$, the $(i,j)$ entry of $AB$ is:
$$(AB)_{ij} = \sum_{k=1}^n a_{ik}b_{kj}$$

Since $A$ is lower triangular: $a_{ik} = 0$ when $i < k$, so the sum runs from $k = i$ to $n$.

Since $B$ is lower triangular: $b_{kj} = 0$ when $k < j$, and since $i < j$, we have $k \geq i > j-1$, meaning $k \geq j$. But this forces $b_{kj} = 0$ for all relevant $k$.

Therefore $(AB)_{ij} = 0$ when $i < j$, confirming that $AB$ is lower triangular.

### Step 2: Diagonal entries of the product

The diagonal entries of $AB$ are:
$$(AB)_{ii} = \sum_{k=1}^n a_{ik}b_{ki}$$

Since $A$ is lower triangular: $a_{ik} = 0$ when $i < k$.
Since $B$ is lower triangular: $b_{ki} = 0$ when $k < i$.

Therefore, the only non-zero term in the sum is when $k = i$:
$$(AB)_{ii} = a_{ii}b_{ii}$$

### Step 3: Apply result from Q1

From Question 1, we know that for any lower triangular matrix, the determinant equals the product of diagonal entries:

- $\operatorname{det}(A) = a_{11} \cdot a_{22} \cdots a_{nn}$
- $\operatorname{det}(B) = b_{11} \cdot b_{22} \cdots b_{nn}$
- $\operatorname{det}(AB) = (AB)_{11} \cdot (AB)_{22} \cdots (AB)_{nn}$

### Step 4: Complete the proof

Substituting our result from Step 2:
$$\operatorname{det}(AB) = a_{11}b_{11} \cdot a_{22}b_{22} \cdots a_{nn}b_{nn}$$

Rearranging:
$$\operatorname{det}(AB) = (a_{11} \cdot a_{22} \cdots a_{nn}) \cdot (b_{11} \cdot b_{22} \cdots b_{nn})$$

Therefore:
$$\operatorname{det}(AB) = \operatorname{det}(A) \cdot \operatorname{det}(B)$$

## Key Insights
1. The product of lower triangular matrices preserves the triangular structure
2. Diagonal entries multiply componentwise: $(AB)_{ii} = a_{ii} \cdot b_{ii}$
3. This provides a direct proof of the product formula for this special case
4. The same argument works for upper triangular matrices

## Alternative Approaches
- Could use the general product formula and then apply it to this special case
- Could use induction on the size of the matrices
- Could use block matrix techniques

## Common Mistakes
1. Assuming the product formula holds without proving the triangular structure is preserved
2. Incorrect calculation of matrix multiplication for triangular matrices
3. Not recognizing that only diagonal entries contribute to the product
