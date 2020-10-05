class Solution(object):
    def lastStoneWeight(self, stones):
        """
        :type stones: List[int]
        :rtype: int
        """

        while len(stones) > 1:
            stones = sorted(stones)[::-1]
            buf = []
            while len(stones) > 1:
                x, y = stones[:2]
                stones = stones[2:]
                if x != y:
                    buf.append(abs(x - y))
            buf.extend(stones)
            stones = buf

        return stones[0] if stones else 0
