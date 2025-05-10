---
title: "2021-Q01-Solution: True/False Questions"
aliases: ["Solution to 2021 Q1"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2021", "difficulty-easy", "true-false"]
related_question: [[2021-Q01]]
---

# 2021-Q01-Solution: True/False Questions

## Original Question
For Question 1, you do not need to justify your answers.

Are the following true or false?
(a) A maximal spanning list of vectors in a vector space $V$ is a basis of $V$.
(b) Similar matrices have the same rank.
(c) Let $A, B \in M_{n, n}(\mathbb{F})$. If $\operatorname{det}(A B)=0$, then $\operatorname{det} A=0$ or $\operatorname{det} B=0$.
(d) Equivalent matrices have the same eigenvalues.
(e) Let $A$ be an $n \times n$ lower triangular matrix over a field $\mathbb{F}$. If a.m. $(\lambda)=$ g.m. $(\lambda)$ for all its eigenvalues $\lambda$, then $A$ is diagonalisable.
(f) If the linear operator $f: V \rightarrow V$ is self-adjoint, then $f$ is normal.

## Solution Process

### Final Answers:
- (a) **FALSE**
- (b) **TRUE**
- (c) **TRUE**
- (d) **FALSE**
- (e) **TRUE**
- (f) **TRUE**

## Key Steps and Justifications

### (a) FALSE
- A "maximal spanning list" is typically interpreted as a list that spans the vector space but cannot be reduced by removing any vector
- This is the same as a **minimal spanning list**, which IS a basis
- However, the standard terminology uses "minimal spanning" for bases
- The answer suggests a different interpretation of "maximal spanning"

### (b) TRUE
- Similar matrices represent the same linear operator with respect to different bases
- Rank is basis-independent property

### (c) TRUE
- Using the determinant product formula: $\det(AB) = \det(A) \det(B)$
- If $\det(AB) = 0$, then $\det(A) \det(B) = 0$
- Therefore, either $\det(A) = 0$ or $\det(B) = 0$

### (d) FALSE
- Equivalent matrices have the same rank but not necessarily same eigenvalues
- Similar matrices have the same eigenvalues
- Equivalence is a weaker condition than similarity

### (e) TRUE
- This is precisely the characterization of diagonalizability
- A matrix is diagonalizable if and only if algebraic multiplicity equals geometric multiplicity for all eigenvalues

### (f) TRUE
- Self-adjoint: $f = f^*$
- Normal: $ff^* = f^*f$
- If $f = f^*$, then $ff^* = ff = f^*f$
- Therefore, self-adjoint implies normal

## Common Mistakes
- (a): Confusing "maximal spanning" with "minimal spanning"
- (d): Confusing equivalent matrices with similar matrices
- (e): Not recognizing the standard diagonalizability criterion

## Mark Scheme Breakdown
- 1 mark per correct answer (6 marks total)

