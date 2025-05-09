---
title: "PS01-Q07-Solution: Kernel and Image of Projection Map"
aliases: ["Solution to PS1 Q7", "Finding Kernel and Image Solution"]
tags: ["solution", "algebra-s2", "ps-01", "difficulty-homework"]
related_problem: [[PS01-Q07]]
date_created: 2025-05-09
---
# PS01-Q07-Solution: Kernel and Image of Projection Map
## Original Problem
Let $\phi$ be the projection onto the line $L: y=x$ in the plane $\mathbb{R}^{2}$ (as described in Question 3). Compute the $\operatorname{ker} \phi$ and $\operatorname{im} \phi$.

## Solution Process
First, recall from Question 3 that the projection $\phi$ onto the line $L: y=x$ is given by:

$$\phi((x, y)) = \left(\frac{x+y}{2}, \frac{x+y}{2}\right)$$

### Finding the Kernel

The kernel of $\phi$ consists of all vectors $(x,y)$ such that $\phi(x,y) = (0,0)$. So we need to solve:

$$\left(\frac{x+y}{2}, \frac{x+y}{2}\right) = (0,0)$$

This gives us:
$$\frac{x+y}{2} = 0$$

Simplifying:
$$x+y = 0$$
$$y = -x$$

Therefore, the kernel of $\phi$ is:

$$\operatorname{ker} \phi = \{(x,-x): x \in \mathbb{R}\}$$

Geometrically, this represents the line $y = -x$, which is perpendicular to $L: y=x$ and passes through the origin.

### Finding the Image

The image of $\phi$ is the set of all possible outputs of the projection map. From the formula for $\phi$, we can see that for any point $(x,y)$, its projection $\phi(x,y)$ has equal coordinates:

$$\phi(x,y) = \left(\frac{x+y}{2}, \frac{x+y}{2}\right)$$

This means that every output point has the form $(z,z)$ for some $z \in \mathbb{R}$.

Moreover, for any point $(z,z)$ on the line $L: y=x$, we can verify that $\phi(z,z) = (z,z)$. This means that points already on the line $L$ map to themselves.

Therefore, the image of $\phi$ is:

$$\operatorname{im} \phi = \{(x,x): x \in \mathbb{R}\}$$

Which is precisely the line $L: y=x$.

## Key Insights
1. The kernel of a projection is always the set of vectors perpendicular to the projection subspace and passing through the origin.
2. The image of a projection is exactly the subspace onto which we are projecting.
3. Geometrically, the kernel and image are complementary subspaces that together span the entire vector space.

## Alternative Approaches
We could also use a matrix approach:
1. Express $\phi$ as a matrix transformation: $\phi(x,y) = A \begin{pmatrix} x \\ y \end{pmatrix}$ where $A = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & 1/2 \end{pmatrix}$
2. Find the kernel by solving $A \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
3. Find the image by determining all possible values of $A \begin{pmatrix} x \\ y \end{pmatrix}$ for $(x,y) \in \mathbb{R}^2$

## Common Mistakes
1. Confusing the kernel with the image, or misunderstanding their geometric interpretation
2. Forgetting that points on the line $L$ map to themselves under projection
3. Not recognizing that the kernel is perpendicular to the image subspace
4. Failing to express the kernel and image as parametric sets, instead giving only the equations that define them
