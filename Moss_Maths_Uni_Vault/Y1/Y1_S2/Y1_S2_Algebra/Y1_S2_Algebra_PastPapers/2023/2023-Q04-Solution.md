---
title: "2023-Q04-Solution: Adjugate Matrix and Integer Inverses"
aliases: ["Solution to Past Paper 2023 Q4"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2023-exam", "section-a", "q4", "adjugate", "matrix_inversion"]
related_question: [[2023-Q04]]
solution_approach: "Definition recall and algebraic proof"
key_techniques: ["Adjugate definition", "Integer arithmetic properties", "Matrix inversion formula"]
common_mistakes: ["Incorrect adjugate indexing", "Forgetting that minors are integers"]
---

# 2023-Q04-Solution: Adjugate Matrix and Integer Inverses

## Original Question
Let A be an n by n matrix over R.

(a) Define the adjugate of A.
(b) Show that if det A = ±1 and the entries of A are all integers, then the entries of A⁻¹ are also all integers.

## Solution Process

### Part (a): Definition of Adjugate

The [[Adjugate Matrix|adjugate]] adj(A) of A is the n×n matrix with the (i,j)-entry equal to:
$$(-1)^{i+j} \mu_{ji}(A)$$

where $\mu_{ji}(A)$ is the (j,i)-[[Minor|minor]] of A.

**Key points:**
- Note the index reversal: the (i,j)-entry uses the (j,i)-minor
- The minor $\mu_{ji}(A)$ is the determinant of the (n-1)×(n-1) submatrix obtained by deleting row j and column i
- The adjugate is the transpose of the [[Cofactor|cofactor]] matrix

### Part (b): Integer Matrix Inverse

**Step 1: Use the adjugate formula for inverse**

By [[Matrix Inversion via Adjugate|Theorem 2.4.6 and Corollary 2.4.7]]:
$$A^{-1} = \frac{1}{\det A} \cdot \text{adj}(A)$$

**Step 2: Show that adjugate entries are integers**

Since A has integer entries:
- All minors $\mu_{ji}(A)$ are determinants of submatrices with integer entries
- Determinants are computed using sums and products of entries
- Therefore, all minors are integers

Since the adjugate entries are:
$$(-1)^{i+j} \mu_{ji}(A)$$

and $(-1)^{i+j} = \pm 1$, each entry of adj(A) is an integer.

**Step 3: Apply the given condition**

Given that $\det A = \pm 1$, we have:
$$A^{-1} = \frac{1}{\pm 1} \cdot \text{adj}(A) = \pm \text{adj}(A)$$

**Step 4: Conclude**

Since adj(A) has integer entries and multiplying by ±1 preserves integer entries, $A^{-1}$ has integer entries.

## Key Insights

1. **Index Convention**: The adjugate involves the (j,i)-minor in the (i,j) position - this transpose is crucial

2. **Integer Preservation**: The determinant operation preserves integer entries when applied to integer matrices

3. **Critical Role of $\det A = \pm 1$**: This ensures the inverse formula simplifies to just $\pm \text{adj}(A)$, avoiding fractional entries

4. **Connection to Matrix Inversion**: This result explains why matrices with integer entries and determinant ±1 have integer inverses

## Alternative Approaches

Could use Cramer's rule to show that each entry of $A^{-1}$ is a ratio of determinants, but the adjugate method is more direct and elegant.

## Common Errors

1. **Index Confusion**: Using $\mu_{ij}$ instead of $\mu_{ji}$ in the adjugate definition
2. **Sign Errors**: Incorrect placement of $(-1)^{i+j}$
3. **Missing the Inverse**: Not recognizing that integer minors lead to integer adjugate entries
4. **Overlooking $\det A = \pm 1$**: This condition is essential for the final conclusion

## Notes

This problem beautifully illustrates the connection between:
- Abstract matrix theory (adjugate)
- Practical computation (matrix inversion)
- Number theory (integer entries)

The result has important applications in:
- Discrete mathematics
- Cryptography
- Lattice theory
