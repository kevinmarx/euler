// Problem 5
function problem5() {
  var num = 20
  function mod(num) {
    var bool
    for (var i = 20; i > 0; i--) {
      bool = num%i
      if (bool) break
    }
    return bool
  }

  while (true) {
    var test = mod(num)
    if (!test) break
    num++
  }

  return num
}

// Problem 6
function problem6() {
  var sumOfSquares = 0
  var squareOfSums = 0

  for (var i = 1; i <= 100; i++) {
    sumOfSquares = sumOfSquares + Math.pow(i,2)
    squareOfSums = squareOfSums + i
  }

  return Math.pow(squareOfSums, 2) - sumOfSquares
}


// problem7
function problem7() {
  function listPrimes(count) {
    var primes = []
    for(var n = 2; primes.length < count; n++) {
        if(isPrime(n)) {
            primes.push(n)
        }
    }
    return primes[primes.length - 1]
  }

  function isPrime(n) {
    var max = Math.sqrt(n);
    for(var i = 2;  i <= max;  i++) {
      if(n % i === 0)
        return false
    }
    return true;
  }

  return listPrimes(10001)
}


//problem 8
function problem8() {
  var o = [
  '73167176531330624919225119674426574742355349194934',
  '96983520312774506326239578318016984801869478851843',
  '85861560789112949495459501737958331952853208805511',
  '12540698747158523863050715693290963295227443043557',
  '66896648950445244523161731856403098711121722383113',
  '62229893423380308135336276614282806444486645238749',
  '30358907296290491560440772390713810515859307960866',
  '70172427121883998797908792274921901699720888093776',
  '65727333001053367881220235421809751254540594752243',
  '52584907711670556013604839586446706324415722155397',
  '53697817977846174064955149290862569321978468622482',
  '83972241375657056057490261407972968652414535100474',
  '82166370484403199890008895243450658541227588666881',
  '16427171479924442928230863465674813919123162824586',
  '17866458359124566529476545682848912883142607690042',
  '24219022671055626321111109370544217506941658960408',
  '07198403850962455444362981230987879927244284909188',
  '84580156166097919133875499200524063689912560717606',
  '05886116467109405077541002256983155200055935729725',
  '71636269561882670428252483600823257530420752963450'
  ]

  o = o.join('').split('')

  var res = 0

  function prod(arr) {
    var res = 1
    for (var x = 0; x < arr.length; x++) {
      res = res * parseInt(arr[x], 10)
    }
    return res
  }

  for (var i = 0; i < o.length; i++) {
    var p = o.slice(i, 5 + i)
    var neu = prod(p)
    if (neu > res) res = neu
  }

  return res
}


// problem 9
function problem9() {

  function pyth(num) {

    var a = 1
    var b = 2
    var c = num-a-b

    while (a*a + b*b != c*c) {
      if (b+1 >= c) {
        a += 1
        b = a + 1
        c = num-a-b
      } else {
        b += 1
        c -= 1
      }
    }

    return a*b*c
  }

  return pyth(1000)
}

// problem 10
function problem10() {

  function listPrimes(count) {
    var primes = []
    for(var n = 2; n < count; n++) {
        if(isPrime(n)) {
            primes.push(n)
        }
    }
    return primes
  }

  function isPrime(n) {
    var max = Math.sqrt(n);
    for(var i = 2;  i <= max;  i++) {
      if(n % i === 0)
        return false
    }
    return true;
  }

  var primes = listPrimes(2000000)
  var sum  = 0

  for (var a = 0; a < primes.length; a++) {
    sum = sum + primes[a]
  }

  return sum
}
