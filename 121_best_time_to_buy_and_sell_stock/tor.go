func maxProfit(prices []int) int {
	maxProfit := 0
	for i, priceF := range prices {
		for _, priceS := range prices[i:len(prices)] {
			if priceS - priceF > maxProfit{
				maxProfit = priceS - priceF
			}
		}
	}
​
	return maxProfit
}
