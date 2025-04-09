/*

    Recursive Function : 

        1.  In javascript ,  A recursive function is a function which calls itself until it reaches base condition.

        2.  It is used to solve problem that can be divided into smaller sub problems.

        3.  for Example, calculating factorial,tree traversal or flattening nested array.

        4.  Every recursive function must have a base condition to stop the recusrion, otherwise it would call itself infinitely & cause a stack overflow.

        5.  Real World Use Cases you can mention : 

            1.  Navigating file/folder structure( like recusion through a tree )

            2.  Solving Algorithmic problems (like fibonacci, factorial, permutation )

            3.  Data structure like trees & graphs ( binary tree traversal, DFS )

            4.  Flattening nested array .

        
        6.  Example : 

            1.  Factorial :                         */

                function factorial (n){
                    if(n===0)return 1;
                    
                    let res = factorial(n-1)

                    res *= n;

                    return res
                }