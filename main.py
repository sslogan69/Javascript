def count_greater_elements(A, B):
    """
    Count the number of elements in B that are greater than each element in A.
    
    Args:
    A (list): List of integers.
    B (list): List of integers.
    
    Returns:
    int: The count of elements in B that are greater than each element in A.
    """
    count = 0
    for a in A:
        for b in B:
            if b > a:
                count += 1
    return count

# Example usage
A = [1, 2, 3]
B = [4, 5, 6]
result = count_greater_elements(A, B)
print(result)  # Output: 9
# Explanation: For each element in A, we count how many elements in B are greater. 
# 1 < 4, 1 < 5, 1 < 6 (3 counts)
# 2 < 4, 2 < 5, 2 < 6 (3 counts)
# 3 < 4, 3 < 5, 3 < 6 (3 counts)
# Total count is 9.