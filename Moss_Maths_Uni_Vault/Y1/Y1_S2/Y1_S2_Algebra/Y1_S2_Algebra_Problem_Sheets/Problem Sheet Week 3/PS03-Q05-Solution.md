---
title: "PS03-Q05-Solution: Matrix Representation with Different Bases"
aliases: ["Solution to PS03 Q05"]
tags: ["Y1_S2", "Y1_S2_Algebra", "solution", "Y1_S2_Algebra_PS-03", "difficulty-homework", "matrix-representation", "change-of-basis", "linear-maps"]
related_problem: [[PS03-Q05]]
---

# PS03-Q05-Solution: Matrix Representation with Different Bases

## Original Problem

Given $\phi: \mathbb{R}^3 \rightarrow \mathbb{R}^4$ defined by $(a,b,c) \mapsto (b+c, c+a, a+b, 0)$:

(i) Find the matrix representation with respect to standard bases $\alpha$ and $\beta$
(ii) Show that $\gamma: f_2+f_3, f_1+f_3, f_1+f_2, f_4$ is a basis of $\mathbb{R}^4$
(iii) Find the matrix representation with respect to bases $\alpha$ and $\gamma$

## Solution Process

### Part (i): Matrix Representation with Standard Bases

To find the matrix representation, we apply $\phi$ to each standard basis vector:

**$\phi(e_1) = \phi(1,0,0) = (0+0, 0+1, 1+0, 0) = (0,1,1,0)$**
In terms of $\beta$: $\phi(e_1) = 0f_1 + 1f_2 + 1f_3 + 0f_4$

**$\phi(e_2) = \phi(0,1,0) = (1+0, 0+0, 0+1, 0) = (1,0,1,0)$**
In terms of $\beta$: $\phi(e_2) = 1f_1 + 0f_2 + 1f_3 + 0f_4$

**$\phi(e_3) = \phi(0,0,1) = (0+1, 1+0, 0+0, 0) = (1,1,0,0)$**
In terms of $\beta$: $\phi(e_3) = 1f_1 + 1f_2 + 0f_3 + 0f_4$

The matrix representation is formed by placing these coordinate vectors as columns:

$$[\phi]_\beta^\alpha = \begin{pmatrix}
0 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 0 \\
0 & 0 & 0
\end{pmatrix}$$

### Part (ii): Proving $\gamma$ is a Basis

We need to show that $\{f_2+f_3, f_1+f_3, f_1+f_2, f_4\}$ is linearly independent.

Assume: $x_1(f_2+f_3) + x_2(f_1+f_3) + x_3(f_1+f_2) + x_4f_4 = \mathbf{0}$

Expanding: $(x_2+x_3)f_1 + (x_1+x_3)f_2 + (x_1+x_2)f_3 + x_4f_4 = \mathbf{0}$

Since $\{f_1, f_2, f_3, f_4\}$ is a basis, all coefficients must be zero:
- $x_2 + x_3 = 0$ ... (1)
- $x_1 + x_3 = 0$ ... (2)
- $x_1 + x_2 = 0$ ... (3)
- $x_4 = 0$ ... (4)

From equation (4): $x_4 = 0$

From equations (1), (2), and (3):
- Adding (1) and (2): $x_1 + 2x_3 + x_2 = 0$
- From (3): $x_1 + x_2 = 0$
- Subtracting: $2x_3 = 0$, so $x_3 = 0$

Now from (1): $x_2 + 0 = 0$, so $x_2 = 0$
And from (3): $x_1 + 0 = 0$, so $x_1 = 0$

Therefore, $x_1 = x_2 = x_3 = x_4 = 0$, proving linear independence.

Since we have 4 linearly independent vectors in $\mathbb{R}^4$, they form a basis. ✓

### Part (iii): Matrix Representation with Respect to $\alpha$ and $\gamma$

We need to express the images $\phi(e_i)$ in terms of the basis $\gamma$.

From part (i):
- $\phi(e_1) = (0,1,1,0) = f_2 + f_3$
- $\phi(e_2) = (1,0,1,0) = f_1 + f_3$
- $\phi(e_3) = (1,1,0,0) = f_1 + f_2$

Notice that:
- $\phi(e_1) = f_2 + f_3 = 1 \cdot (f_2+f_3) + 0 \cdot (f_1+f_3) + 0 \cdot (f_1+f_2) + 0 \cdot f_4$
- $\phi(e_2) = f_1 + f_3 = 0 \cdot (f_2+f_3) + 1 \cdot (f_1+f_3) + 0 \cdot (f_1+f_2) + 0 \cdot f_4$
- $\phi(e_3) = f_1 + f_2 = 0 \cdot (f_2+f_3) + 0 \cdot (f_1+f_3) + 1 \cdot (f_1+f_2) + 0 \cdot f_4$

The matrix representation with respect to $\alpha$ and $\gamma$ is:

$$[\phi]_\gamma^\alpha = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
0 & 0 & 0
\end{pmatrix}$$

## Key Insights

1. **Standard vs. Non-standard Bases**: The matrix representation becomes much simpler with the carefully chosen basis $\gamma$
2. **Natural Correspondence**: The basis $\gamma$ was chosen precisely to make the computation easier
3. **Change of Basis Effect**: Different bases can dramatically simplify matrix representations

## Verification

We can verify this is correct by checking:
- The first column represents $\phi(e_1)$ in basis $\gamma$
- Each standard basis vector maps to exactly one basis vector in $\gamma$
- The fourth component is always zero (as expected from the definition of $\phi$)

## Alternative Approach

We could also compute this using change-of-basis matrices:
1. Find the change-of-basis matrix from $\beta$ to $\gamma$
2. Use the formula: $[\phi]_\gamma^\alpha = P^{-1}[\phi]_\beta^\alpha$
where $P$ is the change-of-basis matrix

## Common Mistakes

1. Confusing the order of operations when changing bases
2. Making errors in the linear independence verification
3. Not carefully tracking which bases are being used
4. Arithmetic errors in expressing vectors in terms of new bases
