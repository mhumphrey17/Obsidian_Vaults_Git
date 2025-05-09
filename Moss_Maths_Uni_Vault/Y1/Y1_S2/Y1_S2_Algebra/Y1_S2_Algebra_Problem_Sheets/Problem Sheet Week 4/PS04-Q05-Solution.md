---
title: "PS04-Q05-Solution: Standard Matrix Representation and Matrix Equivalence"
aliases: ["Solution to PS04 Q05"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-04", "difficulty-homework", "matrix-representation", "matrix-equivalence", "basis"]
related_problem: [[PS04-Q05]]
---

# PS04-Q05-Solution: Standard Matrix Representation and Matrix Equivalence

## Original Problem

Show that a linear map $\phi: V \rightarrow W$ of rank $r$ can be represented by the standard matrix $D_r$ with respect to appropriate bases. Deduce that matrices of the same rank are equivalent.

## Solution Process

### Part 1: Standard Matrix Representation

To find bases with the desired property, we need $\phi(v_i) = w_i$ for $i \leq r$ and $\phi(v_i) = 0$ for $i > r$.

**Step 1: Choose basis for the domain V**
1. Choose $v_{r+1}, \ldots, v_n$ to be a basis for $\ker \phi$
2. Extend this to a basis $v_1, \ldots, v_n$ for $V$

**Step 2: Define vectors in the codomain**
Set $w_i = \phi(v_i)$ for $i = 1, \ldots, r$.

**Step 3: Verify these form a basis for Im φ**
From the proof of the Rank-Nullity Theorem, we know that $\{w_1, \ldots, w_r\}$ is a basis for $\operatorname{Im} \phi$.
Therefore, $r = \operatorname{rank} \phi$ as required.

**Step 4: Extend to a basis for W**
Extend $\{w_1, \ldots, w_r\}$ to a basis $\{w_1, \ldots, w_m\}$ for $W$.

**Step 5: Verify the matrix representation**
With these bases:
- $\phi(v_i) = w_i$ for $i \leq r$, giving matrix entries $d_{ii} = 1$ for $i \leq r$
- $\phi(v_i) = 0$ for $i > r$, giving zero columns for indices $> r$
- All other entries are zero

Therefore, $[\phi] = D_r$.

### Part 2: Matrix Equivalence

**Proof**: Let $A, B \in M_{m,n}(\mathbb{F})$ with $\operatorname{rank} A = \operatorname{rank} B = r$.

Consider the linear maps $\phi_A, \phi_B: \mathbb{F}^n \rightarrow \mathbb{F}^m$ defined by these matrices.

**Step 1: Standard representations**
By Part 1, there exist invertible matrices $P_1, Q_1, P_2, Q_2$ such that:
- $D_r = P_1^{-1}AQ_1$
- $D_r = P_2^{-1}BQ_2$

Where $P_1, P_2$ have the chosen bases for $\mathbb{F}^m$ as columns, and $Q_1, Q_2$ have the chosen bases for $\mathbb{F}^n$ as columns.

**Step 2: Derive equivalence**
From the equations above:
$$P_1^{-1}AQ_1 = D_r = P_2^{-1}BQ_2$$

Rearranging:
$$B = P_2 D_r Q_2^{-1} = P_2 P_1^{-1}AQ_1 Q_2^{-1}$$

Setting $P = P_1 P_2^{-1}$ and $Q = Q_1 Q_2^{-1}$:
$$B = P^{-1}AQ$$

Since $P_1, P_2, Q_1, Q_2$ are all invertible, so are $P$ and $Q$.

Therefore, $A$ and $B$ are equivalent. ∎

## Key Insights

1. **Basis Construction**: The key is to construct bases that separate the kernel from a complement
2. **Standard Form**: All linear maps of the same rank have the same canonical matrix representation
3. **Equivalence Classes**: Matrices are equivalent if and only if they have the same rank
4. **Change of Basis**: Equivalence describes how matrix representations change under basis changes

## Alternative Perspective

This result shows that the rank completely determines the "shape" of a linear map up to choice of bases. It's analogous to the fundamental theorem of finitely generated abelian groups, where structure is determined by invariant factors.

## Applications

1. **Computational Linear Algebra**: Reduces matrices to simpler forms
2. **Classification**: Complete classification of linear maps by rank
3. **Numerical Methods**: Basis for SVD and other decompositions

## Common Mistakes

1. Not carefully constructing the bases to ensure the desired matrix form
2. Forgetting that both domain and codomain need appropriate bases
3. Confusing matrix equivalence with matrix similarity (similarity preserves eigenvalues, equivalence only preserves rank)
