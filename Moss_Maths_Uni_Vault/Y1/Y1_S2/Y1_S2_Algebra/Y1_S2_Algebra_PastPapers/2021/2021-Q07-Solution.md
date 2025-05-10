---
title: "2021-Q07-Solution: Inner Products and Orthonormal Basis"
aliases: ["Solution to 2021 Q7"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past-paper", "2021", "difficulty-challenging", "section-B"]
related_question: [[2021-Q07]]
---

# 2021-Q07-Solution: Inner Products and Orthonormal Basis

## Original Question
(a) Let $V$ be a vector space over $\mathbb{F}$, where $\mathbb{F}$ is $\mathbb{R}$ or $\mathbb{C}$. Define what it means for the map $V \times V \rightarrow \mathbb{F},(v, w) \mapsto\langle v, w\rangle$, to be an inner product on $V$.

(b) Let $V$ be an inner product space and $\phi: V \rightarrow V$ a linear operator. Show that $\phi$ is self-adjoint if and only if $i \phi$ is skew-adjoint, where $i=\sqrt{-1}$.

(c) Let $V=\{f \in \mathbb{R}[x]: \operatorname{deg} f \leq 2\}$. For any $f, g \in V$, define
$$\langle f, g\rangle=f(-1) g(-1)+f(0) g(0)+f(1) g(1)$$
(i) Show that $\langle$,$\rangle defines an inner product on V$.
(ii) Show that the polynomials
$$f_{1}=\frac{(x+1) x}{2}, \quad f_{2}=\frac{x(x-1)}{2}, \quad f_{3}=(x-1)(x+1)$$
form an orthonormal basis of $V$.

## Solution Process

### Part (a): Inner Product Definition

An inner product on $V$ is a map $V \times V \rightarrow \mathbb{F}:(v, w) \mapsto\langle v, w\rangle$ that satisfies:

1. **(Conjugate) Symmetry**: $\langle w, v\rangle=\overline{\langle v, w\rangle}$ for all $v, w \in V$
   - In particular, this means $\langle v, v\rangle=\overline{\langle v, v\rangle}$, so $\langle v, v\rangle$ is real

2. **Linearity in the second argument**: $\langle u, v+\lambda w\rangle=\langle u, v\rangle+\lambda\langle u, w\rangle$ for all $u, v, w \in V$ and $\lambda \in \mathbb{F}$

3. **Positive definiteness**: For all $v \in V$, $\langle v, v\rangle \geq 0$ with equality if and only if $v=0$

### Part (b): Self-adjoint and Skew-adjoint Equivalence

**To prove**: $\phi$ is self-adjoint if and only if $i\phi$ is skew-adjoint.

**Definitions**:
- $\phi$ is self-adjoint if $\langle\phi(v), w\rangle=\langle v, \phi(w)\rangle$ for all $v, w \in V$
- $\psi$ is skew-adjoint if $\langle\psi(v), w\rangle=-\langle v, \psi(w)\rangle$ for all $v, w \in V$

**Proof**:
($\Rightarrow$) Assume $\phi$ is self-adjoint:
$$\langle i\phi(v), w\rangle = \overline{i}\langle\phi(v), w\rangle = -i\langle\phi(v), w\rangle$$
Since $\phi$ is self-adjoint:
$$= -i\langle v, \phi(w)\rangle = -\langle v, i\phi(w)\rangle$$
Therefore, $i\phi$ is skew-adjoint.

($\Leftarrow$) Assume $i\phi$ is skew-adjoint:
$$\langle i\phi(v), w\rangle = -\langle v, i\phi(w)\rangle$$
Multiply both sides by $-i$:
$$-i\langle i\phi(v), w\rangle = -i(-\langle v, i\phi(w)\rangle)$$
$$\langle\phi(v), w\rangle = \langle v, \phi(w)\rangle$$
Therefore, $\phi$ is self-adjoint.

### Part (c): Inner Product and Orthonormal Basis

#### (c)(i): Verifying Inner Product

Check the three axioms:

**1. Symmetry**: For polynomials over $\mathbb{R}$:
$$\langle f, g\rangle = f(-1)g(-1) + f(0)g(0) + f(1)g(1)$$
$$= g(-1)f(-1) + g(0)f(0) + g(1)f(1) = \langle g, f\rangle$$

**2. Linearity**: For any polynomials $f, g, h$ and $\lambda \in \mathbb{R}$:
$$\langle f, g+\lambda h\rangle = f(-1)(g+\lambda h)(-1) + f(0)(g+\lambda h)(0) + f(1)(g+\lambda h)(1)$$
$$= f(-1)g(-1) + \lambda f(-1)h(-1) + f(0)g(0) + \lambda f(0)h(0) + f(1)g(1) + \lambda f(1)h(1)$$
$$= \langle f, g\rangle + \lambda\langle f, h\rangle$$

**3. Positive definiteness**:
$$\langle f, f\rangle = f(-1)^2 + f(0)^2 + f(1)^2 \geq 0$$

If $\langle f, f\rangle = 0$, then $f(-1) = f(0) = f(1) = 0$.
Since $f$ has degree $\leq 2$ and has three distinct roots, $f$ must be the zero polynomial.

Therefore, $\langle\cdot,\cdot\rangle$ is an inner product.

#### (c)(ii): Orthonormal Basis

**Evaluate at key points**:
- $f_1(-1) = 0$, $f_1(0) = 0$, $f_1(1) = 1$
- $f_2(-1) = 1$, $f_2(0) = 0$, $f_2(1) = 0$  
- $f_3(-1) = 0$, $f_3(0) = -1$, $f_3(1) = 0$

**Check orthonormality**:

$\langle f_1, f_1\rangle = 0^2 + 0^2 + 1^2 = 1$ ✓

$\langle f_2, f_2\rangle = 1^2 + 0^2 + 0^2 = 1$ ✓

$\langle f_3, f_3\rangle = 0^2 + (-1)^2 + 0^2 = 1$ ✓

$\langle f_1, f_2\rangle = 0 \cdot 1 + 0 \cdot 0 + 1 \cdot 0 = 0$ ✓

$\langle f_1, f_3\rangle = 0 \cdot 0 + 0 \cdot (-1) + 1 \cdot 0 = 0$ ✓

$\langle f_2, f_3\rangle = 1 \cdot 0 + 0 \cdot (-1) + 0 \cdot 0 = 0$ ✓

Since $\{f_1, f_2, f_3\}$ is an orthonormal list of 3 vectors and $\dim V = 3$, it forms an orthonormal basis.

## Key Steps and Justifications
1. Complete statement of inner product axioms
2. Careful manipulation of conjugate linearity properties  
3. Using definitions of self-adjoint and skew-adjoint
4. Systematic verification of all inner product properties
5. Strategic evaluation of polynomials at specific points
6. Verification of all orthogonality and normalization conditions

## Alternative Approaches
- Could verify basis property by showing linear independence first
- Could use Gram-Schmidt to construct basis from standard basis

## Common Mistakes
- Missing conjugate symmetry in complex case
- Errors in algebraic manipulation with complex numbers
- Computational errors in polynomial evaluation
- Not checking all pairwise inner products
- Forgetting to verify dimensionality matches

## Mark Scheme Breakdown
- Part (a): 1 mark each for three axioms, 1 mark for clarity
- Part (b): 2 marks for forward direction, 2 marks for backward direction  
- Part (c)(i): 1 mark each for three axioms
- Part (c)(ii): 2 marks for computations, 1 mark for conclusion

