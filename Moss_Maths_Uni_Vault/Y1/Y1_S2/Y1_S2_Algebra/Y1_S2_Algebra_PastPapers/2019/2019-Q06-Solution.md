---
title: "2019-Q06-Solution: Linear Maps and Anti-symmetric Matrices"
aliases: ["Solution to 2019 Q6"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2019", "difficulty-standard", "linear-map", "rank-nullity", "anti-symmetric", "determinant"]
related_question: [[2019-Q06]]
---

# 2019-Q06-Solution: Linear Maps and Anti-symmetric Matrices

## Original Question

(a) Suppose that $\phi: \mathbb{R}^{11} \rightarrow \mathbb{R}^{4}$ is a linear map such that the image of $\phi$ equals the span of the vectors $(4,3,-2,2)^T$, $(-1,2,5,3)^T$, $(7,8,1,7)^T$. What is the dimension of the kernel of $\phi$?

(b) Let $\mathbb{F}$ be a field. For anti-symmetric matrix $A$ where $A^T = -A$:
(i) Show: if $A$ is invertible then $\det A \neq 0$
(ii) Show: $\det A = (-1)^n \det A$
(iii) Is there an invertible anti-symmetric $A \in M_{3,3}(\mathbb{R})$?

## Solution Process

### Part (a): Dimension of Kernel

**Step 1: Determine dimension of the image**

Let $v_1 = \begin{pmatrix} 4 \\ 3 \\ -2 \\ 2 \end{pmatrix}$, $v_2 = \begin{pmatrix} -1 \\ 2 \\ 5 \\ 3 \end{pmatrix}$, $v_3 = \begin{pmatrix} 7 \\ 8 \\ 1 \\ 7 \end{pmatrix}$

We need to find $\dim(\text{Im}(\phi)) = \dim(\text{span}\{v_1, v_2, v_3\})$

**Step 2: Check for linear dependence**

Check if $v_3$ is a linear combination of $v_1$ and $v_2$:
$v_3 = av_1 + bv_2$ for some $a, b$

This gives us the system:
- $4a - b = 7$
- $3a + 2b = 8$
- $-2a + 5b = 1$
- $2a + 3b = 7$

From the first equation: $b = 4a - 7$

Substituting into the second: $3a + 2(4a - 7) = 8$
$3a + 8a - 14 = 8$
$11a = 22$
$a = 2$

Therefore: $b = 4(2) - 7 = 1$

**Step 3: Verify linear dependence**

Check: $2v_1 + v_2 = \begin{pmatrix} 8 \\ 6 \\ -4 \\ 4 \end{pmatrix} + \begin{pmatrix} -1 \\ 2 \\ 5 \\ 3 \end{pmatrix} = \begin{pmatrix} 7 \\ 8 \\ 1 \\ 7 \end{pmatrix} = v_3$ ✓

So $\{v_1, v_2, v_3\}$ is linearly dependent, and $\text{span}\{v_1, v_2, v_3\} = \text{span}\{v_1, v_2\}$

Since $v_1$ and $v_2$ are not scalar multiples, they are linearly independent.

Therefore: $\dim(\text{Im}(\phi)) = 2$

**Step 4: Apply Rank-Nullity Theorem**

**Rank-Nullity Theorem**: For linear map $\phi: V \to W$,
$$\dim(V) = \dim(\text{Im}(\phi)) + \dim(\text{Ker}(\phi))$$

In our case:
- $\dim(\mathbb{R}^{11}) = 11$
- $\dim(\text{Im}(\phi)) = 2$

Therefore:
$$11 = 2 + \dim(\text{Ker}(\phi))$$
$$\dim(\text{Ker}(\phi)) = 9$$

### Part (b): Anti-symmetric Matrices

#### Part (b)(i): Invertible implies det A ≠ 0

**Proof**: 
If $A$ is invertible, then there exists $A^{-1}$ such that $AA^{-1} = I_n$

Taking determinants: $\det(AA^{-1}) = \det(I_n)$

By the determinant product rule: $\det(A)\det(A^{-1}) = 1$

Since the product equals 1, neither factor can be zero.

Therefore: $\det(A) \neq 0$

#### Part (b)(ii): Determinant property of anti-symmetric matrices

**Given**: $A^T = -A$ (anti-symmetric)

**To show**: $\det(A) = (-1)^n \det(A)$

**Proof**:
Starting with the property of transposes:
$$\det(A) = \det(A^T)$$

Since $A^T = -A$:
$$\det(A) = \det(-A)$$

Using the scalar multiplication property of determinants:
$$\det(-A) = \det((-1)A) = (-1)^n \det(A)$$

Therefore:
$$\det(A) = (-1)^n \det(A)$$

#### Part (b)(iii): Invertible anti-symmetric matrix in M₃,₃(ℝ)

From part (ii), for $A \in M_{3,3}(\mathbb{R})$ with $n = 3$:
$$\det(A) = (-1)^3 \det(A) = -\det(A)$$

This implies:
$$\det(A) = -\det(A)$$
$$2\det(A) = 0$$

Since we're working in $\mathbb{R}$, where $2 \neq 0$:
$$\det(A) = 0$$

From part (i), if $A$ is invertible, then $\det(A) \neq 0$.

Since any $3 \times 3$ anti-symmetric matrix over $\mathbb{R}$ has $\det(A) = 0$, no such matrix can be invertible.

**Answer**: No, there is no invertible anti-symmetric matrix in $M_{3,3}(\mathbb{R})$.

## Key Steps and Justifications
1. Used linear independence test to find image dimension
2. Applied Rank-Nullity Theorem correctly
3. Used determinant properties systematically
4. Applied field properties ($2 \neq 0$ in $\mathbb{R}$)

## Common Mistakes
- Assuming all three vectors are linearly independent
- Not applying Rank-Nullity correctly
- Forgetting the field-dependent conclusion in part (b)(iii)

## Mark Scheme Breakdown
- Part (a): 8 marks total
  - 3-4 marks for finding image dimension
  - 1-2 marks for stating Rank-Nullity
  - 2-3 marks for correct calculation
- Part (b)(i): ~1 mark for standard proof
- Part (b)(ii): ~2 marks for property application
- Part (b)(iii): ~2 marks for complete argument