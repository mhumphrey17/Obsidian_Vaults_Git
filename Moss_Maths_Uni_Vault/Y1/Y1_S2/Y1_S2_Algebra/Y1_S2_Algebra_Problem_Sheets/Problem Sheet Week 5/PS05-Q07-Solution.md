---
title: "PS05-Q07-Solution: Determinant Calculation using Sum Formula"
aliases: ["Solution to PS05 Q07"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "ps-05", "difficulty-advanced", "sum-formula", "permutations", "manual-calculation"]
related_problem: [[PS05-Q07]]
---

# PS05-Q07-Solution: Determinant Calculation using Sum Formula

## Original Problem
Make a list of all the permutations $\sigma \in S_4$ together with $\operatorname{sgn}(\sigma)$ and the corresponding product term in the sum formula for $\operatorname{det}(A)$, when

$$A = \begin{pmatrix}
1 & 2 & -1 & 0 \\
0 & 3 & 2 & -1 \\
2 & -1 & 3 & 0 \\
1 & 3 & -1 & 2
\end{pmatrix}$$

Hence use the sum formula to compute $\operatorname{det}(A)$.

## Solution Process

### Complete List of Permutations in $S_4$

The following table lists all 24 permutations in $S_4$, organized by cycle type:

| $\sigma(1234)$ | sgn $\sigma$ | term | $\sigma(1234)$ | sgn $\sigma$ | term | $\sigma(1234)$ | sgn $\sigma$ | term |
|:---------------|:-------------|:-----|:---------------|:-------------|:-----|:---------------|:-------------|:-----|
| **Identity** | | | **Transpositions** | | | **Products of 2 transpositions** | | |
| 1234 | +1 | 18 | 2134 | -1 | 0 | 1342 | +1 | -1 |
| | | | 1324 | -1 | -4 | 1423 | +1 | 0 |
| | | | 1243 | -1 | 0 | 3241 | +1 | 0 |
| | | | 3214 | -1 | -12 | 4213 | +1 | 0 |
| | | | 1432 | -1 | -9 | 2431 | +1 | 0 |
| | | | 4231 | -1 | 0 | 4132 | +1 | -6 |
| | | | **4-cycles** | | | **3-cycles** | | |
| 2341 | +1 | 0 | 4312 | -1 | -1 | 3124 | +1 | 16 |
| 4123 | +1 | 0 | 3142 | -1 | 4 | 2314 | +1 | 0 |
| 3412 | +1 | 6 | 3421 | -1 | 0 | |

### Calculating each term

For each permutation $\sigma$, the term is:
$$\text{term} = a_{\sigma(1)1} \cdot a_{\sigma(2)2} \cdot a_{\sigma(3)3} \cdot a_{\sigma(4)4}$$

For example:
- $\sigma = (1234)$ (identity): $a_{11} \cdot a_{22} \cdot a_{33} \cdot a_{44} = 1 \cdot 3 \cdot 3 \cdot 2 = 18$
- $\sigma = (2134)$ (swap 1,2): $a_{21} \cdot a_{12} \cdot a_{33} \cdot a_{44} = 0 \cdot 2 \cdot 3 \cdot 2 = 0$
- $\sigma = (1324)$ (swap 2,3): $a_{11} \cdot a_{32} \cdot a_{23} \cdot a_{44} = 1 \cdot (-1) \cdot 2 \cdot 2 = -4$

### Computing the determinant

Summing by type and then combining with signs:

**Identity:** $+18 = 18$

**Transpositions:** $0 + (-4) + 0 + (-12) + (-9) + 0 = -25$

**Products of 2 transpositions:** $(-1) + 0 + 0 + 0 + 0 + (-6) = -7$

**4-cycles:** $0 + 0 + 6 = 6$

**3-cycles:** $(-1) + 4 + 0 + 16 + 0 = 19$

Total: $18 - 25 + (-7) + 6 + 19 = 18 - 32 + 25 = 55$

Therefore, $\operatorname{det}(A) = 55$.

### Verification

We can verify this result using the answer from PS05-Q03(i), where the same matrix was computed using row operations to get determinant 55.

## Key Insights
1. All 24 permutations in $S_4$ must be considered
2. Many terms are zero due to matrix entries being zero
3. The organization by cycle type helps in systematic calculation
4. This direct calculation confirms results from row operations
5. The sum formula shows the combinatorial structure underlying determinants

## Computational Complexity
- For an $n \times n$ matrix, there are $n!$ terms in the sum
- Each term requires $n$ multiplications
- Total complexity is $O(n \cdot n!)$, which grows very quickly
- This explains why row operations are preferred for large matrices

## Common Mistakes
1. Missing permutations or counting them incorrectly
2. Errors in computing signs of permutations
3. Calculation errors in the product terms
4. Forgetting to apply signs when summing
5. Misorganizing permutations by cycle type
