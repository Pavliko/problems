func judgeCircle(moves string) bool {
    x := 0
	y := 0
	for _, b := range []byte(inp){
		command := string(b)
		command = strings.ToLower(command)
		switch command{
		case "U":
			y+=1
		case "D":
			y+=-1
		case "L":
			x+=-1
		case "R":
			x+=1
		}
	}

	if x !=0{
		return false
	}
	if y !=0{
		return false
	}

	return true
}
