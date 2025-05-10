---
title: "2022-Q01-Solution: True/False Statements"
aliases: ["Solution to Past Paper 2022 Q1"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2022-exam", "section-A", "q01"]
related_question: [[2022-Q01]]
solution_approach: "Applying definitions and key theorems"
key_techniques: ["Definition checking", "Counterexample construction", "Property application"]
common_mistakes: ["Assuming basis concatenation always works", "Confusing sufficient with necessary conditions"]
---

# 2022-Q01-Solution: True/False Statements

## Original Question
Are the following true or false? (No justification required)

(a) Let U and W be linear subspaces of V with bases $u_1, \ldots, u_s$ and $w_1, \ldots, w_t$, respectively. Then the concatenated list $u_1, \ldots, u_s, w_1, \ldots, w_t$ is a basis of $U + W$.

(b) Similar matrices have the same rank.

(c) A matrix representing a linear map is square.

(d) Let $A$ be a square matrix such that $A^2 = 0$. Then $\det A = 0$.

(e) Let $v$ and $w$ be linearly independent $\lambda$-eigenvectors of $\phi : V \to V$. Then for any nonzero scalars $\mu$ and $\gamma$, $\mu v + \gamma w$ is again a $\lambda$-eigenvector of $\phi$.

(f) Let $A$ be an $n \times n$ matrix over $\mathbb{C}$. If $A$ has fewer than $n$ distinct eigenvalues, then $A$ is not diagonalisable.

## Solution Process

**Answers: F T F T T F**

### Part (a): FALSE

The concatenated list spans $U + W$, but it is only a basis if it is linearly independent. This requires $U \cap W = \{0\}$.

**Counterexample**: If $U = W$, then the concatenated list contains two copies of a basis for $U$, which is linearly dependent.

**Key insight**: The statement is true only for direct sums ($U \oplus W$), not general sums.

### Part (b): TRUE

Similar matrices represent the same linear operator with respect to different bases. The rank of a matrix equals the rank of its corresponding linear map, which is independent of the choice of basis.

**Key theorem**: If $A \sim B$ (A is similar to B), then $\text{rank}(A) = \text{rank}(B)$.

### Part (c): FALSE

A matrix representing a linear map $\phi: V \to W$ is square if and only if $\dim V = \dim W$. If $\dim V \neq \dim W$, the matrix is $m \times n$ where $m = \dim W$ and $n = \dim V$.

**Key insight**: The question doesn't specify that $V = W$ (i.e., $\phi$ is an operator).

### Part (d): TRUE

Given $A^2 = 0$, take determinants of both sides:
$\det(A^2) = \det(0)$

Using the product formula:
$\det(A^2) = \det(A \cdot A) = \det(A) \cdot \det(A) = (\det A)^2$

Since $\det(0) = 0$, we have $(\det A)^2 = 0$, which implies $\det A = 0$.

### Part (e): TRUE

If $v$ and $w$ are $\lambda$-eigenvectors, then:
- $\phi(v) = \lambda v$
- $\phi(w) = \lambda w$

For any scalars $\mu, \gamma$:
$\phi(\mu v + \gamma w) = \phi(\mu v) + \phi(\gamma w)$ (by linearity)
$= \mu \phi(v) + \gamma \phi(w)$
$= \mu(\lambda v) + \gamma(\lambda w)$
$= \lambda(\mu v + \gamma w)$

Since $v, w$ are linearly independent and $\mu, \gamma$ are nonzero, $\mu v + \gamma w \neq 0$.

**Key insight**: Eigenspaces are subspaces, so linear combinations of eigenvectors with the same eigenvalue are also eigenvectors.

### Part (f): FALSE

Having $n$ distinct eigenvalues is sufficient for diagonalisability, but not necessary. A matrix is diagonalisable if and only if the geometric multiplicity equals the algebraic multiplicity for each eigenvalue.

**Counterexample**: The $n \times n$ identity matrix has only one eigenvalue (1) with multiplicity $n$, but it's already diagonal (hence diagonalisable).

## Key Insights

1. **Part (a)**: Direct sum vs general sum conditions
2. **Part (b)**: Similarity preserves rank (and other invariants)
3. **Part (c)**: Matrix dimensions depend on vector space dimensions
4. **Part (d)**: Nilpotent matrices have zero determinant
5. **Part (e)**: Eigenspaces are closed under linear combinations
6. **Part (f)**: Distinction between sufficient and necessary conditions

## Common Errors

1. Assuming concatenated bases always work (part a)
2. Forgetting that square matrices require equal dimensions (part c)
3. Not applying the product formula for determinants (part d)
4. Missing the condition that scalars must be nonzero (part e)
5. Confusing sufficient conditions with necessary conditions (part f)
