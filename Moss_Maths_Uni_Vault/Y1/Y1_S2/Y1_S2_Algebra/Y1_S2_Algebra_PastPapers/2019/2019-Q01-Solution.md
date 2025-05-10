---
title: "2019-Q01-Solution: True/False Questions Solutions"
aliases: ["Solution to 2019 Q1"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2019", "difficulty-easy", "true-false", "basis", "equivalent-matrices", "eigenvalues", "diagonalisability", "subspace"]
related_question: [[2019-Q01]]
---

# 2019-Q01-Solution: True/False Questions Solutions

## Original Question
Are the following true or false?
(a) A basis of a vector space never contains the zero vector.
(b) Equivalent matrices have equal rank.
(c) Any $n \times n$ matrix with $n$ distinct eigenvalues is diagonalisable.
(d) If $V$ is a linear subspace of a vector space $W$, then its complement $W \backslash V$ is not a linear subspace of $W$.
(e) If two square matrices are equivalent, then they have the same eigenvalues.
(f) If $A \in M_{n, n}(\mathbb{C})$ then $A$ has at least one eigenvalue.

## Solution Process

### Part (a): **True**
A basis must be a linearly independent set of vectors. Since the zero vector can be expressed as a linear combination of any other vectors (with all coefficients zero), any set containing the zero vector is linearly dependent. Therefore, a basis cannot contain the zero vector.

### Part (b): **True**
Equivalent matrices are related by $B = PAQ$ where $P$ and $Q$ are invertible matrices. Since multiplication by invertible matrices preserves rank, equivalent matrices have equal rank. This is a standard result in linear algebra.

### Part (c): **True**
If an $n \times n$ matrix has $n$ distinct eigenvalues, then it is diagonalisable. This follows from the fact that a matrix with distinct eigenvalues has corresponding linearly independent eigenvectors, forming a basis for $\mathbb{F}^n$.

### Part (d): **False**
The complement $W \backslash V$ is typically not a linear subspace. For example, if $V = \{0\}$, then $W \backslash V$ does not contain the zero vector, violating a fundamental property of subspaces. However, the question asks if the complement is "not" a linear subspace, which is false in some specific cases.

### Part (e): **False**
Equivalent matrices do not necessarily have the same eigenvalues. Equivalent matrices are related by $B = PAQ$ with $P, Q$ invertible, while similar matrices (related by $B = P^{-1}AP$) do have the same eigenvalues. Equivalence is a weaker relation than similarity.

### Part (f): **True**
Over the complex numbers, every $n \times n$ matrix has at least one eigenvalue. This follows from the Fundamental Theorem of Algebra: the characteristic polynomial is a degree $n$ polynomial with complex coefficients, which must have at least one complex root.

## Key Steps and Justifications

1. **Part (a)**: Based on definition of basis as linearly independent set
2. **Part (b)**: Uses properties of equivalent matrices and rank preservation
3. **Part (c)**: Applies the characterization theorem for diagonalisability
4. **Part (d)**: Requires careful interpretation - specific counterexamples exist
5. **Part (e)**: Distinguishes between equivalent and similar matrices
6. **Part (f)**: Relies on the Fundamental Theorem of Algebra

## Common Mistakes

1. Confusing equivalent matrices with similar matrices (parts b, e)
2. Incorrectly applying subspace properties (part d)
3. Missing the field-dependent nature of eigenvalue existence (part f)

## Mark Scheme Breakdown
- Each part: 1 mark for correct answer (no justification required)