---
layout: post
title: The Linear Algebruh Summary [Introductory]
description: All you need for Introduction to Linear Algebra. Summary of "Contemporary Linear Algebra"
permalink: posts/linear-algebra-summary-intro
images: 
    cover: /assets/images/2021-02-11-linear-algebra-cover.png
    top: /assets/images/2021-02-11-linear-algebra-top.png
tags: [linear algebra, mathematics, Machine Learning, Quantum Mechanics, Introductory, Summary]
mathjax: true 
---
## Quick Access

<details closed>
    <summary><b>contents</b></summary><ul>

    <details closed>
    <summary><b>Chapter 2.</b> Systems of Linear Equations</summary><ul>
    &emsp;<b>2.1</b> <a href="#21-introduction-to-system-of-linear-equations" > Introduction to System of Linear Equation</a> <br>
    &emsp;<b>2.2</b> <a href="#22-solving-linear-systems-by-row-reduction" > Solving Linear Systems by Row Reduction</a>
    </ul></details>

    <details closed>
    <summary><b>Chapter 3.</b> Matrices and Matrix Algebra</summary><ul>
    &emsp;<b>3.1</b> <a href="#31-operations-on-matrices" > Operations on Matrices</a> <br>
    &emsp;<b>3.2</b> <a href="#32-inverses-algebraic-properties-of-matrices" > Inverses; Algebraic Properties of Matrices</a> <br>
    &emsp;<b>3.3</b> <a href="#33-elementary-matrices-a-method-for-finding-a-1" > Elementary Matrices; A Method for Finding $A^{-1}$</a> <br>
    &emsp;<b>3.4</b> <a href="#34-subspaces-and-linear-independence" > Subspaces and Linear Independence</a> <br>
    &emsp;<b>3.5</b> <a href="#35-the-geometry-of-linear-systems" > The Geometry of Linear Systems</a> <br>
    &emsp;<b>3.6</b> <a href="#36-matrices-with-special-forms" > Matrices with Special Forms</a> <br>
    &emsp;<b>3.7</b> <a href="#37-matrix-factorizations-rmtextitlu-decompositions" > Matrix Factorizations; $\rm{\textit{LU}}$-Decomposition</a> <br>
    &emsp;<b>3.8</b> <a href="#" > Partitioned Matrices and Parallel Processing*</a> <br>
    </ul></details>

    <details closed>
    <summary><b>Chapter 4.</b> Determinants</summary><ul>
    &emsp;<b>4.1</b> <a href > Determinants; Cofactor Expansion</a> <br>
    &emsp;<b>4.2</b> <a href > Properties of Determinants</a> <br>
    &emsp;<b>4.3</b> <a href > Cramer's Rule; Formula for $A^{-1}$; Applications of Determinants</a> <br>
    &emsp;<b>4.4</b> <a href > A First Look at Eigenvalues and Eigenvectors</a> <br>
    </ul></details>

    <details closed>
    <summary><b>Chapter 6.</b> Linear Transformations</summary><ul>
    &emsp;<b>6.1</b> <a href > Matrices as Transformations</a> <br>
    &emsp;<b>6.2</b> <a href > Geometry of Linear Operators</a> <br>
    &emsp;<b>6.3</b> <a href > Kernel and Range</a> <br>
    &emsp;<b>6.4</b> <a href > Composition and Invertibility of Linear Transformations</a> <br>
    </ul></details>

    <details closed>
    <summary><b>Chapter 7.</b> Dimension and structure</summary><ul>
    </ul></details>

    <details closed>
    <summary><b>Chapter 8.</b> Diagonalization</summary><ul>
    </ul></details>

</ul></details>

## 2.1 Introduction to System of Linear Equations

<details closed><summary><b>Definitions</b></summary><ul>

<li>A <span id="notion-highlight-1"><b>linear equation</b></span> in the $n$  variables $x_1, x_2, ..., x_n$  is defined to be one that can be expressed in the form

    $$a_1x_1+a_2x_2+...+a_nx_n =b$$

    &emsp;&emsp;&emsp;*where  $a_1, a_2,...,a_n$   and $b$ are constants and the $a_i$'s are not all zero.*

</li><li>A <span id="notion-highlight-1"><b>homogeneous linear equation</b></span> in the $n$  variables $x_1, x_2, ..., x_n$  is defined to be one that can be expressed in the form

    $$a_1x_1+a_2x_2+...+a_nx_n =0$$

    &emsp;&emsp;&emsp;*where  $a_1, a_2,...,a_n$   are constants and the $a_i$'s are not all zero.*

</li><li>A <span id="notion-highlight-1"><b>solution</b></span> of a [linear equation]() is defined to be a squence of $n$ numbers $s_1,s_2, ..., s_n$ such that the equation is satisfied when we subtitute

    $$x_1=s_1, \;\;\; x_1=s_1, \;\;\;...,\;\;\; x_n=s_n$$

</li><li>A finite set of linear equations in the $n$ variables  $x_1, x_2, ..., x_n$  is called a <span id="notion-highlight-1"><b>system of linear equations</b></span> or a <span id="notion-highlight-1"><b>linear system</b></span>. The variables in a linear system are called the <span id="notion-highlight-1"><b>unknowns</b></span>.
</li><li>A finite set of homogeneous linear equations in the $n$ variables  $x_1, x_2, ..., x_n$  is called a <span id="notion-highlight-1"><b>homogeneous</b></span> <span id="notion-highlight-1"><b>system of linear equations</b></span> or a <span id="notion-highlight-1"><b>homogeneous</b></span> <span id="notion-highlight-1"><b>linear system</b></span>.
</li><li>A <span id="notion-highlight-1"><b>solution</b></span> of a system of linear equations in the $n$ variables $x_1, x_2, ..., x_n$  is defined to be a sequence of $n$  numbers $s_1,s_2, ..., s_n$ such that

    $$x_1=s_1, \;\;\; x_1=s_1, \;\;\;...,\;\;\; x_n=s_n$$

    &emsp;&emsp;&emsp;*is a solution of every linear equation in the system.*

</li><li>A linear system having the same number $n$  of equtions as unknowns is called a <span id="notion-highlight-1"><b>square system</b></span>.
</li><li>A system of linear equations that has no solutions is said to be <span id="notion-highlight-1"><b>inconsistent</b></span>. A system of linear equations that has at least on solution is said to be <span id="notion-highlight-1"><b>consistent</b></span>.
</li><li>A system of $m$ linear equations in $n$  unknows (or $n$ variables) will be written

    $$\begin{aligned} a_{11}x_1\;\;&+\;\;a_{12}x_1\;\;&+\;\;...\;\;&+\;\;a_{13}x_n\;\;&=&\;\;b_1\\ a_{21}x_2\;\;&+\;\;a_{22}x_2\;\;&+\;\;...\;\;&+\;\;a_{23}x_n\;\;&=&\;\;b_2\\ &\vdots&&&& \vdots\\ a_{m1}x_1\;\;&+\;\;a_{m1}x_1\;\;&+\;\;...\;\;&+\;\;a_{mn}x_n\;\;&=&\;\;b_m\\ \end{aligned}$$

    &emsp;&emsp;&emsp;*where $x_1, x_2, ..., x_n$  are the unknowns and $a_{ij}$ 's and $b_i$'s are constants.*

</li><li>A [linear system]() can be abbreviated by writing only the rectangular array of numbers:

    $$[A\mid b]=\left[\begin{array}{cccc|c}
    a_{11} & a_{12} & ... & a_{1n} & b_1 \\
    a_{21} & a_{22} & ... & a_{2n} & b_2 \\ \vdots & \vdots & \vdots & \vdots & \vdots \\a_{m1} & a_{m2} & ... & a_{mn} & b_m \\
    \end{array}
    \right]$$

    &emsp;&emsp;&emsp;which is called the <span id="notion-highlight-1"><b>augmented matrix</b></span> for the system. The matrix

    $$A=\left[\begin{array}{cccc}
    a_{11} & a_{12} & ... & a_{1n} \\
    a_{21} & a_{22} & ... & a_{2n} \\ \vdots & \vdots & \vdots & \vdots  \\a_{m1} & a_{m2} & ... & a_{mn} \\
    \end{array}
    \right]$$

    &emsp;&emsp;&emsp;which has been <span id="notion-highlight-1"><b>augmented</b></span> by the column vector of constants

    $$b=\left[\begin{array}{c}
    b_1 \\
    b_2 \\ \vdots \\b_m \\
    \end{array}
    \right]$$

    &emsp;&emsp;&emsp;is called the <span id="notion-highlight-1"><b>matrix of coefficients</b></span> or the <span id="notion-highlight-1"><b>coefficient matrix</b></span> of the linear system.

</li><li>Matrices that can be obtained from one another by a finite sequence of elementary row operations are said to be <span id="notion-highlight-1"><b>row equivalent</b></span>.
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul>
<li>Every system of linear equations has zero, one, or infinitely many solutions; there are no other possibilities.
</li></ul></details>
<p></p>
<fieldset>
<legend class="box-header"><b>Elementary Row Operations</b></legend>
<ol>
    <li> <span id="notion-highlight-2"><i>[Row scaling]</i></span> Multiplying a row through by a nonzero constant. </li>
    <li> <span id="notion-highlight-2"><i>[Row interchange]</i></span> Interchange two rows. That is, interchange the $i$th and $j$th row vectors of a matrix where $i\neq j$. </li>
    <li> <span id="notion-highlight-2"><i>[Row addition]</i></span> Add a multiple of one row to another. That is, add to the $i$th row vector of a matrix $s$ times the $j$th row vector where $i\neq j$. </li>
</ol> 
</fieldset>

## 2.2 Solving Linear Systems by Row Reduction

<details closed>
<summary><b>Definitions</b></summary><ul><li>A matrix is said to be in <span id="notion-highlight-1"><b>row echelon form</b></span> if it has the following properties:
        1. If a row does not constist entirely of zeros, then the first nonzero number in the row is 1 which is called a <span id="notion-highlight-1"><b>leading 1</b></span> or the <span id="notion-highlight-1"><b>pivot</b></span> for that row.
        2. If there are any rows that consist entirely of zeros, then they are grouped together at the bottom of the matrix. 
        3. In any two successive rows that do not consist entirely of zeros, the leading 1 in the lower row occurs farther to the right than the leading 1 in the higher row. 
        4. Each column that contains a leading 1 has zeros everywhere else.
</li><li>A matrix in row echelon form is said to be in <span id="notion-highlight-1"><b>reduced row echelon form</b></span> if each column that contains a leading 1 has zeros everywhere else.
</li><li>For a linear system $Ax=b$ , the unknowns corresponding to the column positions where the leading 1's do not occurin the row echelon forms of the coefficient matrix $A$ are called the <span id="notion-highlight-1"><b>free variables</b></span>.
</li><li>The column vectors of a matrix $A$ that lie in the column positions where the leading 1's occur in the row echelon forms of $A$ are called the <span id="notion-highlight-1"><b>pivot columns</b></span> of $A$.n nj     pl  r09i0
</li><li>A <span id="notion-highlight-1"><b>submatrix</b></span> (or <span id="notion-highlight-1"><b>block</b></span>) of a matrix $A$  is defined to be an array obrtained by deleting any combination of rows and columns from $A$ .
</li><li>The column vectors of a matrix $A$ that lie in the column positions where the leading 1's occur in the row echelon forms of $A$ are called the <span id="notion-highlight-1"><b>pivot columns</b></span> of $A$.
</li><li>The zero vector in $\mathbb{R}^n$ is called the <span id="notion-highlight-1"><b>trivial solution</b></span> of a homogeneous linear system with $n$ unknowns. All other solutions, if any, are called <span id="notion-highlight-1"><b>nontrivial solutions</b></span>.
</li></ul></details> 

<details closed><summary><b>Theorems</b></summary><ul>
<li>A homogeneous linear system has only the trivial solution or it has infinitely many solutions; there are no other possibilities.
    </li><li>*proof*

            Assume that a homogeneous linear system with $n$ unknowns has some nontrivial solution, say $x=(x_1,x_2,...,x_n)$. Then $kx$ is a solution for any scalar $k$. Thus the system has infinitely many solution  $\blacksquare$

</li><li>*(The Dimension Theorem for Homogeneous Linear Systems).* If a homogeneous linear system has $n$ unknowns and the reduced row echelon form of its aurmented matrix has $r$ nonzero rows, then the system has $n-r$ free variables.
</li><li>A homogeneous linear system with more unknowns than equations has infinitely many solutions
    </li><li>*proof*

            If a homogeneous linear system $Ax=0$ has $m$ equations and $n$ unknowns with $m<n$, then the number of nonzero rows of the reduced row echelon form of $A$ is less than $n$. Thus there is at least one free variables  $\blacksquare$
</li></ul></details>
<p></p>
<fieldset>
<legend class="box-header"><b>Gauss Elimination</b></legend>
<ul style="list-style: none;">
<li>
    &emsp;&emsp;<span id="notion-highlight-2"><b>Step 1.</b></span><br>
    &emsp;Locate the leftmost column that does not consist entirely of zeros. That is, if the first column contains only zero entries, then cross it off mentally. Continue in  this fashion until the first column of the remaining matrix has a nonzero entry or unril the columns are exhausted.
</li>

<li>
    &emsp;&emsp;<span id="notion-highlight-2"><b>Step 2.</b></span><br>
    &emsp;Interchange the top row with another row, if necessary, to bring a nonzero entry to the top of the column found in <span id="notion-highlight-1"><b>[Step 1]()</b></span>. That is, use row interchange, if necessary, to obtain a nonzero entry in the top row of the first column of the remaining matrix.
</li>

<li>
    &emsp;&emsp;<span id="notion-highlight-2"><b>Step 3.</b></span><br>
    &emsp;If the entry that is now at the top of the column found in <span id="notion-highlight-1"><b>[Step 1]()</b></span> is $a$, then multiply the first row by $1/a$ in order to introduce a leading 1.
</li>

<li>
    &emsp;&emsp;<span id="notion-highlight-2"><b>Step 4.</b></span><br>
    &emsp;Add suitable multiples of the top row to the rows below so that all entries below leading 1 become zero. That is, for each row below that has a nonzero entry $r$ in the first column, add $-r$ times the top row to that row to create a zero in the first column. In this fashion, create zeros below 1 in the entire first column of the remaining matrix.
</li>

<li>
    &emsp;&emsp;<span id="notion-highlight-2"><b>Step 5.</b></span><br>
    Cover the top row in the matrix and begin again with <span id="notion-highlight-1"><b>[Step 1]()</b></span> applied to the submatrix that remains. That is, mentally cross off this first column and the first row of the matrix to obtain a smaller matrix. Go back to <span id="notion-highlight-1"><b>[Step 1]()</b></span> and repeat the process with this smaller matrix until either no rows or no columns remain.
</li></ul>
</fieldset>  
<p></p>
<fieldset>
<legend class="box-header"><b>Gauss-Jordan Elimination</b></legend>
<ul style="list-style:none">
<li>&emsp;&emsp;<span id="notion-highlight-2"><b>Step 1.</b></span><br>
    &emsp;Follow <span id="notion-highlight-2"><i>Step 1</i></span> to [Step 5]() in <span id="notion-highlight-1"><b>Gauss Elimination</b></span>

</li><li>&emsp;&emsp;<span id="notion-highlight-2"><b>Step 2.</b></span><br>
    &emsp;Beginning with the last nonzero row and working upward, add suitable multiples of each row to  the rows above to introduce zeros above the leading 1's.  
</li></ul></fieldset>

---

## 3.1 Operations on Matrices

<details closed><summary><b>Definitions</b></summary><ul>
<li>A <span id="notion-highlight-1"><b>matrix</b></span> is a rectangular array of numbers. The numbers in the array are called the <span id="notion-highlight-1"><b>entries</b></span> in the matrix. The <span id="notion-highlight-1"><b>size</b></span> of a matrix is described by specifying the number of <span id="notion-highlight-1"><b>rows</b></span> (horizontal lines) and <span id="notion-highlight-1"><b>columns</b></span> (vertical lines) that occur in the matrix.
</li><li>A matrix $A=(a_{ij})$ with $n$ row and $n$  columns is called a <span id="notion-highlight-1"><b>square matrix</b></span> of order $n$. The entries $a_{11},a_{12},..., a_{nn}$ are said to form the <span id="notion-highlight-1"><b>main diagnal</b></span> of $A$.
</li><li>Two matrices are defined to be <span id="notion-highlight-1"><b>equal</b></span> if they have the same size and their corresponding entries are equal.
</li><li>Let $A$ and $B$ be matrices withthe same size. The <span id="notion-highlight-1"><b>sum $A+B$</b></span> is defined to be the matrix obtained by adding the entries of $B$ to the corresponding entries of $A$. That is, the entry in the $i$th row and $j$ th column of $A+B$  is $a_{ij}+b_{ij}$ where $a_{ij}$ and $b_{ij}$ are the $ij$th entries of $A$ and $B$  respectively.
</li><li>Let $A$ and $B$ be matrices withthe same size. The <span id="notion-highlight-1"><b>difference</b></span> $A-B$ is defined to be the matrix obtained by subtracting the entries of $B$ from the corresponding entries of $A$. That is, the entry in the $i$th row and $j$ th column of $A-B$  is $a_{ij}-b_{ij}$ where $a_{ij}$ and $b_{ij}$ are the $ij$th entries of $A$ and $B$  respectively.
</li><li>Let $A$ be a matrix and $k$ be a scalar. The <span id="notion-highlight-1"><b>product</b></span> $kA$ is defined to be the matrix obtained by multiplying each entry of $A$ by $k$. That is, the entry in the $i$th row and $j$th column of $kA$ is $ka_{ij}$ where $a_{ij}$ is the $ij$th entry of $A$.
</li><li>A matrix consisting of a single row is called a <span id="notion-highlight-1"><b>row vector</b></span>. A matrix consisting of a single comlumn is called a <span id="notion-highlight-1"><b>column vector</b></span>.
</li><li>Let $A$ be an $m\times n$ matrix and $x$ be an $n\times 1$ column vector. The product $Ax$ is defined to be the $m\times 1$ column vector that results by forming the linear combination of the column vectors of $A$  that has the entries of $x$ as coefficients. More precisely, if the column vectors of $A$ are $a_1, a_2,..., a_n$ and $x = (x_1, x_2, ..., x_n)$, then

        $$\begin{aligned} Ax&=[a_1\mid a_2\mid ...\mid a_n]\begin{bmatrix}           z_{1} \\
                   \vdots \\
                   z_{n}
                 \end{bmatrix}\\&=x_1a_1+x_2a_2+...+x_na_n.\end{aligned}$$

</li><li>Let $A$  be an $m\times s$ matrix and $B$  be an $s\times n$ matrix whose column vectors are $b_1, b_2, ...,b_n$. The <span id="notion-highlight-1"><b>product</b></span> $AB$ is defined to be the $m\times n$ matrix given by

    $$AB=[Ab_1\mid Ab_2\mid ...\mid Ab_n].$$

</li><li>Let $A$ be an $m\times n$ matrix. The transpose of $A$, denoted by $A^\mathsf{T}$

    , is defined to be the $n\times m$ matrix that is obtained by making the rows of $A$ into columns.
</li><li>Let $A$  be a square matrix. The <span id="notion-highlight-1"><b>trace</b></span> of $A$, denoted by $tr(A)$, is defined to by the sum of the entries on the main diagonal of $A$.
</li><li>Let $\textbf{u}$ and $\textbf{v}$ be column vectors of any size. The product $\textbf{u}^\mathsf{T}\textbf{v}$ is called the <span id="notion-highlight-1"><b>matrix inner product</b></span> of $\textbf{u}$ and $\textbf{v}$.
</li><li>let $\textbf{u}$ and $\textbf{v}$ be column vectors with the same size. Then

        $$\textbf{u}^\mathsf{T}\textbf{v} = \textbf{u}\cdot\textbf{v} = \textbf{v}\cdot\textbf{u} = \textbf{v}^\mathsf{T}\textbf{u}$$
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul>
<li>*(Linearity Properties)* Let $A$ be an $m\times n$ matrix. Let $\textbf{u}$ and $\textbf{v}$ be column vectors in $\mathbb{R}^n$ and $c$ be a scalar. Then the following hold.
        1. $A(c\textbf{u}) = c(A\textbf{u})$
        2. $A(\textbf{u}+\textbf{v}) = A\textbf{u}+A\textbf{v}$
    </li><li>*proof*

                Let $Ax=b$ be a linear system. Then exactly one of the following is true: (a) the system has no solutions, (b) the system has exactly one solution, or (c) the system has more than one solution. Hence it suffices to show that the system has infinitely many solutions in case (c). 

                Let $x_1$ and $x_2$ be two different solutions of the linear system so that $Ax_1 = b$ and $Ax_2 = b$. Then $A(x_1-x_2)=0$. Letting $x_0=x_1-x_2$, we have for any scalar $c$,

            $$\begin{aligned}A(x_1 + cx_0) &= Ax_1+A(cx_0)\\&=Ax_1 + c(Ax_0) = b + c0 = b \end{aligned}$$

             which implies that $x_1+cx_0$  is a solution of the linear system. Thus the system $Ax=b$ has infinityly many solutions. $\square$

</li><li>*(The Row-Column Rule or Dot Product Rule).* Let $A$  be an $m\times s$ matrix and $B$ be an     $s\times n$ matrix. Then for $i=1,2,...,m$  and $j=1,2,...,n$, the entry in the $i$th row and $j$ th column of the matrix product $AB$ is the $i$th row vector of $A$  times the $j$ th column vector of  $B$, or equivalently, the dot product of the $i$th row vector of $A$  and the $j$ th column vector of  $B$, i.e.,

        $$a_{i1}b_{1j} + a_{i2}b_{2j}+ ... + a_{is}b_{sj}=\sum_{k=1}^sa_{ik}b_{k1}$$

        where $a_{ik}$ is the $ik$th entry of $A$ and $b_{kj}$  is the $kj$th entry of $B$ for $k=1,2,...,s.$

</li><li>Let $A$ be an $m\times s$  matrix whose row vectors are $a_1, a_2, ..., a_m$ and $B$ be an $s\times n$ matrix whose column vectors are $b_1, b_2, ..., b_n$. Then the following hold.
        1. For $j = 1,2,...,n$, the $j$th column vector of the matrix product $AB$ is a linear combination of the column vectors of $A$ with the coefficients coming from $b_j$.
        2. For $i = 1,2,...,m$, the $i$th row vector of the matrix product $AB$ is a linear combination of the row vectors of $B$ with the coefficients coming from $a_i$.

</li></ul></details>

## 3.2 Inverses; Algebraic Properties of Matrices

<details closed><summary><b>Definitions</b></summary><ul>
<li>The <span id="notion-highlight-1"><b>negative</b></span> or the <span id="notion-highlight-1"><b>additive inverse</b></span> of a matrix $A$  is defined to be

        $$-A=(-1)A$$

</li><li>A matrix whose entries are all zero is called a <span id="notion-highlight-1"><b>zero matrix</b></span> and is denoted by $O$.
</li><li>A square matrix with 1's on the main diagonal and 0's off the main diagonal is called an <span id="notion-highlight-1"><b>identity matrix</b></span> and is denoted by $I$. The $n\times n$ identity matrix is denoted by $I_n$ if it is important to emphasize the size.
</li><li>An $n\times n$ matrix $A$  to the zeroth power is defined to be $I_n$, i.e.,

        $$A^0=I_n$$

</li><li>Let $A$ be a square matrix. If there is a matrix $B$ with the same size as $A$ such that

        $$AB=BA=I$$

        then $A$  is said to be <span id="notion-highlight-1"><b>invertible</b></span> (or <span id="notion-highlight-1"><b>nonsingular</b></span>) and $B$ is called an inverse of $A$. If there is no matrix $B$ with this property, then $A$ is said to be <span id="notion-highlight-1"><b>singular</b></span> (or <span id="notion-highlight-1"><b>noninvertible</b></span>).

</li><li>Let $A$  be an $n\times n$ matrix and

        $$p(x) = a_0 + a_1x + a_2x^2 + ... + a_mx^m$$

        be a polynomial. Define the $n\times n$ matrix $p(A)$ to be

        $$p(A) = a_0I_n + a_1A + a_2A^2 + ... + a_mA^m$$

        that is, $p(A)$ is obtained by substituting $A$ for $x$ and replacing the constant term $a_0$ by the matrix $a_0I_n$. An expression of [form]() is called a <span id="notion-highlight-1"><b>matrix polynomial</b></span> in $A$.
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul>
<li>Let $a$ and $b$  be any scalars. Let $A$, $B$ and $C$  be matrices with the same size. Then the following rules of matrix arithmatic are valid.
        1. *(Commutative law for addition)* $A+B=B+A$
        2. *(Associative law for addition)* $A+(B+C) = (A+B )+C$
        3. *(Associative law of scalar multiplication)* $(ab)A=a(bA)$
        4. *(Right distributive law) $(a+b)A = aA + bA$*
        5. *(Right distributive law)* $(a-b)A = aA - bA$
        6. *(Left distributive law) $a(A+B) = aA + aB$*
        7. *(Left distributive law)* $a(A-B) = aA - bB$
</li><li>Let $a$ be any scalar. Let $A$, $B$ and $C$  be matrices. Assuming that the sizes of the matrices are such that the indicated operations can be performed, the following rules of matrix arithmetic are valid.
        1. *(Associative law for multiplication)* $A(BC)=(AB)C$
        2. *(Right distributive law) $(B+C)A = BA + CA$*
        3. *(Right distributive law)* $(B-C)A = BA - CA$
        4. *(Left distributive law) $A(B+C) = AB + AC$*
        5. *(Left distributive law)* $A(B-C) = AB - AC$
        6. $a(BC)=(aB)C=B(aC)$
</li><li>Let $R$ be the reduced row echelon form of an $n\times n$ matrix. Then either $R$ has a row of zeros or $R$ is the identity matrix $I_n$.
</li><li>Let $A$ be an invertible matrix. If $B$ and $C$ are both inverses of $A$, then $B=C$. That is, an invertible matrix has a unique inverse.
</li><li>Let $A$ and $B$ be invertible matrices of the same size. Then $AB$ is invertible and

        $$(AB)^{-1} = B^{-1}A^{-1}$$

</li><li>Let $A$ be an invertible matrix. Then the following hold.
        1. $A^{-1}$ is invertible and 

            $$(A^{-1})^{-1} = A$$

        2. Let $m$ be a nonnegative integer. Then $A^m$ is invertible and 

            $$(A^{m})^{-1} = A^{-m}=(A^{-1})^m$$

        3. Let $k$ be a nonzero scalar. Then $kA$ is invertible and 

            $$(kA)^{-1} = \frac{1}{k}A^{-1}$$

        4. Let $r$ and $s$ be integers. Then 

        $$A^rA^s= A^{r+s} \;\;\;\; (A^r)^s= A^{rs}$$

</li><li>Let $k$ be any scalar. Let $A$ and $B$  be matrices. Assuming that the sizes of the matrices are such that the indicated operations can be performed, the following hold.
        1. $(A^\mathsf{T})^\mathsf{T}=A$
        2. $(A+B)^\mathsf{T} = A^\mathsf{T} + B^\mathsf{T}$
        3. $(A-B)^\mathsf{T} = A^\mathsf{T} - B^\mathsf{T}$
        4. $(kA)^\mathsf{T} = k A^\mathsf{T}$
        5. $(AB)^\mathsf{T} = B^\mathsf{T}A^\mathsf{T}$
</li><li>Let $A$  be an invertible matrix. Then $A^\mathsf{T}$ is invertible and

        $$(A^\mathsf{T})^{-1} = (A^{-1})^\mathsf{T}$$

</li><li>Let $k$  be any scalar. Let $A$ and $B$ be square matrices with the same sizse. Then the following hold.
        1. $tr(A^\mathsf{T}) = tr(A)$
        2. $tr(kA) = ktr(A)$
        3. $tr(A+B) = tr(A) + tr(B)$
        4. $tr(A-B) = tr(A) - tr(B)$
        5. $tr(AB) = tr(BA)$
</li><li>Let $\textbf{r}$ be a $1\times n$ row vector and $c$ be an $n\times 1$ column vector. Then

        $$rc=tr(cr)$$
</li></ul></details>

## 3.3 Elementary Matrices; A Method for Finding $A^{-1}$

<details closed><summary><b>Definitions</b></summary><ul>
<li>An $n\times n$ matrix is called an <span id="notion-highlight-1"><b>elementary matrix</b></span> if it can be obtained from the $n\times n$ identity matrix $I_n$ by performing a single elementary row operation.
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul>
<li>Let $A$ be an $m\times n$ matrix. If an elementary matrix $E$ results from performing a certain row operation on $I_m$, then the product $EA$ is the matrix that results when this same operation is performed on $A$.
</li><li>Every elementary matrix is invertible and the inverse is an elementary matrix.
    </li><li>*proof*

            Let $E$  be an elementary matrix. Then $E$ results from performing some row operation on $I$. Let $E_0$ be the matrix that results when the inverse of this operation is performed on $I$. Applying [the theorem]() and using the fact taht inverse row operations cancel the effect of each other, we have

            $$E_0 E = I, \;\;\;\;\; EE_0=I$$

            Thus the elementary matrix $E_0$  is the inverse of $E$. $\square$

</li><li>Let $A$  be an $n\times n$ matrix. Then the following are equivalent.
        1. The reduced row echelon form of $A$ is $I_n$.
        2. $A$ is expressible as a product of elementary matrices.
        3. $A$ is invertible.
    </li><li>*proof*

            First, let $I_n$ be the reduced row echelon form of $A$ so that $A$ is reduced to $I_n$ by a finite sequence of elementary row operations. Each of these operations can be accomplished by multiplying on the left by an appropriate elementary matrix. Thus there exist elementary matrices $E_1, E_2,...,E_k$ such that 

            $$E_k...E_2E_1A=I_n$$

            Each $E_i$ is invertible and $E_i^{-1}$ is an elementary matrix. Then

            $$A=E_1^{-1}E_2^{-1}...E_k^{-1}I_n=E_1^{-1}E_2^{-1}...E_k^{-1}$$

            Therefore (i) implies (ii). Also (ii) implies (iii).

            &emsp;&emsp;&emsp;Now, let $A$  be invertible and $R$ be the reduced row echelon form of $A$. Then there exist elementary row matrices $E_1,E_2,...,E_k$ such that 

            $$E_k...E_2E_1A=R$$

            Thus $R$ is invertible. Since $R$ cannot have a row of zeros, it follows that $R=I_n$. Therefore (iii) implies (i). $\square$

</li><li>Let $A$  and $B$  be square matrices of the same size. Then the following are equivalent.
        1. $A$ and $B$ are row equivalent.
        2. There is an invertible matrix $E$  such that $B=EA$.
        3. There is an invertible matrix $F$ such that $A=FB$.
</li><li>Let $Ax=b$ be a linear system of $n$ equations in $n$ unknowns. If the coefficient matrix $A$ is invertible, then the system has exactly one solution, namely

        $$x=A^{-1}b.$$

</li><li>Let $Ax=0$  be a homogeneous linear system of $n$ equations in $n$ unknowns. Then the system has only the trivial solution if and only if the coefficient matrix $A$ is invertible.
</li><li>Let $A$  be an $n\times n$ matrix. Then the following are equivalent.
        1. The reduced row echelon form of $A$  is $I_n$.
        2. $A$ is expressible as a product of elementary matrices.
        3. $A$ is invertible.
        4. $Ax=0$  has only the trivial solution.
</li><li>Let $A$ and $B$ be square matrices. Then the following hold.
        1. If $AB=1$ or $BA=I$, then $A$ and $B$ are both invertible and each is the inverse of the other.
        2. If $AB$ is invertible, then $A$ and $B$ are invertible.
</li><li>Let $A$  be an $n\times n$ matrix. Then the following are equivalent.
        1. The reduced row echelon form of $A$ is $I_n$.
        2. $A$ is expressible as a product of elementary matrices. 
        3. $A$ is invertible.
        4. $Ax=0$ has only the trivial solution.
        5. $Ax=b$ is consistent for every vector $b$ in $\R^n$.
        6. $Ax=b$  has exactly one solution for every vector $b$ in $\R^n$.
</li></ul></details>
<p></p>
<fieldset>
 <legend class="box-header"><b>The Inversion Algorithm</b></legend>
<ul style="list-style:none">
    <li>Let $A$  be a square matrix. To find $A^{-1}$, if it exits, preceed as follows:</li>
    <li>&emsp;&emsp;<span id="notion-highlight-2"><b>Step 1</b></span> <br>

    Form the augmented matrix $[A\mid I]$.</li>

    <li>&emsp;&emsp;<span id="notion-highlight-2"><b>Step 2</b></span> <br>

    Apply Gauss-Jordan elimination to attempt to reduce $[A\mid I]$  to $[I\mid B]$. If the reduction can be carried out, then $A^{-1}=B$. Otherwise, $A^{-1}$ does not exist. 

</li></ul></fieldset>

## 3.4 Subspaces and Linear Independence

<details closed><summary><b>Definitions</b></summary><ul>
<li>A nonempty set $W$  of vectors in $\R^n$ is called a <span id="notion-highlight-1"><b>subspace</b></span> of $\R^n$ if it is closed under scalar multiplication (i.e. any scalar multiple of a vector in $W$  is in $W$) and is closed under addition (i.e. the sum of any two vectors in $W$  is in $W$).
</li><li>The subspace $W$ of all linear combinations

        $$x=t_1\textbf{v}_1 + t_2\textbf{v}_2 + ... + t_k\textbf{v}_k$$

        is denoted by 

        $$W=\textrm{span}\{\textbf{v}_1,\textbf{v}_2,...,\textbf{v}_k \}$$

        The vectors $\textbf{v}_1,\textbf{v}_2,...,\textbf{v}_k$  are said to <span id="notion-highlight-1"><b>span</b></span> (or <span id="notion-highlight-1"><b>generate</b></span>) $W$. The set $\{ \textbf{v}_1,\textbf{v}_2,...,\textbf{v}_k \}$ is said to <span id="notion-highlight-1"><b>span $W$.</b></span>

</li><li>The set consisting of the zero vector in $\R^n$ is called the <span id="notion-highlight-1"><b>zero subspace</b></span> of $\R^n$. The space $\R^n$ and the zero subspace of $\R^n$ are called the <span id="notion-highlight-1"><b>trivial subspaces</b></span>  of $\R^n$.
</li><li>Let $S = \{\textbf{v}_1,\textbf{v}_2,...,\textbf{v}_k \}$ be a nonempty set of vectors in $\R^n$. Then $S$ is said to be <span id="notion-highlight-1"><b>linear independent</b></span> if the only scalars $c_1,c_2,...,c_s$ that satisfy the equation

        $$c_1\textbf{v}_1 + c_2\textbf{v}_2+...+c_s\textbf{v}_s=0$$

        are 

        $$c_1=0,\;\;c_2=0,\;\; ..., \;\;c_s=0$$

        that is, the zero vector is a unique linear combination of $\textbf{v}_1,\textbf{v}_2,...,\textbf{v}_s$ (or the vectors $\textbf{v}_1,\textbf{v}_2,...,\textbf{v}_s$ are said to be <span id="notion-highlight-1"><b>linear independent</b></span>). If there are scalars, not all zeros, that satisfy this equation, the $S$ is said to be <span id="notion-highlight-1"><b>linearly dependent.</b></span> (or the vectors $\textbf{v}_1,\textbf{v}_2,...,\textbf{v}_s$ are said to be <span id="notion-highlight-1"><b>linearly dependent</b></span>).

</li><li>let $W$ be a subspace of $\R^n$ and $x_0$ be a vector in $\R^n$. The <span id="notion-highlight-1"><b>translation of $W$by $x_0$</b></span> is defined to be the set of vectors of the form $x=x_0 + \textbf{v}$ with a vector $\textbf{v}$ in $W$ and is denoted by $x_0 + W$.
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul>
<li>Let $\textbf{v}_1, \textbf{v}_2,..., \textbf{v}_k$ be vectors in $\R^n$. Then the set of all linear combinations

        $$x=t_1\textbf{v}_1 + t_2 \textbf{v}_2+...+t_k\textbf{v}_k$$

        is a subspace of $\R^n$.

</li><li>Let $Ax=0$ be a homogeneous linear system with $n$ unknowns. Then its solution set is a subspace of $\R^n$.
</li><li>Let $A$ and $B$ be matrices with $n$ comlumns. Then the following hold.
        1. The solution space of the homogeneous linear system $Ax=0$ is all of $\R^n$ if and only if $A=O$.
        2. $A=B$  if and only if $Ax=Bx$ for every vector $x$  in $\R^n$.
</li><li>A set $S=\{ \textbf{v}_1,\textbf{v}_2,...,\textbf{v}_s \}$ with two or more vectors in $\R^n$ is linearly dependent if and only if at least one of the vectors in $S$ is expressible as a linear combination of the other vectors in $S$.
</li><li>A homogeneous linear system $Ax=0$ has only the trivial solution if and only if the column vectors of $A$ are linearly independent.
</li><li>A set with more than $n$ vectors in $\R^n$ is linearly dependent.
</li><li>Let $A$ be an $n\times n$ matrix. Then the following are equivalent.
        1. The reduced row echelon form of $A$ is $I_n$.
        2. $A$ is expressible as a product of elementary matrices. 
        3. $A$ is invertible.
        4. $Ax=0$ has only the trivial solution.
        5. $Ax=b$ is consistent for every vector $b$ in $\R^n$.
        6. $Ax=b$  has exactly one solution for every vector $b$ in $\R^n$.
        7. The column vectors of $A$ are linearly independent.
        8. The row vectors of $A$ are linearly independent.
</li></ul></details>


## 3.5 The Geometry of Linear Systems

<details closed><summary><b>Definitions</b></summary><ul>
<li>The solution set of a consistent nonhomogeneous linear system $Ax=b$ is expressible in the form

        $$x=x_0 + t_1\textbf{v}_1+...+t_s\textbf{v}_s = x_0 + x_h$$

        where $x_0$ is any solution of the nonhomogeneous linear system $Ax=b$ and 

        $$x_h= t_1\textbf{v}_1+t_2\textbf{v}_2+...+t_s\textbf{v}_s $$

        is a general solution of the associated homogeneous linear system $Ax=0$. The solution $x_0$ is called a <span id="notion-highlight-1"><b>particular solution</b></span> of $Ax=b$. The solution set in the [form]() is called a <span id="notion-highlight-1"><b>general solution</b></span> of $Ax=b$.

</li><li>Let $a=(a_1,a_2,...,a_n)$ be a nonzero vector in $\R^n$. The <span id="notion-highlight-1"><b>hyperplane through the origin of $\R^n$ with normal $a$</b></span> (or the <span id="notion-highlight-1"><b>orthogonal complement</b></span> of $a$), denoted $a^\bot$, is defined to be the set of all points $x=(x_1,x_2,...,x_n)$ in $\R^n$ that satisfy the linear equation

        $$a_1x_1 + a_2x_2 + ... + a_nx_n = 0$$

        This linear equation can be expressed in dot product notation as $a\cdot x=0$.

</li><li>Let $a=(a_1,a_2,...,a_n)$ be a nonzero vector in $\R^n$ and $b$  be a scalar. The set of all points $x=(x_1,x_2,...,x_n)$ in $\R^n$ that satisfy the linear equation

        $$a_1x_1 + a_2x_2 + ... + a_nx_n = b$$

        is called a <span id="notion-highlight-1"><b>hyperplane</b></span> in $\R^n$. This linear equation can be expressed in dot product notation as $a\cdot x=b$ 
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul>
<li>Let $Ax=b$ be a consistent nonhomogeneous linear system. If $W$ is the solution space of the associated homogeneous linear system $Ax=0$, then the solution set of $Ax=b$ is the translated subspace $x_0 + W$ where $x_0$ is any solution of the nonhomogeneous linear system $Ax=b$.
</li><li>A general solution of a consistent linear system $Ax=b$ can be obtained by adding a particular solution of $Ax=b$ to a general solution of the associated homogeneous linear system $Ax=0$.
</li><li>Let $A$  be an $m\times n$ matrix. Then the following are equivalent.
        1. $Ax=0$ has only the trivial solution.
        2. $Ax=b$  has at most one solution for every vector $b$ in $\R^m$ *(i.e. is inconsistent or has a unique solution).*
</li><li>A nonhomogeneous linear system with more unknowns than equations is either inconsistent or has infinitely many solutions.
</li><li>A linear system $Ax=b$ is consistent if and only if $b$ is in the space spanned by the column vectors of $A$.
</li><li>Let $A$ be an $m\times n$ matrix. Then the solution space of the homogeneous linear system $Ax=0$ consists of all vectors in $\R^n$ that are orthogonal to every row vector of the matrix $A$.
</li></ul></details>

## 3.6 Matrices with Special Forms

<details closed><summary><b>Definitions</b></summary><ul><li>A square matrix in which all entries off the main diagonal are zero is called a <span id="notion-highlight-1"><b>diagonal matrix</b></span>.
</li><li>A square matrix in which all entries above the main diagonal are zero is called <span id="notion-highlight-1"><b>lower triangular</b></span>. A square matrix in which all entries below the main diagonal are zero is called <span id="notion-highlight-1"><b>upper triangle</b></span>. A matrix that is either upper triangular or lower triangular (or both) is called <span id="notion-highlight-1"><b>triangular</b></span>.
</li><li>A lower triangular matrix with zeros on the main diagonal is called <span id="notion-highlight-1"><b>strictly lower triangular</b></span>. An upper triangular matrix with zeros on the main diagonal is called <span id="notion-highlight-1"><b>strictly upper triangular</b></span>. A matrix that is either strictly upper triangular or strictly lower triangular (or both) is called <span id="notion-highlight-1"><b>strictly triangular</b></span>.
</li><li>A square matrix $A$ is said to be <span id="notion-highlight-1"><b>symmetric</b></span> if

        $$A^\mathsf{T}=A$$

        It is said to be <span id="notion-highlight-1"><b>skew-symmetric</b></span> if 

        $$A^\mathsf{T}=-A$$

</li><li>Let $A$ be an $n\times n$ matrix. A vector $x_0$ in $\R^n$ is called a <span id="notion-highlight-1"><b>fixed point</b></span> of $A$ if

        $$Ax_0=x_0$$

        or equivalently, $x_0$ is a solution of the homogeneous linear system $(I-A)x=0$.

</li><li>A square matrix $A$ with the property that $A^k=O$ for some positive integer $k$ is said to be <span id="notion-highlight-1"><b>nilpotent</b></span> and the smallest positive integer power $k$ for which $A^k=O$ is called the <span id="notion-highlight-1"><b>index of nilpotent</b></span>.
</li></ul></details>

<details closed><summary><b>Definitions</b></summary><ul>
<li>The following statement hold.
        1. The transpose of a lower triangular matrix is upper triangular and the transpose of an upper triangular matrix is lower triangular.
        2. A product of lower triangular matrices is lower triangular and a product of upper triangular matrices is upper triangular.
        3. A triangular matrix is invertible if and only if its diagonal entries are all nonzero.
        4. The inverse of an invertible lower triangular matrix is lower triangular and the inverse of an invertible upper triangular matrix is upper triangular.
</li><li>Let $A$ and $B$ be symmetric matrices with the same size and $k$ be any scalar. Then the following hold.
        1. $A^\mathsf{T}$ is symmetric.
        2. $A+B$ and $A-B$ are symmetric.
        3. $kA$ is symmetric.
</li><li>The product of two symmetric matrices is symmetric if and only if the matrices commute.
</li><li>The inverse of an invertible symmetric matrix is symmetric.
</li><li>Let $A$ be a square matrix. Then the matrix $A, AA^\mathsf{T}$ and $A^\mathsf{T}A$ are either all invertible or all singular.
</li><li>Let $A$ be a square matrix  such that there is a positive integer $k$ for which $A^k=O$. Then the matrix $I-A$ is invertible and

        $$(I-A)^{-1}= I+A+A^2+...+A^{k-1}$$

</li><li>Let $A$  be an $n\times n$ matrix for which the sum of the absolute values of the entries in each column (or each row) is less than 1. Then the matrix $I-A$ is invertible and can be expressed as <span id="notion-highlight-1"><b>power series representation</b></span>

        $$(I-A)^{-1}=I+A+A^2+A^3+...$$
</li></ul></details>

## 3.7 Matrix Factorizations; $\rm{\textit{LU}}$-Decompositions

<details closed><summary><b>Definitions</b></summary><ul>
<li>Let $A$ be a square matrix. A factorization of $A$ as

        $$A=LU$$

        where $L$ is a lower triangular matrix and $U$ is an upper triangular matrix is called an $</b></span>LU$-decomposition</b></span> or $</b></span>LU$-factorization</b></span> of $A$.

</li><li>Let $A$ be an $n\times n$ matrix. For $k=1,2,...,n,$ the upper leftmost $k\times k$ submatrix of $A$, i.e., the matrix of $A$
     with the last $n-k$ rows and columns removed, is called a <span id="notion-highlight-1"><b>leading principal submatrix</b></span> of $A$.
</li><li>Let $A$ be a square matrix. A factorization of $A$
     as

        $$A=LDU$$

        where $L$ is a lower triangular matrix with 1's on the main diagonal, $D$ is a diagonal matrix and $U$ is an upper triangular matrix with 1's on the main diagonal is called $</b></span>LDU$-decomposition</b></span> or $</b></span>LDU$-factorization</b></span> of $A$.

</li><li>An $n\times n$ matrix $P$ is called a <span id="notion-highlight-1"><b>permutation matrix</b></span> if it results by reordering the rows of $I_n$ in some way, i.e., it is formed by multiplying in sequence those elementary matrices that correspond to the row interchanges.
</li><li>Let $A$ be a square matrix. A factorization of $A$  as

        $$A=PLU$$

        where $P$ is a permutation matrix, $L$ is a lower triangular matrix and $U$ is an upper triangular matrix is called a $PLU$</b></span>-decomposition</b></span> or $</b></span>PLU$-factorization</b></span> of $A$.
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul>
<li>Let $A$ be a square matrix. If $A$ can be reduced to row echelon form by Gaussian elimination with no row interchanges, then $A$ has an $LU$-decomposition.
- <span id="notion-highlight-1"><b>The Method of $LU$-Decomposition</b></span>

    Let $A$ be a square matrix in the form $A=LU$ where $L$ is a lower triangular matrix and $U$ is an upper triangular matrix. To solve a linear system $Ax=b$, proceed as follows:

    <span id="notion-highlight-1"><b>Step 1</b></span>. Rewrite the system $Ax=b$ as

    $$LUx=b$$

         <span id="notion-highlight-1"><b>Step 2</b></span>. Define a new unknown $y$ by letting

    $$Ux=y$$

                    and rewrite [the equation]() as $Ly=b$

        <span id="notion-highlight-1"><b>Step 3</b></span>. Solve the linear system $Ly=b$ for the unknown $y$.

        <span id="notion-highlight-1"><b>Step 4</b></span>. Substitute the now-known vector $y$ into [this equation]() and solve for $x$.
</li></ul></details>
<p></p>
<fieldset>
<legend class="box-header"><b>Finding an $LU$-Decomposition of a matrix</b></legend>
<ul style="list-style:none">
    <li><span id="notion-highlight-2"><b>&emsp;&emsp;Step 1</b></span><br> &emsp;Reduce $A$ to row echelon form $U$ without using row interchanges, keeping track of the multipliers used to introduce the leading 1's and the multiplers used to introduce zeros below the leading 1's.</li>

    <li><span id="notion-highlight-2"><b>&emsp;&emsp;Step 2</b></span><br>&emsp; In each position below the main diagonal of $L$, place the reciprocal of the multipliers that introduced the leading 1 in that position in $U$.</li>

    <li><span id="notion-highlight-2"><b>&emsp;&emsp;Step 3</b></span><br>&emsp; In each position along the main diagonal of $L$, place the negative of the multipliers used to introduce the zero in that position in $U$.</li>

    <li><span id="notion-highlight-2"><b>&emsp;&emsp;Step 4</b></span><br> &emsp;Form the decomposition $A=LU$.
</li></ul></fieldset>

---

## 4.1 Determinants; Cofactor Expansion

<details closed><summary><b>Definitions</b></summary><ul>
<li>Let $A$ be a $2\times 2$ or $3\times 3$ matrix. The <span id="notion-highlight-1"><b>determinant</b></span> of $A$, denoted $\textrm{det}(A)$ or $|A|$, is defined as follows:
        1. $2\times 2$ case: If 

            $$A=\begin{bmatrix}
            a_{11} & a_{12} \\
            a_{21} & a_{22} 
            \end{bmatrix}$$

            then 

        $$\textrm{det}(A)=\begin{vmatrix}
        a_{11} & a_{12} \\
        a_{21} & a_{22} 
        \end{vmatrix} = a_{11}a_{22}-a_{12}a_{21}$$

        2.  $3\times 3$ case: If 

        $$A = \begin{bmatrix}
        a_{11} & a_{12} & a_{13}\\
        a_{21} & a_{22} & a_{23}\\   a_{31} & a_{32} & a_{33}\\
        \end{bmatrix}$$

             then 

        $$\begin{aligned}         \textrm{det}(A) &= \begin{vmatrix}
        a_{11} & a_{12} & a_{13}\\
        a_{21} & a_{22} & a_{23}\\   a_{31} & a_{32} & a_{33}\\
        \end{vmatrix} \\                     &= a_{11}\begin{vmatrix}
        a_{22} & a_{23} \\
        a_{32} & a_{33} 
        \end{vmatrix} - a_{12}\begin{vmatrix}
        a_{21} & a_{23} \\
        a_{31} & a_{33}  
        \end{vmatrix} - a_{13}\begin{vmatrix}
        a_{21} & a_{22} \\
        a_{31} & a_{32}  
        \end{vmatrix} \\ &= a_{11}a_{22}a_{33} + a_{12}a_{23}a_{32} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} -a_{12}a_{21}a_{33}          \end{aligned}$$

</li><li>A <span id="notion-highlight-1"><b>permutation</b></span> of the set of integers from 1 to $n$ is an arrangement of these integers in some order without omissions or repetitions. An <span id="notion-highlight-1"><b>inversion</b></span> is said to occur in a permutation whenever a larger integer precedes a smaller one.
</li><li>A permutation is called <span id="notion-highlight-1"><b>even</b></span> if the total number of inversions is an even integer. It is called <span id="notion-highlight-1"><b>odd</b></span> if the total number of inversions is an odd integer. That is, a permutation is defined to be even or odd in accordance with whether the minimum number of interchanges required to put the permutation in natural order is even or odd.
</li><li>Let $A$ be an $n\times n$ matrix. An <span id="notion-highlight-1"><b>elementary product</b></span> from $A$ is defined to be a product of $n$ entries from $A$, no two of which come from the same row or same column. If $A=(a_{ij})$, then each elementary product is expressible in the form

        $$a_{1j_1}a_{2j_2}...a_{nj_n}$$

        where the column indices form a permutation $(j_1,j_2,...,j_n)$ of the set of integers from 1 to $n$ and the row indices are in natural order. The <span id="notion-highlight-1"><b>signed elementary product</b></span> (from $A$) corresponding  to [the form]() is defined to be

        $$\pm a_{1j_1}a_{2j_2}...a_{nj_n}$$

        where the sign is $+$ if the permutation $(j_1,j_2,...,j_n)$ is even and $-$ if it is odd.

</li><li>The <span id="notion-highlight-1"><b>determinant</b></span> of a square matrix $A$ is defined to be the sum of all signed elementary products from $A$
     and is denoted by $\textrm{det}(A)$ or $|A|$.
</li><li>Let $A=(a_{ij})$ be an $n\times n$ matrix. For $i,j=1,2,...,n,$  the <span id="notion-highlight-1"><b>minor of entry</b></span> $a_{ij}$ (or the $ij$th minor of $A$) is denoted by $M_{ij}$ and is defined to be the determinant of the $(n-1)\times (n-1)$ submatrix that remains when the $i$th row and $j$th column of $A$ are deleted. The number

        $$C_{ij}=(-1)^{i+j}M_{ij}$$

        is called the <span id="notion-highlight-1"><b>cofactor of entry $a_{ij}$</b></span> (or the $</b></span>ij$th cofactor</b></span> of $A$).
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul><li>Let $A$ be a square matrix with a row of zeros or a column of zeros. Then $\textrm{det}(A)=0$.
</li><li>Let $A$ be a triangular matrix. Then $\textrm{det}(A)$ is the product of the entries on the main diagonal.
</li><li>Let $A=(a_{ij})$ be an $n\times n$ matrix. Then $\textrm{det}(A)$ can be computed by multiplying the entries in any row (or column) by their cofactors and adding the resulting products, that is, for each $i=1,2,...,n,$

        $$\textrm{det}(A) = a_{i1}C_{i1} + a_{i2}C_{i2} + ... + a_{in}C_{in}$$

        and for each $j=1,2,...,n,$

        $$\textrm{det}(A) = a_{1j}C_{1j} + a_{2j}C_{2j} + ... + a_{nj}C_{nj}$$
</li></ul></details>

## 4.2 Properties of Determinants

<details closed><summary><b>Definitions</b></summary><ul><li>Let $A$
     be a square matrix. Then $\textrm{det}(A) = \textrm{det}(A^\mathsf{T})$.
</li><li>Let $A$ be a square matrix. Then the following hold. *(determinant equalities)*
        1. If $B$ is the matrix that results when a single row or a single column of $A$
         is multiplied by a scalar $k$, then 

            $$\textrm{det}(B)=k\cdot\textrm{det}(A)$$

        2. If $B$ is the matrix that results when two rows or two columns of $A$ are interchanged, then

            $$\textrm{det}(B)=-\textrm{det}(B)$$

        3. If $B$ is the matrix that results when a multiple of one row of $A$ is added to another row or when a multiple of one column of $A$
         is added to another column, then

            $$\textrm{det}(B)=\textrm{det}(A)$$

</li><li>Let $A$  be a square matrix. Then the following hold. *(etc properties)*
        1. If $A$ has two identical rows or columns, then $\textrm{det}(A)=0$.
        2. If $A$ has two proportional rows or columns, then $\textrm{det}(A)=0$.
        3. If $A$ is an $n\times n$ matrix and $k\in \R$, then

            $$\textrm{det}(kA)=k^n\textrm{det}(A)$$

</li><li>A square matrix $A$ is invertible if and only if $\textrm{det}(A)\neq 0$.
</li><li>Let $A$ and $B$ be square matrices of the same size. Then

        $$\textrm{det}(AB)=\textrm{det}(A)\textrm{det}(B)$$

</li><li>Let $A$ be an invertible matrix. Then

        $$\textrm{det}(A^{-1})=\frac{1}{\textrm{det}(A)}$$

</li><li>Let $A$ be an $n\times n$ matrix. Then the following are equivalent.
        1. The reduced row echelon form of $A$ is $I_n$.
        2. $A$ is expressible as a product of elementary matrices.
        3. $A$ is invertible.
        4. $Ax=0$ has only the trivial solution.
        5. $Ax=b$ has consistent for every vector $b$ in $\R^n$.
        6. $Ax=b$ has exactly one solution for every vector $b$ in $\R^n$.
        7. The column vectors of $A$
         are linearly independent.
        8. The row vectors of $A$ are linearly independet.
        9. $\textrm{det}(A)\neq0.$
</li></ul></details>

- <span id="notion-highlight-1"><b>Computation of a Determinant</b></span>
    1. Reduce $A$ to a triangular matrix, using only row addition and row interchange.
    2. If any of the matrices appearing in the reduction contains a row of zeros, then $\textrm{det}(A)=0$.
    3. Otherwise, $\textrm{det}(A)=(-1)^r\cdot(\textrm{Product of diagonal entries})$ where $r$ is the number of row interchanges performed.

## 4.3 Cramer's Rule; Formula for $A^{-1}$; Applications of Determinants

<details closed><summary><b>Definitions</b></summary><ul><li>Let $A=(a_{ij})$ be an $n\times n$ matrix and $C_{ij}$ be the cofactors of entries $a_{ij}$ for $i,j=1,2,3,...,n$. The matrix

        $$C= \begin{bmatrix}
        C_{11} & C_{12} & \cdots & C_{1n}\\
        C_{21} & C_{22} & \cdots & C_{2n}\\ \vdots &\vdots&\ddots&\vdots  \\                    C_{n1} & C_{n2} & \cdots &C_{nn}\\
        \end{bmatrix}$$

        is called the <span id="notion-highlight-1"><b>matrix of cofactors</b></span> from $A$. The transpose of this matrix is called the <span id="notion-highlight-1"><b>adjoint</b></span> (or the <span id="notion-highlight-1"><b>adjudate</b></span>) of $A$ and is denoted by $\textrm{adj}(A)$. That is,

        $$\textrm{adj}(A) = \begin{bmatrix}
        C_{11} & C_{12} & \cdots & C_{1n}\\
        C_{21} & C_{22} & \cdots & C_{2n}\\ \vdots &\vdots&\ddots&\vdots  \\                    C_{n1} & C_{n2} & \cdots &C_{nn}\\
        \end{bmatrix}$$

</li><li>Let $\textbf{u}=(u_1,u_2,u_3)$ and $\textbf{v} = (v_1,v_2,v_3)$ be vectors in $\R^3$. The <span id="notion-highlight-1"><b>cross product</b></span> of $\textbf{u}$ and $\textbf{v}$, denoted by $\textbf{u}\times \textbf{v}$, is defined to be the vector in $\R^3$ given by

        $$\textbf{u}\times \textbf{v} = (u_2v_3 - u_3v_2, u_3v_1 - u_1v_3, u_1v_2 - u_2v_1)$$

        or equivalently, in determinant notation

        $$\textbf{u}\times \textbf{v} = \left( \begin{vmatrix}
        u_{2} & u_{3} \\
        v_{2} & v_{3}  
        \end{vmatrix} ,-\begin{vmatrix}
        u_{1} & u_{3} \\
        v_{1} & v_{3}  
        \end{vmatrix} ,\begin{vmatrix}
        u_{1} & u_{2} \\
        v_{1} & v_{2}  
        \end{vmatrix}  \right).$$

        Symbolically,

        $$\textbf{u}\times \textbf{v} = \begin{vmatrix}
        \textbf{i} & \textbf{j} & \textbf{k}\\
        u_1 & u_2 & u_3\\  v_1 & v_2 & v_3\\
        \end{vmatrix}$$

        where $\textbf{i} = (1,0,0)$, $\textbf{j} = (0,1,0)$ and $\textbf{k} = (0,0,1)$ are the standard unit vectors in $\R^3$.

</li><li>Let $\textbf{u}$ and $\textbf{v}$ be vectors in $\R^3$. The <span id="notion-highlight-1"><b>cross product</b></span> of $\textbf{u}$ and $\textbf{v}$, denoted $\textbf{u}\times \textbf{v}$, is defined to be the vector in $\R^3$ whose length and direction are given as follows
    </li><li>The length of $\textbf{u}\times \textbf{v}$ is the area of the parallelogram determined by $\textbf{u}$ and $\textbf{v}$ if $\textbf{u}$ and $\textbf{v}$ are not parallel. It is zero if $\textbf{u}$ and $\textbf{v}$ are parallel. Alternatively,

            $$\lVert \textbf{u}\times \textbf{v} \lVert=\lVert\textbf{u}\lVert\lVert\textbf{v}\lVert\sin\theta$$

            where $\theta$ is the angle between $\textbf{u}$ and $\textbf{v}$ in $[0,\pi]$ if $\textbf{u}$ and $\textbf{v}$  are nonzero vectors and $\theta$ is any angle if either $\textbf{u}$ or $\textbf{v}$ (or both) is 0.

    </li><li>The direction of $\textbf{u}\times \textbf{v}$ is such that $\textbf{u}\times \textbf{v}$ is orthogonal to both $\textbf{u}$ and $\textbf{v}$ and the ordered triple ($\textbf{u}$, $\textbf{v}$, $\textbf{u}\times \textbf{v}$) is a right-handed set of vectors if $\textbf{u}$ and $\textbf{v}$ are not parallel.
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul><li>Let $A$ be a square matrix. Then the following hold.
        1. If the entries in any row of $A$ are multiplied by the cofactors of the corresponding entries in a different row, then the sum of the products is zero.
        2. If the entries in any column of $A$ are multiplied by the cofactors of the corresponding entries in a different column, then the sum of the products is zero.

</li><li>Let $A$   be an invertible matrix. Then

        $$A^{-1} = \frac{1}{\textrm{det}(A)}\textrm{adj}(A).$$

</li><li>Let $Ax=b$ be a linear system of $n$ equations in $n$ unknowns. Then the system has a unique solution if and only if $\textrm{det}(A)\neq0$, in which case the solution is

        $$x_1=\frac{\textrm{det}(A_1)}{\textrm{det}(A)}, \;\;\;x_2=\frac{\textrm{det}(A_2)}{\textrm{det}(A)},\;\;\;\cdots,\;\;\;x_n=\frac{\textrm{det}(A_n)}{\textrm{det}(A)}$$

        where $A_j$ is the matrix that results when the $j$th column of $A$ is replaced by $b$ for each $j = 1,2,...,n$.

</li><li>Let $A$ be an $n\times n$ matrix. Then the following hold.
        1. If $n=2$, then $|\textrm{det}(A)|$ represents the area of the parallelogram determined by the two column vectors of $A$ when they are positioned so their initial points coincide.
        2. If $n=3$, then $|\textrm{det}(A)|$ represents the volume of the parallelogram determined by the three column vectors of $A$ when they are positioned so their initial points coincide.
</li><li>Let $S$ be a triangle in the $xy$-plane with vertices $P_1(x_1,y_1)$, $P_2(x_2,y_2)$ and $P_3(x_3,y_3)$ where the labeling is such that the triangle is traversed counterclockwise from $P_1$ to $P_2$ to $P_3$. Then the area of $S$ is given by

        $$\textrm{Area} = \frac{1}{2}\begin{vmatrix}
        x_1 & y_1 & 1\\
        x_2 & y_2 & 1\\                  x_3 & y_3 & 1\\
        \end{vmatrix}$$

</li><li>Let $\textbf{u}$, $\textbf{v}$ and $\textbf{w}$ be vectors in $\R^3$ and $k$ be a scalar. Then the following hold
        1. <span id="notion-highlight-1"><b>(Anticommutativity)</b></span> $\textbf{u}\times \textbf{v} = - \textbf{v} \times \textbf{u}$
        2. <span id="notion-highlight-1"><b>(Distributivity)</b></span> $\textbf{u}\times (\textbf{v} + \textbf{w} ) = \textbf{u}\times \textbf{v} + \textbf{u}\times \textbf{w}$
        3. <span id="notion-highlight-1"><b>(Distributivity)</b></span> $(\textbf{u}+ \textbf{v}) \times \textbf{w}  = \textbf{u}\times \textbf{w} + \textbf{v}\times \textbf{w}$
        4. $k(\textbf{u}\times \textbf{v}) = (k\textbf{u})\times \textbf{v} = \textbf{u}\times (k\textbf{v})$
        5. $\textbf{u}\times 0 = 0\times \textbf{u} =0$
        6. $\textbf{u}\times \textbf{u}=0$
</li><li>Let $\textbf{u}$ and $\textbf{v}$ be vectors in $\R^3$. Then the following hold.
        1. $\textbf{u}\cdot(\textbf{u}\times \textbf{v}) =0$ , i.e., $\textbf{u}\times \textbf{v}$ is orthogonal to $\textbf{u}$.
        2. $\textbf{v}\cdot(\textbf{u}\times \textbf{v}) =0$ , i.e., $\textbf{u}\times \textbf{v}$ is orthogonal to $\textbf{v}$.
</li><li>Let $\textbf{u}$ and $\textbf{v}$ be nonzero vectors in $\R^3$ and $\theta$ be the angle between $\textbf{u}$ and $\textbf{v}$ in $[0,\pi]$. Then the following hold.
        1. <span id="notion-highlight-1"><b>(Lagrange's Identity) $\lVert \textbf{u}\times \textbf{v} \lVert^2 = \lVert\textbf{u}\lVert^2\lVert\textbf{v}\lVert^2 - (\textbf{u}\cdot \textbf{v})^2, i.e.,$</b></span>

            $$\lVert \textbf{u}\times \textbf{v} \lVert^2=\lVert\textbf{u}\lVert\lVert\textbf{v}\lVert\sin\theta$$

        2. The area of the parallelogram that has $\textbf{u}$ and $\textbf{v}$ as adjacent side is 

            $$\textrm{Area} = \lVert \textbf{u}\times \textbf{v} \lVert$$
</li></ul></details>

## 4.4 A First Look at Eigenvalues and Eigenvectors

<details closed><summary><b>Definitions</b></summary><ul><li>Let $A$ be an $n\times n$ matrix. A scalar $\lambda$ is called an <span id="notion-highlight-1"><b>eigenvalue</b></span> of $A$ if there is a nonzero vector $x$ in $\R^n$ such that

        $$Ax=\lambda x$$

        If $\lambda$ is an eigenvalue of $A$, then every nonzero vector $x$ in $\R^n$ such that $Ax=\lambda x$ is called an <span id="notion-highlight-1"><b>eigenvector</b></span> of $A$ corresponding to $\lambda$. The terms <span id="notion-highlight-1"><b>characteristic value</b></span> or <span id="notion-highlight-1"><b>proper value</b></span> are used in place of <span id="notion-highlight-1"><b>eigenvalue</b></span>. The terms <span id="notion-highlight-1"><b>characteristic vector</b></span> or <span id="notion-highlight-1"><b>proper vector</b></span> are used in place <span id="notion-highlight-1"><b>eigenvector</b></span>.

</li><li>Let $A$ be an $n\times n$ matrix and $\lambda$  be a scalar. The equation

        $$\textrm{det}(\lambda I_n-A) = 0$$

        is called the <span id="notion-highlight-1"><b>characteristic equation</b></span> of $A$. The determinant $\textrm{det}(\lambda I_n-A)$ is a polynomial in $\lambda$  called the <span id="notion-highlight-1"><b>characteristic polynomial</b></span> of $A$. It has the form 

        $$\textrm{det}(\lambda I_n-A) = \lambda^n+c_1\lambda^{n-1} + \cdots + c_{n-1}\lambda + c_n$$

</li><li>Let $A$ be an $n\times n$ matrix and $\lambda$ be an eigenvalue of $A$. The solution space of the homogeneous linear system $\textrm{det}(\lambda I_n-A) = 0$ is called the <span id="notion-highlight-1"><b>eigenspace</b></span> of $A$ corresponding to $\lambda$. That is, the <span id="notion-highlight-1"><b>eigenspace</b></span> of $A$ is the set consisting of the zero vector in $\R^n$ together with all eigenvectors of $A$ corresponding to $\lambda$. It is a subspace of $\R^n$.
</li><li>For $i=1,2,\cdots,n$, the exponent $m_i$ is called the <span id="notion-highlight-1"><b>algebraic multiplicity</b></span> of $\lambda_i$. That is, the <span id="notion-highlight-1"><b>algebraic multiplicity</b></span> of an eigenvalue of $A$ is its multiplicity as a root of the characteristic equation of $A$. The [expression]() is called the <span id="notion-highlight-1"><b>complete linear factorization</b></span> of the characteristic polynomial.
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul><li>Let $A$ be an $n\times n$ matrix. Then the following are equivalent.
        1. $A$ has nontrivial fixed points.
        2. $I_n - A$ is singular.
        3. $\textrm{det}(I_n-A) = 0$.
</li><li>Let $A$ be an $n\times n$ matrix and $\lambda$  be a scalar. Then the following are equivalent
        1. $\lambda$ is an eigenvalue of $A$.
        2. $\lambda$ is a solution of the equation $\textrm{det}(\lambda I_n-A) = 0$.
        3. The linear system $(\lambda I_n-A)x = 0$ has nontrivial solutions.
</li><li>Let $A$ be a triangular matrix. Then the eigenvalue of $A$ are the entries on the main diagonal of $A$.
</li><li>Let $\lambda$ be an eigenvalue of a matrix $A$ and $x$ be a corresponding eigenvector. If $r\in \mathbb{N}$, then $\lambda^r$ is an eigenvalue of $A^r$ and $x$ is a corresponding eigenvector.
</li><li>Let $A$ be an $n\times n$ matrix. Then the following are equivalent.
        1. The reduced row echelon form of $A$ is $I_n$.
        2. $A$ is expressible as a product of elementary matrices.
        3. $A$ is invertible.
        4. $Ax=0$ has only the trivial solution.
        5. $Ax=b$ has consistent for every vector $b$ in $\R^n$.
        6. $Ax=b$ has exactly one solution for every vector $b$ in $\R^n$.
        7. The column vectors of $A$
         are linearly independent.
        8. The row vectors of $A$ are linearly independet.
        9. $\textrm{det}(A)\neq0.$
        10. $\lambda=0$   is not an eigenvalue of $A$.
</li><li>Let $A$ be an $n\times n$  matrix. Then the characteristic polynomial of $A$ can be expressed as

        $$\textrm{det}(\lambda I -A) = (\lambda-\lambda_1)^{m_1}(\lambda-\lambda_2)^{m_2}\cdots (\lambda-\lambda_k)^{m_k}$$

        where $\lambda_1,\lambda_2,\cdots,\lambda_k$ are the distinct eigenvalues of $A$ and $m_1+ m_2+\cdots+m_k = n$.

</li><li>Let $A$ be a $2\times 2$ matrix with real entries. Then the characteristic equatoin of $A$ is

        $$\lambda^2-\textrm{tr}(A)\lambda + \textrm{det}(A)=0$$

        and the following statements hold:

        1. $A$ has two distinct real eigenvalues if $\textrm{tr}(A)^2-4\textrm{det}(A) > 0$
        2. $A$ has one repeated real eigenvalue if $\textrm{tr}(A)^2-4\textrm{det}(A) = 0$
        3. $A$  has two conjugate imaginary eigenvalues if $\textrm{tr}(A)^2-4\textrm{det}(A) < 0$
</li><li>A $2\times 2$ symmetric matrix $A$ with real entries has real eigenvalues. Moreover, if $A$ is of the form

        $$A=\begin{bmatrix}
        a & 0 \\                              0 & a 
        \end{bmatrix}$$

        then it has one repeated eigenvalue, namely $\lambda=a$; otherwise it has two distinct eigenvalues. 

</li><li>Let $A$ be a $2\times 2$ symmetric matrix with real entries. Then the following hold.
        1. If $A$ has one repeated eigenvalue, then the eigenspace corresponding to that eigenvalue is $\R^2$.
        2. If $A$ has two distinct eigenvalues, then the eigenspaces corresponding to those eigenvalues are perpendicular lines through the origin of $\R^2$.
</li><li>Let $A$ be an $n\times n$  matrix with eigenvalues $\lambda _1, \lambda_2, \cdots ,\lambda_n$ (repeated according to multiplicity). Then the following hold.
        1. $\textrm{det}(A)=\lambda_1\lambda_2\cdots\lambda_n$.
        2. $\textrm{tr}(A) = \lambda_1 + \lambda_2 + \cdots \lambda_n$.
</li></ul></details>

---

## 6.1 Matrices as Transformations

<details closed><summary><b>Definitions</b></summary><ul><li>A function whose inputs and outputs are vectors is called a <span id="notion-highlight-1"><b>transformation</b></span>. If $T$  is a transformation from $\R^n$  to $\R^m$, then the set $R^m$ is called the codomain of $T$. A transformation is called an operator on $\R^n$  if it maps $\R^n$ into $\R^n$.
</li><li>Let $A = (a_{ij})$  be an $m\times n$ matrix. Define

        $$T_A(x)= Ax = \begin{bmatrix}
        a_{11} & a_{12} & \cdots & a_{1n}\\
        a_{21} & a_{22} & \cdots & a_{2n}\\ \vdots &\vdots&\ddots&\vdots  \\                    a_{n1} & a_{n2} & \cdots &a_{nn}\\
        \end{bmatrix} \begin{bmatrix}      x_1\\x_2\\\vdots \\x_n\end{bmatrix} = \begin{bmatrix}      a_1\cdot x\\a_2\cdot x\\\vdots \\a_n\cdot x\end{bmatrix}$$

        for each vector $x=(x_1,x_2,\cdots,x_n)$ in $\R^n$ where $a_i = (a_{i1},a_{i2},\cdots,a_{in})$ is the $i$ th row vector of $A$ for $i=1,2,\cdots, m$. The trasformation $T_A$ from $\R^n$ to $\R^m$ is called the <span id="notion-highlight-1"><b>transformation represented by $A$</b></span> or the <span id="notion-highlight-1"><b>multiplication by $A$.</b></span>

</li><li>A function $T: \mathbb{R}^n\rightarrow\R^m$ is called a <span id="notion-highlight-1"><b>linear transformation</b></span> from $\R^n$ to $\R^m$ if the following two properties hold for all vectors $\textbf{u}$ and $\textbf{v}$ in $\R^n$ and all scalar $c$:
        1. <span id="notion-highlight-1"><b>(Homogeneity property) $T(c\textbf{u}) =c T(\textbf{u})$</b></span>
        2. <span id="notion-highlight-1"><b>(Additivity property)</b></span> $T(\textbf{u} + \textbf{v}) = T(\textbf{u}) + T(\textbf{v})$

        In the case where $m=n$, the linear transformation $T$ is called a <span id="notion-highlight-1"><b>linear operator</b></span> on $R^n$.

</li><li>A <span id="notion-highlight-1"><b>rotation</b></span> about the origin in $\R^2$ through an angle is defined to be a transformation that rotates each vector $x$ in $\R^2$ about the origin through an angle $\theta$.
</li><li>A <span id="notion-highlight-1"><b>reflection</b></span> about a line through the origin in $\R^2$ is defined to be a transformation that maps each vector $x$ in $\R^2$ into its mirror image about a line $L$ through the origin.
</li><li>An <span id="notion-highlight-1"><b>orthogonal projection</b></span> onto a line through the origin in $\R^2$ is defined to be a transformation that projects each vector $x$ in $\R^2$ onto a line $L$ through the origin by dropping a perpendicular to $L$.
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul><li>Let $T: \mathbb{R}^n\rightarrow\R^m$ be a linear transformation. Let $\textbf{u}$ and $\textbf{v}$ be vectors in $\R^n$. Then the following hold.
        1. $T(0) = 0$
        2. $T(-\textbf{u}) = -T(\textbf{u})$
        3. $T(\textbf{u}-\textbf{v}) = T(\textbf{u}) - T(\textbf{v})$ 
</li><li>Let $T: \mathbb{R}^n\rightarrow\R^m$ be a linear transformation. Let $\textbf{e}_1,\textbf{e}_2,\cdots , \textbf{e}_n$ be the standard unit vectors in $\R^n$ and $x$ be a vector in $\R^n$. Then $T(x)$ can be expressed as

        $$T(x) = Ax$$

        where $A$ is the $m\times n$ matrix given by 

        $$A=[T(\textbf{e}_1)\mid T(\textbf{e}_2)\mid \cdots \mid T(\textbf{e}_n)]$$
</li></ul></details>

## 6.2 Geometry of Linear Operators

<details closed><summary><b>Definitions</b></summary><ul><li>A linear operator $T :\R^n \rightarrow \mathbb{R}^n$ is called an <span id="notion-highlight-1"><b>orthogonal operator</b></span> or a <span id="notion-highlight-1"><b>linear isometry</b></span> if

        $$\rVert T(x)\rVert = \rVert x\rVert$$

        for all vector $x$ in $\R^n$.

</li><li>A square matrix $A$ is said to be <span id="notion-highlight-1"><b>orthogonal</b></span> if

        $$A^{-1} = A^\mathsf{T}$$

        or equivalently, $A^\mathsf{T}A = I$

</li><li>Let $k$  be a nonnegative scalar. The linear operator $T$ on $\R^2$ defined by

        $$T(x,y) = (kx,ky)$$

        for each vector $(x,y)$ in $\R^2$ is called the <span id="notion-highlight-1"><b>scaling operator</b></span> with factor $k$. If $0\leq k < 1$, then $T$ is called a <span id="notion-highlight-1"><b>contraction</b></span>. If $k>1$, then $T$  is called a <span id="notion-highlight-1"><b>dilation</b></span>. The standard matrix for $T$ is 

        $$A=\begin{bmatrix}                  k & 0\\ 0 & k \end{bmatrix}$$

</li><li>Let $k$  be a nonnegative scalar. For each vector $(x,y)$ in $\R^2$, let

        $$T(x,y) = (kx,y)$$

        If $k>1$, then $T$  is called a <span id="notion-highlight-1"><b>horizontal expansion</b></span> . If $0\leq k < 1$, then $T$ is called a <span id="notion-highlight-1"><b>horizontal contraction</b></span>. The standard matrix for $T$ is 

        $$A=\begin{bmatrix}                  k & 0\\ 0 & 1 \end{bmatrix}$$

</li><li>Let $k$  be a nonnegative scalar. For each vector $(x,y)$ in $\R^2$, let

        $$T(x,y) = (x,ky)$$

        If $k>1$, then $T$  is called a <span id="notion-highlight-1"><b>vertical expansion</b></span> . If $0\leq k < 1$, then $T$ is called a <span id="notion-highlight-1"><b>vertical contraction</b></span>. The standard matrix for $T$ is 

        $$A=\begin{bmatrix}                  1 & 0\\ 0 & k \end{bmatrix}$$

</li><li>Let $k$  be a nonzero scalar. The linear operator $T$ on $\R^2$ defined by

        $$T(x,y) = (x,y+kx)$$

        for each vector $(x,y)$ in $\R^2$ is called the <span id="notion-highlight-1"><b>vertical shear</b></span> with factor $k$. The standard matrix for $T$ is 

        $$A=\begin{bmatrix}                  1 & 0\\ k & 1 \end{bmatrix}$$
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul><li>Let $T: \mathbb{R}^n\rightarrow\R^m$ be a linear operator. Then the following are equivalent.
        1. $\rVert T(x)\rVert = \rVert x\rVert$ for all vectors $x$ in $\R^n$, i.e., $T$  is orthogonal or length preserving.
        2. $T(x)\cdot T(y)=x\cdot y$ for all vectors $x$ and $y$ in $\R^n$, i.e., $T$ is dot product preserving.
</li><li>The following statements hold.
        1. The transpose of an orthogonal matrix is orthogonal.
        2. The inverse of an orthogonal matrix is orthogonal.
        3. A product of orthogonal matrices is orthogonal.
        4. If $A$ is orthogonal, then $\textrm{det}(A)=1$ or $\textrm{det}(A)=-1$. 
</li><li>Let $A$ be an $m\times n$ matrix. Then the following are equivalent.
        1. $A^\mathsf{T} A =I$.
        2. $\rVert Ax \rVert = \rVert x \rVert$ for all vectors $x$ in $\R^n$.
        3. $Ax\cdot Ay = x\cdot y$ for all vectors $x$  and $y$ in $\R^n$.
</li><li>Let $A$ be $n\times n$ matrix. Then the following are equivalent.
        1. $A$ is orthogonal
        2. $\rVert Ax\rVert =\rVert x\rVert$  for all vectors $x$ in $\R^n$.
        3. $Ax\cdot Ay = x\cdot y$ for all vectors $x$  and $y$ in $\R^n$.
        4. The column vectors of $A$ are orthogonal. 
        5. The row vectors of $A$ are othogonal. 
</li><li>A linear operator $T: \mathbb{R}^n \rightarrow \mathbb{R}^n$ is orthogonal if and only if the standard matrix for $T$  is orthogonal.
</li><li>Let $T: \mathbb{R}^2\rightarrow \mathbb{R}^2$ be an orthogonal linear operator. Then the standard matrix for $T$  is expressible in the form

        $$R_\theta = \begin{bmatrix}           \cos\theta  & -\sin\theta\\ \sin\theta  & cos\theta\\ \end{bmatrix}$$

        or 

        $$H_{\theta/2} = \begin{bmatrix}           \cos\theta  & \sin\theta\\ \sin\theta  & -cos\theta\\ \end{bmatrix}$$

</li><li>Let $\textbf{u}=(a,b,c)$ be a unit vector in $\R^3$. Then the standard matrix $R_{\textbf{u},\theta}$ for the rotation through an angle $\theta$ about an axis through the origin with orientation $\textbf{u}$ is

        $$R_{\textbf{u},\theta} = \begin{bmatrix}a^2\omega+\cos\theta & ab\omega-c\sin\theta & ac\omega+b\sin\theta\\ ab\omega+c\sin\theta & b^2\omega+\cos\theta & bc\omega-a\sin\theta\\ ac\omega - b\sin\theta & bc\omega+a\sin\theta & c^2\omega+\cos \theta\end{bmatrix}$$

        where $\omega=1-\cos \theta$
</li></ul></details>

## 6.3 Kernel and Range

<details closed><summary><b>Definitions</b></summary><ul><li>Let $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$ be a linear transformation. The set of vectors in $\R^n$ that maps into $0$ is called the <span id="notion-highlight-1"><b>kernel</b></span> of $T$ and is denoted by $\textrm{ker}(T)$.
</li><li>Let $A$ be an $m\times n$ matrix. The solution space of the linear system $Ax=0$  or equivalently, the kernel of the transformation $T_A$, is called the <span id="notion-highlight-1"><b>null space</b></span> of the matrix $A$ and is denoted by $\textrm{null}(A)$.
</li><li>Let $T:\R^n\rightarrow \mathbb{R}^m$ be a linear transformation. The <span id="notion-highlight-1"><b>range</b></span> of $T$, denoted by $\textrm{ran}(T)$, is denoted to be the set of all vectors in $\R^m$ that are images of at least one vector in $\R^n$
</li><li>A linear transformation $T:\R^n\rightarrow \mathbb{R}^m$ is said to be <span id="notion-highlight-1"><b>onto</b></span> if the range of $T$ is the codomain $\R^m$, that is, every vector in $\R^m$ is the image of at least one vector in $\R^n$.
</li><li>A linear transformation $T:\R^n\rightarrow\R^m$ is said to be <span id="notion-highlight-1"><b>one-to-one</b></span> if $T$ maps distinct vectors in $\R^n$ into distinct vectors in $\R^m$.
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul><li>Let $T$  be a linear transformation. Then the kernel of $T$ is a subspace of $\R^n$.
</li><li>Let $A$ be an $m\times n$  matrix. Then the kernel of the transformation represented by $A$ is the solution space of the linear system $Ax=0$.
</li><li>Let $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$ be a linear transformation. Then $T$ maps subspace of $\mathbb{R}^n$ into subspace of $\mathbb{R}^m$.
</li><li>Let $T:\R^n\rightarrow \mathbb{R}^m$ be a linear transformation. Then the range of $T$  is a subspace of $\R^m$.
</li><li>Let $A$ be an $m\times n$ matrix. Then the range of the transformation represented by $A$ is the subspace of $\R^m$ that is spanned by the column vectors of $A$.
</li><li>Let $T:\R^n \rightarrow \mathbb{R}^m$ be a linear transformation. Then the following are equivalent.
        1. $T$ is one-to-one
        2. $\textrm{ker}(T) = \{0\}$
</li><li>Let $A$ be an $m\times n$ matrix. Then the transformation $T_A:\R^n\rightarrow \mathbb{R}^m$ represented by $A$  is one-to-one if and only if the linear system $Ax=0$  has only the trivial solution.
</li><li>Let $A$ be an $m\times n$ matrix. Then the transformation $T_A:\R^n\rightarrow \mathbb{R}^m$ represented by $A$  is onto if and only if the linear system $Ax =b$  is consistent for every vector $b$ in $\R^m$.
</li><li>Let $T:\R^n\rightarrow\R^n$ be a linear operator on $\R^n$. Then $T$ is one-to-one if and only if it is onto.
</li><li>Let $A$ be an $n\times n$ matrix and $T_A : \mathbb{R}^n\rightarrow \mathbb{R}^n$  be the linear transformation represented by 
    $A$. Then the following are equivalent.
        1. The reduced row echelon form of $A$ is $I_n$.
        2. $A$ is expressible as a product of elementary matrices.
        3. $A$ is invertible.
        4. $Ax=0$ has only the trivial solution.
        5. $Ax=b$ has consistent for every vector $b$ in $\R^n$.
        6. $Ax=b$ has exactly one solution for every vector $b$ in $\R^n$.
        7. The column vectors of $A$
         are linearly independent.
        8. The row vectors of $A$ are linearly independet.
        9. $\textrm{det}(A)\neq0.$
        10. $\lambda=0$   is not an eigenvalue of $A$.
        11. $T_A$ is one-to-one.
        12. $T_A$ is onto.
</li></ul></details>

## 6.4 Composition and Invertibility of Linear Transformations

<details closed><summary><b>Definitions</b></summary><ul><li>Let $T_1:\R^n\rightarrow \mathbb{R}^k$ and $T_2: \mathbb{R}^k\rightarrow\R^m$ be linear transformations in which the codomain of $T_1$ is the same as the domain of $T_2$. <span id="notion-highlight-1"><b>The composition of $T_2$ with $T_1$</b></span>, denoted by $T_2\circ T_1$, is defined to be the transformation from $\R^n$ to $\R^m$ such that

        $$(T_2\circ T_1)(x) = T_2(T_1(x))$$

        for each vector $x$ in $\R^n$.

</li><li>Let

        $$D = \begin{bmatrix} \lambda_1 & 0 & \cdots & 0 & 0 \\ 0 & \lambda_2 & \cdots & 0 & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \cdots & \lambda_{n-1} & 0 \\ 0 & 0 & \cdots & 0 & \lambda_n \end{bmatrix}$$

        where $\lambda_1,\lambda_2,\cdots,\lambda_n$ are nonnegative scalars. Let $\textbf{e}_1,\textbf{e}_2,\cdots, \textbf{e}_n$  be the standard unit vectors in $\R^n$ . Multiplication by $D$ causes an expansion in the direction of $\textbf{e}_i$ if $\lambda_i >1$  and a compression in the direction of $\textbf{e}_i$  if $0\leq \lambda _i < 1$ . Multiplication by $D$ has no effect in the direction of $\textbf{e} _i$  if $\lambda_i =1$. This matrix is called <span id="notion-highlight-1"><b>scaling matrix</b></span>. 

</li><li>Let $T: \mathbb{R}^n \rightarrow \mathbb{R}^m$ be a one-to-one linear transformation. Each vector $\textbf{w}$ in the range of $T$  is the image of a unique vector $x$ in the domain of $T$ which is called the <span id="notion-highlight-1"><b>preimage</b></span> of $\textbf{w}$. A new function from the range of $T$ to $\R^n$  that maps $\textbf{w}$ into $x$ is called the <span id="notion-highlight-1"><b>inverse</b></span> of $</b></span>T$</b></span> and is denoted by $T^{-1}$. A one-to-one linear operator is called an <span id="notion-highlight-1"><b>invertible linear operator</b></span>.
</li><li>Let $A$ be an $n\times n$  invertible matrix and $T:\R^n \rightarrow \mathbb{R}^n$ be the transformation represented by $A$. If $\textbf{v}$ is a vector in $\R^n$ and $A\textbf{v} = \lambda\textbf{v}$ for some scalar $\lambda$, then $T(\textbf{v}) = \lambda\textbf{v}$, that is, $T$ maps the vector $\textbf{v}$ onto a vector that is parallel to $\textbf{v}$. If $\textbf{v} \neq0$, then the scalar $\lambda$ is called an <span id="notion-highlight-1"><b>eigenvalue</b></span> of $T$ and $\textbf{v}$ is called an <span id="notion-highlight-1"><b>eigenvector</b></span> of $T$ corresponding to $\lambda$.v
</li></ul></details>

<details closed><summary><b>Theorems</b></summary><ul><li>Let $T_1: \mathbb{R}^n\rightarrow \mathbb{R}^k$ and $T_2: \mathbb{R}^k\rightarrow\R^m$ be linear transformations. Then $T_2\circ T_1:\R^n\rightarrow\R^m$ is a linear transformation.
</li><li>Let $A$ be a $k\times n$  matrix and $B$ be an $m\times k$ matrix. Then the $m\times n$ matrix $BA$ is the standard matrix for the composition of the linear transformation represented by $B$ with the linear transformation represented by $A$.
</li><li>Let $T_1, T_2,\cdots,T_k$ be a succession of rotations about axees through the origin in $\R^3$. Then the $k$ notations can be accomplished by a single rotation about some appropriate axis through the origin in $\R^3$.
</li><li>Let $A$ be a $2\times 2$  invertible matrix. Then the linear operator represented by $A$ is a composition of shears, compressions and expansions in the direction of the coordinate axes and reflections about the coordinate axes and about the line $y=x$.
</li><li>Let $T: \mathbb{R}^n\rightarrow\R^m$ be a linear transformation. If $T$ is one-to-one, then $T^{-1}$ is one-to-one.
</li><li>Let $T: \mathbb{R}^n\rightarrow\R^n$ be a linear operator. If $T$ is one-to-one, then the standard matrix $A$ for $T$ is invertible and its inverse is the standard matrix for $T^{-1}$, i.e.,

        $$T_{A^{-1}}= (T_A)^{-1}$$

</li><li>Let $T: \mathbb{R}^2\rightarrow \mathbb{R}^2$ be an invertible linear operator. Then the following hold.
        1. The image of a line is a line
        2. The image of a line passes through the origin if and only if the original line passes through the origin
        3. The images of two lines are parallel if and only if the original lines are parallel
        4. The images of three points lie on a line if and only if the original points lie on a line. 
        5. The images of the line segment joining two points is the line segment joining the images of those points.
</li><li>Let $T: \mathbb{R}^2\rightarrow \mathbb{R}^2$ be an invertible linear operator. Then $T$ maps the unit square into a nondegenerate parallelogram that has a vertex at the origin and has adjacent sides $T(\textbf{e}_1)$  and $T(\textbf{e}_2)$. The area of the parellelogram is $|\textrm{det}(A)|$ where $A = [T(\textbf{e}_1) \mid T(\textbf{e}_2) ]$  is the standard matrix for $T$.
</li></ul></details>

---