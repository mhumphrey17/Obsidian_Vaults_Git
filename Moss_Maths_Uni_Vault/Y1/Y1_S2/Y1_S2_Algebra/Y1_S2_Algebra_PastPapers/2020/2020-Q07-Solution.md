---
title: "2020-Q07-Solution: Adjugate Properties and Differentiation Operator"
aliases: ["Solution to 2020 Q7"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2020", "difficulty-challenging", "adjugate", "similar-matrices", "differentiation", "polynomial-spaces", "diagonalization"]
related_question: [[2020-Q07]]
---

# 2020-Q07-Solution: Adjugate Properties and Differentiation Operator

## Original Question
(a) Let $A, B \in M_{n, n}(\mathbb{F})$ be invertible matrices. Show that
    (i) $\operatorname{adj}(A B)=\operatorname{adj} B \operatorname{adj} A$.
    (ii) if $A$ and $B$ are similar, then $\operatorname{adj} A$ and $\operatorname{adj} B$ are similar.

(b) Let $V=\{f \in \mathbb{R}[X] \mid \operatorname{deg} f \leq 3\}$ and $W=\{f \in \mathbb{R}[X] \mid \operatorname{deg} f \leq 2\}$.
    (i) Write down explicit bases of $V$ and $W$ such that with respect to these bases, the linear map $D$ is represented by the matrix $\begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \end{pmatrix}$.
    (ii) Is $D$ diagonalisable?
    (iii) Write down an explicit basis of $V$ such that with respect to this basis, $D$ is represented by the matrix $\begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$.

## Solution Process

### Part (a)

We use the property that for any invertible matrix $M$:
$$\operatorname{adj} M = (\det M) M^{-1}$$

And the properties:
- $\det(AB) = \det A \det B$
- $(AB)^{-1} = B^{-1}A^{-1}$

#### (i) Prove $\operatorname{adj}(AB) = \operatorname{adj} B \operatorname{adj} A$

Starting with the left side:
$$\operatorname{adj}(AB) = \det(AB) (AB)^{-1}$$

Using the properties:
$$= (\det A \det B) (B^{-1}A^{-1})$$
$$= (\det B B^{-1}) (\det A A^{-1})$$

Applying the adjugate formula:
$$= (\operatorname{adj} B) (\operatorname{adj} A)$$

Therefore, $\operatorname{adj}(AB) = \operatorname{adj} B \operatorname{adj} A$.

#### (ii) Prove: If $A$ and $B$ are similar, then $\operatorname{adj} A$ and $\operatorname{adj} B$ are similar

Given: $A$ and $B$ are similar, so $A = PBP^{-1}$ for some invertible matrix $P$.

Similar matrices have the same determinant: $\det A = \det B$.

Using the adjugate formula:
$$\operatorname{adj} A = (\det A) A^{-1}$$

Substituting $A = PBP^{-1}$ and $\det A = \det B$:
$$\operatorname{adj} A = (\det B) (PBP^{-1})^{-1}$$

Using $(PBP^{-1})^{-1} = PB^{-1}P^{-1}$:
$$\operatorname{adj} A = (\det B) (PB^{-1}P^{-1})$$
$$= P (\det B B^{-1}) P^{-1}$$
$$= P (\operatorname{adj} B) P^{-1}$$

Since $\operatorname{adj} A = P (\operatorname{adj} B) P^{-1}$, we have shown that $\operatorname{adj} A$ and $\operatorname{adj} B$ are similar.

### Part (b)

#### (i) Explicit bases for the given matrix representation

We need bases $\alpha$ for $V$ and $\beta$ for $W$ such that $[D]_\alpha^\beta = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \end{pmatrix}$.

The columns of this matrix tell us:
- $D(v_1) = 1 \cdot w_1 + 0 \cdot w_2 + 0 \cdot w_3 = w_1$
- $D(v_2) = 0 \cdot w_1 + 1 \cdot w_2 + 0 \cdot w_3 = w_2$
- $D(v_3) = 0 \cdot w_1 + 0 \cdot w_2 + 1 \cdot w_3 = w_3$
- $D(v_4) = 0 \cdot w_1 + 0 \cdot w_2 + 0 \cdot w_3 = 0$

Since $v_4$ maps to zero, it must be a constant (kernel of differentiation).
Let $\beta = \{1, X, X^2\}$ be the standard basis for $W$.

To find $\alpha$, we need:
- $D(v_1) = 1$, so $v_1 = X$
- $D(v_2) = X$, so $v_2 = \frac{1}{2}X^2$
- $D(v_3) = X^2$, so $v_3 = \frac{1}{3}X^3$
- $D(v_4) = 0$, so $v_4 = 1$

**Answer**: $\alpha = \{X, \frac{1}{2}X^2, \frac{1}{3}X^3, 1\}$ and $\beta = \{1, X, X^2\}$.

#### (ii) Is $D$ diagonalisable (viewed as $V \to V$)?

Using the standard basis $\{1, X, X^2, X^3\}$ for $V$, we have:
$$D(1) = 0$$
$$D(X) = 1$$
$$D(X^2) = 2X$$
$$D(X^3) = 3X^2$$

The matrix representation is:
$$M = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 3 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

The characteristic polynomial is:
$$\det(M - tI) = (-t)^4 = t^4$$

The only eigenvalue is $\lambda = 0$ with algebraic multiplicity 4.

The kernel of $D$ is $\operatorname{Ker} D = \{c \cdot 1 \mid c \in \mathbb{R}\}$, so:
$$\dim(\operatorname{Ker} D) = 1$$

The geometric multiplicity of 0 is 1, which is less than the algebraic multiplicity of 4.

**Answer**: $D$ is not diagonalisable.

#### (iii) Basis for the given Jordan block representation

We need a basis $\gamma$ such that $[D]_\gamma = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$.

This matrix indicates:
- $D(u_1) = 0$
- $D(u_2) = u_1$
- $D(u_3) = u_2$
- $D(u_4) = u_3$

Working backwards:
- $u_1$ must be in the kernel, so $u_1 = 1$
- $D(u_2) = 1$, so $u_2 = X$
- $D(u_3) = X$, so $u_3 = \frac{1}{2}X^2$
- $D(u_4) = \frac{1}{2}X^2$, so $u_4 = \frac{1}{6}X^3$

**Answer**: $\gamma = \{1, X, \frac{1}{2}X^2, \frac{1}{6}X^3\}$.

## Key Steps and Justifications
1. Used the adjugate formula $\operatorname{adj} M = (\det M) M^{-1}$ (**COR-2.4.7**)
2. Applied properties of determinants and inverses under matrix multiplication (**THM-2.3.3**)
3. Used the fact that similar matrices have the same determinant (**LEM-3.1.6**)
4. Applied matrix representation theory to work backwards from desired matrices (**DEF-1.6.1**)
5. Used the diagonalisability criterion: geometric multiplicity = algebraic multiplicity (**THM-3.4.7**)
6. Constructed Jordan chain for the given Jordan block representation

## Alternative Approaches
- For part (a), could use cofactor expansion, but this is much more tedious
- For part (b)(ii), could compute eigenspaces directly rather than using dimension counting

## Common Mistakes
- Errors in applying the adjugate formula
- Forgetting the order reversal in $\operatorname{adj}(AB) = \operatorname{adj} B \operatorname{adj} A$
- Incorrect basis constructions when working backwards from matrix representations
- Confusing geometric and algebraic multiplicities in diagonalisability

## Mark Scheme Breakdown
- Part (a)(i): 3 marks for correct proof using adjugate properties
- Part (a)(ii): 3 marks for showing similarity of adjugates
- Part (b)(i): 3 marks for finding correct bases
- Part (b)(ii): 2 marks for determining non-diagonalisability with justification
- Part (b)(iii): 3 marks for constructing Jordan chain basis
