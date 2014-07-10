
	puts "Give me a beginning year"
	beginningyear = gets.to_i
	puts "Give me an ending year"
	endingyear = gets.to_i
	array = []
	for n in beginningyear..endingyear
		if n % 400 == 0
			array.push(n)
		
		elsif n % 4 ==0 && n % 100 != 0
			array.push(n)
		end
	end
	puts array
