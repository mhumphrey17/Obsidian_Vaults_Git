---
title: "2022-Q02-Solution: Linear Maps"
aliases: ["Solution to Past Paper 2022 Q2"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2022-exam", "section-A", "q02"]
related_question: [[2022-Q02]]
solution_approach: "Definition recall and counterexample construction"
key_techniques: ["Zero vector test", "Additivity test", "Counterexample construction"]
common_mistakes: ["Incomplete definitions", "Not testing all properties", "Calculation errors"]
---

# 2022-Q02-Solution: Linear Maps

## Original Question

### Part (a)
Define what it means for a map $\phi : V \to W$ to be linear.

### Part (b)
Are the following maps linear? Briefly justify your answer.

#### (i)
$f : \mathbb{R} \to \mathbb{R}, x \mapsto x + 100$.

#### (ii)
$f : \mathbb{R}^2 \to \mathbb{R}, (x,y) \mapsto xy$.

## Solution Process

### Part (a)

A map $\phi : V \to W$ is linear if for any $v, w \in V$ and any scalar $\lambda$:

$$\phi(v + \lambda w) = \phi(v) + \lambda \phi(w)$$

**Alternative equivalent definition**: $\phi$ is linear if it satisfies both:
1. **Additivity**: $\phi(v + w) = \phi(v) + \phi(w)$ for all $v, w \in V$
2. **Homogeneity**: $\phi(\lambda v) = \lambda \phi(v)$ for all $v \in V$ and scalar $\lambda$

### Part (b)

#### (i) $f : \mathbb{R} \to \mathbb{R}, x \mapsto x + 100$

**Not linear**.

**Proof**: Test the zero vector property. For any linear map, $f(0) = 0$.

Here: $f(0) = 0 + 100 = 100 \neq 0$

Therefore, $f$ is not linear.

**Alternative proof**: Test additivity.
- $f(1) = 1 + 100 = 101$
- $f(1 + 1) = f(2) = 2 + 100 = 102$
- $f(1) + f(1) = 101 + 101 = 202$

Since $102 \neq 202$, additivity fails.

#### (ii) $f : \mathbb{R}^2 \to \mathbb{R}, (x,y) \mapsto xy$

**Not linear**.

**Proof**: Test additivity.

Let's use specific vectors:
- $(1,1) = (1,0) + (0,1)$
- $f((1,1)) = 1 \cdot 1 = 1$
- $f((1,0)) + f((0,1)) = 1 \cdot 0 + 0 \cdot 1 = 0 + 0 = 0$

Since $1 \neq 0$, additivity fails.

**Alternative proof**: Test homogeneity.
- $f(2(1,1)) = f((2,2)) = 2 \cdot 2 = 4$
- $2f((1,1)) = 2 \cdot 1 = 2$

Since $4 \neq 2$, homogeneity fails.

## Key Insights

1. **Definition importance**: The combined form is often more compact
2. **Zero test**: Checking $f(0) = 0$ is usually the quickest test
3. **Counterexamples**: Need only show one property fails to prove non-linearity
4. **Strategic testing**: Choose simple vectors for calculations

## Common Errors

1. **Incomplete definition**: Missing quantifiers or not covering both properties
2. **Calculation mistakes**: Errors in arithmetic when testing properties
3. **Insufficient justification**: Not showing the counterexample clearly
4. **Testing wrong properties**: Using properties that don't directly follow from linearity
