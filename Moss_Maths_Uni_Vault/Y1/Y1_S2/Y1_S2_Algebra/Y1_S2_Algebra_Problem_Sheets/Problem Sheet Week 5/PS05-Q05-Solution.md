---
title: "PS05-Q05-Solution: Properties of Determinants (Scalar, Skew-Symmetric)"
aliases: ["Solution to PS05 Q05"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-05", "difficulty-homework", "determinant-properties", "scalar-multiplication", "skew-symmetric"]
related_problem: [[PS05-Q05]]
---

# PS05-Q05-Solution: Properties of Determinants (Scalar, Skew-Symmetric)

## Original Problem
Suppose that $A \in M_{n,n}(\mathbb{F})$ and that $\lambda \in \mathbb{F}$.

(i) Show that $\operatorname{det}(\lambda A) = \lambda^n \operatorname{det}(A)$.

(ii) Suppose that $-1 \neq 1$ in $\mathbb{F}$, e.g. $\mathbb{F} \neq \mathbb{F}_2$. Show that, if $A$ is skew-symmetric (i.e. $A^T = -A$) and $n$ is odd, then $\operatorname{det}(A) = 0$.

## Solution Process

### Part (i): $\operatorname{det}(\lambda A) = \lambda^n \operatorname{det}(A)$

We use the multilinearity property of determinants. Let $A$ have columns $c_1, c_2, \ldots, c_n$.

When we multiply $A$ by $\lambda$, each column is multiplied by $\lambda$:
$$\lambda A = [\lambda c_1 \mid \lambda c_2 \mid \cdots \mid \lambda c_n]$$

Using the multilinearity property (determinant is linear in each column):
$$\operatorname{det}(\lambda A) = \operatorname{det}([\lambda c_1 \mid \lambda c_2 \mid \cdots \mid \lambda c_n])$$

Extract $\lambda$ from the first column:
$$= \lambda \operatorname{det}([c_1 \mid \lambda c_2 \mid \cdots \mid \lambda c_n])$$

Extract $\lambda$ from the second column:
$$= \lambda^2 \operatorname{det}([c_1 \mid c_2 \mid \lambda c_3 \mid \cdots \mid \lambda c_n])$$

Continuing this process for all $n$ columns:
$$= \lambda^n \operatorname{det}([c_1 \mid c_2 \mid \cdots \mid c_n]) = \lambda^n \operatorname{det}(A)$$

**Alternative approach using sum formula:**
From the sum formula, each term in $\operatorname{det}(\lambda A)$ contains a product of $n$ entries of $\lambda A$, each of which is $\lambda$ times the corresponding entry of $A$. Therefore, each term is multiplied by $\lambda^n$, giving:
$$\operatorname{det}(\lambda A) = \lambda^n \operatorname{det}(A)$$

### Part (ii): Skew-symmetric determinant with odd $n$

Given: $A^T = -A$ and $n$ is odd.

Using the property that $\operatorname{det}(A^T) = \operatorname{det}(A)$:
$$\operatorname{det}(A) = \operatorname{det}(A^T) = \operatorname{det}(-A)$$

From part (i), when $n$ is odd:
$$\operatorname{det}(-A) = (-1)^n \operatorname{det}(A) = -\operatorname{det}(A)$$

So we have:
$$\operatorname{det}(A) = -\operatorname{det}(A)$$

This implies:
$$2 \operatorname{det}(A) = 0$$

Since $-1 \neq 1$ in $\mathbb{F}$, we have $2 \neq 0$ in $\mathbb{F}$. Therefore:
$$\operatorname{det}(A) = 0$$

**Note:** If $-1 = 1$ in $\mathbb{F}$ (as in $\mathbb{F}_2$), then skew-symmetric matrices are the same as symmetric matrices, and the determinant need not be zero.

## Key Insights
1. The multilinearity of determinants makes the scalar multiplication property straightforward
2. The combination of transpose properties with odd powers creates a contradiction that forces the determinant to be zero
3. The field characteristics matter when working with determinants
4. Skew-symmetric matrices with odd dimension have determinant zero in most fields

## Common Mistakes
1. Forgetting that the power is $n$ (the dimension), not just the number of factors
2. Not considering the field characteristics when concluding $\operatorname{det}(A) = 0$
3. Misapplying the transpose determinant property
4. Not recognizing that the conclusion depends on $n$ being odd

## Extensions
1. For even $n$, skew-symmetric matrices can have non-zero determinant
2. The result connects to the fact that skew-symmetric matrices always have even rank
3. This property is important in the study of symplectic geometry and Pfaffians
