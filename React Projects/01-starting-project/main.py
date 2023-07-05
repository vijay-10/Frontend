# def combinationalSum(A, B):
#     ans = []
#     ds = []

#     def findCombination(ind: int, target: int):
#         if ind == len(A):
#             if target == 0:
#                 ans.append(ds[:])
#             return
#         if A[ind] <= B:
#             ds.append(A[ind])
#             findCombination(ind, B - A[ind])
#             ds.pop()
#         findCombination(ind + 1, B)

#     findCombination(0, B)
#     return ans

# print(combinationalSum([7,2,6,5], 4))


def permute(arr, map, ans, sequence):
    if (len(arr) == len(sequence)):
        ans.append(sequence[:])
        return
    for i in range(len(arr)):
        if (not map[i]):
            map[i] = True
            sequence.append(arr[i])
            permute(arr, map, ans, sequence)
            sequence.pop()
            map[i] = False

arr = [1,2,3,4]
ans = []
map = [False]*len(arr)
# permute(arr, map, ans, [])
# print(ans)

def permute2(arr, index, ans):
    if index == len(arr)-1:
        ans.append(arr[:])
        return
        
    
    for i in range(index, len(arr)):
        arr[index], arr[i] = arr[i], arr[index]
        permute2(arr, index+1, ans)
        arr[index], arr[i] = arr[i], arr[index]
        
permute2(arr, 0, ans)
print(len(ans))

'''
1 2 3, 0
1 2 3, 1

2 1 3, 2

3 1 2, 3 - i

2 3 1, 3 - ii


'''
