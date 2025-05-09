---
title: "PS01-Q03-Solution: Linearity of Projection Map"
aliases: ["Solution to PS1 Q3", "Projection Map Linearity Solution"]
tags: [solution, algebra-s2, ps-01, difficulty-warmup]
related_problem: [[PS01-Q03]]
date_created: 2025-05-09
---

# PS01-Q03-Solution: Linearity of Projection Map

## Original Problem
Let $\phi$ be the projection onto the line $L: y = x$ in the plane $\mathbb{R}^2$. Show that $\phi$ is linear.

## Solution Process

To prove that $\phi$ is linear, we need to first find an explicit formula for $\phi$ and then verify the linearity properties.

### Step 1: Find the projection formula
For any point $P = (x, y) \in \mathbb{R}^2$:

1. The line $L$ is given by the equation $y = x$, which we can parameterize as $(t, t)$ for $t \in \mathbb{R}$.

2. The reflection of $P$ across the line $L$ would be $P' = (y, x)$. This is because reflection across the line $y = x$ swaps the $x$ and $y$ coordinates.

3. The line connecting $P$ and $P'$ has the equation passing through $(x, y)$ and $(y, x)$, which is perpendicular to $L$.

4. The intersection of this line with $L$ gives us the projection point $Q$. This is the point where the perpendicular from $P$ to $L$ intersects $L$.

5. Since $Q$ lies on $L$, its coordinates are of the form $(t, t)$ for some $t$.

6. To find $t$, we note that the midpoint of the line segment $PP'$ is $(\frac{x+y}{2}, \frac{x+y}{2})$. This is also the point $Q$ since the perpendicular from $P$ to $L$ passes through the midpoint of $PP'$.

Therefore, the projection of $P = (x, y)$ onto the line $L$ is:

$$\phi((x, y)) = \left(\frac{x+y}{2}, \frac{x+y}{2}\right)$$

### Step 2: Express $\phi$ as a matrix transformation
We can represent $\phi$ as a matrix transformation:

$$\phi((x, y)) = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} \frac{x+y}{2} \\ \frac{x+y}{2} \end{pmatrix}$$

### Step 3: Verify linearity
Since $\phi$ can be represented as a matrix transformation, it is automatically linear because all matrix transformations are linear. However, we can still explicitly verify the two properties of linearity:

1. **Additivity**: For any vectors $u = (u_1, u_2)$ and $v = (v_1, v_2)$ in $\mathbb{R}^2$:
   $$\begin{align*}
   \phi(u + v) &= \phi((u_1, u_2) + (v_1, v_2)) \\
   &= \phi((u_1 + v_1, u_2 + v_2)) \\
   &= \left(\frac{(u_1 + v_1) + (u_2 + v_2)}{2}, \frac{(u_1 + v_1) + (u_2 + v_2)}{2}\right) \\
   &= \left(\frac{u_1 + u_2}{2}, \frac{u_1 + u_2}{2}\right) + \left(\frac{v_1 + v_2}{2}, \frac{v_1 + v_2}{2}\right) \\
   &= \phi(u) + \phi(v)
   \end{align*}$$

2. **Homogeneity**: For any vector $v = (v_1, v_2)$ in $\mathbb{R}^2$ and scalar $\lambda \in \mathbb{R}$:
   $$\begin{align*}
   \phi(\lambda v) &= \phi((\lambda v_1, \lambda v_2)) \\
   &= \left(\frac{\lambda v_1 + \lambda v_2}{2}, \frac{\lambda v_1 + \lambda v_2}{2}\right) \\
   &= \lambda \left(\frac{v_1 + v_2}{2}, \frac{v_1 + v_2}{2}\right) \\
   &= \lambda \phi(v)
   \end{align*}$$

Since both linearity properties are satisfied, $\phi$ is indeed a linear map.

## Key Insights
- Geometrically, a projection onto a line can be understood as finding the point on the line that is closest to the given point.
- Any matrix transformation $Ax$ is automatically linear.
- Projections are important examples of linear maps that are neither injective nor surjective (unless projecting onto the entire space).
- The matrix $\begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}$ is idempotent (i.e., $A^2 = A$), which is a characteristic property of projection matrices.

## Alternative Approaches
1. We could have directly verified the linearity properties using the formula for $\phi$ without explicitly finding the matrix representation.
2. We could have derived the projection formula using the dot product: the projection of a vector $v$ onto a unit vector $u$ is $(v \cdot u)u$. For the line $y = x$, the unit vector is $\frac{1}{\sqrt{2}}(1, 1)$.

## Common Mistakes
- Incorrectly identifying the projection point on the line.
- Forgetting to verify both additivity and homogeneity when proving linearity.
- Confusing a projection with a reflection or rotation.
- Not recognizing that a matrix transformation is automatically linear.
