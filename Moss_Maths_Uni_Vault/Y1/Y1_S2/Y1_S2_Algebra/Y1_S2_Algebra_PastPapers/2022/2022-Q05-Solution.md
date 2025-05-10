---
title: "2022-Q05-Solution: Inner Products"
aliases: ["Solution to Past Paper 2022 Q5"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2022-exam", "section-A", "q05"]
related_question: [[2022-Q05]]
solution_approach: "Definition recall and complex arithmetic"
key_techniques: ["Inner product axioms", "Complex conjugation", "Dot product calculation"]
common_mistakes: ["Missing axioms", "Conjugation errors", "Arithmetic mistakes"]
---

# 2022-Q05-Solution: Inner Products

## Original Question

### Part (a) [6 marks]
Let $V$ be a vector space over $\mathbb{C}$. Define what it means for a map
$$V \times V \to \mathbb{C} : (v, w) \mapsto \langle v, w \rangle$$
to be an inner product.

### Part (b) [6 marks]
Let $v_1 = (1,0,1)$ and $v_2 = (2 + i, 1, 1 + 2i) \in \mathbb{C}^3$. Compute $\langle v_1, v_1 \rangle$, $\langle v_1, v_2 \rangle$, $\langle v_2, v_1 \rangle$ and $\langle v_2, v_2 \rangle$ with respect to the dot product on $\mathbb{C}^3$.

## Solution Process

### Part (a)

A map $\langle \cdot, \cdot \rangle : V \times V \to \mathbb{C}$ is an inner product if it satisfies the following three properties:

1. **Conjugate Symmetry**: $\langle v, w \rangle = \overline{\langle w, v \rangle}$ for all $v, w \in V$

2. **Linearity in the Second Argument**: $\langle v, u + \lambda w \rangle = \langle v, u \rangle + \lambda \langle v, w \rangle$ for all $u, v, w \in V$ and $\lambda \in \mathbb{C}$

3. **Positive Definite**: 
   - $\langle v, v \rangle \geq 0$ for all $v \in V$
   - $\langle v, v \rangle = 0$ if and only if $v = 0$

### Part (b)

For the complex dot product, we use the formula:
$$\langle v, w \rangle = \sum_{i=1}^3 v_i \overline{w_i}$$

Given: $v_1 = (1,0,1)$ and $v_2 = (2 + i, 1, 1 + 2i)$

**Calculation 1**: $\langle v_1, v_1 \rangle$
$$\langle v_1, v_1 \rangle = 1 \cdot \overline{1} + 0 \cdot \overline{0} + 1 \cdot \overline{1}$$
$$= 1 \cdot 1 + 0 \cdot 0 + 1 \cdot 1$$
$$= 1 + 0 + 1 = 2$$

**Calculation 2**: $\langle v_1, v_2 \rangle$
$$\langle v_1, v_2 \rangle = 1 \cdot \overline{(2+i)} + 0 \cdot \overline{1} + 1 \cdot \overline{(1+2i)}$$
$$= 1 \cdot (2-i) + 0 + 1 \cdot (1-2i)$$
$$= (2-i) + (1-2i)$$
$$= 3 - 3i$$

**Calculation 3**: $\langle v_2, v_1 \rangle$
Using conjugate symmetry: $\langle v_2, v_1 \rangle = \overline{\langle v_1, v_2 \rangle}$
$$\langle v_2, v_1 \rangle = \overline{(3-3i)} = 3 + 3i$$

**Verification by direct calculation**:
$$\langle v_2, v_1 \rangle = (2+i) \cdot \overline{1} + 1 \cdot \overline{0} + (1+2i) \cdot \overline{1}$$
$$= (2+i) \cdot 1 + 1 \cdot 0 + (1+2i) \cdot 1$$
$$= (2+i) + 0 + (1+2i)$$
$$= 3 + 3i$$ ✓

**Calculation 4**: $\langle v_2, v_2 \rangle$
$$\langle v_2, v_2 \rangle = (2+i) \cdot \overline{(2+i)} + 1 \cdot \overline{1} + (1+2i) \cdot \overline{(1+2i)}$$
$$= (2+i)(2-i) + 1 + (1+2i)(1-2i)$$

For $(2+i)(2-i)$:
$$= 4 - 2i + 2i - i^2 = 4 - (-1) = 5$$

For $(1+2i)(1-2i)$:
$$= 1 - 2i + 2i - 4i^2 = 1 - 4(-1) = 1 + 4 = 5$$

Therefore:
$$\langle v_2, v_2 \rangle = 5 + 1 + 5 = 11$$

## Key Insights

1. **Definition completeness**: All three axioms must be stated for full marks
2. **Complex conjugation**: Careful handling of conjugates is essential
3. **Conjugate symmetry**: Can be used as a check for calculations
4. **Real inner product**: Note that $\langle v, v \rangle$ is always real and non-negative

## Common Errors

1. Missing one of the three axioms in the definition
2. Confusing the order of conjugation in the dot product formula
3. Arithmetic errors when multiplying complex numbers
4. Forgetting to apply complex conjugate to the second argument
