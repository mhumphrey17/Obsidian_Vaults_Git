---
title: "PS08-Q02-Solution: Complex Dot Product Calculation"
aliases: ["Solution to PS8 Q2"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-08", "difficulty-warmup", "complex-analysis", "inner-product"]
related_problem: [[PS08-Q02]]
---

# PS08-Q02-Solution: Complex Dot Product Calculation

## Original Problem
Define $v_1, v_2, v_3 \in \mathbb{C}^3$ by

$$v_1 = (1,0,1) \quad v_2 = (2+i, 1, 1+2i) \quad v_3 = (0,1,i)$$

Compute all nine $\langle v_i, v_j \rangle$, where $1 \leq i, j \leq 3$ and the inner product is the dot product on $\mathbb{C}^3$.

## Solution Process
The complex inner product is defined as: $\langle v, w \rangle = \sum_{k=1}^n \overline{v_k} w_k$

We compute:

### Off-diagonal entries (i ≠ j)
$$\langle v_1, v_2 \rangle = \overline{1} \cdot (2+i) + \overline{0} \cdot 1 + \overline{1} \cdot (1+2i)$$
$$= 1 \cdot (2+i) + 0 \cdot 1 + 1 \cdot (1+2i)$$
$$= (2+i) + (1+2i) = 3 + 3i$$

$$\langle v_1, v_3 \rangle = \overline{1} \cdot 0 + \overline{0} \cdot 1 + \overline{1} \cdot i$$
$$= 0 + 0 + i = i$$

$$\langle v_2, v_3 \rangle = \overline{(2+i)} \cdot 0 + \overline{1} \cdot 1 + \overline{(1+2i)} \cdot i$$
$$= 0 + 1 + (1-2i) \cdot i$$
$$= 1 + (i - 2i^2)$$
$$= 1 + (i + 2) = 3 + i$$

### Using conjugate symmetry
$$\langle v_2, v_1 \rangle = \overline{\langle v_1, v_2 \rangle} = \overline{3 + 3i} = 3 - 3i$$

$$\langle v_3, v_1 \rangle = \overline{\langle v_1, v_3 \rangle} = \overline{i} = -i$$

$$\langle v_3, v_2 \rangle = \overline{\langle v_2, v_3 \rangle} = \overline{3 + i} = 3 - i$$

### Diagonal entries (self inner products)
$$\langle v_1, v_1 \rangle = |1|^2 + |0|^2 + |1|^2 = 1 + 0 + 1 = 2$$

$$\langle v_2, v_2 \rangle = |2+i|^2 + |1|^2 + |1+2i|^2$$
$$= (2^2 + 1^2) + 1 + (1^2 + 2^2)$$
$$= 5 + 1 + 5 = 11$$

$$\langle v_3, v_3 \rangle = |0|^2 + |1|^2 + |i|^2 = 0 + 1 + 1 = 2$$

## Summary of Results
The complete $3 \times 3$ matrix of inner products is:

$$\begin{pmatrix}
2 & 3+3i & i \\
3-3i & 11 & 3+i \\
-i & 3-i & 2
\end{pmatrix}$$

## Key Insights
- The matrix is Hermitian: $\langle v_j, v_i \rangle = \overline{\langle v_i, v_j \rangle}$
- Diagonal entries are always real (norms squared)
- Complex conjugation rule: $\overline{a+bi} = a-bi$
- Powers of $i$: $i^2 = -1$

## Alternative Approaches
We could organize the computation differently by:
1. Computing all entries directly without using conjugate symmetry
2. Using matrix notation: $\langle v_i, v_j \rangle$ equals the $(i,j)$ entry of $V^* V$ where $V$ has columns $v_1, v_2, v_3$

## Common Mistakes
- Forgetting to conjugate the first argument: $\langle v, w \rangle = \sum \overline{v_i} w_i$, not $v_i w_i$
- Incorrect complex arithmetic: $(1-2i) \cdot i = i - 2i^2 = i + 2$
- Not using conjugate symmetry to save computation time
- Confusing which argument gets conjugated

## Notes
- The inner product on $\mathbb{C}^n$ is conjugate linear in the first argument and linear in the second
- This convention aligns with physics (quantum mechanics) and ensures positive definiteness
