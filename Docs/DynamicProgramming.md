# Dynamic Programming Classification and Guidelines

## Classification of Dynamic Programming

### 1. Top-Down vs Bottom-Up Approach

- **Top-Down (Memoization)**:
  - Start with the main problem and break it down recursively into subproblems.
  - Store solutions to subproblems to avoid redundant calculations.
  - Example: Recursive Fibonacci with memoization.

- **Bottom-Up (Tabulation)**:
  - Solve smaller subproblems first and use these solutions to build up solutions to larger subproblems.
  - Typically involves filling a DP table iteratively.
  - Example: Iterative Fibonacci using a table.

### 2. Memorization vs Tabulation

- **Memoization**:
  - Used in top-down approach.
  - Stores results of expensive function calls and reuses them.
  - Lazy, computed on demand.

- **Tabulation**:
  - Used in bottom-up approach.
  - Involves systematically filling up a DP table.
  - Eager, computed in advance.

## Guidelines for Approaching DP Problems

1. **Identify if DP is Applicable**:
   - Look for overlapping subproblems and optimal substructure.

2. **Define the State**:
   - Determine parameters that describe the state of the system.

3. **Establish the State Transition Relation**:
   - Define how states transition from one to the next.

4. **Determine the Base Case**:
   - For memoization, define the simplest version of the problem.
   - For tabulation, initialize the table with known values.

5. **Implement the Approach**:
   - Implement recursive functions for memoization.
   - Iteratively fill up the DP table for tabulation.

6. **Optimize Space Usage**:
   - Reduce space complexity by keeping only necessary parts of the DP table.
