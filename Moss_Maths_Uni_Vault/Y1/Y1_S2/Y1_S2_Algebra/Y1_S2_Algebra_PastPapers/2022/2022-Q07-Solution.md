---
title: "2022-Q07-Solution: Orthonormal Bases and Adjoint Operators"
aliases: ["Solution to Past Paper 2022 Q7"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "past_paper", "2022-exam", "section-B", "q07"]
related_question: [[2022-Q07]]
solution_approach: "Definition recall, Gram-Schmidt algorithm, and proof construction"
key_techniques: ["Definition statements", "Gram-Schmidt process", "QR construction", "Adjoint definition", "Proof by properties"]
common_mistakes: ["Normalization errors", "Formula misapplication", "Incomplete proofs", "Calculation errors"]
---

# 2022-Q07-Solution: Orthonormal Bases and Adjoint Operators

## Original Question

### Part (a) [8 marks]

#### (i)
Let $V$ be an inner product space. Define what it means for a basis of $V$ to be orthonormal.

#### (ii)
Let $A \in M_{n,n}(\mathbb{R})$ be an invertible matrix. Describe what it means for the product $A = QR$ to be the QR decomposition of $A$.

#### (iii)
Apply the Gram-Schmidt orthogonalisation to the basis $v_1 = (1, 1), v_2 = (1,2) \in \mathbb{R}^2$ to obtain an orthonormal basis of $\mathbb{R}^2$ and write down the QR decomposition of the matrix $A$ with column vectors $v_1$ and $v_2$, respectively.

### Part (b) [7 marks]
Let $V$ be an inner product space and let $\phi$ and $\psi$ be linear operators defined on $V$.

#### (i)
Define what it means for a linear operator $\phi^* : V \to V$ to be the adjoint of $\phi$.

#### (ii)
Show that $(\phi\psi)^* = \psi^*\phi^*$ and $(\phi^*)^* = \phi$.

## Solution Process

### Part (a)

#### (i) Orthonormal Basis Definition

A basis $\{v_1, v_2, \ldots, v_n\}$ of $V$ is orthonormal if:
$$\langle v_i, v_j \rangle = \begin{cases} 
1 & \text{if } i = j \\
0 & \text{if } i \neq j
\end{cases}$$
for all $1 \leq i, j \leq n$.

#### (ii) QR Decomposition Definition

$A = QR$ is the QR decomposition of $A$ if:
- $Q$ is orthogonal (i.e., $Q^TQ = I$)
- $R$ is upper triangular with positive entries on the diagonal

#### (iii) Gram-Schmidt and QR Decomposition

**Step 1**: Apply Gram-Schmidt to $v_1 = (1,1)$ and $v_2 = (1,2)$.

First vector: $u_1 = \frac{v_1}{\|v_1\|}$
- $\|v_1\| = \sqrt{1^2 + 1^2} = \sqrt{2}$
- $u_1 = \frac{1}{\sqrt{2}}(1,1) = \left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right)$

Second vector: First orthogonalize, then normalize
- $w_2 = v_2 - \langle v_2, u_1 \rangle u_1$
- $\langle v_2, u_1 \rangle = (1,2) \cdot \left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right) = \frac{1}{\sqrt{2}} + \frac{2}{\sqrt{2}} = \frac{3}{\sqrt{2}}$
- $w_2 = (1,2) - \frac{3}{\sqrt{2}} \cdot \left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right) = (1,2) - \left(\frac{3}{2}, \frac{3}{2}\right) = \left(-\frac{1}{2}, \frac{1}{2}\right)$

Normalize $w_2$:
- $\|w_2\| = \sqrt{\left(-\frac{1}{2}\right)^2 + \left(\frac{1}{2}\right)^2} = \sqrt{\frac{1}{4} + \frac{1}{4}} = \frac{1}{\sqrt{2}}$
- $u_2 = \frac{w_2}{\|w_2\|} = \sqrt{2} \cdot \left(-\frac{1}{2}, \frac{1}{2}\right) = \left(-\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right)$

**Step 2**: Construct Q and R matrices

Orthonormal basis: $\{u_1, u_2\} = \left\{\left(\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right), \left(-\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}\right)\right\}$

Matrix Q (columns are orthonormal vectors):
$$Q = \begin{pmatrix}
\frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \\
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}
\end{pmatrix}$$

Matrix A (columns are original vectors):
$$A = \begin{pmatrix}
1 & 1 \\
1 & 2
\end{pmatrix}$$

Matrix R: $R = Q^T A$
$$R = \begin{pmatrix}
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\
-\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}
\end{pmatrix}\begin{pmatrix}
1 & 1 \\
1 & 2
\end{pmatrix} = \begin{pmatrix}
\sqrt{2} & \frac{3}{\sqrt{2}} \\
0 & \frac{1}{\sqrt{2}}
\end{pmatrix}$$

### Part (b)

#### (i) Adjoint Definition

$\phi^*$ is the adjoint of $\phi$ if:
$$\langle \phi^*(v), w \rangle = \langle v, \phi(w) \rangle$$
for all $v, w \in V$.

#### (ii) Proofs

**Proof of $(\phi\psi)^* = \psi^*\phi^*$:**

For any $v, w \in V$:
$$\langle (\phi\psi)^*(v), w \rangle = \langle v, (\phi\psi)(w) \rangle$$
$$= \langle v, \phi(\psi(w)) \rangle$$
$$= \langle \phi^*(v), \psi(w) \rangle$$ (by definition of $\phi^*$)
$$= \langle \psi^*(\phi^*(v)), w \rangle$$ (by definition of $\psi^*$)
$$= \langle (\psi^*\phi^*)(v), w \rangle$$

Since this holds for all $v, w \in V$ and the adjoint is unique, we have $(\phi\psi)^* = \psi^*\phi^*$.

**Proof of $(\phi^*)^* = \phi$:**

For any $v, w \in V$:
$$\langle (\phi^*)^*(v), w \rangle = \langle v, \phi^*(w) \rangle$$
$$= \overline{\langle \phi^*(w), v \rangle}$$ (conjugate symmetry)
$$= \overline{\langle w, \phi(v) \rangle}$$ (by definition of $\phi^*$)
$$= \langle \phi(v), w \rangle$$ (conjugate symmetry)

Since this holds for all $v, w \in V$ and the adjoint is unique, we have $(\phi^*)^* = \phi$.

## Key Insights

1. **Orthonormal definition**: Uses Kronecker delta notation concisely
2. **QR properties**: Both orthogonality and upper triangular structure required
3. **Gram-Schmidt**: Careful with inner products and normalization
4. **QR construction**: $R = Q^T A$ after finding orthonormal basis
5. **Adjoint proofs**: Systematic use of definition and inner product properties

## Common Errors

1. Missing positive diagonal condition in QR definition
2. Calculation errors in Gram-Schmidt (especially inner products)
3. Incorrect normalization in Gram-Schmidt
4. Not using conjugate symmetry appropriately in proofs
5. Incomplete proof arguments (missing "for all v, w" quantifiers)
