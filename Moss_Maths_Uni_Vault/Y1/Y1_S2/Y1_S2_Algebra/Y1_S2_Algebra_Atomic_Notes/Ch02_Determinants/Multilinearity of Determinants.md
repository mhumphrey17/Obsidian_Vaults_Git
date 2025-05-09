---
title: "Multilinearity of Determinants"
aliases: ["multilinearity property", "linearity of determinants"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-2", "concept", "determinant", "property", "alternating-property", "elementary-row-operation", "elementary-column-operation", "linear-map", "linear-algebra", "matrix-theory"]
related_concepts: ["Determinant", "Alternating Property of Determinants", "Elementary Row Operation", "Elementary Column Operation", "Linear Map", "Field"]
---

# Multilinearity of Determinants

## Definition
The determinant function $\det: M_{n,n}(\mathbb{F}) \to \mathbb{F}$ is multilinear in its columns (and rows). This means that the determinant is a linear function with respect to each column (or row) when all other columns (or rows) are held constant.

Formally, if we view a matrix $A$ as a list of column vectors $\mathbf{c}_1, \ldots, \mathbf{c}_n \in \mathbb{F}^n$, then for any column $j$, if:
$$\mathbf{c}_j = \lambda \mathbf{v} + \mu \mathbf{w}, \quad \text{where } \lambda, \mu \in \mathbb{F}, \mathbf{v}, \mathbf{w} \in \mathbb{F}^n$$

Then:
$$\det(\mathbf{c}_1, \ldots, \mathbf{c}_j, \ldots, \mathbf{c}_n) = \lambda \det(\mathbf{c}_1, \ldots, \mathbf{v}, \ldots, \mathbf{c}_n) + \mu \det(\mathbf{c}_1, \ldots, \mathbf{w}, \ldots, \mathbf{c}_n)$$

The same property holds for rows.

## Properties
1. **Scalar Multiplication**: If one column (or row) is multiplied by a scalar $\lambda$, the determinant is multiplied by $\lambda$:
   $$\det(\mathbf{c}_1, \ldots, \lambda\mathbf{c}_j, \ldots, \mathbf{c}_n) = \lambda \det(\mathbf{c}_1, \ldots, \mathbf{c}_j, \ldots, \mathbf{c}_n)$$

2. **Addition**: The determinant of a matrix where one column (or row) is a sum of two vectors equals the sum of the determinants of the matrices where that column (or row) is replaced by each of the summand vectors:
   $$\det(\mathbf{c}_1, \ldots, \mathbf{v}+\mathbf{w}, \ldots, \mathbf{c}_n) = \det(\mathbf{c}_1, \ldots, \mathbf{v}, \ldots, \mathbf{c}_n) + \det(\mathbf{c}_1, \ldots, \mathbf{w}, \ldots, \mathbf{c}_n)$$

3. **Consequence for ECO/ERO Type I**: If $\hat{A}$ is obtained from $A$ by multiplying a column (or row) by $\lambda$, then $\det(\hat{A}) = \lambda \det(A)$.

4. **Consequence for ECO/ERO Type II**: If $\hat{A}$ is obtained from $A$ by adding a multiple of one column (or row) to another, then $\det(\hat{A}) = \det(A)$.

## Examples
### Example 1: Scalar Multiplication
Consider a 2×2 matrix:
$$\det\left(\begin{array}{cc}
a & b \\
c & d
\end{array}\right) = ad - bc$$

If we multiply the first column by $\lambda$:
$$\det\left(\begin{array}{cc}
\lambda a & b \\
\lambda c & d
\end{array}\right) = \lambda ad - \lambda bc = \lambda(ad - bc) = \lambda \det\left(\begin{array}{cc}
a & b \\
c & d
\end{array}\right)$$

### Example 2: Column Addition
For a 3×3 matrix where the third column is a sum:
$$\det\left(\begin{array}{ccc}
a & b & p+q \\
c & d & r+s \\
e & f & t+u
\end{array}\right) = \det\left(\begin{array}{ccc}
a & b & p \\
c & d & r \\
e & f & t
\end{array}\right) + \det\left(\begin{array}{ccc}
a & b & q \\
c & d & s \\
e & f & u
\end{array}\right)$$

## Proof (Outline)
The multilinearity of determinants follows directly from the sum formula definition. If:
$$\mathbf{c}_j = (v_1 + w_1, v_2 + w_2, \ldots, v_n + w_n)^T$$

Then each term in the determinant sum formula has precisely one factor from column $j$:
$$a_{\sigma(1)1} \ldots a_{\sigma(j)j} \ldots a_{\sigma(n)n} = a_{\sigma(1)1} \ldots (v_{\sigma(j)} + w_{\sigma(j)}) \ldots a_{\sigma(n)n}$$
$$= a_{\sigma(1)1} \ldots v_{\sigma(j)} \ldots a_{\sigma(n)n} + a_{\sigma(1)1} \ldots w_{\sigma(j)} \ldots a_{\sigma(n)n}$$

The sum of all such terms separates into two determinants.

## Applications
1. **Computational Efficiency**: Allows computing determinants by transforming matrices into simpler forms through elementary operations
2. **Theoretical Foundation**: Forms the basis for many important determinant properties
3. **Matrix Decomposition**: Helps understand how determinants behave under matrix factorizations

## Related Concepts
- [[Determinant]]: The scalar function with the multilinearity property
- [[Alternating Property of Determinants]]: Together with multilinearity, characterizes the determinant
- [[Elementary Row Operation]]: Their effect on determinants is explained by multilinearity
- [[Elementary Column Operation]]: Their effect on determinants is explained by multilinearity
- [[Linear Map]]: Multilinearity means the determinant is linear in each argument separately
