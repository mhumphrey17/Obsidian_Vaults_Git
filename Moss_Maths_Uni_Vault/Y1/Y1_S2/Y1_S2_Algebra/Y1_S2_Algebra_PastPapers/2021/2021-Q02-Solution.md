---
title: "2021-Q02-Solution: Subspace Definition and Test"
aliases: ["Solution to 2021 Q2"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2021", "difficulty-standard", "subspace"]
related_question: [[2021-Q02]]
---

# 2021-Q02-Solution: Subspace Definition and Test

## Original Question
(a) Define what it means for a subset $U$ of a vector space $V$ to be a linear subspace.

(b) Is $U=\left\{(x, y) \in \mathbb{C}^{2} \mid(x+y)(x-y)=0\right\}$ a linear subspace of $\mathbb{C}^{2}$? Justify your answer.

## Solution Process

### Part (a): Definition
A subset $U$ of a vector space $V$ over $\mathbb{F}$ is a linear subspace if $U$ contains the zero vector and is closed under linear combinations, i.e. for any $u, w \in U, \lambda, \mu \in \mathbb{F}$, we have
$$\lambda u+\mu w \in U$$

### Part (b): Subspace Test
**Answer: NO**, $U$ is not a linear subspace of $\mathbb{C}^2$.

#### Proof:
1. **First, identify what condition defines U**:
   - $(x+y)(x-y) = 0$ means $x^2 - y^2 = 0$
   - This gives us $x^2 = y^2$, so $y = x$ or $y = -x$
   - Therefore, $U$ is the union of two lines: $\{(x,x) \mid x \in \mathbb{C}\}$ and $\{(x,-x) \mid x \in \mathbb{C}\}$

2. **Test closure under addition**:
   - Consider $(1,1) \in U$ (since $(1+1)(1-1) = 2 \cdot 0 = 0$)
   - Consider $(1,-1) \in U$ (since $(1+(-1))(1-(-1)) = 0 \cdot 2 = 0$)
   - Their sum: $(1,1) + (1,-1) = (2,0)$
   
3. **Check if the sum is in U**:
   - For $(2,0)$: $(2+0)(2-0) = 2 \cdot 2 = 4 \neq 0$
   - Therefore, $(2,0) \notin U$

4. **Conclusion**:
   - Since $U$ is not closed under addition, it is not a linear subspace.

## Key Steps and Justifications
1. Understanding the condition $(x+y)(x-y) = 0$
2. Recognizing that $U$ is the union of two lines
3. Constructing a counterexample for closure under addition
4. Properly applying the negation of the subspace definition

## Alternative Approaches
Could also test closure under scalar multiplication, but finding a counterexample for addition is sufficient.

## Common Mistakes
- Not properly simplifying the defining condition
- Failing to construct an explicit counterexample
- Not clearly stating the conclusion

## Mark Scheme Breakdown
- Part (a): 2-3 marks for correct definition
- Part (b): 1 mark for identifying the condition simplifies to $x^2 = y^2$
- Part (b): 1 mark for finding vectors in $U$
- Part (b): 1 mark for showing their sum is not in $U$
- Part (b): 1 mark for proper conclusion

