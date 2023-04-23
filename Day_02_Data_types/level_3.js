// 1. Count the number of word 'love' in this sentence.
let q1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(q1.match(/love/gi))

// 2. Use match() to count the number of all because
let q2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(q2.match(/because/gi))

/* 3. Clean the following text and find the most frequent word (hint, use replace 
and regular expressions). */
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''))

/* 4. Calculate the total annual income of the person by extracting the numbers from 
the following text. 'He earns 5000 euro from salary per month, 10000 euro annual 
bonus, 15000 euro online courses per month.' */
let q4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salaries = q4.match(/\d+/g)
let totalAnnualIncome = 0
salaries.forEach(element => {
    totalAnnualIncome += Number(element)
})
console.log(totalAnnualIncome)

