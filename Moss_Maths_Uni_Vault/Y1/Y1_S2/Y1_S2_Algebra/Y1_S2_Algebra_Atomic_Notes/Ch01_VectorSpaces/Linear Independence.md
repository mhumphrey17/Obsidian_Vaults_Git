---
title: "Linear Independence"
aliases: ["Linearly Independent", "Linear Dependence", "Linearly Dependent"]
tags: ["Y1", "Y1_S2_Algebra", "Y1_S2_Algebra_ch-1", "concept", "vector-space", "basis", "spanning-set", "linear-combination", "dimension", "span", "rank", "linear-algebra"]
related_concepts: ["Vector Space", "Basis", "Spanning Set", "Linear Combination", "Dimension", "Span", "Rank", "Field"]
---

# Linear Independence

## Definition
A list of vectors $v_1, v_2, \ldots, v_n$ in a vector space $V$ over a field $\mathbb{F}$ is **linearly independent** if the only solution to the equation
$$\lambda_1 v_1 + \lambda_2 v_2 + \cdots + \lambda_n v_n = 0$$
is the trivial solution $\lambda_1 = \lambda_2 = \cdots = \lambda_n = 0$.

Equivalently, a list of vectors is linearly independent if none of the vectors can be expressed as a linear combination of the others.

A list of vectors that is not linearly independent is called **linearly dependent**. In this case, there exists a non-trivial linear combination of the vectors that equals the zero vector.

## Properties
- A single vector $v$ is linearly independent if and only if $v \neq 0$.
- Two vectors $v_1$ and $v_2$ are linearly dependent if and only if one is a scalar multiple of the other.
- If a list contains the zero vector, then it is linearly dependent.
- If a list contains a repetition, then it is linearly dependent.
- A subset of a linearly independent list is also linearly independent.
- If a list $v_1, v_2, \ldots, v_n$ is linearly dependent, then at least one of the vectors can be expressed as a linear combination of the preceding vectors.
- Any list containing more than $\dim V$ vectors from a vector space $V$ must be linearly dependent.
- A list of $n$ vectors in an $n$-dimensional vector space is linearly independent if and only if it is a basis.
- Adding a vector not in the span of a linearly independent list preserves linear independence.

## Examples
1. In $\mathbb{R}^2$, the standard basis vectors $\mathbf{e}_1 = (1, 0)$ and $\mathbf{e}_2 = (0, 1)$ are linearly independent.

2. In $\mathbb{R}^2$, the vectors $(1, 2)$ and $(2, 4)$ are linearly dependent because $(2, 4) = 2(1, 2)$.

3. In $\mathbb{R}^3$, the vectors $(1, 0, 0)$, $(0, 1, 0)$, and $(0, 0, 1)$ are linearly independent, but the vectors $(1, 0, 0)$, $(0, 1, 0)$, $(0, 0, 1)$, and $(1, 1, 1)$ are linearly dependent because $(1, 1, 1) = (1, 0, 0) + (0, 1, 0) + (0, 0, 1)$.

4. In the vector space of polynomials $\mathbb{R}[X]_{\leq 2}$ of degree at most 2, the polynomials $1$, $X$, and $X^2$ are linearly independent.

5. In the vector space of continuous functions $C[0, 1]$, the functions $1$, $\sin(x)$, and $\cos(x)$ are linearly independent.

## Important Theorems/Results
- **Lemma 1.4.9**: 
  1. A single vector $v$ is linearly independent if and only if $v \neq 0$.
  2. Two vectors $v_1$ and $v_2$ are linearly dependent if and only if one is a multiple of the other.

- **Proposition 1.4.10**: A list of vectors represented as columns of a matrix $A$ is linearly independent if and only if every column of the row echelon form of $A$ contains a pivot.

- **Theorem 1.5.1**: If $v_1, \ldots, v_n$ in $V$ are linearly independent and $w_1, \ldots, w_m$ span $V$, then $n \leq m$.

- **Proposition 1.5.4**: If $v_1, \ldots, v_{n-1}$ is a linearly independent list and $v_n \notin \langle v_1, \ldots, v_{n-1}\rangle$, then $v_1, \ldots, v_n$ is also a linearly independent list.

## Connections to Other Concepts
- Linear independence is a key property in defining a [[Basis]] of a vector space.
- A [[Spanning Set]] that is also linearly independent is a basis.
- [[Linear Combination]]s of vectors are directly related to the concept of linear independence through the definition.
- The maximum number of linearly independent vectors in a vector space equals its [[Dimension]].
- A linearly independent list can be extended to a basis using the [[Span|spanning]] property.
- The columns of a matrix are linearly independent if and only if the matrix has full column rank, connecting to the concept of [[Rank]].

## Related Problems
- [[PS01-Q08]] - Determining linear independence in the context of differential equations.
- Problems involving finding bases often require checking linear independence.

## Notes
- The concept of linear independence is fundamental in linear algebra as it helps identify which vectors contribute unique "directions" to a vector space.
- Geometric interpretation: in $\mathbb{R}^n$, linearly independent vectors point in genuinely different directions.
- Testing linear independence using Gaussian elimination is a key computational technique.
- Linear independence is often checked by setting up and solving a homogeneous system of linear equations.
- The distinction between a list and a set is important: a list can contain repetitions, while a set cannot.
- Linear independence is preserved under most linear transformations with trivial kernel.
