/*
JS code

Test the probability to generate each skills
*/

let prob = {
  "0":0,
  "1":0,
  "2":0,
  "3":0,
  "4":0,
  "5":0,
  "6":0,
  "7":0,
  "8":0,
  "9":0,
  "10":0,
  "11":0,
  "12":0,
  "13":0,
  "14":0,
  "15":0,
  "16":0,
  "17":0,
  "18":0,
  "19":0,
  "20":0,
}

function Normal(x){
  mu = 8
  sigma = 6
  if (x.lenght!=0){
    for (const el of x){
        temp = (1 /(sigma*Math.sqrt(2*Math.PI)) * Math.E**(-1/2*((x-mu)/sigma)**2))
        output.push(temp)}}
  else output = (1 /(sigma*Math.sqrt(2*Math.PI)) * Math.E**(-1/2*((x-mu)/sigma)**2))
  return output
}
let skills = Object.keys(prob)
skills
let arr = []
for (const s of skills) {
  value = Math.round(Normal(s) * 1000)/10
  arr.push(value)
  prob[s] = value
}
prob
